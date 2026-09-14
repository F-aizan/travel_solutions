import Hero from "@/components/hero/page";

const destinations = [
  {
    id: 1,
    name: "Gulmarg",
    country: "Kashmir, India",
    image:
      "https://images.unsplash.com/photo-1676441019594-07142b925bc2?auto=format&fit=crop&w=1200&q=85",
    description:
      "Experience snow-covered mountains, the famous Gondola, skiing, and breathtaking alpine views.",
  },
  {
    id: 2,
    name: "Pahalgam",
    country: "Kashmir, India",
    image:
      "https://images.unsplash.com/photo-1686503069683-9029e0b2ad51?auto=format&fit=crop&w=1200&q=85",
    description:
      "Explore peaceful valleys, pine forests, the Lidder River, and the beautiful Betaab Valley.",
  },
  {
    id: 3,
    name: "Sonamarg",
    country: "Kashmir, India",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=85",
    description:
      "Discover the Golden Meadow, majestic mountains, glaciers, and stunning Himalayan landscapes.",
  },
  {
    id: 4,
    name: "Yusmarg",
    country: "Kashmir, India",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=85",
    description:
      "Escape into peaceful meadows, dense pine forests, and beautiful mountain scenery.",
  },
  {
    id: 5,
    name: "Doodhpathri",
    country: "Kashmir, India",
    image:
      "https://images.unsplash.com/photo-1693999024492-8598a389ac7d?auto=format&fit=crop&w=1200&q=85",
    description:
      "Relax among lush green meadows, flowing streams, and spectacular mountain surroundings.",
  },
  {
    id: 6,
    name: "Aru Valley",
    country: "Kashmir, India",
    image:
      "https://images.unsplash.com/photo-1661747340818-df15f186554e?auto=format&fit=crop&w=1200&q=85",
    description:
      "Enjoy breathtaking alpine meadows, mountain streams, pine forests, and scenic trekking routes.",
  },
  {
    id: 7,
    name: "Aharbal",
    country: "Kashmir, India",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
    description:
      "Visit the spectacular Aharbal Waterfall surrounded by lush forests and peaceful mountain landscapes.",
  },
  {
    id: 8,
    name: "Bangus Valley",
    country: "Kashmir, India",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    description:
      "Discover untouched alpine meadows, rolling hills, and a serene landscape away from the crowds.",
  },
  {
    id: 9,
    name: "Lolab Valley",
    country: "Kashmir, India",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
    description:
      "Explore a hidden paradise of green meadows, forests, streams, and traditional Kashmiri villages.",
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
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-cyan-700 cursor-pointer" 
            href="/planner"
            >
              Plan My Trip
            </a>
          </div>
        </section>
      </main>
    );
  }