import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Play, Calendar, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import { getMissionById, getRelatedMissions } from "@/data/missions";

const MissionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [videoOpen, setVideoOpen] = useState(false);

  const mission = id ? getMissionById(id) : undefined;
  const relatedMissions = id ? getRelatedMissions(id) : [];

  if (!mission) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Mission Not Found</h1>
          <Link to="/missions" className="text-accent hover:underline">
            Back to Missions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%), url(${mission.image})`,
          }}
        />

        <div className="relative h-full flex items-end pb-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <button
              onClick={() => navigate("/missions")}
              className="glass-panel px-4 py-2 flex items-center gap-2 text-sm font-medium mb-6 hover:bg-white/10 transition-colors"
            >
              <ArrowLeft size={16} />
              BACK TO MISSIONS
            </button>

            <div className="animate-fade-in">
              <div className="text-xs tracking-widest mb-4 text-accent uppercase">
                {mission.subtitle}
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-wider mb-6">
                {mission.title}
              </h1>

              {mission.videoUrl && (
                <button
                  onClick={() => setVideoOpen(true)}
                  className="group glass-panel scroll-btn px-6 py-3 flex items-center gap-2 text-sm font-medium tracking-wide"
                >
                  <Play size={16} />
                  WATCH VIDEO
                  <span className="text-xs text-muted-foreground">• 3:42</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Details */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-display font-bold tracking-wider mb-6">
                  MISSION OVERVIEW
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {mission.longDescription}
                </p>
              </div>

              {/* Timeline */}
              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <h2 className="text-3xl font-display font-bold tracking-wider mb-6">
                  MISSION TIMELINE
                </h2>
                <div className="space-y-6">
                  {mission.timeline.map((phase, index) => (
                    <div key={index} className="glass-panel p-6 flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                          <CheckCircle2 size={20} className="text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-display font-bold tracking-wider">
                            {phase.phase}
                          </h3>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar size={12} />
                            {phase.date}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technical Specs */}
              <div className="glass-panel p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <h3 className="text-xl font-display font-bold tracking-wider mb-4">
                  TECHNICAL SPECIFICATIONS
                </h3>
                <div className="space-y-4">
                  {mission.specs.map((spec, index) => (
                    <div key={index} className="border-b border-white/10 pb-3 last:border-0">
                      <div className="text-xs text-muted-foreground mb-1">
                        {spec.label}
                      </div>
                      <div className="font-medium">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Missions */}
              {relatedMissions.length > 0 && (
                <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
                  <h3 className="text-xl font-display font-bold tracking-wider mb-4">
                    RELATED MISSIONS
                  </h3>
                  <div className="space-y-4">
                    {relatedMissions.map((relatedMission) => (
                      <Link
                        key={relatedMission.id}
                        to={`/missions/${relatedMission.id}`}
                        className="block glass-panel p-4 hover:bg-white/10 transition-colors"
                      >
                        <div className="text-sm font-display font-bold tracking-wider mb-1">
                          {relatedMission.title}
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-2">
                          {relatedMission.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Video Modal */}
      <VideoModal
        open={videoOpen}
        onOpenChange={setVideoOpen}
        videoUrl={mission.videoUrl}
        title={mission.title}
      />
    </div>
  );
};

export default MissionDetail;
