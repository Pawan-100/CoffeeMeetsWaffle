const CommunitySection = () => {
  return (
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
  );
};

export default CommunitySection;
