import Hero from "@/components/hero/page";
import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Royal Journey Tours Kashmir to plan your Kashmir trip.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
    return (
      <main className="bg-slate-50">
        {/* Hero Section */}
        <Hero 
          image = "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80')"
          title1 = "Contact Royal Journey Tours Kashmir"
          title2 = "Let's Plan Your Next Adventure"
          description = "Have questions about destinations, trip planning, or travel packages? Our team is ready to help."
        />
  
        {/* Contact Section */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                Get In Touch
              </span>
  
              <h2 className="mt-3 text-4xl font-bold text-slate-900">
                We'd Love To Hear From You
              </h2>
  
              <p className="mt-6 text-lg text-slate-600">
                Whether you're planning a solo adventure, family vacation,
                honeymoon, or business trip, we're here to make your journey
                unforgettable.
              </p>
  
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-cyan-100 p-4">
                  <MapPin
                  size={20}
                  className="shrink-0 text-cyan-400"
                />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Office Address
                    </h3>
                    <p className="text-slate-600">
                    Nowhatta Chowk Near J&K Bank, Srinagar, Kashmir
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-cyan-100 p-4">
                  <Phone
                  size={20}
                  className="shrink-0 text-cyan-400"
                />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Phone Number
                    </h3>
                    <p className="text-slate-600">
                      +91 9682310254
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-cyan-100 p-4">
                  <Mail
                  size={20}
                  className="shrink-0 text-cyan-400"
                />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Email Address
                    </h3>
                    <p className="text-slate-600">
                      royaljourneytnt786@gmail.com
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-cyan-100 p-4">
                  <Clock
                  size={20}
                  className="shrink-0 text-cyan-400"
                />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Working Hours
                    </h3>
                    <p className="text-slate-600">
                      Monday - Saturday
                    </p>
                    <p className="text-slate-600">
                      10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Contact Form */}
            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <h3 className="mb-6 text-2xl font-bold text-slate-900">
                Send Us A Message
              </h3>
  
              <form className="space-y-5">
                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500"
                  />
                </div>
  
                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500"
                  />
                </div>
  
                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Trip Inquiry"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500"
                  />
                </div>
  
                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your travel plans..."
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-500"
                  />
                </div>
  
                <button
                  type="submit"
                  className="w-full rounded-xl bg-cyan-600 px-6 py-4 font-semibold text-white transition hover:bg-cyan-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
  
        {/* Map Placeholder */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex h-96 items-center justify-center rounded-3xl bg-slate-200 text-center">
              <iframe src="https://www.google.co.in/maps/place/Royal+Journey+Tour+and+Travels/@34.0991078,74.8105392,17z/data=!3m1!4b1!4m6!3m5!1s0x38e1856dc6d5e29b:0xdb9bdea562ac2fe!8m2!3d34.0991078!4d74.8131141!16s%2Fg%2F11s_xpzzm5?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D" width="100%" height="400" style={{ border: 0 }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" title="Royal Journey Tours Location" />
            </div>
          </div>
        </section>
      </main>
    );
  }