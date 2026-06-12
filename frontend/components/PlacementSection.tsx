"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle,
  DollarSign,
  Clock,
  MapPin,
  ChevronRight,
  BarChart3,
  Target,
  Calendar
} from "lucide-react"
import { cn, formatCurrency } from "@/lib/utils"
import { useAuthAction } from "@/hooks/useAuthAction"

const placementStats = [
  { value: "95%", label: "Placement Rate", icon: TrendingUp, color: "from-primary to-secondary" },
  { value: "₹12L", label: "Average Package", icon: DollarSign, color: "from-secondary to-accent" },
  { value: "500+", label: "Hiring Partners", icon: Users, color: "from-accent to-success" },
  { value: "30 Days", label: "Average Placement Time", icon: Clock, color: "from-success to-primary" },
]

const topCompanies = [
  { name: "Amazon", logo: "A", avgPackage: "₹18 LPA", openings: 45 },
  { name: "Microsoft", logo: "M", avgPackage: "₹16 LPA", openings: 32 },
  { name: "Google", logo: "G", avgPackage: "₹22 LPA", openings: 28 },
  { name: "Wipro", logo: "W", avgPackage: "₹8 LPA", openings: 120 },
  { name: "TCS", logo: "T", avgPackage: "₹7 LPA", openings: 150 },
  { name: "Infosys", logo: "I", avgPackage: "₹9 LPA", openings: 95 },
]

const placementProcess = [
  {
    step: 1,
    title: "Skill Assessment",
    description: "Evaluate your current skills and career goals",
    duration: "1 Week",
  },
  {
    step: 2,
    title: "Personalized Training",
    description: "Industry-relevant curriculum with expert mentors",
    duration: "3-6 Months",
  },
  {
    step: 3,
    title: "Project Portfolio",
    description: "Build real-world projects for your resume",
    duration: "2 Months",
  },
  {
    step: 4,
    title: "Interview Preparation",
    description: "Mock interviews and resume building",
    duration: "2 Weeks",
  },
  {
    step: 5,
    title: "Company Matching",
    description: "Get matched with suitable hiring partners",
    duration: "1 Week",
  },
  {
    step: 6,
    title: "Job Placement",
    description: "Secure your dream job with our assistance",
    duration: "1 Month",
  },
]

const successStories = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    company: "Amazon",
    package: "₹18 LPA",
    background: "B.Tech from Tier-3 College",
    duration: "6 Months",
    image: "RS",
  },
  {
    name: "Priya Patel",
    role: "Data Scientist",
    company: "Google",
    package: "₹22 LPA",
    background: "MCA Graduate",
    duration: "8 Months",
    image: "PP",
  },
  {
    name: "Amit Kumar",
    role: "Cloud Architect",
    company: "Microsoft",
    package: "₹25 LPA",
    background: "B.Sc Computer Science",
    duration: "7 Months",
    image: "AK",
  },
]

export default function PlacementSection() {
  const [activeTab, setActiveTab] = useState("process")
  const withAuth = useAuthAction()

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
            <span className="gradient-text">Guaranteed Placements</span> with Top Companies
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our comprehensive placement program ensures you land your dream job 
            with industry-leading companies and competitive packages.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {placementStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center"
              >
                <div className="relative inline-block mb-4">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-full blur opacity-30`} />
                  <div className={`relative p-3 bg-gradient-to-br ${stat.color} rounded-full`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {[
              { id: "process", label: "Placement Process", icon: Target },
              { id: "companies", label: "Top Companies", icon: Briefcase },
              { id: "stories", label: "Success Stories", icon: Award },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30"
                      : "bg-white border border-gray-100 shadow-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </motion.button>
              )
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "process" && (
              <motion.div
                key="process"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {placementProcess.map((step) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center"
                    >
                      <div className="relative mb-6">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-20" />
                        <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                          <span className="text-2xl font-bold text-white">
                            {step.step}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-50 border border-gray-100 rounded-full">
                        <Clock className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-600">{step.duration}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "companies" && (
              <motion.div
                key="companies"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {topCompanies.map((company) => (
                    <motion.div
                      key={company.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <span className="text-lg font-bold text-white">
                            {company.logo}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {company.name}
                          </h3>
                          <div className="text-sm text-primary font-semibold">
                            {company.avgPackage}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          Open Positions
                        </div>
                        <div className="px-3 py-1 bg-primary/10 rounded-full">
                          <span className="text-sm font-medium text-primary">
                            {company.openings}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "stories" && (
              <motion.div
                key="stories"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {successStories.map((story) => (
                    <motion.div
                      key={story.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <span className="text-lg font-bold text-white">
                            {story.image}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {story.name}
                          </h3>
                          <div className="text-sm text-gray-600">
                            {story.role} @ {story.company}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Package</span>
                          <span className="text-lg font-bold text-primary">
                            {story.package}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Background</span>
                          <span className="text-sm text-gray-600">{story.background}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Duration</span>
                          <span className="text-sm text-gray-600">{story.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>Successfully Placed</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Placement Assistance Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Comprehensive <span className="gradient-text">Placement Assistance</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide end-to-end support to ensure you're fully prepared 
              for the job market and secure your dream position.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Resume Building",
                description: "Industry-standard resume templates and optimization",
                icon: FileText,
                color: "from-primary to-secondary",
              },
              {
                title: "Mock Interviews",
                description: "Practice with industry experts and HR professionals",
                icon: Users,
                color: "from-secondary to-accent",
              },
              {
                title: "Career Counseling",
                description: "Personalized guidance for career growth and opportunities",
                icon: Target,
                color: "from-accent to-success",
              },
              {
                title: "Job Referrals",
                description: "Direct referrals to hiring managers and recruiters",
                icon: Briefcase,
                color: "from-success to-primary",
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div className="mb-4">
                    <div className="relative inline-block">
                      <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-lg blur opacity-30`} />
                      <div className={`relative p-3 bg-gradient-to-br ${feature.color} rounded-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl max-w-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Start Your Placement Journey Today
              </h3>
              <p className="text-gray-600 mb-6">
                Join our placement program and get guaranteed interviews with 
                top companies. Our 95% success rate speaks for itself.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => withAuth(() => window.location.href = '/placements')}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-lg font-semibold text-white shadow-2xl shadow-primary/30 flex items-center space-x-2"
                >
                  <span>Apply for Placements</span>
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/placements'}
                  className="px-8 py-4 bg-white border border-gray-200 rounded-xl text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                >
                  View Placement Statistics
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Icon component for FileText
function FileText(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  )
}