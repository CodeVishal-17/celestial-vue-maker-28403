import { useState } from "react";
import { Play, Rocket, Cpu, Satellite, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";

const Technology = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{ url?: string; title: string }>({
    url: undefined,
    title: "",
  });

  const technologies = [
    {
      id: "reusability",
      icon: Rocket,
      title: "REUSABILITY",
      description: "Revolutionary landing and reuse technology that has transformed the economics of spaceflight.",
      details: "SpaceX's reusable rocket technology represents a paradigm shift in space launch systems. By successfully landing and reusing orbital class boosters, we've reduced the cost of access to space by an order of magnitude. The Falcon 9's first stage can now be flown 10+ times with minimal refurbishment, with a goal of 100+ flights per booster. This breakthrough enables more frequent launches and makes ambitious missions like Mars colonization economically feasible.",
      stats: [
        { label: "Successful Landings", value: "200+" },
        { label: "Reuse Record", value: "15 flights" },
        { label: "Cost Reduction", value: "90%" },
      ],
    },
    {
      id: "raptor",
      icon: Zap,
      title: "RAPTOR ENGINE",
      description: "The most advanced rocket engine ever built, powering Starship to Mars and beyond.",
      details: "Raptor is a full-flow staged combustion cycle engine powered by liquid methane and liquid oxygen. It's the first of its kind to power a vehicle in flight and is designed to be used in both the booster and spacecraft stages of Starship. With a chamber pressure of 300+ bar, Raptor is the most powerful engine for its size ever created. The engine's design allows for high reusability and rapid turnaround times.",
      stats: [
        { label: "Chamber Pressure", value: "300+ bar" },
        { label: "Thrust (sea level)", value: "230 tf" },
        { label: "Specific Impulse", value: "350s (vac)" },
      ],
    },
    {
      id: "starlink",
      icon: Satellite,
      title: "STARLINK CONSTELLATION",
      description: "Low Earth orbit satellite network providing global high-speed internet coverage.",
      details: "Starlink leverages SpaceX's launch capability to deploy a massive constellation of satellites in low Earth orbit. Each satellite is equipped with advanced ion thrusters, autonomous collision avoidance, and a sleek design to minimize orbital debris. The constellation's low altitude (340-550km) reduces latency compared to traditional satellite internet. Satellites communicate using advanced phased array antennas and laser links for inter-satellite communication.",
      stats: [
        { label: "Active Satellites", value: "5,000+" },
        { label: "Orbital Altitude", value: "340-550 km" },
        { label: "Coverage", value: "60+ countries" },
      ],
    },
    {
      id: "autonomous",
      icon: Cpu,
      title: "AUTONOMOUS SYSTEMS",
      description: "AI-powered flight computers and docking systems enabling precision operations.",
      details: "SpaceX's autonomous systems represent the cutting edge of aerospace software engineering. Dragon's autonomous docking capability allows it to approach and dock with the ISS without human intervention. The flight computers use advanced algorithms for trajectory optimization, fault detection, and real-time decision making. These systems are rigorously tested through millions of simulations and have proven their reliability through hundreds of successful missions.",
      stats: [
        { label: "Docking Precision", value: "<2cm" },
        { label: "Autonomous Missions", value: "100+" },
        { label: "Uptime", value: "99.99%" },
      ],
    },
  ];

  const openVideo = (title: string, url?: string) => {
    setSelectedVideo({ url, title });
    setVideoOpen(true);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-wider mb-6">
              TECHNOLOGY
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
              Innovation in every component. From revolutionary reusable rockets to advanced autonomous systems, our technology is pushing the boundaries of what's possible.
            </p>
            <button
              onClick={() => openVideo("Technology Overview", undefined)}
              className="group glass-panel scroll-btn px-6 py-3 flex items-center gap-2 text-sm font-medium tracking-wide"
            >
              <Play size={16} />
              WATCH OVERVIEW
              <span className="text-xs text-muted-foreground">• 4:15</span>
            </button>
          </div>
        </div>
      </section>

      {/* Technology Sections */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl space-y-24">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const isEven = index % 2 === 0;

            return (
              <article
                key={tech.id}
                id={tech.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}>
                  {/* Content */}
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <h2 className="text-3xl font-display font-bold tracking-wider">
                        {tech.title}
                      </h2>
                    </div>

                    <p className="text-accent mb-4">{tech.description}</p>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {tech.details}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {tech.stats.map((stat, i) => (
                        <div key={i} className="glass-panel p-4">
                          <div className="text-2xl font-display font-bold text-primary mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => openVideo(tech.title, undefined)}
                      className="text-accent hover:text-accent/80 flex items-center gap-2 text-sm font-medium transition-colors"
                    >
                      <Play size={16} />
                      WATCH DEEP DIVE
                    </button>
                  </div>

                  {/* Visual */}
                  <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                    <div className="glass-panel p-8 aspect-square flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                      <Icon size={120} className="text-primary/30" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />

      {/* Video Modal */}
      <VideoModal
        open={videoOpen}
        onOpenChange={setVideoOpen}
        videoUrl={selectedVideo.url}
        title={selectedVideo.title}
      />
    </div>
  );
};

export default Technology;
