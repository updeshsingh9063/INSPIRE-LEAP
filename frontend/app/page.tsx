import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import TrustedBySection from "@/components/TrustedBySection"
import WhyInspireLeapSection from "@/components/WhyInspireLeapSection"
import StatisticsSection from "@/components/StatisticsSection"
import FinalCTASection from "@/components/FinalCTASection"
import Footer from "@/components/Footer"
import LiveChat from "@/components/LiveChat"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <WhyInspireLeapSection />
      <StatisticsSection />
      <FinalCTASection />
      <Footer />
      <LiveChat />
    </div>
  )
}