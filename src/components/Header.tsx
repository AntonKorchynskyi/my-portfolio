const navItems = [
  { href: "#overview", label: "Overview" },
  { href: "#overview-links", label: "Links" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#work-experience", label: "Work Experience" },
  { href: "#education", label: "Education" },
  { href: "#form", label: "Contact" },
];

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#overview">
          <span className="brand-name">Anton Korchynskyi</span>
          <span className="brand-role">Web Developer | Full-Stack & Cloud</span>
        </a>
        <nav aria-label="Primary navigation" className="main-links">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
