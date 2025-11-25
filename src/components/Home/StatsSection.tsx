const StatsSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary via-orange-500 to-primary py-16 shadow-xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center text-white">
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
            <div className="text-xl font-semibold tracking-wide">Locations</div>
            <div className="text-sm mt-2 text-orange-100">
              More coming soon!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
