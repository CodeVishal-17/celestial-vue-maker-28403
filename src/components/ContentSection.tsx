import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ContentSectionProps {
  id: string;
  image: string;
  heading: string;
  description: string;
  ctaText: string;
  imagePosition?: "left" | "right";
  scrollTarget?: string; // ID of section to scroll to
}

const ContentSection = ({
  id,
  image,
  heading,
  description,
  ctaText,
  imagePosition = "right",
  scrollTarget,
}: ContentSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const offset = scrollProgress * 100 - 50;
      
      setParallaxOffset(Math.max(-50, Math.min(50, offset)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden parallax-section"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-75"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%), url(${image})`,
          transform: `translateY(${parallaxOffset * 0.5}px)`,
        }}
      />

      {/* Content */}
      <div className="relative h-full flex items-center px-6 md:px-12">
        <div className="container mx-auto">
          <div
            className={`max-w-xl glass-panel p-8 md:p-12 animate-slide-up ${
              imagePosition === "left" ? "ml-auto" : ""
            }`}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-wider leading-tight mb-6">
              {heading}
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>

            <button 
              onClick={(e) => {
                e.preventDefault();
                const openPanelFn = (window as any).openInfoPanel;
                if (typeof openPanelFn === 'function') {
                  openPanelFn(id);
                }
              }}
              data-section={id}
              aria-haspopup="dialog"
              className="group glass-panel scroll-btn px-6 py-3 flex items-center gap-2 text-sm font-medium tracking-wide"
            >
              {ctaText}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
