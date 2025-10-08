import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { missions } from "@/data/missions";

const Missions = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "upcoming":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "in-progress":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-wider mb-6">
              OUR MISSIONS
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Pioneering the future of space exploration through innovation, determination, and a commitment to making life multiplanetary.
            </p>
          </div>
        </div>
      </section>

      {/* Missions Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missions.map((mission, index) => (
              <Link
                key={mission.id}
                to={`/missions/${mission.id}`}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <article className="glass-panel overflow-hidden hover:bg-white/10 transition-all duration-300">
                  {/* Mission Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={mission.image}
                      alt={mission.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(mission.status)}`}>
                      {mission.status.toUpperCase().replace("-", " ")}
                    </div>
                  </div>

                  {/* Mission Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {mission.date}
                      </span>
                      {mission.videoUrl && (
                        <span className="text-accent">• Video Available</span>
                      )}
                    </div>

                    <h2 className="text-2xl font-display font-bold tracking-wider mb-2">
                      {mission.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {mission.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                      VIEW MISSION
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Missions;
