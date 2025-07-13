import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  variant?: "default" | "gray"
}

export function Section({ className, children, variant = "default", ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "py-16",
        variant === "gray" && "bg-gray-50 dark:bg-gray-800",
        variant === "default" && "bg-white dark:bg-gray-900",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}
