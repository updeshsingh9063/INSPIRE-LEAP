"use client";

import { motion } from "framer-motion";
import { Play, Star, Award, TrendingUp, Users, Briefcase, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import Image from "next/image";

const successStories = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Engineer",
    company: "Google",
    package: "₹42 LPA",
    image: "/api/placeholder/400/400",
    videoUrl: "/compressed-video.mp4",
    story: "From a non-tech background to landing a dream job at Google. The mentorship and hands-on projects at Inspire Leap transformed my career completely.",
    achievements: [
      { icon: Star, label: "Google L4 Offer", value: "Top 1%" },
      { icon: Award, label: "Hackathon Winner", value: "National Level" },
      { icon: TrendingUp, label: "Salary Hike", value: "800%" },
    ],
    before: {
      role: "Mechanical Engineer",
      salary: "₹5 LPA",
      company: "Manufacturing Firm",
    },
    after: {
      role: "Software Engineer",
      salary: "₹42 LPA",
      company: "Google",
    },
    tags: ["Career Switch", "FAANG", "Full Stack"],
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Data Scientist",
    company: "Microsoft",
    package: "₹38 LPA",
    image: "/api/placeholder/400/400",
    videoUrl: "/compressed-video.mp4",
    story: "The data science curriculum with real-world projects helped me build a strong portfolio. Got placed at Microsoft within 3 months of completing the course.",
    achievements: [
      { icon: Star, label: "Microsoft Offer", value: "Direct Hire" },
      { icon: Award, label: "Kaggle Expert", value: "Top 5%" },
      { icon: TrendingUp, label: "Career Growth", value: "Senior Role" },
    ],
    before: {
      role: "Business Analyst",
      salary: "₹8 LPA",
      company: "Consulting Firm",
    },
    after: {
      role: "Data Scientist",
      salary: "₹38 LPA",
      company: "Microsoft",
    },
    tags: ["Data Science", "AI/ML", "Cloud"],
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Product Manager",
    company: "Amazon",
    package: "₹45 LPA",
    image: "/api/placeholder/400/400",
    videoUrl: "/compressed-video.mp4",
    story: "The product management bootcamp gave me the strategic thinking and technical depth needed to excel at Amazon. The mentorship was invaluable.",
    achievements: [
      { icon: Star, label: "Amazon L6 Offer", value: "Leadership Role" },
      { icon: Award, label: "Product Launch", value: "Millions in Revenue" },
      { icon: TrendingUp, label: "Team Size", value: "15+ Members" },
    ],
    before: {
      role: "Marketing Manager",
      salary: "₹12 LPA",
      company: "E-commerce Startup",
    },
    after: {
      role: "Product Manager",
      salary: "₹45 LPA",
      company: "Amazon",
    },
    tags: ["Product Management", "Leadership", "Strategy"],
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "UX Designer",
    company: "Adobe",
    package: "₹35 LPA",
    image: "/api/placeholder/400/400",
    videoUrl: "/compressed-video.mp4",
    story: "The design thinking approach and portfolio building workshops helped me create a standout portfolio. Got multiple offers including Adobe.",
    achievements: [
      { icon: Star, label: "Adobe Design Award", value: "Winner 2024" },
      { icon: Award, label: "Portfolio Score", value: "9.8/10" },
      { icon: TrendingUp, label: "Client Projects", value: "50+" },
    ],
    before: {
      role: "Graphic Designer",
      salary: "₹6 LPA",
      company: "Design Agency",
    },
    after: {
      role: "UX Designer",
      salary: "₹35 LPA",
      company: "Adobe",
    },
    tags: ["UX Design", "Creative", "Portfolio"],
  },
];

const stats = [
  { icon: Users, value: "10,000+", label: "Successful Placements", color: "from-primary to-secondary" },
  { icon: Briefcase, value: "95%", label: "Placement Rate", color: "from-secondary to-accent" },
  { icon: GraduationCap, value: "50K+", label: "Students Trained", color: "from-accent to-primary" },
  { icon: TrendingUp, value: "300%", label: "Average Salary Hike", color: "from-primary to-accent" },
];

export default function SuccessStoriesSection() {
  const [activeStory, setActiveStory] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const playVideo = (id: number) => {
    setPlayingVideo(id);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const stopVideo = () => {
    setPlayingVideo(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const currentStory = successStories[activeStory];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-secondary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10 mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white/80">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent">
              Transformations That Inspire
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from students who transformed their careers with Inspire Leap. 
            From career switches to massive salary hikes, our alumni are making waves in top companies.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white shadow-xl border border-gray-100 rounded-2xl p-6 text-center">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main success story showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Video testimonial section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl shadow-xl overflow-hidden border border-gray-100 bg-white">
              {/* Video thumbnail with play button */}
              <div className="relative aspect-video">
                {playingVideo === currentStory.id ? (
                  <video
                    ref={videoRef}
                    src={currentStory.videoUrl}
                    className="w-full h-full object-cover"
                    controls
                    onEnded={() => stopVideo()}
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => playVideo(currentStory.id)}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Story details below video */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary p-0.5">
                      <div className="w-full h-full rounded-full bg-gray-900" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 border-2 border-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{currentStory.name}</h3>
                    <p className="text-gray-600">
                      {currentStory.role} at {currentStory.company}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {currentStory.package}
                    </div>
                    <div className="text-sm text-gray-600">Package</div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{currentStory.story}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {currentStory.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Before/After transformation and achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Before/After comparison */}
            <div className="bg-white shadow-xl border border-gray-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Transformation</h3>
              <div className="grid grid-cols-2 gap-6">
                {/* Before */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-white shadow-sm rounded-2xl p-6 border border-red-200">
                    <div className="text-center mb-4">
                      <div className="inline-flex p-2 rounded-lg bg-red-500/20 mb-2">
                        <GraduationCap className="w-5 h-5 text-red-500" />
                      </div>
                      <div className="text-sm text-gray-600 mb-1">Before Inspire Leap</div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-gray-500">Role</div>
                        <div className="font-semibold text-gray-900">{currentStory.before.role}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Salary</div>
                        <div className="font-semibold text-red-600">{currentStory.before.salary}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Company</div>
                        <div className="font-semibold text-gray-900">{currentStory.before.company}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-white shadow-sm rounded-2xl p-6 border border-green-200">
                    <div className="text-center mb-4">
                      <div className="inline-flex p-2 rounded-lg bg-green-500/20 mb-2">
                        <Briefcase className="w-5 h-5 text-green-500" />
                      </div>
                      <div className="text-sm text-gray-600 mb-1">After Inspire Leap</div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-gray-500">Role</div>
                        <div className="font-semibold text-gray-900">{currentStory.after.role}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Salary</div>
                        <div className="font-semibold text-green-600">{currentStory.after.salary}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Company</div>
                        <div className="font-semibold text-gray-900">{currentStory.after.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Salary hike percentage */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">Career Growth</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    +{Math.round(
                      (parseInt(currentStory.after.salary.replace(/[^0-9]/g, '')) / 
                       parseInt(currentStory.before.salary.replace(/[^0-9]/g, '')) - 1) * 100
                    )}%
                  </div>
                </div>
                <div className="mt-2 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                  />
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white shadow-xl border border-gray-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
              <div className="grid grid-cols-3 gap-4">
                {currentStory.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-3">
                      <achievement.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-sm text-gray-600 mb-1">{achievement.label}</div>
                    <div className="text-lg font-bold text-gray-900">{achievement.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Story navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-lg font-semibold">
            More Success Stories
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={prevStory}
              className="p-3 rounded-full bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStory(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeStory
                      ? "w-8 bg-gradient-to-r from-primary to-secondary"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextStory}
              className="p-3 rounded-full bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* All success stories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {successStories.map((story, index) => (
            <motion.button
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveStory(index)}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                index === activeStory
                  ? "bg-white border-primary/30 shadow-xl ring-2 ring-primary/20"
                  : "bg-white border-gray-100 hover:border-primary/20 hover:shadow-xl shadow-md"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary p-0.5">
                    <div className="w-full h-full rounded-full bg-gray-900" />
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{story.name}</div>
                  <div className="text-sm text-gray-600">{story.company}</div>
                </div>
              </div>
              <div className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {story.package}
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{story.story}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {story.tags.slice(0, 2).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl bg-white shadow-xl border border-gray-100">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Write Your Success Story?</h3>
              <p className="text-gray-600">
                Join thousands of students who transformed their careers with Inspire Leap.
              </p>
            </div>
            <button
              onClick={() => window.location.href = '/courses'}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Start Your Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}