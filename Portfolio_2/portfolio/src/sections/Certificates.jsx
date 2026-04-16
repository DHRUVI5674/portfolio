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
            const scrollAmount = 350;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="certificates" className="py-24 relative overflow-hidden bg-black/40">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] -ml-48 -mb-48" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionTitle 
                    title="Certifications" 
                    subtitle="Validating my expertise through rigorous training and milestones" 
                />

                <div className="flex justify-center mb-12">
                    <button 
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center gap-2 px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group"
                    >
                        {showAll ? (
                            <>
                                <SlidersHorizontal size={18} className="text-blue-400" />
                                <span className="text-sm font-medium text-gray-300">Switch to Slider</span>
                            </>
                        ) : (
                            <>
                                <LayoutGrid size={18} className="text-blue-400" />
                                <span className="text-sm font-medium text-gray-300">View All Grid</span>
                            </>
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
                            {/* Navigation Arrows */}
                            <button 
                                onClick={() => scroll('left')}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 bg-slate-900/80 border border-white/10 rounded-full text-white opacity-0 group-hover/slider:opacity-100 group-hover/slider:translate-x-0 transition-all hover:bg-blue-600 shadow-xl"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            
                            <button 
                                onClick={() => scroll('right')}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 bg-slate-900/80 border border-white/10 rounded-full text-white opacity-0 group-hover/slider:opacity-100 group-hover/slider:translate-x-0 transition-all hover:bg-blue-600 shadow-xl"
                            >
                                <ChevronRight size={24} />
                            </button>

                            {/* Slider Container */}
                            <div 
                                ref={scrollRef}
                                className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-4"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                {certificates.map((cert, index) => (
                                    <div key={index} className="min-w-full md:min-w-[45%] lg:min-w-[31%] snap-center">
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
    <Card className="h-full flex flex-col group/card border-white/10 hover:border-blue-500/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-slate-800">
            <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110 opacity-70 group-hover/card:opacity-100"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Certificate' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Award className="text-blue-400 w-8 h-8" />
                </div>
            </div>
        </div>

        <div className="flex-grow flex flex-col text-center px-2">
            <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-1 group-hover/card:text-blue-400 transition-colors uppercase tracking-tight">
                    {cert.title}
                </h3>
                <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
                    {cert.issuer} • {cert.date}
                </p>
            </div>
            
            <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-grow italic line-clamp-3">
                "{cert.description}"
            </p>

            <Button 
                variant="primary" 
                className="w-full text-xs py-2.5 border border-blue-500/30 font-medium flex items-center justify-center gap-2 group/btn transition-all hover:bg-blue-600/10"
                onClick={() => window.open(cert.image, '_blank')}
            >
                Preview Certificate 
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Button>
        </div>
    </Card>
);

export default Certificates;

