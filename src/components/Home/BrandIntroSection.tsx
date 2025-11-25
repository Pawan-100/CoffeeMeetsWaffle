import illustration1 from "../../assets/illustrations/illustration_1.png";
import illustration2 from "../../assets/illustrations/illustration_2.png";
import illustration3 from "../../assets/illustrations/illustration_3.png";

const BrandIntroSection = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-white via-orange-50 to-orange-100 overflow-hidden">
      {/* Background Illustrations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left illustration - now visible on mobile with rotation */}
        <img
          src={illustration1}
          alt=""
          className="absolute left-8 md:left-0 top-1/4 w-24 md:w-32 lg:w-40 opacity-20 transform -translate-x-4 md:-translate-x-8 rotate-12"
        />
        {/* Right illustration - now visible on mobile with rotation */}
        <img
          src={illustration2}
          alt=""
          className="absolute right-8 md:right-0 bottom-1/4 w-24 md:w-32 lg:w-40 opacity-20 transform translate-x-4 md:translate-x-8 -rotate-12"
        />
        {/* Center top illustration - visible on all screens */}
        <img
          src={illustration3}
          alt=""
          className="absolute right-4 lg:right-12 top-8 w-20 lg:w-28 opacity-15 rotate-6"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center">
          {/* Decorative element */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
            <svg
              className="mx-4 w-8 h-8 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2 21h19v-3H2v3zM20 8H4V6h16v2zm0 2H4v2h16v-2zm-5 4H9v2h6v-2z" />
              <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z" />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
          </div>

          {/* Headline */}
          <h2
            className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight px-4"
            data-testid="brand-intro-headline"
          >
            A Brand Built on Taste, Trust & Quality
          </h2>

          {/* Text Content */}
          <p
            className="text-base lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto px-4"
            data-testid="brand-intro-text"
          >
            Coffee Meets Waffle brings together the warmth of handcrafted coffee
            and the joy of freshly made waffles. With a strong presence across
            India, our brand continues to grow through a franchise model that
            welcomes and supports ambitious entrepreneurs — especially women who
            want to build something of their own.
          </p>

          {/* Decorative bottom element */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIntroSection;
