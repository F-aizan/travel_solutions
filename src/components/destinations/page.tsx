const destinations = [
  {
    id: 1,
    name: "Gulmarg",
    country: "Kashmir, India",
    image:
      "https://images.unsplash.com/photo-1676441019594-07142b925bc2?auto=format&fit=crop&w=1200&q=85",
    description:
      "Ride the famous Gondola, explore snow-covered slopes, and enjoy breathtaking Himalayan views.",
  },
  {
    id: 2,
    name: "Pahalgam",
    country: "Kashmir, India",
    image:
      "https://images.unsplash.com/photo-1686503069683-9029e0b2ad51?auto=format&fit=crop&w=1200&q=85",
    description:
      "Discover beautiful valleys, pine forests, rivers, and the scenic Betaab Valley.",
  },
  {
    id: 3,
    name: "Sonamarg",
    country: "Kashmir, India",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=85",
    description:
      "Explore the Golden Meadow, snow-capped mountains, and the spectacular Thajiwas Glacier.",
  },
  {
    id: 4,
    name: "Yusmarg",
    country: "Kashmir, India",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=85",
    description:
      "Escape into peaceful meadows, dense pine forests, and stunning mountain landscapes.",
  },
  {
    id: 5,
    name: "Doodhpathri",
    country: "Kashmir, India",
    image:
      "https://images.unsplash.com/photo-1693999024492-8598a389ac7d?auto=format&fit=crop&w=1200&q=85",
    description:
      "Relax in lush green meadows surrounded by mountains, streams, and peaceful landscapes.",
  },
  {
    id: 6,
    name: "Aru Valley",
    country: "Kashmir, India",
    image:
      "https://images.unsplash.com/photo-1706628416807-7994b12d64f8?auto=format&fit=crop&w=1200&q=85",
    description:
      "Experience stunning alpine scenery, pine forests, meadows, and beautiful mountain views.",
  }
];
  
  export default function Destinations() {
    return (
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
              Popular Destinations
            </span>
  
            <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
              Explore Amazing Places
            </h2>
  
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Discover handpicked destinations around Kashmir Valley and
              create unforgettable travel experiences.
            </p>
          </div>
  
          {/* Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
  
                  <div className="absolute bottom-5 left-5 text-white">
                    <h3 className="text-2xl font-bold">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {destination.country}
                    </p>
                  </div>
                </div>
  
                {/* Content */}
                <div className="p-6">
                  <p className="mb-5 text-gray-600">
                    {destination.description}
                  </p>
  
                  <button className="rounded-xl bg-cyan-500 px-5 py-3 font-medium text-white transition hover:bg-cyan-600">
                    Explore More
                  </button>
                </div>
              </div>
            ))}
          </div>
  
          {/* View All Button */}
          <div className="mt-12 text-center cursor-pointer">
            <a className="rounded-xl border-2 border-cyan-500 px-8 py-4 font-semibold text-cyan-600 transition hover:bg-cyan-500 hover:text-white" href="/destinations">
              View All Destinations
            </a>
          </div>
        </div>
      </section>
    );
  }