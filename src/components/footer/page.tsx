import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Travel Solutions
            </h2>

            <p className="mt-4 leading-relaxed text-gray-400">
              Discover breathtaking destinations, plan unforgettable trips,
              and create memories that last a lifetime.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-cyan-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/destinations"
                  className="transition hover:text-cyan-400"
                >
                  Destinations
                </Link>
              </li>

              <li>
                <Link
                  href="/planner"
                  className="transition hover:text-cyan-400"
                >
                  Trip Planner
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-cyan-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Popular Destinations
            </h3>

            <ul className="space-y-3">
              <li>Kashmir</li>
              <li>Dubai</li>
              <li>Bali</li>
              <li>Paris</li>
              <li>Maldives</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <ul className="space-y-3">
              <li>📍 Srinagar, Kashmir</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@travelsolutions.com</li>
            </ul>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500"
              >
                📘
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500"
              >
                📷
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500"
              >
                🐦
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500"
              >
                ▶️
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Travel Solutions. All rights
            reserved.
          </p>

          {/* <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-cyan-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-cyan-400"
            >
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}