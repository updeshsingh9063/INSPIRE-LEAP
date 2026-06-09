import { Suspense } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ForgotPasswordForm from "@/components/ForgotPasswordForm"
import AuthHero from "@/components/AuthHero"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Forgot Password | Inspire Leap - Wipro Partner Program",
  description: "Reset your Inspire Leap account password. Enter your email to receive password reset instructions.",
}

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                Reset Your Password
              </h1>
              <p className="text-gray-400">
                Enter your email address and we'll send you instructions to reset your password.
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <Suspense fallback={<ForgotPasswordSkeleton />}>
                <ForgotPasswordForm />
              </Suspense>

              {/* Back to Login */}
              <div className="text-center mt-8 pt-6 border-t border-white/10">
                <p className="text-gray-400">
                  Remember your password?{" "}
                  <a href="/login" className="text-primary hover:text-secondary font-medium">
                    Back to login
                  </a>
                </p>
              </div>
            </div>

            {/* Additional Help */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Need help? Contact our support team at{" "}
                <a href="mailto:support@inspireleap.com" className="text-primary hover:text-secondary">
                  support@inspireleap.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function ForgotPasswordSkeleton() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
      <Skeleton className="h-12 w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  )
}