"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  User, 
  BookOpen, 
  Briefcase,
  Award,
  Users,
  Home,
  LogIn
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Courses",
    href: "/courses",
    icon: BookOpen,
    megaMenu: [
      {
        category: "Technology",
        items: [
          { name: "Full Stack Development", href: "/courses/full-stack" },
          { name: "Data Science & AI", href: "/courses/data-science" },
          { name: "Cloud Computing", href: "/courses/cloud" },
          { name: "Cybersecurity", href: "/courses/cybersecurity" },
          { name: "DevOps", href: "/courses/devops" },
        ],
      },
      {
        category: "Business",
        items: [
          { name: "Digital Marketing", href: "/courses/digital-marketing" },
          { name: "Business Analytics", href: "/courses/business-analytics" },
          { name: "Project Management", href: "/courses/project-management" },
          { name: "Finance & Accounting", href: "/courses/finance" },
        ],
      },
      {
        category: "Creative",
        items: [
          { name: "UI/UX Design", href: "/courses/ui-ux" },
          { name: "Graphic Design", href: "/courses/graphic-design" },
          { name: "Video Editing", href: "/courses/video-editing" },
          { name: "3D Animation", href: "/courses/3d-animation" },
        ],
      },
    ],
  },
  {
    label: "Internships",
    href: "/internships",
    icon: Briefcase,
    dropdown: [
      { name: "Tech Internships", href: "/internships/tech" },
      { name: "Business Internships", href: "/internships/business" },
      { name: "Design Internships", href: "/internships/design" },
      { name: "Research Internships", href: "/internships/research" },
    ],
  },
  {
    label: "Placements",
    href: "/placements",
    icon: Award,
    dropdown: [
      { name: "Placement Process", href: "/placements/process" },
      { name: "Success Stories", href: "/placements/stories" },
      { name: "Hiring Partners", href: "/placements/partners" },
      { name: "Career Guidance", href: "/placements/guidance" },
    ],
  },
  {
    label: "Mentors",
    href: "/mentors",
    icon: Users,
  },
  {
    label: "Certifications",
    href: "/certifications",
    icon: Award,
  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery)
      // Implement search functionality
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-dark py-3 border-b border-white/5"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 animate-pulse-glow" />
                <div className="relative bg-gradient-to-br from-primary to-secondary p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight gradient-text">
                  Inspire Leap
                </span>
                <span className="text-xs text-gray-400">Wipro Partner Program</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveMegaMenu(item.label)}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  <Link href={item.href} passHref legacyBehavior>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {item.icon && <item.icon className="h-4 w-4" />}
                      <span>{item.label}</span>
                      {(item.megaMenu || item.dropdown) && (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </motion.a>
                  </Link>

                  {/* Mega Menu */}
                  {item.megaMenu && activeMegaMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 top-full mt-2 w-[800px] glass-dark rounded-xl border border-white/10 p-6 shadow-2xl"
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {item.megaMenu.map((category) => (
                          <div key={category.category}>
                            <h3 className="text-sm font-semibold text-white mb-3">
                              {category.category}
                            </h3>
                            <ul className="space-y-2">
                              {category.items.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    href={subItem.href}
                                    className="text-sm text-gray-400 hover:text-white transition-colors block py-1"
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-semibold text-white">
                              Need help choosing?
                            </h4>
                            <p className="text-sm text-gray-400 mt-1">
                              Talk to our career advisors
                            </p>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-sm font-medium text-white"
                          >
                            Book Consultation
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && !item.megaMenu && activeMegaMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 top-full mt-2 w-48 glass-dark rounded-lg border border-white/10 p-2 shadow-xl"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses..."
                  className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 w-48"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              </form>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-2">
                <Link href="/login" passHref legacyBehavior>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </motion.a>
                </Link>
                <Link href="/register" passHref legacyBehavior>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg text-sm font-medium text-white shadow-lg shadow-primary/20"
                  >
                    Get Started
                  </motion.a>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <div className="absolute right-0 top-0 bottom-0 w-80 glass-dark border-l border-white/10">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold gradient-text">
                        Inspire Leap
                      </span>
                      <span className="text-xs text-gray-400">
                        Wipro Partner Program
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search courses..."
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/50"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  </div>
                </form>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon && <item.icon className="h-4 w-4" />}
                          <span>{item.label}</span>
                        </div>
                        {(item.megaMenu || item.dropdown) && (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Link>
                    </div>
                  ))}
                </nav>

                {/* Mobile Auth Buttons */}
                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                  <Link href="/login" passHref legacyBehavior>
                    <motion.a
                      whileTap={{ scale: 0.95 }}
                      className="block w-full px-4 py-3 text-center rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors border border-white/10"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </motion.a>
                  </Link>
                  <Link href="/register" passHref legacyBehavior>
                    <motion.a
                      whileTap={{ scale: 0.95 }}
                      className="block w-full px-4 py-3 text-center bg-gradient-to-r from-primary to-secondary rounded-lg text-sm font-medium text-white shadow-lg shadow-primary/20"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get Started Free
                    </motion.a>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}