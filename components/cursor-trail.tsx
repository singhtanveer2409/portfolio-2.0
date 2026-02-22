"use client"

import { useEffect, useRef, useCallback } from "react"

interface TrailPoint {
  x: number
  y: number
  age: number
}

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const trailRef = useRef<TrailPoint[]>([])
  const animRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0 })

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    trailRef.current = trailRef.current
      .map((p) => ({ ...p, age: p.age + 1 }))
      .filter((p) => p.age < 40)

    for (const point of trailRef.current) {
      const alpha = 1 - point.age / 40
      const radius = 4 * alpha
      ctx.beginPath()
      ctx.arc(point.x, point.y, radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(6, 182, 212, ${alpha * 0.6})`
      ctx.fill()
      ctx.beginPath()
      ctx.arc(point.x, point.y, radius * 2, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(6, 182, 212, ${alpha * 0.15})`
      ctx.fill()
    }

    animRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      trailRef.current.push({ x: e.clientX, y: e.clientY, age: 0 })
    }
    window.addEventListener("mousemove", onMove)

    animRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(animRef.current)
    }
  }, [animate])

  return <canvas ref={canvasRef} className="cursor-trail-canvas" />
}
