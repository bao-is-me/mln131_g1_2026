import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import partyFlag from '../assets/party-flag.jpg';

const navItems = [
  { to: '/', label: 'Trang chủ', end: true },
  { to: '/game', label: 'Trò chơi' }
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 16);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const handleNavClick = (item, event) => {
    closeMenu();

    if (item.to === '/' && location.pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`} id="top">
        <div className="container nav-inner">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <span className="nav-logo-mark" aria-hidden="true">
              <img src={partyFlag} alt="" className="nav-logo-emblem" />
            </span>
            <span className="nav-logo-copy">
              <strong>Chủ nghĩa xã hội khoa học</strong>
            </span>
          </Link>

          <div className="nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={(event) => handleNavClick(item, event)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            className={`nav-hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label="Mở menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`.trim()}
            onClick={(event) => handleNavClick(item, event)}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Navbar;
