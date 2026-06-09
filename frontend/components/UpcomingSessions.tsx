"use client"

import { motion } from "framer-motion"
import { Calendar, Video, Users, Clock, MapPin } from "lucide-react"

const sessions = [
  {
    id: 1,
    title: "React Hooks Deep Dive",
    type: "Mentor Session",
    mentor: "Rajesh Kumar",
    date: "Tomorrow",
    time: "10:00 AM - 11:30 AM",
    duration: "1.5 hours",
    icon: Video,
    color: "from-blue-500 to-cyan-500",
    attendees: 12,
    platform: "Zoom",
    meetingLink: "#",
  },
  {
    id: 2,
    title: "Placement Interview Prep",
    type: "Group Workshop",
    mentor: "Anjali Sharma",
    date: "Dec 12, 2024",
    time: "2:00 PM - 4:00 PM",
    duration: "2 hours",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    attendees: 25,
    platform: "Google Meet",
    meetingLink: "#",
  },
  {
    id: 3,
    title: "Project Review - E-commerce App",
    type: "One-on-One",
    mentor: "Vikram Singh",
    date: "Dec 15, 2024",
    time: "11:00 AM - 12:00 PM",
    duration: "1 hour",
    icon: Calendar,
    color: "from-orange-500 to-red-500",
    attendees: 1,
    platform: "Microsoft Teams",
    meetingLink: "#",
  },
  {
    id: 4,
    title: "Wipro HR Interaction",
    type: "Corporate Session",
    mentor: "Wipro HR Team",
    date: "Dec 18, 2024",
    time: "3:00 PM - 5:00 PM",
    duration: "2 hours",
    icon: MapPin,
    color: "from-green-500 to-emerald-500",
    attendees: 50,
    platform: "On-campus",
    meetingLink: "#",
  },
]

export default function UpcomingSessions() {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">Upcoming Sessions</h3>
          <p className="text-gray-400 text-sm">Mentor sessions, workshops, and interviews</p>
        </div>
        <button className="px-4 py-2 glass rounded-lg text-white text-sm font-medium hover:bg-white/10 transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {sessions.map((session, index) => (
          <motion.div
            key={session.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-xl border border-white/10 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${session.color}`}>
                  <session.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-white">{session.title}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      session.type === "Mentor Session" ? "bg-blue-500/20 text-blue-400" :
                      session.type === "Group Workshop" ? "bg-purple-500/20 text-purple-400" :
                      session.type === "One-on-One" ? "bg-orange-500/20 text-orange-400" :
                      "bg-green-500/20 text-green-400"
                    }`}>
                      {session.type}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">with {session.mentor}</p>
                  
                  <div className="flex flex-wrap gap-2 text-xs">
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Calendar className="h-3 w-3" />
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Clock className="h-3 w-3" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Users className="h-3 w-3" />
                      <span>{session.attendees} attendees</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs text-gray-400 mb-2">{session.platform}</div>
                <button className="px-3 py-1.5 bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white text-xs font-medium hover:opacity-90 transition-opacity">
                  Join
                </button>
              </div>
            </div>

            {/* Reminder Badge for Tomorrow's Session */}
            {session.date === "Tomorrow" && (
              <div className="mt-3 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-1 text-amber-400">
                  <Clock className="h-3 w-3" />
                  <span>Starts in 24 hours</span>
                </div>
                <button className="text-primary text-xs hover:underline">
                  Set Reminder
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">4</div>
            <div className="text-gray-400 text-xs">This Week</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">12</div>
            <div className="text-gray-400 text-xs">This Month</div>
          </div>
        </div>
      </div>

      {/* Add to Calendar Button */}
      <div className="mt-6">
        <button className="w-full py-3 glass rounded-lg text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
          <Calendar className="h-4 w-4" />
          <span>Add All to Calendar</span>
        </button>
      </div>
    </div>
  )
}