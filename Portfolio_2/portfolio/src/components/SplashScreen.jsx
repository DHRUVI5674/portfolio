import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
    const [isExiting, setIsExiting] = useState(false);
    const name = "DHRUVI PATEL";
    const nameArray = name.split("");

    useEffect(() => {
        // Wait for letters to animate in (approx 1.2s total), then show loader (runs a bit),
        // then trigger exit sequence
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 1000); // Wait for fade-out animation to finish
        }, 3500);

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
