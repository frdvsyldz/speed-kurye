import "./BildiriGönderimi.css";
import bannerImage from "../assets/banner.jpg"
import Footer from "../components/footer";


const BildiriGonderimi = () => {
    return (
        <div>
            <img src={bannerImage} alt="Banner" className="banner-image" />
            <div className=" bildiri-container">
                <h1 className="bildiri-title">Bildiri Gönderimi</h1>
                <div className="bildiri-info text-center">
                    <strong>Bildiri Son Gönderim Tarihi: 28 Şubat 2025</strong>
                </div>
                <p className="bildiri-text">
                    2.Dicle Romatoloji Günleri bildiri gönderimlerinin Word dosyası olarak
                    <a href="mailto: dicleromatoloji@topkon.com " className="bildiri-email">  dicleromatoloji@topkon.com  </a>
                    adresine gönderilmelidir. Başka bir e-mail adresine gönderilen bildiriler ile faks veya normal posta yolu ile
                    gönderilecek veya elden ulaştırılacak sunumlar kabul edilmeyecektir.
                </p>
                <p className="bildiri-subtitle"><strong>Bildiriler SÖZEL SUNUM ve POSTER kategorilerinde kabul edilecektir.</strong></p>
                <p className="bildiri-text">Kongre kapsamındaki bildiriler aşağıdaki şekillerde gerçekleştirilebilir:</p>
                <ul className="bildiri-list">
                    <li>Olgu sunumları sadece poster bildiri olarak kabul edilmektedir.</li>
                    <li>Özette anlaşılır ve düzgün Türkçe kullanmaya özen gösterilmelidir.</li>
                    <li>Bildiri başlığı çalışmayı yansıtmalıdır.</li>
                    <li>Tüm yazarların tam isimleri, unvanları, kurumları ve e-posta adresleri açık şekilde yazılmalıdır.</li>
                    <li>Giriş bölümünde problem ortaya konularak çalışmanın amacı belirtilmelidir.</li>
                    <li>Gereç ve yöntem bölümünde metot iyi belirtilmelidir.</li>
                    <li>Bulgular açık olarak verilmeli, istatistiksel değerlendirme yapılmışsa belirtilmelidir.</li>
                    <li>Her özet en az 3 anahtar kelime içermelidir.</li>
                    <li>Sunum özetleri başlık hariç 300 kelimeyi geçmemelidir.</li>
                    <li>En az bir yazarın kongre kaydı yaptırması zorunludur.</li>
                </ul>
                <p className="bildiri-text">
                    2.Dicle Romatoloji Günleri bildiri gönderimleri; sözel sunumlar word dosyası olarak, poster sunumlar powerpoint dosyası olarak dogukaradenizromatolojigunleri@topkon.com adresine gönderilmelidir. Başka bir e-mail adresine gönderilen bildiriler ile faks veya normal posta yolu ile gönderilecek veya elden ulaştırılacak sunumlar kabul edilmeyecektir.
                    <br />
                    <br />
                    Posterler indirilebilir örnek formattaki gibi 50x70 cm boyutlarında hazırlanmalıdır, format dışında gelen poster kabul edilmeyecektir. Programda gösterilen aralarda poster tartışmaları yapılacaktır. Kendilerine bildirilen gün ve saatte poster sunumu yapacak kişilerin posterlerinin başında hazır bulunması ve çalışmasını tartışmaya açması gerekmektedir.
                    <br />
                    <br />
                    Değerlendirmeler araştırmacıların ad, soyad ve kurumları gizli tutularak, Bildiri Değerlendirme Komitesi tarafından yapılacaktır. Bildirilerin değerlendirmeye alınabilmesi için, araştırmacılardan en az birinin kongre kayıt işlemini tamamlamış olması gerekmektedir.
                </p>

                <h4 className="bildiri-title2">Bildirilerin Değerlendirilmesi</h4>
                <p className="bildiri-text">
                    Değerlendirmeler araştırmacıların ad, soyad ve kurumları gizli tutularak, Bildiri Değerlendirme Komitesi tarafından yapılacaktır.<br />
                    Bildirilerin değerlendirmeye alınabilmesi için, araştırmacılardan en az birinin kongre kayıt işlemini tamamlamış olması gerekmektedir.<br />
                    Gönderilen tüm bildiriler Bildiri Değerlendirme Komitesi tarafından değerlendirilerek, kabul edilip edilmediklerine karar verilecektir.
                    Kabul veya ret yanıtları 30 Ağustos 2025 tarihinden itibaren yazılı olarak tarafınıza iletilecektir.
                </p>

            </div>
            <Footer />
        </div>
    );
};

export default BildiriGonderimi;
