import { useState } from "react";
import menu1 from "../../assets/menu/1.jpeg";
import menu5 from "../../assets/menu/5.jpeg";
import menu8 from "../../assets/menu/8.jpeg";
import menu12 from "../../assets/menu/12.jpeg";
import menu15 from "../../assets/menu/15.jpeg";
import menu20 from "../../assets/menu/20.jpeg";

interface Product {
  title: string;
  desc: string;
  img: string;
}

const products: Product[] = [
  {
    title: "Classic Belgian Waffle",
    desc: "Light, crispy perfection served with rich toppings.",
    img: menu1,
  },
  {
    title: "Signature Espresso",
    desc: "Bold, handcrafted coffee made from premium beans.",
    img: menu5,
  },
  {
    title: "Chocolate Delight Waffle",
    desc: "Decadent chocolate indulgence in every bite.",
    img: menu8,
  },
  {
    title: "Caramel Cappuccino",
    desc: "Smooth espresso with velvety caramel notes.",
    img: menu12,
  },
  {
    title: "Berry Bliss Waffle",
    desc: "Fresh berries and cream on golden waffle perfection.",
    img: menu15,
  },
  {
    title: "Iced Vanilla Latte",
    desc: "Refreshing cold brew with smooth vanilla finish.",
    img: menu20,
  },
];

const PopularProductsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMenuClick = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="menu"
      className="popular-products-section relative py-24 px-4 bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden"
      data-testid="popular-products-section"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          data-testid="popular-products-header"
        >
          <h2
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600"
            data-testid="popular-products-title"
          >
            Our Most Loved Flavors
          </h2>
          <p
            className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto px-4"
            data-testid="popular-products-subtext"
          >
            From signature waffles to handcrafted coffees, our menu is known for
            taste, quality, and consistency — winning hearts across every city
            we serve.
          </p>
        </div>

        {/* Products Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          data-testid="products-grid"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-testid={`product-card-${index}`}
            >
              {/* Card Container with 3D Transform */}
              <div
                className="relative bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ease-out transform h-full"
                style={{
                  transform:
                    hoveredIndex === index
                      ? "translateY(-12px) rotateX(5deg) scale(1.03)"
                      : "translateY(0) rotateX(0deg) scale(1)",
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* Image Container with Parallax */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out"
                    style={{
                      transform:
                        hoveredIndex === index
                          ? "scale(1.15) translateZ(20px)"
                          : "scale(1.1) translateZ(0px)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      data-testid={`product-image-${index}`}
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transform: "translateZ(10px)" }}
                  ></div>

                  {/* Shine Effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{ transform: "translateZ(15px)" }}
                  ></div>
                </div>

                {/* Content */}
                <div
                  className="p-6 relative"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300"
                    data-testid={`product-title-${index}`}
                  >
                    {product.title}
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed"
                    data-testid={`product-desc-${index}`}
                  >
                    {product.desc}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-4 h-1 w-0 group-hover:w-16 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 rounded-full"></div>
                </div>

                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-300/50 transition-all duration-500 pointer-events-none"></div>
              </div>

              {/* Shadow Effect */}
              <div
                className="absolute inset-0 bg-orange-500/10 rounded-2xl blur-xl transition-all duration-500 -z-10"
                style={{
                  opacity: hoveredIndex === index ? 0.6 : 0,
                  transform:
                    hoveredIndex === index
                      ? "translateY(20px) scale(0.95)"
                      : "translateY(10px) scale(0.9)",
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center" data-testid="menu-cta-container">
          <button
            onClick={handleMenuClick}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50"
            data-testid="view-full-menu-btn"
          >
            <span>View Full Menu</span>
            <svg
              className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>

            {/* Button Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;
