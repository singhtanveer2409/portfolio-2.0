"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { GlowButton } from "./glow-button"
import { Github, Linkedin, Mail, Instagram, Send } from "lucide-react"

const socials = [
  { icon: Github, href: "https://github.com/singhtanveer2409", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:singhtanveer2409@gmail.com", label: "Email" },
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
]

export function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })

  return (
    <SectionWrapper id="contact">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-2 inline-block text-sm font-medium tracking-wider text-primary uppercase"
      >
        Get in Touch
      </motion.span>
      <h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Contact Me
      </h2>

      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card flex-1 rounded-xl p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                placeholder="Your message..."
              />
            </div>
            <GlowButton variant="outline">
              <Send className="h-4 w-4" />
              Send Message
            </GlowButton>
          </div>
        </motion.form>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Feel free to reach out through the form or connect with me on social media. I
            am always open to discussing new projects and opportunities.
          </p>

          <div className="flex flex-wrap gap-3">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary/60 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-[0_0_16px_oklch(0.72_0.19_195_/_0.3)]"
                aria-label={s.label}
              >
                <s.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="https://leetcode.com/u/singhtanveer/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              LeetCode Profile
            </a>
            <a
              href="https://www.hackerrank.com/profile/singhtanveer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              HackerRank Profile
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
