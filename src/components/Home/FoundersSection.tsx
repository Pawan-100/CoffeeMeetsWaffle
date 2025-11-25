const FoundersSection = () => {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
    );
};

export default FoundersSection;
