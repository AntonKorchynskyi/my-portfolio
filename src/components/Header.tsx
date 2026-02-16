const navItems = [
  { href: "#overview", label: "Overview" },
  { href: "#skills", label: "Skills" },
  { href: "#work-experience", label: "Work Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#now", label: "Now" },
  { href: "#links", label: "Links" },
  { href: "#form", label: "Contact" },
];

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#overview">
          <span className="brand-name">Anton Korchynskyi</span>
          <span className="brand-role">Developer | Full-Stack & Cloud</span>
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
