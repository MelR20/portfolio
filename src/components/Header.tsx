import { useState } from "react";
import dropdownIcon from "../assets/dropdown-icon.png";
import dropdownIconOpen from "../assets/dropdown-icon-close.png";

const headerNavItems = [
  { name: "À propos", link: "#aPropos" },
  { name: "Formations", link: "#formations" },
  { name: "Projets", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const Header = () => {
  // Managing the header dropdown menu
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen);
  };

  return (
    <header className="header-container">
      <div className="header">
        <div className="header-grid">
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
          <button
            className="header-dropdown-button"
            onClick={() => {
              handleDropdown();
            }}
          >
            <img
              src={!isDropdownOpen ? dropdownIcon : dropdownIconOpen}
              alt="Menu"
              className="header-dropdown-button-icon"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
