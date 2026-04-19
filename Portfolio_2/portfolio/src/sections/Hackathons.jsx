import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Trophy, Code2, Lightbulb, Github, ExternalLink, Calendar, MapPin, Users2, Rocket, Target, Cpu, CheckCircle2, Zap } from 'lucide-react';
import hackathonImg from '../assets/hackathon.png';

const hackathons = [
    {
        title: "SU Innovation Hackathon 2026",
        project: "Sanjeevani (Initial Version)",
        event: "Sangam University × Sangam i-TBI",
        badge: "Participant",
        year: "2026",
        venue: "Sangam University, Bhilwara",
        team: "Team 4-Bits",
        image: hackathonImg,
        quote: "Built with raw determination and nothing but adrenaline.",
        description1: "Representing Swaminarayan University with 'Team 4-Bits', I spearheaded the development of industrial solutions during a relentless 48-hour innovation marathon in Bhilwara's iconic Textile City.",
        description2: "We architected a high-performance prototype designed to modernize regional industrial workflows, transforming abstract challenges into tangible engineering successes under tight deadlines.",
        contribution: "Architected scalable workflows, integrated real-time logic, and shipped a functional prototype within a 48-hour hackathon innovation cycle.",
        impact: "Established a strong foundation for regional innovation, with judges acknowledging practical implementation and real-world problem-solving applicability.",
        highlights: [
            "Strategically represented Swaminarayan University",
            "Delivered industrial prototype in 48 hours",
            "Recognized for practical implementation"
        ],
        techStack: ["React", "Node.js", "Supabase", "Vercel"],
        githubUrl: "https://github.com/DHRUVI5674/sanjeevani",
        demoUrl: "https://sanjeevani-ochre.vercel.app/"
    }
];

const Hackathons = () => {
    return (
        <section id="hackathons" className="py-24 relative overflow-hidden bg-[#050505] font-sans">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <SectionTitle
                    title="Hackathons"
                    subtitle="Engineering high-impact solutions through rapid innovation"
                />

                <div className="space-y-12">
                    {hackathons.map((hack, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            {/* Master Card */}
                            <div className="bg-[#0d1117] border border-white/8 rounded-3xl overflow-hidden shadow-2xl">
                                <div className="flex flex-col lg:flex-row">

                                    {/* LEFT: Image + Quote + Buttons */}
                                    <div className="lg:w-[42%] flex flex-col">
                                        {/* Image */}
                                        <div className="relative flex-1 min-h-[280px] lg:min-h-0 overflow-hidden">
                                            <img
                                                src={hack.image}
                                                alt={hack.title}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/90 via-transparent to-transparent" />
                                        </div>

                                        {/* Buttons */}
                                        <div className="p-5 border-t border-white/5">
                                            <div className="flex gap-3">
                                                <a
                                                    href={hack.demoUrl}
                                                    target="_blank" rel="noopener noreferrer"
                                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                                                >
                                                    <ExternalLink size={14} /> Live Demo
                                                </a>
                                                <a
                                                    href={hack.githubUrl}
                                                    target="_blank" rel="noopener noreferrer"
                                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                                                >
                                                    <Github size={14} /> Repository
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Divider */}
                                    <div className="hidden lg:block w-[1px] bg-white/5 flex-shrink-0" />

                                    {/* RIGHT: Technical Dashboard */}
                                    <div className="lg:flex-1 p-6 lg:p-8 flex flex-col gap-5 overflow-y-auto">
                                        {/* Badge + Title */}
                                        <div className="space-y-2">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-[10px] font-bold uppercase tracking-widest">
                                                <Trophy size={10} /> {hack.badge}
                                            </span>
                                            <h3 className="text-2xl lg:text-3xl font-black text-white">{hack.title}</h3>
                                            <p className="text-gray-400 text-sm">
                                                <span className="text-white font-semibold">Project:</span> {hack.project}
                                            </p>
                                        </div>

                                        {/* Metadata Row */}
                                        <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                                            <span className="flex items-center gap-1.5"><Calendar size={12} className="text-blue-400" />{hack.year}</span>
                                            <span className="flex items-center gap-1.5"><MapPin size={12} className="text-blue-400" />{hack.venue}</span>
                                            <span className="flex items-center gap-1.5"><Users2 size={12} className="text-blue-400" />{hack.team}</span>
                                        </div>

                                        {/* Descriptions */}
                                        <div className="space-y-2 text-gray-300 text-sm leading-relaxed">
                                            <p>{hack.description1}</p>
                                            <p>{hack.description2}</p>
                                        </div>

                                        {/* Contribution & Impact */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-4 space-y-2">
                                                <p className="text-[10px] font-black text-white uppercase tracking-widest">Contribution</p>
                                                <p className="text-gray-400 text-xs leading-relaxed">{hack.contribution}</p>
                                            </div>
                                            <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-4 space-y-2">
                                                <p className="text-[10px] font-black text-white uppercase tracking-widest">Impact</p>
                                                <p className="text-gray-400 text-xs leading-relaxed">{hack.impact}</p>
                                            </div>
                                        </div>

                                        {/* Highlights + Tech Stack */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <p className="text-[10px] font-black text-white uppercase tracking-widest">Highlights</p>
                                                <ul className="space-y-1.5">
                                                    {hack.highlights.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-gray-400 text-xs">
                                                            <CheckCircle2 size={13} className="text-green-400 mt-0.5 flex-shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-[10px] font-black text-white uppercase tracking-widest">Tech Stack Used</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {hack.techStack.map((tech, i) => (
                                                        <span key={i} className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-gray-300">
                                                            <Code2 size={10} className="text-blue-400" />{tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
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
