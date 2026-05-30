'use client';

interface HeroProps {
  image: string,
  title1: string,
  title2: string,
  description: string
}

export default function Hero({image, title1, title2, description} : HeroProps) {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: image,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen justify-center w-full max-w-7xl items-center px-6">
        <div className="max-w-3xl text-white">
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            {title1}
            <span className="block text-cyan-400">
              {title2}
            </span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
            {description}
          </p>

          {/* Search Box */}
          {/* <div className="mb-8 rounded-2xl bg-white p-4 shadow-2xl">
            <div className="flex flex-col gap-3 md:flex-row">
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-gray-800 outline-none focus:border-cyan-500"
              />

              <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600">
                Search
              </button>
            </div>
          </div> */}

          {/* CTA Buttons */}
          {/* <div className="flex flex-wrap gap-4">
            <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600">
              Start Planning
            </button>

            <button className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
              View Destinations
            </button>
          </div> */}

          {/* Stats */}
          {/* <div className="mt-12 flex flex-wrap gap-10">
            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-gray-300">Destinations</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">50K+</h3>
              <p className="text-gray-300">Happy Travelers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">100+</h3>
              <p className="text-gray-300">Travel Guides</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}