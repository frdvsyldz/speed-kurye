import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container">
                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
                <div className={`nav-links-container ${isOpen ? "open" : ""}`}>
                    <ul className="nav-links">
                        <li><Link to="/">Ana Sayfa</Link></li>
                        <li><Link to="/davet">Davet</Link></li>
                        <li><Link to="/kurullar">Kurullar</Link></li>
                        <li><Link to="/ana-konular">Ana Konular</Link></li>
                        <li><Link to="/kayit-konaklama">Kayıt & Konaklama</Link></li>
                        <li><Link to="/bilimsel-program">Bilimsel Program</Link></li>
                        <li><Link to="/bildiri-gonderimi">Bildiri Gönderimi</Link></li>
                        <li><Link to="/genel-bilgiler">Genel Bilgiler</Link></li>
                        <li><Link to="/iletisim">İletişim</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
