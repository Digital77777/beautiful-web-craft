
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { EventsSection } from "@/components/EventsSection";
import { AboutSection } from "@/components/AboutSection";
import { MenuHighlight } from "@/components/MenuHighlight";
import { BookingSection } from "@/components/BookingSection";
import { ContactSection } from "@/components/ContactSection";
import { ImageGallery } from "@/components/ImageGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <AboutSection />
      <ImageGallery />
      <MenuHighlight />
      <BookingSection />
      <EventsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
