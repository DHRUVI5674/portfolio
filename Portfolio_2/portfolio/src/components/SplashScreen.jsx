import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 1500); 
        }, 2500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <>
            <div className={`splash-screen ${isExiting ? 'opacity-0 transition-opacity duration-1000' : ''}`}>
                <div className="splash-content flex flex-col items-center">
                    <div className="dp-logo">DP</div>
                    
                    <div className="loader-container">
                        <div className="holder"><div className="box"></div></div>
                        <div className="holder"><div className="box"></div></div>
                        <div className="holder"><div className="box"></div></div>
                    </div>

                    <p className="presenting-text">Presenting</p>
                    <h1 className="developer-name text-white">Dhruvi Patel's Portfolio</h1>
                </div>
            </div>
            {isExiting && <div className="color-spread expand" />}
        </>
    );
};

export default SplashScreen;
