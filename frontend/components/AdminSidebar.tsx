"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  BarChart,
  Users,
  BookOpen,
  CreditCard,
  FileText,
  Settings,
  Shield,
  Globe,
  Bell,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Home,
  TrendingUp,
  DollarSign,
  Target,
  PieChart,
  Mail,
  Calendar,
  Database,
  Server
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: BarChart,
    current: true,
  },
  {
    name: "User Management",
    href: "/admin/users",
    icon: Users,
    subItems: [
      { name: "All Users", href: "/admin/users" },
      { name: "Active Users", href: "/admin/users/active" },
      { name: "Pending Verification", href: "/admin/users/pending" },
      { name: "Banned Users", href: "/admin/users/banned" },
    ],
  },
  {
    name: "Course Management",
    href: "/admin/courses",
    icon: BookOpen,
    subItems: [
      { name: "All Courses", href: "/admin/courses" },
      { name: "Add New Course", href: "/admin/courses/new" },
      { name: "Categories", href: "/admin/courses/categories" },
      { name: "Reviews", href: "/admin/courses/reviews" },
    ],
  },
  {
    name: "Revenue & Payments",
    href: "/admin/revenue",
    icon: DollarSign,
    subItems: [
      { name: "Transactions", href: "/admin/transactions" },
      { name: "Revenue Analytics", href: "/admin/revenue/analytics" },
      { name: "Refunds", href: "/admin/refunds" },
      { name: "Payment Methods", href: "/admin/payments/methods" },
    ],
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: TrendingUp,
    subItems: [
      { name: "Platform Analytics", href: "/admin/analytics/platform" },
      { name: "Course Analytics", href: "/admin/analytics/courses" },
      { name: "User Analytics", href: "/admin/analytics/users" },
      { name: "Marketing Analytics", href: "/admin/analytics/marketing" },
    ],
  },
  {
    name: "Content Management",
    href: "/admin/content",
    icon: FileText,
    subItems: [
      { name: "Blog Posts", href: "/admin/content/blog" },
      { name: "FAQs", href: "/admin/content/faq" },
      { name: "Announcements", href: "/admin/content/announcements" },
      { name: "Resources", href: "/admin/content/resources" },
    ],
  },
  {
    name: "System",
    href: "/admin/system",
    icon: Server,
    subItems: [
      { name: "Server Status", href: "/admin/system/status" },
      { name: "Logs", href: "/admin/system/logs" },
      { name: "Backup", href: "/admin/system/backup" },
      { name: "API Management", href: "/admin/system/api" },
    ],
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
    subItems: [
      { name: "General", href: "/admin/settings/general" },
      { name: "Security", href: "/admin/settings/security" },
      { name: "Notifications", href: "/admin/settings/notifications" },
      { name: "Integrations", href: "/admin/settings/integrations" },
    ],
  },
]

const quickActions = [
  { name: "Add User", icon: Users, action: "#" },
  { name: "Create Course", icon: BookOpen, action: "#" },
  { name: "View Reports", icon: FileText, action: "#" },
  { name: "System Health", icon: Server, action: "#" },
]

export default function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const pathname = usePathname()

  const toggleItem = (name: string) => {
    setExpandedItems(prev =>
      prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
    )
  }

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
      {/* Collapse Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-24 p-1.5 glass rounded-full border border-white/10 hover:bg-white/10 transition-colors"
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4 text-white" />
        ) : (
          <ChevronLeft className="h-4 w-4 text-white" />
        )}
      </button>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const hasSubItems = item.subItems && item.subItems.length > 0
            const isItemActive = isActive(item.href)
            const isExpanded = expandedItems.includes(item.name)

            return (
              <li key={item.name}>
                {hasSubItems ? (
                  <>
                    <button
                      onClick={() => toggleItem(item.name)}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                        isItemActive
                          ? "bg-primary/20 text-primary"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-5 w-5" />
                        {!isCollapsed && <span>{item.name}</span>}
                      </div>
                      {!isCollapsed && (
                        <ChevronRight
                          className={cn(
                            "h-4 w-4 transition-transform",
                            isExpanded && "rotate-90"
                          )}
                        />
                      )}
                    </button>

                    {/* Sub Items */}
                    {!isCollapsed && isExpanded && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-8 mt-1 space-y-1"
                      >
                        {item.subItems?.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className={cn(
                                "block px-3 py-2 rounded-lg text-sm transition-colors",
                                isActive(subItem.href)
                                  ? "bg-primary/10 text-primary"
                                  : "text-gray-400 hover:text-white hover:bg-white/5"
                              )}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isItemActive
                        ? "bg-primary/20 text-primary"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {!isCollapsed && <span className="ml-3">{item.name}</span>}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>

        {/* Quick Actions - Only show when not collapsed */}
        {!isCollapsed && (
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action) => (
                <button
                  key={action.name}
                  className="p-2 glass rounded-lg text-xs text-gray-300 hover:text-white hover:bg-white/10 transition-colors flex flex-col items-center justify-center"
                >
                  <action.icon className="h-4 w-4 mb-1" />
                  <span className="text-center">{action.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* System Status */}
        {!isCollapsed && (
          <div className="mt-8 p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-green-400">
                  System Online
                </span>
              </div>
              <span className="text-xs text-gray-400">99.9% uptime</span>
            </div>
          </div>
        )}
      </nav>

      {/* Admin Badge - Always visible */}
      <div className="absolute bottom-4 left-0 right-0 px-4">
        <div className="p-3 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 flex items-center space-x-3">
          <div className="p-1.5 rounded-md bg-primary/30">
            <Shield className="h-4 w-4 text-primary" />
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <div className="text-xs font-medium text-white">Super Admin</div>
              <div className="text-xs text-gray-400">Full Access</div>
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  )
}