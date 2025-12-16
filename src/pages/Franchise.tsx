import React, { useEffect, useState } from "react";

const Franchise: React.FC = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cityState: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log(e);
    // For Netlify Forms, we don't prevent default
    // The form will submit naturally to Netlify
    setIsSubmitted(true);
  };

  // Why Franchise Benefits
  const whyFranchiseBenefits = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Proven Business Model",
      description:
        "Join a brand with a track record of success across multiple locations in India.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Customer Love & Loyalty",
      description:
        "Our unique coffee-waffle combination has built a dedicated customer base that keeps coming back.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: "Fast Growth Potential",
      description:
        "Be part of a rapidly expanding brand with high growth potential in the F&B industry.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      title: "Strong Brand Value",
      description:
        "Leverage our established brand identity, quality standards, and marketing excellence.",
    },
  ];

  // Franchise Benefits
  const franchiseBenefits = [
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      title: "Supply & Operational Support",
      description:
        "Complete supply chain management and operational guidance for smooth running.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Low Investment Opportunity",
      description:
        "Start your business with minimal investment and maximum potential returns.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: "High & Quick Returns",
      description:
        "Proven business model with high ROI and quick break-even potential.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Staff Training & Support",
      description:
        "Comprehensive training for you and your staff on operations and product preparation.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4H7v-4H5a2 2 0 01-2-2v-6a2 2 0 012-2h2V4a1 1 0 011-1h8a1 1 0 011 1v4z"
          />
        </svg>
      ),
      title: "Delivery Brand Tie-Ups",
      description:
        "Support with major delivery platforms like Zomato, Swiggy for maximum reach.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      title: "Brand & Marketing",
      description:
        "Complete branding kit with digital screen menu and marketing materials.",
    },
  ];

  // Women-Centric Benefits
  const womenBenefits = [
    {
      title: "Discounted Franchise Fees",
      description:
        "Special reduced franchise fees exclusively for women entrepreneurs.",
      highlight: "Up to 20% Off",
    },
    {
      title: "Priority Onboarding",
      description:
        "Fast-tracked application processing and dedicated onboarding support.",
      highlight: "Express Process",
    },
    {
      title: "Mentorship Program",
      description:
        "Access to successful women franchise owners for guidance and networking.",
      highlight: "Peer Support",
    },
    {
      title: "Flexible Payment Plans",
      description:
        "Customized payment options designed to ease the investment journey.",
      highlight: "Easy EMI",
    },
  ];

  // Franchise Models
  const franchiseModels = [
    {
      name: "Express Kiosk",
      investment: "Contact for Details",
      area: "500 sq. ft.",
      features: [
        "Express takeaway counter",
        "Limited casual seating",
        "Digital Screen Menu",
        "Bright & vibrant ambience",
      ],
      ideal: "First-time entrepreneurs",
    },
    {
      name: "Standard Café",
      investment: "Contact for Details",
      area: "500 - 750 sq. ft.",
      features: [
        "Full menu offering",
        "Comfortable dine-in seating",
        "Mall/High-traffic locations",
        "Attractive waffle display",
      ],
      ideal: "Growing entrepreneurs",
    },
    {
      name: "Premium Outlet",
      investment: "Contact for Details",
      area: "750 - 1000 sq. ft.",
      features: [
        "Complete dining experience",
        "Premium branding",
        "Full product range",
        "Events & gathering space",
      ],
      ideal: "Experienced investors",
    },
  ];

  // Steps to Get Started
  const steps = [
    {
      step: 1,
      title: "Apply",
      description:
        "Fill out the franchise inquiry form with your details and interest.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      step: 2,
      title: "Screening",
      description:
        "Our team reviews your application and schedules an introductory call.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      step: 3,
      title: "Training",
      description:
        "Complete our comprehensive training program on operations and products.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      step: 4,
      title: "Launch",
      description:
        "Grand opening with our team by your side to ensure a successful start.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="franchise-page" data-testid="franchise-page">
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
        data-testid="franchise-hero"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-primary/20 rounded-full border border-primary/30">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm font-semibold text-primary">
                Franchise Opportunity
              </span>
            </span>
          </div>

          <h1
            className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            data-testid="franchise-main-title"
          >
            Own Your Own
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-amber-400">
              Coffee Meets Waffle
            </span>
          </h1>

          <p
            className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            data-testid="franchise-intro-text"
          >
            Join India's fastest-growing coffee and waffle brand. Partner with
            us to build a profitable business backed by quality, taste, and a
            brand customers love.
          </p>

          <a
            href="#franchise-form"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary/30"
            data-testid="hero-apply-btn"
          >
            <span>Apply Now</span>
            <svg
              className="w-5 h-5"
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
          </a>
        </div>
      </section>

      {/* Why Franchise With Us Section */}
      <section
        className="py-20 px-4 bg-white"
        data-testid="why-franchise-section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6"
              data-testid="why-franchise-title"
            >
              Why Franchise With{" "}
              <span className="text-primary">Coffee Meets Waffle</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Partner with a brand that stands for quality, consistency, and
              rapid growth. Here's why Coffee Meets Waffle is the right choice
              for your entrepreneurial journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyFranchiseBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100 hover:border-primary/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-testid={`why-franchise-card-${index}`}
              >
                <div className="w-14 h-14 mb-6 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Benefits Section */}
      <section
        className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50"
        data-testid="franchise-benefits-section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
              What You Get
            </span>
            <h2
              className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6"
              data-testid="franchise-benefits-title"
            >
              Franchise Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to run a successful Coffee Meets
              Waffle outlet. From training to marketing, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {franchiseBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-start gap-4"
                data-testid={`franchise-benefit-${index}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white transition-all duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Women-Centric Benefits Section */}
      <section
        className="py-20 px-4 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 overflow-hidden relative"
        data-testid="women-centric-section"
      >
        <div className="absolute top-10 right-10 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-rose-500/10 to-orange-500/10 rounded-full border border-rose-200">
                <svg
                  className="w-5 h-5 text-rose-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">
                  Women First Initiative
                </span>
              </span>
            </div>
            <h2
              className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6"
              data-testid="women-centric-title"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600">
                Women-Centric
              </span>{" "}
              Benefits
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At Coffee Meets Waffle, we believe in empowering women
              entrepreneurs. We offer exclusive benefits to support women who
              want to build their own business legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {womenBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-rose-100 hover:border-rose-300"
                data-testid={`women-benefit-${index}`}
              >
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-rose-500 to-orange-500 text-white text-xs font-bold rounded-full mb-4">
                  {benefit.highlight}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="mt-4 h-1 w-0 group-hover:w-12 bg-gradient-to-r from-rose-500 to-orange-500 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Models / Investment Details Section */}
      <section
        className="py-20 px-4 bg-white"
        data-testid="franchise-models-section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
              Investment Options
            </span>
            <h2
              className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6"
              data-testid="franchise-models-title"
            >
              Franchise Models
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the model that fits your investment capacity and business
              goals. Each model comes with complete support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {franchiseModels.map((model, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  index === 1
                    ? "border-primary shadow-xl scale-105"
                    : "border-gray-200 hover:border-primary/50"
                }`}
                data-testid={`franchise-model-${index}`}
              >
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-white text-center py-2 text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <div className={`p-8 ${index === 1 ? "pt-12" : ""}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {model.name}
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {model.investment}
                  </div>
                  <div className="text-gray-500 text-sm mb-6">
                    Area: {model.area}
                  </div>

                  <div className="border-t border-gray-100 pt-6 mb-6">
                    <p className="text-sm text-gray-500 mb-3 font-medium">
                      Key Features:
                    </p>
                    <ul className="space-y-3">
                      {model.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <svg
                            className="w-5 h-5 text-green-500 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 -mx-8 px-8 py-4 -mb-8">
                    <p className="text-sm">
                      <span className="text-gray-500">Ideal for: </span>
                      <span className="font-semibold text-gray-800">
                        {model.ideal}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-gray-500 text-sm">
            * Required property type: Commercial or High Residential area.
            Contact us for detailed investment figures and customized options.
          </p>
        </div>
      </section>

      {/* Steps to Get Started Section */}
      <section
        className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        data-testid="steps-section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/20 text-primary font-semibold rounded-full text-sm mb-4">
              Your Journey
            </span>
            <h2
              className="text-3xl lg:text-5xl font-bold text-white mb-6"
              data-testid="steps-title"
            >
              Steps to Get Started
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From application to grand opening, we're with you every step of
              the way. Here's how your franchise journey unfolds.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative"
                  data-testid={`step-${index}`}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2 h-full">
                    <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30 relative z-10 mx-auto lg:mx-0">
                      {step.icon}
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 text-center lg:text-left">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-center lg:text-left">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Inquiry Form Section */}
      <section
        id="franchise-form"
        className="py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-amber-50"
        data-testid="franchise-form-section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
              Get In Touch
            </span>
            <h2
              className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6"
              data-testid="form-title"
            >
              Franchise Inquiry
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your journey with Coffee Meets Waffle? Fill out the
              form below and our team will reach out to you soon.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
            {isSubmitted ? (
              <div
                className="text-center py-12"
                data-testid="form-success-message"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Your inquiry has been submitted successfully. Our team will
                  contact you soon.
                </p>
              </div>
            ) : (
              <form
                name="franchise-form"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                data-testid="franchise-inquiry-form"
              >
                {/* Hidden inputs for Netlify */}
                <input type="hidden" name="form-name" value="franchise-form" />
                <input type="hidden" name="bot-field" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                      placeholder="Enter your full name"
                      data-testid="input-fullname"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                      placeholder="your@email.com"
                      data-testid="input-email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                      placeholder="+91 XXXXX XXXXX"
                      data-testid="input-phone"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cityState"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      City / State *
                    </label>
                    <input
                      type="text"
                      id="cityState"
                      name="cityState"
                      required
                      value={formData.cityState}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                      placeholder="e.g., Mumbai, Maharashtra"
                      data-testid="input-city-state"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 resize-none"
                      placeholder="Tell us about your interest and any questions you might have..."
                      data-testid="input-message"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    data-testid="submit-inquiry-btn"
                  >
                    <span>Submit Inquiry</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="py-20 px-4 bg-gradient-to-r from-primary via-orange-500 to-secondary"
        data-testid="final-cta-section"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl lg:text-5xl font-bold text-white mb-6"
            data-testid="final-cta-title"
          >
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join the Coffee Meets Waffle family today and turn your
            entrepreneurial dreams into reality. We're excited to partner with
            passionate individuals like you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#franchise-form"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              data-testid="final-apply-btn"
            >
              <span>Apply For Franchise Today</span>
              <svg
                className="w-5 h-5"
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
            </a>
            <a
              href="tel:+915551234567"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              data-testid="request-callback-btn"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Request a Call Back</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Franchise;
