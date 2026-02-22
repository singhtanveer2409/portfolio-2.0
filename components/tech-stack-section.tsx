"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"

const techCategories = [
  {
    title: "Languages",
    items: ["JavaScript", "Python", "Java", "PHP"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "React"],
  },
  {
    title: "Frameworks & Tools",
    items: ["Spring", "Pandas", "Matplotlib", "Postman", "Git"],
  },
]

export function TechStackSection() {
  return (
    <SectionWrapper id="tech">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-2 inline-block text-sm font-medium tracking-wider text-primary uppercase"
      >
        Skills
      </motion.span>
      <h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Tech Stack
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {techCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1, duration: 0.5 }}
            className="glass-card rounded-xl p-6"
          >
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-primary uppercase">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, ii) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.1 + ii * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
