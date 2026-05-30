import Hero from "@/components/hero/page";

export default function AboutPage() {
    return (
      <main className="bg-slate-50">
        {/* Hero Section */}
        <Hero 
          image =  "url('https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1920&q=80')"
          title1 = "About Travel Solutions,"
          title2 = "Creating Memorable Experience"
          description = "We help travelers discover extraordinary destinations, plan seamless journeys, and create unforgettable memories across the globe."
        />
        {/* <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-700 py-24">
          <div className="mx-auto max-w-7xl px-6 text-center text-white">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              
            </span>
  
            <h1 className="mt-6 text-5xl font-bold md:text-7xl">
              
              <span className="block">Travel Experiences</span>
            </h1>
  
            <p className="mx-auto mt-6 max-w-3xl text-lg text-cyan-100">
              
            </p>
          </div>
        </section> */}
  
        {/* Our Story */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                Our Story
              </span>
  
              <h2 className="mt-3 text-4xl font-bold text-slate-900">
                Passionate About Travel
              </h2>
  
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Travel Solutions was founded with one simple mission:
                to make travel planning easier, smarter, and more
                enjoyable for everyone.
              </p>
  
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                From breathtaking mountain retreats to tropical island
                escapes, we connect travelers with the destinations
                and experiences that matter most.
              </p>
            </div>
  
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828"
                alt="Travel Experience"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
  
        {/* Stats */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 text-center md:grid-cols-4">
              <div>
                <h3 className="text-5xl font-bold text-cyan-600">
                  500+
                </h3>
                <p className="mt-3 text-slate-600">
                  Destinations
                </p>
              </div>
  
              <div>
                <h3 className="text-5xl font-bold text-cyan-600">
                  50K+
                </h3>
                <p className="mt-3 text-slate-600">
                  Happy Travelers
                </p>
              </div>
  
              <div>
                <h3 className="text-5xl font-bold text-cyan-600">
                  100+
                </h3>
                <p className="mt-3 text-slate-600">
                  Travel Guides
                </p>
              </div>
  
              <div>
                <h3 className="text-5xl font-bold text-cyan-600">
                  20+
                </h3>
                <p className="mt-3 text-slate-600">
                  Countries Covered
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Why Choose Us */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
              Why Choose Us
            </span>
  
            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Travel Made Simple
            </h2>
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="mb-4 text-5xl">🌍</div>
  
              <h3 className="text-2xl font-semibold text-slate-900">
                Global Destinations
              </h3>
  
              <p className="mt-4 text-slate-600">
                Explore curated destinations from around the world.
              </p>
            </div>
  
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="mb-4 text-5xl">✈️</div>
  
              <h3 className="text-2xl font-semibold text-slate-900">
                Easy Planning
              </h3>
  
              <p className="mt-4 text-slate-600">
                Organize your trips with intuitive planning tools.
              </p>
            </div>
  
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="mb-4 text-5xl">⭐</div>
  
              <h3 className="text-2xl font-semibold text-slate-900">
                Trusted Experience
              </h3>
  
              <p className="mt-4 text-slate-600">
                Thousands of travelers trust us for their adventures.
              </p>
            </div>
          </div>
        </section>
  
        {/* Team Section */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                Our Team
              </span>
  
              <h2 className="mt-3 text-4xl font-bold text-slate-900">
                Meet The People Behind Travel Solutions
              </h2>
            </div>
  
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[
                "Founder & CEO",
                "Travel Consultant",
                "Destination Expert",
              ].map((role, index) => (
                <div
                  key={index}
                  className="rounded-3xl bg-slate-50 p-8 text-center"
                >
                  <div className="mx-auto h-32 w-32 rounded-full bg-slate-200" />
  
                  <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                    Team Member
                  </h3>
  
                  <p className="mt-2 text-cyan-600">
                    {role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Mission CTA */}
        <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-24 text-center text-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-4xl font-bold md:text-5xl">
              Your Next Adventure Starts Here
            </h2>
  
            <p className="mt-6 text-lg text-cyan-100">
              Let us help you discover new destinations and create
              unforgettable travel experiences.
            </p>
  
            <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-cyan-700 transition hover:scale-105">
              Start Exploring
            </button>
          </div>
        </section>
      </main>
    );
  }