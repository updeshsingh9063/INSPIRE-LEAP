"use client"

import { Suspense } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import RegisterForm from "@/components/RegisterForm"
import AuthHero from "@/components/AuthHero"
import { Skeleton } from "@/components/ui/skeleton"


export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Section */}
            <div>
              <AuthHero 
                title="Start Your Journey"
                subtitle="Join thousands of students who transformed their careers with Inspire Leap"
                features={[
                  "Access 50+ premium courses",
                  "Get 1:1 mentorship sessions",
                  "Receive Wipro certification",
                  "Guaranteed placement assistance"
                ]}
              />
            </div>

            {/* Right Column - Register Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
                <p className="text-gray-500">
                  Join Inspire Leap and start your learning journey
                </p>
              </div>

              <Suspense fallback={<RegisterFormSkeleton />}>
                <RegisterForm />
              </Suspense>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                <button 
                  onClick={() => window.location.href = `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/auth/google`}
                  className="px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 shadow-sm"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-sm">Continue with Google</span>
                </button>
              </div>

              {/* Terms & Conditions */}
              <div className="text-center text-sm text-gray-400 mb-6">
                By creating an account, you agree to our{" "}
                <a href="/terms" className="text-primary hover:text-secondary">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-primary hover:text-secondary">
                  Privacy Policy
                </a>
              </div>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-gray-400">
                  Already have an account?{" "}
                  <a href="/login" className="text-primary hover:text-secondary font-medium">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function RegisterFormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
        <div>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
      </div>
      <div>
        <Skeleton className="h-4 w-24 mb-2" />
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
      <div>
        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
      <div>
        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
      <div className="flex items-center space-x-2">
        <Skeleton className="h-4 w-4 rounded" />
        <Skeleton className="h-4 w-48" />
      </div>
      <Skeleton className="h-12 w-full rounded-lg" />
    </div>
  )
}