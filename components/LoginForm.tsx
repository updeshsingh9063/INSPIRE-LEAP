"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  CheckCircle,
  AlertCircle
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // In a real app, this would be an actual API call
    console.log("Login attempt:", formData)
    
    // Mock successful login
    setSuccess(true)
    setIsSubmitting(false)

    // Reset form after success
    setTimeout(() => {
      setSuccess(false)
      // In a real app, you would redirect to dashboard
      // router.push("/dashboard")
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <div className="space-y-6">
      {/* Success Message */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl"
        >
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <div>
              <div className="font-medium text-white">Login successful!</div>
              <div className="text-sm text-gray-400">Redirecting to dashboard...</div>
            </div>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={cn(
                "w-full pl-12 pr-4 py-3 glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all",
                errors.email ? "border-red-500/50" : "border-transparent"
              )}
              disabled={isSubmitting}
            />
          </div>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-500 flex items-center space-x-1"
            >
              <AlertCircle className="h-4 w-4" />
              <span>{errors.email}</span>
            </motion.p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-400">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-primary hover:text-secondary"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={cn(
                "w-full pl-12 pr-12 py-3 glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all",
                errors.password ? "border-red-500/50" : "border-transparent"
              )}
              disabled={isSubmitting}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
              disabled={isSubmitting}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-500 flex items-center space-x-1"
            >
              <AlertCircle className="h-4 w-4" />
              <span>{errors.password}</span>
            </motion.p>
          )}
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center space-x-3 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="sr-only"
                disabled={isSubmitting}
              />
              <div className={cn(
                "h-5 w-5 rounded border-2 transition-all",
                formData.rememberMe
                  ? "bg-primary border-primary"
                  : "glass border-gray-600"
              )}>
                {formData.rememberMe && (
                  <CheckCircle className="h-4 w-4 text-white absolute top-0.5 left-0.5" />
                )}
              </div>
            </div>
            <span className="text-sm text-gray-400">Remember me</span>
          </label>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "w-full px-6 py-4 rounded-xl font-bold transition-all",
            isSubmitting
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90"
          )}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Signing in...</span>
            </div>
          ) : (
            "Sign In"
          )}
        </motion.button>
      </form>

      {/* Demo Credentials */}
      <div className="glass rounded-xl p-4">
        <h4 className="text-sm font-medium text-white mb-2">Demo Credentials</h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between text-gray-400">
            <span>Email:</span>
            <code className="px-2 py-1 glass rounded text-primary">demo@inspireleap.com</code>
          </div>
          <div className="flex items-center justify-between text-gray-400">
            <span>Password:</span>
            <code className="px-2 py-1 glass rounded text-primary">demo123</code>
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm font-medium text-white">Security Notice</div>
            <div className="text-xs text-gray-400 mt-1">
              This is a demo application. In a production environment, ensure you use 
              secure authentication practices including HTTPS, proper password hashing, 
              and rate limiting.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}