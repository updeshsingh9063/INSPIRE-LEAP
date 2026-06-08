"use client";

import { motion } from "framer-motion";
import { Building2, Handshake, Globe, Target, Users, Award, Shield, Zap } from "lucide-react";
import Image from "next/image";

const partners = [
  { name: "Wipro", logo: "/api/placeholder/160/80", type: "Strategic Partner", description: "Official Wipro Partner Program" },
  { name: "Microsoft", logo: "/api/placeholder/160/80", type: "Technology Partner", description: "Azure Cloud & AI Solutions" },
  { name: "Google", logo: "/api/placeholder/160/80", type: "Cloud Partner", description: "Google Cloud Platform" },
  { name: "Amazon", logo: "/api/placeholder/160/80", type: "AWS Partner", description: "Amazon Web Services" },
  { name: "IBM", logo: "/api/placeholder/160/80", type: "AI Partner", description: "IBM Watson & AI Solutions" },
  { name: "Salesforce", logo: "/api/placeholder/160/80", type: "CRM Partner", description: "Salesforce Ecosystem" },
  { name: "Oracle", logo: "/api/placeholder/160/80", type: "Database Partner", description: "Oracle Cloud Infrastructure" },
  { name: "SAP", logo: "/api/placeholder/160/80", type: "ERP Partner", description: "SAP Business Solutions" },
];

const wiproBenefits = [
  {
    icon: Target,
    title: "Industry-Ready Curriculum",
    description: "Curriculum designed in collaboration with Wipro's industry experts",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Guaranteed Interviews",
    description: "Direct interview opportunities with Wipro and partner companies",
    color: "from-cyan-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "Wipro Certification",
    description: "Industry-recognized certification upon course completion",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Zap,
    title: "Fast-Track Placements",
    description: "Priority placement in Wipro's hiring pipeline",
    color: "from-green-500 to-teal-500",
  },
];

const industryCollaborations = [
  {
    category: "Technology",
    companies: ["Microsoft", "Google", "Amazon", "IBM"],
    focus: "Cloud, AI, and Emerging Technologies",
    icon: Globe,
  },
  {
    category: "Consulting",
    companies: ["Accenture", "Deloitte", "PwC", "EY"],
    focus: "Digital Transformation & Strategy",
    icon: Building2,
  },
  {
    category: "Product",
    companies: ["Adobe", "Salesforce", "SAP", "Oracle"],
    focus: "Enterprise Software & Solutions",
    icon: Target,
  },
  {
    category: "Startups",
    companies: ["500+ Startup Network"],
    focus: "Innovation & Entrepreneurship",
    icon: Zap,
  },
];

export default function PartnerEcosystemSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-cyan-500/10 to-transparent rounded-full blur-3xl" />
        
        {/* Network lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-white/10 mb-6">
            <Handshake className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white/80">Partner Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-white to-cyan-400 bg-clip-text text-transparent">
              Powered by Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our strategic partnerships with global technology leaders ensure industry-relevant 
            curriculum, guaranteed interviews, and direct placement opportunities.
          </p>
        </motion.div>

        {/* Wipro Partnership Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Wipro Logo and Badge */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                        Wipro
                      </div>
                      <div className="text-sm text-gray-400">Official Partner Program</div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-xs font-semibold">
                    Strategic Partner
                  </div>
                </div>
              </div>

              {/* Partnership Details */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Wipro Partner Program
                  </span>
                </h3>
                <p className="text-gray-300 mb-6">
                  As an official Wipro Partner Program, Inspire Leap provides direct access to 
                  Wipro's hiring pipeline, industry-designed curriculum, and guaranteed interview 
                  opportunities. Our students receive priority consideration for roles at Wipro 
                  and its client organizations worldwide.
                </p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {wiproBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${benefit.color}`}>
                        <benefit.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white mb-1">{benefit.title}</div>
                        <div className="text-sm text-gray-400">{benefit.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Global Network
              </span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Trusted by leading technology companies and organizations worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center group-hover:border-blue-500/30 transition-all duration-300">
                  {/* Logo placeholder */}
                  <div className="h-20 mb-4 flex items-center justify-center">
                    <div className="w-32 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-gray-300">{partner.name}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm font-semibold text-white mb-1">{partner.name}</div>
                  <div className="text-xs text-blue-400 mb-2">{partner.type}</div>
                  <div className="text-xs text-gray-500">{partner.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Collaborations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Strategic Industry Collaborations
                </span>
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive partnerships across technology domains for holistic career development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industryCollaborations.map((collab, index) => (
                <motion.div
                  key={collab.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:border-cyan-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-emerald-500/20">
                        <collab.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div className="font-bold text-white">{collab.category}</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-gray-400 mb-2">Partner Companies</div>
                        <div className="text-sm text-white">
                          {collab.companies.map((company, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                              {company}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Focus Area</div>
                        <div className="text-sm text-cyan-300">{collab.focus}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-white">Industry-Ready Skills</div>
            </div>
            <p className="text-gray-300 text-sm">
              Curriculum designed in collaboration with industry partners to ensure 
              students acquire skills that are in high demand.
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
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-white">Guaranteed Opportunities</div>
            </div>
            <p className="text-gray-300 text-sm">
              Direct interview opportunities and priority consideration in partner 
              company hiring pipelines.
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
                <Award className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-white">Recognized Certifications</div>
            </div>
            <p className="text-gray-300 text-sm">
              Industry-recognized certifications that validate skills and enhance 
              career prospects globally.
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-emerald-500/10 border border-cyan-500/30">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Join Our Partner Network
                </span>
              </h3>
              <p className="text-gray-300">
                Become part of our growing ecosystem and access top talent from Inspire Leap.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                For Students
              </button>
              <button className="px-6 py-3 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 font-semibold hover:border-cyan-500/30 transition-all duration-300">
                For Companies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}