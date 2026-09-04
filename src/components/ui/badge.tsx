import * as React from "react"
import { cn } from "@/lib/utils"

// Simplified class variance authority implementation
type VariantConfig = Record<string, Record<string, string>>

function cva<T extends VariantConfig>(
  base: string,
  config: {
    variants?: T
    defaultVariants?: Partial<{ [K in keyof T]: keyof T[K] }>
  } = {}
) {
  return (props: Partial<{ [K in keyof T]: keyof T[K] }> = {}) => {
    const variants = { ...config.defaultVariants, ...props }
    const classes = [base]
    
    for (const [key, value] of Object.entries(variants)) {
      if (value && config.variants?.[key]?.[value as string]) {
        classes.push(config.variants[key][value as string])
      }
    }
    
    return cn(...classes)
  }
}

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[var(--gold)] text-[var(--bg-deep)] shadow hover:bg-[var(--gold-soft)]",
        secondary: "border-transparent bg-[var(--bg-elev)] text-[var(--cream-soft)] hover:bg-[var(--bg-card)]",
        destructive: "border-transparent bg-[var(--plum)] text-[var(--cream)] shadow hover:opacity-90",
        outline: "border-[var(--line)] text-[var(--cream-soft)]",
        success: "border-transparent bg-[var(--emerald)] text-[var(--bg-deep)] shadow hover:opacity-90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }