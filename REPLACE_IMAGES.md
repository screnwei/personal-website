# Photographer Image Replacement Manifest

This repository contains a full photographer portfolio template built with Next.js, shadcn UI, and Tailwind CSS.
All photograph fields currently use high-resolution **Unsplash placeholder URLs** so the site is fully functional out-of-the-box.

Follow the instructions below to replace the placeholders with your own original photography.

---

## How to Replace Placeholder Images

### Step 1: Add Your Photo Files
Place your original JPEG/PNG/WebP photography files into the `/public/images/` directory:
```bash
public/images/
├── hero-architecture.jpg
├── bio-portrait.jpg
├── photo-subterranean-geometry.jpg
├── photo-portrait-ceramicist.jpg
└── ...
```

### Step 2: Update `data/portfolio.ts`
Open [`data/portfolio.ts`](file:///Users/kevin/multica_workspaces_selfhost/c7d6c324-7bde-4e67-816d-f96c5da6a557/efbf9b18/workdir/personal-website/data/portfolio.ts) and update the `imageUrl` fields to point to your `/images/` path:

```typescript
export const PHOTOS: PhotoItem[] = [
  {
    id: "photo-1",
    title: "Your Title Here",
    category: "architecture",
    imageUrl: "/images/hero-architecture.jpg", // <--- Update here
    aspectRatio: "portrait",
    location: "Tokyo, Japan",
    year: "2025",
    exif: {
      camera: "Leica SL2",
      lens: "APO-Summicron-SL 35mm f/2 ASPH",
      focalLength: "35mm",
      aperture: "f/2.8",
      shutterSpeed: "1/250s",
      iso: "ISO 100"
    },
    description: "Your photograph description note."
  },
  // ...
]
```

---

## Full Image Inventory & Recommendations

| Tag ID | Component Location | Aspect Ratio | Recommended Resolution | Suggested Subject / Visual Direction |
| :--- | :--- | :--- | :--- | :--- |
| `IMG_HERO_FEATURED` | `components/Hero.tsx` & `data/portfolio.ts:photo-1` | 3:4 Portrait | 1200 x 1600 px | Primary signature photograph — architectural structure with strong light and contrast. |
| `IMG_BIO_PORTRAIT` | `components/IntroSection.tsx` | 4:5 Vertical | 1000 x 1250 px | Natural-light portrait of the photographer in working attire or in studio. |
| `IMG_ARCH_01` | `data/portfolio.ts` (`photo-1`) | 3:4 Portrait | 1200 x 1600 px | Minimalist concrete interior or exterior architectural intersection. |
| `IMG_PORT_01` | `data/portfolio.ts` (`photo-2`) | 3:4 Portrait | 1200 x 1600 px | Artist or craftsperson working in natural diffused window light. |
| `IMG_LAND_01` | `data/portfolio.ts` (`photo-3`) | 3:2 Landscape | 1400 x 933 px | Natural landscape or coastal formation under mist/fog. |
| `IMG_STRT_01` | `data/portfolio.ts` (`photo-4`) | 3:4 Portrait | 1200 x 1600 px | Twilight rain or wet asphalt reflections in urban street setting. |
| `IMG_ARCH_02` | `data/portfolio.ts` (`photo-5`) | 3:2 Landscape | 1400 x 933 px | Structural pavilion columns, structural roof elements. |
| `IMG_PORT_02` | `data/portfolio.ts` (`photo-6`) | 3:4 Portrait | 1200 x 1600 px | High-contrast chiaroscuro portrait in studio shadow. |
| `IMG_LAND_02` | `data/portfolio.ts` (`photo-7`) | 3:4 Portrait | 1200 x 1600 px | Calm water or mountain horizon during blue hour / dusk. |
| `IMG_STRT_02` | `data/portfolio.ts` (`photo-8`) | 3:2 Landscape | 1400 x 933 px | Solitary figure on bridge or boulevard during twilight. |
| `IMG_ARCH_03` | `data/portfolio.ts` (`photo-9`) | 3:4 Portrait | 1200 x 1600 px | Atrium void, spiral staircase, shadow geometry. |

---

## In-App Guide
The website UI also features an interactive modal guide accessible via the **"Replace Images"** button in the header navigation or the footer link.
