"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlowButtonProps {
  children: ReactNode
  href?: string
  variant?: "primary" | "outline"
  className?: string
  onClick?: () => void
}

export function GlowButton({ children, href, variant = "primary", className, onClick }: GlowButtonProps) {
  const baseClasses =
    "glow-border relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium text-sm transition-all duration-300"
  const variantClasses =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:brightness-110"
      : "bg-background text-foreground hover:bg-secondary"

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(baseClasses, variantClasses, className)}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} type="button">
      {content}
    </button>
  )
}
