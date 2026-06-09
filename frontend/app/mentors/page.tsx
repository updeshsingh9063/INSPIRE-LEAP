import Navbar from "@/components/Navbar"
import MentorSection from "@/components/MentorSection"
import FAQSection from "@/components/FAQSection"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Industry Expert Mentors | Inspire Leap",
  description: "Learn directly from top industry experts from Google, Microsoft, Amazon, and Wipro. Get 1-on-1 mentorship and career guidance.",
}

export default function MentorsPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <Navbar />
      <MentorSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
