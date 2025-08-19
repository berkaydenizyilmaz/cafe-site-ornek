import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
          // Hakkımızda, menü, galeri ve iletişim sayfalarında her zaman koyu header olsun
    if (location.pathname === '/about' || location.pathname === '/menu' || location.pathname === '/gallery' || location.pathname === '/contact') {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 50);
    }
    };

    // Sayfa yüklendiğinde ve scroll sırasında çalışsın
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <Link to="/" className="logo-text" onClick={closeMenu}>
          CAFE NOVA
        </Link>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link 
              to="/menu" 
              className={`nav-link ${location.pathname === '/menu' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Menü
            </Link>
          </li>
          <li>
            <Link 
              to="/gallery" 
              className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Galeri
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              İletişim
            </Link>
          </li>
        </ul>

        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
