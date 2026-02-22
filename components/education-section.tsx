"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "MIT World Peace University, Pune ",
    status: "Currently Pursuing",
    percentage: null,
    cgpa: "8.30 / 10",
  },
  {
    degree: "B.Sc. in Computer Science",
    institution: "K.K. Wagh College, Nashik",
    status: "Completed",
    percentage: null,
    cgpa: "8.38 / 10",
  },
  {
    degree: "HSC",
    institution: "Maheshwari public school, Kota (Rajasthan)",
    status: "Completed",
    percentage: "71.80%",
    cgpa: null,
  },
  {
    degree: "SSC",
    institution: "Kalawati Nandlal kela High school, Nashik (Maharashtra)",
    status: "Completed",
    percentage: "72.40%",
    cgpa: null,
  },
]

export function EducationSection() {
  return (
    <SectionWrapper id="education">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-2 inline-block text-sm font-medium tracking-wider text-primary uppercase"
      >
        Education
      </motion.span>
      <h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Academic Journey
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-0 left-6 h-full w-px bg-border md:left-1/2" />

        <div className="flex flex-col gap-10">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className={`relative flex flex-col pl-16 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? "md:self-start md:pr-12" : "md:self-end md:pl-12"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute top-1 left-4 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background md:top-1 ${
                  i % 2 === 0 ? "md:left-auto md:-right-2.5" : "md:-left-2.5"
                }`}
              >
                <GraduationCap className="h-3 w-3 text-primary" />
              </div>

              <div className="glass-card rounded-xl p-5">
                <span className="mb-1 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {edu.status}
                </span>
                <h3 className="mt-2 text-base font-semibold text-foreground">{edu.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
                {(edu.percentage || edu.cgpa) && (
  <p className="mt-2 text-xs font-medium text-primary/80">
    {edu.percentage && `Percentage: ${edu.percentage}`}
    {edu.percentage && edu.cgpa && " • "}
    {edu.cgpa && `CGPA: ${edu.cgpa}`}
  </p>
)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
