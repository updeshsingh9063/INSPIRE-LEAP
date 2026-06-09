import Navbar from "@/components/Navbar"
import LearningJourneySection from "@/components/LearningJourneySection"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Guaranteed Internships | Inspire Leap",
  description: "Gain real industry experience with our guaranteed internships. Learn how our program structure takes you from beginner to working professional.",
}

export default function InternshipsPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <Navbar />
      <LearningJourneySection />
      <Footer />
    </div>
  )
}
