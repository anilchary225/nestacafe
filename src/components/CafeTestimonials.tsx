import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    text: "I come here every Saturday. The cortado is the best in the city, and it's the only place that doesn't rush you.",
    name: "Maren K.",
    detail: "regular since 2019",
  },
  {
    text: "Their sourdough is the real thing. I asked for the recipe once — they just laughed and poured me another coffee.",
    name: "Tomás R.",
    detail: "moved to the neighborhood for this café",
  },
  {
    text: "Quiet enough to read, warm enough to stay. That's all I needed.",
    name: "Priya S.",
    detail: "weekday morning ritual",
  },
];

const CafeTestimonials = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className={isVisible ? "reveal-up" : "opacity-0"}>
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-cafe-warm-gray mb-4 text-center">
            From our guests
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-[1.15] mb-16 text-center">
            Words we keep close.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`${isVisible ? "reveal-up" : "opacity-0"}`}
              style={{ animationDelay: `${150 + i * 100}ms` }}
            >
              <p className="font-serif text-lg text-foreground leading-relaxed italic mb-6">
                "{t.text}"
              </p>
              <div>
                <p className="font-sans text-sm text-foreground">{t.name}</p>
                <p className="font-sans text-xs text-cafe-warm-gray">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CafeTestimonials;
