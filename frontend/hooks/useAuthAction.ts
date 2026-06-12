"use client"

import { useRouter } from "next/navigation"

export function useAuthAction() {
  const router = useRouter()

  return (action: () => void) => {
    const token = localStorage.getItem("auth_token")
    if (!token) {
      alert("Please login or create an account first to access this feature.")
      router.push("/login")
      return
    }
    action()
  }
}
