import { Link } from "react-router-dom";

const WomenEmpowermentSection = () => {
  const benefits = [
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Priority Investment Support",
      description:
        "Access to special financing options and flexible payment plans designed for women entrepreneurs.",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Dedicated Mentorship Network",
      description:
        "Connect with successful women franchise owners and receive ongoing guidance throughout your journey.",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Comprehensive Training Programs",
      description:
        "Complete operational, marketing, and business management training to ensure your success.",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Fast-Track Setup Process",
      description:
        "Streamlined onboarding with priority assistance to help you launch your outlet faster.",
    },
  ];

  return (
    <section
      className="women-empowerment-section relative py-24 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden"
      data-testid="women-empowerment-section"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          data-testid="women-empowerment-header"
        >
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
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            data-testid="women-empowerment-title"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600">
              Empowering Women
            </span>
            <br />
            to Build Their Own Success
          </h2>

          <p
            className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto px-4"
            data-testid="women-empowerment-intro"
          >
            At Coffee Meets Waffle, we believe every woman deserves the
            opportunity to create her own entrepreneurial journey. Our franchise
            model is designed to support and prioritize women who want to build
            financial independence and make their mark in the business world.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          data-testid="benefits-grid"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100 hover:border-orange-300"
              data-testid={`benefit-card-${index}`}
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div
                  className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-500 to-rose-500 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
                  data-testid={`benefit-icon-${index}`}
                >
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  data-testid={`benefit-title-${index}`}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed flex-grow"
                  data-testid={`benefit-desc-${index}`}
                >
                  {benefit.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-4 h-1 w-0 group-hover:w-12 bg-gradient-to-r from-orange-500 to-rose-500 transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Quote Section */}
        <div
          className="relative mb-12 overflow-hidden rounded-3xl"
          data-testid="motivational-quote-section"
        >
          <div className="bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 p-12 lg:p-16 text-center">
            <div className="max-w-4xl mx-auto">
              <svg
                className="w-16 h-16 text-white/30 mx-auto mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p
                className="text-2xl lg:text-4xl font-bold text-white mb-6 leading-relaxed italic"
                data-testid="motivational-quote"
              >
                "Every woman should create her own story, not follow someone
                else's."
              </p>

              <div className="h-1 w-24 bg-white/40 mx-auto mb-4"></div>

              <p className="text-lg text-white/90 font-medium">
                — Sampada Kulkarni
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center" data-testid="empowerment-cta-container">
          <div className="inline-block bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Entrepreneurial Journey?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Join our community of successful women entrepreneurs and take the
              first step toward building your own business legacy.
            </p>
            <Link
              to="/franchise"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 hover:from-rose-600 hover:via-orange-600 hover:to-amber-600 text-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50"
              data-testid="women-franchise-inquiry-btn"
            >
              <span>Explore Franchise Opportunities</span>
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenEmpowermentSection;
