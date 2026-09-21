import { notFound } from "next/navigation";
import { MapPin, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { destinations } from "@/data/destinations";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  console.log("slug =" + slug);
  const destination = destinations.find(
    (item) => item.slug === slug.toString()
  );

  if (!destination) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative h-[500px]">
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-16">
          <div className="text-white">
            <div className="mb-4 flex items-center gap-2 text-sm">
              <MapPin size={18} />
              {destination.location}
            </div>

            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              {destination.name}
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-white/90">
              {destination.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[2fr_1fr]">
          {/* Main content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Explore {destination.name}
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Discover the natural beauty and unforgettable experiences of{" "}
              {destination.name}. Whether you're visiting Kashmir with family,
              friends or as a couple, this destination offers something special
              for every traveler.
            </p>

            <h3 className="mt-10 text-2xl font-bold text-gray-900">
              Things to Explore
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {destination.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
                >
                  <CheckCircle className="text-cyan-600" size={20} />

                  <span className="font-medium text-gray-800">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="h-fit rounded-3xl bg-gradient-to-br from-cyan-600 to-blue-700 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold">
              Plan Your {destination.name} Trip
            </h3>

            <p className="mt-4 text-white/90">
              Let Royal Journey Tours create a personalized Kashmir experience
              for you.
            </p>

            <Link
              href="/planner"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-gray-100"
            >
              Plan My Trip
            </Link>

            <Link
              href="/destinations"
              className="mt-4 flex items-center justify-center gap-2 text-sm text-white/90 hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Destinations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
