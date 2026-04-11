import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Github, Linkedin, Twitter, Youtube, Code } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import profileImg from '../assets/downloader.png';

const Hero = () => {
    const roles = ["Full Stack Developer", "UI/UX Designer", "Backend Developer", "Frontend Developer", "Web Architect"];
    const [roleIndex, setRoleIndex] = React.useState(0);
    const [displayText, setDisplayText] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 100;
        const nextRole = roles[roleIndex];

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(nextRole.substring(0, displayText.length + 1));
                if (displayText === nextRole) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setDisplayText(nextRole.substring(0, displayText.length - 1));
                if (displayText === '') {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            <Helmet>
                <title>Dhruvi Patel | Full-Stack Developer Portfolio</title>
                <meta name="description" content="Portfolio of Dhruvi Patel - A passionate Full-Stack Developer building futuristic web experiences." />
                <meta name="keywords" content="Dhruvi Patel, Full-Stack Developer, MERN Stack, UI/UX Designer, Portfolio" />
                
                {/* Social Media Meta Tags */}
                <meta property="og:title" content="Dhruvi Patel | Full-Stack Developer" />
                <meta property="og:description" content="Check out my portfolio for modern web architectures and immersive user experiences." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Dhruvi Patel | Portfolio" />
                <meta name="twitter:description" content="Building the future of web development." />
            </Helmet>
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        <h1 className="flex flex-col gap-2 mb-8 items-start">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xl md:text-2xl font-mono text-neon-cyan mb-2"
                            >
                                Hi, I am
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                                className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                            >
                                Dhruvi Patel
                            </motion.span>
                        </h1>
                    </motion.div>
                    <div className="h-10 md:h-12 mb-6">
                        <h2 className="text-2xl md:text-3xl text-gray-300 flex items-center">
                            <span className="text-neon-cyan mr-2 font-mono">{'>'}</span>
                            <span>{displayText}</span>
                            <span className="w-1 h-8 bg-neon-cyan ml-2 animate-pulse" />
                        </h2>
                    </div>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 text-lg mb-8 max-w-lg leading-relaxed font-light">
                        I build high-performance, futuristic web applications with modern technologies.
                        Passionate about AI, Space, and creating immersive user experiences.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <Button variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
                            View Projects
                        </Button>
                        <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                            Get in Touch
                        </Button>
                    </div>

                    <div className="flex gap-6">
                        {[
                            { Icon: Github, href: "https://github.com/DHRUVI5674" },
                            { Icon: Linkedin, href: "https://www.linkedin.com/in/dhruvi-patel-bb2b9239a/" },
                            { Icon: Twitter, href: "https://twitter.com/patel_dhru76113" },
                            { Icon: Youtube, href: "https://www.youtube.com/@Dhruvi_Patel_6" },
                            { Icon: Code, href: "https://leetcode.com/u/TR0kHGhQN9/" }
                        ].map(({ Icon, href }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, color: '#00f3ff' }}
                                className="text-gray-400 transition-colors"
                            >
                                <Icon size={30} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Right Content - Glowing Profile */}
                {/* Right Content - Glowing Profile */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-purple-600 rounded-full blur-[50px] opacity-50 animate-pulse" />
                        <div className="absolute inset-4 bg-slate-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl transform transition-transform duration-500 hover:rotate-3">
                            <img
                                src={profileImg}
                                alt="Dhruvi Patel"
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                            />
                            <div className="hidden w-full h-full bg-slate-800 flex items-center justify-center text-gray-500 text-6xl">
                                DP
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
