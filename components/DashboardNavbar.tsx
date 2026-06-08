"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search, 
  Bell, 
  User, 
  ChevronDown,
  Menu,
  X,
  Home,
  BookOpen,
  Award,
  Briefcase,
  Settings,
  LogOut,
  MessageSquare,
  Calendar
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function DashboardNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const notifications = [
    { id: 1, title: "New assignment", time: "10 min ago", read: false },
    { id: 2, title: "Mentor session", time: "1 hour ago", read: true },
    { id: 3, title: "Course update", time: "2 hours ago", read: true },
  ]

  const unreadCount = notifications.filter(n => !n.read).length

  const profileMenuItems = [
    { icon: User, label: "My Profile", href: "/dashboard/profile" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
    { icon: MessageSquare, label: "Messages", href: "/dashboard/messages" },
    { icon: Calendar, label: "Calendar", href: "/dashboard/calendar" },
    { icon: LogOut, label: "Logout", href: "/logout" },
  ]

  const mobileMenuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: BookOpen, label: "My Courses", href: "/dashboard/courses" },
    { icon: Award, label: "Certificates", href: "/dashboard/certificates" },
    { icon: Briefcase, label: "Placements", href: "/dashboard/placements" },
    { icon: Calendar, label: "Schedule", href: "/dashboard/schedule" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left Section - Logo & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 glass rounded-lg text-gray-400 hover:text-white"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            <Link href="/" className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">IL</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg">Inspire Leap</div>
                <div className="text-xs text-gray-500">Wipro Partner Program</div>
              </div>
            </Link>
          </div>

          {/* Center Section - Search */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, assignments, or resources..."
                className="w-full pl-12 pr-4 py-3 glass rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Right Section - Notifications & Profile */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <button className="md:hidden p-2 glass rounded-lg text-gray-400 hover:text-white">
              <Search className="h-5 w-5" />
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(false)}
                className="relative p-2 glass rounded-lg text-gray-400 hover:text-white"
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs flex items-center justify-center">
                    {unreadCount}
                  </div>
                )}
              </button>

              {/* Notifications Dropdown */}
              <AnimatePresence>
                {false && ( // Temporarily disabled
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-80 glass rounded-xl shadow-xl border border-white/10 overflow-hidden"
                  >
                    <div className="p-4 border-b border-white/10">
                      <h3 className="font-semibold text-white">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={cn(
                            "p-4 border-b border-white/5 hover:bg-white/5 transition-colors",
                            !notification.read && "bg-primary/5"
                          )}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                              <Bell className="h-4 w-4 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-white">
                                {notification.title}
                              </div>
                              <div className="text-sm text-gray-400 mt-1">
                                {notification.time}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 border-t border-white/10">
                      <button className="w-full text-sm text-primary hover:text-secondary">
                        Mark all as read
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center space-x-3 p-2 glass rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div className="hidden md:block text-left">
                  <div className="font-medium text-white">Priya Sharma</div>
                  <div className="text-xs text-gray-500">Student</div>
                </div>
                <ChevronDown className={cn(
                  "h-4 w-4 text-gray-400 transition-transform",
                  isProfileMenuOpen && "rotate-180"
                )} />
              </button>

              {/* Profile Dropdown */}
              <AnimatePresence>
                {isProfileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-64 glass rounded-xl shadow-xl border border-white/10 overflow-hidden"
                  >
                    <div className="p-4 border-b border-white/10">
                      <div className="font-semibold text-white">Priya Sharma</div>
                      <div className="text-sm text-gray-500">priya@inspireleap.com</div>
                    </div>
                    <div className="py-2">
                      {profileMenuItems.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsProfileMenuOpen(false)}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            <Icon className="h-5 w-5" />
                            <span>{item.label}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 border-t border-white/10">
                <div className="space-y-2">
                  {mobileMenuItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 glass rounded-lg text-gray-400 hover:text-white transition-colors"
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    )
                  })}
                </div>

                {/* Mobile Search */}
                <div className="mt-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-12 pr-4 py-3 glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}