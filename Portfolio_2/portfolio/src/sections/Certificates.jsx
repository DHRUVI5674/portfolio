import React, { useState, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';
import { Award, ChevronLeft, ChevronRight, LayoutGrid, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all certificate images from assets
import freecodecampImg from '../assets/freecodecamp_responsive.png';
import letsupgradeImg from '../assets/letsupgrade_react.png';
import cCertImg from '../assets/c_cert.png';
import cSoloImg from '../assets/c_solo.png';
import cppSimpliImg from '../assets/cpp_simpli.png';
import cppSoloImg from '../assets/cpp_solo.png';
import cssCertImg from '../assets/css_cert.png';
import cssSoloImg from '../assets/css_solo.png';
import htmlCertImg from '../assets/html_cert.png';
import htmlSoloImg from '../assets/html_solo.png';
import figmaLetsImg from '../assets/figma_lets.png';
import ghUnstopImg from '../assets/gh_unstop.png';
import iitUnstopImg from '../assets/iit_unstop.png';
import iiscUnstopImg from '../assets/iisc_banglore_unstop.png';
import jsHackerImg from '../assets/js_hacker.png';
import jsSoloImg from '../assets/js_solo.png';
import problemHackerImg from '../assets/problem_hacker.png';
import problemSolvingImg from '../assets/problem_solving_cert.png';

const certificates = [
    {
        title: "Legacy Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "2025",
        description: "Comprehensive certification covering modern HTML5, CSS3, Flexbox, and CSS Grid patterns for building responsive, accessible user interfaces.",
        image: freecodecampImg
    },
    {
        title: "React JS Development",
        issuer: "LetsUpgrade",
        date: "2026",
        description: "Hands-on bootcamp certification focused on React hooks, component lifecycle, and state management in collaboration with NSDC.",
        image: letsupgradeImg
    },
    {
        title: "C Language Fundamentals",
        issuer: "SoloLearn",
        date: "2026",
        description: "Verified certification in C programming, mastering syntax, control flows, and efficient memory management techniques.",
        image: cCertImg
    },
    {
        title: "C++ Advanced Course",
        issuer: "Simplilearn",
        date: "2026",
        description: "Advanced concepts in C++, including OOPs, templates, and STL, focused on high-performance application development.",
        image: cppSimpliImg
    },
    {
        title: "Modern JavaScript",
        issuer: "HackerRank",
        date: "2026",
        description: "Validation of JavaScript proficiency, covering ES6+ features, closures, and asynchronous programming patterns.",
        image: jsHackerImg
    },
    {
        title: "Problem Solving Skills",
        issuer: "HackerRank",
        date: "2026",
        description: "Certified in algorithmic problem-solving and logical reasoning through rigorous coding challenges and data structure implementations.",
        image: problemSolvingImg
    },
    {
        title: "UI/UX Design with Figma",
        issuer: "LetsUpgrade",
        date: "2026",
        description: "Professional training in interface design, prototyping, and user experience principles using Industry-standard tools like Figma.",
        image: figmaLetsImg
    },
    {
        title: "GitHub Global Campus",
        issuer: "GitHub & Unstop",
        date: "2025",
        description: "Recognition for active participation in the global developer community and mastery of version control workflows.",
        image: ghUnstopImg
    },
    {
        title: "Advanced CSS Styling",
        issuer: "SoloLearn",
        date: "2026",
        description: "In-depth study of layout engines, animations, and complex styling patterns for high-fidelity web experiences.",
        image: cssCertImg
    },
    {
        title: "HTML Architecture",
        issuer: "SoloLearn",
        date: "2026",
        description: "Mastery of semantic markup and document object model structure for optimal SEO and accessibility.",
        image: htmlCertImg
    },
    {
        title: "IIT Madras Event",
        issuer: "IIT Madras & Unstop",
        date: "2026",
        description: "Certification for participation and performance in technical events hosted by IIT Madras.",
        image: iitUnstopImg
    },
    {
        title: "IISc Bangalore Workshop",
        issuer: "IISc Bangalore",
        date: "2026",
        description: "Participation in advanced technical workshops and research-oriented seminars at IISc Bangalore.",
        image: iiscUnstopImg
    }
];

const Certificates = () => {
    const [showAll, setShowAll] = useState(false);
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            current.scrollBy({
                left: direction === 'left' ? -360 : 360,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="certificates" className="py-24 relative overflow-hidden bg-[#050505]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionTitle
                    title="Certifications"
                    subtitle="Validating my expertise through rigorous training and milestones"
                />

                {/* Toggle View */}
                <div className="flex justify-center mb-12">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                            showAll
                                ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/20'
                                : 'bg-white/5 text-gray-400 border-white/10 hover:border-blue-500/40 hover:text-white'
                        }`}
                    >
                        {showAll ? (
                            <><SlidersHorizontal size={14} /> Switch to Slider</>
                        ) : (
                            <><LayoutGrid size={14} /> View All Grid</>
                        )}
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    {showAll ? (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {certificates.map((cert, index) => (
                                <CertificateCard key={index} cert={cert} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="slider"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative group/slider"
                        >
                            <button
                                onClick={() => scroll('left')}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 bg-[#0d1117]/90 border border-white/10 rounded-full text-white opacity-0 group-hover/slider:opacity-100 group-hover/slider:translate-x-0 transition-all hover:bg-blue-600 shadow-xl"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 bg-[#0d1117]/90 border border-white/10 rounded-full text-white opacity-0 group-hover/slider:opacity-100 group-hover/slider:translate-x-0 transition-all hover:bg-blue-600 shadow-xl"
                            >
                                <ChevronRight size={20} />
                            </button>

                            <div
                                ref={scrollRef}
                                className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory px-2"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                {certificates.map((cert, index) => (
                                    <div key={index} className="min-w-full md:min-w-[45%] lg:min-w-[32%] snap-center">
                                        <CertificateCard cert={cert} />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

const CertificateCard = ({ cert }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative h-full flex flex-col bg-[#0d1117] rounded-[1.5rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-blue-500/10"
    >
        {/* Top glow on hover */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Certificate Image - Full View */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0a0e14] flex items-center justify-center p-3">
            <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Certificate'; }}
            />
        </div>

        {/* Content - Expanded */}
        <div className="flex flex-col flex-grow p-5 gap-4">
            {/* Issuer + Date badges */}
            <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 text-[10px] font-bold uppercase tracking-wider text-blue-400">
                    <Award size={10} />
                    {cert.issuer}
                </span>
                <span className="px-2.5 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold text-gray-400">
                    {cert.date}
                </span>
            </div>

            <h3 className="text-base font-bold text-white leading-snug tracking-tight group-hover:text-blue-300 transition-colors duration-300">
                {cert.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {cert.description}
            </p>

            {/* View Certificate Button */}
            <button
                onClick={() => window.open(cert.image, '_blank')}
                className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest border border-white/8 bg-white/[0.03] text-gray-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-300 group/btn"
            >
                <Award size={13} className="text-blue-400 group-hover/btn:text-white transition-colors" />
                View Certificate
                <ArrowUpRight size={13} className="opacity-50 group-hover/btn:opacity-100 transition-all" />
            </button>
        </div>
    </motion.div>
);

export default Certificates;

