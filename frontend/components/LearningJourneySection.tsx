"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Target, Briefcase, Award, Zap, CheckCircle, Rocket, Clock, Star } from "lucide-react";
import { useState } from "react";

const journeySteps = [
  {
    id: 1,
    title: "Enrollment & Onboarding",
    description: "Complete registration, attend orientation, and set up your learning environment",
    icon: BookOpen,
    duration: "1-2 Days",
    status: "completed",
    color: "from-blue-500 to-cyan-500",
    milestones: [
      "Account Setup",
      "Orientation Session",
      "Learning Path Selection",
      "Tool Installation",
    ],
  },
  {
    id: 2,
    title: "Foundation Building",
    description: "Master core concepts and fundamentals through interactive lessons",
    icon: Target,
    duration: "2-4 Weeks",
    status: "completed",
    color: "from-cyan-500 to-emerald-500",
    milestones: [
      "Core Concepts",
      "Hands-on Exercises",
      "Weekly Assessments",
      "Doubt Resolution",
    ],
  },
  {
    id: 3,
    title: "Skill Development",
    description: "Advanced topics and specialized skills through project-based learning",
    icon: Zap,
    duration: "4-8 Weeks",
    status: "active",
    color: "from-emerald-500 to-green-500",
    milestones: [
      "Advanced Modules",
      "Real-world Projects",
      "Code Reviews",
      "Peer Collaboration",
    ],
  },
  {
    id: 4,
    title: "Portfolio Building",
    description: "Create industry-ready projects and build a standout portfolio",
    icon: Briefcase,
    duration: "2-4 Weeks",
    status: "upcoming",
    color: "from-green-500 to-teal-500",
    milestones: [
      "Capstone Project",
      "Portfolio Website",
      "GitHub Optimization",
      "Project Documentation",
    ],
  },
  {
    id: 5,
    title: "Interview Preparation",
    description: "Mock interviews, resume building, and technical interview practice",
    icon: Users,
    duration: "2-3 Weeks",
    status: "upcoming",
    color: "from-teal-500 to-blue-500",
    milestones: [
      "Resume Workshop",
      "Mock Interviews",
      "Technical Rounds",
      "HR Preparation",
    ],
  },
  {
    id: 6,
    title: "Placement & Career Launch",
    description: "Interview opportunities with partner companies and job placement",
    icon: Rocket,
    duration: "1-2 Weeks",
    status: "upcoming",
    color: "from-blue-500 to-purple-500",
    milestones: [
      "Company Interviews",
      "Offer Negotiation",
      "Onboarding Support",
      "Career Guidance",
    ],
  },
];

const metrics = [
  { icon: Clock, value: "450+", label: "Learning Hours", description: "Comprehensive curriculum" },
  { icon: BookOpen, value: "50+", label: "Projects", description: "Hands-on experience" },
  { icon: Users, value: "200+", label: "Mentor Sessions", description: "Personalized guidance" },
  { icon: CheckCircle, value: "95%", label: "Completion Rate", description: "Student success" },
];

export default function LearningJourneySection() {
  const [activeStep, setActiveStep] = useState(3); // Skill Development is active

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-pulse" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-l from-teal-500/10 to-transparent rounded-full blur-3xl" />
        
        {/* Circuit pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 50 100 M 0 50 L 100 50" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-white/10 mb-6">
            <Rocket className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-white/80">Learning Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-white to-teal-400 bg-clip-text text-transparent">
              Your Path to Success
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A structured, step-by-step journey from beginner to industry-ready professional. 
            Each phase builds upon the previous, ensuring comprehensive skill development.
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mb-4">
                <metric.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-white mb-1">{metric.label}</div>
              <div className="text-sm text-gray-400">{metric.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-purple-500" />
          
          {/* Journey steps */}
          <div className="space-y-12">
            {journeySteps.map((step, index) => {
              const isLeft = index % 2 === 0;
              const isActive = step.id === activeStep;
              const isCompleted = step.status === "completed";
              const isUpcoming = step.status === "upcoming";

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-8 h-8 rounded-full border-4 ${
                      isActive 
                        ? 'border-emerald-500 bg-emerald-500/20 animate-pulse' 
                        : isCompleted
                        ? 'border-green-500 bg-green-500/20'
                        : 'border-gray-600 bg-gray-900'
                    } flex items-center justify-center`}>
                      {isCompleted ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : isActive ? (
                        <Zap className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Clock className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Step card */}
                  <div className={`flex-1 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'} ml-12 md:ml-0`}>
                    <button
                      onClick={() => setActiveStep(step.id)}
                      className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-teal-500/10 border-emerald-500/30 shadow-lg shadow-emerald-500/20'
                          : isCompleted
                          ? 'bg-gradient-to-br from-gray-900/30 to-black/30 border-green-500/20 hover:border-green-500/30'
                          : 'bg-gradient-to-br from-gray-900/30 to-black/30 border-white/10 hover:border-teal-500/20'
                      }`}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} flex-shrink-0`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-white">{step.title}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              isActive
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                : isCompleted
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                : 'bg-gray-800 text-gray-400 border border-gray-700'
                            }`}>
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-gray-300 mb-4">{step.description}</p>
                          
                          {/* Milestones */}
                          <div className="grid grid-cols-2 gap-2">
                            {step.milestones.map((milestone, i) => (
                              <div key={i} className="flex items-center gap-2">
                                {isCompleted ? (
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                ) : isActive && i < 2 ? (
                                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                ) : (
                                  <div className="w-4 h-4 rounded-full border border-gray-600 flex-shrink-0" />
                                )}
                                <span className={`text-sm ${
                                  (isCompleted || (isActive && i < 2)) 
                                    ? 'text-white' 
                                    : 'text-gray-400'
                                }`}>
                                  {milestone}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Active Step Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {journeySteps
            .filter(step => step.id === activeStep)
            .map(step => (
              <div key={step.id} className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color}`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <div className="text-emerald-400 font-medium">{step.duration}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{step.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">What You'll Achieve</h4>
                        <ul className="space-y-3">
                          {step.milestones.map((milestone, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full ${
                                step.status === 'completed' || (step.status === 'active' && i < 2)
                                  ? 'bg-emerald-500'
                                  : 'bg-gray-600'
                              }`} />
                              <span className={`${
                                step.status === 'completed' || (step.status === 'active' && i < 2)
                                  ? 'text-white'
                                  : 'text-gray-400'
                              }`}>
                                {milestone}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Support System</h4>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-emerald-500/20">
                              <Users className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                              <div className="font-medium text-white">Dedicated Mentor</div>
                              <div className="text-sm text-gray-400">1:1 guidance throughout</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-emerald-500/20">
                              <BookOpen className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                              <div className="font-medium text-white">Live Sessions</div>
                              <div className="text-sm text-gray-400">Interactive workshops</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-emerald-500/20">
                              <Star className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                              <div className="font-medium text-white">Peer Community</div>
                              <div className="text-sm text-gray-400">Collaborative learning</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/3">
                    <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 rounded-2xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Progress Tracker</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Current Phase</span>
                            <span>{step.title}</span>
                          </div>
                          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(step.id / journeySteps.length) * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1 }}
                              className={`h-full bg-gradient-to-r ${step.color}`}
                            />
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm text-gray-400 mb-1">
                            <span>Time Remaining</span>
                            <span>{step.duration}</span>
                          </div>
                          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: step.status === 'completed' ? '100%' : '50%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.3 }}
                              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
                            />
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-white/10">
                          <div className="text-sm text-gray-400 mb-2">Next Phase</div>
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-teal-500/20">
                              {(() => {
                                const nextStep = journeySteps.find(s => s.id === step.id + 1);
                                if (!nextStep?.icon) return null;
                                const NextIcon = nextStep.icon;
                                return <NextIcon className="w-5 h-5 text-teal-400" />;
                              })()}
                            </div>
                            <div>
                              <div className="font-medium text-white">
                                {journeySteps.find(s => s.id === step.id + 1)?.title || "Journey Complete"}
                              </div>
                              <div className="text-sm text-gray-400">
                                {journeySteps.find(s => s.id === step.id + 1)?.duration || "Career launched"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-blue-500/10 border border-teal-500/30">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Start Your Journey Today
                </span>
              </h3>
              <p className="text-gray-300">
                Join thousands of students on their path to career transformation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.location.href = '/courses'}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 font-semibold hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300"
              >
                Enroll Now
              </button>
              <button
                onClick={() => window.location.href = '/courses'}
                className="px-6 py-3 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 font-semibold hover:border-teal-500/30 transition-all duration-300"
              >
                View Curriculum
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}