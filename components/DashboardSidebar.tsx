"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Home,
  BookOpen,
  Award,
  Briefcase,
  Calendar,
  MessageSquare,
  Users,
  BarChart,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  ChevronLeft,
  Zap,
  Target,
  TrendingUp
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function DashboardSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState("dashboard")
  const pathname = usePathname()

  const mainMenuItems = [
    { id: "dashboard", icon: Home, label: "Dashboard", href: "/dashboard", badge: null },
    { id: "courses", icon: BookOpen, label: "My Courses", href: "/dashboard/courses", badge: 3 },
    { id: "certificates", icon: Award, label: "Certificates", href: "/dashboard/certificates", badge: 2 },
    { id: "placements", icon: Briefcase, label: "Placements", href: "/dashboard/placements", badge: "New" },
    { id: "schedule", icon: Calendar, label: "Schedule", href: "/dashboard/schedule", badge: 5 },
    { id: "messages", icon: MessageSquare, label: "Messages", href: "/dashboard/messages", badge: 12 },
    { id: "community", icon: Users, label: "Community", href: "/dashboard/community", badge: null },
  ]

  const analyticsMenuItems = [
    { id: "progress", icon: TrendingUp, label: "Learning Progress", href: "/dashboard/progress" },
    { id: "performance", icon: BarChart, label: "Performance", href: "/dashboard/performance" },
    { id: "goals", icon: Target, label: "Goals", href: "/dashboard/goals" },
  ]

  const supportMenuItems = [
    { id: "settings", icon: Settings, label: "Settings", href: "/dashboard/settings" },
    { id: "help", icon: HelpCircle, label: "Help & Support", href: "/dashboard/help" },
    { id: "logout", icon: LogOut, label: "Logout", href: "/logout" },
  ]

  const quickActions = [
    { icon: Zap, label: "Resume Builder", color: "from-yellow-500 to-orange-500" },
    { icon: Target, label: "Mock Interviews", color: "from-blue-500 to-cyan-500" },
    { icon: TrendingUp, label: "Skill Assessment", color: "from-green-500 to-emerald-500" },
  ]

  const isActive = (href: string) => {
    return pathname === href || pathname?.startsWith(`${href}/`)
  }

  return (
    <motion.aside
      initial={{ width: 280 }}
      animate={{ width: isCollapsed ? 80 : 280 }}
      transition={{ duration: 0.3 }}
      className="h-screen sticky top-0 pt-24 border-r border-white/10 bg-gray-950/50 backdrop-blur-xl"
    >
      <div className="h-full overflow-y-auto">
        {/* Collapse Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-24 h-6 w-6 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white z-10"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>

        <div className="px-4 py-6">
          {/* User Profile Summary */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">PS</span>
              </div>
              {!isCollapsed && (
                <div>
                  <div className="font-bold text-white">Priya Sharma</div>
                  <div className="text-xs text-gray-500">Student</div>
                </div>
              )}
            </div>
            
            {!isCollapsed && (
              <div className="glass rounded-xl p-4">
                <div className="text-sm font-medium text-white mb-2">
                  Learning Streak
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">14 days</div>
                  <div className="text-xs text-gray-500">Keep going! 🔥</div>
                </div>
              </div>
            )}
          </div>

          {/* Main Menu */}
          <div className="space-y-1 mb-8">
            <h3 className={cn(
              "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3",
              isCollapsed && "text-center"
            )}>
              {isCollapsed ? "···" : "Navigation"}
            </h3>
            
            <div className="space-y-1">
              {mainMenuItems.map((item) => {
                const Icon = item.icon
                const active = isActive(item.href)
                
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setActiveItem(item.id)}
                    className={cn(
                      "flex items-center justify-between px-3 py-3 rounded-xl transition-all",
                      active
                        ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-white border border-primary/30"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={cn(
                        "h-8 w-8 rounded-lg flex items-center justify-center",
                        active
                          ? "bg-gradient-to-r from-primary to-secondary"
                          : "glass"
                      )}>
                        <Icon className={cn(
                          "h-4 w-4",
                          active ? "text-white" : "text-gray-400"
                        )} />
                      </div>
                      {!isCollapsed && (
                        <span className="text-sm font-medium">{item.label}</span>
                      )}
                    </div>
                    
                    {!isCollapsed && item.badge && (
                      <div className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium",
                        typeof item.badge === "number"
                          ? "bg-primary/20 text-primary"
                          : "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                      )}>
                        {item.badge}
                      </div>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Analytics Menu */}
          {!isCollapsed && (
            <div className="space-y-1 mb-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Analytics
              </h3>
              
              <div className="space-y-1">
                {analyticsMenuItems.map((item) => {
                  const Icon = item.icon
                  const active = isActive(item.href)
                  
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={cn(
                        "flex items-center space-x-3 px-3 py-3 rounded-xl transition-all",
                        active
                          ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-white border border-primary/30"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <div className={cn(
                        "h-8 w-8 rounded-lg flex items-center justify-center",
                        active
                          ? "bg-gradient-to-r from-primary to-secondary"
                          : "glass"
                      )}>
                        <Icon className={cn(
                          "h-4 w-4",
                          active ? "text-white" : "text-gray-400"
                        )} />
                      </div>
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          {!isCollapsed && (
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Quick Actions
              </h3>
              
              <div className="space-y-2">
                {quickActions.map((action, index) => {
                  const Icon = action.icon
                  
                  return (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={cn(
                        "w-full flex items-center space-x-3 px-3 py-3 rounded-xl transition-all text-left",
                        "bg-gradient-to-r", action.color,
                        "text-white hover:opacity-90"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="text-sm font-medium">{action.label}</span>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Support Menu */}
          <div className="space-y-1">
            <h3 className={cn(
              "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3",
              isCollapsed && "text-center"
            )}>
              {isCollapsed ? "···" : "Support"}
            </h3>
            
            <div className="space-y-1">
              {supportMenuItems.map((item) => {
                const Icon = item.icon
                const active = isActive(item.href)
                
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-3 rounded-xl transition-all",
                      active
                        ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-white border border-primary/30"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <div className={cn(
                      "h-8 w-8 rounded-lg flex items-center justify-center",
                      active
                        ? "bg-gradient-to-r from-primary to-secondary"
                        : "glass"
                    )}>
                      <Icon className={cn(
                        "h-4 w-4",
                        active ? "text-white" : "text-gray-400"
                      )} />
                    </div>
                    {!isCollapsed && (
                      <span className="text-sm font-medium">{item.label}</span>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Progress Summary */}
          {!isCollapsed && (
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="text-sm font-medium text-white mb-3">
                Overall Progress
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Courses Completed</span>
                  <span className="text-white font-medium">3/8</span>
                </div>
                <div className="h-2 glass rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "37.5%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                  />
                </div>
                <div className="text-xs text-gray-500 text-center">
                  37% complete
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  )
}