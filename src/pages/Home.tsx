import { useEffect, useState } from "react";
import bannerImage from "../assets/banner.jpg"
import tarıhIcon from "../assets/tarih-icon.png"
import "./home.css"
import Navigation from "../components/Navigation";
import Footer from "../components/footer"

const Homepage = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date("2025-05-04T00:00:00").getTime(); // 19 Eylül 2025
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (


        <div className="homepage">

            {/* Banner alanı */}
            <section className="banner">
                <img src={bannerImage} alt="Banner" className="banner-image" />
            </section>

            <div className="countdown-panel">
                <div className="logo ">
                    <img src={tarıhIcon} />
                </div>
                <div className="countdown-item">
                    <span className="countdown-number">{timeLeft.days}</span>
                    <span className="countdown-label">Gün</span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-number">{timeLeft.hours}</span>
                    <span className="countdown-label">Saat</span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-number">{timeLeft.minutes}</span>
                    <span className="countdown-label">Dakika</span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-number">{timeLeft.seconds}</span>
                    <span className="countdown-label">Saniye</span>
                </div>
            </div>

            <Navigation />

            <section className="about-sectionv02 pt-20 space-bottom position-relative overflow-hidden">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-12 col-md-12">
                            <div className="kutu-box">
                                <div className="about-contentv02">
                                    <div className="section-title">
                                        <h1 className="davet">
                                            DAVET
                                        </h1>
                                        <p className="pra mb-30">Değerli Meslektaşlarımız,</p>
                                        <p className="pra mb-30">Türkiye Romatizma Araştırma ve Savaş Derneği (TRASD) Diyarbakır Şubesi’nin düzenlediği “ 2. Dicle Romatoloji Günleri " sempozyumu, 4-6 Nisan 2025 tarihlerinde Diyarbakır’da düzenlenecektir.</p>
                                        <p className="pra mb-30">Sempozyumun ana konusu  “spondiloartritler” olacaktır. En fazla görülen romatizmal hastalar arasında yer alan spondiloartritlerin tanı ve tedavisinde son yıllarda önemli gelişmeler olmuştur. Bununla birlikte hala cevap ve çözüm  bekleyen sorular ve sorunlar mevcuttur.  Kas iskelet dışı tutulumları da olan spondiloartritler, farklı klinik disiplinleri de ilgilendirmektedir.  İki gün boyunca deneyimli akademisyenlerle bu konuları ayrıntılı olarak konuşabilmeyi amaçladık</p>
                                        <p className="pra mb-30">Kapsamlı bilimsel programı ile beğeninizi kazanacağını düşündüğümüz toplantımıza, değerli meslektaşlarımızın katılımı ve bilimsel katkıları  sempozyumumuzu  zenginleştirecektir.</p>
                                        <p className="pra mb-30"> “2. Dicle Romatoloji Günleri” ne katılımınızı bekliyoruz.</p>
                                        <p className="pra mb-30">Saygılarımızla,</p>
                                        <p className="pra mb-30">Doç. Dr. Mehmet ÇAĞLAYAN<br /><b>Sempozyum Başkanı</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>

    );
};

export default Homepage; 