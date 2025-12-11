// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/homepage"; // fixed relative path
import Quality from "./page/Quality";
import Alloywheelrepairpage from "./page/Alloywheelrepairpage";
import FullRespray from "./page/FullRespray";
import Bodywork from "./page/Bodyworkrepairpage";
import Textured from "./page/Texturedplasticrepairpage";
import PanelDamage from "./page/PanelDamage";
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import GDPRConsent from "./components/GDPRButton";
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/alloy-wheel-repair" element={<Alloywheelrepairpage />} />
          <Route path="/services/bodywork-repair" element={<Bodywork />} />
          <Route path="/services/textured-plastic-repair" element={<Textured />} />
          <Route path="/services/panel-damage" element={<PanelDamage />} />
          <Route path="/services/full-respray" element={<FullRespray />} />
          <Route path="/services/quality-guarantee" element={<Quality />} />
           <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
      <GDPRConsent />
    </Router>
  );
}

export default App;