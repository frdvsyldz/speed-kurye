import { CiLocationOn } from "react-icons/ci";
import "./GenelBilgiler.css"
import { BsCalendar } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa6";
import { FaRegIdBadge } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import { LuClipboardCheck } from "react-icons/lu";
import bannerImage from "../assets/banner.jpg"
import Footer from "../components/footer";

const GenelBilgiler = () => {
    return (
        <div>
            <section className="body">
                <img src={bannerImage} alt="Banner" className="banner-image" />
                <div className="container bilgiler-box">
                    <div className="row">
                        <div className="col-12 col-md-8 congress-content">

                            <h1>Genel Bilgiler</h1><br />
                            <table className="genel">
                                <tbody>
                                    <tr>
                                        <td>
                                            <h5 className="black"><span><BsCalendar /></span>Kongre Tarihleri</h5>
                                            <p className="pra mb-10">4-6 Nisan 2025</p>
                                            <hr />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5 className="black"><span><CiLocationOn /></span>Kongre Merkezi</h5>
                                            <p className="pra ">Radisson Blu Otel / Diyarbakır</p>
                                            <hr />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5 className="black"><span><FaLanguage /></span>Toplantı Dili</h5>
                                            <p className="pra ">Toplantı dili Türkçe’dir.</p>
                                            <hr />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5 className="black"><span><FaRegIdBadge /></span>Yaka Kartı</h5>
                                            <p className="pra ">Kayıt yaptıran tüm katılımcı ve refakatçilere yaka kartı dağıtılacaktır. Toplantı
                                                düzeninin sağlanabilmesi için yaka kartlarının tüm bilimsel ve sosyal
                                                aktivitelerde takılması rica olunur. </p>
                                            <hr />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5 className="black"><span><PiCertificate /></span>Katılım Belgesi</h5>
                                            <p className="pra ">Tüm bilimsel program katılımcılarına katılım belgeleri sempozyum sonrası
                                                elektronik ortamda dağıtılacaktır.</p>
                                            <hr />
                                        </td>
                                    </tr>
                                    <tr>

                                        <td>
                                            <h5 className="black mb-20"><span><LuClipboardCheck /></span>Davet Mektubu / İzin Yazısı</h5>
                                            <p className="pra ">Toplantı katılımı için kurumlara verilmek üzere talep edilecek olan davet yazıları
                                                toplantı sekreterliği aracılığı ile isteyen katılımcılara gönderilecektir. Bu tür
                                                davet yazıları sadece izin amacı ile kullanılabilir. </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section >
            <Footer />
        </div >


    );
};
export default GenelBilgiler;