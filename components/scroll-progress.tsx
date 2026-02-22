"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="scroll-progress fixed top-0 left-0 right-0 z-[100] h-[3px] bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#ec4899]"
      style={{ scaleX }}
    />
  )
}
