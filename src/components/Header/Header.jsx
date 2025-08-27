import React, { useState } from "react";
import styles from './Header.module.css';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLinkClick = () => {
    setDropdownOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/images/logo.jpg" alt="Blata Logo" className={styles.logo} />
      </div>

      <div className={styles.headerCenter}>
        <h1>Blata Technology</h1>
        <nav className={styles.navBar}>
          <a href="#home">Home</a>

          <div
            className={styles.dropdown}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className={styles.dropbtn} onClick={handleDropdownClick}>
              Services
            </button>
            {dropdownOpen && (
              <div className={styles.dropdownContent}>
                <a href="#software" onClick={handleLinkClick}>Software Design & Development</a>
                <a href="#web" onClick={handleLinkClick}>Website Development</a>
                <a href="#mobile" onClick={handleLinkClick}>Mobile/Desktop App Development</a>
                <a href="#network" onClick={handleLinkClick}>Network Setup</a>
                <a href="#elearning" onClick={handleLinkClick}>E-Learning Solutions</a>
                <a href="#cyber" onClick={handleLinkClick}>Cyber Security solutions</a>
              </div>
            )}
          </div>

          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
