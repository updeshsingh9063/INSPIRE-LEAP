"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function CourseSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false)
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [selectedFormat, setSelectedFormat] = useState<string>("all")

  const popularSearches = [
    "Web Development",
    "Data Science",
    "Cloud Computing",
    "UI/UX Design",
    "Digital Marketing",
    "Cybersecurity",
    "Machine Learning",
    "DevOps",
  ]

  const skills = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "AWS",
    "Docker",
    "Figma",
    "TensorFlow",
    "Kubernetes",
    "SQL",
    "MongoDB",
    "GraphQL",
  ]

  const formats = [
    { id: "all", label: "All Formats" },
    { id: "live", label: "Live Sessions" },
    { id: "recorded", label: "Recorded Videos" },
    { id: "hybrid", label: "Hybrid" },
    { id: "self-paced", label: "Self-Paced" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/courses?search=${encodeURIComponent(searchQuery)}`
    }
  }

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    )
  }

  const clearSearch = () => {
    setSearchQuery("")
    setSelectedSkills([])
    setSelectedFormat("all")
  }

  const hasActiveSearch = searchQuery.trim() || selectedSkills.length > 0 || selectedFormat !== "all"

  return (
    <div className="space-y-6">
      {/* Main Search Bar */}
      <motion.form
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onSubmit={handleSearch}
        className="relative"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for courses, skills, or instructors..."
            className="w-full pl-12 pr-24 py-4 glass rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            {hasActiveSearch && (
              <button
                type="button"
                onClick={clearSearch}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsAdvancedSearchOpen(!isAdvancedSearchOpen)}
              className={cn(
                "p-2 rounded-lg transition-colors",
                isAdvancedSearchOpen
                  ? "bg-primary text-white"
                  : "glass text-gray-400 hover:text-white"
              )}
            >
              <Filter className="h-5 w-5" />
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Search
            </button>
          </div>
        </div>
      </motion.form>

      {/* Popular Searches */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex flex-wrap gap-2"
      >
        <span className="text-sm text-gray-400">Popular:</span>
        {popularSearches.map((search) => (
          <motion.button
            key={search}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSearchQuery(search)}
            className="px-3 py-1.5 glass rounded-full text-sm text-gray-400 hover:text-white transition-colors"
          >
            {search}
          </motion.button>
        ))}
      </motion.div>

      {/* Advanced Search */}
      <AnimatePresence>
        {isAdvancedSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl p-6 space-y-6 overflow-hidden"
          >
            {/* Skills Filter */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => {
                  const isSelected = selectedSkills.includes(skill)
                  return (
                    <motion.button
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSkillToggle(skill)}
                      className={cn(
                        "px-4 py-2 rounded-full text-sm transition-all duration-200",
                        isSelected
                          ? "bg-gradient-to-r from-primary to-secondary text-white"
                          : "glass text-gray-400 hover:text-white"
                      )}
                    >
                      {skill}
                    </motion.button>
                  )
                })}
              </div>
            </div>

            {/* Format Filter */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Format</h4>
              <div className="flex flex-wrap gap-2">
                {formats.map((format) => (
                  <motion.button
                    key={format.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedFormat(format.id)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm transition-all duration-200",
                      selectedFormat === format.id
                        ? "bg-gradient-to-r from-primary to-secondary text-white"
                        : "glass text-gray-400 hover:text-white"
                    )}
                  >
                    {format.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Date Filter */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Start Date</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  { id: "any", label: "Any Time" },
                  { id: "this-month", label: "This Month" },
                  { id: "next-month", label: "Next Month" },
                  { id: "quarter", label: "Next Quarter" },
                ].map((date) => (
                  <motion.button
                    key={date.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 glass rounded-lg text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {date.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Language Filter */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-white">Language</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "all", label: "All Languages" },
                  { id: "english", label: "English" },
                  { id: "hindi", label: "Hindi" },
                  { id: "tamil", label: "Tamil" },
                ].map((lang) => (
                  <motion.button
                    key={lang.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 glass rounded-lg text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {lang.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Apply Advanced Filters Button */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  console.log("Advanced filters:", {
                    searchQuery,
                    selectedSkills,
                    selectedFormat,
                  })
                  setIsAdvancedSearchOpen(false)
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Apply Advanced Filters
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Helper component for animation
const AnimatePresence = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}