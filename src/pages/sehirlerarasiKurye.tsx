import { useState, useEffect } from 'react';
import { Clock, Shield, MapPin, Zap, Star, Phone } from 'lucide-react';
import "./motorluKurye.css";
import SehirlerarasiImage from "../assets/sehirlerarasiKurye.png";
import Footer from '../components/footer';

const SehirlerarasiKurye = () => {
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
    { icon: Clock, title: "Hızlı Mesafe Kat Etme", desc: "İstanbul çıkışlı 81 ile kurye hizmeti" },
    { icon: Shield, title: "Güvenli Teslim", desc: "Araç içi takip ve sigortalama" },
    { icon: MapPin, title: "Anlık Bildirim", desc: "İl bazında canlı takip özelliği" },
    { icon: Zap, title: "Doğrudan Teslim", desc: "Ara aktarma olmadan doğrudan alıcıya" },
    { icon: Star, title: "Kurumsal Uyum", desc: "Sözleşmeli şehirlerarası gönderi sistemi" }
  ];

  return (
    <><div className="motor-kurye-wrapper">
      <section className="motor-hero">
        <div className="motor-hero-content">
          <div className={`motor-text ${isVisible ? 'visible' : ''}`}>
            <h1>Şehirlerarası Kurye <span>Hizmeti</span></h1>
            <p>İstanbul merkezli şehirlerarası kurye hizmetimiz ile Türkiye'nin her noktasına güvenli ve hızlı teslimat sağlıyoruz.</p>
            <p>Geniş araç filomuz ve planlı rotalarımız sayesinde gönderiniz doğru zamanda alıcıya ulaşır.</p>
            <p>Şehir fark etmeksizin kapıdan kapıya hizmet sunarız.</p>
            <div className="motor-buttons">
              <button className="secondary" onClick={() => window.location.href = "tel:+90 537 885 14 41"}>
                <Phone className="w-5 h-5" />
                Bizi Arayın
              </button>
            </div>
            <div className="motor-stats">
              <div className="stat"><div className="number">81</div><div className="label">İle Teslim</div></div>
              <div className="stat"><div className="number">10K+</div><div className="label">Başarılı Teslimat</div></div>
              <div className="stat"><div className="number">24 Saat</div><div className="label">Max Teslim Süresi</div></div>
              <div className="stat"><div className="number">7/24</div><div className="label">Destek</div></div>
            </div>
          </div>
          <div className={`motor-image ${isVisible ? 'visible' : ''}`}>
            <img src={SehirlerarasiImage} alt="Şehirlerarası Kurye Görseli" />
          </div>
        </div>
      </section>

      <section className="motor-features">
        <h2>Neden Şehirlerarası Kurye?</h2>
        <p>Şehir fark etmeksizin güvenilir ve hızlı teslimatın yolu Speed Kurye’den geçer.</p>
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
  <h2>Hizmet Verdiğimiz İller</h2>
  <p>Speed Kurye olarak İstanbul merkezli çıkışlarla aşağıdaki 81 ile şehirlerarası kurye hizmeti sunmaktayız:</p>
  <div className="iller-grid">
    {[
      "Adana","Adıyaman","Afyonkarahisar","Ağrı","Amasya","Ankara","Antalya","Artvin","Aydın","Balıkesir",
      "Bilecik","Bingöl","Bitlis","Bolu","Burdur","Bursa","Çanakkale","Çankırı","Çorum","Denizli",
      "Diyarbakır","Edirne","Elazığ","Erzincan","Erzurum","Eskişehir","Gaziantep","Giresun","Gümüşhane","Hakkari",
      "Hatay","Isparta","Mersin","İstanbul","İzmir","Kars","Kastamonu","Kayseri","Kırklareli","Kırşehir",
      "Kocaeli","Konya","Kütahya","Malatya","Manisa","Kahramanmaraş","Mardin","Muğla","Muş","Nevşehir",
      "Niğde","Ordu","Rize","Sakarya","Samsun","Siirt","Sinop","Sivas","Tekirdağ","Tokat",
      "Trabzon","Tunceli","Şanlıurfa","Uşak","Van","Yozgat","Zonguldak","Aksaray","Bayburt","Karaman",
      "Kırıkkale","Batman","Şırnak","Bartın","Ardahan","Iğdır","Yalova","Karabük","Kilis","Osmaniye",
      "Düzce"
    ].map((il, index) => (
      <span key={index} className="il-item">{il}</span>
    ))}
  </div>
</section>

    </div><Footer /></>
  );
};

export default SehirlerarasiKurye;
