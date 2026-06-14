"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

const PUBLIC_ROUTES = [
  "/", 
  "/login", 
  "/register", 
  "/forgot-password", 
  "/auth/callback"
];

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    // Check if the current route is public
    const isPublic = PUBLIC_ROUTES.includes(pathname) || pathname.startsWith("/api/");

    if (isPublic) {
      setIsAuthorized(true);
      return;
    }

    // For all other features and courses, require sign in
    const token = localStorage.getItem("auth_token")
    if (!token) {
      alert("Please sign in or create an account first to access this feature.")
      router.push("/login")
    } else {
      setIsAuthorized(true)
    }
  }, [pathname, router])

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white font-medium">Verifying access...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
