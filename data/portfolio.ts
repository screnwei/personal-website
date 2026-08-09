export interface ExifData {
  camera: string;
  lens: string;
  focalLength: string;
  aperture: string;
  shutterSpeed: string;
  iso: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  category: "architecture" | "portraits" | "landscapes" | "street";
  imageUrl: string;
  placeholderId: string;
  aspectRatio: "portrait" | "landscape" | "square";
  location: string;
  year: string;
  exif: ExifData;
  description: string;
  recommendedDimensions: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  category: string;
  price: string;
  period: string;
  deliverables: string[];
  notes: string;
  popular?: boolean;
}

export const PHOTOGRAPHER_INFO = {
  name: "Alex Morgan",
  title: "Architectural & Environmental Photographer",
  location: "Tokyo • Paris",
  email: "hello@example.com",
  phone: "+33 (0)1 42 68 55 90",
  bio: "Specializing in spatial geometry, architectural documentation, and environmental portraiture. Over a decade of editorial and private commission work across East Asia and Western Europe.",
  philosophy: "Photography is the observation of light, silence, and structural harmony. My approach emphasizes understated balance, allowing spaces and subjects to speak without artificial distortion.",
  studios: [
    { city: "Paris", address: "Rue de Grenelle, 75007 Paris, France" },
    { city: "Tokyo", address: "Minami-Aoyama, Minato-ku, Tokyo, Japan" }
  ],
  socials: [
    { name: "Instagram", url: "https://instagram.com", handle: "@alexmorgan.photo" },
    { name: "Unsplash", url: "https://unsplash.com", handle: "@alexmorgan" },
    { name: "Behance", url: "https://behance.net", handle: "alexmorgan" }
  ]
};

export const FOCUS_AREAS = [
  {
    code: "01",
    title: "Architecture & Spatial Geometry",
    description: "Documenting built environments, interior volumes, and light interactions for architectural practices and cultural institutions."
  },
  {
    code: "02",
    title: "Environmental Portraiture",
    description: "Capturing artists, craftspeople, and architects within their workspace environments with natural, unposed light."
  },
  {
    code: "03",
    title: "Urban Landscape & Twilight",
    description: "Long-exposure exploration of urban structures during blue hour and transitionary light conditions."
  },
  {
    code: "04",
    title: "Archival Print Editions",
    description: "Fine art pigment prints on museum-quality cotton paper, produced in limited runs with certificates of authenticity."
  }
];

export const PHOTOS: PhotoItem[] = [
  {
    id: "photo-1",
    title: "Subterranean Geometry",
    category: "architecture",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    placeholderId: "IMG_ARCH_01",
    aspectRatio: "portrait",
    location: "Tokyo, Japan",
    year: "2024",
    recommendedDimensions: "1200x1600 (3:4 portrait)",
    exif: {
      camera: "Leica SL2",
      lens: "APO-Summicron-SL 35mm f/2 ASPH",
      focalLength: "35mm",
      aperture: "f/5.6",
      shutterSpeed: "1/125s",
      iso: "ISO 100"
    },
    description: "Minimalist concrete intersection capturing the play of morning light across raw spatial planes."
  },
  {
    id: "photo-2",
    title: "Portrait of a Ceramicist",
    category: "portraits",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    placeholderId: "IMG_PORT_01",
    aspectRatio: "portrait",
    location: "Kyoto, Japan",
    year: "2024",
    recommendedDimensions: "1200x1600 (3:4 portrait)",
    exif: {
      camera: "Hasselblad X2D 100C",
      lens: "XCD 80mm f/1.9",
      focalLength: "80mm",
      aperture: "f/2.4",
      shutterSpeed: "1/200s",
      iso: "ISO 64"
    },
    description: "Quiet moment of reflection in a traditional pottery studio illuminated by diffused window light."
  },
  {
    id: "photo-3",
    title: "Monolith in Mist",
    category: "landscapes",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
    placeholderId: "IMG_LAND_01",
    aspectRatio: "landscape",
    location: "Reykjavík, Iceland",
    year: "2023",
    recommendedDimensions: "1400x933 (3:2 landscape)",
    exif: {
      camera: "Leica M11",
      lens: "Summilux-M 50mm f/1.4 ASPH",
      focalLength: "50mm",
      aperture: "f/8.0",
      shutterSpeed: "1/60s",
      iso: "ISO 100"
    },
    description: "Basalt rock formation shrouded in early morning coastal fog along the southern shore."
  },
  {
    id: "photo-4",
    title: "Rain on Omotesando",
    category: "street",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85",
    placeholderId: "IMG_STRT_01",
    aspectRatio: "portrait",
    location: "Tokyo, Japan",
    year: "2024",
    recommendedDimensions: "1200x1600 (3:4 portrait)",
    exif: {
      camera: "Leica Q3",
      lens: "Summilux 28mm f/1.7 ASPH",
      focalLength: "28mm",
      aperture: "f/2.0",
      shutterSpeed: "1/500s",
      iso: "ISO 400"
    },
    description: "Reflections of neon and wet asphalt during a autumn evening rain shower."
  },
  {
    id: "photo-5",
    title: "Glass & Steel Ribs",
    category: "architecture",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85",
    placeholderId: "IMG_ARCH_02",
    aspectRatio: "landscape",
    location: "Paris, France",
    year: "2023",
    recommendedDimensions: "1400x933 (3:2 landscape)",
    exif: {
      camera: "Leica SL2",
      lens: "Super-Vario-Elmar-SL 16-35mm f/3.5-4.5",
      focalLength: "21mm",
      aperture: "f/11",
      shutterSpeed: "1/30s",
      iso: "ISO 100"
    },
    description: "Rhythmic structural columns of a modern pavilion framing the Parisian sky."
  },
  {
    id: "photo-6",
    title: "Sculptor in Shadow",
    category: "portraits",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85",
    placeholderId: "IMG_PORT_02",
    aspectRatio: "portrait",
    location: "Berlin, Germany",
    year: "2024",
    recommendedDimensions: "1200x1600 (3:4 portrait)",
    exif: {
      camera: "Hasselblad X2D 100C",
      lens: "XCD 55mm f/2.5 V",
      focalLength: "55mm",
      aperture: "f/2.8",
      shutterSpeed: "1/160s",
      iso: "ISO 100"
    },
    description: "High-contrast chiaroscuro study of a stone sculptor evaluating raw marble."
  },
  {
    id: "photo-7",
    title: "Twilight Horizon",
    category: "landscapes",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=85",
    placeholderId: "IMG_LAND_02",
    aspectRatio: "portrait",
    location: "Oslo, Norway",
    year: "2023",
    recommendedDimensions: "1200x1600 (3:4 portrait)",
    exif: {
      camera: "Leica M11",
      lens: "Apo-Telyt-M 135mm f/3.4",
      focalLength: "135mm",
      aperture: "f/5.6",
      shutterSpeed: "1/4s",
      iso: "ISO 64"
    },
    description: "Faint gradient hues across calm fjord waters during arctic twilight."
  },
  {
    id: "photo-8",
    title: "Crossing at Dusk",
    category: "street",
    imageUrl: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1400&q=85",
    placeholderId: "IMG_STRT_02",
    aspectRatio: "landscape",
    location: "Paris, France",
    year: "2024",
    recommendedDimensions: "1400x933 (3:2 landscape)",
    exif: {
      camera: "Leica Q3",
      lens: "Summilux 28mm f/1.7 ASPH",
      focalLength: "28mm",
      aperture: "f/2.8",
      shutterSpeed: "1/125s",
      iso: "ISO 200"
    },
    description: "Solitary figure navigating the Pont des Arts as streetlamps begin to flicker."
  },
  {
    id: "photo-9",
    title: "Atrium Void",
    category: "architecture",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    placeholderId: "IMG_ARCH_03",
    aspectRatio: "portrait",
    location: "Zurich, Switzerland",
    year: "2024",
    recommendedDimensions: "1200x1600 (3:4 portrait)",
    exif: {
      camera: "Leica SL2",
      lens: "Vario-Elmarit-SL 24-90mm f/2.8-4 ASPH",
      focalLength: "24mm",
      aperture: "f/8.0",
      shutterSpeed: "1/60s",
      iso: "ISO 100"
    },
    description: "Curvilinear staircase casting elliptical shadows across concrete walls."
  }
];

export const PRICING_TABLE: PricingPlan[] = [
  {
    id: "editorial",
    name: "Editorial & Portraiture",
    category: "On-Location Shoot",
    price: "€1,200",
    period: "per session",
    deliverables: [
      "Half-day on-location photography (up to 4 hours)",
      "25 color-graded high-resolution digital master files",
      "Online private proofing gallery",
      "Editorial print and digital licensing included",
      "Turnaround within 5 business days"
    ],
    notes: "Ideal for publication features, designer profiles, and personal branding portraits."
  },
  {
    id: "architectural",
    name: "Spatial & Architectural Commission",
    category: "Project Assignment",
    price: "€2,800",
    period: "per day",
    popular: true,
    deliverables: [
      "Full-day spatial documentation (day & twilight capture)",
      "40 fully retouched archival digital masters",
      "Interior & exterior elevation perspectives",
      "Full commercial usage rights for architectural firm portfolio",
      "Raw proofing review session & color matching"
    ],
    notes: "Tailored for architecture studios, interior designers, and developer portfolios."
  },
  {
    id: "archival-print",
    name: "Limited Edition Fine Art Prints",
    category: "Print Collection",
    price: "€450",
    period: "starting price",
    deliverables: [
      "Hahnemühle Photo Rag 308gsm 100% cotton paper",
      "Pigment ink print with 100+ year archival longevity",
      "Edition of 15 + 2 Artist Proofs per image",
      "Hand-signed, dated, and numbered certificate",
      "Custom framing options available upon request"
    ],
    notes: "Collectors and private spaces. Sizing options from 30x40cm to 100x140cm."
  },
  {
    id: "licensing",
    name: "Archive Image Licensing",
    category: "Stock & Library",
    price: "€300",
    period: "per image",
    deliverables: [
      "Rights-managed license tailored to usage scope",
      "Full-resolution TIFF (16-bit) master download",
      "Editorial, book publishing, or exhibition display rights",
      "Instant secure delivery"
    ],
    notes: "For publishers, curators, and brands seeking existing portfolio imagery."
  }
];
