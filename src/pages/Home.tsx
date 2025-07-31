import React, { useEffect, useState } from 'react';
import { Truck, ShieldCheck, MapPin, Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import './home.css';
import OrderForm from '../components/orderform'
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';

<Helmet>
  <title>Speed Kurye | İstanbul İçi ve Şehirlerarası Kurye Hizmeti</title>
  <meta name="description" content="İstanbul, Kocaeli ve çevresine hızlı, güvenli kurye hizmetleri. Motorlu kurye, araçlı kurye, gece ve VIP teslimatlar." />
  <meta name="robots" content="index, follow" />
  <meta name="keywords" content="kurye, motorlu kurye, araçlı kurye, istanbul kurye, şehirlerarası kurye, vip kurye" />
</Helmet>

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}


const Homepage: React.FC = () => {
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features: FeatureCardProps[] = [
    {
      icon: <Truck size={40} />,
      title: "Hızlı Teslimat",
      description: "Aynı gün teslimat ile zamanında kurye çözümleri. 2 saat içinde ekspres teslimat seçeneği.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Güvenli Taşıma",
      description: "Sigortalı gönderim ve profesyonel taşıma garantisi. %100 güvenli teslimat.",
    },
    {
      icon: <MapPin size={40} />,
      title: "Şehirler Arası",
      description: "81 ilde aktif, geniş teslimat ağıyla hizmetinizdeyiz. Türkiye'nin her yerine ulaşım.",
    }
  ];

 

  const stats = [
    { number: "50K+", label: "Mutlu Müşteri" },
    { number: "1M+", label: "Başarılı Teslimat" },
    { number: "81", label: "Şehir Kapsamı" },
    { number: "24/7", label: "Müşteri Desteği" }
  ];

  return (
    <>
  
      <title>SpeedKurye - Hızlı ve Güvenli Teslimat | Türkiye Geneli Kurye Hizmeti</title>
      <meta name="description" content="SpeedKurye - Türkiye genelinde hızlı, güvenli ve profesyonel kurye hizmeti. Aynı gün teslimat, sigortalı gönderim, 81 ilde aktif hizmet." />
      <meta name="keywords" content="kurye, hızlı teslimat, güvenli taşıma, ekspres kurye, türkiye kurye, aynı gün teslimat" />
      
      <main className="homepage">
        
      
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <div className="hero-badge">
                  <CheckCircle size={16} />
                  Türkiye'nin En Hızlı Kurye Hizmeti
                </div>
                <h1>Hızlı ve Güvenli Teslimat</h1>
                <p>
                  Türkiye genelinde ekspres kurye hizmeti ile zamanında ve güvenilir teslimat sunuyoruz. 
                  Profesyonel ekibimiz ve modern teknolojimizle her türlü kurye ihtiyacınıza çözüm üretiyoruz.
                </p>
                <div className="hero-buttons">
                  <a href="#hizmetler" className="btn btn-primary">
                    Hizmetlerimizi İncele
                    <ArrowRight size={20} />
                  </a>
                  <a href="tel:+905378851441" className="btn btn-secondary">
                    <Phone size={20} />
                    Hemen Ara
                  </a>
                   <a href="https://wa.me/905378851441" className="btn btn-primary">
                    <Phone size={20} />
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className="hero-image">
                <OrderForm />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="hizmetler" className="features">
          <div className="container">
            <div className="section-header">
              <h2>Neden SpeedKurye?</h2>
              <p>Müşteri memnuniyeti odaklı hizmet anlayışımızla sektörde öncü konumdayız</p>
            </div>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       

        {/* CTA Section */}
        <section className="cta">
          <div className="container">
            <div className="cta-content">
              <h2>Hemen Teslimat Talebinizi Oluşturun</h2>
              <p>
                Profesyonel kurye ekibimiz sizin için hazır. 
                Hızlı ve güvenli teslimat için şimdi iletişime geçin.
              </p>
              <div className="cta-buttons">
                <a href="tel:+905001234567" className="btn btn-primary btn-large">
                  <Phone size={24} />
                  Hemen Ara
                </a>
                <a href="mailto:info@speedkurye.com" className="btn btn-secondary btn-large">
                  <Mail size={24} />
                  E-posta Gönder
                </a>
              </div>
            </div>
          </div>
        </section>
<Footer/>
      
      </main>
    </>
  );
};

export default Homepage;