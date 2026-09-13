import CTA from "@/components/cta/page";
import Destinations from "@/components/destinations/page";
import Hero from "@/components/hero/page";

export default function Home() {
  return (
    <>
      <Hero 
      image = "url('https://images.unsplash.com/photo-1666696758691-135e8bf83368')"
      title1 = "Explore Beautiful Kashmir,"
      title2 = "One Journey At A Time"
      description="Find breathtaking destinations, create personalized travel plans,
            and turn your dream vacation into reality."
      />
      <Destinations />
      <CTA />
    </>
  );
}
