import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Youtube, Twitter, Code2 } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const socials = [
    { icon: <Github size={24} />, href: "https://github.com/DHRUVI5674", label: "GitHub", color: "#6e7681", shadow: "rgba(110, 118, 129, 0.4)" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/dhruvi-patel-bb2b9239a/", label: "LinkedIn", color: "#0077b5", shadow: "rgba(0, 119, 181, 0.4)" },
    { icon: <Twitter size={24} />, href: "https://twitter.com/patel_dhru76113", label: "X (Twitter)", color: "#1da1f2", shadow: "rgba(29, 161, 242, 0.4)" },
    { icon: <Youtube size={24} />, href: "https://www.youtube.com/@Dhruvi_Patel_6", label: "YouTube", color: "#ff0000", shadow: "rgba(255, 0, 0, 0.4)" },
    { icon: <Code2 size={24} />, href: "https://leetcode.com/u/TR0kHGhQN9/", label: "LeetCode", color: "#ffa116", shadow: "rgba(255, 161, 22, 0.4)" },
];

const Profiles = () => {
    return (
        <section id="profiles" className="py-24 relative overflow-hidden bg-[#050505]">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionTitle 
                    title="Connect With Me" 
                    subtitle="Stay updated with my latest projects and coding milestones" 
                />

                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 mt-12 md:mt-16">
                    {socials.map((social, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Rotating Outer Dashed Ring (Visible only on hover) */}
                            <svg className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_10s_linear_infinite]">
                                <circle 
                                    cx="50%" cy="50%" r="48%" 
                                    stroke={social.color} 
                                    strokeWidth="2" 
                                    fill="none" 
                                    strokeDasharray="8 8" 
                                />
                            </svg>

                            {/* Secondary Outer Glow Ring */}
                            <div 
                                className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md pointer-events-none"
                                style={{ border: `2px solid ${social.color}`, boxShadow: `0 0 20px ${social.shadow}` }}
                            />

                            {/* Main Circular Icon Link */}
                            <motion.a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                whileHover={{ scale: 1.1 }}
                                className="relative w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white transition-all duration-500 backdrop-blur-md overflow-hidden z-10"
                            >
                                {/* Platform-colored background fill on hover */}
                                <div 
                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                    style={{ backgroundColor: social.color }}
                                />
                                
                                <span className="relative z-20 transition-transform duration-500 group-hover:scale-110">
                                    {social.icon}
                                </span>
                            </motion.a>

                            {/* Floating Tooltip/Label */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em] whitespace-nowrap bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-white/5">
                                    {social.label}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Profiles;
