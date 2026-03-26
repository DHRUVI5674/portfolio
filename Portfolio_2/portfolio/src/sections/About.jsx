import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { FileDown, Terminal, Cpu, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const cards = [
        {
            title: "Technical Mastery",
            icon: <Terminal className="text-neon-cyan" size={32} />,
            description: "Expertise in the MERN stack with a focus on building robust, scalable architectures and high-performance server-side logic.",
            color: "from-neon-cyan/20 to-blue-600/5",
            border: "hover:border-neon-cyan/50 shadow-neon-cyan/10"
        },
        {
            title: "Creative Vision",
            icon: <Cpu className="text-purple-400" size={32} />,
            description: "Crafting immersive user interfaces that blend aesthetics with functionality, ensuring a seamless and engaging digital experience.",
            color: "from-purple-500/20 to-pink-500/5",
            border: "hover:border-purple-500/50 shadow-purple-500/10"
        },
        {
            title: "Strategic Execution",
            icon: <Zap className="text-yellow-400" size={32} />,
            description: "Dedicated to solving complex problems through efficient code, continuous learning, and pushing the boundaries of web technology.",
            color: "from-yellow-400/20 to-orange-500/5",
            border: "hover:border-yellow-400/50 shadow-yellow-400/10"
        }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-black/20">
            {/* Design Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
            
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="About Me" subtitle="A fusion of technology and creativity" />

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className={`relative group p-8 rounded-3xl bg-gradient-to-br ${card.color} border border-white/10 ${card.border} transition-all duration-500 backdrop-blur-sm overflow-hidden`}
                        >
                            {/* Card Background Glow */}
                            <div className="absolute -inset-24 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[80px] rounded-full" />
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6 p-4 bg-black/40 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                                    {card.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">
                                    {card.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg font-medium">
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-8 bg-white/5 p-12 rounded-[2rem] border border-white/10 text-center relative overflow-hidden group hover:border-neon-cyan/30 transition-all duration-500"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <h2 className="text-4xl md:text-6xl font-black text-white max-w-3xl leading-tight">
                        Ready to Bring <br />
                        <span className="text-neon-cyan">Visionary Ideas to Life</span>
                    </h2>
                    
                    <p className="text-gray-400 text-lg max-w-xl">
                        With a deep passion for the MERN stack and a commitment to quality, 
                        I build solutions that empower businesses and delight users.
                    </p>

                    <Button variant="primary" className="px-12 py-5 text-xl font-bold rounded-2xl group shadow-[0_0_30px_rgba(0,243,255,0.2)]" onClick={() => window.open('#', '_blank')}>
                        <span className="flex items-center gap-3">
                            <FileDown size={24} className="group-hover:translate-y-1 transition-transform" /> 
                            Download My Full Resume
                        </span>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
