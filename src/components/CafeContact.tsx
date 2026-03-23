import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
import { MapPin, Clock, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
// import emailjs from "@emailjs/browser";

const CafeContact = () => {
  const { ref, isVisible } = useScrollReveal(0.15);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      // Replace with your EmailJS keys
      // await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_PUBLIC_KEY");
      console.log("Form data:", templateParams); // Demo log
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });
      (e.currentTarget as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="grain-overlay py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:grid-cols-3">
          {/* Info */}
          <div className={`lg:col-span-1 ${isVisible ? "reveal-left" : "opacity-0"}`}>
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
                  <p className="font-sans text-sm text-foreground">Plot no 6, Sy No-809, Korremulat</p>
                  <p className="font-sans text-sm text-muted-foreground">Pocharam</p>
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
                <p className="font-sans text-sm text-foreground">91771 57744</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 ${isVisible ? "reveal-right" : "opacity-0"}`} style={{ animationDelay: "100ms" }}>
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-cafe-warm-gray mb-4">
              Get in touch
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-8">
              Send us a message
            </h3>
            <div className="hand-divider mb-8" />
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="John Doe" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" type="text" placeholder="Inquiry" required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us more about your inquiry..." required />
              </div>
              <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52160.39744564576!2d78.65198293219606!3d17.423624036760078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f0068464a39%3A0xee02de86260568e!2sNESTA%20CAFE!5e0!3m2!1sen!2sin!4v1729810592727!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeContact;
