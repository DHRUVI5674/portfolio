import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Squarespace Clone",
        description: "Modern website builder platform clone with dynamic layout engine.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        videoId: "7WET9TN4DPI",
        demoUrl: "https://website-clone-squarespace.netlify.app",
        projectUrl: "https://github.com/DHRUVI5674/Website-clone-squarespace"
    },
    {
        title: "ISRO Website Redesign",
        description: "Interactive portal for Indian Space Research Organisation.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        videoId: "wgKym2cge3Q",
        demoUrl: "https://website-clone-isro.netlify.app",
        projectUrl: "https://github.com/DHRUVI5674/Website-clone-Isro"
    },
    {
        title: "Kava DeFi Dashboard",
        description: "Decentralized finance platform with real-time analytics.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        videoId: "2dgt13nmN2s",
        demoUrl: "https://website-clone-kava.netlify.app",
        projectUrl: "https://github.com/DHRUVI5674/Website-clone-kava"
    },
    {
        title: "Nestroots E-Commerce",
        description: "Elegant home decor shopping experience with smooth transitions.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        videoId: "6vpYHaagiYc",
        demoUrl: "https://website-clone-nestroots.netlify.app",
        projectUrl: "https://github.com/DHRUVI5674/Website-clone-nestroots"
    },
    {
        title: "Ruggable Clone",
        description: "Premium rug styling e-commerce experience.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        videoId: "igbnSy7C2bM",
        demoUrl: "https://website-clone-ruggable.netlify.app",
        projectUrl: "https://github.com/DHRUVI5674/Website-clone-ruggable"
    },
    {
        title: "Ninjacart Clone",
        description: "B2B agriculture platform clone with product lists.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        videoId: "YOhMol-WcR0",
        demoUrl: "https://website-clone-ninjacart.netlify.app",
        projectUrl: "https://github.com/DHRUVI5674/Website-clone-ninjacart"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative bg-black/40">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="My Projects" subtitle="Compact view of my work" />

                {/* 3 Columns Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="group"
                        >
                            <Card className="h-full flex flex-col p-4 bg-slate-900/50 border-white/5 hover:border-neon-cyan/30 transition-all duration-300">
                                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${project.videoId}?modestbranding=1&rel=0`}
                                        title={project.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-2 py-0.5 bg-white/5 rounded text-[10px] text-gray-300 border border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-gray-400 hover:text-white transition-colors">
                                        <Github size={14} className="mr-1" /> Code
                                    </a>
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-neon-cyan hover:text-white transition-colors">
                                        <ExternalLink size={14} className="mr-1" /> Demo
                                    </a>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
