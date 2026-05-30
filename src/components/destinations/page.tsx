const destinations = [
    {
      id: 1,
      name: "Kashmir",
      country: "India",
      image:
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
      description: "Experience breathtaking mountains, lakes, and valleys.",
    },
    {
      id: 2,
      name: "Dubai",
      country: "UAE",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      description: "Luxury shopping, iconic skyscrapers, and desert adventures.",
    },
    {
      id: 3,
      name: "Paris",
      country: "France",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      description: "The city of love, culture, and world-famous landmarks.",
    },
    {
      id: 4,
      name: "Bali",
      country: "Indonesia",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      description: "Tropical beaches, temples, and stunning landscapes.",
    },
    {
      id: 5,
      name: "Switzerland",
      country: "Switzerland",
      image:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
      description: "Snow-capped mountains and beautiful alpine villages.",
    },
    {
      id: 6,
      name: "Maldives",
      country: "Maldives",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
      description: "Crystal-clear waters and luxurious overwater villas.",
    },
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
              Discover handpicked destinations around the world and
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