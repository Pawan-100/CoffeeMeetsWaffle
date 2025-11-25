const StorySection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto shadow-lg">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2 21h19v-3H2v3zM20 8H4V6h16v2zm0 2H4v2h16v-2zm-5 4H9v2h6v-2z" />
              </svg>
            </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-8">Our Story</h2>
          <p className="text-2xl text-gray-600 mb-10 max-w-4xl mx-auto italic leading-relaxed">
            "Coffee Meets Waffle started with a simple idea: create a special
            space where people can enjoy amazing coffee and delicious waffles in
            a fun, welcoming environment."
          </p>
          <div className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto space-y-4">
            <p>
              Founded by food lovers with a passion for flavor and memorable
              experiences, we set out to craft unique waffles and perfect coffee
              with the best ingredients.
            </p>
            <p>
              Coffee Meets Waffle is more than just a place to eat—it's a hub
              where people can connect, celebrate moments, and make lasting
              memories, one bite and sip at a time.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-around items-center mt-16 opacity-30">
          <div className="text-8xl transform hover:scale-110 transition-transform">
            🧇
          </div>
          <div className="text-7xl transform hover:scale-110 transition-transform">
            ☕
          </div>
          <div className="text-8xl transform hover:scale-110 transition-transform">
            🧇
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
