export interface Destination {
  slug: string;
  name: string;
  location: string;
  description: string;
  image: string;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    slug: "gulmarg",
    name: "Gulmarg",
    location: "Baramulla, Kashmir",
    description:
      "Gulmarg is one of Kashmir's most beautiful destinations, famous for its snow-covered mountains, meadows and Gondola ride.",
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1600&q=85",
    highlights: ["Gulmarg Gondola", "Snow activities", "Skiing", "Khilanmarg"],
  },
  {
    slug: "pahalgam",
    name: "Pahalgam",
    location: "Anantnag, Kashmir",
    description:
      "Pahalgam is surrounded by lush green valleys, rivers and spectacular Himalayan landscapes.",
    image:
      "https://images.unsplash.com/photo-1634922719192-b4503cf15e07?auto=format&fit=crop&w=1600&q=85",
    highlights: [
      "Betaab Valley",
      "Aru Valley",
      "Baisaran Valley",
      "Lidder River",
    ],
  },
  {
    slug: "sonamarg",
    name: "Sonamarg",
    location: "Ganderbal, Kashmir",
    description:
      "Sonamarg, meaning Meadow of Gold, is known for its spectacular mountains, glaciers and alpine scenery.",
    image:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=85",
    highlights: [
      "Thajiwas Glacier",
      "Zero Point",
      "Sind River",
      "Mountain views",
    ],
  },
  {
    slug: "yusmarg",
    name: "Yusmarg",
    location: "Budgam, Kashmir",
    description:
      "Yusmarg is a peaceful meadow surrounded by forests and mountains, away from the busier tourist areas.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=85",
    highlights: ["Doodhganga", "Nilnag Lake", "Meadows", "Forest walks"],
  },
  {
    slug: "doodhpathri",
    name: "Doodhpathri",
    location: "Budgam, Kashmir",
    description:
      "Doodhpathri is a beautiful alpine meadow surrounded by green hills, streams and pine forests.",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1600&q=85",
    highlights: [
      "Doodhpathri Meadows",
      "Streams",
      "Pine forests",
      "Horse riding",
    ],
  },
  {
    slug: "aru-valley",
    name: "Aru Valley",
    location: "Pahalgam, Kashmir",
    description:
      "Aru Valley is a scenic mountain valley near Pahalgam known for its lush landscapes and peaceful surroundings.",
    image:
      "https://images.unsplash.com/photo-1706628416807-7994b12d64f8?auto=format&fit=crop&w=1600&q=85",
    highlights: ["Aru Village", "Mountain scenery", "Horse riding", "Trekking"],
  },
  {
    slug: "aharbal",
    name: "Aharbal",
    location: "Kulgam, Kashmir",
    description:
      "Aharbal is a scenic destination known for its spectacular waterfall, lush meadows, pine forests and peaceful mountain surroundings.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=85",
    highlights: ["Aharbal Waterfall", "Kausar Nag", "Pine forests", "Meadows"],
  },
  {
    slug: "bangus-valley",
    name: "Bangus Valley",
    location: "Kupwara, Kashmir",
    description:
      "Bangus Valley is a pristine high-altitude valley surrounded by mountains and vast green meadows, offering a peaceful escape into Kashmir's natural beauty.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",
    highlights: [
      "Bangus Meadows",
      "Mountain landscapes",
      "Alpine scenery",
      "Nature walks",
    ],
  },
  {
    slug: "lolab-valley",
    name: "Lolab Valley",
    location: "Kupwara, Kashmir",
    description:
      "Lolab Valley is a beautiful and tranquil valley surrounded by mountains, lush forests, streams and traditional Kashmiri villages.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85",
    highlights: [
      "Lolab Meadows",
      "Lush forests",
      "Mountain views",
      "Kashmiri villages",
    ],
  },
];
