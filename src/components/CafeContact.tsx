import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MapPin, Clock, Phone } from "lucide-react";

const CafeContact = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="contact" className="grain-overlay py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Info */}
          <div
            className={`md:col-span-5 ${isVisible ? "reveal-left" : "opacity-0"}`}
          >
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-cafe-warm-gray mb-4">
              Find us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground leading-[1.15] mb-8">
              Come say hello.
            </h2>
            <div className="hand-divider mb-8" />

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-cafe-terracotta mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-sans text-sm text-foreground">3847 SE Division St</p>
                  <p className="font-sans text-sm text-muted-foreground">Portland, OR 97202</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-cafe-terracotta mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-sans text-sm text-foreground">Every day, 7am – 4pm</p>
                  <p className="font-sans text-sm text-muted-foreground">Closed on major holidays</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-cafe-terracotta mt-0.5 flex-shrink-0" />
                <p className="font-sans text-sm text-foreground">(503) 555-0182</p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div
            className={`md:col-span-7 ${isVisible ? "reveal-right" : "opacity-0"}`}
            style={{ animationDelay: "150ms" }}
          >
            <div
              className="w-full h-[300px] md:h-[380px] bg-secondary/60 flex items-center justify-center overflow-hidden"
              style={{ borderRadius: "2px" }}
            >
              <iframe
                title="Ember & Oak location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.1!2d-122.6315!3d45.5051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzE4LjQiTiAxMjLCsDM3JzUzLjQiVw!5e0!3m2!1sen!2sus!4v1"
                className="w-full h-full border-0 grayscale opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeContact;
