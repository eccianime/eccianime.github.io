"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function ProjectModal({
  project,
  onClose,
}: {
  project: import("@/lib/projects").Project;
  onClose: () => void;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const update = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", update);
    api.on("reInit", update);
    update();

    return () => {
      api.off("select", update);
    };
  }, [api]);

  if (!project.carousel?.length) return null;

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="!max-w-[90vw] !w-[90vw] !h-[85vh] !max-h-[85vh] !p-6 !overflow-hidden !border-none !bg-black/10 !rounded-xl">
        <button
          className={cn(
            "absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white transition-opacity",
            !canScrollPrev && "opacity-30 pointer-events-none",
          )}
          onClick={() => api?.scrollPrev()}
        >
          <ChevronLeft className="h-8 w-8" />
          <span className="sr-only">Previous image</span>
        </button>
        <button
          className={cn(
            "absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white transition-opacity hover:bg-black/50",
            !canScrollNext && "opacity-30 pointer-events-none",
          )}
          onClick={() => api?.scrollNext()}
        >
          <ChevronRight className="h-8 w-8" />
          <span className="sr-only">Next image</span>
        </button>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          className="w-full flex h-full overflow-hidden"
        >
          <CarouselContent className="flex h-full min-h-0">
            {project.carousel.map((img, index) => (
              <CarouselItem key={index} className="flex-[0_0_100%] min-w-0">
                <div className="flex h-full w-full min-h-0 items-center justify-center">
                  <img
                    src={img}
                    alt={`${project.title} ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="absolute bottom-6 left-0 right-0 z-10 flex items-center justify-center gap-3">
          <span className="text-white/80 text-sm font-medium">{project.title}</span>
          <span className="text-white/50 text-sm">
            {selectedIndex + 1} / {project.carousel.length}
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
