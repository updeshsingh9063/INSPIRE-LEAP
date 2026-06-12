"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  CheckCircle,
  AlertCircle,
  ShieldAlert
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginForm() {
  const router = useRouter()
  const [isAdminLogin, setIsAdminLogin] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)
  const [apiError, setApiError] = useState("")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setApiError("")
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setErrors({})

    // Mock successful login to bypass backend
    setTimeout(() => {
      if (isAdminLogin) {
        localStorage.setItem("auth_token", "mock-admin-token");
        localStorage.setItem("user", JSON.stringify({ email: formData.email, name: "Admin User", role: "admin" }));
        setSuccess(true);
        setTimeout(() => router.push("/admin"), 1500);
      } else {
        localStorage.setItem("auth_token", "mock-student-token");
        localStorage.setItem("user", JSON.stringify({ email: formData.email, name: "Student User", role: "student" }));
        setSuccess(true);
        setTimeout(() => router.push("/dashboard"), 1500);
      }
      setIsSubmitting(false);
    }, 1000);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
    
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }))
    if (apiError) setApiError("")
  }

  return (
    <div className="space-y-6">
      
      {/* Role Toggle */}
      <div className="flex bg-gray-100 p-1 rounded-xl">
        <button
          type="button"
          onClick={() => { setIsAdminLogin(false); setApiError(""); setErrors({}) }}
          className={cn(
            "flex-1 py-2 text-sm font-medium rounded-lg transition-all",
            !isAdminLogin ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
          )}
        >
          Student Login
        </button>
        <button
          type="button"
          onClick={() => { setIsAdminLogin(true); setApiError(""); setErrors({}) }}
          className={cn(
            "flex-1 py-2 text-sm font-medium rounded-lg transition-all flex items-center justify-center space-x-2",
            isAdminLogin ? "bg-violet-600 text-white shadow-sm" : "text-gray-500 hover:text-gray-700"
          )}
        >
          <ShieldAlert className="h-4 w-4" />
          <span>Admin Access</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl"
          >
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <div>
                <div className="font-medium text-emerald-900">Login successful!</div>
                <div className="text-sm text-emerald-700">Redirecting to {isAdminLogin ? "Admin Dashboard" : "Dashboard"}...</div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onSubmit={handleSubmit} 
            className="space-y-6" 
            suppressHydrationWarning
          >
            
            {apiError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg flex items-center space-x-2">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{apiError}</span>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isAdminLogin ? "Admin Email Address" : "Email Address"}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={isAdminLogin ? "admin@inspireleap.com" : "Enter your email"}
                  className={cn(
                    "w-full pl-10 pr-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all",
                    errors.email ? "border-red-500" : "border-gray-200"
                  )}
                  disabled={isSubmitting}
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={cn(
                    "w-full pl-10 pr-12 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all",
                    errors.password ? "border-red-500" : "border-gray-200"
                  )}
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  disabled={isSubmitting}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer"
                disabled={isSubmitting}
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-600 cursor-pointer">
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full py-3 px-4 rounded-lg text-white font-semibold transition-all",
                isAdminLogin ? "bg-violet-600 hover:bg-violet-700" : "bg-primary hover:bg-primary/90",
                isSubmitting && "opacity-70 cursor-not-allowed"
              )}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </div>
              ) : (
                isAdminLogin ? "Access Admin Dashboard" : "Sign In"
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
