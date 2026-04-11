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
                    <div className="flex items-center justify-center relative w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-slate-800 to-black border border-cyan-500/40 shadow-[0_0_50px_rgba(34,211,238,0.5)] mb-12 overflow-hidden opacity-0" style={{ animation: 'scale-in 1s forwards' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-transparent blur-[2px]" />
                        <span className="relative z-10 text-5xl md:text-6xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                            DP
                        </span>
                    </div>

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
