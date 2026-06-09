import { Suspense } from "react"
import DashboardNavbar from "@/components/DashboardNavbar"
import DashboardSidebar from "@/components/DashboardSidebar"
import DashboardStats from "@/components/DashboardStats"
import MyCourses from "@/components/MyCourses"
import LearningProgress from "@/components/LearningProgress"
import UpcomingSessions from "@/components/UpcomingSessions"
import RecentActivity from "@/components/RecentActivity"
import Certificates from "@/components/Certificates"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Student Dashboard | Inspire Leap - Wipro Partner Program",
  description: "Track your learning progress, manage courses, view certificates, and connect with mentors on your Inspire Leap dashboard.",
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black">
      <DashboardNavbar />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:block">
          <DashboardSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 pt-24 pb-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome back, Priya! 👋
              </h1>
              <p className="text-gray-400">
                Track your learning journey, manage courses, and prepare for placements.
              </p>
            </div>

            {/* Stats Overview */}
            <Suspense fallback={<StatsSkeleton />}>
              <DashboardStats />
            </Suspense>

            <div className="grid lg:grid-cols-3 gap-8 mt-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* My Courses */}
                <Suspense fallback={<CoursesSkeleton />}>
                  <MyCourses />
                </Suspense>

                {/* Learning Progress */}
                <Suspense fallback={<ProgressSkeleton />}>
                  <LearningProgress />
                </Suspense>

                {/* Recent Activity */}
                <Suspense fallback={<ActivitySkeleton />}>
                  <RecentActivity />
                </Suspense>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Upcoming Sessions */}
                <Suspense fallback={<SessionsSkeleton />}>
                  <UpcomingSessions />
                </Suspense>

                {/* Certificates */}
                <Suspense fallback={<CertificatesSkeleton />}>
                  <Certificates />
                </Suspense>

                {/* Quick Actions */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full px-4 py-3 glass rounded-lg text-white hover:bg-white/10 transition-colors text-sm flex items-center justify-between">
                      <span>Book Mentor Session</span>
                      <span className="text-primary">→</span>
                    </button>
                    <button className="w-full px-4 py-3 glass rounded-lg text-white hover:bg-white/10 transition-colors text-sm flex items-center justify-between">
                      <span>Download Resume</span>
                      <span className="text-primary">→</span>
                    </button>
                    <button className="w-full px-4 py-3 glass rounded-lg text-white hover:bg-white/10 transition-colors text-sm flex items-center justify-between">
                      <span>View Placement Stats</span>
                      <span className="text-primary">→</span>
                    </button>
                    <button className="w-full px-4 py-3 glass rounded-lg text-white hover:bg-white/10 transition-colors text-sm flex items-center justify-between">
                      <span>Join Community</span>
                      <span className="text-primary">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function StatsSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-32 rounded-2xl" />
      ))}
    </div>
  )
}

function CoursesSkeleton() {
  return (
    <div className="glass rounded-2xl p-6">
      <Skeleton className="h-6 w-32 mb-6" />
      <div className="space-y-4">
        {[1, 2].map((i) => (
          <Skeleton key={i} className="h-24 rounded-xl" />
        ))}
      </div>
    </div>
  )
}

function ProgressSkeleton() {
  return (
    <div className="glass rounded-2xl p-6">
      <Skeleton className="h-6 w-40 mb-6" />
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ActivitySkeleton() {
  return (
    <div className="glass rounded-2xl p-6">
      <Skeleton className="h-6 w-40 mb-6" />
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center space-x-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-3/4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SessionsSkeleton() {
  return (
    <div className="glass rounded-2xl p-6">
      <Skeleton className="h-6 w-40 mb-6" />
      <div className="space-y-4">
        {[1, 2].map((i) => (
          <Skeleton key={i} className="h-20 rounded-xl" />
        ))}
      </div>
    </div>
  )
}

function CertificatesSkeleton() {
  return (
    <div className="glass rounded-2xl p-6">
      <Skeleton className="h-6 w-32 mb-6" />
      <div className="space-y-3">
        {[1, 2].map((i) => (
          <Skeleton key={i} className="h-16 rounded-lg" />
        ))}
      </div>
    </div>
  )
}