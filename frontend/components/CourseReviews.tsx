"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Star, 
  ThumbsUp, 
  MessageSquare,
  Filter,
  ChevronDown,
  ChevronUp,
  User,
  Calendar,
  CheckCircle
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Review {
  id: number
  name: string
  rating: number
  date: string
  comment: string
  helpful: number
}

interface CourseReviewsProps {
  reviews: Review[]
  averageRating: number
  totalReviews: number
}

const ratingDistribution = [
  { stars: 5, percentage: 68, count: 848 },
  { stars: 4, percentage: 22, count: 274 },
  { stars: 3, percentage: 6, count: 75 },
  { stars: 2, percentage: 3, count: 37 },
  { stars: 1, percentage: 1, count: 13 },
]

const sortOptions = [
  { id: "recent", label: "Most Recent" },
  { id: "helpful", label: "Most Helpful" },
  { id: "highest", label: "Highest Rated" },
  { id: "lowest", label: "Lowest Rated" },
]

const filterOptions = [
  { id: "all", label: "All Reviews" },
  { id: "5", label: "5 Stars" },
  { id: "4", label: "4 Stars" },
  { id: "3", label: "3 Stars" },
  { id: "2", label: "2 Stars" },
  { id: "1", label: "1 Star" },
]

export default function CourseReviews({ 
  reviews, 
  averageRating, 
  totalReviews 
}: CourseReviewsProps) {
  const [sortBy, setSortBy] = useState("recent")
  const [filterBy, setFilterBy] = useState("all")
  const [expandedReview, setExpandedReview] = useState<number | null>(null)
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: "",
    name: "",
    email: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const filteredReviews = reviews.filter(review => {
    if (filterBy === "all") return true
    return review.rating === parseInt(filterBy)
  })

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case "recent":
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case "helpful":
        return b.helpful - a.helpful
      case "highest":
        return b.rating - a.rating
      case "lowest":
        return a.rating - b.rating
      default:
        return 0
    }
  })

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log("Review submitted:", newReview)
    setNewReview({
      rating: 5,
      comment: "",
      name: "",
      email: ""
    })
    setIsSubmitting(false)
  }

  const toggleReviewExpansion = (reviewId: number) => {
    setExpandedReview(expandedReview === reviewId ? null : reviewId)
  }

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Student Reviews</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="text-3xl font-bold text-gray-900 mr-2">{averageRating}</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-5 w-5",
                      i < Math.floor(averageRating)
                        ? "text-yellow-500 fill-yellow-500"
                        : i < averageRating
                        ? "text-yellow-500 fill-yellow-500 opacity-50"
                        : "text-gray-600"
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="text-gray-600 font-medium">
              Based on <span className="text-gray-900 font-bold">{totalReviews}</span> reviews
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-10 shadow-sm"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-10 shadow-sm"
            >
              {filterOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Rating Distribution */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Rating Breakdown</h3>
        <div className="space-y-3">
          {ratingDistribution.map((dist) => (
            <div key={dist.stars} className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 w-16">
                <span className="text-sm font-medium text-gray-600">{dist.stars}</span>
                <Star className="h-4 w-4 text-yellow-500" />
              </div>
              <div className="flex-1">
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${dist.percentage}%` }}
                    transition={{ duration: 1, delay: dist.stars * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                  />
                </div>
              </div>
              <div className="text-sm font-medium text-gray-600 w-16 text-right">
                {dist.percentage}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write Review Form */}
      <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Write a Review</h3>
        <form onSubmit={handleSubmitReview} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Your Rating
            </label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewReview({ ...newReview, rating: star })}
                  className="focus:outline-none"
                >
                  <Star
                    className={cn(
                      "h-8 w-8 transition-colors",
                      star <= newReview.rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-600 hover:text-yellow-500"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Your Review
            </label>
            <textarea
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              placeholder="Share your experience with this course..."
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px] shadow-sm"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                value={newReview.email}
                onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
                placeholder="Enter your email"
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </button>
            <div className="text-xs font-medium text-gray-500">
              Your review will be visible after moderation
            </div>
          </div>
        </form>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Recent Reviews ({sortedReviews.length})
        </h3>

        {sortedReviews.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 border border-gray-100 rounded-xl">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <div className="text-gray-500 font-medium">No reviews found for the selected filter</div>
          </div>
        ) : (
          <AnimatePresence>
            {sortedReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm"
              >
                {/* Review Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{review.name}</div>
                      <div className="flex items-center text-sm font-medium text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {review.date}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < review.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-600"
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-900">
                      {review.rating}.0
                    </span>
                  </div>
                </div>

                {/* Review Content */}
                <div className="mb-4">
                  <p className={cn(
                    "text-gray-700 leading-relaxed",
                    expandedReview === review.id ? "" : "line-clamp-3"
                  )}>
                    {review.comment}
                  </p>
                  {review.comment.length > 200 && (
                    <button
                      onClick={() => toggleReviewExpansion(review.id)}
                      className="text-sm text-primary hover:text-secondary mt-2 flex items-center space-x-1"
                    >
                      {expandedReview === review.id ? (
                        <>
                          <span>Show less</span>
                          <ChevronUp className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          <span>Read more</span>
                          <ChevronDown className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Review Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                      <span>Helpful ({review.helpful})</span>
                    </button>
                    <button className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      <span>Reply</span>
                    </button>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-green-500">
                    <CheckCircle className="h-4 w-4" />
                    <span>Verified Student</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}

        {sortedReviews.length > 0 && (
          <div className="text-center pt-6">
            <button className="px-6 py-3 bg-white border border-gray-200 text-gray-900 rounded-lg font-bold hover:bg-gray-50 transition-colors shadow-sm">
              Load More Reviews
            </button>
          </div>
        )}
      </div>
    </div>
  )
}