import "./Kurullar.css"
import bannerImage from "../assets/banner.jpg"
import Footer from "../components/footer";

const Kurullar = () => {
    return (
        <div className="kurullar-body">
            <img src={bannerImage} alt="Banner" className="banner-image" />
            <div className="common-content-box container  "  >
                <div className="about-contentv03">
                    <h1 className="kurul">KURULLAR</h1>
                    <div className="text-center ">
                        <h5 className="black mb-1">Sempozyum Başkanı</h5>
                        <p className="pra mb-30">Doç. Dr. Mehmet Çağlayan</p>
                        <h4 className="black mb-1">Düzenleme Kurulu</h4>
                        <p className="pra mb-1">Doç. Dr. Mehmet Çağlayan</p>
                        <p className="pra mb-30">Prof.Dr.İbrahim Batmaz</p>
                        <p className="pra mb-1">Dr.Öğr.Üy. Zeynel Abidin Akar</p>
                        <p className="pra mb-1">Prof. Dr. Remzi Çevik</p>
                        <p className="pra mb-1">Prof. Dr. Serda Em</p>
                        <p className="pra mb-1">Prof. Dr. Pelin Oktayoğlu</p>
                        <p className="pra mb-1">Prof. Dr. Mehmet Karakoç</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Kurullar;