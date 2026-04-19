import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Terminal, Cpu, Zap, Trophy, Shield, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const highlights = [
        { label: "LeetCode Solved", value: "150+", color: "text-blue-400" },
        { label: "Projects Built", value: "10+", color: "text-cyan-400" },
        { label: "Sem 1 SCPA", value: "10/10", color: "text-indigo-400" },
        { label: "Tech Stack", value: "10+", color: "text-blue-500" },
    ];

    return (
        <section id="about" className="py-16 relative overflow-hidden">
            
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionTitle title="About Me" subtitle="Bridging imagination with technical excellence" />

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight tracking-tight">
                            Building <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Scalable</span> & <br />
                            Modern Web Apps
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            I'm a first-year <span className="text-white font-semibold underline decoration-blue-500/30">Computer Science Engineering student</span> at Swaminarayan University (Semester 1 SCPA: 10/10), specializing in the <span className="text-white font-semibold">MERN Stack</span>. Experienced in building production-grade systems including a full-stack healthcare platform and real-time communication tools.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10">
                            Strong focus on <span className="text-white font-semibold">clean code, scalable architecture, and intuitive UI/UX</span>. I've solved 150+ problems on LeetCode with a strong grasp of arrays, strings, recursion, and dynamic programming.
                        </p>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 mt-8">
                            {highlights.map((stat, i) => (
                                <motion.div 
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl backdrop-blur-md hover:border-blue-500/30 transition-colors flex flex-col items-center sm:items-start text-center sm:text-left"
                                >
                                    <div className={`text-xl md:text-2xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
                                    <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 font-bold leading-tight">{stat.label}</div>
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
                        <div className="relative p-1 bg-gradient-to-br from-white/20 to-transparent rounded-[2rem] md:rounded-[3rem] overflow-hidden backdrop-blur-3xl border border-white/10">
                            <div className="bg-slate-900/40 p-6 sm:p-8 md:p-12 rounded-[1.8rem] md:rounded-[2.8rem]">
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


