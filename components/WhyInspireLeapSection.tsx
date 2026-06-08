"use client"

import { motion } from "framer-motion"
import { 
  Users, 
  Award, 
  Briefcase, 
  BookOpen, 
  Clock, 
  Globe,
  CheckCircle,
  TrendingUp
} from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Users,
    title: "Industry Expert Mentors",
    description: "Learn from professionals working at top tech companies with real-world experience.",
    color: "from-primary to-secondary",
    stats: "200+ Mentors",
  },
  {
    icon: Award,
    title: "Wipro Certification",
    description: "Get industry-recognized certification that adds value to your resume.",
    color: "from-secondary to-accent",
    stats: "95% Pass Rate",
  },
  {
    icon: Briefcase,
    title: "Guaranteed Internships",
    description: "Hands-on experience with real projects and guaranteed internship opportunities.",
    color: "from-accent to-success",
    stats: "100% Placement",
  },
  {
    icon: BookOpen,
    title: "Project-Based Learning",
    description: "Build portfolio-worthy projects that demonstrate your skills to employers.",
    color: "from-success to-primary",
    stats: "50+ Projects",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Learn at your own pace with lifetime access to course materials.",
    color: "from-primary to-accent",
    stats: "24/7 Access",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Connect with peers and professionals from around the world.",
    color: "from-secondary to-success",
    stats: "10K+ Members",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Skill Assessment",
    description: "Evaluate your current skills and career goals",
    color: "border-primary/30",
  },
  {
    step: "02",
    title: "Personalized Learning Path",
    description: "Get a customized curriculum based on your goals",
    color: "border-secondary/30",
  },
  {
    step: "03",
    title: "Interactive Sessions",
    description: "Live classes with industry experts",
    color: "border-accent/30",
  },
  {
    step: "04",
    title: "Project Development",
    description: "Build real-world projects for your portfolio",
    color: "border-success/30",
  },
  {
    step: "05",
    title: "Interview Preparation",
    description: "Mock interviews and resume building",
    color: "border-primary/30",
  },
  {
    step: "06",
    title: "Placement Assistance",
    description: "Get connected with top hiring partners",
    color: "border-secondary/30",
  },
]

export default function WhyInspireLeapSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="gradient-text">Inspire Leap</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We combine industry expertise with innovative learning methods to 
            provide you with the skills needed for today's competitive job market.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={cn(
                  "glass p-6 rounded-2xl border border-white/10",
                  "hover:border-transparent transition-all duration-300",
                  "relative overflow-hidden group"
                )}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="relative inline-block">
                      <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-lg blur opacity-30`} />
                      <div className={`relative p-3 bg-gradient-to-br ${feature.color} rounded-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">
                      {feature.stats}
                    </span>
                    <CheckCircle className="h-4 w-4 text-success" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Learning Process */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our <span className="gradient-text">6-Step</span> Learning Process
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A structured approach that ensures you gain practical skills and 
              are job-ready upon completion.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30 hidden md:block" />
            
            <div className="grid md:grid-cols-6 gap-6 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className={cn(
                    "w-16 h-16 mx-auto mb-4 rounded-full glass border-2",
                    step.color,
                    "flex items-center justify-center",
                    "relative group"
                  )}>
                    <div className="text-2xl font-bold text-white">
                      {step.step}
                    </div>
                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primary/50 transition-all duration-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-2xl border border-white/10 p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              How We Compare
            </h3>
            <p className="text-gray-400">
              See why Inspire Leap stands out from traditional learning platforms
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">
                    Features
                  </th>
                  <th className="text-center py-4 px-6 text-primary font-semibold">
                    Inspire Leap
                  </th>
                  <th className="text-center py-4 px-6 text-gray-400 font-medium">
                    Traditional Platforms
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Industry Expert Mentors", inspireLeap: "✓", traditional: "Limited" },
                  { feature: "Guaranteed Internships", inspireLeap: "✓", traditional: "✗" },
                  { feature: "Project-Based Learning", inspireLeap: "50+ Projects", traditional: "Basic Exercises" },
                  { feature: "Placement Assistance", inspireLeap: "95% Success Rate", traditional: "Self-Search" },
                  { feature: "Wipro Certification", inspireLeap: "✓", traditional: "✗" },
                  { feature: "Lifetime Access", inspireLeap: "✓", traditional: "Limited Time" },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-4 px-6 text-gray-300">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {row.inspireLeap}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400">
                      {row.traditional}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg">
              <TrendingUp className="h-5 w-5" />
              <span className="font-semibold text-white">
                Start Your Career Transformation Today
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}