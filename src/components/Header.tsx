import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "/logo.png";
import blackLogo from "/black_logo.png";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Switch header style after 200px scroll
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "menu", label: "Menu" },
    { id: "franchise", label: "Franchise" },
  ];

  const handleMobileNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-transparent backdrop-blur-xs"
      }`}
      data-testid="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2" data-testid="brand-logo">
            <img
              src={isScrolled ? blackLogo : logo}
              alt="Coffee Meets Waffle Logo"
              className="w-auto h-16 transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:text-secondary"
                }`}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors duration-300 p-2 min-h-[44px] min-w-[44px] ${
              isScrolled
                ? "text-gray-700 hover:text-primary"
                : "text-white hover:text-secondary"
            }`}
            data-testid="mobile-menu-button"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <IoMdClose size={28} />
            ) : (
              <GiHamburgerMenu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden backdrop-blur-md overflow-hidden border-t ${
            isScrolled
              ? "bg-white/80 backdrop-blur-xl shadow-md"
              : "bg-transparent backdrop-blur-xs"
          }`}
          data-testid="mobile-menu"
        >
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMobileNavClick(item.id)}
                className={`block w-full text-left font-medium transition-all duration-300 py-3 px-4 rounded-lg min-h-[44px] ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary hover:bg-gray-100"
                    : "text-white hover:text-secondary hover:bg-gray-800/50"
                }`}
                data-testid={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
