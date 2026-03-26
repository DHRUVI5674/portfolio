import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 30px -10px rgba(0, 243, 255, 0.2)" } : {}}
            className={`relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl overflow-hidden ${className}`}
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />
            {children}
        </motion.div>
    );
};

export default Card;
