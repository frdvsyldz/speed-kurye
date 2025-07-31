import { useState, useEffect } from 'react';
import { Clock, Shield, MapPin, Zap, Star, Phone } from 'lucide-react';
import "./motorluKurye.css";
import GeceKuryeImage from "../assets/geceKurye.png";
import Footer from '../components/footer';

const GeceKurye = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Clock, title: "Gece Teslimat", desc: "23:00 - 06:00 arasında hizmet" },
    { icon: Shield, title: "Güvenlik Önceliği", desc: "Gece taşımacılığında yüksek güvenlik" },
    { icon: MapPin, title: "Anlık Konum", desc: "Gece teslimatlarınız takipte" },
    { icon: Zap, title: "Acil Çözümler", desc: "Gece doğan acil ihtiyaçlara anında müdahale" },
    { icon: Star, title: "Kesintisiz Hizmet", desc: "Haftanın 7 günü, günün 24 saati kurye" }
  ];

  return (
    <><div className="motor-kurye-wrapper">
      <section className="motor-hero">
        <div className="motor-hero-content">
          <div className={`motor-text ${isVisible ? 'visible' : ''}`}>
            <h1>Gece Kurye <span>Hizmeti</span></h1>
            <p>Gece saatlerinde de gönderilerinizin güvenle teslim edilmesini sağlıyoruz. İstanbul’un tüm bölgelerinde 23:00 - 06:00 saatleri arasında kesintisiz kurye hizmeti veriyoruz.</p>
            <p>Gece doğan acil ihtiyaçlar için profesyonel kadromuzla görev başındayız.</p>
            <p>Gece kuryelerimiz rota, güvenlik ve bildirim sistemleriyle desteklenmektedir.</p>
            <div className="motor-buttons">
              <button className="secondary" onClick={() => window.location.href = "tel:+90 537 885 14 41"}>
                <Phone className="w-5 h-5" />
                Bizi Arayın
              </button>
            </div>
            <div className="motor-stats">
              <div className="stat"><div className="number">2K+</div><div className="label">Gece Teslimat</div></div>
              <div className="stat"><div className="number">20dk</div><div className="label">Ortalama Yanıt</div></div>
              <div className="stat"><div className="number">100%</div><div className="label">Ulaşım Başarısı</div></div>
              <div className="stat"><div className="number">7/24</div><div className="label">Destek</div></div>
            </div>
          </div>
          <div className={`motor-image ${isVisible ? 'visible' : ''}`}>
            <img src={GeceKuryeImage} alt="Gece Kurye Görseli" />
          </div>
        </div>
      </section>

      <section className="motor-features">
        <h2>Gece Kurye Avantajları</h2>
        <p>Gecenin her saatinde gönderinizin güvenliğini ve zamanında teslimatını sağlıyoruz.</p>
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div className={`feature-card ${activeFeature === index ? 'active' : ''}`} key={index}>
                <div className="icon"><Icon size={28} /></div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="motor-features">
        <h2>Gece Teslimat İçin Bilgilendirme</h2>
        <ul className="text-left max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-2">
          <li>Gece saatlerinde teslimat için ön rezervasyon önerilir.</li>
          <li>Adres ve alıcı bilgileri eksiksiz ve net olmalıdır.</li>
          <li>Değerli ürünlerde ek güvenlik önlemleri alınabilir.</li>
          <li>Hızlı ulaşım için konum paylaşımı önerilir.</li>
        </ul>
      </section>
    </div><Footer /></>
  );
};

export default GeceKurye;
