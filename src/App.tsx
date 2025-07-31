import React from "react";
import { Navigate, Route, HashRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Services from "./pages/services";
import CourierDetailForm from "./pages/courierdetailform";
import MotorluKurye from "./pages/motorluKurye";
import AracliKurye from "./pages/araclikurye";
import VipKurye from "./pages/vipKurye";
import UcakKurye from "./pages/uçakKurye";
import SehirlerarasiKurye from "./pages/sehirlerarasiKurye";
import GeceKurye from "./pages/geceKurye";
import Hakkimizda from "./pages/aboutus";
import Iletisim from "./pages/iletisim";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";



const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hizmetler" element={<Services />} />
                <Route path="/kurye-talep-formu" element={<CourierDetailForm />} />
                <Route path="/motorlu-kurye" element={<MotorluKurye />} />
                <Route path="/aracli-kurye" element={<AracliKurye />} />
                <Route path="/vip-kurye" element={<VipKurye />} />
                <Route path="/ucak-kurye" element={<UcakKurye />} />
                <Route path="/sehirlerarasi-kurye" element={<SehirlerarasiKurye />} />
                <Route path="/gece-kurye" element={<GeceKurye />} />
                <Route path="/hakkimizda" element={<Hakkimizda />} />
                <Route path="/iletisim" element={<Iletisim />} />

                <Route path="/admin" element={<AdminLogin />} />

                <Route
                    path="/admin/dashboard"
                    element={
                        localStorage.getItem("isAdminAuthenticated") === "true" ? (
                            <AdminDashboard />
                        ) : (
                            <Navigate to="/admin-login" replace />
                        )
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
