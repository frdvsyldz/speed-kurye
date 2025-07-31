import { useState, useEffect } from 'react';
import { Clock, MapPin, Phone, Zap, Shield, Star } from 'lucide-react';
import "./motorluKurye.css";
import MotoKurye from "../assets/motokurye.png"
import Footer from '../components/footer';

const MotorluKurye = () => {
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
    { icon: Clock, title: "Aynı Gün Teslimat", desc: "Siparişiniz aynı gün kapınızda" },
    { icon: Shield, title: "7/24 Güvenli Servis", desc: "Kesintisiz hizmet garantisi" },
    { icon: MapPin, title: "Takip Sistemi", desc: "Anlık konum bilgisi" },
    { icon: Zap, title: "Hızlı Erişim", desc: "İstanbul geneli 30dk'da teslimat" },
    { icon: Star, title: "Premium Hizmet", desc: "Kurumsal ve bireysel çözümler" }
  ];

  return (
    <><div className="motor-kurye-wrapper">
      <section className="motor-hero">
        <div className="motor-hero-content">
          <div className={`motor-text ${isVisible ? 'visible' : ''}`}>
            <h1>
              Motorlu Kurye <span>Hizmeti</span>
            </h1>
            <p>
              İstanbul genelindeki gönderileriniz, semtlere göre ortalama 150 ila 210 dakika içinde güvenle teslim edilir. Kurye ağımız sayesinde günün her saatinde, konumunuz fark etmeksizin gönderileriniz taşınır.
            </p>
            <p>
              Çağrı merkezimizden, web sitemizden veya mobil uygulamamız üzerinden kolayca sipariş oluşturabilirsiniz. Size en yakın motorlu kurye yönlendirilir ve teslimatınız hızlıca gerçekleşir.
            </p>
            <p>
              Teslimat bilgileri size anlık olarak e-posta ve uygulama bildirimleriyle iletilir. Hızlı ve güvenli teslimatın adresi: Speed Kurye.
            </p>
            <div className="motor-buttons">
              <button className="secondary" onClick={() => window.location.href = "tel:+90 537 885 14 41"}>
                <Phone className="w-5 h-5" />
                Bizi Arayın
              </button>
            </div>
            <div className="motor-stats">
              <div className="stat">
                <div className="number">15K+</div>
                <div className="label">Mutlu Müşteri</div>
              </div>
              <div className="stat">
                <div className="number">50K+</div>
                <div className="label">Başarılı Teslimat</div>
              </div>
              <div className="stat">
                <div className="number">30Dk</div>
                <div className="label">Ortalama Süre</div>
              </div>
              <div className="stat">
                <div className="number">7/24</div>
                <div className="label">Hizmet</div>
              </div>
            </div>
          </div>

          <div className={`motor-image ${isVisible ? 'visible' : ''}`}>
            <img src={MotoKurye} alt="Motorlu Kurye Görseli" />
          </div>
        </div>
      </section>

      <section className="motor-features">
        <h2>Neden Bizi Tercih Etmelisiniz?</h2>
        <p>
          Yılların tecrübesi ve teknolojinin gücüyle, kurye ihtiyaçlarınıza en iyi çözümü sunuyoruz.
        </p>
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div className={`feature-card ${activeFeature === index ? 'active' : ''}`} key={index}>
                <div className="icon">
                  <Icon size={28} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="motor-features">
        <h2>Gönderi Hazırlığında Dikkat Edilmesi Gerekenler</h2>
        <ul className="text-left max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-2">
          <li>Gönderiniz hazır haldeyken kurye çağırmanız teslimatı hızlandırır.</li>
          <li>Paketlemeyi düzgün yapın; adres, alıcı adı ve telefon bilgisi eksiksiz olmalıdır.</li>
          <li>Yağışlı havalarda ürünlerinizi korumak için poşetle teslim edin.</li>
          <li>Ek ücret ve detaylar için fiyatlar sayfamıza veya müşteri temsilcimize danışın.</li>
        </ul>
      </section>
    </div><Footer /></>
  );
};

export default MotorluKurye;
