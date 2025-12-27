import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { BiDrink, BiCoffee } from "react-icons/bi";
import { MdOutlineBreakfastDining, MdIcecream } from "react-icons/md";
import { PiCookieBold } from "react-icons/pi";
import { GiNoodles, GiNachos } from "react-icons/gi";
import { FaMugHot } from "react-icons/fa";
import { MdStars } from "react-icons/md";

// Import all menu images
// import img1 from "../assets/menu/1.jpeg";
// import img2 from "../assets/menu/2.jpeg";
// import img3 from "../assets/menu/3.jpeg";
import img4 from "../assets/menu/4.jpeg";
// import img5 from "../assets/menu/5.jpeg";
// import img6 from "../assets/menu/6.jpeg";
import img7 from "../assets/menu/7.jpeg";
import img8 from "../assets/menu/8.jpeg";
// import img9 from "../assets/menu/9.jpeg";
// import img10 from "../assets/menu/10.jpeg";
// import img11 from "../assets/menu/11.jpeg";
// import img12 from "../assets/menu/12.jpeg";
import img13 from "../assets/menu/13.jpeg";
// import img14 from "../assets/menu/14.jpeg";
// import img15 from "../assets/menu/15.jpeg";
// import img16 from "../assets/menu/16.jpeg";
// import img17 from "../assets/menu/17.jpeg";
// import img18 from "../assets/menu/18.jpeg";
// import img19 from "../assets/menu/19.jpeg";
// import img20 from "../assets/menu/20.jpeg";
// import img21 from "../assets/menu/21.jpeg";
// import img22 from "../assets/menu/22.jpeg";
import img23 from "../assets/menu/23.jpeg";
// import img24 from "../assets/menu/24.jpeg";
import img25 from "../assets/menu/25.jpeg";
// import img26 from "../assets/menu/26.jpeg";
// import img27 from "../assets/menu/27.jpeg";
// import img28 from "../assets/menu/28.jpeg";
// import img29 from "../assets/menu/29.jpeg";
// import img30 from "../assets/menu/30.jpeg";
// import img31 from "../assets/menu/31.jpeg";
// import img32 from "../assets/menu/32.jpeg";
// import img33 from "../assets/menu/33.jpeg";
import img34 from "../assets/menu/34.jpeg";
// import img35 from "../assets/menu/35.jpeg";
// import img36 from "../assets/menu/36.jpeg";
import img37 from "../assets/menu/37.jpeg";
// import img38 from "../assets/menu/38.jpeg";
// import img39 from "../assets/menu/39.jpeg";
// import img40 from "../assets/menu/40.jpeg";
// import img41 from "../assets/menu/41.jpeg";

interface MenuItem {
  name: string;
  image: string;
}

interface MenuSection {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
  bgColor: string;
}

// Full menu data from CMW MENU 2024 Excel file
interface FullMenuSection {
  title: string;
  icon: React.ReactNode;
  items: string[];
  bgColor: string;
}

// Optimized order for masonry layout - alternating large/small groups for better space utilization
// Updated from CMW MENU 2024 Excel file
const fullMenuData: FullMenuSection[] = [
  {
    title: "Hot Beverages",
    icon: <BiCoffee className="text-3xl md:text-4xl" />,
    bgColor: "bg-amber-50",
    items: [
      "ESPRESSO SOLO (30ML)",
      "ESPRESSO DOPPIA (60ML)",
      "AMERICANO",
      "CAPPUCCINO (Strong Coffee)",
      "LATTE (Regular Coffee)",
      "MOCHA / WHITE MOCHA (Chocolate Coffee)",
      "MACCHIATO",
      "FLAT WHITE",
      "HOT CHOCOLATE",
      "NUTELLA HOT CHOCOLATE",
    ],
  },
  {
    title: "Hot Tea's",
    icon: <FaMugHot className="text-3xl md:text-4xl" />,
    bgColor: "bg-green-50",
    items: [
      "BLACK TEA",
      "GREEN TEA",
      "HONEY TEA",
      "INDIAN MASALA CHAI",
      "GINGER/LEMON/CINNAMON TEA",
    ],
  },
  {
    title: "Lolly Waffle",
    icon: <PiCookieBold className="text-3xl md:text-4xl" />,
    bgColor: "bg-yellow-50",
    items: [
      "HONEY LOLLY WAFFLE",
      "CHOCOLATE LOLLY WAFFLE",
      "MILK CHOCOLATE LOLLY WAFFLE",
      "WHITE CHOCOLATE LOLLY WAFFLE",
      "TRIPLE CHOCOLATE LOLLY WAFFLE",
      "4G CHOCOLATE LOLLY WAFFLE",
      "NUTELLA CHOCOLATE LOLLY WAFFLE",
      "HAZELNUT CHOCOLATE LOLLY WAFFLE",
      "RED VELVET LOLLY WAFFLE",
    ],
  },
  {
    title: "On The Rocks",
    icon: <MdIcecream className="text-3xl md:text-4xl" />,
    bgColor: "bg-purple-50",
    items: [
      "LEMON ICE TEA",
      "PEACH ICE TEA",
      "ICE AMERICANO",
      "ICE LATTE",
      "ICE CAPPUCCINO",
      "ICE COFFEE MOCHA",
    ],
  },
  {
    title: "Nachos",
    icon: <GiNachos className="text-3xl md:text-4xl" />,
    bgColor: "bg-amber-100",
    items: ["PERI PERI NACHOS", "CHEESY NACHOS"],
  },
  {
    title: "Classic Waffle",
    icon: <MdOutlineBreakfastDining className="text-3xl md:text-4xl" />,
    bgColor: "bg-orange-50",
    items: [
      "HONEY WAFFLE",
      "DARK CHOCOLATE WAFFLE",
      "WHITE CHOCOLATE WAFFLE",
      "MILK CHOCOLATE WAFFLE",
      "KIT KAT WAFFLE",
      "OREO WAFFLE",
      "COFFEE WAFFLE",
      "NUTELLA / BELGIAN WAFFLE (BEST SELLER)",
      "HAZELNUT CHOCOLATE WAFFLE",
      "RED VELVET WAFFLE",
      "CMW CHEF'S SPECIAL  WAFFLE ",
    ],
  },
  {
    title: "Fruit Base Classic Waffle",
    icon: <PiCookieBold className="text-3xl md:text-4xl" />,
    bgColor: "bg-red-50",
    items: [
      "STRAWBERRY WAFFLE",
      "BLUE BERRY WAFFLE",
      "MANGO WAFFLE",
      "MIX BERRY WAFFLE",
      "PINEAPPLE PUNCH",
      "MIX FRUIT WITH CREAM CHEESE",
    ],
  },
  {
    title: "Sandwich & Garlic Breads",
    icon: <IoFastFoodOutline className="text-3xl md:text-4xl" />,
    bgColor: "bg-lime-50",
    items: [
      "VEG GRILLED SANDWICH",
      "VEG CHEESE SANDWICH",
      "CORN CHEESE SANDWICH",
      "CHICKEN GRILLED SANDWICH",
      "CHICKEN CHEESE SANDWICH",
      "CHICKEN MAYO SANDWICH",
      "CHOCOLATE SANDWICH",
      "CHEESE CHILLI TOAST",
      "GARLIC BREAD",
    ],
  },
  {
    title: "Frappuccino (Cold Coffee)",
    icon: <BiDrink className="text-3xl md:text-4xl" />,
    bgColor: "bg-brown-50",
    items: [
      "COFFEE FRAPPE",
      "MOCHA FRAPPE",
      "WHITE MOCHA FRAPPE",
      "IRISH FRAPPE",
      "VANILLA FRAPPE",
      "HAZELNUT FRAPPE (BEST SELLER)",
      "CARAMEL FRAPPE",
      "NUTELLA FRAPPE",
      "DOUBLE CHOCO CHIPS FRAPPE",
    ],
  },
  {
    title: "Ice Cream Milk Shake / Smoothies",
    icon: <BiDrink className="text-3xl md:text-4xl" />,
    bgColor: "bg-pink-50",
    items: [
      "STRAWBERRY SMOOTHIE",
      "BLUE BERRY",
      "MIX BERRY",
      "PINEAPPLE",
      "MANGO",
      "CHOCOLATE",

      "CHOCOLATE HAZELNUT (BEST SELLER)",
      "OREO / KIT KAT",
      "NUTELLA",
    ],
  },
  {
    title: "Ice Cream Bubble Waffle",
    icon: <MdIcecream className="text-3xl md:text-4xl" />,
    bgColor: "bg-cyan-50",
    items: [
      "MOCHA BROWNIE WAFFLE",
      "AMERICAN NUTS BUBBLE WAFFLE",
      "MANGO KING BUBBLE WAFFLE",
      "MR. BELGIAM BUBBLE WAFFLE",
      "MR. CHOCOLATE BUBBLE WAFFLE",
      "MISS. STRAWBERRY BUBBLE WAFFLE",
      "MR. OREO BUBBLE WAFFLE",
      "NUTELLA BUBBLE WAFFLE",
      "ROYAL RED VELVET WAFFLE",
      "CHOCO CHIPS BUBBLE WAFFLE",
    ],
  },
  {
    title: "Ice Cream",
    icon: <MdIcecream className="text-3xl md:text-4xl" />,
    bgColor: "bg-pink-100",
    items: [
      "VANILLA",
      "STRAWBERRY",
      "PINEAPPLE",
      "MANGO",
      "CHOCOLATE",
      "BUTTER SCOTCH",
      "BELGIAN CHOCOLATE",
      "MOCHA BROWNIE",
      "AMERICAN NUTS",
    ],
  },
  {
    title: "Pasta",
    icon: <GiNoodles className="text-3xl md:text-4xl" />,
    bgColor: "bg-rose-50",
    items: [
      "WHITE SAUCE PASTA",
      "RED SAUCE PASTA",
      "CHICKEN WHITE SAUCE PASTA",
      "CHICKEN RED SAUCE PASTA",
      "EXTRA CHEESE",
    ],
  },
];

const Menu: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    name: string;
  } | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, 300); // Match the animation duration
  };

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const menuData: MenuSection[] = [
    {
      title: "Best Seller",
      icon: <MdStars className="text-4xl md:text-5xl" />,
      bgColor: "bg-orange-50",
      items: [
        { name: "Hazzlenut Frappuccino", image: img4 },
        { name: "Kitkat Classic Waffle", image: img8 },
        { name: "Classic Veg Sandwich", image: img34 },
        { name: "White Chocolate Lolly Waffle", image: img13 },
        { name: "Kitkat Shake", image: img7 },
        { name: "Belgian Waffle", image: img23 },
        { name: "White Sauce Pasta", image: img37 },
        { name: "Red Velvet Classic Waffle", image: img25 },
      ],
    },
    // {
    //   title: "Sandwiches & Pasta",
    //   icon: <IoFastFoodOutline className="text-4xl md:text-5xl" />,
    //   bgColor: "bg-yellow-50",
    //   items: [
    //     { name: "Veg Grilled Sandwich and Cappuccino", image: img39 },
    //     { name: "White Sauce Pasta", image: img37 },
    //     { name: "Veg Cheese Sandwich", image: img34 },
    //   ],
    // },
    // {
    //   title: "Shakes",
    //   icon: <BiDrink className="text-4xl md:text-5xl" />,
    //   bgColor: "bg-pink-50",
    //   items: [
    //     { name: "Strawberry Shake", image: img1 },
    //     { name: "Mango Shake", image: img3 },
    //     { name: "Kitkat Shake", image: img7 },
    //     { name: "Blueberry Shake", image: img5 },
    //     { name: "Pineapple Shake", image: img6 },
    //   ],
    // },
    // {
    //   title: "Classic Waffles",
    //   icon: <MdOutlineBreakfastDining className="text-4xl md:text-5xl" />,
    //   bgColor: "bg-amber-50",
    //   items: [
    //     { name: "Honey Classic Waffle", image: img2 },
    //     { name: "Kitkat Classic Waffle", image: img8 },
    //     { name: "White Chocolate Classic Waffle", image: img10 },
    //     { name: "Red Velvet Classic Waffle", image: img25 },
    //     { name: "Milk Chocolate Classic Waffle", image: img26 },
    //     { name: "Oreo Classic Waffle", image: img29 },
    //   ],
    // },
    // {
    //   title: "Lolly Waffles",
    //   icon: <PiCookieBold className="text-4xl md:text-5xl" />,
    //   bgColor: "bg-purple-50",
    //   items: [
    //     { name: "Honey Lolly Waffle", image: img9 },
    //     { name: "Kitkat Lolly Waffle", image: img15 },
    //     { name: "Red Velvet Lolly Waffle", image: img14 },
    //     { name: "Milk Chocolate Lolly Waffle", image: img12 },
    //     { name: "White Chocolate Lolly Waffle", image: img13 },
    //     { name: "Dark Chocolate Lolly Waffle", image: img16 },
    //   ],
    // },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Hero Section with proper spacing for navbar */}
      <div className="bg-gradient-to-r from-[#F57B51] to-[#FFB84D] text-white pt-40 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            data-testid="menu-title"
          >
            Our Delicious Menu
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Explore our handcrafted treats made with love
          </p>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="container mx-auto px-4 py-12">
        {menuData.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="mb-16"
            data-testid={`menu-section-${section.title
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            {/* Section Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="text-[#F57B51]">{section.icon}</div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                {section.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#F57B51] to-[#FFB84D] mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`${section.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group`}
                  data-testid={`menu-item-${item.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  onClick={() =>
                    setSelectedImage({ image: item.image, name: item.name })
                  }
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-94">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-sm font-semibold bg-black/60 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        Click to view
                      </div>
                    </div>
                  </div>

                  {/* Item Name */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 text-center group-hover:text-[#F57B51] transition-colors duration-300">
                      {item.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Full Menu Section - All Items from Excel */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
              data-testid="full-menu-title"
            >
              Complete Menu
            </h2>
            <div className="w-16 h-0.5 bg-[#F57B51] mx-auto"></div>
          </div>

          {/* Flexible Menu Categories Layout - Masonry-like */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {fullMenuData.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="break-inside-avoid mb-4"
                data-testid={`full-menu-section-${section.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[&']/g, "")}`}
              >
                <div className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors duration-300">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#F57B51] to-[#FFB84D] text-white text-xl">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-800 leading-tight">
                        {section.title}
                      </h3>
                      <span className="text-xs text-gray-400">
                        {section.items.length} items
                      </span>
                    </div>
                  </div>

                  {/* Items List */}
                  <ul className="space-y-1.5">
                    {section.items.map((itemName, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 group/item"
                        data-testid={`full-menu-item-${itemName
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                          .replace(/[()\/&']/g, "")}`}
                      >
                        <span className="flex-shrink-0 w-1 h-1 rounded-full bg-[#F57B51] mt-2"></span>
                        <span className="text-gray-600 text-sm leading-tight group-hover/item:text-[#F57B51] transition-colors duration-200">
                          {itemName.replace(" (BEST SELLER)", "")}
                          {itemName.includes("BEST SELLER") && (
                            <span className="ml-1.5 inline-block bg-[#F57B51] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
                              ★
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-[#F57B51] to-[#FFB84D] text-white py-12 px-4 text-center">
        <h3 className="text-3xl font-bold mb-3">Ready to Order?</h3>
        <p className="text-lg opacity-90">Visit us and taste the magic!</p>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className={`fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 ${
            isClosing ? "animate-fadeOut" : "animate-fadeIn"
          }`}
          onClick={handleCloseModal}
          data-testid="fullscreen-modal"
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-[#FFB84D] transition-colors duration-300 z-10"
            onClick={handleCloseModal}
            data-testid="close-modal-button"
            aria-label="Close fullscreen view"
          >
            <IoClose className="text-4xl md:text-5xl" />
          </button>

          {/* Image Name */}
          <div
            className={`absolute top-4 left-4 md:top-8 md:left-8 text-white z-10 ${
              isClosing ? "animate-fadeOut" : "animate-fadeIn"
            }`}
          >
            <h3 className="text-xl md:text-3xl font-bold drop-shadow-lg">
              {selectedImage.name}
            </h3>
          </div>

          {/* Image Container */}
          <div
            className={`relative max-w-7xl max-h-full ${
              isClosing ? "animate-scaleOut" : "animate-scaleIn"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.name}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              data-testid="fullscreen-image"
            />
          </div>

          {/* Instructions */}
          <div
            className={`absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm md:text-base opacity-75 ${
              isClosing ? "animate-fadeOut" : "animate-fadeIn"
            }`}
          >
            Click anywhere to close
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scaleOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.9);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-fadeOut {
          animation: fadeOut 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }

        .animate-scaleOut {
          animation: scaleOut 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Menu;
