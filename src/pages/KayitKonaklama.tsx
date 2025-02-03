import { Table } from "react-bootstrap";
import "./KayitKonaklama.css"
import bannerImage from "../assets/banner.jpg"
import Footer from "../components/footer";

const KayitKonaklama = () => {
  return (
    <><div className="kayit">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className=" kayit-box">
        <h2 className="başlık">KAYIT & KONAKLAMA</h2>
        <h3 className="kayit-title">KAYIT BİLGİLERİ</h3>

        <Table bordered className="registration-table">
          <thead>
            <tr>
              <th>KAYIT TİPİ</th>
              <th>15 Şubat 2025 ve Öncesi </th>
              <th>15 Şubat 2025 sonrası</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ASİSTAN</td>
              <td>6.000 TL</td>
              <td>7.000 TL</td>
            </tr>
            <tr>
              <td>UZMAN</td>
              <td>7.000 TL </td>
              <td>8.000 TL </td>
            </tr>

          </tbody>
        </Table>

        <ul className="info-list">
          <li>
            Kayıt ücretlerinde KDV dahil değildir. KDV oranı %20’dir.
          </li>
          <li>
            Toplantı genel alanları ve bilimsel oturumlara katılım için konuşmacı, uzman, asistan ve firma temsilcilerinin kayıt yaptırması zorunludur.
          </li>
          <li>
            Kayıt ücretine bilimsel aktivitelere katılım, yaka kartı, cep programı, katılım sertifikası dahildir.
          </li>
          <li>
            Kesin kayıt ödeme ile netlik kazanır; kayıt ücretlerinin kongre hesabına yatırılması ve ödemeye dair belgenin
            organizasyon sekreteryasına e-posta kanalıyla gönderilmesi gerekmektedir.
          </li>
        </ul>


        <div className="course-accommodation-container">


          <div className="transfer-bank-container">
            {/* Konaklama Bilgileri */}
            <h2 className="kayit-title mt-20">KONAKLAMA BİLGİLERİ</h2>

            <Table bordered className="info-table">
              <thead>
                <tr>
                  <th>Radisson Blu Hotel
                    Diyarbakır
                    Konaklama Tipi</th>
                  <th>15 Şubat 2025 ve Öncesi</th>
                  <th>15 Şubat 2025 Sonrası</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TEK KİŞİLİK ODA - 2 GECE</td>
                  <td>12.500 TL </td>
                  <td>14.000 TL </td>
                </tr>
                <tr>
                  <td>ÇİFT KİŞİLİK ODA - 2 GECE</td>
                  <td>15.000 TL </td>
                  <td>16.500 TL </td>
                </tr>
              </tbody>
            </Table>

            <ul className="info-list">
              <li>
                Konaklama ücretlerinde Konaklama Vergisi dahil, KDV dahil değildir.
              </li>
              <li>Konaklama Vergisi oranı %2’dir. KDV oranı %20’dir.</li>
            </ul>
          </div>
        </div>
        <div className="transfer-bank-container">
          { /* Transfer Bilgileri 
          <h2 className="kayit-title">TRANSFER BİLGİLERİ</h2>

          <Table bordered className="info-table">
            <thead>
              <tr>
                <th>ÇİFT  YÖN  TRANSFER</th>
                <th>10 Mart 2025 ve Öncesi</th>
                <th>10 Mart 2025 Sonrası</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TOPLU TRANSFER</td>
                <td>3.000 TL</td>
                <td>4.000 TL</td>
              </tr>
            </tbody>
          </Table>

          <ul className="info-list">
            <li>Transfer ücretlerine KDV dahil değildir, KDV oranı %20’dir.</li>
            <li>
              Transferler toplu olarak gerçekleştirilecektir. Biletleme yapılmadan önce Topkon Kongre ve Etkinlik Hizmetleri’ne bilgi verilmesi önemlidir.
            </li>
          </ul>*/}
          <div className="transfer-bank-container">
            {/* Banka Hesap Bilgileri */}
            <h2 className="kayit-title ">
              KAYIT – KONAKLAMA - TRANSFER ÖDEMELERİ İÇİN BANKA HESAP BİLGİLERİ
            </h2>

            <Table bordered className="info-table">
              <tbody>
                <tr>
                  <td>BANKA ADI</td>
                  <td>TÜRKİYE İŞ BANKASI</td>
                </tr>
                <tr>
                  <td>ŞUBE KODU</td>
                  <td>1025</td>
                </tr>
                <tr>
                  <td>ŞUBE ADI</td>
                  <td>RIHTIM-KADIKÖY / İSTANBUL</td>
                </tr>
                <tr>
                  <td>HESAP ADI</td>
                  <td>TOP-KON TURİSTİK HİZMETLER YAT.İNŞ.VE TİC.LTD.ŞTİ.</td>
                </tr>
                <tr>
                  <td>TL HESAP NO</td>
                  <td>1025-4739961
                  </td>
                </tr>
                <tr>
                  <td>TL IBAN NO</td>
                  <td>TR05 0006 4000 0011 0254 7399 61
                  </td>
                </tr>
                <tr>
                  <td>EURO HESAP NO </td>
                  <td>1025-4348342
                  </td>
                </tr>
                <tr>
                  <td>EURO IBAN NO</td>
                  <td>TR98 0006 4000 0021 0254 3483 42
                  </td>
                </tr>
                <tr>
                  <td>DOLAR HESAP NO </td>
                  <td>1025-4348183
                  </td>
                </tr>
                <tr>
                  <td>DOLAR İBAN NO</td>
                  <td>TR26 0006 4000 0021 0254 3481 83
                  </td>
                </tr>
                <tr>
                  <td>SWIFT KODU </td>
                  <td>ISBKTRIS
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>Swift kanalıyla gönderilecek havaleler için Bankamızın swift kodu: ISBKTRIS
                    (Şubelerimizin ayrıca Swift kodu bulunmamaktadır)
                    ABD’den gönderilecek havaleler için CHIPS UID: 003546 (Routing Code, ABA Number
                    yerine de kullanılmaktadır.</td>
                </tr>

              </tbody>
            </Table>
            <ul className="info-list">
              <li>Kayıt ve konaklama ücretleri web sitesinde belirtilen banka hesabına gönderilebilir yada kredi kartı ile ödenebilir.</li>
              <li>Toplantı katılımcıları banka havalesiyle ödenme yapmış ise, kayıt ve konaklama ödeme makbuzunu e-posta ile <a href="mailto: dicleromatoloji@topkon.com"> dicleromatoloji@topkon.com</a> adresine göndermeleri gerekmektedir.</li>
            </ul>
          </div>


          <p className="pra"><strong>İPTAL KOŞULLARI </strong><br />

            Kayıt ve konaklama ücretleri iadesi ile ilgili olarak; <br />
            <ul className="info-list">
              <li>1 Şubat 2025 tarihine kadar bildirildiği taktirde ücretlerin tamamı,</li>
              <li>1 Şubat – 1 Mart 2025 tarihleri arasında bildirildiği taktirde ücretlerin %50si iade edilecektir.</li>
              <li>1 Haziran 2025 tarihinden sonra bildirilen iptaller dikkate alınmayacaktır.</li>
              <li>Tüm iadeler kongre bitiminden sonraki 1 ay içerisinde gerçekleştirilecektir.</li>
            </ul>


          </p>



        </div>
      </div>
    </div><Footer /></>


  );
};

export default KayitKonaklama;