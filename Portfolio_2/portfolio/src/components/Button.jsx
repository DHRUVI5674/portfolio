import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
    const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 relative overflow-hidden group";

    const variants = {
        primary: "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan hover:bg-neon-cyan hover:text-black shadow-[0_0_10px_rgba(0,243,255,0.3)] hover:shadow-[0_0_20px_rgba(0,243,255,0.6)]",
        secondary: "bg-purple-600/10 text-purple-400 border border-purple-500 hover:bg-purple-500 hover:text-white shadow-[0_0_10px_rgba(189,0,255,0.3)] hover:shadow-[0_0_20px_rgba(189,0,255,0.6)]",
        outline: "text-gray-300 border border-gray-600 hover:border-white hover:text-white hover:bg-white/5",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            <span className="relative z-10">{children}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
        </motion.button>
    );
};

export default Button;
