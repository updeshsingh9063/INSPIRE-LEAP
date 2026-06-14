"use client"

import { motion } from "framer-motion"
import {
  Star,
  Users,
  Award,
  Briefcase,
  MessageSquare,
  Calendar,
  Globe,
  Share2
} from "lucide-react"
import { cn } from "@/lib/utils"

interface CourseInstructorProps {
  instructor: string
  role: string
  bio: string
  rating: number
  students: string
}

export default function CourseInstructor({ 
  instructor, 
  role, 
  bio, 
  rating, 
  students 
}: CourseInstructorProps) {
  const instructorStats = [
    { icon: Star, label: "Instructor Rating", value: rating.toFixed(1) },
    { icon: Users, label: "Students", value: students },
    { icon: Award, label: "Courses", value: "12" },
    { icon: Briefcase, label: "Experience", value: "10+ years" },
  ]

  const expertiseAreas = [
    "Full Stack Development",
    "Cloud Architecture",
    "System Design",
    "Performance Optimization",
    "Team Leadership",
    "Mentoring"
  ]

  const achievements = [
    "Google Developer Expert",
    "AWS Certified Solutions Architect",
    "Microsoft MVP",
    "Top 1% Instructor Worldwide"
  ]

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Instructor Profile */}
        <div className="lg:w-1/3">
          <div className="space-y-6">
            {/* Profile Image & Basic Info */}
            <div className="text-center lg:text-left">
              <div className="h-32 w-32 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-4xl font-bold mx-auto lg:mx-0 mb-4">
                {instructor.charAt(0)}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{instructor}</h3>
              <p className="text-gray-600 mt-1 font-medium">{role}</p>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-3 mt-4">
                <button className="h-10 w-10 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="h-10 w-10 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                  <MessageSquare className="h-5 w-5" />
                </button>
                <button className="h-10 w-10 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                  <Globe className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {instructorStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gray-50 border border-gray-100 rounded-xl p-4 shadow-sm"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs font-medium text-gray-500">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Contact Button */}
            <button
              onClick={() => window.open('https://wa.me/918019866332', '_blank')}
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Message Instructor</span>
            </button>
          </div>
        </div>

        {/* Instructor Details */}
        <div className="lg:w-2/3 space-y-8">
          {/* Bio */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">About the Instructor</h3>
            <p className="text-gray-600 leading-relaxed">
              {bio}
            </p>
          </div>

          {/* Expertise Areas */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {expertiseAreas.map((area, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors shadow-sm"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Achievements & Certifications</h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm"
                >
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700 font-medium">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Teaching Philosophy */}
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Teaching Philosophy</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                "I believe in learning by doing. My courses are designed with hands-on projects 
                that simulate real-world scenarios. I focus on practical skills that you can 
                immediately apply in your career."
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Student-Centric</div>
                    <div className="text-xs text-gray-500">Focus on individual learning paths</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Industry-Relevant</div>
                    <div className="text-xs text-gray-500">Curriculum aligned with job market needs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="flex flex-col sm:flex-row items-center justify-between bg-white border-2 border-primary/20 rounded-xl p-6 shadow-md">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">1:1 Mentorship Sessions</h4>
              <p className="text-sm text-gray-600 font-medium">
                Book personalized sessions for career guidance and technical help
              </p>
            </div>
            <button
              onClick={() => window.location.href = 'tel:+918019866332'}
              className="mt-4 sm:mt-0 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Session</span>
            </button>
          </div>
        </div>
      </div>

      {/* Student Testimonials */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6">What Students Say</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Priya Sharma",
              role: "Software Engineer @ Microsoft",
              comment: "Rajesh's teaching style is exceptional. The projects helped me build a strong portfolio that got me multiple job offers.",
              rating: 5
            },
            {
              name: "Amit Patel",
              role: "Full Stack Developer @ Amazon",
              comment: "The course structure is perfect for beginners. The support from the instructor and community is outstanding.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm font-medium text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < testimonial.rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-600"
                    )}
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "{testimonial.comment}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}