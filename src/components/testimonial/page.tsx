"use client";

import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRef } from "react";

interface Testimonial {
  id: number;
  name: string;
  review: string;
  title: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anonymous User",
    title: "An Unforgettable Kashmir Journey",
    review:
      "Our Kashmir trip was beautifully planned from start to finish. The hotels were comfortable, the itinerary was well organized, and every destination was breathtaking. Royal Journey Tours made our holiday completely stress-free.",
    image: "/testm.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Anonymous User",
    title: "Beautiful Kashmir Experience",
    review:
      "Everything was perfectly arranged for our family trip. Gulmarg, Pahalgam and Sonamarg were absolutely beautiful. The team was helpful throughout the journey and made the entire experience memorable.",
    image: "/testm.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Anonymous User",
    title: "Wonderful Family Holiday",
    review:
      "We had an amazing time exploring Kashmir. The itinerary was comfortable, the arrangements were smooth, and the support from the team was excellent.",
    image: "/testm.png",
    rating: 5,
  },
  {
    id: 4,
    name: "Anonymous User",
    title: "A Trip We Will Remember",
    review:
      "Kashmir was even more beautiful than we imagined. From the peaceful valleys to the snow-covered mountains, everything was wonderful.",
    image: "/testm.png",
    rating: 4,
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = scrollRef.current.clientWidth;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-20">

      {/* Heading */}
      <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
          Traveler Reviews
        </p>

        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          What Our Travelers Say
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Hear from travelers who explored the beauty of Kashmir with Royal
          Journey Tours.
        </p>
      </div>

      {/* Slider */}
      <div className="relative mx-auto max-w-7xl px-6">

        {/* Previous */}
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Previous testimonial"
          className="absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-3 text-gray-700 shadow-lg transition hover:bg-cyan-600 hover:text-white md:flex"
        >
          <ChevronLeft size={22} />
        </button>

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="relative min-w-full snap-center overflow-hidden rounded-3xl bg-[#df4b5d] px-6 py-10 text-white sm:px-10 lg:px-14"
            >
              <div className="grid items-center gap-10 lg:grid-cols-[40%_60%]">

                {/* Image */}
                <div className="flex justify-center">
                  <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border-8 border-white/20 sm:h-[350px] sm:w-[350px]">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} testimonial`}
                      fill
                      className="object-cover"
                      sizes="350px"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative lg:pr-8">

                  {/* Quote */}
                  <Quote
                    size={80}
                    fill="currentColor"
                    strokeWidth={0}
                    className="absolute -right-2 -top-10 text-white/25"
                  />

                  <h3 className="relative z-10 max-w-xl text-2xl font-bold leading-tight sm:text-3xl">
                    {testimonial.title}
                  </h3>

                  {/* Rating */}
                  <div
                    className="mt-5 flex items-center gap-1"
                    aria-label={`${testimonial.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={20}
                        fill={
                          index < testimonial.rating
                            ? "currentColor"
                            : "transparent"
                        }
                        className={
                          index < testimonial.rating
                            ? "text-yellow-300"
                            : "text-white/40"
                        }
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/95">
                    {testimonial.review}
                  </p>

                  {/* Customer */}
                  <div className="mt-8">
                    <p className="font-[cursive] text-3xl italic">
                      {testimonial.name}
                    </p>

                    <div className="mt-2 h-[2px] w-14 bg-white/70" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Next testimonial"
          className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white p-3 text-gray-700 shadow-lg transition hover:bg-cyan-600 hover:text-white md:flex"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Mobile hint */}
      <div className="mt-5 text-center text-sm text-gray-400 md:hidden">
        ← Swipe to see more reviews →
      </div>
    </section>
  );
}

