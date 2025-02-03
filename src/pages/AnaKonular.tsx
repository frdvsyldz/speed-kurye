import "./AnaKonular.css"
import bannerImage from "../assets/banner.jpg"
import { BsCaretRight } from "react-icons/bs";
import Footer from "../components/footer";

const AnaKonular = () => {
    return (
      <div>
      <section className="body-konular">
      <img src={bannerImage} alt="Banner" className="banner-image" />
        <div className="container konular-box">
          <div className="row">
            <div className="col-12 col-md-8 congress-content">
              <h1>ANA KONULAR</h1>
              <hr/>
                <p><span><BsCaretRight /></span>Behçet Hastalığı </p>
                <p><span><BsCaretRight /></span>Psoriasis</p>
                <p><span><BsCaretRight /></span>Psöriyatik Artrit</p>
                <p><span><BsCaretRight /></span>Ankilozan Spondilit</p>
             
            </div>
          </div>

        </div>
      </section >
      <Footer />
    </div>

    );
  };
  
  export default AnaKonular;