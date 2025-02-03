import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import AnaKonular from "./pages/AnaKonular";
import BildiriGönderimi from "./pages/BildiriGönderimi";
import GenelBilgiler from "./pages/GenelBilgiler";
import KayitKonaklama from "./pages/KayitKonaklama";
import BilimselProgram from "./pages/BilimselProgram";
import "./pages/Kurullar"
import İletisim from "./pages/İletisim";
import Davet from "./pages/Davet";
import Kurullar from "./pages/Kurullar";
import "./App.css"


const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/genel-bilgiler" element={<GenelBilgiler />} />
                <Route path="/kayit-konaklama" element={<KayitKonaklama />} />
                <Route path="/bilimsel-program" element={<BilimselProgram />} />
                <Route path="/bildiri-gonderimi" element={<BildiriGönderimi />} />
                <Route path="/ana-konular" element={<AnaKonular />} />
                <Route path="/iletisim" element={<İletisim />} />
                <Route path="/davet" element={<Davet/>} />
                <Route path="/kurullar" element={<Kurullar/>} />
            </Routes>
        </Router>







    );
};

export default App;