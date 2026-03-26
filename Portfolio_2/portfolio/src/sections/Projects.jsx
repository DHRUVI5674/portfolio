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
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
        demoUrl: "https://website-clone-squarespace.netlify.app",
        projectUrl: "https://github.com/DHRUVI5674/Website-clone-squarespace"
    },
    {
        title: "ISRO Website Redesign",
        description: "Interactive portal for Indian Space Research Organisation.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80&w=400",
        demoUrl: "https://website-clone-isro.netlify.app",
        projectUrl: "https://github.com/DHRUVI5674/Website-clone-Isro"
    },
    {
        title: "Kava DeFi Dashboard",
        description: "Decentralized finance platform with real-time analytics.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=400",
        demoUrl: "https://website-clone-kava.netlify.app",
        projectUrl: "https://github.com/DHRUVI5674/Website-clone-kava"
    },
    {
        title: "Nestroots E-Commerce",
        description: "Elegant home decor shopping experience with smooth transitions.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=400",
        demoUrl: "https://website-clone-nestroots.netlify.app",
        projectUrl: "https://github.com/DHRUVI5674/Website-clone-nestroots"
    }
];

const youtubeVideos = [
    { id: "YOhMol-WcR0", title: "Ninjacart Clone" },
    { id: "igbnSy7C2bM", "title": "Ruggable Clone" },
    { id: "6vpYHaagiYc", title: "Nestroots Clone" },
    { id: "2dgt13nmN2s", title: "Kava Clone" },
    { id: "wgKym2cge3Q", title: "ISRO Clone" },
    { id: "7WET9TN4DPI", title: "Squarespace Clone" }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative bg-black/40">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="My Projects" subtitle="Compact view of my work" />

                {/* Single Row Horizontal Scroll Container */}
                <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center md:overflow-x-auto pb-16 md:px-4 mask-fade">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="min-w-[280px] w-full md:w-[300px] group"
                        >
                            <Card className="h-full flex flex-col p-4 bg-slate-900/50 border-white/5 hover:border-neon-cyan/30 transition-all duration-300">
                                <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
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

                {/* YouTube Highlights Section */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-white mb-10 text-center flex items-center justify-center">
                        <span className="w-12 h-[2px] bg-red-600 mr-4"></span>
                        YouTube Highlights
                        <span className="w-12 h-[2px] bg-red-600 ml-4"></span>
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {youtubeVideos.map((video, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-red-600/50 transition-all duration-300 shadow-xl"
                            >
                                <div className="aspect-video relative overflow-hidden">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0`}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <h4 className="text-white font-semibold truncate group-hover:text-red-500 transition-colors">
                                        {video.title}
                                    </h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    
                    <div className="mt-12 text-center">
                        <a 
                            href="https://www.youtube.com/@Dhruvi_Patel_6" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/20"
                        >
                            <ExternalLink size={18} className="mr-2" />
                            Visit My Channel
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
