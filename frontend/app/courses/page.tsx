import { Suspense } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CourseListing from "@/components/CourseListing"
import CourseFilters from "@/components/CourseFilters"
import CourseSearch from "@/components/CourseSearch"
import { Skeleton } from "@/components/ui/skeleton"
import AuthGuard from "@/components/AuthGuard"

export const metadata = {
  title: "Premium Courses | Inspire Leap - Wipro Partner Program",
  description: "Explore industry-relevant courses designed by experts from top tech companies. Master skills that matter in today's job market.",
}

export default function CoursesPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black">
        <Navbar />
        
        <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Our <span className="gradient-text">Premium Courses</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Industry-designed curriculum with guaranteed placement opportunities. 
              Learn from experts at top tech companies and transform your career.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <Suspense fallback={<Skeleton className="h-12 w-full rounded-xl" />}>
              <CourseSearch />
            </Suspense>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <Suspense fallback={<FilterSkeleton />}>
                <CourseFilters />
              </Suspense>
            </div>

            {/* Course Listing */}
            <div className="lg:w-3/4">
              <Suspense fallback={<CourseGridSkeleton />}>
                <CourseListing />
              </Suspense>
            </div>
          </div>
        </div>
      </main>

        <Footer />
      </div>
    </AuthGuard>
  )
}

function FilterSkeleton() {
  return (
    <div className="glass rounded-2xl p-6 space-y-6">
      <Skeleton className="h-6 w-32" />
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center space-x-3">
            <Skeleton className="h-4 w-4 rounded" />
            <Skeleton className="h-4 w-24" />
          </div>
        ))}
      </div>
      <Skeleton className="h-6 w-32 mt-8" />
      <div className="space-y-2">
        {[1, 2].map((i) => (
          <Skeleton key={i} className="h-4 w-full" />
        ))}
      </div>
    </div>
  )
}

function CourseGridSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="glass rounded-2xl p-6 space-y-4">
          <Skeleton className="h-40 w-full rounded-xl" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <div className="flex justify-between items-center pt-4">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-10 w-32 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  )
}