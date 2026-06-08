import { notFound } from "next/navigation"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CourseDetail from "@/components/CourseDetail"
import RelatedCourses from "@/components/RelatedCourses"
import CourseInstructor from "@/components/CourseInstructor"
import CourseCurriculum from "@/components/CourseCurriculum"
import CourseReviews from "@/components/CourseReviews"

// Mock course data - in a real app, this would come from a database
const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    category: "tech",
    description: "Master MERN stack with modern frameworks and deployment",
    detailedDescription: "This comprehensive course covers everything from frontend to backend development using the MERN stack (MongoDB, Express.js, React, Node.js). You'll learn to build scalable web applications, implement RESTful APIs, work with databases, and deploy applications to production.",
    duration: "6 months",
    students: "5.2K",
    rating: 4.8,
    reviews: 1247,
    price: 29999,
    discountedPrice: 19999,
    instructor: "Rajesh Kumar",
    instructorRole: "Senior SDE @ Amazon",
    instructorBio: "10+ years of experience in full-stack development. Previously worked at Google and Microsoft. Passionate about teaching and mentoring aspiring developers.",
    features: ["Live Sessions", "10+ Projects", "Placement Assistance", "Wipro Certification", "Lifetime Access", "Community Support"],
    trending: true,
    popular: true,
    level: "Beginner to Advanced",
    language: "English",
    certificate: "Wipro Certified",
    placementRate: "95%",
    slug: "full-stack-web-development",
    prerequisites: ["Basic programming knowledge", "Familiarity with HTML/CSS", "Understanding of JavaScript basics"],
    learningOutcomes: [
      "Build full-stack web applications",
      "Implement RESTful APIs",
      "Work with MongoDB databases",
      "Deploy applications to cloud platforms",
      "Implement authentication and authorization",
      "Optimize application performance"
    ],
    curriculum: [
      {
        module: 1,
        title: "HTML, CSS & JavaScript Fundamentals",
        duration: "2 weeks",
        topics: ["HTML5 Semantic Elements", "CSS3 Flexbox & Grid", "Modern JavaScript ES6+", "DOM Manipulation"]
      },
      {
        module: 2,
        title: "React & Frontend Development",
        duration: "4 weeks",
        topics: ["React Components & Props", "State Management", "React Hooks", "Context API", "React Router"]
      },
      {
        module: 3,
        title: "Node.js & Backend Development",
        duration: "4 weeks",
        topics: ["Node.js Fundamentals", "Express.js Framework", "Middleware", "REST API Design", "Error Handling"]
      },
      {
        module: 4,
        title: "MongoDB & Database Design",
        duration: "3 weeks",
        topics: ["MongoDB Basics", "Mongoose ODM", "Data Modeling", "Indexing", "Aggregation Pipeline"]
      },
      {
        module: 5,
        title: "Authentication & Security",
        duration: "2 weeks",
        topics: ["JWT Authentication", "Password Hashing", "CORS", "Security Best Practices"]
      },
      {
        module: 6,
        title: "Deployment & DevOps",
        duration: "2 weeks",
        topics: ["Docker Containers", "CI/CD Pipelines", "AWS Deployment", "Performance Monitoring"]
      }
    ],
    reviewsData: [
      {
        id: 1,
        name: "Priya Sharma",
        rating: 5,
        date: "2 months ago",
        comment: "Excellent course! The instructor explains complex concepts in a simple way. The projects helped me land my first job as a web developer.",
        helpful: 42
      },
      {
        id: 2,
        name: "Amit Patel",
        rating: 4,
        date: "3 months ago",
        comment: "Great content and structure. Would have liked more advanced topics covered, but overall a solid course for beginners.",
        helpful: 18
      },
      {
        id: 3,
        name: "Neha Singh",
        rating: 5,
        date: "1 month ago",
        comment: "The placement assistance program is amazing! Got placed at a top tech company within 2 months of completing the course.",
        helpful: 56
      }
    ]
  },
  // Add other courses here...
]

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

                <div className="space-y-4">
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:opacity-90 transition-opacity">
                    Enroll Now
                  </button>
                  <button className="w-full px-6 py-4 glass text-white rounded-xl font-medium hover:bg-white/10 transition-colors">
                    Add to Wishlist
                  </button>
                  <button className="w-full px-6 py-4 glass text-white rounded-xl font-medium hover:bg-white/10 transition-colors">
                    Try Free Preview
                  </button>
                </div>

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