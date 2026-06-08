"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const companies = [
  { name: "Wipro", logo: "W" },
  { name: "TCS", logo: "T" },
  { name: "Infosys", logo: "I" },
  { name: "Accenture", logo: "A" },
  { name: "Amazon", logo: "A" },
  { name: "Microsoft", logo: "M" },
  { name: "Google", logo: "G" },
  { name: "IBM", logo: "I" },
  { name: "Deloitte", logo: "D" },
  { name: "Cognizant", logo: "C" },
  { name: "Capgemini", logo: "C" },
  { name: "HCL", logo: "H" },
]

const marqueeItems = [...companies, ...companies]

export default function TrustedBySection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our students have been placed at top companies worldwide
          </p>
        </motion.div>

        {/* Infinite Marquee */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          
          {/* Marquee Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {marqueeItems.map((company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={cn(
                    "flex-shrink-0 w-48 h-32 mx-4 glass rounded-2xl",
                    "border border-white/10 hover:border-primary/30",
                    "flex flex-col items-center justify-center",
                    "transition-all duration-300"
                  )}
                >
                  <div className="relative mb-4">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-white">
                        {company.logo}
                      </span>
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-white">
                    {company.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50K+", label: "Students Placed", color: "from-primary to-secondary" },
              { value: "95%", label: "Placement Rate", color: "from-secondary to-accent" },
              { value: "₹12L", label: "Average Package", color: "from-accent to-success" },
              { value: "4.8/5", label: "Student Rating", color: "from-success to-primary" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={cn(
                  "glass p-8 rounded-2xl border border-white/10",
                  "hover:border-transparent transition-all duration-300"
                )}
              >
                <div className="relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-lg blur opacity-20`} />
                  <div className="relative">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 glass p-8 rounded-2xl border border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Success Stories That Inspire
              </h3>
              <p className="text-gray-400 mb-6">
                Hear from our students who transformed their careers with 
                Inspire Leap programs and secured dream jobs at top companies.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-medium"
              >
                View All Success Stories
              </motion.button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Rahul Sharma", role: "SDE @ Amazon", package: "₹18 LPA" },
                { name: "Priya Patel", role: "Data Scientist @ Google", package: "₹22 LPA" },
                { name: "Amit Kumar", role: "Cloud Architect @ Microsoft", package: "₹25 LPA" },
                { name: "Neha Singh", role: "Product Manager @ Adobe", package: "₹20 LPA" },
              ].map((student, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        {student.name}
                      </div>
                      <div className="text-xs text-gray-400">{student.role}</div>
                    </div>
                  </div>
                  <div className="text-sm text-primary font-semibold">
                    {student.package}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}