"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Filter,
  DollarSign,
  TrendingUp,
  Award,
  Clock,
  Users,
  Star,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All Categories", count: 45 },
  { id: "tech", label: "Technology", count: 18 },
  { id: "data", label: "Data Science", count: 12 },
  { id: "cloud", label: "Cloud & DevOps", count: 8 },
  { id: "design", label: "Creative Design", count: 6 },
  { id: "business", label: "Business", count: 7 },
  { id: "ai", label: "Artificial Intelligence", count: 9 },
  { id: "blockchain", label: "Blockchain", count: 4 },
]

const levels = [
  { id: "all", label: "All Levels" },
  { id: "Beginner", label: "Beginner" },
  { id: "Intermediate", label: "Intermediate" },
  { id: "Advanced", label: "Advanced" },
]

const priceRanges = [
  { id: "all", label: "All Prices" },
  { id: "free", label: "Free" },
  { id: "under-10k", label: "Under ₹10,000" },
  { id: "10k-20k", label: "₹10,000 - ₹20,000" },
  { id: "above-20k", label: "Above ₹20,000" },
]

const durations = [
  { id: "all", label: "Any Duration" },
  { id: "1-3", label: "1-3 Months" },
  { id: "3-6", label: "3-6 Months" },
  { id: "6-12", label: "6-12 Months" },
  { id: "12+", label: "12+ Months" },
]

const certifications = [
  { id: "all", label: "All Certifications" },
  { id: "wipro", label: "Wipro Certified" },
  { id: "google", label: "Google Certified" },
  { id: "aws", label: "AWS Certified" },
  { id: "microsoft", label: "Microsoft Certified" },
  { id: "cisco", label: "Cisco Certified" },
]

const features = [
  { id: "placement", label: "Placement Assistance", icon: TrendingUp },
  { id: "live", label: "Live Sessions", icon: Users },
  { id: "projects", label: "Real Projects", icon: Award },
  { id: "mentor", label: "1:1 Mentorship", icon: Star },
]

interface CourseFiltersProps {
  onCategoryChange?: (category: string) => void
  onLevelChange?: (level: string) => void
  onPriceChange?: (price: string) => void
  onDurationChange?: (duration: string) => void
  onCertificationChange?: (certification: string) => void
  onFeatureToggle?: (feature: string) => void
}

export default function CourseFilters({
  onCategoryChange,
  onLevelChange,
  onPriceChange,
  onDurationChange,
  onCertificationChange,
  onFeatureToggle,
}: CourseFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedPrice, setSelectedPrice] = useState("all")
  const [selectedDuration, setSelectedDuration] = useState("all")
  const [selectedCertification, setSelectedCertification] = useState("all")
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    onCategoryChange?.(categoryId)
  }

  const handleLevelChange = (levelId: string) => {
    setSelectedLevel(levelId)
    onLevelChange?.(levelId)
  }

  const handlePriceChange = (priceId: string) => {
    setSelectedPrice(priceId)
    onPriceChange?.(priceId)
  }

  const handleDurationChange = (durationId: string) => {
    setSelectedDuration(durationId)
    onDurationChange?.(durationId)
  }

  const handleCertificationChange = (certificationId: string) => {
    setSelectedCertification(certificationId)
    onCertificationChange?.(certificationId)
  }

  const handleFeatureToggle = (featureId: string) => {
    const newFeatures = selectedFeatures.includes(featureId)
      ? selectedFeatures.filter(id => id !== featureId)
      : [...selectedFeatures, featureId]
    
    setSelectedFeatures(newFeatures)
    onFeatureToggle?.(featureId)
  }

  const clearAllFilters = () => {
    setSelectedCategory("all")
    setSelectedLevel("all")
    setSelectedPrice("all")
    setSelectedDuration("all")
    setSelectedCertification("all")
    setSelectedFeatures([])
    
    onCategoryChange?.("all")
    onLevelChange?.("all")
    onPriceChange?.("all")
    onDurationChange?.("all")
    onCertificationChange?.("all")
    selectedFeatures.forEach(feature => onFeatureToggle?.(feature))
  }

  const hasActiveFilters = selectedCategory !== "all" || 
    selectedLevel !== "all" || 
    selectedPrice !== "all" || 
    selectedDuration !== "all" || 
    selectedCertification !== "all" || 
    selectedFeatures.length > 0

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Filter className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-white">Filters</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-gray-400 hover:text-white flex items-center space-x-1"
          >
            <X className="h-4 w-4" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-400">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCategoryChange(category.id)}
              className={cn(
                "w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200",
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-white border border-primary/30"
                  : "glass text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <span className="text-sm">{category.label}</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded">
                {category.count}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Level */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-400">Level</h4>
        <div className="flex flex-wrap gap-2">
          {levels.map((level) => (
            <motion.button
              key={level.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLevelChange(level.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-all duration-200",
                selectedLevel === level.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                  : "glass text-gray-400 hover:text-white"
              )}
            >
              {level.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-400 flex items-center">
          <DollarSign className="h-4 w-4 mr-2" />
          Price Range
        </h4>
        <div className="space-y-2">
          {priceRanges.map((price) => (
            <motion.button
              key={price.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handlePriceChange(price.id)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-lg transition-all duration-200",
                selectedPrice === price.id
                  ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-white border border-primary/30"
                  : "glass text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <span className="text-sm">{price.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-400 flex items-center">
          <Clock className="h-4 w-4 mr-2" />
          Duration
        </h4>
        <div className="space-y-2">
          {durations.map((duration) => (
            <motion.button
              key={duration.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleDurationChange(duration.id)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-lg transition-all duration-200",
                selectedDuration === duration.id
                  ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-white border border-primary/30"
                  : "glass text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <span className="text-sm">{duration.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-400 flex items-center">
          <Award className="h-4 w-4 mr-2" />
          Certifications
        </h4>
        <div className="space-y-2">
          {certifications.map((certification) => (
            <motion.button
              key={certification.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCertificationChange(certification.id)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-lg transition-all duration-200",
                selectedCertification === certification.id
                  ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-white border border-primary/30"
                  : "glass text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <span className="text-sm">{certification.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-400">Features</h4>
        <div className="space-y-3">
          {features.map((feature) => {
            const Icon = feature.icon
            const isSelected = selectedFeatures.includes(feature.id)
            
            return (
              <motion.button
                key={feature.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleFeatureToggle(feature.id)}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200",
                  isSelected
                    ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-white border border-primary/30"
                    : "glass text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm">{feature.label}</span>
                {isSelected && (
                  <div className="ml-auto">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                )}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-400 flex items-center">
          <Star className="h-4 w-4 mr-2" />
          Minimum Rating
        </h4>
        <div className="flex items-center space-x-2">
          {[4.5, 4.0, 3.5, 3.0].map((rating) => (
            <motion.button
              key={rating}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 glass rounded-lg text-sm text-gray-400 hover:text-white"
            >
              {rating}+
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}