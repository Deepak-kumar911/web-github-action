import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiRedux, SiTailwindcss, SiBootstrap, SiMui,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiRedis, SiFirebase, 
  SiGit, SiPostman, SiSocketdotio, SiStripe, SiOpenai
} from 'react-icons/si';
import { FaAws, FaRobot, FaCreditCard } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { Code2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 }
  }
};

const allSkills = [
  { name: 'React.js', icon: SiReact, color: 'text-blue-400', glow: 'group-hover:shadow-blue-500/50' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', glow: 'group-hover:shadow-white/50' },
  { name: 'Redux', icon: SiRedux, color: 'text-purple-500', glow: 'group-hover:shadow-purple-500/50' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', glow: 'group-hover:shadow-cyan-400/50' },
  { name: 'Bootstrap', icon: SiBootstrap, color: 'text-indigo-500', glow: 'group-hover:shadow-indigo-500/50' },
  { name: 'Material UI', icon: SiMui, color: 'text-blue-500', glow: 'group-hover:shadow-blue-500/50' },
  
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', glow: 'group-hover:shadow-green-500/50' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-300', glow: 'group-hover:shadow-gray-300/50' },
  { name: 'REST APIs', icon: TbApi, color: 'text-blue-300', glow: 'group-hover:shadow-blue-300/50' },
  
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', glow: 'group-hover:shadow-green-500/50' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400', glow: 'group-hover:shadow-blue-400/50' },
  { name: 'Redis', icon: SiRedis, color: 'text-red-500', glow: 'group-hover:shadow-red-500/50' },
  
  { name: 'AWS', icon: FaAws, color: 'text-orange-400', glow: 'group-hover:shadow-orange-400/50' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-amber-500', glow: 'group-hover:shadow-amber-500/50' },
  { name: 'Git', icon: SiGit, color: 'text-orange-500', glow: 'group-hover:shadow-orange-500/50' },
  { name: 'Postman', icon: SiPostman, color: 'text-orange-500', glow: 'group-hover:shadow-orange-500/50' },
  
  { name: 'Socket.io', icon: SiSocketdotio, color: 'text-white', glow: 'group-hover:shadow-white/50' },
  { name: 'Stripe', icon: SiStripe, color: 'text-indigo-400', glow: 'group-hover:shadow-indigo-400/50' },
  { name: 'Razorpay', icon: FaCreditCard, color: 'text-blue-500', glow: 'group-hover:shadow-blue-500/50' },
  { name: 'SabPaisa', icon: FaCreditCard, color: 'text-green-400', glow: 'group-hover:shadow-green-400/50' },
  { name: 'AssemblyAI', icon: FaRobot, color: 'text-blue-300', glow: 'group-hover:shadow-blue-300/50' },
  { name: 'OpenAI APIs', icon: SiOpenai, color: 'text-emerald-400', glow: 'group-hover:shadow-emerald-400/50' },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-6 md:px-12 lg:px-20 bg-[#0a0a0a] overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-4">
            <Code2 size={14} className="text-purple-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">Technical Arsenal</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Skill Set</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl text-lg font-light">
            Technologies, frameworks, and tools I use to build scalable, high-performance applications from the ground up.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {allSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`group flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 shadow-lg ${skill.glow} w-[140px] sm:w-[160px] cursor-default relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <skill.icon className={`${skill.color} mb-4 relative z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg`} size={46} />
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center relative z-10">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
