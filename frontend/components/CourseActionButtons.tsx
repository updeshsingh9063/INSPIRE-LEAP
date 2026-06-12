"use client"

import { useRouter } from "next/navigation"
import { useAuthAction } from "@/hooks/useAuthAction"

export default function CourseActionButtons() {
  const router = useRouter()
  const withAuth = useAuthAction()

  const handleEnroll = () => {
    withAuth(() => {
      window.open("https://rzp.io/rzp/9tayaBb", "_blank")
    })
  }

  const handleWishlist = () => {
    withAuth(() => {
      alert("Added to your wishlist!")
    })
  }

  const handlePreview = () => {
    withAuth(() => {
      alert("Preview video will be uploaded shortly.")
    })
  }

  return (
    <div className="space-y-4">
      <button
        onClick={handleEnroll}
        className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:opacity-90 transition-opacity"
      >
        Enroll Now
      </button>
      <button
        onClick={handleWishlist}
        className="w-full px-6 py-4 bg-gray-100 border border-gray-200 text-gray-900 rounded-xl font-bold hover:bg-gray-200 transition-colors shadow-sm"
      >
        Add to Wishlist
      </button>
      <button
        onClick={handlePreview}
        className="w-full px-6 py-4 bg-gray-100 border border-gray-200 text-gray-900 rounded-xl font-bold hover:bg-gray-200 transition-colors shadow-sm"
      >
        Try Free Preview
      </button>
    </div>
  )
}
