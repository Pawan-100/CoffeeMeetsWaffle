interface HomeProps {
  onNavigate: (sectionId: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1554893898-52600b2d7fb4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxjb2ZmZWUlMjB3YWZmbGVzJTIwYnJlYWtmYXN0fGVufDB8fHx8MTc2MzgwNTY0MHww&ixlib=rb-4.1.0&q=85')`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              Dive into our world of
              <br />
              <span className="text-secondary">
                freshly brewed coffee
              </span> and <span className="text-secondary">waffles</span>
              <br />
              crafted to perfection
            </h1>
            <button
              onClick={() => onNavigate("about")}
              data-testid="explore-btn"
              className="bg-primary hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Explore Our Story
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        id="about"
        className="py-24 px-4 bg-gradient-to-b from-white to-orange-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-5xl">☕</span>
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Our Story</h2>
            <p className="text-2xl text-gray-600 mb-10 max-w-4xl mx-auto italic leading-relaxed">
              "Coffee Meets Waffle started with a simple idea: create a special
              space where people can enjoy amazing coffee and delicious waffles
              in a fun, welcoming environment."
            </p>
            <div className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto space-y-4">
              <p>
                Founded by food lovers with a passion for flavor and memorable
                experiences, we set out to craft unique waffles and perfect
                coffee with the best ingredients.
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

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-primary via-orange-500 to-primary py-16 shadow-xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
            <div
              data-testid="stat-waffles"
              className="transform hover:scale-105 transition-transform"
            >
              <div className="text-6xl font-bold mb-3">10,000+</div>
              <div className="text-xl font-semibold tracking-wide">
                Waffles Served
              </div>
              <div className="text-sm mt-2 text-orange-100">
                And counting daily!
              </div>
            </div>
            <div
              data-testid="stat-customers"
              className="transform hover:scale-105 transition-transform"
            >
              <div className="text-6xl font-bold mb-3">5,000+</div>
              <div className="text-xl font-semibold tracking-wide">
                Happy Customers
              </div>
              <div className="text-sm mt-2 text-orange-100">
                Smiles guaranteed
              </div>
            </div>
            <div
              data-testid="stat-locations"
              className="transform hover:scale-105 transition-transform"
            >
              <div className="text-6xl font-bold mb-3">3</div>
              <div className="text-xl font-semibold tracking-wide">
                Locations
              </div>
              <div className="text-sm mt-2 text-orange-100">
                More coming soon!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founders */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1563481911853-c14860cd6947?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZvdW5kZXJzJTIwdGVhbXxlbnwwfHx8fDE3NjM4MDU2NDZ8MA&ixlib=rb-4.1.0&q=85"
                alt="Our Founders"
                className="rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-8 -left-8 text-7xl opacity-20 group-hover:opacity-40 transition-opacity">
                🧇
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Meet Our Founders
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded by food lovers with a passion for flavor and memorable
                experiences, we started this journey with a simple mission—to
                bring together the best of coffee and waffles in one delightful
                experience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our founders envisioned a space where quality ingredients meet
                expert craftsmanship, creating an atmosphere where every
                customer feels at home. Their dedication to excellence drives
                everything we do.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-1 bg-primary rounded"></div>
                <span className="text-primary font-semibold text-lg">
                  Since 2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-24 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Mission & Values
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Quality First
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We use only the finest ingredients and traditional recipes
                      to ensure every waffle and coffee cup exceeds
                      expectations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Community Focused
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We believe in creating moments of joy and building a
                      welcoming space where everyone feels at home.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Sustainability
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We're committed to sustainable practices, from sourcing to
                      serving, to make a positive impact on our planet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1582394196024-4976586db22e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHx3YWZmbGVzJTIwcG93ZGVyZWQlMjBzdWdhcnxlbnwwfHx8fDE3NjM4MDU2NTN8MA&ixlib=rb-4.1.0&q=85"
                alt="Delicious Waffles"
                className="rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Community Engagement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're more than a café—we're part of the community. From local
              events to supporting neighborhood initiatives, we believe in
              giving back and creating connections that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl h-96 group"
              data-testid="community-image-1"
            >
              <img
                src="https://images.unsplash.com/photo-1620434167798-c39eb8b65a79?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwY3VzdG9tZXJzfGVufDB8fHx8MTc2MzgwNTY1OHww&ixlib=rb-4.1.0&q=85"
                alt="Coffee shop community"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">City Centre Location</h3>
                <p className="text-sm text-gray-200 mb-1">
                  2nd Floor, City Centre Mall
                </p>
                <p className="text-xs text-gray-300">Downtown</p>
              </div>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden shadow-xl h-96 bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center group"
              data-testid="community-video"
            >
              <div className="text-center text-white p-8">
                <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">
                  ▶️
                </div>
                <p className="text-2xl font-bold mb-2">Watch Our Journey</p>
                <p className="text-orange-100">Video Coming Soon</p>
              </div>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden shadow-xl h-96 group"
              data-testid="community-image-2"
            >
              <img
                src="https://images.unsplash.com/photo-1541475074124-af32f4cb0dbb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBzaG9wJTIwY3VzdG9tZXJzfGVufDB8fHx8MTc2MzgwNTY1OHww&ixlib=rb-4.1.0&q=85"
                alt="Community events"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Local Partnerships</h3>
                <p className="text-sm text-gray-200">
                  Supporting local farmers & businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div
              className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              data-testid="award-category-1"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⭐</span>
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
                <span className="text-4xl">🍽️</span>
              </div>
              <h3 className="text-primary font-bold text-2xl mb-4">
                Top Rated
              </h3>
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
                <span className="text-4xl">🌟</span>
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
    </>
  );
};

export default Home;
