import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { config } from "../../config";
import { DownloadIcon, MenuIcon, CloseIcon, MoonIcon, SunIcon } from "../ui/Icons";
import "./Header.css";

const navItems = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "work-experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

// Every section, so the highlight clears while Education or Certifications
// (which have no nav link) are in view.
const sectionIds = [
  "projects",
  "about",
  "work-experience",
  "skills",
  "education",
  "certifications",
  "contact",
];

const SCROLLED_AFTER_PX = 24;
const THEME_KEY = "theme";

type Theme = "dark" | "light";

const getTheme = (): Theme => {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === "dark" || chosen === "light") return chosen;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getTheme);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > SCROLLED_AFTER_PX);
    const line = window.innerHeight * 0.35;
    let current = "";
    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= line) current = id;
    }
    setActive(current);
  });

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Storage unavailable (e.g. private mode); the choice lasts this visit.
    }
    setTheme(next);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="top" className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <a className="header-brand" href="#overview">
          <img src="/logo.svg" alt="" width="36" height="36" />
          <span>{config.name}</span>
        </a>

        <nav className="header-nav" aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className="header-link"
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  data-track={`nav/${item.id}`}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      className="header-underline"
                      layoutId="header-underline"
                      transition={{ duration: 0.24, ease: [0.2, 0.7, 0.2, 1] }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="icon-btn header-theme"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>

        <a
          className="btn btn-secondary btn-small header-resume"
          href={config.resumeUrl}
          download={config.resumeFileName}
          data-track="resume/header"
        >
          <DownloadIcon size={16} />
          Resume
        </a>

        <button
          type="button"
          className="icon-btn header-menu-btn"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label="Menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen && (
        <nav id="site-menu" className="header-menu" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="header-menu-link"
              href={`#${item.id}`}
              onClick={closeMenu}
              data-track={`nav/${item.id}`}
            >
              {item.label}
            </a>
          ))}
          <a
            className="btn btn-secondary header-menu-resume"
            href={config.resumeUrl}
            download={config.resumeFileName}
            onClick={closeMenu}
            data-track="resume/header"
          >
            <DownloadIcon />
            Resume
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
