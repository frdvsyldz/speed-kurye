import { Link } from "react-router-dom";
import "./Navigation.css"; // CSS dosyasını bağlayın

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/genel-bilgiler" className="nav-card">
        <div className="icon" >📚</div>
        <span>Genel Bilgiler</span>
      </Link>
      <Link to="/kayit-konaklama" className="nav-card">
        <div className="icon" >🏨</div>
        <span>Kayıt & Konaklama</span>
      </Link>
      <Link to="/bilimsel-program" className="nav-card">
        <div className="icon" >📖</div>
        <span>Bilimsel Program</span>
      </Link>
      <Link to="/bildiri-gonderimi" className="nav-card">
        <div className="icon" >📬</div>
        <span>Bildiri Gönderimi</span>
      </Link>
    </div>
  );
};

export default Navigation;