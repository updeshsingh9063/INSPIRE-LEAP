"use client"

import { useRouter } from "next/navigation"

export default function CourseActionButtons() {
  const router = useRouter()

  const handleEnroll = () => {
    const token = localStorage.getItem("auth_token")
    if (!token) {
      alert("Please login or create an account first to enroll in courses.")
      router.push("/login")
      return
    }
    window.open("https://rzp.io/rzp/9tayaBb", "_blank")
  }

  const handleWishlist = () => {
    alert("Added to your wishlist!")
  }

  const handlePreview = () => {
    alert("Preview video will be uploaded shortly.")
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
        className="w-full px-6 py-4 glass text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
      >
        Add to Wishlist
      </button>
      <button
        onClick={handlePreview}
        className="w-full px-6 py-4 glass text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
      >
        Try Free Preview
      </button>
    </div>
  )
}
