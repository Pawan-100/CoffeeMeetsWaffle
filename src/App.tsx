import { useState } from "react";
import logo from "/logo.png";
import blackLogo from "/black_logo.png";
// import logoPreload from "/logo_preload.png";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/60 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src={blackLogo}
                alt="Logo"
                className="w-auto h-16 filter drop-shadow-[white] "
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-primary transition"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-primary transition"
              >
                About Us
              </a>
              <a
                href="#menu"
                className="text-gray-700 hover:text-primary transition"
              >
                Menu
              </a>
              <a
                href="#franchise"
                className="text-gray-700 hover:text-primary transition"
              >
                Franchise
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1554893898-52600b2d7fb4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxjb2ZmZWUlMjB3YWZmbGVzJTIwYnJlYWtmYXN0fGVufDB8fHx8MTc2MzgwNTY0MHww&ixlib=rb-4.1.0&q=85')`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Dive into our world of
              <br />
              freshly brewed coffee and waffles
              <br />
              crafted to perfection
            </h1>
            <button
              onClick={() => scrollToSection("about")}
              data-testid="explore-btn"
              className="bg-primary hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full text-lg transition transform hover:scale-105"
            >
              Explore
            </button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                <span className="text-4xl">☕</span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto italic">
              "Coffee Meets Waffle started with a simple idea: create a special
              space where people can enjoy amazing coffee and delicious waffles
              in a fun, welcoming environment."
            </p>
            <div className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
              <p>
                Founded by food lovers with a passion for flavor and memorable
                experiences, we set out to craft unique waffles and perfect
                coffee with the best ingredients. Coffee Meets Waffle is more
                than just a place to eat—it's a hub where people can connect,
                celebrate moments, and make lasting memories, one bite and sip
                at a time.
              </p>
            </div>
          </div>

          {/* Waffle decorations */}
          <div className="flex justify-between items-center mt-12">
            <div className="text-8xl opacity-20">🧇</div>
            <div className="text-6xl opacity-20">🧇</div>
            <div className="text-8xl opacity-20">☕</div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div data-testid="stat-waffles">
              <div className="text-5xl font-bold">5000+</div>
              <div className="text-xl mt-2">Waffles Served</div>
            </div>
            <div data-testid="stat-customers">
              <div className="text-5xl font-bold">5000+</div>
              <div className="text-xl mt-2">Happy Customers</div>
            </div>
            <div data-testid="stat-locations">
              <div className="text-5xl font-bold">5000+</div>
              <div className="text-xl mt-2">Waffles Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founders */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1563481911853-c14860cd6947?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZvdW5kZXJzJTIwdGVhbXxlbnwwfHx8fDE3NjM4MDU2NDZ8MA&ixlib=rb-4.1.0&q=85"
                alt="Founders"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 text-6xl opacity-30">
                🧇
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet Our Founders
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded by food lovers with a passion for flavor and memorable
                experiences, we started this journey with a simple mission—to
                bring together the best of coffee and waffles in one delightful
                experience.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our founders envisioned a space where quality ingredients meet
                expert craftsmanship, creating an atmosphere where every
                customer feels at home. Their dedication to excellence drives
                everything we do.
              </p>
              <div className="mt-8 text-8xl opacity-20">🍔</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Mission and Values
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>
                  Discover customer favorites like our Signature Belgian Waffles
                </strong>{" "}
                topped with fresh fruits, premium chocolate, and artisanal
                spreads. Each waffle is crafted with care using traditional
                recipes that are sure to make your taste buds dance!
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe in creating moments of joy, one waffle and coffee at
                a time. Our commitment to quality ingredients, exceptional
                service, and a welcoming atmosphere sets us apart and keeps our
                customers coming back.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582394196024-4976586db22e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHx3YWZmbGVzJTIwcG93ZGVyZWQlMjBzdWdhcnxlbnwwfHx8fDE3NjM4MDU2NTN8MA&ixlib=rb-4.1.0&q=85"
                alt="Waffles with powdered sugar"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Community Engagement
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Discover customer favorites like our Signature Belgian Waffles,
            Hazelnut Latte, and Brûlée-style specialties that are sure to make
            your taste buds dance!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="relative rounded-lg overflow-hidden shadow-lg h-80"
              data-testid="community-image-1"
            >
              <img
                src="https://images.unsplash.com/photo-1620434167798-c39eb8b65a79?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwY3VzdG9tZXJzfGVufDB8fHx8MTc2MzgwNTY1OHww&ixlib=rb-4.1.0&q=85"
                alt="Coffee shop community"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm font-semibold">
                  Coffee Meets Waffle
                </p>
                <p className="text-white text-xs">
                  2nd Floor, City Centre Mall
                </p>
              </div>
            </div>

            <div
              className="relative rounded-lg overflow-hidden shadow-lg h-80 bg-black flex items-center justify-center"
              data-testid="community-video"
            >
              <div className="text-center text-white">
                <div className="text-6xl mb-4">▶️</div>
                <p className="text-lg">Video Coming Soon</p>
              </div>
            </div>

            <div
              className="relative rounded-lg overflow-hidden shadow-lg h-80"
              data-testid="community-image-2"
            >
              <img
                src="https://images.unsplash.com/photo-1541475074124-af32f4cb0dbb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBzaG9wJTIwY3VzdG9tZXJzfGVufDB8fHx8MTc2MzgwNTY1OHww&ixlib=rb-4.1.0&q=85"
                alt="Coffee project"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm">Coffee Project Initiative</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Awards</h2>

          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="text-6xl">🏆</div>
            <div className="text-6xl text-gray-400">🏆</div>
            <div className="text-6xl text-amber-700">🏆</div>
            <div className="text-6xl text-gray-800">🏆</div>
            <div className="text-6xl">🏆</div>
            <div className="text-6xl text-gray-400">🏆</div>
            <div className="text-6xl text-amber-700">🏆</div>
            <div className="text-6xl text-gray-800">🏆</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center" data-testid="award-category-1">
              <h3 className="text-primary font-bold text-xl mb-3">
                Navigation
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>Menu Cat 1</p>
                <p>Menu Cat 2</p>
                <p>Menu Cat 3</p>
              </div>
            </div>
            <div className="text-center" data-testid="award-category-2">
              <h3 className="text-primary font-bold text-xl mb-3">Category</h3>
              <div className="space-y-2 text-gray-600">
                <p>Menu Cat 1</p>
                <p>Menu Cat 2</p>
                <p>Menu Cat 3</p>
              </div>
            </div>
            <div className="text-center" data-testid="award-category-3">
              <h3 className="text-primary font-bold text-xl mb-3">Policies</h3>
              <div className="space-y-2 text-gray-600">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Shipping Policy</p>
                <p>Franchise Policy</p>
                <p>Cookie Policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white py-12 px-4 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Social */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">☕</span>
                </div>
                <span className="text-lg font-bold text-gray-900">
                  Coffee Meets Waffle
                </span>
              </div>

              <div className="flex space-x-4 mb-6">
                <a
                  href="#"
                  className="text-primary hover:text-orange-600 transition"
                  data-testid="social-facebook"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-orange-600 transition"
                  data-testid="social-instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-orange-600 transition"
                  data-testid="social-youtube"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-orange-600 transition"
                  data-testid="social-twitter"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>

              <p className="text-gray-600 text-sm">
                © 2024 Coffee Meets Waffle
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-primary font-bold text-lg mb-4">
                Navigation
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#home" className="hover:text-primary transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#franchise"
                    className="hover:text-primary transition"
                  >
                    Franchise
                  </a>
                </li>
                <li>
                  <a href="#menu" className="hover:text-primary transition">
                    Menu
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
