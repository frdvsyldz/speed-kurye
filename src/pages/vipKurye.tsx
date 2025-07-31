import { useState, useEffect } from 'react';
import { Clock, Shield, MapPin, Star, Zap, Phone } from 'lucide-react';
import "./motorluKurye.css";
import VipKuryeImage from "../assets/vipKurye.png";
import Footer from '../components/footer';

const VipKurye = () => {
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
    { icon: Clock, title: "Zamanında Teslim", desc: "Tam belirlenen saat aralığında teslimat" },
    { icon: Shield, title: "Öncelikli Güvenlik", desc: "Değerli evrak ve özel gönderilere özel taşıma" },
    { icon: MapPin, title: "Konum Takibi", desc: "Canlı gönderi izleme özelliği" },
    { icon: Zap, title: "Hızlı Servis", desc: "Anında yönlendirme ve araç tahsisi" },
    { icon: Star, title: "Kişiye Özel Hizmet", desc: "Size özel kurye hizmeti" }
  ];

  return (
    <><div className="motor-kurye-wrapper">
      <section className="motor-hero">
        <div className="motor-hero-content">
          <div className={`motor-text ${isVisible ? 'visible' : ''}`}>
            <h1>VIP Kurye <span>Hizmeti</span></h1>
            <p>Özel, değerli veya hassas gönderileriniz için tamamen size özel kurye tahsis edilir. Teslimat tek bir kişiye ve öncelikli güzergâhla gerçekleştirilir.</p>
            <p>VIP Kurye hizmetimiz ile gizlilik, hız ve güvenlik bir arada sunulur. Talebinize özel rota ve zaman planlaması yapılır.</p>
            <p>Tüm süreç boyunca tarafınıza anlık bildirimlerle bilgi sağlanır.</p>
            <div className="motor-buttons">
              <button className="secondary" onClick={() => window.location.href = "tel:+90 537 885 14 41"}>
                <Phone className="w-5 h-5" />
                Bizi Arayın
              </button>
            </div>
            <div className="motor-stats">
              <div className="stat"><div className="number">1000+</div><div className="label">Özel Gönderi</div></div>
              <div className="stat"><div className="number">99%</div><div className="label">Memnuniyet</div></div>
              <div className="stat"><div className="number">60dk</div><div className="label">Ortalama Teslim</div></div>
              <div className="stat"><div className="number">7/24</div><div className="label">Hizmet</div></div>
            </div>
          </div>
          <div className={`motor-image ${isVisible ? 'visible' : ''}`}>
            <img src={VipKuryeImage} alt="VIP Kurye Görseli" />
          </div>
        </div>
      </section>

      <section className="motor-features">
        <h2>VIP Kurye Avantajları</h2>
        <p>Size özel taşıma, rota ve zaman planlaması ile eşsiz bir kurye deneyimi.</p>
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
        <h2>VIP Gönderi Hazırlığı</h2>
        <ul className="text-left max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-2">
          <li>Gönderi özel kutu veya zarfta olmalıdır.</li>
          <li>İletişim bilgileri eksiksiz hazırlanmalıdır.</li>
          <li>Zaman hassasiyetinizi belirtmeniz kurye yönlendirmesini kolaylaştırır.</li>
          <li>Teslim alacak kişinin bilgileri net olmalıdır.</li>
        </ul>
      </section>
    </div><Footer /></>
  );
};

export default VipKurye;
