import { Mail, Phone, Truck, Instagram, MessageCircle, ArrowUp } from "lucide-react";
import "./footer.css";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Marka Bölümü */}
          <div className="footer-brand">
            <div className="logo">
              <Truck size={28} />
              <span>SpeedKurye</span>
            </div>
            <p>
              Türkiye'nin en güvenilir kurye hizmeti. Hızlı, güvenli ve profesyonel teslimat çözümleri sunar.
            </p>
            <div className="social-icons">
              <a href="https://www.instagram.com/speedkurye_/?igsh=bzJoa2ljMHQwZ3o5&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/905378851441" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Hizmetler</h4>
              <ul>
                <li><a href="/motorlu-kurye">Motorlu Kurye</a></li>
                <li><a href="/aracli-kurye">Araçlı Kurye</a></li>
                <li><a href="/vip-kurye">VIP Kurye</a></li>
                <li><a href="/ucak-kurye">Uçak Kurye</a></li>
                <li><a href="/sehirlerarasi-kurye">Şehirler Arası</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>İletişim</h4>
              <div className="contact-info">
                <a href="tel:+905378851441">
                  <Phone size={18} />
                  +90 537 885 14 41
                </a>
                <a href="mailto:info@speedkurye.com">
                  <Mail size={18} />
                  info@speedkurye.com
                </a>
              </div>
            </div>
          </div>
        </div>

        
        <div className="footer-bottom">
          <p>&copy; 2025 SpeedKurye. Tüm hakları saklıdır. | Hazırlayan: Firdevs Yıldız</p>
          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Yukarı çık">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
