import { useEffect, useState } from "react";
import "./aboutus.css";
import aboutImage from "../assets/motokurye.png";
import Footer from "../components/footer";

const Hakkimizda = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Statik yorumlar örneği – Google Reviews yerine temsilî yorumlar
  const reviews = [
    {
      name: "Mehmet A.",
      comment: "Gönderim tam zamanında teslim edildi, çok memnun kaldım!",
      stars: 5,
    },
    {
      name: "Ayşe T.",
      comment: "Müşteri hizmetleri çok ilgiliydi, tavsiye ederim.",
      stars: 4,
    },
    {
      name: "Berk K.",
      comment: "Kuryeler güler yüzlü ve çok hızlı çalışıyorlar.",
      stars: 5,
    },
  ];

  return (
    <><div className={`about-wrapper ${isVisible ? "visible" : ""}`}>
          <section className="about-hero">
              <div className="about-image">
                  <img src={aboutImage} alt="Speed Kurye Hakkımızda" />
              </div>
              <div className="about-text">
                  <h1>Hakkımızda</h1>
                  <p>
                      Speed Kurye, İstanbul merkezli, güvenilir ve hızlı taşımacılık
                      çözümleri sunan bir kurye hizmetidir. Yılların deneyimiyle bireysel
                      ve kurumsal müşterilere kesintisiz hizmet veriyoruz.
                  </p>
                  <p>
                      Teknoloji destekli altyapımız sayesinde tüm teslimatlar anlık
                      takip edilebilir ve raporlanabilir. Müşteri memnuniyeti, iş
                      ahlakı ve zamanında teslim ilkelerimizle sektörde fark yaratıyoruz.
                  </p>
              </div>
          </section>

          <section className="about-values">
              <h2>Vizyonumuz & Misyonumuz</h2>
              <ul>
                  <li>✓ Her teslimatta %100 müşteri memnuniyeti sağlamak</li>
                  <li>✓ Kurumsal iş ortaklıklarında kesintisiz destek sunmak</li>
                  <li>✓ Teknolojik altyapı ile anlık takip edilebilir süreçler</li>
                  <li>✓ Çevreye ve insana duyarlı hizmet anlayışı</li>
              </ul>
          </section>

          <section className="customer-reviews">
              <h2>Müşteri Yorumlarımız</h2>
              <div className="review-grid">
                  {reviews.map((review, idx) => (
                      <div className="review-card" key={idx}>
                          <div className="review-name">{review.name}</div>
                          <div className="review-stars">
                              {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
                          </div>
                          <p>{review.comment}</p>
                      </div>
                  ))}
              </div>
          </section>

      </div><Footer /></>
  );
};

export default Hakkimizda;
