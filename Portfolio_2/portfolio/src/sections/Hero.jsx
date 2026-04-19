import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Github, Linkedin, Twitter, Youtube, Code } from 'lucide-react';
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
        <section id="hero" className="min-h-screen flex items-center justify-center pt-24 sm:pt-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 1, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        <h1 className="flex flex-col gap-2 mb-6 items-start">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-base sm:text-xl md:text-2xl lg:text-3xl font-mono text-blue-400 mb-1"
                            >
                                Hello, I'm
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 1, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
                                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-normal leading-none bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                            >
                                Dhruvi Patel
                            </motion.span>
                        </h1>
                    </motion.div>
                    <div className="min-h-[2.5rem] md:min-h-[3rem] mb-6 md:mb-8">
                        <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-300 flex items-center flex-wrap gap-1">
                            <span className="text-blue-500 mr-1 font-mono">{'>'}</span>
                            <span>I'm a {displayText}</span>
                            <span className="w-1 h-5 sm:h-7 md:h-10 bg-blue-500 ml-1 animate-bounce" />
                        </h2>
                    </div>
                    <p className="text-blue-100/80 text-sm sm:text-base md:text-lg mb-8 md:mb-10 max-w-lg leading-relaxed font-light drop-shadow-sm">
                        Building high-performance, futuristic web applications with modern technologies.
                        Passionate about AI, Clean Architecture, and immersive user experiences.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <Button variant="primary" onClick={() => window.open('https://drive.google.com/file/d/1LQFm1HmsJxDw9cZnLp24CQLwutL-PMsg/view', '_blank')}>
                            View Resume
                        </Button>
                        <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                            Get in Touch
                        </Button>
                    </div>

                    <div className="flex flex-wrap gap-6 mt-8">
                        {[
                            { Icon: Github, href: "https://github.com/DHRUVI5674", label: "GitHub Profile" },
                            { Icon: Linkedin, href: "https://www.linkedin.com/in/dhruvi-patel-bb2b9239a/", label: "LinkedIn Profile" },
                            { Icon: Twitter, href: "https://twitter.com/patel_dhru76113", label: "Twitter Profile" },
                            { Icon: Youtube, href: "https://www.youtube.com/@Dhruvi_Patel_6", label: "YouTube Channel" },
                            { Icon: Code, href: "https://leetcode.com/u/TR0kHGhQN9/", label: "LeetCode Profile" }
                        ].map(({ Icon, href, label }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                whileHover={{ scale: 1.2, color: '#60a5fa' }}
                                className="text-gray-400 transition-colors"
                            >
                                <Icon size={30} aria-hidden="true" className="w-6 h-6 md:w-[30px] md:h-[30px]" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Right Content - Glowing Profile */}
                <motion.div
                    initial={{ opacity: 1, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center order-1 md:order-2 mb-8 md:mb-0"
                >
                    <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px]">
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-[60px] opacity-20 animate-pulse" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 rounded-full p-1.5 shadow-[0_0_50px_rgba(59,130,246,0.4)]">
                            <div className="w-full h-full rounded-full border-4 border-slate-900 overflow-hidden bg-slate-800">
                                <img
                                    src="https://res.cloudinary.com/db3htfvvx/image/upload/q_auto,f_auto,w_600/v1774799881/Screenshot_2026-03-10_082843_wdnbct.png"
                                    alt="Dhruvi Patel - Software Engineer and Full-Stack Developer"
                                    width="400"
                                    height="400"
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                    fetchPriority="high"
                                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                                />
                                <div className="hidden w-full h-full bg-slate-800 items-center justify-center text-gray-500 text-6xl">
                                    DP
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
