import { useState, useEffect } from 'react';
import { Clock, MapPin, Phone, Zap, Shield, Star } from 'lucide-react';
import "./motorluKurye.css";
import AracliKuryeImage from "../assets/araçlıkurye.png";
import Footer from '../components/footer';

const AracliKurye = () => {
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
    { icon: Clock, title: "Geniş Hacimli Taşıma", desc: "Motorla taşınamayan gönderileriniz için ideal" },
    { icon: Shield, title: "Güvenli Teslimat", desc: "Araç içi koruma ve takip sistemi" },
    { icon: MapPin, title: "Anlık Takip", desc: "Gönderinizin konumu her an elinizde" },
    { icon: Zap, title: "Zamanında Ulaşım", desc: "Trafiğe takılmadan teslimat" },
    { icon: Star, title: "Kurumsal Çözüm", desc: "Şirketlere özel araçlı lojistik desteği" }
  ];

  return (
    <><div className="motor-kurye-wrapper">
      <section className="motor-hero">
        <div className="motor-hero-content">
          <div className={`motor-text ${isVisible ? 'visible' : ''}`}>
            <h1>
              Araçlı Kurye <span>Hizmeti</span>
            </h1>
            <p>
              Büyük hacimli ve ağır gönderileriniz için ideal çözüm: Araçlı Kurye. İstanbul genelinde özel filo desteği ile hızlı, güvenli ve sigortalı taşıma hizmeti sağlıyoruz.
            </p>
            <p>
              Çağrı merkezimizden, web sitemizden veya mobil uygulamamızdan kolayca sipariş oluşturabilirsiniz. Gönderinizin boyutuna uygun araç yönlendirilerek adresinizden teslim alınır.
            </p>
            <p>
              Tüm süreç boyunca gönderiniz takip edilir ve teslimat bilgileri anlık olarak size bildirilir. Speed Kurye ile zamanında ve sorunsuz teslimatın keyfini çıkarın.
            </p>
            <div className="motor-buttons">
              <button className="secondary" onClick={() => window.location.href = "tel:+90 537 885 14 41"}>
                <Phone className="w-5 h-5" />
                Bizi Arayın
              </button>
            </div>
            <div className="motor-stats">
              <div className="stat">
                <div className="number">5K+</div>
                <div className="label">Araçlı Teslimat</div>
              </div>
              <div className="stat">
                <div className="number">100+</div>
                <div className="label">Kurumsal Müşteri</div>
              </div>
              <div className="stat">
                <div className="number">90dk</div>
                <div className="label">Ortalama Süre</div>
              </div>
              <div className="stat">
                <div className="number">7/24</div>
                <div className="label">Hizmet</div>
              </div>
            </div>
          </div>

          <div className={`motor-image ${isVisible ? 'visible' : ''}`}>
            <img src={AracliKuryeImage} alt="Araçlı Kurye Görseli" />
          </div>
        </div>
      </section>

      <section className="motor-features">
        <h2>Neden Araçlı Kurye?</h2>
        <p>
          Büyük, hassas veya motorla taşınamayacak gönderiler için uzman çözüm ortağınız Speed Kurye.
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
          <li>Gönderinizin araca uygun şekilde paketlenmiş olması önemlidir.</li>
          <li>Adres, alıcı adı ve iletişim bilgileri eksiksiz yazılmalıdır.</li>
          <li>Taşınacak ürünün hacmini doğru belirtmeniz araç seçimini kolaylaştırır.</li>
          <li>Fiyatlandırma ve araç tipi için destek ekibimizle iletişime geçebilirsiniz.</li>
        </ul>
      </section>
    </div><Footer /></>
  );
};

export default AracliKurye;
