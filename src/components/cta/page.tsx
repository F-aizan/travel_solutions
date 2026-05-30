export default function CTA() {
    return (
      <section className="relative overflow-hidden py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700" />
  
        {/* Decorative Elements */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10" />
  
        <div className="relative mx-auto max-w-6xl px-6 text-center text-white">
          <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
            Start Your Next Adventure
          </span>
  
          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Ready To Explore The World?
          </h2>
  
          <p className="mx-auto mt-6 max-w-2xl text-lg text-cyan-100">
            Discover incredible destinations, create personalized travel plans,
            and make unforgettable memories with your next journey.
          </p>
  
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a className="rounded-xl cursor-pointer bg-white px-8 py-4 font-semibold text-cyan-700 transition hover:scale-105" href="/planner">
              Plan My Trip
            </a>
  
            <a className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20" href="/destinations">
              Explore Destinations
            </a>
          </div>
  
          {/* Stats */}
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="mt-2 text-cyan-100">
                Destinations
              </p>
            </div>
  
            <div>
              <h3 className="text-4xl font-bold">50K+</h3>
              <p className="mt-2 text-cyan-100">
                Happy Travelers
              </p>
            </div>
  
            <div>
              <h3 className="text-4xl font-bold">100+</h3>
              <p className="mt-2 text-cyan-100">
                Travel Guides
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }