"use client"

import { motion } from "framer-motion"
import { 
  Shield, 
  Award, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star,
  BookOpen,
  Target
} from "lucide-react"
import { cn } from "@/lib/utils"

interface AuthHeroProps {
  title: string
  subtitle: string
  features: string[]
}

export default function AuthHero({ title, subtitle, features }: AuthHeroProps) {
  const stats = [
    { icon: Users, value: "50K+", label: "Students" },
    { icon: Award, value: "95%", label: "Placement Rate" },
    { icon: Star, value: "4.8", label: "Avg Rating" },
    { icon: TrendingUp, value: "500+", label: "Hiring Partners" },
  ]

  const benefits = [
    {
      icon: BookOpen,
      title: "Industry-Relevant Curriculum",
      description: "Courses designed by experts from top tech companies"
    },
    {
      icon: Target,
      title: "Guaranteed Placements",
      description: "95% placement rate within 6 months of course completion"
    },
    {
      icon: Shield,
      title: "Wipro Certification",
      description: "Industry-recognized certification from Wipro Technologies"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Average salary hike of 300% for our graduates"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Title & Subtitle */}
      <div className="space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-400"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Features List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-white">What you get:</h3>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-primary" />
              </div>
              <span className="text-gray-400">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-2 gap-4"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              className="glass rounded-xl p-4"
            >
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="space-y-6"
      >
        <h3 className="text-lg font-semibold text-white">Why Choose Inspire Leap?</h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="glass rounded-xl p-4"
              >
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{benefit.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="pt-6 border-t border-white/10"
      >
        <h4 className="text-sm font-medium text-white mb-4">Trusted by students from</h4>
        <div className="flex flex-wrap items-center gap-4">
          {[
            { name: "Google", src: "/logos/google.webp" },
            { name: "Microsoft", src: "/logos/microsoft.webp" },
            { name: "Amazon", src: "/logos/amazon.webp" },
            { name: "Wipro", src: "/logos/wipro.webp" },
            { name: "TCS", src: "/logos/tcs.png" },
            { name: "Infosys", src: "/logos/infosys.webp" },
          ].map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
              className="bg-white px-4 py-2 rounded-lg flex items-center justify-center shadow-sm"
            >
              <img 
                src={company.src} 
                alt={`${company.name} logo`} 
                className="h-6 w-auto object-contain" 
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}