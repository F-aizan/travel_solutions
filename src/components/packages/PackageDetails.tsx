import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  MapPin,
  XCircle,
} from "lucide-react";
import type { TravelPackage } from "@/data/packages";

interface PackageDetailsProps {
  pkg: TravelPackage;
}

export default function PackageDetails({
  pkg,
}: PackageDetailsProps) {
  return (
    <main className="bg-slate-50">

      {/* Hero */}
      <section className="relative h-[450px] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-12 lg:px-8">
          <div className="text-white">
            <Link
              href="/packages"
              className="mb-5 inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
            >
              <ArrowLeft size={18} />
              Back to Packages
            </Link>

            <h1 className="text-4xl font-bold md:text-5xl">
              {pkg.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-5 text-sm md:text-base">
              <span className="flex items-center gap-2">
                <Clock size={18} />
                {pkg.duration}
              </span>

              <span className="flex items-center gap-2">
                <MapPin size={18} />
                Kashmir, India
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">

          {/* Main Content */}
          <div className="lg:col-span-2">

            {/* Description */}
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                About This Package
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {pkg.description}
              </p>
            </div>

            {/* Destinations */}
            <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Destinations Covered
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {pkg.destinations.map((destination) => (
                  <div
                    key={destination}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                  >
                    <MapPin
                      size={20}
                      className="text-cyan-600"
                    />

                    <span className="font-medium text-slate-700">
                      {destination}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions / Exclusions */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">
                  What's Included
                </h2>

                <div className="mt-5 space-y-3">
                  {pkg.inclusions.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle
                        size={19}
                        className="mt-0.5 shrink-0 text-green-600"
                      />

                      <span className="text-sm text-slate-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">
                  What's Not Included
                </h2>

                <div className="mt-5 space-y-3">
                  {pkg.exclusions.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <XCircle
                        size={19}
                        className="mt-0.5 shrink-0 text-red-500"
                      />

                      <span className="text-sm text-slate-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Booking Card */}
          <aside>
            <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-lg">

              <p className="text-sm text-slate-500">
                Starting from
              </p>

              <div className="mt-1 flex items-center gap-3">
                {pkg.originalPrice && (
                  <span className="text-lg text-slate-400 line-through">
                    ₹{pkg.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}

                <span className="text-3xl font-bold text-slate-900">
                  ₹{pkg.price.toLocaleString("en-IN")}
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-500">
                {pkg.duration}
              </p>

              <Link
                href={`/contact?package=${pkg.slug}`}
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-cyan-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Book This Package
              </Link>

              <Link
                href="/planner"
                className="mt-3 flex w-full items-center justify-center rounded-xl border border-slate-200 py-3 font-semibold text-slate-700 transition hover:border-cyan-600 hover:text-cyan-600"
              >
                Customize This Trip
              </Link>

              <p className="mt-5 text-center text-xs leading-5 text-slate-500">
                Contact us to confirm availability, pricing and
                customize this package according to your requirements.
              </p>

            </div>
          </aside>

        </div>
      </section>
    </main>
  );
}