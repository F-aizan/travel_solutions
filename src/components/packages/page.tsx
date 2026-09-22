import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { packages } from "@/data/packages";

export default function Packages() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-600">
            Kashmir Tour Packages
          </p>

          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Explore Kashmir With Our Packages
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Choose from carefully planned Kashmir tour packages designed for
            families, couples, friends and adventure seekers.
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.slug}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Featured Badge */}
                {pkg.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-cyan-600 px-3 py-1 text-xs font-semibold text-white">
                    Popular
                  </span>
                )}

                {/* Price */}
                <div className="absolute bottom-4 right-4 rounded-xl bg-white px-4 py-2 shadow-lg">
                  <p className="text-xs text-slate-500">Starting from</p>

                  <div className="flex items-center gap-2">
                    {pkg.originalPrice && (
                      <span className="text-sm text-slate-400 line-through">
                        ₹{pkg.originalPrice.toLocaleString("en-IN")}
                      </span>
                    )}

                    <span className="text-lg font-bold text-slate-900">
                      ₹{pkg.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  {pkg.title}
                </h3>

                {/* Duration */}
                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                  <Clock size={16} className="text-cyan-600" />
                  <span>{pkg.duration}</span>
                </div>

                {/* Destinations */}
                <div className="mt-3 flex items-start gap-2 text-sm text-slate-500">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-cyan-600"
                  />

                  <span>{pkg.destinations.join(" • ")}</span>
                </div>

                {/* Description */}
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
                  {pkg.description}
                </p>

                {/* Button */}
                <Link
                  href={`/packages/${pkg.slug}`}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 font-medium text-white transition hover:bg-cyan-600"
                >
                  View Package
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}