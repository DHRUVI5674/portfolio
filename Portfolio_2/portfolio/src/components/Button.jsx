import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
    const baseStyles = "px-8 py-4 rounded-xl font-bold transition-all duration-300 relative overflow-hidden group flex items-center justify-center gap-2 tracking-wide";

    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.5)] border border-transparent",
        secondary: "bg-transparent text-blue-400 border-2 border-blue-500/50 hover:border-blue-500 hover:bg-blue-600/10 shadow-lg hover:shadow-blue-500/20",
        outline: "bg-white/5 text-gray-300 border border-white/10 hover:border-white/40 hover:text-white hover:bg-white/10",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`cursor-pointer ${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            <span className="relative z-10 block drop-shadow-md">{children}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            {/* Hover Glow Effect for Primary */}
            {variant === 'primary' && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500 to-blue-500 transition-opacity duration-500" />
            )}
        </motion.button>
    );
};

export default Button;
