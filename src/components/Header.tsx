import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Switch header style after 200px scroll
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "menu", label: "Menu" },
    { id: "franchise", label: "Franchise" },
  ];

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        onNavigate(sectionId);
      }, 100);
    } else {
      onNavigate(sectionId);
    }
  };

  const handleMobileNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    handleNavClick(sectionId);
  };

  return (
    <>
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
            <Link
              to="/"
              className="flex items-center space-x-2"
              data-testid="brand-logo"
            >
              <img
                src={isScrolled ? blackLogo : logo}
                alt="Coffee Meets Waffle Logo"
                className="w-auto h-16 transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-primary"
                      : "text-white hover:text-secondary"
                  }`}
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <Link
                to="/credits"
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:text-secondary"
                }`}
                data-testid="nav-credits"
              >
                Credits
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-all duration-300 p-2 min-h-[44px] min-w-[44px] relative z-60 ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-secondary"
              }`}
              data-testid="mobile-menu-button"
              aria-label="Toggle menu"
            >
              <div className="relative w-7 h-7 flex items-center justify-center">
                <GiHamburgerMenu
                  size={28}
                  className={`absolute transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-0 rotate-90 scale-0"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <IoMdClose
                  size={28}
                  className={`absolute transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        data-testid="mobile-menu-overlay"
      />

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-[88px] left-0 right-0 z-40 md:hidden transition-all duration-300 ease-out transform ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
        data-testid="mobile-menu"
      >
        <div
          className={`mx-4 rounded-2xl shadow-2xl overflow-hidden ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl border border-gray-200"
              : "bg-gray-900/95 backdrop-blur-xl border border-gray-700"
          }`}
        >
          <div className="px-2 py-4 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleMobileNavClick(item.id)}
                className={`block w-full text-left font-semibold transition-all duration-200 py-4 px-6 rounded-xl min-h-[44px] transform hover:scale-[1.02] ${
                  isScrolled
                    ? "text-gray-800 hover:text-primary hover:bg-orange-50 active:bg-orange-100"
                    : "text-white hover:text-secondary hover:bg-white/10 active:bg-white/20"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen
                    ? "slideIn 0.3s ease-out forwards"
                    : "none",
                }}
                data-testid={`mobile-nav-${item.id}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg">{item.label}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isScrolled ? "text-gray-400" : "text-gray-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            ))}
            <Link
              to="/credits"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left font-semibold transition-all duration-200 py-4 px-6 rounded-xl min-h-[44px] transform hover:scale-[1.02] ${
                isScrolled
                  ? "text-gray-800 hover:text-primary hover:bg-orange-50 active:bg-orange-100"
                  : "text-white hover:text-secondary hover:bg-white/10 active:bg-white/20"
              }`}
              style={{
                animationDelay: `${navItems.length * 50}ms`,
                animation: isMobileMenuOpen
                  ? "slideIn 0.3s ease-out forwards"
                  : "none",
              }}
              data-testid="mobile-nav-credits"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg">Credits</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isScrolled ? "text-gray-400" : "text-gray-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
