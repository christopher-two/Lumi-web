import { cn } from "@/lib/utils"

export function AndroidIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-android", className)}
      {...props}
    >
      <path d="M16 8.81a4 4 0 0 1-8 0" />
      <path d="M12 18h.01" />
      <path d="M5 12a7 7 0 0 0 14 0" />
      <path d="M17.5 12c0 6-3 6-3 6H9.5s-3 0-3-6" />
      <path d="M8 5.48a4 4 0 0 1 8 0" />
      <line x1="8" x2="6" y1="2" y2="4" />
      <line x1="16" x2="18" y1="2" y2="4" />
    </svg>
  )
}
