import { useEffect, useRef, useState } from "react";
import { X, Play, Pause } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoUrl?: string;
  title: string;
}

const VideoModal = ({ open, onOpenChange, videoUrl, title }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setHasEnded(true);
      setIsPlaying(false);
      toast({
        title: "Video Complete",
        description: "Launch video complete — explore related missions",
        duration: 5000,
      });
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Handle keyboard controls
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const video = videoRef.current;
      if (!video) return;

      switch (e.key) {
        case " ":
        case "k":
          e.preventDefault();
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
          break;
        case "Escape":
          onOpenChange(false);
          break;
        case "f":
          e.preventDefault();
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            video.requestFullscreen();
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  // Reset when modal closes
  useEffect(() => {
    if (!open) {
      setIsPlaying(false);
      setHasEnded(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [open]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0 bg-black border-white/10">
        <div className="relative aspect-video w-full bg-black">
          {videoUrl ? (
            <>
              {/* Video Player */}
              <video
                ref={videoRef}
                className="w-full h-full"
                controls
                preload="metadata"
                poster={`https://via.placeholder.com/1920x1080/000000/ffffff?text=${encodeURIComponent(title)}`}
              >
                <source src={videoUrl} type="video/mp4" />
                <track
                  kind="captions"
                  srcLang="en"
                  label="English captions"
                  src="/captions.vtt"
                  default
                />
                Your browser does not support the video tag.
              </video>

              {/* Custom Play/Pause Overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                onClick={togglePlayPause}
              >
                {!isPlaying && !hasEnded && (
                  <button
                    className="w-20 h-20 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all transform group-hover:scale-110"
                    aria-label="Play video"
                  >
                    <Play size={32} className="text-white ml-1" />
                  </button>
                )}
                {hasEnded && (
                  <button
                    className="w-20 h-20 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all transform group-hover:scale-110"
                    aria-label="Replay video"
                  >
                    <Play size={32} className="text-white ml-1" />
                  </button>
                )}
              </div>
            </>
          ) : (
            // Fallback for missing video
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <Play size={64} className="text-muted-foreground mb-4" />
              <h3 className="text-xl font-display font-bold mb-2">Video Coming Soon</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                This video is currently unavailable. Check out our YouTube channel for more launch videos.
              </p>
              <a
                href="https://www.youtube.com/@SpaceX"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel px-6 py-3 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
              >
                WATCH ON YOUTUBE
              </a>
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-10"
            aria-label="Close video"
          >
            <X size={24} />
          </button>
        </div>

        {/* Video Info */}
        <div className="p-6 bg-black border-t border-white/10">
          <h3 className="text-xl font-display font-bold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">
            Press <kbd className="px-2 py-1 bg-white/10 rounded text-xs">Space</kbd> to play/pause •{" "}
            <kbd className="px-2 py-1 bg-white/10 rounded text-xs">F</kbd> for fullscreen •{" "}
            <kbd className="px-2 py-1 bg-white/10 rounded text-xs">Esc</kbd> to close
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
