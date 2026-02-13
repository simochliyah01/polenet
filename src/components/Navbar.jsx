import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-pole">Pole</span>
          <span className="logo-net">net</span>
          <span className="logo-slogan">NETTOYAGE</span>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Menu Links */}
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#accueil" onClick={closeMenu}>Accueil</a></li>
          <li><a href="#about" onClick={closeMenu}>À propos</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#valeurs" onClick={closeMenu}>Valeurs</a></li>
          <li><a href="#avantages" onClick={closeMenu}>Avantages</a></li>
          <li><a href="#processus" onClick={closeMenu}>Processus</a></li>
          <li><a href="#contact" className="btn-contact" onClick={closeMenu}>Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;