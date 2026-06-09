import Navbar from "@/components/Navbar"
import PlacementSection from "@/components/PlacementSection"
import PartnerEcosystemSection from "@/components/PartnerEcosystemSection"
import SuccessStoriesSection from "@/components/SuccessStoriesSection"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Placements & Success Stories | Inspire Leap",
  description: "Check out our placement rate, hiring partners, and successful career switch stories of our graduates at top companies.",
}

export default function PlacementsPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <Navbar />
      <PlacementSection />
      <PartnerEcosystemSection />
      <SuccessStoriesSection />
      <Footer />
    </div>
  )
}
