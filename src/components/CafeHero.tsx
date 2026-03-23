import heroImg from "@/assets/WhatsApp Image 2026-03-23 at 7.56.39 PM(1).jpeg";

const CafeHero = () => {
  return (
    <section className="grain-overlay pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
          {/* Text — offset on the grid */}
          <div className="md:col-span-5 md:col-start-1 reveal-up">
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-cafe-warm-gray mb-6">
              Nesta Cafe
            </p>
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.1] tracking-tight"
            >
              Where mornings
              <br />
              slow down.
            </h1>
            <div className="hand-divider mt-8 mb-6" />
            <p className="text-base font-sans text-muted-foreground max-w-sm leading-relaxed">
              Small-batch coffee, house-baked goods, and a quiet place to breathe. 
              Open every day from seven to four.
            </p>
          </div>

          {/* Hero image — larger, slightly offset */}
          <div className="md:col-span-7 md:col-start-6 reveal-right" style={{ animationDelay: "150ms" }}>
            <div className="relative">
              <img
                src={heroImg}
                alt="Inside Ember & Oak café — warm light, espresso, and plants"
                className="w-full h-[500px] md:h-[480px] object-cover"
                style={{ borderRadius: "2px" }}
                loading="eager"
              />
              {/* Subtle inset shadow for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 40px rgba(0,0,0,0.06)",
                  borderRadius: "2px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeHero;
