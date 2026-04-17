import React from 'react';
import { Heart, ArrowUp, Mail, MapPin, Code2 } from 'lucide-react';

const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Certificates", id: "certificates" },
    { label: "Contact", id: "contact" },
];

const Footer = () => {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-[#0a0d12]">
            {/* Gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Main Footer Content */}
                <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/5">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-600/20">
                                DP
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg leading-none">Dhruvi Patel</p>
                                <p className="text-gray-400 text-xs mt-1 font-medium">Full Stack Developer & UI Designer</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs pt-2">
                            Passionate about building intuitive web experiences and solving real-world problems through clean code and creative design.
                        </p>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                            <span className="flex items-center gap-2"><Mail size={14} className="text-blue-400" /> dhruvipatel@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                            <span className="flex items-center gap-2"><MapPin size={14} className="text-green-400" /> Gujarat, India</span>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="space-y-4">
                        <h4 className="text-white text-sm font-bold uppercase tracking-widest">Quick Links</h4>
                        <nav className="grid grid-cols-2 gap-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollTo(link.id)}
                                    className="text-left text-gray-400 text-sm hover:text-blue-400 transition-colors py-1.5"
                                >
                                    → {link.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Stats Column */}
                    <div className="space-y-4">
                        <h4 className="text-white text-sm font-bold uppercase tracking-widest">At a Glance</h4>
                        <div className="grid grid-cols-2 gap-3 mt-2">
                            <div className="p-3.5 bg-white/[0.03] rounded-xl border border-white/5">
                                <p className="text-blue-400 text-2xl font-black">10+</p>
                                <p className="text-gray-400 text-xs uppercase tracking-wider font-bold mt-1">Projects</p>
                            </div>
                            <div className="p-3.5 bg-white/[0.03] rounded-xl border border-white/5">
                                <p className="text-cyan-400 text-2xl font-black">12+</p>
                                <p className="text-gray-400 text-xs uppercase tracking-wider font-bold mt-1">Certificates</p>
                            </div>
                            <div className="p-3.5 bg-white/[0.03] rounded-xl border border-white/5">
                                <p className="text-green-400 text-2xl font-black">1+</p>
                                <p className="text-gray-400 text-xs uppercase tracking-wider font-bold mt-1">Hackathons</p>
                            </div>
                            <div className="p-3.5 bg-white/[0.03] rounded-xl border border-white/5">
                                <p className="text-purple-400 text-2xl font-black flex items-center gap-1.5"><Code2 size={18} />DSA</p>
                                <p className="text-gray-400 text-xs uppercase tracking-wider font-bold mt-1">LeetCode Active</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-2">
                        © {new Date().getFullYear()} Crafted with
                        <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
                        by <span className="text-white font-semibold">Dhruvi Patel</span>. All rights reserved.
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/5 text-gray-300 text-xs font-medium hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-300 shadow-md"
                    >
                        <ArrowUp size={14} />
                        Back to top
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;