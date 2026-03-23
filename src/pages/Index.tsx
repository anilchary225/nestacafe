import CafeNav from "@/components/CafeNav";
import CafeHero from "@/components/CafeHero";
import CafeAbout from "@/components/CafeAbout";
import CafeMenu from "@/components/CafeMenu";
import CafeGallery from "@/components/CafeGallery";
import CafeTestimonials from "@/components/CafeTestimonials";
import CafeContact from "@/components/CafeContact";
import CafeFooter from "@/components/CafeFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CafeNav />
      <CafeHero />
      <CafeAbout />
      <CafeMenu />
      <CafeGallery />
      <CafeTestimonials />
      <CafeContact />
      <CafeFooter />
    </div>
  );
};

export default Index;
