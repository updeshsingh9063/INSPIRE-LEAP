"use client";

import { motion } from "framer-motion";
import { Share2, Camera, Play, Mail, Phone, MapPin, ArrowRight, Heart, Shield, Award, Users, Globe } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  courses: [
    { label: "All Courses", href: "/courses" },
    { label: "Technology", href: "/courses/technology" },
    { label: "Business", href: "/courses/business" },
    { label: "Design", href: "/courses/design" },
    { label: "Data Science", href: "/courses/data-science" },
  ],
  resources: [
    { label: "Success Stories", href: "/success-stories" },
    { label: "Certifications", href: "/certifications" },
    { label: "Mentors", href: "/mentors" },
    { label: "Placements", href: "/placements" },
    { label: "Scholarships", href: "/scholarships" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Refund Policy", href: "/refund" },
    { label: "GDPR Compliance", href: "/gdpr" },
  ],
};

const socialLinks = [
  { icon: Share2, label: "Share", href: "https://facebook.com", color: "from-blue-600 to-blue-700" },
  { icon: Share2, label: "Share", href: "https://twitter.com", color: "from-cyan-500 to-cyan-600" },
  { icon: Share2, label: "LinkedIn", href: "https://linkedin.com", color: "from-blue-700 to-blue-800" },
  { icon: Camera, label: "Camera", href: "https://instagram.com", color: "from-pink-500 to-rose-600" },
  { icon: Play, label: "Play", href: "https://youtube.com", color: "from-red-600 to-red-700" },
];

const contactInfo = [
  { icon: Phone, label: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: Mail, label: "hello@inspireleap.com", href: "mailto:hello@inspireleap.com" },
  { icon: MapPin, label: "Bangalore, India", href: "https://maps.google.com" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Top gradient border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-gradient-to-r from-primary to-secondary">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Inspire Leap
                  </div>
                  <div className="text-sm text-gray-400">Wipro Partner Program</div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6">
                Transforming careers through industry-relevant education, 
                expert mentorship, and guaranteed placement opportunities.
              </p>
              
              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Secure Platform</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-300">Certified Courses</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">50K+ Students</span>
                </div>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Company</h3>
              <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Courses</h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          </div>
        </div>

        {/* Newsletter & Contact */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Newsletter */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-xl border border-gray-100 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Stay Updated with Career Insights
                  </h3>
                  <p className="text-gray-600">
                    Get weekly tips, industry trends, and exclusive offers delivered to your inbox.
                  </p>
                </div>
                
                <form onSubmit={handleSubscribe} className="flex-1">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-xl bg-black border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 transition-colors"
                      required
                    />
                    <button
                      type="submit"
                      disabled={subscribed}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50"
                    >
                      {subscribed ? "Subscribed!" : "Subscribe"}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    By subscribing, you agree to our Privacy Policy
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-white shadow-xl border border-gray-100 rounded-2xl p-6 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                      {info.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Legal */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Follow us:</span>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-gradient-to-br ${social.color} border border-white/10 hover:scale-110 transition-transform duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4">
              {footerLinks.legal.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Inspire Leap. All rights reserved.
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-500" />
                  <span>Wipro Partner Program</span>
                </div>
              </div>
              
              <div className="text-gray-500 text-sm flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> in India
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </footer>
  );
}