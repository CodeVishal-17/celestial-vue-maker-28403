import { useState, useCallback } from "react";
import { PanelContent } from "@/components/InfoPanel";
import planetImage from "@/assets/planet.jpg";
import launchImage from "@/assets/launch.jpg";
import dualLandingImage from "@/assets/dual-landing.jpg";
import astronautImage from "@/assets/astronaut.jpg";
import starlinkImage from "@/assets/starlink.jpg";

// Static fallback content for each section
const SECTION_CONTENT: Record<string, PanelContent> = {
  hero: {
    title: "STARSHIP'S ELEVENTH FLIGHT TEST",
    description: "Join us for the next generation of space exploration as Starship prepares for its eleventh flight test. This milestone represents years of innovation and brings us closer to making life multiplanetary.",
    image: planetImage,
    imageAlt: "Starship spacecraft",
    ctaLabel: "WATCH LIVE",
    ctaAction: () => {
      window.location.href = "/missions/starship-test";
    },
  },
  planet: {
    title: "MAKING LIFE MULTIPLANETARY",
    description: "SpaceX believes humanity should become a multiplanetary species by establishing a self-sustaining city on Mars. This ambitious goal drives our innovations in rocket technology and spacecraft design. We're developing the technology and infrastructure needed to transport humans and cargo to Mars, ultimately creating a backup of Earth civilization.",
    image: planetImage,
    imageAlt: "Mars planet surface",
    ctaLabel: "VIEW MISSION DETAILS",
    ctaAction: () => {
      window.location.href = "/missions/mars-mission";
    },
  },
  launch: {
    title: "REVOLUTIONIZING SPACE TECHNOLOGY",
    description: "Our reusable rocket technology has transformed the economics of spaceflight. By landing and reusing orbital class boosters, we're making space more accessible than ever before. Each Falcon 9 booster can be flown multiple times, dramatically reducing the cost per launch and enabling more frequent access to space.",
    image: launchImage,
    imageAlt: "Falcon 9 rocket launch",
    ctaLabel: "LEARN MORE",
    ctaAction: () => {
      window.location.href = "/technology#reusability";
    },
  },
  "dual-landing": {
    title: "WORLD'S LEADING LAUNCH SERVICE PROVIDER",
    description: "With proven reliability and the world's only reusable orbital class rockets, we provide cost-effective access to space for commercial and government customers worldwide. Our dual booster landing capability showcases the precision and reliability that has made SpaceX the most trusted name in commercial spaceflight.",
    image: dualLandingImage,
    imageAlt: "Dual Falcon Heavy booster landing",
    ctaLabel: "VIEW ALL MISSIONS",
    ctaAction: () => {
      window.location.href = "/missions";
    },
  },
  astronaut: {
    title: "ADVANCING HUMAN SPACEFLIGHT",
    description: "Dragon is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the International Space Station. Dragon has completed dozens of missions to the ISS, carrying both cargo and crew safely to orbit and back.",
    image: astronautImage,
    imageAlt: "Astronaut in Dragon spacecraft",
    ctaLabel: "VIEW MISSION DETAILS",
    ctaAction: () => {
      window.location.href = "/missions/dragon-crew";
    },
  },
  starlink: {
    title: "DELIVERING HIGH-SPEED INTERNET FROM SPACE",
    description: "Starlink is the world's first and largest satellite constellation using a low Earth orbit to deliver broadband internet capable of supporting streaming, online gaming, video calls and more. With thousands of satellites in orbit and growing, Starlink provides high-speed internet to underserved areas around the globe.",
    image: starlinkImage,
    imageAlt: "Starlink satellites in orbit",
    ctaLabel: "ORDER STARLINK",
    ctaAction: () => {
      window.location.href = "/starlink";
    },
  },
};

export const useInfoPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<PanelContent | null>(null);
  const [loadingSection, setLoadingSection] = useState<string | null>(null);

  const openPanel = useCallback(async (sectionId: string) => {
    setLoadingSection(sectionId);
    
    // Immediately show static content
    const staticContent = SECTION_CONTENT[sectionId];
    if (staticContent) {
      setContent(staticContent);
      setIsOpen(true);
    }

    // Optionally fetch dynamic content from LLM endpoint
    // This will replace static content if successful
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/section-info?section=${sectionId}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
        }
      );

      if (response.ok) {
        const dynamicData = await response.json();
        // Merge dynamic content with static fallback
        setContent({
          ...staticContent,
          ...dynamicData,
          // Preserve the ctaAction from static content
          ctaAction: staticContent.ctaAction,
        });
      }
    } catch (error) {
      // Silently fail - static content is already shown
      console.log("Using static content (dynamic fetch failed):", error);
    } finally {
      setLoadingSection(null);
    }
  }, []);

  const closePanel = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    content,
    loadingSection,
    openPanel,
    closePanel,
    setIsOpen,
  };
};
