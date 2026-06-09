"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, BookOpen, Users, Briefcase, DollarSign, Clock, Shield, Zap, MessageSquare } from "lucide-react";
import { useState, useMemo } from "react";

const faqCategories = [
  { id: "general", label: "General", icon: HelpCircle, color: "from-blue-500 to-cyan-500" },
  { id: "courses", label: "Courses", icon: BookOpen, color: "from-cyan-500 to-emerald-500" },
  { id: "admissions", label: "Admissions", icon: Users, color: "from-emerald-500 to-green-500" },
  { id: "placements", label: "Placements", icon: Briefcase, color: "from-green-500 to-teal-500" },
  { id: "fees", label: "Fees & Financing", icon: DollarSign, color: "from-teal-500 to-blue-500" },
  { id: "support", label: "Support", icon: MessageSquare, color: "from-blue-500 to-purple-500" },
];

const faqItems = [
  {
    id: 1,
    question: "What makes Inspire Leap different from other EdTech platforms?",
    answer: "Inspire Leap combines industry-designed curriculum with guaranteed placement opportunities through our Wipro Partner Program. We provide 1:1 mentorship from industry experts, hands-on project experience, and direct interview opportunities with top tech companies. Our focus is not just on learning but on career transformation.",
    category: "general",
    icon: Zap,
  },
  {
    id: 2,
    question: "Do I need prior technical experience to enroll in courses?",
    answer: "No prior experience is required for most of our beginner-level courses. We offer learning paths for complete beginners, intermediate learners, and advanced professionals. Each course starts with foundational concepts and progressively builds up to advanced topics with hands-on projects.",
    category: "courses",
    icon: BookOpen,
  },
  {
    id: 3,
    question: "What is the Wipro Partner Program and how does it benefit students?",
    answer: "As an official Wipro Partner Program, Inspire Leap provides direct access to Wipro's hiring pipeline. Benefits include guaranteed interview opportunities, industry-recognized certification, priority placement consideration, and curriculum designed in collaboration with Wipro's industry experts.",
    category: "placements",
    icon: Shield,
  },
  {
    id: 4,
    question: "What is the placement rate and average salary package?",
    answer: "We maintain a 95% placement rate within 6 months of course completion. The average salary package for our students is ₹12 LPA, with top performers securing packages up to ₹42 LPA at companies like Google, Microsoft, Amazon, and Wipro.",
    category: "placements",
    icon: Briefcase,
  },
  {
    id: 5,
    question: "Are there any financing options or EMI plans available?",
    answer: "Yes, we offer multiple financing options including no-cost EMI plans through our banking partners, income share agreements (ISA) where you pay after placement, and scholarship programs for meritorious students. We also provide corporate sponsorship options for working professionals.",
    category: "fees",
    icon: DollarSign,
  },
  {
    id: 6,
    question: "How does the mentorship program work?",
    answer: "Each student is assigned a dedicated industry mentor from top tech companies. You'll have weekly 1:1 sessions, code reviews, career guidance, and direct access to your mentor for doubt resolution. Mentors provide personalized feedback and help you build industry-ready skills.",
    category: "admissions",
    icon: Users,
  },
  {
    id: 7,
    question: "What kind of projects will I work on during the course?",
    answer: "You'll work on real-world projects including full-stack web applications, machine learning models, cloud deployments, and enterprise solutions. Projects are designed to simulate actual industry scenarios and can be added to your portfolio to showcase to employers.",
    category: "courses",
    icon: BookOpen,
  },
  {
    id: 8,
    question: "Is there any job guarantee or placement assurance?",
    answer: "Yes, we offer a 100% job guarantee for students who complete all course requirements, maintain 80%+ attendance, and pass all assessments. If you don't get placed within 6 months of completion, we provide a full course fee refund (terms and conditions apply).",
    category: "placements",
    icon: Shield,
  },
  {
    id: 9,
    question: "How much time should I dedicate to the course weekly?",
    answer: "We recommend dedicating 15-20 hours per week for optimal learning. This includes live sessions, self-paced learning, project work, and assignments. The flexible schedule allows working professionals to learn at their own pace while maintaining their current commitments.",
    category: "courses",
    icon: Clock,
  },
  {
    id: 10,
    question: "What kind of support is available after course completion?",
    answer: "We provide lifetime access to course materials, alumni network membership, career counseling for up to 2 years, interview preparation support, and access to job opportunities through our partner companies. Our support continues until you successfully land your dream job.",
    category: "support",
    icon: MessageSquare,
  },
  {
    id: 11,
    question: "Are the certifications recognized by industry?",
    answer: "Yes, all our certifications are industry-recognized and issued in collaboration with our partner companies including Wipro, Microsoft, Google, Amazon, and IBM. These certifications are valued by employers globally and can significantly boost your career prospects.",
    category: "courses",
    icon: BookOpen,
  },
  {
    id: 12,
    question: "Can I switch between courses or learning paths?",
    answer: "Yes, you can switch between courses within the first 2 weeks of enrollment. Our academic advisors will help you choose the right learning path based on your career goals, background, and learning pace. We also offer complimentary career counseling sessions.",
    category: "admissions",
    icon: Users,
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openItems, setOpenItems] = useState<number[]>([1]);

  // Generate particle data once to avoid hydration mismatch
  const particles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: (i * 11) % 100,
      top: (i * 17) % 100,
      duration: 5 + (i % 3),
      delay: (i * 0.12) % 2,
    }));
  }, []);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredItems = faqItems.filter(item => item.category === activeCategory);
  const currentCategory = faqCategories.find(cat => cat.id === activeCategory) || faqCategories[0];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-violet-500/10 to-transparent rounded-full blur-3xl" />
        
        {/* Floating question marks */}
        <div className="absolute inset-0 opacity-10">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute text-2xl"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            >
              ?
            </motion.div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-white/10 mb-6">
            <HelpCircle className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-white/80">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-white to-violet-400 bg-clip-text text-transparent">
              Got Questions? We Have Answers
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find quick answers to common questions about courses, admissions, placements, 
            and more. Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {faqCategories.map((category, index) => {
              const isActive = category.id === activeCategory;
              const itemCount = faqItems.filter(item => item.category === category.id).length;

              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-white border-indigo-500/30 shadow-lg shadow-indigo-500/20'
                      : 'bg-white border-gray-100 hover:border-indigo-500/20 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{category.label}</div>
                    <div className="text-xs text-gray-600">{itemCount} questions</div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* FAQ Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* FAQ List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {filteredItems.map((item, index) => {
                const isOpen = openItems.includes(item.id);

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? 'bg-white border-indigo-500/30 shadow-md'
                          : 'bg-white border-gray-100 hover:border-indigo-500/20 shadow-sm hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex-shrink-0">
                          <item.icon className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {item.question}
                            </h3>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="p-1 rounded-lg bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex-shrink-0"
                            >
                              <ChevronDown className="w-4 h-4 text-indigo-400" />
                            </motion.div>
                          </div>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <p className="text-gray-600 pt-4 border-t border-gray-100 mt-4">
                                  {item.answer}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Category Details & Support */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Category Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white shadow-md border border-gray-100 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${currentCategory.color}`}>
                    <currentCategory.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{currentCategory.label}</h3>
                    <div className="text-sm text-gray-600">
                      {filteredItems.length} questions answered
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  Find answers to common questions about {currentCategory.label.toLowerCase()}. 
                  If you need more specific information, contact our support team.
                </p>
                
                <div className="text-xs text-gray-500">
                  Last updated: June 2024
                </div>
              </motion.div>

              {/* Quick Support */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white shadow-md border border-gray-100 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Need Help?</h3>
                    <div className="text-sm text-gray-600">We're here to assist you</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={() => window.open('https://rzp.io/rzp/9tayaBb', '_blank')}
                    className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 font-semibold text-white hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
                  >
                    Live Chat Support
                  </button>
                  <button
                    onClick={() => window.open('https://rzp.io/rzp/9tayaBb', '_blank')}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 font-semibold shadow-sm hover:bg-gray-50 transition-all duration-300"
                  >
                    Schedule Call
                  </button>
                  <button
                    onClick={() => window.location.href = 'mailto:support@inspireleap.com'}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 font-semibold shadow-sm hover:bg-gray-50 transition-all duration-300"
                  >
                    Email Support
                  </button>
                </div>
              </motion.div>

              {/* Popular Questions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white shadow-md border border-gray-100 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Questions</h3>
                <div className="space-y-3">
                  {faqItems
                    .filter(item => item.id !== 1 && item.id <= 4)
                    .map(item => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveCategory(item.category);
                          setOpenItems([item.id]);
                        }}
                        className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                          {item.question}
                        </div>
                        <div className="text-xs text-gray-500">{item.category}</div>
                      </button>
                    ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Search & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Search FAQ */}
          <div className="bg-white shadow-md border border-gray-100 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Search FAQ</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Type your question here..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-indigo-500/50 transition-colors"
              />
              <button className="absolute right-2 top-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 font-semibold text-white">
                Search
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Can't find your answer? Try different keywords or contact support.
            </div>
          </div>

          {/* Contact Options */}
          <div className="bg-white shadow-md border border-gray-100 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Other Ways to Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-100 shadow-sm">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">24/7 Live Chat</div>
                  <div className="text-xs text-gray-600">Instant answers</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-100 shadow-sm">
                <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-emerald-500/20">
                  <Users className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Community Forum</div>
                  <div className="text-xs text-gray-600">Peer support</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-100 shadow-sm">
                <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/20">
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Knowledge Base</div>
                  <div className="text-xs text-gray-600">Detailed guides</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 p-8 rounded-3xl bg-white shadow-xl border border-gray-100">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Still Have Questions?
                </span>
              </h3>
              <p className="text-gray-600">
                Our support team is ready to help you with any questions about courses, 
                admissions, or placements.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.open('https://rzp.io/rzp/9tayaBb', '_blank')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 font-semibold text-white hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
              >
                Contact Support
              </button>
              <button
                onClick={() => window.location.href = '/faq'}
                className="px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 font-semibold shadow-sm hover:bg-gray-50 transition-all duration-300"
              >
                View All FAQ
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}