"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Star, TrendingUp, Globe, Shield, Zap, BookOpen, Users, Target, Briefcase } from "lucide-react";
import { useState, useMemo } from "react";
import Image from "next/image";

const certifications = [
  {
    id: 1,
    title: "Wipro Certified Professional",
    issuer: "Wipro Technologies",
    level: "Advanced",
    duration: "6 Months",
    value: "Industry Standard",
    image: "/api/placeholder/160/160",
    color: "from-blue-500 to-cyan-500",
    skills: ["Enterprise Solutions", "Cloud Architecture", "DevOps"],
    benefits: [
      "Guaranteed Wipro Interviews",
      "Industry Recognition",
      "Priority Placement",
    ],
  },
  {
    id: 2,
    title: "Microsoft Azure Expert",
    issuer: "Microsoft",
    level: "Expert",
    duration: "4 Months",
    value: "Global Recognition",
    image: "/api/placeholder/160/160",
    color: "from-cyan-500 to-emerald-500",
    skills: ["Cloud Computing", "AI Services", "Data Analytics"],
    benefits: [
      "Microsoft Partner Network",
      "Azure Credits",
      "Certification Badge",
    ],
  },
  {
    id: 3,
    title: "Google Cloud Professional",
    issuer: "Google Cloud",
    level: "Professional",
    duration: "5 Months",
    value: "Top Tier",
    image: "/api/placeholder/160/160",
    color: "from-emerald-500 to-green-500",
    skills: ["Machine Learning", "Big Data", "Kubernetes"],
    benefits: [
      "Google Cloud Credits",
      "Career Services",
      "Global Community",
    ],
  },
  {
    id: 4,
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    level: "Associate",
    duration: "3 Months",
    value: "High Demand",
    image: "/api/placeholder/160/160",
    color: "from-green-500 to-teal-500",
    skills: ["Cloud Infrastructure", "Security", "Scalability"],
    benefits: [
      "AWS Certification",
      "Job Board Access",
      "Technical Support",
    ],
  },
  {
    id: 5,
    title: "IBM AI Engineering",
    issuer: "IBM",
    level: "Professional",
    duration: "6 Months",
    value: "Cutting Edge",
    image: "/api/placeholder/160/160",
    color: "from-teal-500 to-blue-500",
    skills: ["Artificial Intelligence", "Deep Learning", "NLP"],
    benefits: [
      "IBM Badges",
      "Research Access",
      "Industry Projects",
    ],
  },
  {
    id: 6,
    title: "Salesforce Administrator",
    issuer: "Salesforce",
    level: "Administrator",
    duration: "4 Months",
    value: "Enterprise Ready",
    image: "/api/placeholder/160/160",
    color: "from-blue-500 to-purple-500",
    skills: ["CRM Management", "Automation", "Business Analysis"],
    benefits: [
      "Salesforce Trailhead",
      "Admin Certification",
      "Partner Network",
    ],
  },
];

const certificationStats = [
  { icon: Award, value: "50+", label: "Certifications", color: "from-primary to-secondary" },
  { icon: CheckCircle, value: "95%", label: "Pass Rate", color: "from-secondary to-accent" },
  { icon: TrendingUp, value: "40%", label: "Salary Boost", color: "from-accent to-primary" },
  { icon: Globe, value: "Global", label: "Recognition", color: "from-primary to-accent" },
];

export default function CertificationsSection() {
  const [activeCert, setActiveCert] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const currentCert = certifications.find(cert => cert.id === activeCert) || certifications[0];

  // Generate particle data once to avoid hydration mismatch
  const particles = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: (i * 19) % 100,
      top: (i * 23) % 100,
      rotate: (i * 7) % 60 - 30,
      duration: 3 + (i % 2),
      delay: (i * 0.2) % 2,
    }));
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-orange-500/10 to-transparent rounded-full blur-3xl" />
        
        {/* Floating certificates */}
        <div className="absolute inset-0 opacity-5">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-32 h-24 border-2 border-amber-500/30 rounded-lg"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                rotate: `${particle.rotate}deg`,
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [
                  `${particle.rotate}deg`,
                  `${particle.rotate + 5}deg`,
                  `${particle.rotate}deg`,
                ],
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-white/10 mb-6">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-white/80">Industry Certifications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 via-white to-orange-400 bg-clip-text text-transparent">
              Validate Your Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Earn industry-recognized certifications from top technology companies. 
            Boost your career prospects and validate your skills with credentials that matter.
          </p>
        </motion.div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {certificationStats.map((stat, index) => (
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

        {/* View Mode Toggle */}
        <div className="flex justify-end mb-8">
          <div className="inline-flex rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2 rounded-lg transition-all ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-amber-500 to-orange-500"
                  : "hover:bg-white/5"
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-2 rounded-lg transition-all ${
                viewMode === "list"
                  ? "bg-gradient-to-r from-amber-500 to-orange-500"
                  : "hover:bg-white/5"
              }`}
            >
              List
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Certifications Grid/List */}
          <div className="lg:col-span-2">
            {viewMode === "grid" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => {
                  const isActive = cert.id === activeCert;

                  return (
                    <motion.button
                      key={cert.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setActiveCert(cert.id)}
                      className={`relative group overflow-hidden rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-orange-500/10 border-amber-500/30 shadow-lg shadow-amber-500/20'
                          : 'bg-gradient-to-br from-gray-900/30 to-black/30 border-white/10 hover:border-amber-500/20 hover:bg-gray-900/50'
                      }`}
                    >
                      {/* Glow effect */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-br ${cert.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                      
                      {/* Content */}
                      <div className="relative p-6">
                        {/* Certificate badge */}
                        <div className="relative mb-4">
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cert.color} p-0.5 mx-auto`}>
                            <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                              <Award className="w-10 h-10 text-amber-400" />
                            </div>
                          </div>
                          <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 border-2 border-gray-900" />
                        </div>

                        {/* Details */}
                        <div className="text-center">
                          <h3 className="font-bold text-white mb-2 line-clamp-2">{cert.title}</h3>
                          <div className="text-sm text-gray-400 mb-3">{cert.issuer}</div>
                          
                          {/* Level and duration */}
                          <div className="flex items-center justify-center gap-4 mb-3">
                            <div className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300">
                              {cert.level}
                            </div>
                            <div className="text-xs text-gray-500">{cert.duration}</div>
                          </div>

                          {/* Value tag */}
                          <div className="text-xs font-semibold text-amber-400">
                            {cert.value}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-4">
                {certifications.map((cert, index) => {
                  const isActive = cert.id === activeCert;

                  return (
                    <motion.button
                      key={cert.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setActiveCert(cert.id)}
                      className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-orange-500/10 border-amber-500/30 shadow-lg shadow-amber-500/20'
                          : 'bg-gradient-to-br from-gray-900/30 to-black/30 border-white/10 hover:border-amber-500/20 hover:bg-gray-900/50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} flex-shrink-0`}>
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-1">{cert.title}</h3>
                          <div className="text-sm text-gray-400">{cert.issuer}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-amber-400 mb-1">{cert.level}</div>
                          <div className="text-xs text-gray-500">{cert.duration}</div>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Active Certification Details */}
          <div className="lg:col-span-1">
            <motion.div
              key={currentCert.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="h-full"
            >
              <div className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-8 h-full">
                {/* Certificate header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${currentCert.color} mb-4`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{currentCert.title}</h3>
                  <div className="text-lg text-amber-400 font-semibold">{currentCert.issuer}</div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-xl font-bold text-white mb-1">{currentCert.level}</div>
                    <div className="text-xs text-gray-400">Level</div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-xl font-bold text-white mb-1">{currentCert.duration}</div>
                    <div className="text-xs text-gray-400">Duration</div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Skills You'll Master</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentCert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-amber-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                  <ul className="space-y-3">
                    {currentCert.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Value Proposition */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                      <TrendingUp className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Career Impact</div>
                      <div className="text-sm text-gray-400">Average 40% salary increase</div>
                    </div>
                  </div>
                  
                  <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Certification Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  How to Earn Your Certification
                </span>
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A straightforward process to validate your skills and boost your career
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-4">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Complete Coursework</div>
                <div className="text-sm text-gray-400">
                  Master all modules and complete hands-on projects
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 mb-4">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Pass Assessments</div>
                <div className="text-sm text-gray-400">
                  Clear all quizzes, assignments, and final exams
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 mb-4">
                  <Shield className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Get Certified</div>
                <div className="text-sm text-gray-400">
                  Receive digital badge and official certificate
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-teal-500/20 mb-4">
                  <Briefcase className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-lg font-semibold text-white mb-2">Advance Career</div>
                <div className="text-sm text-gray-400">
                  Access exclusive job opportunities and networks
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-red-500/10 border border-orange-500/30">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Boost Your Career with Certifications
                </span>
              </h3>
              <p className="text-gray-300">
                Stand out in the job market with industry-recognized credentials.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
                View All Certifications
              </button>
              <button className="px-6 py-3 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 font-semibold hover:border-orange-500/30 transition-all duration-300">
                Talk to Advisor
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}