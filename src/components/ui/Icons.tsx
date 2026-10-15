// Icons from the design handoff. All are decorative (aria-hidden); the
// surrounding link or button carries the accessible name.

interface IconProps {
  size?: number;
}

const stroke = (size: number, width = 1.8) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: width,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

const filled = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
});

export const SunIcon = ({ size = 18 }: IconProps) => (
  <svg {...stroke(size)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

export const MoonIcon = ({ size = 18 }: IconProps) => (
  <svg {...stroke(size)}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
);

export const DownloadIcon = ({ size = 18 }: IconProps) => (
  <svg {...stroke(size, 2)}>
    <path d="M12 4v11" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 20h14" />
  </svg>
);

export const MenuIcon = ({ size = 18 }: IconProps) => (
  <svg {...stroke(size)}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);

export const CloseIcon = ({ size = 18 }: IconProps) => (
  <svg {...stroke(size)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const ArrowRightIcon = ({ size = 18 }: IconProps) => (
  <svg {...stroke(size, 2)}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const ArrowUpRightIcon = ({ size = 16 }: IconProps) => (
  <svg {...stroke(size)}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const GitHubIcon = ({ size = 18 }: IconProps) => (
  <svg {...filled(size)}>
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

export const LinkedInIcon = ({ size = 18 }: IconProps) => (
  <svg {...filled(size)}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm7 0h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1v5.35h-4v-4.74c0-1.13-.02-2.59-1.58-2.59-1.58 0-1.82 1.23-1.82 2.5v4.83h-4v-11Z" />
  </svg>
);

export const MailIcon = ({ size = 18 }: IconProps) => (
  <svg {...stroke(size)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const WindowIcon = ({ size = 16 }: IconProps) => (
  <svg {...stroke(size)}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18" />
    <path d="M7 13h6M7 16h4" />
  </svg>
);

export const CheckIcon = ({ size = 16 }: IconProps) => (
  <svg {...stroke(size, 2)}>
    <path d="m5 12 5 5 9-10" />
  </svg>
);

export const CopyIcon = ({ size = 16 }: IconProps) => (
  <svg {...stroke(size)}>
    <rect x="8" y="8" width="12" height="12" rx="2" />
    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
  </svg>
);
