import { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo" aria-label="Speed Kurye Ana Sayfa" onClick={closeMenu}>
          <img src="/logo.png" alt="Speed Kurye Logo" />
        </a>

        <nav className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li className="dropdown">
            <a href="#hizmetler" className="nav-link" onClick={closeMenu}>Hizmetlerimiz</a>
            <ul className="dropdown-menu">
              <li><Link to="/hizmetler" onClick={closeMenu}>Hizmetler</Link></li>
              <li><Link to="/motorlu-kurye" onClick={closeMenu}>Motorlu Kurye</Link></li>
              <li><Link to="/aracli-kurye" onClick={closeMenu}>Araçlı Kurye</Link></li>
              <li><Link to="/vip-kurye" onClick={closeMenu}>VIP Kurye</Link></li>
              <li><Link to="/ucak-kurye" onClick={closeMenu}>Uçak Kurye</Link></li>
              <li><Link to="/gece-kurye" onClick={closeMenu}>Gece Kurye</Link></li>
              <li><Link to="/sehirlerarasi-kurye" onClick={closeMenu}>Şehirlerarası Kurye</Link></li>
            </ul>
          </li>

          <a href="#hakkimizda" className="nav-link" onClick={closeMenu}>Hakkımızda</a>
          <a href="#iletisim" className="nav-link" onClick={closeMenu}>İletişim</a>
          <a
            href="https://www.instagram.com/speedkurye_/?igsh=bzJoa2ljMHQwZ3o5&utm_source=qr"
            target="_blank"
            rel="noopener"
            className="nav-icon"
            onClick={closeMenu}
            aria-label="Instagram"
          >
            <img src="/instagram.svg" alt="Instagram" />
          </a>
          <a
            href="https://wa.me/905378851441"
            target="_blank"
            rel="noopener"
            className="nav-icon"
            onClick={closeMenu}
            aria-label="WhatsApp"
          >
            <img src="/whatsapp.svg" alt="WhatsApp" />
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Mobil Menü"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;
