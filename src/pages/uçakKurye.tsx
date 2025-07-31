import { useState, useEffect } from 'react';
import { Clock, Shield, MapPin, Star, Zap, Phone } from 'lucide-react';
import "./motorluKurye.css";
import UcakKuryeImage from "../assets/ucakKurye.jpg";
import Footer from '../components/footer';

const UcakKurye = () => {
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
    { icon: Clock, title: "Aynı Gün Uçuş", desc: "Uygun uçuşla aynı gün teslimat" },
    { icon: Shield, title: "Sigortalı Taşıma", desc: "Tüm gönderileriniz güvencemiz altında" },
    { icon: MapPin, title: "Havaalanı Teslimatı", desc: "Hızlı havalimanı yönlendirmesi" },
    { icon: Zap, title: "Şehirlerarası Hız", desc: "İstanbul çıkışlı 81 ile teslimat" },
    { icon: Star, title: "Hassas Gönderi", desc: "Değerli ürün ve evrak taşımaya uygun" }
  ];

  return (
    <><div className="motor-kurye-wrapper">
      <section className="motor-hero">
        <div className="motor-hero-content">
          <div className={`motor-text ${isVisible ? 'visible' : ''}`}>
            <h1>Uçak Kurye <span>Hizmeti</span></h1>
            <p>Uzak mesafe gönderileriniz için en hızlı çözüm: Uçak Kurye. Aynı gün içerisinde havayolu ile şehirlerarası teslimat sağlıyoruz.</p>
            <p>Gönderiniz adresinizden alınır, havaalanına ulaştırılır ve varış şehrindeki kuryemizle son noktaya teslim edilir.</p>
            <p>Özellikle acil ve değerli gönderiler için güvenli, hızlı ve takip edilebilir bir yöntem sunar.</p>
            <div className="motor-buttons">
              <button className="secondary" onClick={() => window.location.href = "tel:+90 537 885 14 41"}>
                <Phone className="w-5 h-5" />
                Bizi Arayın
              </button>
            </div>
            <div className="motor-stats">
              <div className="stat"><div className="number">500+</div><div className="label">Uçaklı Teslimat</div></div>
              <div className="stat"><div className="number">50+</div><div className="label">İl Noktası</div></div>
              <div className="stat"><div className="number">4 Saat</div><div className="label">Ortalama Süre</div></div>
              <div className="stat"><div className="number">7/24</div><div className="label">Hizmet</div></div>
            </div>
          </div>
          <div className={`motor-image ${isVisible ? 'visible' : ''}`}>
            <img src={UcakKuryeImage} alt="Uçak Kurye Görseli" />
          </div>
        </div>
      </section>

      <section className="motor-features">
        <h2>Neden Uçak Kurye?</h2>
        <p>Mesafe fark etmeksizin en hızlı teslimat için Uçak Kurye hizmetimizden faydalanın.</p>
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
        <h2>Gönderi İçin Gerekli Bilgiler</h2>
        <ul className="text-left max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-2">
          <li>Şehirlerarası gönderileriniz için uçuş saatleri dikkate alınmalıdır.</li>
          <li>Alıcı şehir ve kişiye dair bilgiler net olmalıdır.</li>
          <li>Hassas ve yüksek değerli ürünlerde sigortalama önerilir.</li>
          <li>Erken saatlerde gönderi talebinde bulunmanız önerilir.</li>
        </ul>
      </section>
    </div><Footer /></>
  );
};

export default UcakKurye;
