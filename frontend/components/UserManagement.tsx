"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Users, 
  UserCheck, 
  UserX,
  Clock,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Filter,
  Search,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Shield,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const users = [
  {
    id: 1,
    name: "Priya Sharma",
    email: "priya@example.com",
    phone: "+91 9876543210",
    location: "Mumbai, India",
    role: "Student",
    status: "active",
    joined: "2024-01-15",
    lastActive: "2 hours ago",
    courses: 3,
    completionRate: 78,
    verified: true,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    email: "rajesh@example.com",
    phone: "+91 9876543211",
    location: "Delhi, India",
    role: "Professional",
    status: "active",
    joined: "2024-02-20",
    lastActive: "1 day ago",
    courses: 2,
    completionRate: 65,
    verified: true,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Anjali Patel",
    email: "anjali@example.com",
    phone: "+91 9876543212",
    location: "Bangalore, India",
    role: "Student",
    status: "pending",
    joined: "2024-03-10",
    lastActive: "3 days ago",
    courses: 1,
    completionRate: 42,
    verified: false,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    name: "Vikram Singh",
    email: "vikram@example.com",
    phone: "+91 9876543213",
    location: "Chennai, India",
    role: "Corporate",
    status: "active",
    joined: "2024-04-05",
    lastActive: "5 hours ago",
    courses: 4,
    completionRate: 88,
    verified: true,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    name: "Sneha Reddy",
    email: "sneha@example.com",
    phone: "+91 9876543214",
    location: "Hyderabad, India",
    role: "Student",
    status: "suspended",
    joined: "2024-05-12",
    lastActive: "1 week ago",
    courses: 2,
    completionRate: 30,
    verified: true,
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 6,
    name: "Amit Verma",
    email: "amit@example.com",
    phone: "+91 9876543215",
    location: "Pune, India",
    role: "Professional",
    status: "active",
    joined: "2024-06-18",
    lastActive: "Just now",
    courses: 3,
    completionRate: 75,
    verified: true,
    color: "from-teal-500 to-green-500",
  },
]

const filters = [
  { id: "all", label: "All Users", icon: Users },
  { id: "active", label: "Active", icon: UserCheck },
  { id: "pending", label: "Pending", icon: Clock },
  { id: "suspended", label: "Suspended", icon: UserX },
]

const roles = [
  { id: "all", label: "All Roles" },
  { id: "student", label: "Student" },
  { id: "professional", label: "Professional" },
  { id: "corporate", label: "Corporate" },
  { id: "admin", label: "Admin" },
]

const statusConfig = {
  active: {
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    label: "Active",
  },
  pending: {
    icon: Clock,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    label: "Pending",
  },
  suspended: {
    icon: XCircle,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    label: "Suspended",
  },
  inactive: {
    icon: AlertCircle,
    color: "text-gray-500",
    bgColor: "bg-gray-500/10",
    label: "Inactive",
  },
}

const roleConfig = {
  student: {
    icon: GraduationCap,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  professional: {
    icon: Briefcase,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  corporate: {
    icon: Users,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  admin: {
    icon: Shield,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
}

export default function UserManagement() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [activeRole, setActiveRole] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredUsers = users.filter(user => {
    if (activeFilter !== "all" && user.status !== activeFilter) {
      return false
    }
    
    if (activeRole !== "all" && user.role.toLowerCase() !== activeRole) {
      return false
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.phone.toLowerCase().includes(query) ||
        user.location.toLowerCase().includes(query)
      )
    }
    
    return true
  })

  const activeUsers = users.filter(u => u.status === "active").length
  const pendingUsers = users.filter(u => u.status === "pending").length
  const totalUsers = users.length
  const avgCompletionRate = Math.round(users.reduce((sum, u) => sum + u.completionRate, 0) / users.length)

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">User Management</h3>
          <p className="text-gray-400 text-sm">Manage platform users, roles, and permissions</p>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-48 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
            />
          </div>

          {/* Add User Button */}
          <Link
            href="/admin/users/new"
            className="px-4 py-2 bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity flex items-center space-x-2"
          >
            <Users className="h-4 w-4" />
            <span>Add User</span>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 rounded-xl border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Total Users</div>
              <div className="text-2xl font-bold text-white">{totalUsers}</div>
            </div>
            <div className="p-2 rounded-lg bg-blue-500/10">
              <Users className="h-5 w-5 text-blue-500" />
            </div>
          </div>
        </div>
        
        <div className="p-4 rounded-xl border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Active Users</div>
              <div className="text-2xl font-bold text-white">{activeUsers}</div>
            </div>
            <div className="p-2 rounded-lg bg-green-500/10">
              <UserCheck className="h-5 w-5 text-green-500" />
            </div>
          </div>
        </div>
        
        <div className="p-4 rounded-xl border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Pending</div>
              <div className="text-2xl font-bold text-white">{pendingUsers}</div>
            </div>
            <div className="p-2 rounded-lg bg-amber-500/10">
              <Clock className="h-5 w-5 text-amber-500" />
            </div>
          </div>
        </div>
        
        <div className="p-4 rounded-xl border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Avg. Completion</div>
              <div className="text-2xl font-bold text-white">{avgCompletionRate}%</div>
            </div>
            <div className="p-2 rounded-lg bg-purple-500/10">
              <GraduationCap className="h-5 w-5 text-purple-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        {/* Status Filters */}
        <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
          {filters.map((filter) => {
            const Icon = filter.icon
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "flex items-center space-x-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                  activeFilter === filter.id
                    ? "bg-primary text-white"
                    : "glass text-gray-400 hover:text-white"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{filter.label}</span>
              </button>
            )
          })}
        </div>

        {/* Role Filters */}
        <div className="flex flex-wrap gap-2">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setActiveRole(role.id)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                activeRole === role.id
                  ? "bg-primary text-white"
                  : "glass text-gray-400 hover:text-white"
              )}
            >
              {role.label}
            </button>
          ))}
        </div>
      </div>

      {/* Users List */}
      <div className="space-y-4">
        {filteredUsers.map((user, index) => {
          const StatusIcon = statusConfig[user.status as keyof typeof statusConfig].icon
          const statusColor = statusConfig[user.status as keyof typeof statusConfig].color
          const statusBgColor = statusConfig[user.status as keyof typeof statusConfig].bgColor
          const statusLabel = statusConfig[user.status as keyof typeof statusConfig].label

          const RoleIcon = roleConfig[user.role.toLowerCase() as keyof typeof roleConfig].icon
          const roleColor = roleConfig[user.role.toLowerCase() as keyof typeof roleConfig].color
          const roleBgColor = roleConfig[user.role.toLowerCase() as keyof typeof roleConfig].bgColor

          return (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-xl border border-white/10 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between">
                {/* User Info */}
                <div className="flex items-start space-x-4">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${user.color} flex items-center justify-center`}>
                    {user.verified ? (
                      <Shield className="h-6 w-6 text-white" />
                    ) : (
                      <UserX className="h-6 w-6 text-white" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-white">{user.name}</h4>
                      
                      {/* Status Badge */}
                      <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium flex items-center space-x-1", statusBgColor, statusColor)}>
                        <StatusIcon className="h-3 w-3" />
                        <span>{statusLabel}</span>
                      </span>
                      
                      {/* Role Badge */}
                      <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium flex items-center space-x-1", roleBgColor, roleColor)}>
                        <RoleIcon className="h-3 w-3" />
                        <span>{user.role}</span>
                      </span>
                      
                      {/* Verified Badge */}
                      {user.verified && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 flex items-center space-x-1">
                          <CheckCircle className="h-3 w-3" />
                          <span>Verified</span>
                        </span>
                      )}
                    </div>
                    
                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Mail className="h-3 w-3" />
                        <span>{user.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Phone className="h-3 w-3" />
                        <span>{user.phone}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{user.location}</span>
                      </div>
                    </div>
                    
                    {/* User Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <div className="text-xs text-gray-400">Joined</div>
                        <div className="text-sm font-medium text-white">{user.joined}</div>
                      </div>
                      
                      <div>
                        <div className="text-xs text-gray-400">Last Active</div>
                        <div className="text-sm font-medium text-white">{user.lastActive}</div>
                      </div>
                      
                      <div>
                        <div className="text-xs text-gray-400">Courses</div>
                        <div className="text-sm font-bold text-white">{user.courses}</div>
                      </div>
                      
                      <div>
                        <div className="text-xs text-gray-400">Completion</div>
                        <div className="text-sm font-bold text-white">{user.completionRate}%</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2">
                  <Link
                    href={`/admin/users/${user.id}`}
                    className="p-2 glass rounded-lg hover:bg-white/10 transition-colors group"
                    title="View User"
                  >
                    <Eye className="h-4 w-4 text-gray-400 group-hover:text-white" />
                  </Link>
                  
                  <Link
                    href={`/admin/users/edit/${user.id}`}
                    className="p-2 glass rounded-lg hover:bg-white/10 transition-colors group"
                    title="Edit User"
                  >
                    <Edit className="h-4 w-4 text-gray-400 group-hover:text-white" />
                  </Link>
                  
                  {user.status === "pending" && (
                    <button
                      className="p-2 glass rounded-lg hover:bg-green-500/10 transition-colors group"
                      title="Approve User"
                    >
                      <CheckCircle className="h-4 w-4 text-gray-400 group-hover:text-green-400" />
                    </button>
                  )}
                  
                  {user.status === "active" && (
                    <button
                      className="p-2 glass rounded-lg hover:bg-red-500/10 transition-colors group"
                      title="Suspend User"
                    >
                      <UserX className="h-4 w-4 text-gray-400 group-hover:text-red-400" />
                    </button>
                  )}
                  
                  <button className="p-2 glass rounded-lg hover:bg-white/10 transition-colors">
                    <MoreVertical className="h-4 w-4 text-gray-400 hover:text-white" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1.5 glass rounded-lg text-white text-xs font-medium hover:bg-white/10 transition-colors">
                    Send Message
                  </button>
                  <button className="px-3 py-1.5 glass rounded-lg text-white text-xs font-medium hover:bg-white/10 transition-colors">
                    View Activity
                  </button>
                </div>
                
                <div className="flex items-center space-x-2">
                  {user.status === "pending" && (
                    <>
                      <button className="px-3 py-1.5 bg-gradient-to-r from-green-500 to-green-500/80 rounded-lg text-white text-xs font-medium hover:opacity-90 transition-opacity">
                        Approve
                      </button>
                      <button className="px-3 py-1.5 glass rounded-lg text-white text-xs font-medium hover:bg-red-500/10 transition-colors">
                        Reject
                      </button>
                    </>
                  )}
                  
                  {user.status === "suspended" && (
                    <button className="px-3 py-1.5 bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white text-xs font-medium hover:opacity-90 transition-opacity">
                      Reactivate
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Summary */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-400">
              Showing {filteredUsers.length} of {users.length} users
            </div>
            <div className="text-xs text-gray-500">
              Last updated: Today, 12:30 PM
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 glass rounded-lg text-white text-sm font-medium hover:bg-white/10 transition-colors">
              View All Users
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity">
              Export Data
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}