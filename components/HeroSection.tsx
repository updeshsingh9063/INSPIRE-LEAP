"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, CheckCircle, Users, Award, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"
import HeroScene from "./HeroScene"
import { useState, useRef } from "react"

const stats = [
  { value: "50K+", label: "Students Trained", icon: Users },
  { value: "95%", label: "Placement Rate", icon: Briefcase },
  { value: "500+", label: "Hiring Partners", icon: Award },
  { value: "4.8", label: "Google Rating", icon: CheckCircle },
]

const features = [
  "Industry Expert Mentors",
  "Project-Based Learning",
  "Placement Assistance",
  "Wipro Certification",
  "Live Interactive Sessions",
  "Lifetime Access",
]

export default function HeroSection() {
  const [playingVideo, setPlayingVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    setPlayingVideo(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const stopVideo = () => {
    setPlayingVideo(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <HeroScene />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-8"
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-300">
                  Wipro Partner Program
                </span>
              </motion.div>
              
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
              >
                <span className="block text-white">Transform Your</span>
                <span className="gradient-text">Career with</span>
                <span className="gradient-text-secondary">Future Skills</span>
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-400 mb-8 max-w-2xl"
              >
                Join India's most premium EdTech platform offering industry-relevant 
                courses, guaranteed internships, and placement opportunities with 
                top tech companies.
              </motion.p>
              
              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-2 gap-3 mb-8"
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-lg font-semibold text-white shadow-2xl shadow-primary/30 flex items-center space-x-2"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => playVideo()}
                  className="px-8 py-4 glass rounded-xl text-lg font-semibold text-white flex items-center space-x-2"
                >
                  <Play className="h-5 w-5" />
                  <span>Watch Demo</span>
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Right Content - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={cn(
                        "glass p-6 rounded-2xl border border-white/10",
                        "hover:border-primary/30 transition-all duration-300"
                      )}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-3xl font-bold text-white">
                          {stat.value}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </motion.div>
                  )
                })}
              </div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="glass p-6 rounded-2xl border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  Trusted by Industry Leaders
                </h3>
                <div className="flex items-center justify-between">
                  {["Wipro", "TCS", "Infosys", "Accenture", "Amazon"].map((company, index) => (
                    <motion.div
                      key={company}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                    >
                      {company}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Video Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="relative overflow-hidden rounded-2xl glass border border-white/10"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative">
                  {playingVideo ? (
                    <video
                      ref={videoRef}
                      src="/intro-video.mp4"
                      className="w-full h-full object-cover"
                      controls
                      onEnded={() => stopVideo()}
                    />
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => playVideo()}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50" />
                        <div className="relative bg-gradient-to-br from-primary to-secondary p-6 rounded-full">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </motion.button>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-400">
                    Watch how our students transformed their careers
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-500">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-gray-500 rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}