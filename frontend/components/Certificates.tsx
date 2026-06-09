"use client"

import { motion } from "framer-motion"
import { Award, Download, Eye, Share2, CheckCircle, ExternalLink } from "lucide-react"

const certificates = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Inspire Leap - Wipro Partner Program",
    date: "Nov 15, 2024",
    level: "Advanced",
    credentialId: "IL-WP-FSWD-2024-001",
    icon: Award,
    color: "from-blue-500 to-cyan-500",
    verified: true,
    downloadUrl: "#",
    viewUrl: "#",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    issuer: "Inspire Leap - Wipro Partner Program",
    date: "Oct 28, 2024",
    level: "Intermediate",
    credentialId: "IL-WP-DSF-2024-002",
    icon: Award,
    color: "from-purple-500 to-pink-500",
    verified: true,
    downloadUrl: "#",
    viewUrl: "#",
    skills: ["Python", "Pandas", "NumPy", "ML Basics"],
  },
  {
    id: 3,
    title: "UI/UX Design Mastery",
    issuer: "Inspire Leap - Wipro Partner Program",
    date: "Sep 10, 2024",
    level: "Advanced",
    credentialId: "IL-WP-UXDM-2024-003",
    icon: Award,
    color: "from-orange-500 to-red-500",
    verified: true,
    downloadUrl: "#",
    viewUrl: "#",
    skills: ["Figma", "Prototyping", "User Research", "Design Systems"],
  },
  {
    id: 4,
    title: "Placement Preparation Program",
    issuer: "Wipro TalentNext",
    date: "Aug 22, 2024",
    level: "Professional",
    credentialId: "WIPRO-TN-PPP-2024-004",
    icon: Award,
    color: "from-green-500 to-emerald-500",
    verified: true,
    downloadUrl: "#",
    viewUrl: "#",
    skills: ["Interview Skills", "Resume Building", "Aptitude", "Communication"],
  },
]

const pendingCertificates = [
  {
    id: 5,
    title: "Cloud Computing with AWS",
    issuer: "Inspire Leap - Wipro Partner Program",
    progress: 85,
    estimatedCompletion: "Dec 20, 2024",
    icon: Award,
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 6,
    title: "DevOps Engineering",
    issuer: "Inspire Leap - Wipro Partner Program",
    progress: 60,
    estimatedCompletion: "Jan 10, 2025",
    icon: Award,
    color: "from-amber-500 to-orange-500",
  },
]

export default function Certificates() {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">My Certificates</h3>
          <p className="text-gray-400 text-sm">Industry-recognized credentials and achievements</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-primary to-primary/80 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity">
          View All
        </button>
      </div>

      {/* Earned Certificates */}
      <div className="space-y-4 mb-8">
        <h4 className="text-sm font-semibold text-white flex items-center">
          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
          Earned Certificates
        </h4>
        
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-xl border border-white/10 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${cert.color}`}>
                  <cert.icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-white">{cert.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      cert.level === "Advanced" ? "bg-blue-500/20 text-blue-400" :
                      cert.level === "Intermediate" ? "bg-purple-500/20 text-purple-400" :
                      "bg-green-500/20 text-green-400"
                    }`}>
                      {cert.level}
                    </span>
                    {cert.verified && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 flex items-center">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                  
                  <div className="flex flex-wrap gap-2 text-xs mb-3">
                    <div className="text-gray-400">
                      Issued: <span className="text-white">{cert.date}</span>
                    </div>
                    <div className="text-gray-400">
                      ID: <span className="text-white">{cert.credentialId}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-full text-xs bg-white/5 text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-2">
                <button className="p-2 rounded-lg glass hover:bg-white/10 transition-colors group">
                  <Eye className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </button>
                <button className="p-2 rounded-lg glass hover:bg-white/10 transition-colors group">
                  <Download className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </button>
                <button className="p-2 rounded-lg glass hover:bg-white/10 transition-colors group">
                  <Share2 className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* In Progress Certificates */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-white">In Progress</h4>
        
        {pendingCertificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-xl border border-white/10"
          >
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${cert.color}`}>
                <cert.icon className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">{cert.title}</h4>
                  <span className="text-sm text-gray-400">{cert.progress}%</span>
                </div>
                
                <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>
                
                {/* Progress Bar */}
                <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${cert.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`absolute h-full bg-gradient-to-r ${cert.color} rounded-full`}
                  />
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Estimated completion: {cert.estimatedCompletion}</span>
                  <button className="text-primary hover:underline flex items-center">
                    Continue Learning
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Stats */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">4</div>
            <div className="text-gray-400 text-xs">Earned</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/5">
            <div className="text-lg font-bold text-white">2</div>
            <div className="text-gray-400 text-xs">In Progress</div>
          </div>
        </div>
      </div>

      {/* Add to LinkedIn */}
      <div className="mt-6">
        <button className="w-full py-3 glass rounded-lg text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
          <Share2 className="h-4 w-4" />
          <span>Add to LinkedIn Profile</span>
        </button>
      </div>
    </div>
  )
}