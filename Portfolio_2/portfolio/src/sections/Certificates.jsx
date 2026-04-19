import React, { useState, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';
import { Award, ChevronLeft, ChevronRight, LayoutGrid, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all certificate images from assets
import freecodecampImg from '../assets/freecodecamp_responsive.png';
import letsupgradeImg from '../assets/letsupgrade_react.png';
import cSoloImg from '../assets/c_solo.png';
import cppSimpliImg from '../assets/cpp_simpli.png';
import cppSoloImg from '../assets/cpp_solo.png';
import cssSoloImg from '../assets/css_solo.png';
import htmlSoloImg from '../assets/html_solo.png';
import figmaLetsImg from '../assets/figma_lets.png';
import ghUnstopImg from '../assets/gh_unstop.png';
import iitUnstopImg from '../assets/iit_unstop.png';
import iiscUnstopImg from '../assets/iisc_banglore_unstop.png';
import jsHackerImg from '../assets/js_hacker.png';
import jsSoloImg from '../assets/js_solo.png';
import problemHackerImg from '../assets/problem_hacker.png';

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
        image: cSoloImg
    },
    {
        title: "C++ Advanced Course",
        issuer: "Simplilearn",
        date: "2026",
        description: "Advanced concepts in C++, including OOPs, templates, and STL, focused on high-performance application development.",
        image: cppSimpliImg
    },
    {
        title: "C++ Programming",
        issuer: "SoloLearn",
        date: "2026",
        description: "Certification in C++ covering object-oriented programming, classes, and inheritance patterns.",
        image: cppSoloImg
    },
    {
        title: "Modern JavaScript",
        issuer: "HackerRank",
        date: "2026",
        description: "Validation of JavaScript proficiency, covering ES6+ features, closures, and asynchronous programming patterns.",
        image: jsHackerImg
    },
    {
        title: "JavaScript Basics",
        issuer: "SoloLearn",
        date: "2026",
        description: "Foundational certification in JavaScript programming, focusing on core logic and DOM manipulation.",
        image: jsSoloImg
    },
    {
        title: "Problem Solving Skills",
        issuer: "HackerRank",
        date: "2026",
        description: "Certified in algorithmic problem-solving and logical reasoning through rigorous coding challenges and data structure implementations.",
        image: problemHackerImg
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
        image: cssSoloImg
    },
    {
        title: "HTML Architecture",
        issuer: "SoloLearn",
        date: "2026",
        description: "Mastery of semantic markup and document object model structure for optimal SEO and accessibility.",
        image: htmlSoloImg
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
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                
                <div className="hidden">
                    <SectionTitle
                        title="Certifications"
                        subtitle="Validating my expertise through rigorous training and milestones"
                    />
                </div>

                {/* Toggle View */}
                <div className="flex justify-center mb-10 sm:mb-12">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest border transition-all duration-300 bg-white/[0.03] text-gray-400 border-white/[0.08] hover:bg-white/[0.08] hover:text-white hover:border-white/20"
                    >
                        {showAll ? (
                            <><SlidersHorizontal size={14} /> SWITCH TO SLIDER</>
                        ) : (
                            <><LayoutGrid size={14} /> VIEW ALL GRID</>
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
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
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
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 bg-[#11151c]/90 border border-white/5 rounded-full text-white opacity-0 group-hover/slider:opacity-100 -translate-x-4 group-hover/slider:translate-x-0 transition-all hover:bg-white/10 shadow-xl hidden md:block"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 bg-[#11151c]/90 border border-white/5 rounded-full text-white opacity-0 group-hover/slider:opacity-100 translate-x-4 group-hover/slider:translate-x-0 transition-all hover:bg-white/10 shadow-xl hidden md:block"
                            >
                                <ChevronRight size={20} />
                            </button>

                            <div
                                ref={scrollRef}
                                className="flex gap-4 md:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-1"
                            >
                                {certificates.map((cert, index) => (
                                    <div key={index} className="w-[85vw] sm:w-[45vw] lg:w-[calc(33.333%-1rem)] snap-center flex-shrink-0">
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
        className="group relative h-full flex flex-col bg-[#11151c] rounded-[1.25rem] border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden shadow-lg"
    >
        {/* Certificate Image - Full View */}
        <div className="relative w-full aspect-[1.4] overflow-hidden p-4 sm:p-5 flex items-center justify-center">
            <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain rounded-lg"
                loading="lazy"
                onError={(e) => {
                    e.target.onerror = null; // prevents infinite loop
                    e.target.src = '';
                    e.target.parentElement.classList.add('bg-slate-800');
                }}
            />
        </div>

        {/* Content - Expanded */}
        <div className="flex flex-col flex-grow px-5 pb-5 pt-1 gap-4">
            {/* Issuer + Date badges */}
            <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider text-blue-500">
                    <Award size={12} />
                    {cert.issuer}
                </span>
                <span className="px-2.5 py-1 bg-white/[0.04] border border-white/5 rounded-full text-[10px] font-bold text-gray-400">
                    {cert.date}
                </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white leading-snug tracking-tight">
                {cert.title}
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-grow line-clamp-3 mb-2">
                {cert.description}
            </p>

            {/* View Certificate Button */}
            <button
                onClick={() => window.open(cert.image, '_blank')}
                className="mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-white/[0.04] bg-black/30 text-gray-300 hover:bg-white/[0.04] hover:text-white transition-all duration-300 group/btn"
            >
                <Award size={14} className="text-blue-500 opacity-80" />
                VIEW CERTIFICATE
                <ArrowUpRight size={14} className="opacity-50 group-hover/btn:opacity-100 transition-opacity" />
            </button>
        </div>
    </motion.div>
);

export default Certificates;


