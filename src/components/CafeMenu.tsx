import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";

const menuCategories = [
  {
    title: "Kitchen",
    items: [
      { name: "MEXICAN GRILL VEG SANDWICH", price: "₹149" },
      { name: "PESTO GRILL CHICKEN SANDWICH", price: "₹169" },
      { name: "JAMAICAN CHICKEN SIZZLER", price: "₹319" },
      { name: "Egg Sandwich", price: "₹149" },
      { name: "CHICKEN STEAK MEAL", price: "₹259" },
      { name: "BUNT GARLIC FRIED RICE", price: "₹239" },
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
                  {cat.items.slice(0, 4).map((item) => (  // Show first 4 items
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
                      <span className="flex-shrink-0 font-sans text-sm text-muted-foreground tabular-nums">
                        {item.price}
                      </span>
                    </li>
                  ))}
                  <li className="pt-4 mt-2 border-t border-border/50">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      asChild
                      className="w-full justify-start text-cafe-terracotta hover:bg-cafe-terracotta/10 hover:text-cafe-terracotta font-sans text-sm"
                    >
                      <a 
                        href="https://globxplorer.s3.ap-south-1.amazonaws.com/crm/documents/misc/Nesta+cafe+Menu+card.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View full menu →
                      </a>
                    </Button>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-cafe-warm-gray font-sans mt-12 italic">
            All prices in INR
          </p>

        </div>
      </div>
    </section>
  );
};

export default CafeMenu;
