"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  CreditCard, 
  CheckCircle, 
  XCircle,
  Clock,
  Download,
  Filter,
  Search,
  MoreVertical,
  User,
  BookOpen,
  TrendingUp,
  AlertCircle
} from "lucide-react"
import { cn, formatCurrency } from "@/lib/utils"

const transactions = [
  {
    id: 1,
    user: "Priya Sharma",
    email: "priya@example.com",
    course: "Full Stack Web Development",
    amount: 14999,
    status: "completed",
    date: "2024-12-05",
    time: "10:30 AM",
    paymentMethod: "Credit Card",
    transactionId: "TXN-20241205-001",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    user: "Rajesh Kumar",
    email: "rajesh@example.com",
    course: "Data Science Fundamentals",
    amount: 12999,
    status: "pending",
    date: "2024-12-05",
    time: "09:45 AM",
    paymentMethod: "UPI",
    transactionId: "TXN-20241205-002",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: 3,
    user: "Anjali Patel",
    email: "anjali@example.com",
    course: "UI/UX Design Mastery",
    amount: 16999,
    status: "completed",
    date: "2024-12-04",
    time: "03:15 PM",
    paymentMethod: "Net Banking",
    transactionId: "TXN-20241204-001",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    user: "Vikram Singh",
    email: "vikram@example.com",
    course: "Cloud Computing with AWS",
    amount: 18999,
    status: "failed",
    date: "2024-12-04",
    time: "11:20 AM",
    paymentMethod: "Credit Card",
    transactionId: "TXN-20241204-002",
    color: "from-red-500 to-rose-500",
  },
  {
    id: 5,
    user: "Sneha Reddy",
    email: "sneha@example.com",
    course: "DevOps Engineering",
    amount: 15999,
    status: "completed",
    date: "2024-12-03",
    time: "02:45 PM",
    paymentMethod: "Debit Card",
    transactionId: "TXN-20241203-001",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 6,
    user: "Amit Verma",
    email: "amit@example.com",
    course: "Placement Preparation Program",
    amount: 9999,
    status: "completed",
    date: "2024-12-03",
    time: "10:10 AM",
    paymentMethod: "Wallet",
    transactionId: "TXN-20241203-002",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 7,
    user: "Neha Gupta",
    email: "neha@example.com",
    course: "Full Stack Web Development",
    amount: 14999,
    status: "refunded",
    date: "2024-12-02",
    time: "04:30 PM",
    paymentMethod: "Credit Card",
    transactionId: "TXN-20241202-001",
    color: "from-gray-500 to-gray-700",
  },
  {
    id: 8,
    user: "Rohan Mehta",
    email: "rohan@example.com",
    course: "Data Science Fundamentals",
    amount: 12999,
    status: "completed",
    date: "2024-12-02",
    time: "01:15 PM",
    paymentMethod: "UPI",
    transactionId: "TXN-20241202-002",
    color: "from-blue-500 to-cyan-500",
  },
]

const statusConfig = {
  completed: {
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    label: "Completed",
  },
  pending: {
    icon: Clock,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    label: "Pending",
  },
  failed: {
    icon: XCircle,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    label: "Failed",
  },
  refunded: {
    icon: AlertCircle,
    color: "text-gray-500",
    bgColor: "bg-gray-500/10",
    label: "Refunded",
  },
}

const filters = [
  { id: "all", label: "All Transactions" },
  { id: "completed", label: "Completed" },
  { id: "pending", label: "Pending" },
  { id: "failed", label: "Failed" },
  { id: "refunded", label: "Refunded" },
]

export default function RecentTransactions() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredTransactions = transactions.filter(transaction => {
    if (activeFilter !== "all" && transaction.status !== activeFilter) {
      return false
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        transaction.user.toLowerCase().includes(query) ||
        transaction.email.toLowerCase().includes(query) ||
        transaction.course.toLowerCase().includes(query) ||
        transaction.transactionId.toLowerCase().includes(query)
      )
    }
    
    return true
  })

  const totalRevenue = filteredTransactions
    .filter(t => t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0)

  const pendingAmount = filteredTransactions
    .filter(t => t.status === "pending")
    .reduce((sum, t) => sum + t.amount, 0)

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Recent Transactions</h3>
          <p className="text-gray-400 text-sm">Track payments, refunds, and revenue</p>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-48 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
            />
          </div>

          {/* Action Buttons */}
          <button className="p-2 glass rounded-lg hover:bg-white/10 transition-colors">
            <Filter className="h-4 w-4 text-gray-400 hover:text-white" />
          </button>
          <button className="p-2 glass rounded-lg hover:bg-white/10 transition-colors">
            <Download className="h-4 w-4 text-gray-400 hover:text-white" />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
              activeFilter === filter.id
                ? "bg-primary text-white"
                : "glass text-gray-400 hover:text-white"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Transaction Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-xl border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Total Revenue</div>
              <div className="text-2xl font-bold text-white">{formatCurrency(totalRevenue)}</div>
            </div>
            <div className="p-2 rounded-lg bg-green-500/10">
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
          </div>
        </div>
        
        <div className="p-4 rounded-xl border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Pending Amount</div>
              <div className="text-2xl font-bold text-white">{formatCurrency(pendingAmount)}</div>
            </div>
            <div className="p-2 rounded-lg bg-amber-500/10">
              <Clock className="h-5 w-5 text-amber-500" />
            </div>
          </div>
        </div>
        
        <div className="p-4 rounded-xl border border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">Total Transactions</div>
              <div className="text-2xl font-bold text-white">{filteredTransactions.length}</div>
            </div>
            <div className="p-2 rounded-lg bg-blue-500/10">
              <CreditCard className="h-5 w-5 text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                User & Course
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Amount
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Date & Time
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredTransactions.map((transaction, index) => {
              const StatusIcon = statusConfig[transaction.status as keyof typeof statusConfig].icon
              const statusColor = statusConfig[transaction.status as keyof typeof statusConfig].color
              const statusBgColor = statusConfig[transaction.status as keyof typeof statusConfig].bgColor
              const statusLabel = statusConfig[transaction.status as keyof typeof statusConfig].label

              return (
                <motion.tr
                  key={transaction.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${transaction.color} flex items-center justify-center`}>
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-white">{transaction.user}</div>
                        <div className="text-sm text-gray-400">{transaction.course}</div>
                        <div className="text-xs text-gray-500">{transaction.email}</div>
                      </div>
                    </div>
                  </td>
                  
                  <td className="py-4 px-4">
                    <div className="text-lg font-bold text-white">{formatCurrency(transaction.amount)}</div>
                    <div className="text-xs text-gray-400">{transaction.paymentMethod}</div>
                    <div className="text-xs text-gray-500">{transaction.transactionId}</div>
                  </td>
                  
                  <td className="py-4 px-4">
                    <div className={cn("inline-flex items-center px-3 py-1 rounded-full text-xs font-medium", statusBgColor, statusColor)}>
                      <StatusIcon className="h-3 w-3 mr-1" />
                      {statusLabel}
                    </div>
                  </td>
                  
                  <td className="py-4 px-4">
                    <div className="text-sm text-white">{transaction.date}</div>
                    <div className="text-xs text-gray-400">{transaction.time}</div>
                  </td>
                  
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1.5 glass rounded-lg hover:bg-white/10 transition-colors">
                        <MoreVertical className="h-4 w-4 text-gray-400 hover:text-white" />
                      </button>
                      {transaction.status === "pending" && (
                        <button className="px-3 py-1.5 bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white text-xs font-medium hover:opacity-90 transition-opacity">
                          Approve
                        </button>
                      )}
                      {transaction.status === "failed" && (
                        <button className="px-3 py-1.5 glass rounded-lg text-white text-xs font-medium hover:bg-white/10 transition-colors">
                          Retry
                        </button>
                      )}
                    </div>
                  </td>
                </motion.tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-400">Showing {filteredTransactions.length} of {transactions.length} transactions</div>
            <div className="text-xs text-gray-500">Last updated: Today, 11:45 AM</div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 glass rounded-lg text-white text-sm font-medium hover:bg-white/10 transition-colors">
              View All
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity">
              Export CSV
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}