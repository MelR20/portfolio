const headerNavItems = [
  { name: "À propos", link: "#aPropos" },
  { name: "Formations", link: "#formations" },
  { name: "Projets", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const Header = () => {
  return (
    <header className="header">
      <div className="desktop-header">
        <div className="desktop-header-grid grid">
          <div className="header-logo">
            <a href="/" className="header-logo-link">
              <h1 className="logo-name">Mélissa Raymond</h1>
            </a>
          </div>
          <div className="header-nav">
            <ul className="header-nav-content">
              {headerNavItems.map((item, index) => (
                <li key={index} className="header-nav-item">
                  <a href={item.link} className="header-nav-item-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
