import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { FileDown, Terminal, Cpu, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const About = () => {
    const highlights = [
        { label: "Experience", value: "2+ Years", color: "text-blue-400" },
        { label: "Projects", value: "30+", color: "text-cyan-400" },
        { label: "Clients", value: "15+", color: "text-indigo-400" },
        { label: "Tech Stack", value: "10+", color: "text-blue-500" },
    ];

    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <Helmet>
                <title>About Me | Dhruvi Patel</title>
                <meta name="description" content="Learn more about Dhruvi Patel, a Full-Stack Developer with experience in building responsive, modern web applications." />
            </Helmet>
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionTitle title="About Me" subtitle="Pioneering the next generation of web experiences" />

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            I am a <span className="text-blue-400">Full-Stack Architect</span> <br /> 
                            based in India.
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            With a passion for building high-performance, futuristic web applications, I specialize in the MERN stack. My approach combines technical precision with creative flair, ensuring every project is not just functional but also visually stunning.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10">
                            I thrive on solving complex architectural challenges and am constantly exploring the boundaries of modern technologies like AI and space-age UI design.
                        </p>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {highlights.map((stat, i) => (
                                <motion.div 
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md"
                                >
                                    <div className={`text-2xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
                                    <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-[3rem] rotate-3 opacity-20 blur-xl" />
                        <div className="relative p-1 bg-gradient-to-br from-white/20 to-transparent rounded-[3rem] overflow-hidden backdrop-blur-3xl border border-white/10">
                            <div className="bg-slate-900/40 p-12 rounded-[2.8rem]">
                                <div className="space-y-8">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                                            <Zap size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Fast Performance</h4>
                                            <p className="text-gray-400 text-sm">Optimizing load times and interaction responsiveness is my top priority.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                                            <Cpu size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Modern Stack</h4>
                                            <p className="text-gray-400 text-sm">Using the latest tools and frameworks to build future-proof solutions.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                                            <Terminal size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">Clean Code</h4>
                                            <p className="text-gray-400 text-sm">Writing maintainable, readable, and efficient code for long-term success.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
