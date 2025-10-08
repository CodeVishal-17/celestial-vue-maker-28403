import { useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

export interface PanelContent {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaAction: () => void;
}

interface InfoPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  content: PanelContent | null;
}

const InfoPanel = ({ open, onOpenChange, content }: InfoPanelProps) => {
  const isMobile = useIsMobile();

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when panel is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onOpenChange]);

  if (!content) return null;

  const PanelContent = (
    <div className="space-y-6">
      {/* Thumbnail Image */}
      <div className="relative w-full h-48 rounded-lg overflow-hidden border border-white/10">
        <img
          src={content.image}
          alt={content.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">
        {content.description}
      </p>

      {/* Secondary CTA */}
      <button
        onClick={() => {
          content.ctaAction();
          onOpenChange(false);
        }}
        className="group glass-panel scroll-btn px-6 py-3 flex items-center gap-2 text-sm font-medium tracking-wide w-full justify-center"
        aria-label={content.ctaLabel}
      >
        {content.ctaLabel}
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );

  // Mobile: Full-screen modal
  if (isMobile) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="glass-panel border-white/10 max-w-[95vw] animate-scale-in">
          <DialogHeader>
            <DialogTitle className="text-3xl font-display font-bold tracking-wider">
              {content.title}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Detailed information about {content.title}
            </DialogDescription>
          </DialogHeader>
          {PanelContent}
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    );
  }

  // Desktop: Right-side drawer
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent className="glass-panel border-white/10 h-full w-full max-w-[560px] ml-auto animate-slide-in-right">
        <DrawerHeader>
          <DrawerTitle className="text-3xl font-display font-bold tracking-wider">
            {content.title}
          </DrawerTitle>
          <DrawerDescription className="sr-only">
            Detailed information about {content.title}
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-6 pb-6 overflow-y-auto">
          {PanelContent}
        </div>
        <DrawerClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};

export default InfoPanel;
