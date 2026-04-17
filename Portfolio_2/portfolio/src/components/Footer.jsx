import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-[#050505] py-16">
            {/* Gradient Top Border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12">
                    
                    {/* Left Segment: Branding */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
                        <h3 className="text-white text-xl font-black tracking-tight">
                            Dhruvi Patel
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">
                            Crafting high-performance digital solutions with modern technology.
                        </p>
                    </div>

                    {/* Middle Segment: Heartbeat Tag (Now Centered) */}
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-gray-300 text-sm font-semibold backdrop-blur-md">
                            Made with 
                            <Heart size={16} className="text-blue-500 fill-blue-500 animate-pulse" />
                            by Dhruvi
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 font-mono text-[10px] uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                            Open for Opportunities
                        </div>
                    </div>

                    {/* Right Segment: Copyright & Action */}
                    <div className="flex flex-col items-center md:items-end space-y-4">
                        <div className="text-center md:text-right">
                            <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-1">
                                © {new Date().getFullYear()} • CSE Engineering
                            </p>
                            <p className="text-gray-600 text-[10px] font-medium">Gujarat, India</p>
                        </div>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-400 text-sm font-bold hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-500 shadow-xl cursor-pointer"
                        >
                            <span className="group-hover:-translate-y-1 transition-transform duration-300">
                                <ArrowUp size={18} />
                            </span>
                            Back to top
                        </button>
                    </div>

                </div>

                {/* Bottom decorative detail */}
                <div className="mt-16 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent text-center" />
            </div>
        </footer>
    );
};

export default Footer;