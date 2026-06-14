"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Heart, Shield, Award, Users, Globe } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const footerLinks = {
  explore: [
    { label: "All Courses", href: "/courses" },
    { label: "Internships", href: "/internships" },
    { label: "Mentors", href: "/mentors" },
    { label: "Placements", href: "/placements" },
    { label: "Certifications", href: "/certifications" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};

const FacebookIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com", color: "from-blue-600 to-blue-700" },
  { icon: TwitterIcon, label: "Twitter", href: "https://twitter.com", color: "from-cyan-500 to-cyan-600" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com", color: "from-blue-700 to-blue-800" },
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com", color: "from-pink-500 to-rose-600" },
  { icon: YoutubeIcon, label: "Youtube", href: "https://youtube.com", color: "from-red-600 to-red-700" },
];

const contactInfo = [
  { icon: Phone, label: "+91 80198 66332", href: "tel:+918019866332" },
  { icon: Mail, label: "info@inspireleap.com", href: "mailto:info@inspireleap.com" },
  { icon: MapPin, label: "Sandhya Techno One, 10B, 6th Floor, Head Office, C9CM+MRR, X Road, Radhe Nagar, Khajaguda, Rai Durg, Hyderabad, Telangana 500104", href: "https://maps.google.com/?q=Sandhya+Techno+One,+Hyderabad" },
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
          <div className="col-span-1 lg:col-span-3 grid grid-cols-2 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Explore</h3>
              <ul className="space-y-3">
              {footerLinks.explore.map((link, index) => (
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
            <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
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