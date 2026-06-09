"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"

import { Suspense } from "react"

function AuthCallbackContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("Completing sign-in...")

  useEffect(() => {
    const token = searchParams.get("token")
    const userEncoded = searchParams.get("user")
    const error = searchParams.get("error")

    if (error) {
      setStatus("error")
      setMessage("Authentication failed. Please try again.")
      setTimeout(() => router.push("/login"), 3000)
      return
    }

    if (!token || !userEncoded) {
      setStatus("error")
      setMessage("Invalid authentication response. Redirecting...")
      setTimeout(() => router.push("/login"), 3000)
      return
    }

    try {
      // Decode user info
      const user = JSON.parse(atob(userEncoded))

      // Store token and user in localStorage
      localStorage.setItem("auth_token", token)
      localStorage.setItem("user", JSON.stringify(user))

      setStatus("success")
      setMessage(`Welcome back, ${user.name?.split(" ")[0] || "there"}! 🎉`)

      // Redirect to dashboard or home after brief delay
      setTimeout(() => router.push("/dashboard"), 2000)
    } catch (err) {
      setStatus("error")
      setMessage("Failed to process authentication. Redirecting...")
      setTimeout(() => router.push("/login"), 3000)
    }
  }, [searchParams, router])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="glass rounded-2xl p-12 text-center max-w-md w-full mx-4"
      >
        <div className="flex justify-center mb-6">
          {status === "loading" && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <Loader2 className="h-16 w-16 text-primary" />
            </motion.div>
          )}
          {status === "success" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="h-16 w-16 text-green-400" />
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <XCircle className="h-16 w-16 text-red-400" />
            </motion.div>
          )}
        </div>

        <h2 className="text-2xl font-bold text-white mb-3">
          {status === "loading" && "Signing you in..."}
          {status === "success" && "You're in!"}
          {status === "error" && "Authentication Failed"}
        </h2>

        <p className="text-gray-400">
          {message}
        </p>

        {status !== "loading" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-500 mt-4"
          >
            Redirecting you automatically...
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-b from-gray-950 to-black flex items-center justify-center"><Loader2 className="h-16 w-16 text-primary animate-spin" /></div>}>
      <AuthCallbackContent />
    </Suspense>
  )
}
