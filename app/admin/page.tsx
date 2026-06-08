import { Suspense } from "react"
import AdminNavbar from "@/components/AdminNavbar"
import AdminSidebar from "@/components/AdminSidebar"
import AdminStats from "@/components/AdminStats"
import RevenueAnalytics from "@/components/RevenueAnalytics"
import UserAnalytics from "@/components/UserAnalytics"
import EnrollmentAnalytics from "@/components/EnrollmentAnalytics"
import RecentTransactions from "@/components/RecentTransactions"
import TopCourses from "@/components/TopCourses"
import UserManagement from "@/components/UserManagement"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Admin Dashboard | Inspire Leap - Wipro Partner Program",
  description: "Comprehensive admin dashboard for managing courses, users, revenue, and analytics for Inspire Leap platform.",
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black">
      <AdminNavbar />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:block">
          <AdminSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 pt-24 pb-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                Admin Dashboard
              </h1>
              <p className="text-gray-400">
                Manage platform analytics, users, courses, and revenue.
              </p>
            </div>

            {/* Stats Overview */}
            <Suspense fallback={<StatsSkeleton />}>
              <AdminStats />
            </Suspense>

            {/* Analytics Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mt-8">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Revenue Analytics */}
                <Suspense fallback={<RevenueSkeleton />}>
                  <RevenueAnalytics />
                </Suspense>

                {/* User Analytics */}
                <Suspense fallback={<UserSkeleton />}>
                  <UserAnalytics />
                </Suspense>

                {/* Recent Transactions */}
                <Suspense fallback={<TransactionsSkeleton />}>
                  <RecentTransactions />
                </Suspense>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Enrollment Analytics */}
                <Suspense fallback={<EnrollmentSkeleton />}>
                  <EnrollmentAnalytics />
                </Suspense>

                {/* Top Courses */}
                <Suspense fallback={<CoursesSkeleton />}>
                  <TopCourses />
                </Suspense>

                {/* User Management */}
                <Suspense fallback={<UsersSkeleton />}>
                  <UserManagement />
                </Suspense>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 glass rounded-xl text-white hover:bg-white/10 transition-colors text-sm flex items-center justify-between">
                <span>Add New Course</span>
                <span className="text-primary">+</span>
              </button>
              <button className="p-4 glass rounded-xl text-white hover:bg-white/10 transition-colors text-sm flex items-center justify-between">
                <span>Generate Reports</span>
                <span className="text-primary">📊</span>
              </button>
              <button className="p-4 glass rounded-xl text-white hover:bg-white/10 transition-colors text-sm flex items-center justify-between">
                <span>Send Announcement</span>
                <span className="text-primary">📢</span>
              </button>
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

function RevenueSkeleton() {
  return (
    <div className="glass rounded-2xl p-6">
      <Skeleton className="h-6 w-40 mb-6" />
      <Skeleton className="h-64 rounded-xl" />
    </div>
  )
}

function UserSkeleton() {
  return (
    <div className="glass rounded-2xl p-6">
      <Skeleton className="h-6 w-32 mb-6" />
      <Skeleton className="h-48 rounded-xl" />
    </div>
  )
}

function TransactionsSkeleton() {
  return (
    <div className="glass rounded-2xl p-6">
      <Skeleton className="h-6 w-40 mb-6" />
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-16 rounded-lg" />
        ))}
      </div>
    </div>
  )
}

function EnrollmentSkeleton() {
  return (
    <div className="glass rounded-2xl p-6">
      <Skeleton className="h-6 w-48 mb-6" />
      <Skeleton className="h-64 rounded-xl" />
    </div>
  )
}

function CoursesSkeleton() {
  return (
    <div className="glass rounded-2xl p-6">
      <Skeleton className="h-6 w-32 mb-6" />
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-20 rounded-lg" />
        ))}
      </div>
    </div>
  )
}

function UsersSkeleton() {
  return (
    <div className="glass rounded-2xl p-6">
      <Skeleton className="h-6 w-40 mb-6" />
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center space-x-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}