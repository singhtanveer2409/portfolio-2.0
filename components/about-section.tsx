"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { MapPin, GraduationCap, Code2, Server } from "lucide-react"
import { FileText } from "lucide-react"

const highlights = [
  { icon: MapPin, label: "Nashik, India" },
  { icon: GraduationCap, label: "MCA Student" },
  { icon: Server, label: "Backend Focused" },
  { icon: Code2, label: "Full Stack Dev" },
]

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-2 inline-block text-sm font-medium tracking-wider text-primary uppercase"
      >
        About Me
      </motion.span>
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Who I Am ?
      </h2>

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        <div className="flex-1">
          <p className="text-base leading-relaxed text-muted-foreground">
            I am a Backend-Focused Full Stack Developer from Nashik, India, currently
            pursuing my Master of Computer Applications at MIT World Peace University,
            Pune. I am passionate about building scalable, production-ready applications
            with strong CS fundamentals and modern tech stack expertise.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I love turning complex problems into elegant solutions. From designing
            efficient database architectures to crafting responsive frontend
            interfaces, I strive to deliver quality software that makes a real
            difference.
          </p>
        </div>
        

        <div className="grid flex-shrink-0 grid-cols-2 gap-4 lg:w-72">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card flex flex-col items-center gap-2 rounded-xl p-4 text-center"
            >
              <item.icon className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium text-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>
          
      </div>
      <div className="mt-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <FileText className="h-4 w-4 transition-transform group-hover:rotate-6" />
            View Resume
          </a>
        </div>
    </SectionWrapper>
  )
}
