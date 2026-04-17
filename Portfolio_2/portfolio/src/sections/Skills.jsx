import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { Code, Server, Wrench } from 'lucide-react';
import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
    SiNodedotjs, SiExpress, SiMongodb, SiMysql,
    SiGit, SiDocker, SiVercel
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
    return (
        <section id="skills" className="py-16 bg-black/40 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionTitle title="Technical Skills" subtitle="My Tech Stack Architecture" />

                <div className="flex flex-col items-center">

                    {/* Level 1: Root Node (JavaScript/Core) */}
                    <div className="relative mb-16">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            className="w-24 h-24 bg-slate-900 border-2 border-neon-cyan rounded-2xl flex flex-col items-center justify-center shadow-[0_0_40px_rgba(0,243,255,0.4)] relative z-20"
                        >
                            <Code size={32} className="text-neon-cyan mb-2" />
                            <span className="text-white font-bold text-sm">Full Stack</span>
                        </motion.div>
                        {/* Vertical Line Down */}
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: 64 }}
                            transition={{ delay: 0.2 }}
                            className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-neon-cyan to-purple-500 z-10"
                        />
                    </div>

                    {/* Level 2: Categories Container */}
                    <div className="relative w-full max-w-6xl">
                        {/* Horizontal Connector Bar */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ delay: 0.4 }}
                            className="hidden md:block absolute top-0 left-[16%] right-[16%] h-1 bg-purple-500 rounded-full origin-center"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16">
                            {/* Branch 1: Frontend */}
                            <div className="flex flex-col items-center relative">
                                {/* Vertical Connector from Bar */}
                                <div className="hidden md:block absolute -top-16 left-1/2 -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-purple-500 to-slate-800" />

                                <Node title="Frontend" icon={<Code />} color="border-purple-500 text-purple-400" />

                                {/* Vertical Line to Children */}
                                <div className="h-8 w-1 bg-slate-800 my-2" />

                                <div className="flex flex-col gap-6 relative items-center">
                                    <div className="absolute top-0 bottom-12 left-1/2 -translate-x-1/2 w-0.5 bg-slate-800" />

                                    <div className="grid grid-cols-2 gap-4">
                                        <LeafNode icon={<SiReact size={32} />} text="React" color="text-cyan-400" index={0} />
                                        <LeafNode icon={<SiNextdotjs size={32} />} text="Next.js" color="text-white" index={1} />
                                        <LeafNode icon={<SiTailwindcss size={32} />} text="Tailwind" color="text-cyan-300" index={2} />
                                        <LeafNode icon={<SiJavascript size={32} />} text="JavaScript" color="text-yellow-400" index={3} />
                                        <LeafNode icon={<SiHtml5 size={32} />} text="HTML5" color="text-orange-500" index={4} />
                                        <LeafNode icon={<SiCss3 size={32} />} text="CSS3" color="text-blue-500" index={5} />
                                    </div>
                                </div>
                            </div>

                            {/* Branch 2: Backend */}
                            <div className="flex flex-col items-center relative">
                                {/* Vertical Connector from Bar */}
                                <div className="hidden md:block absolute -top-16 left-1/2 -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-purple-500 to-slate-800" />

                                <Node title="Backend" icon={<Server />} color="border-neon-cyan text-neon-cyan" />

                                {/* Vertical Line to Children */}
                                <div className="h-8 w-1 bg-slate-800 my-2" />

                                <div className="flex flex-col gap-6 relative items-center">
                                    <div className="absolute top-0 bottom-12 left-1/2 -translate-x-1/2 w-0.5 bg-slate-800" />

                                    <div className="grid grid-cols-2 gap-4">
                                        <LeafNode icon={<SiNodedotjs size={32} />} text="Node.js" color="text-green-500" index={0} />
                                        <LeafNode icon={<SiExpress size={32} />} text="Express" color="text-gray-400" index={1} />
                                        <LeafNode icon={<SiMongodb size={32} />} text="MongoDB" color="text-green-400" index={2} />
                                        <LeafNode icon={<SiMysql size={32} />} text="MySQL" color="text-blue-400" index={3} />
                                    </div>
                                </div>
                            </div>

                            {/* Branch 3: Tools */}
                            <div className="flex flex-col items-center relative">
                                {/* Vertical Connector from Bar */}
                                <div className="hidden md:block absolute -top-16 left-1/2 -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-purple-500 to-slate-800" />

                                <Node title="Tools" icon={<Wrench />} color="border-pink-500 text-pink-400" />

                                {/* Vertical Line to Children */}
                                <div className="h-8 w-1 bg-slate-800 my-2" />

                                <div className="flex flex-col gap-6 relative items-center">
                                    <div className="absolute top-0 bottom-12 left-1/2 -translate-x-1/2 w-0.5 bg-slate-800" />

                                    <div className="grid grid-cols-2 gap-4">
                                        <LeafNode icon={<SiGit size={32} />} text="Git" color="text-orange-600" index={0} />
                                        <LeafNode icon={<SiDocker size={32} />} text="Docker" color="text-blue-500" index={1} />
                                        <LeafNode icon={<VscVscode size={32} />} text="VS Code" color="text-blue-400" index={2} />
                                        <LeafNode icon={<SiVercel size={32} />} text="Vercel" color="text-white" index={3} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Node = ({ title, icon, color }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className={`w-40 p-4 bg-slate-900 border ${color} rounded-xl shadow-lg flex flex-col items-center justify-center gap-2 z-10 relative`}
    >
        <span className="text-2xl">{icon}</span>
        <span className="text-white font-bold">{title}</span>
    </motion.div>
);

const LeafNode = ({ icon, text, color, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="w-28 h-28 p-4 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center gap-3 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all cursor-default z-10 shadow-lg group"
    >
        <span className={`${color} group-hover:scale-110 transition-transform duration-300`}>{icon}</span>
        <span className="text-sm font-medium text-gray-300 group-hover:text-white">{text}</span>
    </motion.div>
);

export default Skills;
