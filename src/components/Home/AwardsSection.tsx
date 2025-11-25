const AwardsSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Awards & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Honored to be recognized for our commitment to quality and
            excellence
          </p>
        </div>

        <div className="flex justify-center items-center space-x-6 mb-16 flex-wrap">
          <div
            className="text-7xl animate-bounce"
            style={{ animationDelay: "0s" }}
          >
            🏆
          </div>
          <div
            className="text-7xl text-gray-400 animate-bounce"
            style={{ animationDelay: "0.1s" }}
          >
            🏆
          </div>
          <div
            className="text-7xl text-amber-600 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          >
            🏆
          </div>
          <div
            className="text-7xl text-gray-700 animate-bounce"
            style={{ animationDelay: "0.3s" }}
          >
            🏆
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div
            className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            data-testid="award-category-1"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <h3 className="text-primary font-bold text-2xl mb-4">
              Best Café 2023
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Awarded "Best Coffee & Waffle Shop" by City Food Awards for
              outstanding quality and customer service.
            </p>
          </div>

          <div
            className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            data-testid="award-category-2"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
              </svg>
            </div>
            <h3 className="text-primary font-bold text-2xl mb-4">Top Rated</h3>
            <p className="text-gray-600 leading-relaxed">
              Consistently rated 4.8+ stars across all platforms with glowing
              reviews from our amazing customers.
            </p>
          </div>

          <div
            className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            data-testid="award-category-3"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <h3 className="text-primary font-bold text-2xl mb-4">
              Community Choice
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Voted "Favorite Local Café" by community members for three years
              running. Thank you for your support!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
