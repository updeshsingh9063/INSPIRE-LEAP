"use client";

import { motion, useInView } from "framer-motion";
import { Users, Briefcase, GraduationCap, TrendingUp, Award, Clock, Globe, Star } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

const statistics = [
  {
    id: 1,
    icon: Users,
    value: 50000,
    suffix: "+",
    label: "Students Trained",
    description: "Across 50+ countries worldwide",
    color: "from-primary to-secondary",
    delay: 0.1,
  },
  {
    id: 2,
    icon: Briefcase,
    value: 95,
    suffix: "%",
    label: "Placement Rate",
    description: "Within 6 months of course completion",
    color: "from-secondary to-accent",
    delay: 0.2,
  },
  {
    id: 3,
    icon: GraduationCap,
    value: 10000,
    suffix: "+",
    label: "Successful Placements",
    description: "In top tech companies globally",
    color: "from-accent to-primary",
    delay: 0.3,
  },
  {
    id: 4,
    icon: TrendingUp,
    value: 300,
    suffix: "%",
    label: "Average Salary Hike",
    description: "Career growth post-program completion",
    color: "from-primary to-accent",
    delay: 0.4,
  },
  {
    id: 5,
    icon: Award,
    value: 200,
    suffix: "+",
    label: "Industry Expert Mentors",
    description: "From FAANG and Fortune 500 companies",
    color: "from-secondary to-primary",
    delay: 0.5,
  },
  {
    id: 6,
    icon: Clock,
    value: 98,
    suffix: "%",
    label: "Course Completion Rate",
    description: "Highest in the EdTech industry",
    color: "from-accent to-secondary",
    delay: 0.6,
  },
  {
    id: 7,
    icon: Globe,
    value: 50,
    suffix: "+",
    label: "Countries Reached",
    description: "Global learning community",
    color: "from-primary to-secondary",
    delay: 0.7,
  },
  {
    id: 8,
    icon: Star,
    value: 4.9,
    suffix: "/5",
    label: "Student Satisfaction",
    description: "Based on 10,000+ reviews",
    color: "from-secondary to-accent",
    delay: 0.8,
  },
];

const growthData = [
  { year: "2021", students: 10000, placements: 8000 },
  { year: "2022", students: 25000, placements: 22000 },
  { year: "2023", students: 40000, placements: 38000 },
  { year: "2024", students: 50000, placements: 48000 },
];

export default function StatisticsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section className="relative py-12 md:py-24 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-l from-secondary/5 to-transparent rounded-full blur-3xl" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px),
                             linear-gradient(to bottom, #888 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/20 mb-6"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
              <TrendingUp className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-white/80">By The Numbers</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-animated">
              Impact That Speaks Volumes
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our track record of transforming careers and creating industry-ready professionals.
            Every number represents a life changed through quality education.
          </p>
        </motion.div>

        {/* Main statistics grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: stat.delay, duration: 0.5 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur"
                style={{ background: `linear-gradient(to bottom right, var(--color-primary), var(--color-secondary))` }}
              />
              
              {/* Card */}
              <div className="relative bg-white shadow-xl border border-gray-100 rounded-2xl p-4 md:p-6 text-center group-hover:border-primary/30 transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                {/* Animated counter */}
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {hasAnimated ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                      decimals={stat.value === 4.9 ? 1 : 0}
                      className="text-gray-900 font-extrabold"
                    />
                  ) : (
                    <span className="text-gray-900 font-extrabold">
                      0{stat.suffix}
                    </span>
                  )}
                </div>

                {/* Label and description */}
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>

                {/* Progress indicator (for percentage stats) */}
                {(stat.label.includes("%") || stat.label.includes("Rate") || stat.label.includes("Satisfaction")) && (
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{stat.value}{stat.suffix}</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: stat.delay + 0.5 }}
                        className={`h-full bg-gradient-to-r ${stat.color}`}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>



        {/* Additional metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl border border-gray-100 rounded-2xl p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Learning Support</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Round-the-clock doubt resolution and mentorship availability for uninterrupted learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl border border-gray-100 rounded-2xl p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Hackathon Wins</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Our students have won prestigious hackathons and coding competitions globally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl border border-gray-100 rounded-2xl p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Corporate Partners</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Strong industry connections with leading companies for placement opportunities.
            </p>
          </motion.div>
        </div>

        {/* Real-time counter simulation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 md:gap-8 p-5 md:p-8 rounded-3xl bg-white shadow-xl border border-gray-100">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Live Impact Counter</h3>
              <p className="text-gray-600">
                Students are transforming their careers right now. Join the movement.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {hasAnimated ? (
                    <CountUp
                      start={0}
                      end={127}
                      suffix="+"
                      duration={3}
                      className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    />
                  ) : (
                    "0+"
                  )}
                </div>
                <div className="text-sm text-gray-600">Placements Today</div>
              </div>
              
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  {hasAnimated ? (
                    <CountUp
                      start={0}
                      end={342}
                      suffix="+"
                      duration={3}
                      delay={0.5}
                      className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
                    />
                  ) : (
                    "0+"
                  )}
                </div>
                <div className="text-sm text-gray-600">New Enrollments</div>
              </div>
            </div>
            
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 whitespace-nowrap">
              Join Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}