import type React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn("max-w-7xl mx-auto px-4", className)} {...props}>
      {children}
    </div>
  )
}
