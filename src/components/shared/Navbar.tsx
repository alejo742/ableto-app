import React from 'react';
import './Navbar.css';

export default function Navbar() {

  const openMobileMenu = () => {
    const mobileMenuOverlay = document.querySelector('.mobile-main-navbar-overlay');
    mobileMenuOverlay?.classList.add('active');
    setTimeout(() => {
      mobileMenuOverlay?.classList.add('visible')
    }, 300)
  };

  const closeMobileMenu = () => {
    const mobileMenuOverlay = document.querySelector('.mobile-main-navbar-overlay');
    mobileMenuOverlay?.classList.remove('visible');
    setTimeout(() => {
      mobileMenuOverlay?.classList.remove('active')
    }, 500)
  };

  return (
    <div className="navbar-wrapper">
      {/* desktop */}
      <nav className="main-navbar">
        <a href="/"><img src="/images/ableto-transparent.png" alt="AbleTo Main Logo Blue"/></a>
        <ul className="main-navbar-links">
            {/* <li className="navbar-link"><a href="#">Nosotros</a></li> */}
            <li className="navbar-link"><a href="/contacto">Contacto</a></li>
            <li className="main-navbar-button"><a href="/productos">Productos</a></li>
        </ul>
        <div className="navbar-burger" onClick={openMobileMenu}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
        </div>
      </nav>

      {/* mobile */}
      <div className="mobile-main-navbar-overlay">
        <div className="mobile-main-navbar">
            <div className="close-mobile-menu" onClick={closeMobileMenu}>
              <div className="close-menu-line"></div>
              <div className="close-menu-line"></div>
            </div>
            <ul className="mobile-navbar-links">
              <li>
                  <a href="/productos">Productos</a>
              </li>
              {/* <li>
                  <a href="#">Nosotros</a>
              </li> */}
              <li>
                  <a href="/contacto">Contacto</a>
              </li>
              <li className="mobile-navbar-button">
                  <a href="#">Accede</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
};