import { useState, useEffect } from "react";
import logo from "/logo.png";
import blackLogo from "/black_logo.png";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Switch header style after 200px scroll
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-transparent backdrop-blur-xs"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={isScrolled ? blackLogo : logo}
              alt="Coffee Meets Waffle Logo"
              className="w-auto h-16 transition-all duration-300"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("home");
              }}
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-secondary"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("about");
              }}
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-secondary"
              }`}
            >
              About Us
            </a>
            <a
              href="#menu"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-secondary"
              }`}
            >
              Menu
            </a>
            <a
              href="#franchise"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-secondary"
              }`}
            >
              Franchise
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
