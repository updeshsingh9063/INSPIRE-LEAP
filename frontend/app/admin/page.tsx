"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import {
  Users, BookOpen, CreditCard, Search, LogOut, Shield,
  TrendingUp, Mail, Phone, Calendar, Eye, CheckCircle,
  Clock, XCircle, ChevronRight, Home, RefreshCw, AlertCircle
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

// ── Helpers ───────────────────────────────────────────────────────────────────
function getAdminToken() {
  if (typeof window === "undefined") return null
  return localStorage.getItem("auth_token")
}

const statusBadge: Record<string, { label: string; className: string; icon: any }> = {
  ADMIN:    { label: "Admin",     className: "bg-violet-50 text-violet-700 border border-violet-200", icon: Shield      },
  STUDENT:  { label: "Student",   className: "bg-blue-50   text-blue-700   border border-blue-200",   icon: CheckCircle },
  MENTOR:   { label: "Mentor",    className: "bg-emerald-50 text-emerald-700 border border-emerald-200", icon: CheckCircle },
  active:   { label: "Active",    className: "bg-emerald-50 text-emerald-700 border border-emerald-200", icon: CheckCircle },
  inactive: { label: "Inactive",  className: "bg-gray-100  text-gray-600   border border-gray-200",   icon: XCircle     },
  pending:  { label: "Pending",   className: "bg-amber-50  text-amber-700  border border-amber-200",   icon: Clock       },
  success:  { label: "Enrolled",  className: "bg-emerald-50 text-emerald-700 border border-emerald-200", icon: CheckCircle },
  published: { label: "Published", className: "bg-emerald-50 text-emerald-700 border border-emerald-200", icon: CheckCircle },
  draft:    { label: "Draft",     className: "bg-gray-100  text-gray-600   border border-gray-200",   icon: Clock       },
}

const tabs = [
  { id: "users",       label: "Users",       icon: Users    },
  { id: "courses",     label: "Courses",     icon: BookOpen },
  { id: "enrollments", label: "Enrollments", icon: CreditCard },
]

// ── Main Component ────────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [activeTab, setActiveTab]     = useState("users")
  const [search, setSearch]           = useState("")
  const [users, setUsers]             = useState<any[]>([])
  const [courses, setCourses]         = useState<any[]>([])
  const [enrollments, setEnrollments] = useState<any[]>([])
  const [stats, setStats]             = useState({ totalUsers: 0, totalCourses: 0, totalEnrollments: 0 })
  const [loading, setLoading]         = useState(true)
  const [error, setError]             = useState<string | null>(null)
  const [notAdmin, setNotAdmin]       = useState(false)

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(null)
    const token = getAdminToken()
    if (!token) { setNotAdmin(true); setLoading(false); return }

    const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
    try {
      const [usersRes, coursesRes, enrollRes, statsRes] = await Promise.all([
        fetch(`${API}/admin/users`,       { headers }),
        fetch(`${API}/admin/courses`,     { headers }),
        fetch(`${API}/admin/enrollments`, { headers }),
        fetch(`${API}/admin/stats`,       { headers }),
      ])
      if (usersRes.status === 401 || usersRes.status === 403) { setNotAdmin(true); setLoading(false); return }

      const [u, c, e, s] = await Promise.all([usersRes.json(), coursesRes.json(), enrollRes.json(), statsRes.json()])
      if (u.success) setUsers(u.data)
      if (c.success) setCourses(c.data)
      if (e.success) setEnrollments(e.data)
      if (s.success) setStats(s.data)
    } catch {
      setError("Failed to connect to backend. Make sure the server is running.")
    }
    setLoading(false)
  }, [])

  useEffect(() => { fetchData() }, [fetchData])

  // ── Not Admin ───────────────────────────────────────────────────────────────
  if (notAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-md w-full text-center">
          <div className="h-16 w-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-red-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Admin Access Required</h2>
          <p className="text-gray-500 text-sm mb-6">
            You need to be logged in as an <strong>Admin</strong> to view this dashboard.<br /><br />
            To become admin: Log into your account, then go to <strong>MongoDB Atlas → Browse Collections → User</strong> and change your <code className="bg-gray-100 px-1 rounded">role</code> field to <code className="bg-gray-100 px-1 rounded">ADMIN</code>. Then log out and log back in.
          </p>
          <Link href="/login" className="inline-flex items-center px-6 py-2.5 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-700 transition-colors">
            Go to Login
          </Link>
        </div>
      </div>
    )
  }

  const statCards = [
    { label: "Total Users",       value: stats.totalUsers,       icon: Users,     light: "bg-violet-50",  text: "text-violet-600" },
    { label: "Total Courses",     value: stats.totalCourses,     icon: BookOpen,  light: "bg-blue-50",    text: "text-blue-600"   },
    { label: "Total Enrollments", value: stats.totalEnrollments, icon: CreditCard, light: "bg-emerald-50", text: "text-emerald-600" },
    { label: "Active Today",      value: users.filter(u => u.isActive).length, icon: TrendingUp, light: "bg-orange-50", text: "text-orange-600" },
  ]

  const filteredUsers = users.filter(u =>
    `${u.firstName} ${u.lastName} ${u.email}`.toLowerCase().includes(search.toLowerCase())
  )
  const filteredCourses = courses.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase())
  )
  const filteredEnrollments = enrollments.filter(e =>
    `${e.user.firstName} ${e.user.lastName} ${e.user.email} ${e.course.title}`.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/admin" className="flex items-center space-x-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-md">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-gray-900">Inspire Leap</span>
                <span className="ml-1.5 text-xs font-semibold text-violet-600 bg-violet-50 px-1.5 py-0.5 rounded-full border border-violet-100">Admin</span>
              </div>
            </Link>

            <div className="hidden md:block relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search users, courses..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:border-violet-400 transition-all"
              />
            </div>

            <div className="flex items-center space-x-2">
              <button onClick={fetchData} className="p-2 text-gray-400 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-colors" title="Refresh">
                <RefreshCw className={cn("h-4 w-4", loading && "animate-spin")} />
              </button>
              <Link href="/" className="flex items-center space-x-1.5 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Home className="h-4 w-4" />
                <span className="hidden sm:block">View Site</span>
              </Link>
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow">
                <span className="text-white text-sm font-bold">A</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Content ────────────────────────────────────────────────────────── */}
      <main className="pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500 text-sm mt-1">
            Real-time data from MongoDB Atlas · {new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Error Banner */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3 text-red-700">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        {/* ── Stat Cards ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className={cn("h-10 w-10 rounded-xl flex items-center justify-center", s.light)}>
                    <Icon className={cn("h-5 w-5", s.text)} />
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-300" />
                </div>
                {loading ? (
                  <div className="h-8 w-16 bg-gray-100 rounded animate-pulse mb-1" />
                ) : (
                  <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                )}
                <div className="text-sm text-gray-500 mt-0.5">{s.label}</div>
              </motion.div>
            )
          })}
        </div>

        {/* ── Tabs ────────────────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between border-b border-gray-100 px-6">
            <div className="flex space-x-1">
              {tabs.map(tab => {
                const Icon = tab.icon
                return (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                    className={cn("flex items-center space-x-2 px-4 py-4 text-sm font-medium border-b-2 transition-all",
                      activeTab === tab.id ? "border-violet-600 text-violet-700" : "border-transparent text-gray-500 hover:text-gray-800")}>
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>
            <span className="text-sm text-gray-400">
              {activeTab === "users"       && `${filteredUsers.length} records`}
              {activeTab === "courses"     && `${filteredCourses.length} records`}
              {activeTab === "enrollments" && `${filteredEnrollments.length} records`}
            </span>
          </div>

          {/* Loading Skeleton */}
          {loading && (
            <div className="p-6 space-y-3">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="h-14 bg-gray-50 rounded-lg animate-pulse" />
              ))}
            </div>
          )}

          {/* ── Users Table ─────────────────────────────────────────────── */}
          {!loading && activeTab === "users" && (
            <div className="overflow-x-auto">
              {filteredUsers.length === 0 ? (
                <EmptyState message="No users registered yet." />
              ) : (
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Phone</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Joined</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Courses</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredUsers.map((user, i) => {
                      const roleBadge = statusBadge[user.role] || statusBadge["STUDENT"]
                      const RoleIcon = roleBadge.icon
                      const isActive = user.isActive
                      return (
                        <motion.tr key={user.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }}
                          className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              {user.avatar ? (
                                <img src={user.avatar} alt={user.firstName} className="h-9 w-9 rounded-full object-cover shadow-sm" />
                              ) : (
                                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                                  <span className="text-white text-sm font-semibold">{user.firstName[0]}</span>
                                </div>
                              )}
                              <div>
                                <div className="text-sm font-semibold text-gray-900">{user.firstName} {user.lastName}</div>
                                <div className="text-xs text-gray-500 flex items-center space-x-1">
                                  <Mail className="h-3 w-3" />
                                  <span>{user.email}</span>
                                </div>
                                <div className="text-xs text-gray-500 flex items-center space-x-1 mt-1 md:hidden">
                                  <Phone className="h-3 w-3" />
                                  <span>{user.phone || "—"}</span>
                                </div>
                                <div className="text-xs text-gray-500 flex items-center space-x-1 mt-0.5 lg:hidden">
                                  <Calendar className="h-3 w-3" />
                                  <span>{new Date(user.createdAt).toLocaleDateString("en-IN")}</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 hidden md:table-cell">
                            <span className="text-sm text-gray-600 flex items-center space-x-1">
                              <Phone className="h-3 w-3 text-gray-400" />
                              <span>{user.phone || "—"}</span>
                            </span>
                          </td>
                          <td className="px-6 py-4 hidden lg:table-cell">
                            <span className="text-sm text-gray-600 flex items-center space-x-1">
                              <Calendar className="h-3 w-3 text-gray-400" />
                              <span>{new Date(user.createdAt).toLocaleDateString("en-IN")}</span>
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center justify-center h-7 w-7 rounded-lg bg-violet-50 text-violet-700 text-sm font-bold border border-violet-100">
                              {user._count?.enrollments || 0}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={cn("inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-medium", roleBadge.className)}>
                              <RoleIcon className="h-3 w-3" />
                              <span>{roleBadge.label}</span>
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={cn("inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-medium",
                              isActive ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200")}>
                              {isActive ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
                              <span>{isActive ? "Active" : "Inactive"}</span>
                            </span>
                          </td>
                        </motion.tr>
                      )
                    })}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* ── Courses Table ────────────────────────────────────────────── */}
          {!loading && activeTab === "courses" && (
            <div className="overflow-x-auto">
              {filteredCourses.length === 0 ? (
                <EmptyState message="No courses added yet." />
              ) : (
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Course</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Students</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredCourses.map((course, i) => {
                      const badge = statusBadge[course.isPublished ? "published" : "draft"]
                      const BadgeIcon = badge.icon
                      const gradients = ["from-violet-400 to-indigo-500","from-blue-400 to-cyan-500","from-emerald-400 to-teal-500","from-orange-400 to-red-500"]
                      return (
                        <motion.tr key={course.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }}
                          className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <div className={cn("h-10 w-10 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0 shadow-sm", gradients[i % gradients.length])}>
                                <BookOpen className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-900">{course.title}</div>
                                <div className="text-xs text-gray-500 mt-0.5 md:hidden">
                                  {course.category}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 hidden md:table-cell">
                            <span className="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-xs font-medium">{course.category}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4 text-gray-400" />
                              <span className="text-sm font-semibold text-gray-800">{course.enrollmentCount}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div>
                              <span className="text-sm font-bold text-gray-900">₹{course.discountPrice ?? course.price}</span>
                              {course.discountPrice && <span className="text-xs text-gray-400 line-through ml-1">₹{course.price}</span>}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={cn("inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-medium", badge.className)}>
                              <BadgeIcon className="h-3 w-3" />
                              <span>{badge.label}</span>
                            </span>
                          </td>
                        </motion.tr>
                      )
                    })}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* ── Enrollments Table ────────────────────────────────────────── */}
          {!loading && activeTab === "enrollments" && (
            <div className="overflow-x-auto">
              {filteredEnrollments.length === 0 ? (
                <EmptyState message="No enrollments yet." />
              ) : (
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Student</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Course</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Progress</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredEnrollments.map((e, i) => (
                      <motion.tr key={e.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }}
                        className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-semibold text-gray-900">{e.user.firstName} {e.user.lastName}</div>
                            <div className="text-xs text-gray-500 flex items-center space-x-1">
                              <Mail className="h-3 w-3" />
                              <span>{e.user.email}</span>
                            </div>
                            <div className="text-xs font-medium text-violet-600 mt-1.5 lg:hidden">
                              {e.course.title}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5 md:hidden">
                              ₹{e.course.price} • {new Date(e.enrolledAt).toLocaleDateString("en-IN")}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 hidden lg:table-cell">
                          <span className="text-sm text-gray-700 font-medium">{e.course.title}</span>
                        </td>
                        <td className="px-6 py-4 hidden md:table-cell">
                          <span className="text-sm font-bold text-gray-900">₹{e.course.price}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full bg-violet-500 rounded-full" style={{ width: `${e.progress}%` }} />
                            </div>
                            <span className="text-xs text-gray-500">{Math.round(e.progress)}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 hidden md:table-cell">
                          <span className="text-sm text-gray-600">{new Date(e.enrolledAt).toLocaleDateString("en-IN")}</span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* Table Footer */}
          <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-400">Live data from MongoDB Atlas</span>
            <button onClick={fetchData} className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center space-x-1.5">
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="py-16 text-center">
      <AlertCircle className="h-10 w-10 text-gray-300 mx-auto mb-3" />
      <p className="text-gray-400 text-sm">{message}</p>
    </div>
  )
}