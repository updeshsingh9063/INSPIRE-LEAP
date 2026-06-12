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