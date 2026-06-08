"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  TrendingUp, 
  ChevronRight,
  PlayCircle,
  CheckCircle,
  Award,
  Filter,
  Search,
  Grid,
  List
} from "lucide-react"
import { cn, formatCurrency } from "@/lib/utils"
import CourseCard from "./CourseCard"

const allCourses = [
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
    level: "Beginner to Advanced",
    language: "English",
    certificate: "Wipro Certified",
    placementRate: "95%",
    slug: "full-stack-web-development",
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
    level: "Intermediate to Advanced",
    language: "English",
    certificate: "Google AI Certified",
    placementRate: "92%",
    slug: "data-science-machine-learning",
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
    level: "Beginner to Intermediate",
    language: "English",
    certificate: "AWS Certified",
    placementRate: "90%",
    slug: "cloud-computing-aws",
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
    level: "Beginner to Advanced",
    language: "English",
    certificate: "Adobe Certified",
    placementRate: "88%",
    slug: "ui-ux-design-masterclass",
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
    level: "Beginner to Intermediate",
    language: "English",
    certificate: "Google Analytics Certified",
    placementRate: "85%",
    slug: "digital-marketing-strategy",
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
    level: "Intermediate to Advanced",
    language: "English",
    certificate: "Cisco Certified",
    placementRate: "91%",
    slug: "cybersecurity-fundamentals",
  },
  {
    id: 7,
    title: "Mobile App Development",
    category: "tech",
    description: "Build iOS & Android apps with React Native",
    duration: "5 months",
    students: "2.8K",
    rating: 4.7,
    price: 27999,
    discountedPrice: 18999,
    instructor: "Arjun Reddy",
    instructorRole: "Mobile Lead @ Uber",
    features: ["React Native", "iOS/Android", "App Store Deployment", "Performance"],
    trending: true,
    popular: true,
    level: "Beginner to Advanced",
    language: "English",
    certificate: "React Native Certified",
    placementRate: "89%",
    slug: "mobile-app-development",
  },
  {
    id: 8,
    title: "DevOps Engineering",
    category: "cloud",
    description: "Master CI/CD, Docker, Kubernetes, and cloud infrastructure",
    duration: "6 months",
    students: "2.3K",
    rating: 4.8,
    price: 32999,
    discountedPrice: 22999,
    instructor: "Rahul Mehta",
    instructorRole: "DevOps Lead @ Netflix",
    features: ["Docker & Kubernetes", "CI/CD Pipelines", "Monitoring", "Cloud Native"],
    trending: true,
    popular: true,
    level: "Intermediate to Advanced",
    language: "English",
    certificate: "Kubernetes Certified",
    placementRate: "93%",
    slug: "devops-engineering",
  },
  {
    id: 9,
    title: "Product Management",
    category: "business",
    description: "From ideation to launch with agile methodologies",
    duration: "4 months",
    students: "1.9K",
    rating: 4.6,
    price: 21999,
    discountedPrice: 15999,
    instructor: "Sonia Kapoor",
    instructorRole: "Product Director @ Spotify",
    features: ["Product Strategy", "User Research", "Roadmapping", "Metrics"],
    trending: false,
    popular: true,
    level: "Beginner to Intermediate",
    language: "English",
    certificate: "Product School Certified",
    placementRate: "87%",
    slug: "product-management",
  },
]

const sortOptions = [
  { id: "popular", label: "Most Popular" },
  { id: "rating", label: "Highest Rated" },
  { id: "price-low", label: "Price: Low to High" },
  { id: "price-high", label: "Price: High to Low" },
  { id: "duration", label: "Duration" },
]

export default function CourseListing() {
  const [courses, setCourses] = useState(allCourses)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("popular")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedLevel, setSelectedLevel] = useState<string>("all")
  const [selectedPrice, setSelectedPrice] = useState<string>("all")
  const coursesPerPage = 9

  // Filter and sort courses
  useEffect(() => {
    let filtered = [...allCourses]

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(course => course.category === selectedCategory)
    }

    // Apply level filter
    if (selectedLevel !== "all") {
      filtered = filtered.filter(course => course.level.includes(selectedLevel))
    }

    // Apply price filter
    if (selectedPrice !== "all") {
      if (selectedPrice === "free") {
        filtered = filtered.filter(course => course.discountedPrice === 0)
      } else if (selectedPrice === "under-10k") {
        filtered = filtered.filter(course => course.discountedPrice < 10000)
      } else if (selectedPrice === "10k-20k") {
        filtered = filtered.filter(course => course.discountedPrice >= 10000 && course.discountedPrice <= 20000)
      } else if (selectedPrice === "above-20k") {
        filtered = filtered.filter(course => course.discountedPrice > 20000)
      }
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0) || b.students.localeCompare(a.students)
        case "rating":
          return b.rating - a.rating
        case "price-low":
          return a.discountedPrice - b.discountedPrice
        case "price-high":
          return b.discountedPrice - a.discountedPrice
        case "duration":
          const aMonths = parseInt(a.duration)
          const bMonths = parseInt(b.duration)
          return aMonths - bMonths
        default:
          return 0
      }
    })

    setCourses(filtered)
    setCurrentPage(1)
  }, [selectedCategory, selectedLevel, selectedPrice, sortBy])

  // Calculate pagination
  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse)
  const totalPages = Math.ceil(courses.length / coursesPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="space-y-8">
      {/* Controls Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm">View:</span>
            <div className="flex glass rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  viewMode === "grid" 
                    ? "bg-white/10 text-white" 
                    : "text-gray-400 hover:text-white"
                )}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  viewMode === "list" 
                    ? "bg-white/10 text-white" 
                    : "text-gray-400 hover:text-white"
                )}
              >
                <List size={20} />
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-400">
            Showing {indexOfFirstCourse + 1}-{Math.min(indexOfLastCourse, courses.length)} of {courses.length} courses
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-gray-400 text-sm">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="glass rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Active Filters */}
      <div className="flex flex-wrap gap-2">
        {selectedCategory !== "all" && (
          <div className="glass rounded-full px-4 py-2 text-sm flex items-center space-x-2">
            <span className="text-gray-400">Category:</span>
            <span className="text-white">{selectedCategory}</span>
            <button 
              onClick={() => setSelectedCategory("all")}
              className="text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>
        )}
        {selectedLevel !== "all" && (
          <div className="glass rounded-full px-4 py-2 text-sm flex items-center space-x-2">
            <span className="text-gray-400">Level:</span>
            <span className="text-white">{selectedLevel}</span>
            <button 
              onClick={() => setSelectedLevel("all")}
              className="text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>
        )}
        {selectedPrice !== "all" && (
          <div className="glass rounded-full px-4 py-2 text-sm flex items-center space-x-2">
            <span className="text-gray-400">Price:</span>
            <span className="text-white">{selectedPrice}</span>
            <button 
              onClick={() => setSelectedPrice("all")}
              className="text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>
        )}
      </div>

      {/* Courses Grid/List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${viewMode}-${currentPage}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            viewMode === "grid" 
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "space-y-6"
          )}
        >
          {currentCourses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              viewMode={viewMode}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 pt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="glass rounded-lg px-4 py-2 text-sm text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm transition-all",
                currentPage === page
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                  : "glass text-gray-400 hover:text-white"
              )}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="glass rounded-lg px-4 py-2 text-sm text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}

      {/* Empty State */}
      {courses.length === 0 && (
        <div className="text-center py-16 glass rounded-2xl">
          <Search className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No courses found</h3>
          <p className="text-gray-400 max-w-md mx-auto">
            Try adjusting your filters or search terms to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all")
              setSelectedLevel("all")
              setSelectedPrice("all")
            }}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  )
}