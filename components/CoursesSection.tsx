"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  TrendingUp, 
  Filter,
  ChevronRight,
  PlayCircle,
  CheckCircle,
  Award
} from "lucide-react"
import { cn, formatCurrency } from "@/lib/utils"

const categories = [
  { id: "all", label: "All Courses" },
  { id: "tech", label: "Technology", count: 12 },
  { id: "business", label: "Business", count: 8 },
  { id: "design", label: "Creative Design", count: 6 },
  { id: "data", label: "Data Science", count: 10 },
  { id: "cloud", label: "Cloud & DevOps", count: 7 },
]

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    category: "tech",
    description: "Master MERN stack with modern frameworks and deployment",
    duration: "6 months",
    students: "5.2K",
    rating: 4.8,
    price: 29999,
    discountedPrice: 19999,
    instructor: "Rajesh Kumar",
    instructorRole: "Senior SDE @ Amazon",
    features: ["Live Sessions", "10+ Projects", "Placement Assistance", "Wipro Certification"],
    trending: true,
    popular: true,
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    category: "data",
    description: "Complete AI/ML pipeline with real-world projects",
    duration: "8 months",
    students: "3.8K",
    rating: 4.9,
    price: 39999,
    discountedPrice: 29999,
    instructor: "Priya Sharma",
    instructorRole: "Lead Data Scientist @ Google",
    features: ["Python & R", "TensorFlow", "Kaggle Projects", "Industry Mentors"],
    trending: true,
    popular: true,
  },
  {
    id: 3,
    title: "Cloud Computing & AWS",
    category: "cloud",
    description: "Become AWS certified with hands-on cloud projects",
    duration: "4 months",
    students: "2.5K",
    rating: 4.7,
    price: 24999,
    discountedPrice: 17999,
    instructor: "Amit Patel",
    instructorRole: "Cloud Architect @ Microsoft",
    features: ["AWS Certified", "Real Deployments", "Cost Optimization", "Security"],
    trending: false,
    popular: true,
  },
  {
    id: 4,
    title: "UI/UX Design Masterclass",
    category: "design",
    description: "Design thinking to prototyping with Figma",
    duration: "3 months",
    students: "1.8K",
    rating: 4.6,
    price: 19999,
    discountedPrice: 14999,
    instructor: "Neha Singh",
    instructorRole: "Product Designer @ Adobe",
    features: ["Figma Pro", "Design Systems", "User Research", "Portfolio"],
    trending: true,
    popular: false,
  },
  {
    id: 5,
    title: "Digital Marketing Strategy",
    category: "business",
    description: "Complete digital marketing funnel optimization",
    duration: "3 months",
    students: "2.1K",
    rating: 4.5,
    price: 17999,
    discountedPrice: 12999,
    instructor: "Vikram Mehta",
    instructorRole: "Marketing Director @ Flipkart",
    features: ["SEO/SEM", "Social Media", "Analytics", "Campaigns"],
    trending: false,
    popular: true,
  },
  {
    id: 6,
    title: "Cybersecurity Fundamentals",
    category: "tech",
    description: "Network security, ethical hacking, and compliance",
    duration: "5 months",
    students: "1.5K",
    rating: 4.8,
    price: 34999,
    discountedPrice: 24999,
    instructor: "Sanjay Verma",
    instructorRole: "Security Lead @ Cisco",
    features: ["Ethical Hacking", "Network Security", "Compliance", "Certifications"],
    trending: true,
    popular: false,
  },
]

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)

  const filteredCourses = activeCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === activeCategory)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore <span className="gradient-text">Premium Courses</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Industry-relevant curriculum designed by experts from top tech 
              companies. Learn skills that matter in today's job market.
            </p>
          </motion.div>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30"
                    : "glass text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <span className="flex items-center space-x-2">
                  <span>{category.label}</span>
                  {category.count && (
                    <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">
                      {category.count}
                    </span>
                  )}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Courses Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
                className={cn(
                  "glass rounded-2xl border border-white/10 overflow-hidden",
                  "transition-all duration-300 relative group",
                  hoveredCourse === course.id && "border-primary/30"
                )}
              >
                {/* Course Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      {course.trending && (
                        <span className="px-2 py-1 bg-gradient-to-r from-accent to-warning rounded-full text-xs font-medium text-white">
                          Trending
                        </span>
                      )}
                      {course.popular && (
                        <span className="px-2 py-1 bg-gradient-to-r from-secondary to-success rounded-full text-xs font-medium text-white">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        {formatCurrency(course.discountedPrice)}
                      </div>
                      <div className="text-sm text-gray-400 line-through">
                        {formatCurrency(course.price)}
                      </div>
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {course.description}
                  </p>

                  {/* Course Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-300">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-300">{course.students}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm text-gray-300">{course.rating}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">
                        {course.instructor.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        {course.instructor}
                      </div>
                      <div className="text-xs text-gray-400">
                        {course.instructorRole}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Footer */}
                <div className="px-6 py-4 bg-white/5 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-sm font-medium text-white flex items-center space-x-2"
                    >
                      <span>Enroll Now</span>
                      <ChevronRight className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 glass rounded-lg text-gray-400 hover:text-white transition-colors"
                    >
                      <PlayCircle className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 glass rounded-2xl border border-white/10 p-8"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "95%", label: "Completion Rate", icon: Award, color: "from-primary to-secondary" },
              { value: "50K+", label: "Active Learners", icon: Users, color: "from-secondary to-accent" },
              { value: "500+", label: "Industry Projects", icon: TrendingUp, color: "from-accent to-success" },
              { value: "4.8/5", label: "Student Satisfaction", icon: Star, color: "from-success to-primary" },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-full blur opacity-30`} />
                    <div className={`relative p-3 bg-gradient-to-br ${stat.color} rounded-full`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Ready to Transform Your Career?
            </h3>
            <p className="text-gray-400 max-w-2xl">
              Join thousands of successful professionals who upgraded their 
              skills with Inspire Leap programs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-lg font-semibold text-white shadow-2xl shadow-primary/30"
              >
                Browse All Courses
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-xl text-lg font-semibold text-white"
              >
                Book Free Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}