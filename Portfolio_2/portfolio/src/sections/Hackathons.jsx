import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Trophy, Code2, Users, Lightbulb, Github, ExternalLink } from 'lucide-react';
import hackathonImg from '../assets/hackathon.png';

const hackathons = [
    {
        title: "Global Tech Innovation Hackathon",
        event: "TechFest 2026",
        date: "March 2026",
        image: hackathonImg,
        experience: "Participating in this 48-hour challenge was an exhilarating journey into collaborative problem-solving. Working under pressure with a cross-functional team, I learned the importance of rapid prototyping and effective communication.",
        projectDescription: "We developed 'EcoSync', an AI-powered platform that optimizes energy consumption in smart homes. I was responsible for building the real-time dashboard using React and integrating the IoT sensor data via a Node.js backend.",
        achievements: ["Top 10 Finalist", "Special Mention for UI/UX", "Best Use of Cloud Tech"],
        githubUrl: "https://github.com/DHRUVI5674",
        demoUrl: "#"
    }
];

const Hackathons = () => {
    return (
        <section id="hackathons" className="py-24 relative overflow-hidden bg-black/50">
            {/* Background blue glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionTitle
                    title="Hackathons"
                    subtitle="Competitive coding and collaborative innovation"
                />

                <div className="space-y-20">
                    {hackathons.map((hack, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="grid lg:grid-cols-12 gap-12 items-center">
                                {/* Image side */}
                                <div className="lg:col-span-12 xl:col-span-5 relative">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                                    <div className="relative overflow-hidden rounded-3xl border border-white/10 aspect-video lg:aspect-square">
                                        <img
                                            src={hack.image}
                                            alt={hack.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        <div className="absolute bottom-6 left-6">
                                            <div className="flex items-center gap-3 bg-blue-600/90 backdrop-blur-md px-4 py-2 rounded-full border border-blue-400/30">
                                                <Trophy size={20} className="text-yellow-400" />
                                                <span className="text-white font-bold text-sm tracking-wide">{hack.event}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content side */}
                                <div className="lg:col-span-12 xl:col-span-7 space-y-8">
                                    <div>
                                        <div className="text-blue-400 font-mono text-sm mb-2 font-bold tracking-widest uppercase">{hack.date}</div>
                                        <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                                            {hack.title}
                                        </h3>
                                        <p className="text-gray-300 text-lg leading-relaxed italic border-l-4 border-blue-500 pl-6 py-2 mb-6">
                                            "{hack.experience}"
                                        </p>

                                        <div className="flex gap-4">
                                            <a
                                                href={hack.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-bold text-white transition-all hover:border-blue-500/50"
                                            >
                                                <Github size={18} className="text-blue-400" /> GitHub Code
                                            </a>
                                            <a
                                                href={hack.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-full text-sm font-bold text-blue-400 transition-all hover:border-blue-500"
                                            >
                                                <ExternalLink size={18} /> Live Demo
                                            </a>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                    <Code2 size={24} />
                                                </div>
                                                <h4 className="text-xl font-bold text-white">The Project</h4>
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {hack.projectDescription}
                                            </p>
                                        </div>

                                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                                    <Lightbulb size={24} />
                                                </div>
                                                <h4 className="text-xl font-bold text-white">Achievements</h4>
                                            </div>
                                            <ul className="space-y-2">
                                                {hack.achievements.map((item, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hackathons;

