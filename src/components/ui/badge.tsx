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
        ml: "border-transparent bg-gradient-to-r from-emerald-500/30 to-teal-500/30 text-emerald-200 hover:from-emerald-500/40 hover:to-teal-500/40",
        nlp: "border-transparent bg-gradient-to-r from-rose-500/30 to-pink-500/30 text-rose-200 hover:from-rose-500/40 hover:to-pink-500/40",
        web: "border-transparent bg-gradient-to-r from-green-500/30 to-lime-500/30 text-green-200 hover:from-green-500/40 hover:to-lime-500/40",
        healthcare: "border-transparent bg-gradient-to-r from-red-500/30 to-rose-500/30 text-red-200 hover:from-red-500/40 hover:to-rose-500/40",
        finance: "border-transparent bg-gradient-to-r from-yellow-500/30 to-amber-500/30 text-yellow-200 hover:from-yellow-500/40 hover:to-amber-500/40",
        travel: "border-transparent bg-gradient-to-r from-violet-500/30 to-purple-500/30 text-violet-200 hover:from-violet-500/40 hover:to-purple-500/40",
        analytics: "border-transparent bg-gradient-to-r from-teal-500/30 to-cyan-500/30 text-teal-200 hover:from-teal-500/40 hover:to-cyan-500/40",
        automation: "border-transparent bg-gradient-to-r from-orange-500/30 to-red-500/30 text-orange-200 hover:from-orange-500/40 hover:to-red-500/40",
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
