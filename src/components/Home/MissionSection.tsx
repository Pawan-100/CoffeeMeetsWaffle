const MissionSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Mission & Values
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
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
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
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
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
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
  );
};

export default MissionSection;
