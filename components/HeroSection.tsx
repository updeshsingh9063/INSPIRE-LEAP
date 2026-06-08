"use client"

import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { ArrowRight, Play, CheckCircle, Users, Award, Briefcase, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import HeroScene from "./HeroScene"
import { useState, useRef } from "react"
import Image from "next/image"

const stats = [
  { value: "50K+", label: "Students Trained", icon: Users, color: "from-blue-500/20 to-indigo-500/20", border: "border-blue-500/20" },
  { value: "95%", label: "Placement Rate", icon: Briefcase, color: "from-green-500/20 to-emerald-500/20", border: "border-green-500/20" },
  { value: "500+", label: "Hiring Partners", icon: Award, color: "from-purple-500/20 to-pink-500/20", border: "border-purple-500/20" },
  { value: "4.8★", label: "Google Rating", icon: CheckCircle, color: "from-yellow-500/20 to-orange-500/20", border: "border-yellow-500/20" },
]

const features = [
  "Industry Expert Mentors",
  "Project-Based Learning",
  "Placement Assistance",
  "Wipro Certification",
  "Live Interactive Sessions",
  "Lifetime Access",
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const statVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

export default function HeroSection() {
  const [playingVideo, setPlayingVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const playVideo = () => {
    setPlayingVideo(true);
    if (videoRef.current) videoRef.current.play();
  };

  const stopVideo = () => {
    setPlayingVideo(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-16 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* 3D Scene */}
      <HeroScene />

      <motion.div
        style={{ y, opacity }}
        className="container relative z-10 mx-auto px-4 md:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-8 border border-primary/20"
                >
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 bg-primary rounded-full"
                  />
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-gray-300">
                    Wipro Partner Program
                  </span>
                </motion.div>
              </motion.div>

              {/* Main Headline */}
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.05]">
                  <motion.span
                    className="block text-white"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    Transform Your
                  </motion.span>
                  <motion.span
                    className="gradient-text-animated block"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.45 }}
                  >
                    Career with
                  </motion.span>
                  <motion.span
                    className="gradient-text-secondary block"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    Future Skills
                  </motion.span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed"
              >
                Join India&apos;s most premium EdTech platform offering industry-relevant
                courses, guaranteed internships, and placement opportunities with
                top tech companies.
              </motion.p>

              {/* Features List */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center space-x-2"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    </motion.div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99,102,241,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-lg font-semibold text-white shadow-2xl shadow-primary/30 flex items-center space-x-2"
                >
                  <span>Explore Programs</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => playVideo()}
                  className="px-8 py-4 glass rounded-xl text-lg font-semibold text-white flex items-center space-x-2 border border-white/10"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Play className="h-5 w-5 text-primary" />
                  </motion.div>
                  <span>Watch Demo</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={statVariants}
                      initial="hidden"
                      animate="show"
                      whileHover={{ scale: 1.06, y: -6 }}
                      className={cn(
                        "glass p-4 md:p-6 rounded-2xl border",
                        stat.border,
                        `bg-gradient-to-br ${stat.color}`,
                        "hover:border-primary/40 transition-all duration-300 cursor-default"
                      )}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                          className="p-2 bg-primary/10 rounded-lg"
                        >
                          <Icon className="h-5 w-5 text-primary" />
                        </motion.div>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 + index * 0.15 }}
                          className="text-3xl font-bold text-white"
                        >
                          {stat.value}
                        </motion.span>
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
                transition={{ duration: 0.6, delay: 1.0 }}
                className="glass p-4 md:p-6 rounded-2xl border border-white/10 animate-border-glow"
              >
                <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-widest">
                  Trusted by Industry Leaders
                </h3>
                <div className="flex items-center justify-between gap-3">
                  {[
                    { name: "Wipro",    logo: "/logos/wipro.webp" },
                    { name: "TCS",      logo: "/logos/tcs.png" },
                    { name: "Infosys",  logo: "/logos/infosys.webp" },
                    { name: "Amazon",   logo: "/logos/amazon.webp" },
                    { name: "Google",   logo: "/logos/google.webp" },
                  ].map((company, index) => (
                    <motion.div
                      key={company.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                      whileHover={{ scale: 1.15 }}
                      className="relative h-6 flex-1 flex items-center justify-center"
                    >
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="object-contain brightness-50 hover:brightness-100 transition-all duration-300"
                        sizes="60px"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Video Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl glass border border-white/10"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative">
                  {playingVideo ? (
                    <video
                      ref={videoRef}
                      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
                      className="w-full h-full object-cover"
                      controls
                      onEnded={() => stopVideo()}
                    />
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => playVideo()}
                      className="absolute inset-0 flex items-center justify-center group"
                    >
                      {/* Ripple effect */}
                      <div className="relative">
                        <motion.div
                          animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="absolute inset-0 rounded-full bg-primary"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.5], opacity: [0.2, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                          className="absolute inset-0 rounded-full bg-primary"
                        />
                        <div className="relative bg-gradient-to-br from-primary to-secondary p-6 rounded-full shadow-2xl shadow-primary/40">
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
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full mt-1.5"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}