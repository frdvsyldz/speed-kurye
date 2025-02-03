import "./İletisim.css"
import Logo from "../assets/topkon-logo.png"
import { IoLocationOutline} from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { LiaFaxSolid } from "react-icons/lia";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineMailOutline } from "react-icons/md";
import Footer from "../components/footer";

const İletisim = () => {
  return (
    <div className="container  ">
    <div className="row iletişim-box">
      <div className="col-md-6 text-center">
        <div className="contact text-center">
          <h1>İLETİŞİM</h1>
          <hr/>
        <img src={Logo} alt="Banner" className="logo-image" />
        </div>
        <div className="contact">
          <div className="contact-text">
          <IoLocationOutline /><strong>Adres:</strong>
            Topkon Kongre ve Etkinlik Hizmetleri Zühtüpaşa Mah.<br />
            Rıfatbey Sok. No:24 34724 Kalamış-Kadıköy / İstanbul

          </div>
        </div><br />
        <div className="contact">
          <div className="contact-text"><FaPhoneVolume /><strong> Telefon:</strong> 0216 330 90 20
          </div>
        </div><br />
        <div className="contact">
          <div className="contact-text"><LiaFaxSolid /><strong> Fax:</strong> 0216 330 90 05
          </div>
        </div><br />
        <div className="contact">
          <div className="contact-text"><CgWebsite /><strong> Web:</strong> <a href="e http://www.dicleromatoloji.org" target="_blank">http://www.dicleromatoloji.org</a>
          </div>
        </div>
        <div className="contact">
          <div className="contact-text"><MdOutlineMailOutline /><strong> E-Posta:</strong> <a href="mailto:dicleromatoloji@topkon.com a">dicleromatoloji@topkon.com</a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
   
   
        );
  };

export default İletisim;