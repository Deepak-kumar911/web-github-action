import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Zap,
  Globe,
  Cpu,
  Code2,
  Boxes,
  Rocket
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const strengths = [
  {
    icon: <Zap size={24} className="text-yellow-400" />,
    title: "Performance Optimization",
    desc: "Improved API response times by up to 40% through efficient architecture."
  },
  {
    icon: <Globe size={24} className="text-blue-400" />,
    title: "Real-time Systems",
    desc: "Built dynamic features using WebSockets for live updates and chat."
  },
  {
    icon: <Cpu size={24} className="text-purple-400" />,
    title: "AI Integrations",
    desc: "Incorporating OpenAI and automation workflows into scalable products."
  },
  {
    icon: <Boxes size={24} className="text-green-400" />,
    title: "Scalable Architecture",
    desc: "Designing robust MongoDB/SQL structures and clean API designs."
  }
];

const industries = ["EdTech", "AI SaaS", "Dating Platforms", "ERP Systems", "Logistics", "CRM Systems"];

const techTags = [
  "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL",
  "Redis", "AWS", "Firebase", "Socket.io", "Stripe", "Razorpay", "OpenAI APIs"
];

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 md:px-20 bg-[#0a0a0a] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-4">
            <Terminal size={14} className="text-purple-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">Get To Know Me</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Me</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Main Bio */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />

              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Code2 className="text-purple-400" />
                The Journey So Far
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                3+ years of experience building scalable SaaS platforms, CRM systems, and AI-powered applications. I specialize in developing high-performance web applications using <strong className="text-white font-medium">React.js, Next.js (SSR), Node.js, and MongoDB</strong>.
                <br /><br />
                My focus is on building systems that are fast, scalable, and optimized for real-world usage. I have worked on products across multiple domains, delivering features like referral engines, real-time chat, analytics dashboards, and payment integrations.
              </p>

              <div className="pt-6 border-t border-white/10 mt-auto">
                <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold mb-4">Industries & Domains</p>
                <div className="flex flex-wrap gap-2">
                  {industries.map(ind => (
                    <span key={ind} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default backdrop-blur-sm">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Strengths & Tech */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl relative">
              <h3 className="text-xl font-semibold text-white px-2 mb-4">Key Strengths</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {strengths.map((str, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="bg-[#0a0a0a]/50 border border-white/5 p-4 rounded-2xl hover:bg-white/5 transition-all group"
                  >
                    <div className="bg-white/5 p-2 rounded-xl w-fit mb-3 group-hover:scale-110 transition-transform duration-300">
                      {str.icon}
                    </div>
                    <h4 className="text-white font-medium mb-1.5 text-sm">{str.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{str.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl border border-white/10 p-6 rounded-3xl relative overflow-hidden flex-1 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                <Rocket className="text-blue-400" />
                Current Focus
              </h3>
              <ul className="space-y-2 mb-5 text-gray-300 font-light list-disc list-inside text-sm">
                <li>Building scalable SaaS products</li>
                <li>AI-driven automation systems</li>
                <li>High-performance web applications</li>
              </ul>
              <div className="pt-4 border-t border-white/10">
                <p className="text-gray-300 font-medium text-sm">
                  Open to opportunities in product-based companies, startups, and high-impact teams.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Full Width Section */}
          {/* <motion.div variants={itemVariants} className="lg:col-span-12 mt-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="shrink-0 text-center md:text-left">
                <h3 className="text-xl font-semibold text-white mb-2">Tech Stack Arsenal</h3>
                <p className="text-sm text-gray-400 font-light">Tools I use to bring ideas to life.</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-2">
                {techTags.map(tech => (
                  <span key={tech} className="px-3 py-2 bg-[#0a0a0a]/80 border border-white/5 rounded-xl text-sm text-gray-300 hover:text-purple-400 hover:border-purple-500/30 transition-all cursor-default hover:scale-105">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div> */}

        </div>
      </motion.div>
    </section>
  );
};

export default About;
