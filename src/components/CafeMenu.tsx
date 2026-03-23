import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const menuCategories = [
  {
    title: "Coffee",
    items: [
      { name: "Espresso", price: "3.50", note: "single origin, rotating" },
      { name: "Cortado", price: "4.50" },
      { name: "Oat Flat White", price: "5.25" },
      { name: "Pour Over", price: "5.00", note: "ask for today's bean" },
      { name: "Cold Brew", price: "5.50", note: "16hr steep" },
      { name: "Chai Latte", price: "5.00", note: "house-spiced" },
    ],
  },
  {
    title: "Kitchen",
    items: [
      { name: "Butter Croissant", price: "4.25", note: "baked at 5am" },
      { name: "Sourdough Toast & Jam", price: "5.50", note: "house-made preserves" },
      { name: "Granola Bowl", price: "8.00", note: "yogurt, seasonal fruit" },
      { name: "Egg Sandwich", price: "9.50", note: "farm eggs, gruyère, arugula" },
      { name: "Avocado Toast", price: "10.00", note: "sourdough, chili flake, lemon" },
      { name: "Quiche of the Day", price: "8.50" },
    ],
  },
];

const CafeMenu = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="menu" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className={isVisible ? "reveal-up" : "opacity-0"}>
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-cafe-warm-gray mb-4 text-center">
            What we serve
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-[1.15] mb-16 text-center">
            Simple things, done well.
          </h2>
        </div>

        {/* Menu card with paper texture */}
        <div
          className={`paper-texture border border-border/60 px-8 py-10 md:px-14 md:py-14 ${isVisible ? "reveal-up" : "opacity-0"}`}
          style={{ animationDelay: "150ms", borderRadius: "2px" }}
        >
          <div className="grid md:grid-cols-2 gap-14">
            {menuCategories.map((cat) => (
              <div key={cat.title}>
                <h3 className="font-serif text-xl text-foreground mb-6 tracking-wide">
                  {cat.title}
                </h3>
                <ul className="space-y-4">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex items-baseline justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <span className="font-sans text-sm text-foreground">
                          {item.name}
                        </span>
                        {item.note && (
                          <span className="font-sans text-xs text-cafe-warm-gray ml-2 italic">
                            — {item.note}
                          </span>
                        )}
                      </div>
                      <span
                        className="flex-shrink-0 font-sans text-sm text-muted-foreground tabular-nums"
                      >
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-cafe-warm-gray font-sans mt-12 italic">
            All prices in USD · Oat, almond & coconut milk available · We source locally when possible
          </p>
        </div>
      </div>
    </section>
  );
};

export default CafeMenu;
