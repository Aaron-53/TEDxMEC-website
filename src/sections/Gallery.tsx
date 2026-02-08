import { ArrowRight } from "lucide-react";

const galleryImages = [
  {
    src: "/gallery_1.jpg",
    alt: "Audience",
    className: "col-span-2 row-span-2",
  },
  { src: "/gallery_2.jpg", alt: "Speaker", className: "col-span-1 row-span-2" },
  {
    src: "/gallery_3.jpg",
    alt: "Networking",
    className: "col-span-1 row-span-1",
  },
  { src: "/gallery_4.jpg", alt: "Notes", className: "col-span-1 row-span-1" },
  { src: "/gallery_5.jpg", alt: "Stage", className: "col-span-2 row-span-1" },
  {
    src: "/gallery_6.jpg",
    alt: "Speaker Portrait",
    className: "col-span-1 row-span-2",
  },
  {
    src: "/gallery_7.jpg",
    alt: "Workshop",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/gallery_8.jpg",
    alt: "Performance",
    className: "col-span-2 row-span-1",
  },
  {
    src: "/gallery_9.jpg",
    alt: "Applause",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/gallery_10.jpg",
    alt: "Behind the scenes",
    className: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section
      className="relative z-[80] bg-[#F4F6F9] py-24 px-[6vw]"
      id="gallery"
    >
      {/* Section Header */}
      <div className="mb-12">
        <span
          className="font-mono text-xs uppercase tracking-[0.14em] text-gray-500 mb-4 block"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          GALLERY
        </span>
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
        <a
          href="#"
          className="inline-flex items-center gap-2 mt-6 text-tedx-red font-mono text-sm uppercase tracking-wider hover:underline"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Submit your photos
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Masonry Grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className={`gallery-item relative overflow-hidden rounded-lg group ${img.className}`}
            data-aos="zoom-in"
            data-aos-delay={600 + idx * 80}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-medium text-sm">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
