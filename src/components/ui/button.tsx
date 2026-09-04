import * as React from "react"
import { cn } from "@/lib/utils"

// Simplified class variance authority implementation
type VariantConfig = Record<string, Record<string, string>>
type VariantFunction<T extends VariantConfig> = (props?: Partial<{ [K in keyof T]: keyof T[K] }>) => string

function cva<T extends VariantConfig>(
  base: string,
  config: {
    variants?: T
    defaultVariants?: Partial<{ [K in keyof T]: keyof T[K] }>
  } = {}
): VariantFunction<T> {
  return (props = {}) => {
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

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[var(--gold)] text-[var(--bg-deep)] hover:bg-[var(--gold-soft)] shadow hover:shadow-lg transform hover:-translate-y-0.5",
        destructive: "bg-[var(--plum)] text-[var(--cream)] hover:opacity-90",
        outline: "border border-[var(--line)] bg-transparent hover:bg-[var(--bg-elev)] hover:border-[var(--gold)]",
        secondary: "bg-[var(--bg-elev)] text-[var(--cream-soft)] hover:bg-[var(--bg-card)] border border-[var(--line-soft)]",
        ghost: "hover:bg-[var(--line-soft)] hover:text-[var(--cream)]",
        link: "text-[var(--gold)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }