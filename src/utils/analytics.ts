import { pageview, type BeforeSendEvent } from "@vercel/analytics";

// Vercel Hobby has no custom events, so engagement is recorded as virtual
// page views (/reached/*, /time/*, /click/*) that show up in the Pages panel.

const OPT_OUT_KEY = "va-disable";
const SECTION_DWELL_MS = 1000;
const TIME_MARKS_S = [10, 30, 60, 120];

export const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const trackVirtual = (path: string) => {
  pageview({ path, route: path });
};

// Outcomes that aren't clicks, e.g. trackEvent("sent/contact") -> /sent/contact.
export const trackEvent = (name: string) => {
  trackVirtual(`/${name}`);
};

const isOptedOut = () => {
  try {
    return localStorage.getItem(OPT_OUT_KEY) !== null;
  } catch {
    return false;
  }
};

// ?notrack excludes this browser from analytics, ?notrack=0 re-enables it.
export const applyTrackingParams = () => {
  const notrack = new URLSearchParams(window.location.search).get("notrack");
  if (notrack === null) return;
  try {
    if (notrack === "0") {
      localStorage.removeItem(OPT_OUT_KEY);
    } else {
      localStorage.setItem(OPT_OUT_KEY, "1");
    }
  } catch {
    // Storage unavailable (e.g. private mode); nothing to persist.
  }
};

// Drops events from opted-out browsers, strips nav #hashes so they don't
// split rows, and records tagged landings (/?ref=acme) as /from/acme.
export const beforeSend = (event: BeforeSendEvent): BeforeSendEvent | null => {
  if (isOptedOut()) return null;

  const url = new URL(event.url);
  url.hash = "";
  url.searchParams.delete("notrack");
  const ref = url.searchParams.get("ref");
  if (event.type === "pageview" && url.pathname === "/" && ref) {
    const source = toSlug(ref).slice(0, 40);
    if (source) {
      url.pathname = `/from/${source}`;
      url.search = "";
    }
  }
  return { ...event, url: url.toString() };
};

export const startEngagementTracking = () => {
  // Section reach: a section counts once it has been in the upper 60% of the
  // viewport for a second, so smooth-scrolling past it on a nav jump doesn't.
  const targets = new Map<Element, string>();
  document
    .querySelectorAll<HTMLElement>("main > section[id]")
    .forEach((section) => targets.set(section, section.id));
  const footer = document.querySelector(".site-footer");
  if (footer) targets.set(footer, "end");

  const dwellTimers = new Map<Element, number>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const timer = window.setTimeout(() => {
            trackVirtual(`/reached/${targets.get(entry.target)}`);
            observer.unobserve(entry.target);
            dwellTimers.delete(entry.target);
          }, SECTION_DWELL_MS);
          dwellTimers.set(entry.target, timer);
        } else {
          window.clearTimeout(dwellTimers.get(entry.target));
          dwellTimers.delete(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -40% 0px" },
  );
  targets.forEach((_, target) => observer.observe(target));

  // Time on page, counted only while the tab is visible.
  let visibleSeconds = 0;
  const timeInterval = window.setInterval(() => {
    if (document.visibilityState !== "visible") return;
    visibleSeconds += 1;
    if (TIME_MARKS_S.includes(visibleSeconds)) {
      trackVirtual(`/time/${visibleSeconds}s`);
    }
    if (visibleSeconds >= TIME_MARKS_S[TIME_MARKS_S.length - 1]) {
      window.clearInterval(timeInterval);
    }
  }, 1000);

  // Clicks on any element marked with data-track.
  const handleClick = (event: MouseEvent) => {
    if (!(event.target instanceof Element)) return;
    const tracked = event.target.closest<HTMLElement>("[data-track]");
    if (tracked?.dataset.track) {
      trackVirtual(`/click/${tracked.dataset.track}`);
    }
  };
  document.addEventListener("click", handleClick);

  return () => {
    observer.disconnect();
    dwellTimers.forEach((timer) => window.clearTimeout(timer));
    window.clearInterval(timeInterval);
    document.removeEventListener("click", handleClick);
  };
};
