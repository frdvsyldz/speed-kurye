import './services.css';
import { Bike, Truck, Crown, MoonStar, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet';

<Helmet>
  <title>Motorlu Kurye | İstanbul İçi Hızlı Kurye Hizmeti</title>
  <meta name="description" content="İstanbul içi saatlik motorlu kurye hizmeti. Aynı gün teslimat, güvenli ve hızlı çözümler." />
</Helmet>

const services = [
  {
    icon: <Bike size={40} color="#22c55e" />,
    title: 'Motorlu Kurye',
    desc: 'İstanbul içi saatlik teslimatlar ile hızlı çözümler.',
    link: '/motorlu-kurye',
  },
  {
    icon: <Truck size={40} color="#22c55e" />,
    title: 'Araçlı Kurye',
    desc: 'Büyük ve hacimli gönderiler için şehir içi ve dışı hizmet.',
    link: '/aracli-kurye',
  },
  {
    icon: <Crown size={40} color="#22c55e" />,
    title: 'VIP Kurye',
    desc: 'Kişiye özel, anında ve tek paket teslimat.',
    link: '/vip-kurye',
  },
  {
    icon: <MoonStar size={40} color="#22c55e" />,
    title: 'Gece Kurye',
    desc: 'Gece saatlerinde özel teslimat hizmeti.',
    link: '/gece-kurye',
  },
  {
    icon: <MapPin size={40} color="#22c55e" />,
    title: 'Şehirlerarası Kurye',
    desc: 'Tüm Türkiye’ye ertesi gün kurye hizmeti.',
    link: '/sehirlerarasi-kurye',
  },
  {
    icon: <Briefcase size={40} color="#22c55e" />,
    title: 'Uçak Kurye',
    desc: 'Acil şehirlerarası gönderiler için aynı gün uçakla teslimat hizmeti.',
    link: '/ucak-kurye',
  },
];

const Services = () => {
  return (
    <><section className="services">
      <div className="services-header">
        <h1>HİZMETLERİMİZ</h1>
        <p>SpeedKurye olarak bireysel ve kurumsal müşterilerimize şehir içi ve şehirlerarası ekspres kurye çözümleri sunuyoruz.</p>
        <p className="subtext">Zamanınızın değerli olduğunu biliyoruz. Her türlü ihtiyacınız için güvenli, hızlı ve profesyonel teslimatların adresi: SpeedKurye.</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <Link to={service.link} className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </Link>
        ))}
      </div>

      <Link to="/kurye-talep-formu" className="cta-button" aria-label="Kurye talep formuna git">
        Kurye talebinizi hemen oluşturun <ArrowRight size={18} />
      </Link>
    </section>
      <Footer /></>
  );
};

export default Services;
