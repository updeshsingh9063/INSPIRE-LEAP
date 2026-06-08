import Navbar from "@/components/Navbar"
import CertificationsSection from "@/components/CertificationsSection"
import LearningJourneySection from "@/components/LearningJourneySection"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Wipro Co-Certifications | Inspire Leap",
  description: "Get industry-recognized certifications co-branded with Wipro. Build skills and showcase your credentials directly to top employers.",
}

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <Navbar />
      <CertificationsSection />
      <LearningJourneySection />
      <Footer />
    </div>
  )
}
