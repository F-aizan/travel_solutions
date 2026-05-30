"use client";

import Hero from "@/components/hero/page";
import { useState } from "react";

export default function TripPlannerPage() {
  const [trip, setTrip] = useState({
    destination: "",
    travelers: 1,
    budget: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setTrip({
      ...trip,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <Hero 
      image = "url('https://images.openai.com/static-rsc-4/mCWskNz87oJGu8xu6SY4CsrZd60OxBm0nmJ0582rj5e1LZsEQZbz411wNnnSMa-lPNl8Tqsy7dJBww9VvF6mLmg4gABNMt_0F2iGrapoZUQmxpciblIFUzCOin_wEPnvcjdX2O_oJxbtpghR0vXhOMRH4ZJdrs-uw0YMI2mcqcF_tWBRtz071gm7WYQWr9_y?purpose=inline')"
      title1 = "Trip Planner"
      title2 = ""
      description = "Plan your dream vacation with ease. Choose your destination, budget, dates, and travelers to create your perfect journey."
      />

      {/* Planner Form */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">
              Plan Your Journey
            </h2>

            <div className="space-y-6 text-slate-400">
              <div>
                <label className="mb-2 block font-medium">
                  Destination
                </label>

                <input
                  type="text"
                  name="destination"
                  placeholder="e.g. Kashmir"
                  value={trip.destination}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3 outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Number of Travelers
                </label>

                <input
                  type="number"
                  name="travelers"
                  min="1"
                  value={trip.travelers}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3 outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Budget
                </label>

                <select
                  name="budget"
                  value={trip.budget}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3"
                >
                  <option value="">Select Budget</option>
                  <option value="Economy">
                    Economy
                  </option>
                  <option value="Standard">
                    Standard
                  </option>
                  <option value="Luxury">
                    Luxury
                  </option>
                </select>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium">
                    Start Date
                  </label>

                  <input
                    type="date"
                    name="startDate"
                    value={trip.startDate}
                    onChange={handleChange}
                    className="w-full rounded-xl border p-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    End Date
                  </label>

                  <input
                    type="date"
                    name="endDate"
                    value={trip.endDate}
                    onChange={handleChange}
                    className="w-full rounded-xl border p-3"
                  />
                </div>
              </div>

              <button className="w-full rounded-xl bg-cyan-600 py-4 font-semibold text-white transition hover:bg-cyan-700">
                Generate Travel Plan
              </button>
            </div>
          </div>

          {/* Preview Card */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">
              Trip Summary
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl bg-slate-100 p-5">
                <p className="text-sm text-slate-500">
                  Destination
                </p>

                <h3 className="text-xl font-bold">
                  {trip.destination || "Not Selected"}
                </h3>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5">
                <p className="text-sm text-slate-500">
                  Travelers
                </p>

                <h3 className="text-xl font-bold">
                  {trip.travelers}
                </h3>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5">
                <p className="text-sm text-slate-500">
                  Budget Category
                </p>

                <h3 className="text-xl font-bold">
                  {trip.budget || "Not Selected"}
                </h3>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5">
                <p className="text-sm text-slate-500">
                  Travel Dates
                </p>

                <h3 className="text-xl font-bold">
                  {trip.startDate
                    ? `${trip.startDate} → ${trip.endDate}`
                    : "Not Selected"}
                </h3>
              </div>

              <div className="rounded-2xl bg-cyan-50 p-5">
                <h3 className="text-xl font-bold text-cyan-700">
                  Suggested Package
                </h3>

                <p className="mt-2 text-slate-600">
                  Once connected to a backend, this section can
                  generate personalized itineraries, hotel
                  recommendations, and estimated costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Why Use Our Trip Planner?
            </h2>

            <p className="mt-4 text-slate-600">
              Organize your travels faster and smarter.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-8">
              <div className="text-5xl">🗺️</div>
              <h3 className="mt-4 text-2xl font-bold">
                Smart Planning
              </h3>
              <p className="mt-3 text-slate-600">
                Build itineraries based on your travel goals.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8">
              <div className="text-5xl">💰</div>
              <h3 className="mt-4 text-2xl font-bold">
                Budget Friendly
              </h3>
              <p className="mt-3 text-slate-600">
                Discover trips that match your budget.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8">
              <div className="text-5xl">✈️</div>
              <h3 className="mt-4 text-2xl font-bold">
                Personalized Trips
              </h3>
              <p className="mt-3 text-slate-600">
                Get recommendations tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}