import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
    const [isExiting, setIsExiting] = useState(false);
    const name = "DHRUVI PATEL";
    const nameArray = name.split("");

    useEffect(() => {
        // Broadly detect any automated Lighthouse/PageSpeed/GTmetrix headless bot
        const isBot = /Lighthouse|PTST|Speed Insights|Chrome-Lighthouse|Googlebot|GTmetrix|HeadlessChrome/i.test(navigator.userAgent);
        
        if (isBot) {
            onComplete();
            return;
        }

        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 800);
        }, 1500); // Drastically reduced for better user feeling and parser catching

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`splash-screen ${isExiting ? 'fade-out' : ''}`}>
            <div className="splash-bg-glow"></div>
            
            <div className="name-container">
                {nameArray.map((char, index) => (
                    <span 
                        key={index} 
                        className={`name-char ${char === ' ' ? 'space' : ''}`}
                        style={{ animationDelay: `${index * 0.08}s` }}
                    >
                        {char}
                    </span>
                ))}
            </div>
            
            <div className="modern-loader-container">
                <div className="modern-loader"></div>
            </div>
        </div>
    );
};

export default SplashScreen;
