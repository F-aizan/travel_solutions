import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  siFacebook,
  siInstagram,
  SimpleIcon,
  siX,
  siYoutube,
} from "simple-icons";

export default function Footer() {

  function BrandIcon({ icon, size = 20 }: { icon: SimpleIcon; size?: number }) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={icon.path} />
      </svg>
    );
  }
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Royal Journey
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
              <li className="transition hover:text-cyan-400">
                Gulmarg
              </li>

              <li className="transition hover:text-cyan-400">
                Pahalgam
              </li>

              <li className="transition hover:text-cyan-400">
                Sonamarg
              </li>

              <li className="transition hover:text-cyan-400">
                Yusmarg
              </li>

              <li className="transition hover:text-cyan-400">
                Doodhpathri
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <ul className="space-y-4">
              {/* Location */}
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-0.5 shrink-0 text-cyan-400"
                />

                <span>Nowhatta, Srinagar, Kashmir</span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="shrink-0 text-cyan-400"
                />

                <a
                  href="tel:+919876543210"
                  className="transition hover:text-cyan-400"
                >
                  +91 9682310254
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="shrink-0 text-cyan-400"
                />

                <a
                  href="mailto:info@travelsolutions.com"
                  className="transition hover:text-cyan-400"
                >
                  royaljourneytnt786@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
{/* Social Icons */}
<div className="mt-7 flex gap-3">

  {/* Facebook */}
  <a
    href="#"
    aria-label="Facebook"
    className="flex h-10 w-10 items-center justify-center rounded-full
               bg-slate-800 text-gray-300
               transition-all duration-300
               hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white"
  >
    <BrandIcon icon={siFacebook} size={19} />
  </a>

  {/* Instagram */}
  <a
    href="#"
    aria-label="Instagram"
    className="flex h-10 w-10 items-center justify-center rounded-full
               bg-slate-800 text-gray-300
               transition-all duration-300
               hover:-translate-y-1 hover:bg-[#E4405F] hover:text-white"
  >
    <BrandIcon icon={siInstagram} size={19} />
  </a>

  {/* X */}
  <a
    href="#"
    aria-label="X"
    className="flex h-10 w-10 items-center justify-center rounded-full
               bg-slate-800 text-gray-300
               transition-all duration-300
               hover:-translate-y-1 hover:bg-black hover:text-white"
  >
    <BrandIcon icon={siX} size={18} />
  </a>

  {/* YouTube */}
  <a
    href="#"
    aria-label="YouTube"
    className="flex h-10 w-10 items-center justify-center rounded-full
               bg-slate-800 text-gray-300
               transition-all duration-300
               hover:-translate-y-1 hover:bg-[#FF0000] hover:text-white"
  >
    <BrandIcon icon={siYoutube} size={20} />
  </a>

</div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Royal Journey. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

