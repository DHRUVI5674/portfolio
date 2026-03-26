import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-16">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-blue-500 to-purple-600"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-lg max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            )}
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto mt-4 rounded-full" />
        </div>
    );
};

export default SectionTitle;
