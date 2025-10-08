import { useState } from "react";
import { Check, Wifi, Zap, Globe, Play } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import starlinkImage from "@/assets/starlink.jpg";

const Starlink = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [pricingModalOpen, setPricingModalOpen] = useState(false);

  const plans = [
    {
      name: "Residential",
      price: "$120",
      period: "per month",
      speed: "50-200 Mbps",
      latency: "20-40 ms",
      features: [
        "Unlimited data",
        "Free nationwide roaming",
        "Priority access during peak hours",
        "Portable within country",
        "In-motion use on land",
      ],
    },
    {
      name: "Business",
      price: "$250",
      period: "per month",
      speed: "100-350 Mbps",
      latency: "20-40 ms",
      features: [
        "Unlimited data",
        "Priority support 24/7",
        "Higher speeds during peak hours",
        "Multi-device connectivity",
        "Business-grade reliability",
        "Static IP available",
      ],
      popular: true,
    },
    {
      name: "Maritime",
      price: "$5,000",
      period: "per month",
      speed: "100-350 Mbps",
      latency: "20-40 ms",
      features: [
        "Unlimited data on ocean and land",
        "Global coverage",
        "Priority 24/7 support",
        "High-performance in motion",
        "Dual connectivity",
        "Remote management",
      ],
    },
  ];

  const features = [
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Download speeds up to 200 Mbps with low latency for gaming, video calls, and streaming.",
    },
    {
      icon: Zap,
      title: "Low Latency",
      description: "20-40ms latency makes Starlink suitable for online gaming and real-time applications.",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Available in 60+ countries and expanding, bringing connectivity to the most remote locations.",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%), url(${starlinkImage})`,
          }}
        />

        <div className="relative h-full flex items-center px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-wider mb-6">
                STARLINK
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                High-speed internet from space. Available almost anywhere on Earth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setPricingModalOpen(true)}
                  className="glass-panel scroll-btn px-8 py-4 text-sm font-medium tracking-wide"
                >
                  ORDER NOW
                </button>
                <button
                  onClick={() => setVideoOpen(true)}
                  className="group glass-panel px-8 py-4 flex items-center gap-2 text-sm font-medium tracking-wide"
                >
                  <Play size={16} />
                  WATCH VIDEO
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-black/95">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wider text-center mb-16 animate-fade-in">
            WHY STARLINK?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass-panel p-8 text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold tracking-wider mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-wider text-center mb-4 animate-fade-in">
            CHOOSE YOUR PLAN
          </h2>
          <p className="text-center text-muted-foreground mb-16 animate-fade-in">
            Select the plan that best fits your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`glass-panel p-8 relative animate-fade-in ${
                  plan.popular ? "border-primary border-2" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-display font-bold tracking-wider mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    {plan.speed} • {plan.latency} latency
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setPricingModalOpen(true)}
                  className={`w-full py-3 rounded font-medium transition-colors ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  GET STARTED
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Video Modal */}
      <VideoModal
        open={videoOpen}
        onOpenChange={setVideoOpen}
        videoUrl={undefined}
        title="STARLINK: Connecting the World"
      />

      {/* Pricing Modal */}
      <Dialog open={pricingModalOpen} onOpenChange={setPricingModalOpen}>
        <DialogContent className="bg-black border-white/10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold tracking-wider">
              ORDER STARLINK
            </DialogTitle>
          </DialogHeader>
          <div className="py-6">
            <p className="text-muted-foreground mb-6">
              To order Starlink, please visit the official Starlink website. This demo app showcases the design and functionality.
            </p>
            <a
              href="https://www.starlink.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-6 bg-primary hover:bg-primary/90 text-center rounded font-medium transition-colors"
            >
              VISIT STARLINK.COM
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Starlink;
