import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, CheckCircle2, LayoutTemplate } from 'lucide-react';

const projects = [
  {
    title: 'CampusDegree',
    description:
      `Engineered an SSR-optimized discovery platform connecting students with courses and universities.
      Architected a comprehensive student CRM handling end-to-end enrollment, wishlists, and activity tracking.
      Developed a secure financial referral system featuring integrated wallets, withdrawals, and transaction auditing.
      Deployed an advanced analytics engine to monitor user sessions, track events, and visualize engagement metrics.
      Built a robust, role-based admin dashboard to effortlessly govern users, coursework, and dynamic incentive programs.`,
    tech: ['NextJs', 'Redux', 'Node.js', 'MongoDB', 'Firebase', 'AWS'],
    image: '/images/project/campusdegree/image.png',
    images: [
      '/images/project/campusdegree/image.png',
      '/images/project/campusdegree/image2.png',
      '/images/project/campusdegree/image3.png',
    ],
    liveLink: 'https://campusdegree.org',
    githubLink: '#'
  },
  {
    title: 'LuxuryLife',
    description:
      `Spearheaded a complete architectural migration from React to Next.js (SSR), drastically improving core web vitals and SEO.
      Engineered low-latency, real-time messaging and notification pipelines using Socket.io.
      Implemented an advanced geolocation-based profile discovery engine leveraging radius filtering.
      Architected secure data-access workflows governing private media requests and approvals.
      Boosted user engagement by designing an automated, timezone-aware messaging system.
      Scaled backend performance and reduced response latency by heavily utilizing Redis caching strategies.`,
    tech: ['Next.js (SSR)', 'Node.js', 'MongoDB', 'Redis', 'Socket.io', 'AWS'],
    image: '/images/project/luxurylife/image.png',
    images: [
      '/images/project/luxurylife/image.png',
      '/images/project/luxurylife/image2.png',
    ],
    liveLink: 'https://www.luxurylife.ai/',
    githubLink: '#'
  },
  {
    title: 'Yiino App',
    description:
      `Designed and built a multi-service backend capable of dynamically orchestrating ride-booking, package delivery, and rentals.
      Integrated Google APIs and Firebase to deliver seamless, real-time GPS tracking for active user journeys.
      Developed complex dynamic pricing algorithms and robust booking logic to handle concurrent service demands.`,
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Google APIs', 'Socket.io'],
    image: '/images/project/yiino/image.png',
    images: [
      '/images/project/yiino/image.png',
      '/images/project/yiino/image2.png',
    ],
    liveLink: 'https://yiino.com/',
    githubLink: '#'
  },
  {
    title: 'Manage My Site',
    description:
      `Engineered an expansive backend infrastructure to streamline critical multi-site workflows including Purchase Orders, automated billing, and inventory tracking.
      Designed granular, role-based access control paradigms allowing secure management of comprehensive financial reporting systems.`,
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express'],
    image: '/images/project/managemysite/image.png',
    images: [
      '/images/project/managemysite/image.png',
      '/images/project/managemysite/image2.png',
    ],
    liveLink: 'https://www.managemysite.org/',
    githubLink: '#'
  }
];

const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-[250px] sm:h-[350px] lg:h-full min-h-[300px] overflow-hidden rounded-2xl group">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div className="w-full h-full bg-[#121212]/50 absolute inset-0 z-10 group-hover:bg-transparent transition-colors duration-500" />
          <img
            src={img}
            alt={`Screenshot ${idx + 1}`}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          // onError={(e) => { e.target.src = '/images/placeholder.webp'; }}
          />
        </div>
      ))}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, idx) => (
            <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${current === idx ? 'bg-purple-500 w-6' : 'bg-white/50 w-2'}`} />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectShowcase = () => {
  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 lg:px-20 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="absolute top-[20%] left-[-10%] w-[40rem] h-[40rem] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40rem] h-[40rem] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-4 mx-auto">
          <LayoutTemplate size={14} className="text-blue-400" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">Portfolio</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
          Real-world applications showcasing my skills and passion for building performant, scalable, and elegant solutions.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          const descLines = project.description
            .split('\n')
            .map(line => line.replace(/^[●\s]+/, '').trim())
            .filter(line => line.length > 0);

          return (
            <motion.div
              key={index}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 bg-white/5 border border-white/10 p-6 lg:p-8 rounded-[2rem] shadow-2xl hover:bg-white/10 transition-colors duration-500`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden border border-white/5 shadow-inner">
                <ImageCarousel images={project.images || [project.image]} />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4 mt-2 lg:mt-0">
                  <h3 className="text-3xl font-bold tracking-tight text-white">{project.title}</h3>
                  <div className="flex gap-3">
                    {project.githubLink !== '#' && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <FolderGit2 size={22} />
                      </a>
                    )}
                    {project.liveLink !== '#' && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {descLines.map((line, i) => (
                    <li key={i} className="flex gap-3 items-start text-gray-300 font-light text-sm md:text-base leading-relaxed">
                      <CheckCircle2 size={18} className="text-purple-500/80 shrink-0 mt-0.5" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-white/10">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {(project.tech || []).map((t, i) => (
                      <span
                        key={i}
                        className="bg-[#0a0a0a]/50 border border-white/10 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 block lg:hidden">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 w-full py-3 bg-purple-600/20 text-purple-400 border border-purple-500/30 rounded-xl font-medium hover:bg-purple-600/40 transition-colors"
                  >
                    View Live Project <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectShowcase;