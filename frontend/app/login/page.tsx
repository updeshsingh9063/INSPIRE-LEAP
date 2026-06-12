"use client"

import { Suspense } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LoginForm from "@/components/LoginForm"
import AuthHero from "@/components/AuthHero"
import { Skeleton } from "@/components/ui/skeleton"
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Section */}
            <div>
              <AuthHero 
                title="Welcome Back"
                subtitle="Sign in to continue your learning journey with Inspire Leap"
                features={[
                  "Access premium courses",
                  "Track your progress",
                  "Connect with mentors",
                  "Get placement assistance"
                ]}
              />
            </div>

            {/* Right Column - Login Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
                <p className="text-gray-500">
                  Enter your credentials to access your account
                </p>
              </div>

              <Suspense fallback={<AuthFormSkeleton />}>
                <LoginForm />
              </Suspense>



              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-gray-400">
                  Don't have an account?{" "}
                  <a href="/register" className="text-primary hover:text-secondary font-medium">
                    Sign up
                  </a>
                </p>
                <p className="text-gray-400 mt-2">
                  <a href="/forgot-password" className="text-primary hover:text-secondary font-medium">
                    Forgot your password?
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

function AuthFormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
        <div>
          <Skeleton className="h-4 w-32 mb-2" />
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-4 w-4 rounded" />
          <Skeleton className="h-4 w-32" />
        </div>
        <Skeleton className="h-4 w-24" />
      </div>
      <Skeleton className="h-12 w-full rounded-lg" />
    </div>
  )
}