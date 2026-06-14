"use client";

import { motion } from "framer-motion";
import { Rocket, Zap, Star, Award, CheckCircle, Users, Clock, Target, ArrowRight, Shield, BookOpen } from "lucide-react";
import { useState, useMemo } from "react";

const benefits = [
  {
    icon: CheckCircle,
    title: "95% Placement Rate",
    description: "Within 6 months of course completion",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "Industry Certifications",
    description: "From top tech companies",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Users,
    title: "1:1 Mentorship",
    description: "From industry experts",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Job Guarantee",
    description: "100% placement assurance",
    color: "from-purple-500 to-pink-500",
  },
];

const enrollmentSteps = [
  {
    step: "01",
    title: "Choose Your Path",
    description: "Select from 50+ industry-relevant courses",
    icon: Target,
    color: "from-primary to-secondary",
  },
  {
    step: "02",
    title: "Enroll & Onboard",
    description: "Complete registration and attend orientation",
    icon: CheckCircle,
    color: "from-secondary to-accent",
  },
  {
    step: "03",
    title: "Learn & Build",
    description: "Master skills through hands-on projects",
    icon: BookOpen,
    color: "from-accent to-primary",
  },
  {
    step: "04",
    title: "Get Placed",
    description: "Interview with top companies and launch career",
    icon: Rocket,
    color: "from-primary to-accent",
  },
];

export default function FinalCTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Generate particle data once to avoid hydration mismatch
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: (i * 13) % 100,
      top: (i * 19) % 100,
      duration: 3 + (i % 2),
      delay: (i * 0.15) % 2,
    }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, you would submit to your backend
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="relative py-12 md:py-24 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated background with particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-3xl" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
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
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-50 animate-pulse" />
              <div className="relative p-6 rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-primary/30">
                <Rocket className="w-12 h-12 text-primary mx-auto" />
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent">
              Launch Your Tech Career Today
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join 50,000+ students who transformed their careers with Inspire Leap. 
            Get industry-ready skills, guaranteed placements, and mentorship from top professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => window.location.href = '/courses'}
              className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                Enroll Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>

            <button
              onClick={() => window.location.href = 'https://rzp.io/rzp/9tayaBb'}
              className="px-8 py-4 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 font-bold text-lg hover:border-primary/30 transition-all duration-300"
            >
              Book Free Consultation
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-sm text-gray-400">Students Trained</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-sm text-gray-400">Placement Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                ₹12L
              </div>
              <div className="text-sm text-gray-400">Avg. Package</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                200+
              </div>
              <div className="text-sm text-gray-400">Expert Mentors</div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{ background: `linear-gradient(to bottom right, var(--color-primary), var(--color-secondary))` }}
              />
              <div className="relative bg-white shadow-xl border border-gray-100 rounded-2xl p-5 md:p-6 text-center group-hover:border-primary/30 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</div>
                <div className="text-sm text-gray-600">{benefit.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enrollment Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white shadow-xl border border-gray-100 rounded-3xl p-5 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Simple 4-Step Enrollment
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From registration to placement - we guide you every step of the way
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {enrollmentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connecting lines */}
                  {index < enrollmentSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transform translate-x-1/2" />
                  )}
                  
                  <div className="relative bg-gray-50 shadow-sm border border-gray-100 rounded-2xl p-5 md:p-6 text-center group hover:border-primary/30 transition-all duration-300">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${step.color} mb-4`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{step.step}</div>
                    <div className="text-lg font-bold text-gray-900 mb-2">{step.title}</div>
                    <div className="text-sm text-gray-600">{step.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Email Capture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 backdrop-blur-sm border border-primary/30 rounded-3xl p-6 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Get Free Career Guide
                  </span>
                </h2>
                <p className="text-gray-300 mb-6">
                  Download our comprehensive career guide with industry insights, 
                  salary trends, and step-by-step roadmap to becoming a tech professional.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-gray-300">Industry Salary Report 2024</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-gray-300">Top 50 In-Demand Skills</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-gray-300">Interview Preparation Kit</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Enter your email to download
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary font-bold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50"
                  >
                    {submitted ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      "Download Free Guide"
                    )}
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our Terms and Privacy Policy
                  </p>
                </form>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Urgency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-5 md:gap-6 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-accent/10 via-accent/5 to-primary/10 border border-accent/30 max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-accent animate-pulse" />
              <span className="text-lg font-bold text-white">Limited Time Offer</span>
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Enroll Today & Get 40% Scholarship
                </span>
              </h3>
              <p className="text-gray-300">
                Offer ends in <span className="font-bold text-accent">48 hours</span>. 
                Secure your spot now and save ₹50,000+ on course fees.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.location.href = 'https://rzp.io/rzp/9tayaBb'}
                className="group relative px-8 py-3 rounded-xl bg-gradient-to-r from-accent to-primary font-bold hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Claim Scholarship
                  <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </button>

              <button
                onClick={() => window.location.href = 'tel:+918019866332'}
                className="px-6 py-3 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 font-bold hover:border-accent/30 transition-all duration-300"
              >
                Talk to Advisor
              </button>
            </div>
            
            <div className="text-sm text-gray-500">
              <span className="text-accent">✓</span> Limited to first 100 enrollments
              <span className="mx-4">•</span>
              <span className="text-accent">✓</span> Includes all course materials
              <span className="mx-4">•</span>
              <span className="text-accent">✓</span> No hidden charges
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}