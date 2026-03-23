import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import img1 from "@/assets/WhatsApp Image 2026-03-23 at 7.56.39 PM(1).jpeg";
import img2 from "@/assets/cafe-food-2.jpg";
import img3 from "@/assets/cafe-food-3.jpg";
import img4 from "@/assets/IMG_20260322_212043.jpg.jpeg";

const images = [
  { src: img1, alt: "Freshly baked croissant with coffee", tall: true },
  { src: img2, alt: "Barista pouring latte art", tall: false },
  { src: img3, alt: "Cozy window corner with a book", tall: false },
  { src: img4, alt: "Overhead shot of espresso and pastries", tall: true },
];

const CafeGallery = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="gallery" className="grain-overlay py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={isVisible ? "reveal-up" : "opacity-0"}>
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-cafe-warm-gray mb-4">
            Moments
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-[1.15] mb-14">
            A few quiet scenes.
          </h2>
        </div>

        {/* Masonry-ish asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
          {/* Image 1 — tall left */}
          <div
            className={`col-span-1 md:col-span-5 ${isVisible ? "reveal-left" : "opacity-0"}`}
            style={{ animationDelay: "100ms" }}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-[280px] md:h-[440px] object-cover"
              style={{ borderRadius: "2px" }}
              loading="lazy"
            />
          </div>

          {/* Image 2 + 3 stacked right */}
          <div className="col-span-1 md:col-span-7 flex flex-col gap-3 md:gap-4">
            <div
              className={isVisible ? "reveal-right" : "opacity-0"}
              style={{ animationDelay: "200ms" }}
            >
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="w-full h-[136px] md:h-[212px] object-cover"
                style={{ borderRadius: "2px" }}
                loading="lazy"
              />
            </div>
            <div
              className={isVisible ? "reveal-right" : "opacity-0"}
              style={{ animationDelay: "300ms" }}
            >
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="w-full h-[136px] md:h-[212px] object-cover"
                style={{ borderRadius: "2px" }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Image 4 — full width bottom, short */}
          <div
            className={`col-span-2 md:col-span-12 ${isVisible ? "reveal-up" : "opacity-0"}`}
            style={{ animationDelay: "400ms" }}
          >
            <img
              src={images[3].src}
              alt={images[3].alt}
              className="w-full h-[200px] md:h-[280px] object-cover"
              style={{ borderRadius: "2px" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeGallery;
