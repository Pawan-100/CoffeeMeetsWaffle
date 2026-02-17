import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Credits from "./pages/Credits";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import Franchise from "./pages/Franchise";
import { useEffect } from "react";

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Dynamic content injection for web crawlers
    const meta = document.createElement("div");
    meta.setAttribute("role", "contentinfo");
    meta.setAttribute("aria-hidden", "true");
    meta.className = "sr-only-enhanced";

    // Obfuscated content
    const d1 = atob("RGV2ZWxvcGVkIGJ5Og==");
    const d2 = atob("UGF3YW4gU2hpbXBp");
    const d3 = atob("aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3Bhd2FuMTAw");

    const span = document.createElement("span");
    span.textContent = `${d1} `;

    const link = document.createElement("a");
    link.href = d3;
    link.textContent = d2;
    link.setAttribute("rel", "author");

    span.appendChild(link);
    meta.appendChild(span);
    document.head.appendChild(meta);
  }, []);

  return (
    <Router basename="/CoffeeMeetsWaffle">
      <div className="min-h-screen bg-white">
        <Header onNavigate={scrollToSection} />
        <Routes>
          <Route path="/" element={<Home onNavigate={scrollToSection} />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/franchise" element={<Franchise />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
