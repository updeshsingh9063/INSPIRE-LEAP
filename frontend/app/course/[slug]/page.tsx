import { notFound } from "next/navigation"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CourseDetail from "@/components/CourseDetail"
import RelatedCourses from "@/components/RelatedCourses"
import CourseInstructor from "@/components/CourseInstructor"
import CourseCurriculum from "@/components/CourseCurriculum"
import CourseReviews from "@/components/CourseReviews"
import CourseActionButtons from "@/components/CourseActionButtons"

import { coursesData as courses } from "@/lib/coursesData"

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params
  const course = courses.find((c) => c.slug === slug)

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Course Detail Section */}
          <CourseDetail course={course} />

          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            {/* Left Column - Curriculum & Details */}
            <div className="lg:col-span-2 space-y-8">
              <CourseCurriculum curriculum={course.curriculum} />
              
              <CourseInstructor 
                instructor={course.instructor}
                role={course.instructorRole}
                bio={course.instructorBio}
                rating={course.rating}
                students={course.students}
              />

              <CourseReviews 
                reviews={course.reviewsData}
                averageRating={course.rating}
                totalReviews={course.reviews}
              />
            </div>

            {/* Right Column - Course Card & Related */}
            <div className="space-y-8">
              <div className="glass rounded-2xl p-6 lg:sticky lg:top-24">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-3xl font-bold text-white">
                      ₹{course.discountedPrice.toLocaleString()}
                    </span>
                    <span className="text-xl text-gray-400 line-through">
                      ₹{course.price.toLocaleString()}
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium rounded-full">
                      {Math.round(((course.price - course.discountedPrice) / course.price) * 100)}% OFF
                    </span>
                  </div>
                  <div className="text-sm text-gray-400 mb-6">
                    Limited time offer. Enrollment ends in 3 days.
                  </div>
                </div>

                <CourseActionButtons />

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="text-sm font-medium text-white mb-4">This course includes:</h4>
                  <ul className="space-y-3">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-400">
                        <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <RelatedCourses currentCourseId={course.id} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function generateMetadata({ params }: CourseDetailPageProps) {
  const { slug } = await params
  const course = courses.find((c) => c.slug === slug)

  if (!course) {
    return {
      title: "Course Not Found | Inspire Leap",
      description: "The requested course could not be found.",
    }
  }

  return {
    title: `${course.title} | Inspire Leap - Wipro Partner Program`,
    description: course.detailedDescription || course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      type: "website",
    },
  }
}