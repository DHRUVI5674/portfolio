import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { GraduationCap, Calendar, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
    {
        degree: "Bachelor in Engineering in Computer Science",
        institution: "Codingita collaborated under Swaminarayan University",
        year: "2025 - 2029",
        description: "Pursuing Bachelor Degree focusing on Web Development, Programming, and Data Structures.",
        status: "Pursuing",
        icon: <Clock className="text-yellow-400" />
    },
    {
        degree: "HSC Education",
        institution: "Jawahar Navodaya Vidhyalaya (CBSE Board)",
        year: "Completed",
        description: "Completed my Class 12th with 85% in science.",
        status: "Completed",
        icon: <CheckCircle2 className="text-neon-cyan" />
    },
    {
        degree: "SSC Education",
        institution: "Jawahar Navodaya Vidhyalaya (CBSE Board)",
        year: "Completed",
        description: "Completed my Class 10th with 92.5%.",
        status: "Completed",
        icon: <CheckCircle2 className="text-neon-cyan" />
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <SectionTitle title="Education" subtitle="My academic journey and qualifications" />

                <div className="relative mt-20">
                    {/* Central Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-cyan via-purple-500 to-transparent hidden md:block" />

                    <div className="space-y-20">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Content Side */}
                                <div className="w-full md:w-1/2 mb-8 md:mb-0 relative">
                                    {/* Mobile: left bullet node */}
                                    <div className="md:hidden absolute -left-5 top-6 w-3 h-3 bg-slate-900 border-2 border-cyan-400 rounded-full shadow-[0_0_8px_rgba(0,243,255,0.5)]" />
                                    <div className={`p-5 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-cyan/50 transition-all duration-500 group relative ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500" />
                                        
                                        <div className="relative">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="p-3 bg-neon-cyan/10 rounded-xl text-neon-cyan group-hover:scale-110 transition-transform duration-500">
                                                    <GraduationCap size={24} />
                                                </div>
                                                <span className={`text-xs font-mono py-1 px-3 rounded-full border border-white/10 bg-white/5 ${edu.status === 'Pursuing' ? 'text-yellow-400' : 'text-neon-cyan'}`}>
                                                    {edu.status}
                                                </span>
                                            </div>

                                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                                                {edu.degree}
                                            </h3>

                                            <p className="text-purple-400 font-medium mb-4 italic">
                                                {edu.institution}
                                            </p>

                                            <p className="text-gray-400 leading-relaxed mb-6">
                                                {edu.description}
                                            </p>

                                            <div className="flex items-center text-sm text-gray-500 border-t border-white/5 pt-4">
                                                <Calendar size={16} className="mr-2" />
                                                {edu.year}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Node — desktop only */}
                                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-slate-900 border-4 border-neon-cyan rounded-full items-center justify-center z-20 shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                                    {edu.icon}
                                </div>

                                {/* Spacer for the other side on desktop */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
