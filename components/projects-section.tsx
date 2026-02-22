"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { GlowButton } from "./glow-button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Driving School Management System",
    description:
      "A comprehensive management solution with student record handling, automated scheduling, and role-based access control for driving school operations.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    features: ["Student records", "Scheduling", "Automation", "RBAC"],
    github: "https://github.com/singhtanveer2409/Driving-School-Web-App",
  },
  {
    title: "Hall Ticket System with QR Authentication",
    description:
      "Automated hall ticket generation with QR-based authentication using encrypted tokens, supporting scalable batch processing for examinations.",
    tech: ["Python", "PDFKit", "QR Libraries"],
    features: ["Auto QR auth", "Encrypted tokens", "Scalable batching"],
    github: "https://github.com/singhtanveer2409/SkillX---Skill-Builder-and-Analyzer",
  },
  {
    title: "skillX - Skill Builder and Analyzer",
    description:
      "A platform to assess and improve your skills to Industry Standards.",
    tech: ["Java -(servlet,jsp)", "MySQL-Workbench", "Dynamic web application"],
    features: [ "Encrypted tokens", "Scalable batching"],
    github: "https://github.com/singhtanveer2409/SkillX---Skill-Builder-and-Analyzer",
  },
]

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-2 inline-block text-sm font-medium tracking-wider text-primary uppercase"
      >
        Portfolio
      </motion.span>
      <h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Featured Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="glass-card group flex flex-col rounded-xl p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              <a
                href={project.github}
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="h-5 w-5" />
              </a>
            </div>

            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mb-4 flex flex-wrap gap-1.5">
              {project.features.map((f) => (
                <span
                  key={f}
                  className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 border-t border-border pt-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
