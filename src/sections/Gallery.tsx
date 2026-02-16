import { useState } from "react";

// All gallery photos from /gallery/ folder
const allGalleryPhotos = [
  "/gallery/WhatsApp Image 2026-02-12 at 5.14.11 PM (1).jpeg",
  "/gallery/WhatsApp Image 2026-02-12 at 5.14.12 PM (1).jpeg",
  "/gallery/WhatsApp Image 2026-02-12 at 5.14.12 PM (2).jpeg",
  "/gallery/WhatsApp Image 2026-02-12 at 5.14.12 PM.jpeg",
  "/gallery/WhatsApp Image 2026-02-12 at 5.14.11 PM.jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.10.41 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.10.41 AM.jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.10.42 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.10.42 AM (2).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.10.42 AM.jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.07 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.07 AM.jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.08 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.08 AM (2).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.08 AM.jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.09 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.09 AM (2).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.09 AM (3).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.09 AM.jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.10 AM (1).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.10 AM (2).jpeg",
  "/gallery/WhatsApp Image 2026-02-14 at 12.13.10 AM.jpeg",
];

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(7);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, allGalleryPhotos.length));
  };

  const visibleImages = allGalleryPhotos.slice(0, visibleCount);
  const hasMore = visibleCount < allGalleryPhotos.length;

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

      {/* Gallery Grid */}
      <div
        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {visibleImages.map((src, idx) => (
          <div key={idx} className="break-inside-avoid mb-4">
            <img
              src={src}
              alt={`TEDxMEC Gallery Photo ${idx + 1}`}
              className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              loading="lazy"
            />
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
            Load More Photos ({allGalleryPhotos.length - visibleCount}{" "}
            remaining)
          </button>
        </div>
      )}
    </section>
  );
}
