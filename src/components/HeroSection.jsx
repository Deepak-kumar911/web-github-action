import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowBigDownDashIcon, FolderIcon } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiExpress, SiMongodb, SiNodedotjs, SiReact } from 'react-icons/si';
import { RiNextjsLine } from 'react-icons/ri';

const techLogos = [
  { name: 'NextJs', src: <RiNextjsLine className="text-blue-400 group-hover:text-blue-300 transition-colors" size={28} />, alt: 'NextJs' },
  { name: 'React', src: <SiReact className="text-blue-400 group-hover:text-blue-300 transition-colors" size={28} />, alt: 'React' },
  { name: 'Node.js', src: <SiNodedotjs className="text-green-500 group-hover:text-green-400 transition-colors" size={28} />, alt: 'Node.js' },
  { name: 'MongoDB', src: <SiMongodb className="text-green-600 group-hover:text-green-500 transition-colors" size={28} />, alt: 'MongoDB' },
  { name: 'Express', src: <SiExpress className="text-gray-300 group-hover:text-white transition-colors" size={28} />, alt: 'Express' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:py-6 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}
    >
      <div className={`flex justify-between items-center w-full max-w-6xl px-6 md:px-8 py-3 mx-auto rounded-2xl transition-all duration-500 ${scrolled ? 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-900/20' : 'bg-transparent'}`}>
        <div className="text-white font-black text-xl tracking-tighter cursor-pointer">
          DK<span className="text-purple-500">.</span>
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((section) => (
            <li key={section}>
              <a href={`#${section.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors relative group">
                {section}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden text-gray-300 font-medium">
          Menu
        </div>
      </div>
    </motion.nav>
  );
};

const BackgroundEffects = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
  </div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

const Hero = () => {
  return (
    <>
      <Navbar />

      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 md:px-20 bg-[#0a0a0a] pt-28 overflow-hidden">
        <BackgroundEffects />

        <div className="relative mb-10 z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">

          <motion.div
            className="flex-1 flex flex-col justify-center text-white w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">Available for hire</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
              Hi, I&apos;m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Deepak Kumar
              </span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl mb-6 font-medium text-gray-300">
              MERN Stack Developer
            </motion.h2>

            <motion.p variants={itemVariants} className="max-w-xl text-lg text-gray-400 mb-10 leading-relaxed font-light">
              Passionate about building scalable, production-ready web applications using cutting-edge technologies. Turning complex problems into elegant solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <a
                href="/file/deepak_kumar_resume.pdf"
                download
                className="group relative flex items-center gap-2 px-8 py-4 rounded-xl font-semibold overflow-hidden w-full sm:w-auto justify-center shadow-lg shadow-purple-500/20 outline-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2 text-white">
                  <ArrowBigDownDashIcon size={20} className="group-hover:animate-bounce" />
                  Download Resume
                </span>
              </a>

              <a
                href="#projects"
                className="group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto justify-center text-white backdrop-blur-sm"
              >
                <FolderIcon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                View Projects
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-white/10 pt-8 gap-8">
              <div>
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest font-semibold">Favourite Tech</p>
                <div className="flex items-center gap-3">
                  {techLogos.map(({ name, src }) => (
                    <div key={name} className="group relative h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer backdrop-blur-md">
                      {src}
                      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#121212] border border-white/10 text-xs px-2 py-1 rounded-md text-white whitespace-nowrap pointer-events-none z-20">
                        {name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a href="https://github.com/Deepak-kumar911" target="_blank" rel="noreferrer"
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                  <FaGithub size={22} />
                </a>
                <a href="https://www.linkedin.com/in/deepak-kumar-20a007269/" target="_blank" rel="noreferrer"
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  <FaLinkedin size={22} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center lg:justify-end items-center relative w-full lg:w-auto mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-[80px] opacity-30 animate-pulse" />

              <div className="relative w-72 h-72 lg:w-[26rem] lg:h-[26rem] rounded-full p-[4px] bg-gradient-to-tr from-purple-600 via-pink-500 to-blue-600 overflow-hidden shadow-2xl shadow-purple-900/30">
                <div className="absolute inset-0 bg-[#0a0a0a] rounded-full m-[1px]" />
                <img
                  src="/images/20.webp"
                  alt="Deepak Kumar"
                  className="relative z-10 w-full h-full object-cover rounded-full p-2"
                />
              </div>

              <motion.div
                className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-3 lg:p-4 rounded-2xl shadow-xl z-20"
                animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <SiReact className="text-blue-400" size={32} />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-4 lg:-bottom-4 lg:-left-6 bg-white/10 backdrop-blur-xl border border-white/20 p-3 lg:p-4 rounded-2xl shadow-xl z-20"
                animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <SiNodedotjs className="text-green-500" size={32} />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Hero;
