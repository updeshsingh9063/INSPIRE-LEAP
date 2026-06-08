import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import TrustedBySection from "@/components/TrustedBySection"
import WhyInspireLeapSection from "@/components/WhyInspireLeapSection"
import CoursesSection from "@/components/CoursesSection"
import PlacementSection from "@/components/PlacementSection"
import SuccessStoriesSection from "@/components/SuccessStoriesSection"
import StatisticsSection from "@/components/StatisticsSection"
import PartnerEcosystemSection from "@/components/PartnerEcosystemSection"
import LearningJourneySection from "@/components/LearningJourneySection"
import MentorSection from "@/components/MentorSection"
import CertificationsSection from "@/components/CertificationsSection"
import FAQSection from "@/components/FAQSection"
import FinalCTASection from "@/components/FinalCTASection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <WhyInspireLeapSection />
      <CoursesSection />
      <PlacementSection />
      <SuccessStoriesSection />
      <StatisticsSection />
      <PartnerEcosystemSection />
      <LearningJourneySection />
      <MentorSection />
      <CertificationsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}