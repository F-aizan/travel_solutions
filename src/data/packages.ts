export interface TravelPackage {
    slug: string;
    title: string;
    duration: string;
    price: number;
    originalPrice?: number;
    image: string;
    description: string;
    destinations: string[];
    inclusions: string[];
    exclusions: string[];
    featured?: boolean;
  }
  
  export const packages: TravelPackage[] = [
    {
      slug: "kashmir-3-days",
      title: "Kashmir Quick Escape",
      duration: "3 Days / 2 Nights",
      price: 9999,
      originalPrice: 11999,
      image:
        "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1600&q=85",
      description:
        "A short and memorable Kashmir getaway covering Srinagar, Gulmarg and the beautiful landscapes of the valley.",
      destinations: [
        "Srinagar",
        "Gulmarg",
      ],
      inclusions: [
        "Hotel accommodation",
        "Daily breakfast",
        "Airport pickup and drop",
        "Private sightseeing",
        "Private transportation",
      ],
      exclusions: [
        "Airfare",
        "Gondola tickets",
        "Personal expenses",
        "Lunch and dinner",
      ],
      featured: false,
    },
  
    {
      slug: "kashmir-5-days",
      title: "Kashmir Highlights",
      duration: "5 Days / 4 Nights",
      price: 16999,
      originalPrice: 19999,
      image:
        "https://images.unsplash.com/photo-1634922719192-b4503cf15e07?auto=format&fit=crop&w=1600&q=85",
      description:
        "Explore the most popular destinations of Kashmir including Srinagar, Gulmarg, Pahalgam and Sonamarg.",
      destinations: [
        "Srinagar",
        "Gulmarg",
        "Pahalgam",
        "Sonamarg",
      ],
      inclusions: [
        "4 nights hotel accommodation",
        "Daily breakfast",
        "Airport pickup and drop",
        "Private cab",
        "Sightseeing tours",
        "Shikara ride on Dal Lake",
      ],
      exclusions: [
        "Airfare",
        "Gondola tickets",
        "Lunch and dinner",
        "Personal expenses",
      ],
      featured: true,
    },
  
    {
      slug: "kashmir-6-days",
      title: "Magical Kashmir",
      duration: "6 Days / 5 Nights",
      price: 21999,
      originalPrice: 24999,
      image:
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=85",
      description:
        "Experience Kashmir at its best with a relaxed itinerary covering its famous valleys, meadows and mountain landscapes.",
      destinations: [
        "Srinagar",
        "Gulmarg",
        "Pahalgam",
        "Sonamarg",
        "Doodhpathri",
      ],
      inclusions: [
        "5 nights accommodation",
        "Daily breakfast",
        "Airport transfers",
        "Private transportation",
        "Sightseeing",
        "Shikara ride",
      ],
      exclusions: [
        "Airfare",
        "Adventure activities",
        "Lunch and dinner",
        "Personal expenses",
      ],
      featured: true,
    },
  
    {
      slug: "kashmir-7-days",
      title: "Complete Kashmir Experience",
      duration: "7 Days / 6 Nights",
      price: 25999,
      originalPrice: 29999,
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=85",
      description:
        "A complete Kashmir holiday covering popular destinations as well as peaceful valleys away from the usual tourist routes.",
      destinations: [
        "Srinagar",
        "Gulmarg",
        "Pahalgam",
        "Sonamarg",
        "Doodhpathri",
        "Yusmarg",
      ],
      inclusions: [
        "6 nights accommodation",
        "Daily breakfast",
        "Airport transfers",
        "Private cab",
        "All sightseeing",
        "Shikara ride",
        "Driver allowance",
      ],
      exclusions: [
        "Airfare",
        "Gondola tickets",
        "Adventure activities",
        "Lunch and dinner",
        "Personal expenses",
      ],
      featured: true,
    },
  
    {
      slug: "kashmir-hidden-gems",
      title: "Kashmir Hidden Gems",
      duration: "7 Days / 6 Nights",
      price: 27999,
      originalPrice: 31999,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85",
      description:
        "Discover the quieter side of Kashmir through beautiful meadows, valleys, forests and lesser-explored destinations.",
      destinations: [
        "Srinagar",
        "Aharbal",
        "Yusmarg",
        "Doodhpathri",
        "Bangus Valley",
        "Lolab Valley",
      ],
      inclusions: [
        "6 nights accommodation",
        "Daily breakfast",
        "Private transportation",
        "Airport transfers",
        "Local sightseeing",
        "Experienced driver",
      ],
      exclusions: [
        "Airfare",
        "Lunch and dinner",
        "Adventure activities",
        "Personal expenses",
      ],
      featured: false,
    },
  
    {
      slug: "kashmir-family-holiday",
      title: "Kashmir Family Holiday",
      duration: "6 Days / 5 Nights",
      price: 22999,
      originalPrice: 26999,
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=85",
      description:
        "A comfortable Kashmir family vacation designed around scenic destinations, relaxed sightseeing and memorable experiences.",
      destinations: [
        "Srinagar",
        "Gulmarg",
        "Pahalgam",
        "Sonamarg",
      ],
      inclusions: [
        "5 nights family accommodation",
        "Daily breakfast",
        "Airport transfers",
        "Private vehicle",
        "Sightseeing",
        "Shikara ride",
      ],
      exclusions: [
        "Airfare",
        "Gondola tickets",
        "Lunch and dinner",
        "Personal expenses",
      ],
      featured: false,
    },
  
    {
      slug: "kashmir-honeymoon",
      title: "Kashmir Honeymoon Escape",
      duration: "6 Days / 5 Nights",
      price: 24999,
      originalPrice: 28999,
      image:
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1600&q=85",
      description:
        "A romantic Kashmir getaway featuring beautiful valleys, scenic stays and memorable experiences for couples.",
      destinations: [
        "Srinagar",
        "Gulmarg",
        "Pahalgam",
        "Sonamarg",
      ],
      inclusions: [
        "5 nights accommodation",
        "Daily breakfast",
        "Airport transfers",
        "Private cab",
        "Sightseeing",
        "Shikara ride",
        "Romantic room decoration",
      ],
      exclusions: [
        "Airfare",
        "Gondola tickets",
        "Lunch and dinner",
        "Personal expenses",
      ],
      featured: true,
    },
  ];