import * as React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type VideoPreviewProps = {
  className?: string
  title?: string
  videoSrc?: string
}

export default function VideoPreview({
  className,
  title = "Product demo video",
  videoSrc = "https://www.youtube.com/embed/wcc96iV8d44?si=ZOlViIegn01ueJJM",
}: VideoPreviewProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          aria-label="Open demo video"
          className={cn(
            "group relative w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-950 text-left",
            "ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]",
            "transition-transform duration-300 ease-out will-change-transform",
            "hover:scale-[1.01] hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:scale-[1.01]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
            "aspect-video",
            "bw-shimmer",
            className
          )}
        >
          <div className="absolute inset-0 grid place-items-center">
            <div className="flex size-16 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition group-hover:border-white/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8 text-white/80"
                aria-hidden="true"
              >
                <path d="M8 5.14v13.72L19 12 8 5.14z" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: 12 }} />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl overflow-hidden p-0">
        <div className="aspect-video w-full">
          <iframe
            title={title}
            width="100%"
            height="100%"
            src={videoSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}


