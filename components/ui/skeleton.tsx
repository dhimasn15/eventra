import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("skeleton-pulse rounded-md bg-white/10", className)}
      style={{
        animation: "skeleton-shimmer 2s ease-in-out infinite",
      }}
      {...props}
    />
  )
}

export { Skeleton }

// Inject global keyframe once
if (typeof document !== "undefined") {
  const id = "skeleton-global-style"
  if (!document.getElementById(id)) {
    const style = document.createElement("style")
    style.id = id
    style.textContent = `
      @keyframes skeleton-shimmer {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.4; }
      }
      .skeleton-pulse { animation: skeleton-shimmer 2s ease-in-out infinite; }
    `
    document.head.appendChild(style)
  }
}
