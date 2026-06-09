"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Mail, 
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Shield
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [step, setStep] = useState<"email" | "reset">("email")
  const [resetData, setResetData] = useState({
    code: "",
    newPassword: "",
    confirmPassword: ""
  })

  const validateEmail = () => {
    if (!email.trim()) {
      setError("Email is required")
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address")
      return false
    }
    setError("")
    return true
  }

  const validateResetForm = () => {
    const newErrors: Record<string, string> = {}

    if (!resetData.code.trim()) {
      newErrors.code = "Reset code is required"
    } else if (resetData.code.length !== 6) {
      newErrors.code = "Reset code must be 6 digits"
    }

    if (!resetData.newPassword.trim()) {
      newErrors.newPassword = "New password is required"
    } else if (resetData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters"
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(resetData.newPassword)) {
      newErrors.newPassword = "Password must contain uppercase, lowercase, and numbers"
    }

    if (!resetData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (resetData.newPassword !== resetData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (Object.keys(newErrors).length > 0) {
      setError(Object.values(newErrors)[0])
      return false
    }

    setError("")
    return true
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateEmail()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // In a real app, this would send a reset email
    console.log("Password reset requested for:", email)
    
    // Mock successful email sent
    setSuccess(true)
    setIsSubmitting(false)

    // Move to reset step after a delay
    setTimeout(() => {
      setStep("reset")
      setSuccess(false)
    }, 2000)
  }

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateResetForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // In a real app, this would reset the password
    console.log("Password reset with code:", resetData.code)
    
    // Mock successful reset
    setSuccess(true)
    setIsSubmitting(false)

    // Reset form after success
    setTimeout(() => {
      setEmail("")
      setResetData({
        code: "",
        newPassword: "",
        confirmPassword: ""
      })
      setStep("email")
      setSuccess(false)
      // In a real app, you would redirect to login
      // router.push("/login")
    }, 3000)
  }

  const handleResetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setResetData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (error) {
      setError("")
    }
  }

  const handleBackToEmail = () => {
    setStep("email")
    setError("")
    setSuccess(false)
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
              <div className="font-medium text-white">
                {step === "email" 
                  ? "Reset email sent!" 
                  : "Password reset successful!"}
              </div>
              <div className="text-sm text-gray-400">
                {step === "email" 
                  ? "Check your email for reset instructions" 
                  : "You can now login with your new password"}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Email Step */}
      {step === "email" ? (
        <form onSubmit={handleEmailSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={cn(
                  "w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all",
                  error ? "border-red-500/50" : "border-transparent"
                )}
                disabled={isSubmitting}
              />
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-500 flex items-center space-x-1"
              >
                <AlertCircle className="h-4 w-4" />
                <span>{error}</span>
              </motion.p>
            )}
          </div>

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
                <span>Sending reset email...</span>
              </div>
            ) : (
              "Send Reset Instructions"
            )}
          </motion.button>
        </form>
      ) : (
        /* Reset Step */
        <form onSubmit={handleResetSubmit} className="space-y-6">
          {/* Back Button */}
          <button
            type="button"
            onClick={handleBackToEmail}
            className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors"
            disabled={isSubmitting}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to email entry</span>
          </button>

          {/* Reset Code */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Reset Code
            </label>
            <div className="relative">
              <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input
                type="text"
                name="code"
                value={resetData.code}
                onChange={handleResetChange}
                placeholder="Enter 6-digit code from email"
                maxLength={6}
                className={cn(
                  "w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all",
                  error ? "border-red-500/50" : "border-transparent"
                )}
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={resetData.newPassword}
              onChange={handleResetChange}
              placeholder="Enter new password"
              className={cn(
                "w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all",
                error ? "border-red-500/50" : "border-transparent"
              )}
              disabled={isSubmitting}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={resetData.confirmPassword}
              onChange={handleResetChange}
              placeholder="Confirm new password"
              className={cn(
                "w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all",
                error ? "border-red-500/50" : "border-transparent"
              )}
              disabled={isSubmitting}
            />
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-500 flex items-center space-x-1"
            >
              <AlertCircle className="h-4 w-4" />
              <span>{error}</span>
            </motion.p>
          )}

          {/* Password Requirements */}
          <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl">
            <h4 className="text-sm font-medium text-white mb-2">
              Password Requirements
            </h4>
            <ul className="space-y-1 text-xs text-gray-400">
              <li className="flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2" />
                At least 8 characters long
              </li>
              <li className="flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2" />
                Contains uppercase and lowercase letters
              </li>
              <li className="flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2" />
                Includes at least one number
              </li>
            </ul>
          </div>

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
                <span>Resetting password...</span>
              </div>
            ) : (
              "Reset Password"
            )}
          </motion.button>
        </form>
      )}

      {/* Security Notice */}
      <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl">
        <div className="flex items-start space-x-3">
          <Shield className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm font-medium text-white">Security Notice</div>
            <div className="text-xs text-gray-400 mt-1">
              Password reset links are valid for 24 hours. If you didn't request 
              a password reset, please contact our support team immediately.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}