// Simplified type for class values
export type ClassValue = string | number | boolean | undefined | null | ClassValue[]

// Simplified clsx implementation for basic className merging
export function clsx(...classes: ClassValue[]): string {
  return classes
    .flat()
    .filter((x) => typeof x === "string" && x.length > 0)
    .join(" ")
}

// Simple class merging utility
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs)
}