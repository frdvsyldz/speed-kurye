import "./Davet.css"
import bannerImage from "../assets/banner.jpg"
import Footer from "../components/footer";

const Davet = () => {
  return (
    
    <section className="about-sectionv02 pt-20 space-bottom position-relative overflow-hidden davet-body">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="container">
        <div className="row ">
          <div className="col-lg-12 col-md-12">
            <div className="davet-box">
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
      <Footer />
    </section>
  );
};

export default Davet;