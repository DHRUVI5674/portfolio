import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Youtube, Twitter, Code2 } from 'lucide-react';

const socials = [
    { icon: <Github size={22} />, href: "https://github.com/DHRUVI5674", label: "GitHub" },
    { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/dhruvi-patel-bb2b9239a/", label: "LinkedIn" },
    { icon: <Twitter size={22} />, href: "https://twitter.com/patel_dhru76113", label: "X (Twitter)" },
    { icon: <Youtube size={22} />, href: "https://www.youtube.com/@Dhruvi_Patel_6", label: "YouTube" },
    { icon: <Code2 size={22} />, href: "https://leetcode.com/u/TR0kHGhQN9/", label: "LeetCode" },
];

const Profiles = () => {
    return (
        <section className="py-16 relative bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h3 className="text-lg font-bold text-white mb-8 tracking-tight">Social Profiles</h3>
                <div className="flex items-center justify-center gap-5">
                    {socials.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={social.label}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.08 }}
                            whileHover={{ scale: 1.15, y: -4 }}
                            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300"
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Profiles;
