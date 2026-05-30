import Hero from "@/components/hero/page";

const destinations = [
    {
      id: 1,
      name: "Kashmir",
      country: "India",
      image:
        "https://images.unsplash.com/photo-1605649487212-47bdab064df7",
      description: "Paradise on Earth with breathtaking valleys and lakes.",
      price: "$499",
    },
    {
      id: 2,
      name: "Bali",
      country: "Indonesia",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      description: "Tropical beaches, temples, and stunning sunsets.",
      price: "$699",
    },
    {
      id: 3,
      name: "Dubai",
      country: "UAE",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      description: "Luxury experiences and world-class attractions.",
      price: "$899",
    },
    {
      id: 4,
      name: "Paris",
      country: "France",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      description: "Romantic streets, culture, and iconic landmarks.",
      price: "$999",
    },
    {
      id: 5,
      name: "Maldives",
      country: "Maldives",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
      description: "Crystal-clear waters and luxury island resorts.",
      price: "$1299",
    },
    {
      id: 6,
      name: "Switzerland",
      country: "Switzerland",
      image:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
      description: "Alpine adventures and scenic mountain views.",
      price: "$1199",
    },
  ];
  
  export default function DestinationsPage() {
    return (
      <main className="bg-slate-50">
        {/* Hero */}
        <Hero 
        image="url('https://images.unsplash.com/photo-1488646953014-85cb44e25828')"
        title1="Explore Destinations,"
        title2="Choose where you want to go"
        description="Discover amazing places around the world and plan your
        next unforgettable adventure."
        />
  
        {/* Search */}
        <section className="-mt-10 relative z-10 mx-auto max-w-6xl px-6 text-slate-400">
          <div className="rounded-3xl bg-white p-6 shadow-xl">
            <div className="grid gap-4 md:grid-cols-4">
              <input
                type="text"
                placeholder="Search destination..."
                className="rounded-xl border p-3 outline-none"
              />
  
              <select className="rounded-xl border p-3">
                <option>All Regions</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Middle East</option>
              </select>
  
              <select className="rounded-xl border p-3">
                <option>Budget</option>
                <option>Economy</option>
                <option>Luxury</option>
              </select>
  
              <button className="rounded-xl bg-cyan-600 p-3 font-semibold text-white hover:bg-cyan-700">
                Search
              </button>
            </div>
          </div>
        </section>
  
        {/* Featured Destination */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <div className="grid lg:grid-cols-2">
              <img
                src="https://images.unsplash.com/photo-1605649487212-47bdab064df7"
                alt="Kashmir"
                className="h-full w-full object-cover"
              />
  
              <div className="flex flex-col justify-center p-10">
                <span className="font-semibold text-cyan-600">
                  Featured Destination
                </span>
  
                <h2 className="mt-3 text-4xl text-slate-400 font-bold">
                  Kashmir
                </h2>
  
                <p className="mt-6 text-slate-600">
                  Experience majestic mountains, serene lakes,
                  beautiful gardens, and unforgettable adventures in
                  one of the world's most scenic destinations.
                </p>
  
                <button className="mt-8 w-fit rounded-xl bg-cyan-600 px-6 py-3 text-white hover:bg-cyan-700">
                  Explore Destination
                </button>
              </div>
            </div>
          </div>
        </section>
  
        {/* Destinations Grid */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Popular Destinations
            </h2>
  
            <p className="mt-4 text-slate-600">
              Choose from our handpicked collection of amazing places.
            </p>
          </div>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-72 w-full object-cover"
                />
  
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">
                      {destination.name}
                    </h3>
  
                    <span className="font-semibold text-cyan-600">
                      {destination.price}
                    </span>
                  </div>
  
                  <p className="mt-1 text-sm text-slate-500">
                    {destination.country}
                  </p>
  
                  <p className="mt-4 text-slate-600">
                    {destination.description}
                  </p>
  
                  <button className="mt-6 w-full rounded-xl bg-slate-900 py-3 text-white hover:bg-cyan-600">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* CTA */}
        <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-24">
          <div className="mx-auto max-w-4xl px-6 text-center text-white">
            <h2 className="text-4xl font-bold md:text-5xl">
              Can't Decide Where To Go?
            </h2>
  
            <p className="mt-6 text-lg text-cyan-100">
              Let us help you find the perfect destination based on
              your budget, interests, and travel style.
            </p>

            <a 
            className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-cyan-700 cursor-pointer" 
            href="/planner">
              Plan My Trip
            </a>
          </div>
        </section>
      </main>
    );
  }