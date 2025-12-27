import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Credits from "./pages/Credits";
import Menu from "./pages/Menu";
import AboutUs from "./pages/AboutUs";
import Franchise from "./pages/Franchise";

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

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
