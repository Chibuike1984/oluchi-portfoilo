import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CompetenciesSection from "@/components/CompetenciesSection";
import SimulationsSection from "@/components/SimulationsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <CompetenciesSection />
    <SimulationsSection />
    <ServicesSection />
    <TestimonialSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
