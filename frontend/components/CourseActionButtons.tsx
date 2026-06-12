"use client"

export default function CourseActionButtons() {
  return (
    <div className="space-y-4">
      <button 
        onClick={() => {
          alert("Successfully enrolled!");
          window.location.href = "/dashboard";
        }}
        className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:opacity-90 transition-opacity"
      >
        Enroll Now
      </button>
      <button 
        onClick={() => alert("Added to your wishlist!")}
        className="w-full px-6 py-4 glass text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
      >
        Add to Wishlist
      </button>
      <button 
        onClick={() => alert("Preview video will be uploaded shortly.")}
        className="w-full px-6 py-4 glass text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
      >
        Try Free Preview
      </button>
    </div>
  )
}
