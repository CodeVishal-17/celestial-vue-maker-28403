import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

const HeroSection = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeRemaining({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%), url(${heroImage})`,
        }}
      />

      {/* Content */}
      <div className="relative h-full flex items-end pb-24 px-6 md:px-12">
        <div className="container mx-auto max-w-2xl animate-fade-in">
          {/* Countdown */}
          <div className="text-xs tracking-widest mb-4 text-muted-foreground uppercase">
            T-{timeRemaining.days}D {timeRemaining.hours}H {timeRemaining.minutes}M {timeRemaining.seconds}S
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-wider leading-tight mb-6">
            STARSHIP'S<br />ELEVENTH FLIGHT TEST
          </h1>

          {/* CTA Button - opens info panel */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              const openPanelFn = (window as any).openInfoPanel;
              if (typeof openPanelFn === 'function') {
                openPanelFn('hero');
              }
            }}
            data-section="hero"
            aria-haspopup="dialog"
            className="group glass-panel scroll-btn px-6 py-3 flex items-center gap-2 text-sm font-medium tracking-wide"
          >
            WATCH
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
