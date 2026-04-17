import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        title: "Squarespace Clone",
        description: "Modern website builder platform clone with dynamic layout engine.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        category: "Clone",
        videoId: "sE_UZ-hmt9U",
        demoUrl: "https://website-clone-squarespace.netlify.app",
        projectUrl: "https://github.com/DHRUVI5674/Website-clone-squarespace"
    },
    {
        title: "ISRO Website Redesign",
        description: "Interactive portal for Indian Space Research Organisation.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        category: "Clone",
        videoId: "LAybIoYhSS8",
        demoUrl: "https://website-clone-isro.netlify.app",
        projectUrl: "https://github.com/DHRUVI5674/Website-clone-Isro"
    },
    {
        title: "Kava DeFi Dashboard",
        description: "Decentralized finance platform with real-time analytics.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        category: "Clone",
        videoId: "XWBuN_PB16w",
        demoUrl: "https://website-clone-kava.netlify.app",
        projectUrl: "https://github.com/DHRUVI5674/Website-clone-kava"
    },
    {
        title: "Nestroots E-Commerce",
        description: "Elegant home decor shopping experience with smooth transitions.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        category: "Clone",
        videoId: "ZlfJZ5uJIvg",
        demoUrl: "https://website-clone-nestroots.netlify.app",
        projectUrl: "https://github.com/DHRUVI5674/Website-clone-nestroots"
    },
    {
        title: "Ruggable Clone",
        description: "Premium rug styling e-commerce experience.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        category: "Clone",
        videoId: "u1d5Kimx1j8",
        demoUrl: "https://website-clone-ruggable.netlify.app",
        projectUrl: "https://github.com/DHRUVI5674/Website-clone-ruggable"
    },
    {
        title: "Ninjacart Clone",
        description: "B2B agriculture platform clone with product lists.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        category: "Clone",
        videoId: "I3sKBs5BuIw",
        demoUrl: "https://website-clone-ninjacart.netlify.app",
        projectUrl: "https://github.com/DHRUVI5674/Website-clone-ninjacart"
    },
    {
        title: "Sanjeevani",
        description: "QR-based emergency health record system for rapid patient data access.",
        tech: ["React", "Node.js", "Supabase"],
        category: "Full Stack",
        imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
        demoUrl: "https://sanjeevani-ochre.vercel.app/",
        projectUrl: "https://github.com/DHRUVI5674/sanjeevani"
    },
    {
        title: "Pincode Analyzer",
        description: "A smart pincode intelligence tool that fetches location details, post office data, and regional insights instantly from any Indian pincode.",
        tech: ["React", "REST API", "Vercel"],
        category: "Full Stack",
        imageUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
        demoUrl: "https://pincode-analyzer.vercel.app",
        projectUrl: "https://github.com/DHRUVI5674/pincode_analyzer"
    },
    {
        title: "Explore the World, One Journey at a Time",
        description: "Book flights, hotels, and unforgettable experiences with ease. Discover destinations, compare prices, and plan your perfect trip—all in one place.",
        tech: ["Figma", "UI/UX", "Travel App"],
        category: "Figma",
        previewImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
        figmaLink: "https://www.figma.com/design/EU7fWNEOf7R8JaT9M266X3/Untitled?node-id=0-1&t=nPKkL87VrtQbu9hA-1"
    },
    {
        title: "Book Tickets for Movies, Events & More",
        description: "Discover the latest movies, concerts, sports, and live events happening near you. Book tickets instantly with a seamless and secure experience.",
        tech: ["Figma", "UI/UX", "Ticket Booking"],
        category: "Figma",
        previewImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
        figmaLink: "https://www.figma.com/design/3rRtB1auO9qPhKluxzWn2r/Untitled?node-id=0-1&t=WceAHbppsNDMvQSc-1"
    },
    {
        title: "Train Booking App UI/UX Design",
        description: "Designed a simple and user-friendly train booking application with an intuitive interface. The project includes complete prototyping for seamless navigation, ticket search, booking flow, and confirmation screens.",
        tech: ["Figma", "Prototyping", "UX Design"],
        category: "Figma",
        previewImage: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80",
        figmaLink: "https://www.figma.com/design/2yqtMlzU2CkJjZ2LpUupFQ/Untitled?node-id=0-1&t=bjjdFCxFzwt7Og9l-1"
    },
    {
        title: "2048 Game",
        description: "A sleek, modern web version of the classic 2048 sliding puzzle game. Merge matching numbers to reach the ultimate 2048 tile! Built smoothly using HTML, CSS, and JS.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        category: "Games",
        imageUrl: "/2048-game.png",
        demoUrl: "https://2048-dhruvipatel-game.netlify.app",
        projectUrl: "https://github.com/DHRUVI5674/2048_game.git"
    },
    {
        title: "Whack a Mole",
        description: "A fun and interactive Whack-a-Mole classic browser game. Test your reflexes and hit those moles before the timer runs out! Developed with HTML, CSS, and JS.",
        tech: ["HTML", "CSS", "JAVASCRIPT"],
        category: "Games",
        imageUrl: "/whack-a-mole.png",
        demoUrl: "https://whack-a-mole-dhruvipatel.netlify.app",
        projectUrl: "https://github.com/DHRUVI5674/whack_a_mole.git"
    }
];

const CATEGORIES = ["All", "Clone", "Full Stack", "Figma", "Games"];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="projects" className="py-24 relative bg-black/40">
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="My Projects" subtitle="Compact view of my work" />

                {/* Category Filter Buttons */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                                activeCategory === cat
                                    ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/20'
                                    : 'bg-white/5 text-gray-400 border-white/10 hover:border-blue-500/40 hover:text-white'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filtered.length > 0 ? filtered.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group"
                            >
                                <Card className="h-full flex flex-col p-4 bg-slate-900/50 border-white/5 hover:border-neon-cyan/30 transition-all duration-300">
                                    <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-black/30">
                                        {project.videoId && (
                                            <iframe
                                                className="w-full h-full"
                                                src={`https://www.youtube.com/embed/${project.videoId}?modestbranding=1&rel=0`}
                                                title={project.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        )}
                                        {project.imageUrl && (
                                            <img
                                                src={project.imageUrl}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                        {project.previewImage && (
                                            <img
                                                src={project.previewImage}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">
                                                {project.title}
                                            </h3>
                                            <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                                                {project.category}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="px-2 py-0.5 bg-white/5 rounded text-[10px] text-gray-300 border border-white/5">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-white/5">
                                        {project.figmaLink ? (
                                            <a
                                                href={project.figmaLink}
                                                target="_blank" rel="noopener noreferrer"
                                                className="w-full flex items-center justify-center gap-2 py-2 bg-[#1ABCFE]/10 border border-[#1ABCFE]/30 text-[#1ABCFE] rounded-lg text-xs font-bold hover:bg-[#1ABCFE]/20 transition-all"
                                            >
                                                <svg viewBox="0 0 38 57" className="w-3.5 h-3.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/>
                                                    <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/>
                                                    <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/>
                                                    <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#FF3737"/>
                                                    <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/>
                                                </svg>
                                                View in Figma
                                            </a>
                                        ) : (
                                            <div className="flex justify-between items-center">
                                                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-gray-400 hover:text-white transition-colors">
                                                    <Github size={14} className="mr-1" /> Code
                                                </a>
                                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs text-neon-cyan hover:text-white transition-colors">
                                                    <ExternalLink size={14} className="mr-1" /> Demo
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </Card>
                            </motion.div>
                        )) : (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full text-center py-20 text-gray-500"
                            >
                                <p className="text-lg font-bold">No projects in this category yet.</p>
                                <p className="text-sm mt-2">Check back soon!</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
