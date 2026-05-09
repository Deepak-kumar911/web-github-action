import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2, Milestone } from 'lucide-react';

const experiences = [
  {
    title: 'MERN Stack Developer',
    company: 'Acadecraft Private Limited',
    duration: 'August 2025 - Present',
    location: 'Noida, India',
    points: [
      "Engineered and optimized highly scalable platforms utilizing Next.js (SSR), Node.js, and MongoDB.",
      "Accelerated API performance and significantly reduced response times by implementing Redis caching layers.",
      "Architected real-time communication systems using Socket.io to power live chat and instant notifications.",
      "Designed and deployed comprehensive role-based CRM systems paired with advanced analytics dashboards.",
      "Drove user retention by integrating automated engagement workflows, smart notifications, and tracking logic."
    ],
    stack: ['NextJs', 'ReactJs', 'Node.js', 'MongoDB', 'Redis', 'AWS', 'Socket.io']
  },
  {
    title: 'MERN Stack Developer',
    company: 'Cliffex Software Solutions Pvt Ltd.',
    duration: 'June 2023 – August 2025',
    location: 'Noida, India',
    points: [
      "Built dynamic, full-stack applications from the ground up using React.js, Next.js, Node.js, and Express.",
      "Spearheaded AI integrations featuring OpenAI APIs for intelligent chat functionality and speech-to-text workflows.",
      "Fortified platform security with secure Firebase authentication routines including OAuth and zero-trust OTP logins.",
      "Engineered seamless financial transactions by integrating tier-1 payment gateways like Stripe and Razorpay.",
      "Developed an extensive library of reusable UI components and formulated scalable backend API architectures."
    ],
    stack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'AWS', 'Socket.io']
  },
  {
    title: 'MERN Stack Developer (Intern)',
    company: 'Brihat Infotech',
    duration: 'Dec 2022 – Mar 2023',
    location: 'Remote',
    points: [
      "Successfully delivered an end-to-end inventory management system by producing robust RESTful APIs.",
      "Bridged the gap between design and engineering by translating Figma wireframes into pixel-perfect Tailwind CSS interfaces.",
      "Collaborated efficiently in agile methodologies to deploy critical frontend and backend services."
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 px-6 md:px-12 lg:px-20 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[40rem] h-[40rem] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-4 mx-auto">
          <Milestone size={14} className="text-indigo-400" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">My Journey</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 tracking-tight">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Experience</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
          Each step in my career has honed my technical expertise, shaped my architectural mindset, and pushed me to engineer better, faster products.
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {/* The Central Timeline Line for Desktop / Left Line for Mobile */}
        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent md:-translate-x-1/2 opacity-30 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-0" />

        <motion.div
          className="space-y-12 md:space-y-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full group">

                {/* Timeline Dot Central Icon */}
                <div className="absolute left-[20px] md:left-1/2 md:top-1/2 transform -translate-y-2 md:-translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0a0a0a] bg-gradient-to-br from-indigo-500 to-purple-600 shadow-[0_0_20px_rgba(99,102,241,0.6)] z-20 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase size={16} className="text-white" />
                </div>

                {/* Left Side Content (Rendered on left if even, otherwise empty space holder) */}
                <div className={`w-full md:w-[45%] pl-[80px] md:pl-0 ${isEven ? 'md:text-left' : 'md:order-2 md:pl-[80px] lg:pl-[45px]'} relative z-10`}>
                  <motion.div
                    variants={cardVariants}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 lg:p-8 rounded-3xl shadow-xl hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-2">{exp.title}</h3>

                    <div className={`flex flex-col gap-2 mb-6 md:items-start`}>
                      <div className="flex items-center gap-2 text-indigo-400 font-medium">
                        <Building2 size={16} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400 font-light">
                        <div className="flex items-center gap-1.5"><Calendar size={14} /> {exp.duration}</div>
                        <div className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</div>
                      </div>
                    </div>

                    <ul className={`space-y-3 mb-6 md:text-left text-gray-300 font-light text-sm leading-relaxed`}>
                      {exp.points.map((point, i) => (
                        <li key={i} className={`flex gap-3 items-start `}>
                          <CheckCircle2 size={16} className={`text-indigo-400 shrink-0 mt-0.5 md:ml-3`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      {exp.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-[#0a0a0a]/80 border border-white/10 text-gray-300 hover:text-white hover:border-indigo-500/50 transition-colors text-xs font-medium px-3 py-1.5 rounded-xl"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right Side Empty Space Holder */}
                <div className={`hidden md:block w-[45%] ${isEven ? 'md:order-2' : 'md:order-1'}`} />

              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
