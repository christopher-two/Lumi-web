import { cn } from "@/lib/utils"

export function GeminiIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-gemini-2", className)}
      {...props}
    >
      <path d="M10 6h4" />
      <path d="M12 6v4" />
      <path d="M12 18a4 4 0 0 0 4-4h-8a4 4 0 0 0 4 4Z" />
      <path d="M20 10h-4v4" />
      <path d="M4 14h4v-4" />
      <path d="M16 4h4v4" />
      <path d="M4 4h4v4" />
    </svg>
  )
}
