"use client"

import { motion } from "framer-motion"
import { CheckCircle, Award, BookOpen, MessageSquare, FileText, TrendingUp, Clock, Star } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "course_completed",
    title: "Completed React Fundamentals Module",
    course: "Full Stack Web Development",
    timestamp: "2 hours ago",
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    points: 150,
  },
  {
    id: 2,
    type: "assignment_submitted",
    title: "Submitted E-commerce Project",
    course: "Full Stack Web Development",
    timestamp: "5 hours ago",
    icon: FileText,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    grade: "A+",
  },
  {
    id: 3,
    type: "certificate_earned",
    title: "Earned JavaScript Certification",
    course: "Full Stack Web Development",
    timestamp: "Yesterday",
    icon: Award,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    level: "Advanced",
  },
  {
    id: 4,
    type: "mentor_feedback",
    title: "Received feedback from Rajesh Kumar",
    course: "Full Stack Web Development",
    timestamp: "2 days ago",
    icon: MessageSquare,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    rating: 4.5,
  },
  {
    id: 5,
    type: "progress_milestone",
    title: "Reached 75% completion in Data Science",
    course: "Data Science Fundamentals",
    timestamp: "3 days ago",
    icon: TrendingUp,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    achievement: "Top 10%",
  },
  {
    id: 6,
    type: "course_enrolled",
    title: "Enrolled in UI/UX Design Mastery",
    course: "UI/UX Design Mastery",
    timestamp: "1 week ago",
    icon: BookOpen,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    startDate: "Dec 10, 2024",
  },
]

const activityTypes = {
  course_completed: { label: "Course Progress", color: "bg-green-500" },
  assignment_submitted: { label: "Assignment", color: "bg-blue-500" },
  certificate_earned: { label: "Certificate", color: "bg-amber-500" },
  mentor_feedback: { label: "Feedback", color: "bg-purple-500" },
  progress_milestone: { label: "Milestone", color: "bg-cyan-500" },
  course_enrolled: { label: "Enrollment", color: "bg-pink-500" },
}

export default function RecentActivity() {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Recent Activity</h3>
          <p className="text-gray-400 text-sm">Your learning journey updates and achievements</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 glass rounded-lg text-white text-sm font-medium hover:bg-white/10 transition-colors">
            Filter
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity">
            View All
          </button>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="relative pl-10"
          >
            {/* Timeline Connector */}
            {index < activities.length - 1 && (
              <div className="absolute left-5 top-8 bottom-0 w-0.5 bg-white/10" />
            )}

            {/* Timeline Dot */}
            <div className="absolute left-0 top-2">
              <div className={`w-3 h-3 rounded-full ${activityTypes[activity.type as keyof typeof activityTypes].color}`} />
            </div>

            {/* Activity Card */}
            <div className="p-4 rounded-xl border border-white/10 hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                    <activity.icon className={`h-5 w-5 ${activity.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium text-white">{activity.title}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${activity.bgColor} ${activity.color}`}>
                        {activityTypes[activity.type as keyof typeof activityTypes].label}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{activity.course}</p>
                    
                    {/* Activity Details */}
                    <div className="flex items-center space-x-4 text-xs">
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Clock className="h-3 w-3" />
                        <span>{activity.timestamp}</span>
                      </div>
                      
                      {/* Points/Grade/Achievement */}
                      {activity.points && (
                        <div className="flex items-center space-x-1 text-green-400">
                          <Star className="h-3 w-3" />
                          <span>+{activity.points} points</span>
                        </div>
                      )}
                      {activity.grade && (
                        <div className="flex items-center space-x-1 text-blue-400">
                          <Award className="h-3 w-3" />
                          <span>Grade: {activity.grade}</span>
                        </div>
                      )}
                      {activity.rating && (
                        <div className="flex items-center space-x-1 text-amber-400">
                          <Star className="h-3 w-3" />
                          <span>Rating: {activity.rating}/5</span>
                        </div>
                      )}
                      {activity.achievement && (
                        <div className="flex items-center space-x-1 text-cyan-400">
                          <TrendingUp className="h-3 w-3" />
                          <span>{activity.achievement}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex flex-col items-end space-y-2">
                  <button className="px-3 py-1.5 glass rounded-lg text-white text-xs font-medium hover:bg-white/10 transition-colors">
                    View Details
                  </button>
                  {activity.type === "certificate_earned" && (
                    <button className="px-3 py-1.5 bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white text-xs font-medium hover:opacity-90 transition-opacity">
                      Download
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Activity Summary */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">24</div>
            <div className="text-gray-400 text-xs">This Week</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">1560</div>
            <div className="text-gray-400 text-xs">Total Points</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">8</div>
            <div className="text-gray-400 text-xs">Certificates</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">42</div>
            <div className="text-gray-400 text-xs">Assignments</div>
          </div>
        </div>
      </div>

      {/* Streak Counter */}
      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-primary/20">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium text-white">Learning Streak</div>
              <div className="text-2xl font-bold text-white">18 days 🔥</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-400">Keep going!</div>
            <div className="text-sm text-primary">Next milestone: 30 days</div>
          </div>
        </div>
      </div>
    </div>
  )
}