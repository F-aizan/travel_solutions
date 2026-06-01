import CTA from "@/components/cta/page";
import Destinations from "@/components/destinations/page";
import Footer from "@/components/footer/page";
import Hero from "@/components/hero/page";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero 
      image = "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')"
      title1 = "Explore The World,"
      title2 = "One Journey At A Time"
      description="Find breathtaking destinations, create personalized travel plans,
            and turn your dream vacation into reality."
      />
      <Destinations />
      <CTA />
    </>
  );
}
