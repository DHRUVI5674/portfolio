import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Download, Eye, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <section id="resume" className="py-12 relative bg-black/40">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <div className="text-center mb-16 w-full">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500"
                    >
                        My Resume
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Comprehensive overview of my professional journey
                    </motion.p>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-4 rounded-full" />
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-4xl p-[2px] rounded-3xl bg-gradient-to-br from-[#00c6ff]/40 via-purple-500/20 to-[#0072ff]/40 hover:from-[#00c6ff] hover:to-[#0072ff] overflow-hidden group transition-all duration-700 shadow-[0_0_30px_rgba(0,198,255,0.1)] hover:shadow-[0_0_50px_rgba(0,198,255,0.25)]"
                >
                    {/* Actual Card Content */}
                    <div className="relative rounded-[23px] bg-[#060b14] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center backdrop-blur-3xl h-full w-full overflow-hidden">
                        
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00c6ff]/5 blur-[150px] rounded-full pointer-events-none group-hover:bg-[#00c6ff]/10 transition-colors duration-700"></div>

                        {/* Decoration Icon */}
                        <div className="hidden md:flex shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#00c6ff]/10 to-blue-500/10 border border-[#00c6ff]/30 items-center justify-center transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shadow-[0_0_20px_rgba(0,198,255,0.1)] relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors"></div>
                            <FileText size={44} className="text-[#00c6ff] relative z-10" />
                        </div>

                        <div className="flex-1 text-center md:text-left space-y-4 z-10">
                            <h3 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">Dhruvi Patel</h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                                A detailed insight into my technical abilities, robust project track record, and educational background. Experience the highest quality overview directly inside your browser.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto z-10 shrink-0 mt-2 md:mt-0">
                            <a 
                                href="https://drive.google.com/file/d/1LQFm1HmsJxDw9cZnLp24CQLwutL-PMsg/view" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 hover:border-[#00c6ff] transition-all duration-300 cursor-pointer shadow-lg flex-1 sm:flex-none group/preview"
                            >
                                <Eye size={20} className="text-gray-400 group-hover/preview:text-[#00c6ff] transition-colors" />
                                <span>Preview</span>
                            </a>
                            <a 
                                href="https://drive.google.com/uc?export=download&id=1LQFm1HmsJxDw9cZnLp24CQLwutL-PMsg" 
                                className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-xl text-white font-bold hover:brightness-110 transition-all cursor-pointer shadow-[0_0_20px_rgba(0,198,255,0.3)] hover:shadow-[0_0_30px_rgba(0,198,255,0.6)] flex-1 sm:flex-none group/btn"
                            >
                                <Download size={20} className="group-hover/btn:-translate-y-1 transition-transform" />
                                <span>Download PDF</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
