"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  Phone,
  CheckCircle,
  AlertCircle,
  GraduationCap
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    educationLevel: "",
    agreeToTerms: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)

  const educationLevels = [
    "High School",
    "Undergraduate",
    "Graduate",
    "Post Graduate",
    "Working Professional"
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = "First name must be at least 2 characters"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit phone number"
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Password must contain uppercase, lowercase, and numbers"
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!formData.educationLevel) {
      newErrors.educationLevel = "Please select your education level"
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions"
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

    // Mock successful registration to bypass backend
    setTimeout(() => {
      setSuccess(true);
      localStorage.setItem("auth_token", "mock-token");
      localStorage.setItem("user", JSON.stringify({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email
      }));
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
      setIsSubmitting(false);
    }, 1000);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    setFormData(prev => ({ ...prev, phone: value }))
    
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: "" }))
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
              <div className="font-medium text-gray-900">Registration successful!</div>
              <div className="text-sm text-gray-600">
                Welcome to Inspire Leap. Check your email for verification.
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
        {/* Name Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              First Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className={cn(
                  "w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all",
                  errors.firstName ? "border-red-500/50" : "border-transparent"
                )}
                disabled={isSubmitting}
              />
            </div>
            {errors.firstName && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-500 flex items-center space-x-1"
              >
                <AlertCircle className="h-4 w-4" />
                <span>{errors.firstName}</span>
              </motion.p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Last Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className={cn(
                  "w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all",
                  errors.lastName ? "border-red-500/50" : "border-transparent"
                )}
                disabled={isSubmitting}
              />
            </div>
            {errors.lastName && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-500 flex items-center space-x-1"
              >
                <AlertCircle className="h-4 w-4" />
                <span>{errors.lastName}</span>
              </motion.p>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
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
                "w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all",
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

        {/* Phone Field */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="Enter your 10-digit phone number"
              maxLength={10}
              className={cn(
                "w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all",
                errors.phone ? "border-red-500/50" : "border-transparent"
              )}
              disabled={isSubmitting}
            />
          </div>
          {errors.phone && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-500 flex items-center space-x-1"
            >
              <AlertCircle className="h-4 w-4" />
              <span>{errors.phone}</span>
            </motion.p>
          )}
        </div>

        {/* Education Level */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Education Level
          </label>
          <div className="relative">
            <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <select
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
              className={cn(
                "w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none",
                errors.educationLevel ? "border-red-500/50" : "border-transparent"
              )}
              disabled={isSubmitting}
            >
              <option value="">Select your education level</option>
              {educationLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
          {errors.educationLevel && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-500 flex items-center space-x-1"
            >
              <AlertCircle className="h-4 w-4" />
              <span>{errors.educationLevel}</span>
            </motion.p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a strong password"
              className={cn(
                "w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all",
                errors.password ? "border-red-500/50" : "border-transparent"
              )}
              disabled={isSubmitting}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-900"
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
          <div className="mt-2 text-xs text-gray-500">
            Must contain at least 8 characters, including uppercase, lowercase, and numbers
          </div>
        </div>

        {/* Confirm Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className={cn(
                "w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all",
                errors.confirmPassword ? "border-red-500/50" : "border-transparent"
              )}
              disabled={isSubmitting}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-900"
              disabled={isSubmitting}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-500 flex items-center space-x-1"
            >
              <AlertCircle className="h-4 w-4" />
              <span>{errors.confirmPassword}</span>
            </motion.p>
          )}
        </div>

        {/* Terms & Conditions */}
        <div className="space-y-4">
          <label className="flex items-start space-x-3 cursor-pointer">
            <div className="relative mt-1">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="sr-only"
                disabled={isSubmitting}
              />
              <div className={cn(
                "h-5 w-5 rounded border-2 transition-all",
                formData.agreeToTerms
                  ? "bg-primary border-primary"
                  : "glass border-gray-600"
              )}>
                {formData.agreeToTerms && (
                  <CheckCircle className="h-4 w-4 text-gray-900 absolute top-0.5 left-0.5" />
                )}
              </div>
            </div>
            <div className="text-sm text-gray-600">
              I agree to the{" "}
              <Link href="/terms" className="text-primary hover:text-secondary">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:text-secondary">
                Privacy Policy
              </Link>
            </div>
          </label>
          {errors.agreeToTerms && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-500 flex items-center space-x-1"
            >
              <AlertCircle className="h-4 w-4" />
              <span>{errors.agreeToTerms}</span>
            </motion.p>
          )}
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
              ? "bg-gray-700 text-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-primary to-secondary text-gray-900 hover:opacity-90"
          )}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Creating account...</span>
            </div>
          ) : (
            "Create Account"
          )}
        </motion.button>
      </form>

      {/* Already have account */}
      <div className="text-center pt-4 border-t border-white/10">
        <p className="text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:text-secondary font-medium">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  )
}
