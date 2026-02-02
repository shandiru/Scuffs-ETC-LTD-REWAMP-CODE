import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// 1. Import AOS and its CSS
import AOS from "aos";
import "aos/dist/aos.css";

// Import your components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/homepage"; 
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

// 2. Helper component to handle AOS refresh on route change
function AOSHelper() {
  const location = useLocation();

  useEffect(() => {
    // Initialize AOS once
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    // Whenever the URL changes, refresh AOS to detect new elements
    AOS.refresh();
  }, [location]);

  return null; // This component doesn't render anything
}

function App() {
  return (
    <Router>
      {/* Logic components inside Router */}
      <AOSHelper />
      <ScrollToTop />
      
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