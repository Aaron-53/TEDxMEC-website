import { useState } from "react";

// All gallery photos from /gallery/ folder
const allGalleryPhotos = [
  {
    src: "/gallery/WhatsApp Image 2026-02-12 at 5.14.11 PM (1).jpeg",
    resizeOnHover: false,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-12 at 5.14.12 PM (1).jpeg",
    resizeOnHover: false,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-12 at 5.14.12 PM (2).jpeg",
    resizeOnHover: false,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-12 at 5.14.12 PM.jpeg",
    resizeOnHover: false,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-12 at 5.14.11 PM.jpeg",
    resizeOnHover: false,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-14 at 12.10.41 AM (1).jpeg",
    resizeOnHover: false,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-14 at 12.10.41 AM.jpeg",
    resizeOnHover: false,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-14 at 12.10.42 AM (1).jpeg",
    resizeOnHover: false,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-14 at 12.10.42 AM (2).jpeg",
    resizeOnHover: true,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-14 at 12.10.42 AM.jpeg",
    resizeOnHover: false,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-14 at 12.13.07 AM (1).jpeg",
    resizeOnHover: false,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-14 at 12.13.07 AM.jpeg",
    resizeOnHover: false,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-14 at 12.13.08 AM (1).jpeg",
    resizeOnHover: false,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-14 at 12.13.08 AM (2).jpeg",
    resizeOnHover: false,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-14 at 12.13.08 AM.jpeg",
    resizeOnHover: false,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-14 at 12.13.09 AM (1).jpeg",
    resizeOnHover: true,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-14 at 12.13.09 AM (2).jpeg",
    resizeOnHover: true,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-14 at 12.13.09 AM (3).jpeg",
    resizeOnHover: true,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-14 at 12.13.09 AM.jpeg",
    resizeOnHover: true,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-14 at 12.13.10 AM (1).jpeg",
    resizeOnHover: true,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-14 at 12.13.10 AM (2).jpeg",
    resizeOnHover: true,
  },
  {
    src: "/gallery/WhatsApp Image 2026-02-14 at 12.13.10 AM.jpeg",
    resizeOnHover: true,
  },
];

// Grid layout patterns for variety
const gridLayouts = [
  "col-span-2 row-span-1", // Wide rectangle
  "col-span-1 row-span-1", // Small square
  "col-span-1 row-span-1", // Small square
  "col-span-1 row-span-1", // Small square
];

// Create gallery images with fixed order and layouts
const galleryImages = allGalleryPhotos.map((photo, index) => ({
  src: photo.src,
  alt: `TEDxMEC Gallery Photo ${index + 1}`,
  className: gridLayouts[index % gridLayouts.length],
  resizeOnHover: photo.resizeOnHover,
}));

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, galleryImages.length));
  };

  const visibleImages = galleryImages.slice(0, visibleCount);
  const hasMore = visibleCount < galleryImages.length;

  return (
    <section
      className="relative z-[80] bg-[#F4F6F9] py-24 px-[6vw]"
      id="gallery"
    >
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2
            className="font-sora font-bold uppercase text-[clamp(34px,3.6vw,56px)] leading-[1.05] tracking-[-0.02em] text-gray-900"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            MOMENTS FROM
            <br />
            THE <span className="text-tedx-red">EDGE</span>
          </h2>
          <p
            className="text-gray-600 max-w-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            A few frames from past TEDxMEC editions. The energy, the emotions,
            the ideas.
          </p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[350px]"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {visibleImages.map((img, idx) => (
          <div
            key={idx}
            className={`gallery-item relative overflow-hidden rounded-lg group ${img.className}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className={`w-full h-full object-cover object-center transition-all duration-700 ${
                img.resizeOnHover
                  ? "group-hover:object-contain group-hover:bg-black"
                  : ""
              }`}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={loadMore}
            className="bg-tedx-red hover:bg-tedx-red/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Load More Photos
          </button>
        </div>
      )}
    </section>
  );
}
