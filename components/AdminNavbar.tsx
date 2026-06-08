"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { 
  Bell, 
  Search, 
  Menu, 
  X, 
  User, 
  Settings, 
  LogOut,
  BarChart,
  Shield,
  Globe,
  Moon,
  Sun
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function AdminNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [notifications] = useState([
    { id: 1, title: "New course enrollment", time: "5 min ago", read: false },
    { id: 2, title: "Payment received", time: "1 hour ago", read: false },
    { id: 3, title: "User feedback submitted", time: "2 hours ago", read: true },
    { id: 4, title: "System update available", time: "1 day ago", read: true },
  ])

  const unreadNotifications = notifications.filter(n => !n.read).length

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Search */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-white" />
              ) : (
                <Menu className="h-5 w-5 text-white" />
              )}
            </button>

            {/* Logo */}
            <Link href="/admin" className="ml-2 lg:ml-0">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="text-lg font-bold text-white">Inspire Leap</span>
                  <span className="text-xs text-primary ml-1">Admin</span>
                </div>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:block ml-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users, courses, transactions..."
                  className="pl-10 pr-4 py-2 w-64 lg:w-80 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-400 hover:text-white" />
              ) : (
                <Moon className="h-5 w-5 text-gray-400 hover:text-white" />
              )}
            </button>

            {/* Language Selector */}
            <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
              <Globe className="h-5 w-5 text-gray-400 hover:text-white" />
            </button>

            {/* Notifications */}
            <div className="relative">
              <button className="p-2 rounded-lg hover:bg-white/10 transition-colors relative">
                <Bell className="h-5 w-5 text-gray-400 hover:text-white" />
                {unreadNotifications > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                    {unreadNotifications}
                  </span>
                )}
              </button>
            </div>

            {/* Analytics Quick View */}
            <button className="hidden md:flex items-center space-x-2 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-colors">
              <BarChart className="h-5 w-5 text-primary" />
              <span className="text-sm text-white">Analytics</span>
            </button>

            {/* Profile Menu */}
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center space-x-2 p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-sm font-medium text-white">Admin User</div>
                  <div className="text-xs text-gray-400">Super Admin</div>
                </div>
              </button>

              {/* Profile Dropdown */}
              <AnimatePresence>
                {isProfileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 glass rounded-xl border border-white/10 shadow-lg z-50"
                  >
                    <div className="py-2">
                      <div className="px-4 py-2 border-b border-white/10">
                        <div className="text-sm font-medium text-white">Admin User</div>
                        <div className="text-xs text-gray-400">admin@inspireleap.com</div>
                      </div>
                      
                      <Link
                        href="/admin/profile"
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:bg-white/10 transition-colors"
                      >
                        <User className="h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                      
                      <Link
                        href="/admin/settings"
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-300 hover:bg-white/10 transition-colors"
                      >
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                      
                      <div className="border-t border-white/10 mt-2 pt-2">
                        <button className="flex items-center space-x-2 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 w-full transition-colors">
                          <LogOut className="h-4 w-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users, courses, transactions..."
              className="pl-10 pr-4 py-2 w-full bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
            />
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-4 py-3 space-y-1">
              <Link
                href="/admin/dashboard"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <BarChart className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              
              <Link
                href="/admin/users"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <User className="h-5 w-5" />
                <span>User Management</span>
              </Link>
              
              <Link
                href="/admin/courses"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <Settings className="h-5 w-5" />
                <span>Course Management</span>
              </Link>
              
              <Link
                href="/admin/transactions"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <BarChart className="h-5 w-5" />
                <span>Transactions</span>
              </Link>
              
              <Link
                href="/admin/settings"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}