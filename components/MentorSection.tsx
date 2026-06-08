"use client";

import { motion } from "framer-motion";
import { Users, Award, Briefcase, MessageSquare, Star, Zap, Globe, Target, Share2 } from "lucide-react";
import { useState, useMemo } from "react";
import Image from "next/image";

const mentors = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    role: "AI Research Director",
    company: "Google AI",
    experience: "15+ years",
    expertise: ["Machine Learning", "Deep Learning", "Computer Vision"],
    rating: 4.9,
    students: 2500,
    image: "/api/placeholder/400/400",
    color: "from-blue-500 to-cyan-500",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    achievements: [
      "Published 50+ research papers",
      "Google Brain Team Lead",
      "NeurIPS Best Paper Award",
    ],
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "VP of Engineering",
    company: "Microsoft",
    experience: "20+ years",
    expertise: ["Cloud Architecture", "DevOps", "Scalable Systems"],
    rating: 4.8,
    students: 1800,
    image: "/api/placeholder/400/400",
    color: "from-cyan-500 to-emerald-500",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    achievements: [
      "Built Azure Core Services",
      "Microsoft Distinguished Engineer",
      "Patents in Cloud Computing",
    ],
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Product Director",
    company: "Amazon",
    experience: "12+ years",
    expertise: ["Product Strategy", "UX Research", "Growth Hacking"],
    rating: 4.9,
    students: 2200,
    image: "/api/placeholder/400/400",
    color: "from-emerald-500 to-green-500",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    achievements: [
      "Launched Amazon Prime Video",
      "Forbes 30 Under 30",
      "Product of the Year Award",
    ],
  },
  {
    id: 4,
    name: "Amit Singh",
    role: "CTO & Co-founder",
    company: "Unicorn Startup",
    experience: "10+ years",
    expertise: ["Startup Scaling", "Tech Leadership", "Fundraising"],
    rating: 4.7,
    students: 1500,
    image: "/api/placeholder/400/400",
    color: "from-green-500 to-teal-500",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    achievements: [
      "$100M Series C raised",
      "Exit to Fortune 500",
      "YC Alumni Mentor",
    ],
  },
  {
    id: 5,
    name: "Sneha Reddy",
    role: "UX Research Lead",
    company: "Adobe",
    experience: "8+ years",
    expertise: ["Design Systems", "User Research", "Prototyping"],
    rating: 4.8,
    students: 1200,
    image: "/api/placeholder/400/400",
    color: "from-teal-500 to-blue-500",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    achievements: [
      "Adobe Design Award Winner",
      "Design Thinking Evangelist",
      "Published Author",
    ],
  },
  {
    id: 6,
    name: "Vikram Mehta",
    role: "Data Science Manager",
    company: "IBM Watson",
    experience: "14+ years",
    expertise: ["Big Data", "Predictive Analytics", "AI Ethics"],
    rating: 4.6,
    students: 1900,
    image: "/api/placeholder/400/400",
    color: "from-blue-500 to-purple-500",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    achievements: [
      "IBM Master Inventor",
      "TEDx Speaker on AI Ethics",
      "Open Source Contributor",
    ],
  },
];

const mentorStats = [
  { icon: Users, value: "200+", label: "Industry Experts", color: "from-primary to-secondary" },
  { icon: Award, value: "15+", label: "Years Avg. Experience", color: "from-secondary to-accent" },
  { icon: Briefcase, value: "50K+", label: "Students Mentored", color: "from-accent to-primary" },
  { icon: Star, value: "4.8/5", label: "Average Rating", color: "from-primary to-accent" },
];

export default function MentorSection() {
  const [activeMentor, setActiveMentor] = useState(1);
  const [hoveredMentor, setHoveredMentor] = useState<number | null>(null);

  const currentMentor = mentors.find(mentor => mentor.id === activeMentor) || mentors[0];

  // Generate particle data once to avoid hydration mismatch
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: (i * 17) % 100,
      top: (i * 23) % 100,
      duration: 2 + (i % 3),
      delay: (i * 0.1) % 2,
    }));
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-pink-500/10 to-transparent rounded-full blur-3xl" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 opacity-10">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 mb-6">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white/80">Industry Mentors</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-white to-pink-400 bg-clip-text text-transparent">
              Learn from the Best
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get personalized guidance from industry experts working at top tech companies. 
            Our mentors bring real-world experience and insights to accelerate your learning journey.
          </p>
        </motion.div>

        {/* Mentor Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {mentorStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Mentor Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {mentors.map((mentor, index) => {
                const isActive = mentor.id === activeMentor;
                const isHovered = mentor.id === hoveredMentor;

                return (
                  <motion.button
                    key={mentor.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setActiveMentor(mentor.id)}
                    onMouseEnter={() => setHoveredMentor(mentor.id)}
                    onMouseLeave={() => setHoveredMentor(null)}
                    className={`relative group overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-pink-500/10 border-purple-500/30 shadow-lg shadow-purple-500/20'
                        : 'bg-gradient-to-br from-gray-900/30 to-black/30 border-white/10 hover:border-purple-500/20 hover:bg-gray-900/50'
                    }`}
                  >
                    {/* Glow effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-br ${mentor.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative p-6">
                      {/* Avatar */}
                      <div className="relative mb-4">
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${mentor.color} p-0.5 mx-auto`}>
                          <div className="w-full h-full rounded-full bg-gray-900" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 border-2 border-gray-900" />
                      </div>

                      {/* Details */}
                      <div className="text-center">
                        <h3 className="font-bold text-white mb-1">{mentor.name}</h3>
                        <div className="text-sm text-gray-400 mb-2">{mentor.role}</div>
                        <div className="text-xs text-purple-400 font-semibold mb-3">{mentor.company}</div>
                        
                        {/* Rating */}
                        <div className="flex items-center justify-center gap-1 mb-3">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-semibold">{mentor.rating}</span>
                          <span className="text-xs text-gray-500">({mentor.students})</span>
                        </div>

                        {/* Expertise tags */}
                        <div className="flex flex-wrap gap-1 justify-center">
                          {mentor.expertise.slice(0, 2).map((skill, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-300"
                            >
                              {skill}
                            </span>
                          ))}
                          {mentor.expertise.length > 2 && (
                            <span className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-400">
                              +{mentor.expertise.length - 2}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Hover overlay */}
                      {isHovered && !isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm flex items-center justify-center"
                        >
                          <div className="text-center">
                            <MessageSquare className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                            <div className="text-sm font-semibold text-white">View Profile</div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Active Mentor Details */}
          <div className="lg:col-span-1">
            <motion.div
              key={currentMentor.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="h-full"
            >
              <div className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 h-full">
                {/* Mentor header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${currentMentor.color} p-0.5 flex-shrink-0`}>
                    <div className="w-full h-full rounded-full bg-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{currentMentor.name}</h3>
                    <div className="text-sm text-gray-400">{currentMentor.role}</div>
                    <div className="text-xs text-purple-400 font-semibold">{currentMentor.company}</div>
                  </div>
                </div>

                {/* Experience and Rating */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">{currentMentor.experience}</div>
                    <div className="text-xs text-gray-400">Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-2xl font-bold text-white">{currentMentor.rating}</span>
                    </div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentMentor.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-3">
                    {currentMentor.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Award className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <a
                      href={currentMentor.social.linkedin}
                      className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 hover:border-blue-500/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Share2 className="w-5 h-5 text-blue-400" />
                    </a>
                    <a
                      href={currentMentor.social.twitter}
                      className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/20 hover:border-cyan-500/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Share2 className="w-5 h-5 text-cyan-400" />
                    </a>
                    <button className="ml-auto px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                      Book Session
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mentorship Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-white">Personalized Guidance</div>
            </div>
            <p className="text-gray-300 text-sm">
              One-on-one mentorship tailored to your career goals and learning pace.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-white">Industry Insights</div>
            </div>
            <p className="text-gray-300 text-sm">
              Real-world experience and insider knowledge from top tech professionals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-white">Career Acceleration</div>
            </div>
            <p className="text-gray-300 text-sm">
              Fast-track your career growth with expert advice and networking opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-white">Global Network</div>
            </div>
            <p className="text-gray-300 text-sm">
              Connect with mentors and peers from around the world in our exclusive community.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 border border-pink-500/30">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Get Personalized Mentorship
                </span>
              </h3>
              <p className="text-gray-300">
                Book one-on-one sessions with industry experts and accelerate your career growth.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300">
                Find Your Mentor
              </button>
              <button className="px-6 py-3 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 font-semibold hover:border-pink-500/30 transition-all duration-300">
                View All Mentors
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}