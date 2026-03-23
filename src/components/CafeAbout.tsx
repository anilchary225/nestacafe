import aboutImg from "@/assets/IMG_20260322_211543.jpg.jpeg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CafeAbout = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="about" className="grain-overlay py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Image — left, slightly smaller */}
          <div
            className={`md:col-span-5 ${isVisible ? "reveal-left" : "opacity-0"}`}
          >
            <img
              src={aboutImg}
              alt="Ember & Oak storefront at golden hour"
              className="w-full h-[400px] md:h-[520px] object-cover"
              style={{ borderRadius: "2px" }}
              loading="lazy"
            />
          </div>

          {/* Story — right, offset top */}
          <div
            className={`md:col-span-6 md:col-start-7 md:pt-12 ${isVisible ? "reveal-up" : "opacity-0"}`}
            style={{ animationDelay: "120ms" }}
          >
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-cafe-warm-gray mb-4">
              Our story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-[1.15] mb-6">
              Started with a stubborn <br className="hidden md:block" />
              love for good coffee.
            </h2>
            <div className="hand-divider mb-8" />
            <div className="space-y-4 text-base font-sans text-muted-foreground leading-relaxed max-w-lg">
              <p>
                We opened Ember & Oak in a former print shop on SE Division, with a second-hand 
                La Marzocca, a bag of single-origin beans from a farmer we'd met in Guatemala, 
                and zero business plan.
              </p>
              <p>
                Six years later, we still roast in small batches. We still bake everything before 
                sunrise. The espresso machine is new, though — we finally gave in.
              </p>
              <p className="text-cafe-olive italic font-serif text-lg">
                "We don't do fast. We do right."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeAbout;
