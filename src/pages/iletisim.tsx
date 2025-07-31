import { useEffect, useState } from "react";
import "./iletisim.css";
import { Phone, Mail, MapPin } from "lucide-react";
import contactImage from "../assets/iletisim.png";
import Footer from "../components/footer";

const Iletisim = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <><div className={`contact-wrapper ${isVisible ? "visible" : ""}`}>
          <section className="contact-hero">
              <div className="contact-image">
                  <img src={contactImage} alt="İletişim" />
              </div>
              <div className="contact-text">
                  <h1>Bizimle İletişime Geçin</h1>
                  <p>
                      Her türlü soru, öneri ya da destek talepleriniz için bize aşağıdaki
                      iletişim kanallarından ulaşabilirsiniz.
                  </p>
                  <ul className="contact-info">
                      <li>
                          <Phone size={18} /> <strong>Telefon:</strong>{" "}
                          <a href="tel:+905378851441">+90 537 885 14 41</a>
                      </li>
                      <li>
                          <Mail size={18} /> <strong>E-Posta:</strong>{" "}
                          <a href="mailto:info@speedkurye.com.tr">info@speedkurye.com.tr</a>
                      </li>
                      <li>
                          <MapPin size={18} /> <strong>Adres:</strong>{" "}
                          İstanbul, Türkiye
                      </li>
                  </ul>
              </div>
          </section>
          <section className="help-section">
              <h2>Size Nasıl Yardımcı Olabiliriz?</h2>
              <div className="faq-column">
                  <div className="faq-card">
                      <h3>Kurye ne kadar sürede gelir?</h3>
                      <p>Genellikle 30 dakika içinde adresinize en yakın kurye yönlendirilir.</p>
                  </div>
                  <div className="faq-card">
                      <h3>Gece saatlerinde çalışıyor musunuz?</h3>
                      <p>7/24 hizmet sunuyoruz. Gece kurye talebiniz için bize ulaşabilirsiniz.</p>
                  </div>
                  <div className="faq-card">
                      <h3>Hangi bölgelerde hizmet veriyorsunuz?</h3>
                      <p>İstanbul geneli ve şehirlerarası teslimat hizmetlerimiz mevcuttur.</p>
                  </div>
                  <div className="faq-card">
                      <h3>Kurye ücretleri nasıl belirleniyor?</h3>
                      <p>Mesafeye ve teslimat türüne göre fiyatlandırma yapılır. Detaylar için bizi arayın.</p>
                  </div>
              </div>
          </section>



      </div><Footer /></>
  );
};

export default Iletisim;
