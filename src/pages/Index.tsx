import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";

import planetImage from "@/assets/planet.jpg";
import launchImage from "@/assets/launch.jpg";
import dualLandingImage from "@/assets/dual-landing.jpg";
import astronautImage from "@/assets/astronaut.jpg";
import starlinkImage from "@/assets/starlink.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <ContentSection
          id="planet"
          image={planetImage}
          heading="MAKING LIFE MULTIPLANETARY"
          description="SpaceX believes humanity should become a multiplanetary species by establishing a self-sustaining city on Mars. This ambitious goal drives our innovations in rocket technology and spacecraft design."
          ctaText="READ MORE"
          imagePosition="right"
          scrollTarget="launch"
        />
        
        <ContentSection
          id="launch"
          image={launchImage}
          heading="REVOLUTIONIZING SPACE TECHNOLOGY"
          description="Our reusable rocket technology has transformed the economics of spaceflight. By landing and reusing orbital class boosters, we're making space more accessible than ever before."
          ctaText="LEARN MORE"
          imagePosition="left"
          scrollTarget="dual-landing"
        />
        
        <ContentSection
          id="dual-landing"
          image={dualLandingImage}
          heading="WORLD'S LEADING LAUNCH SERVICE PROVIDER"
          description="With proven reliability and the world's only reusable orbital class rockets, we provide cost-effective access to space for commercial and government customers worldwide."
          ctaText="SEE MISSIONS"
          imagePosition="right"
          scrollTarget="astronaut"
        />
        
        <ContentSection
          id="astronaut"
          image={astronautImage}
          heading="ADVANCING HUMAN SPACEFLIGHT"
          description="Dragon is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the International Space Station."
          ctaText="EXPLORE"
          imagePosition="left"
          scrollTarget="starlink"
        />
        
        <ContentSection
          id="starlink"
          image={starlinkImage}
          heading="DELIVERING HIGH-SPEED INTERNET FROM SPACE"
          description="Starlink is the world's first and largest satellite constellation using a low Earth orbit to deliver broadband internet capable of supporting streaming, online gaming, video calls and more."
          ctaText="GET STARLINK"
          imagePosition="right"
          scrollTarget="hero"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
