import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        ml: "border-transparent bg-blue-500/20 text-blue-300 hover:bg-blue-500/30",
        nlp: "border-transparent bg-purple-500/20 text-purple-300 hover:bg-purple-500/30",
        web: "border-transparent bg-green-500/20 text-green-300 hover:bg-green-500/30",
        healthcare: "border-transparent bg-red-500/20 text-red-300 hover:bg-red-500/30",
        finance: "border-transparent bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30",
        travel: "border-transparent bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30",
        analytics: "border-transparent bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30",
        automation: "border-transparent bg-orange-500/20 text-orange-300 hover:bg-orange-500/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
