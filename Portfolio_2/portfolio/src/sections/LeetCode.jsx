import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Trophy, Activity, ExternalLink, RefreshCw, ChevronRight } from 'lucide-react';

const LeetCode = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [handle] = useState('TR0kHGhQN9');

    const fetchLeetData = useCallback(async () => {
        setLoading(true);
        try {
            const [profileRes, solvedRes] = await Promise.all([
                fetch(`https://alfa-leetcode-api.onrender.com/${handle}`),
                fetch(`https://alfa-leetcode-api.onrender.com/${handle}/solved`)
            ]);
            
            const profileData = await profileRes.json();
            const solvedData = await solvedRes.json();
            
            if (profileData && solvedData && solvedData.totalSubmissionNum) {
                const totalSubmissions = solvedData.totalSubmissionNum[0]?.submissions || 1;
                const acSubmissions = solvedData.acSubmissionNum[0]?.submissions || 0;
                const acceptanceRate = ((acSubmissions / totalSubmissions) * 100).toFixed(1);

                setStats({
                    totalSolved: solvedData.solvedProblem || 0,
                    easySolved: solvedData.easySolved || 0,
                    mediumSolved: solvedData.mediumSolved || 0,
                    hardSolved: solvedData.hardSolved || 0,
                    totalQuestions: 3317,
                    totalEasy: 832,
                    totalMedium: 1748,
                    totalHard: 737,
                    ranking: profileData.ranking || 0,
                    acceptanceRate: parseFloat(acceptanceRate) || 0
                });
            }
        } catch (err) {
            console.error("Error fetching LeetCode data:", err);
        } finally {
            setLoading(false);
        }
    }, [handle]);

    useEffect(() => {
        fetchLeetData();
    }, [fetchLeetData]);

    const displayStats = stats || {
        totalSolved: 122,
        easySolved: 112,
        mediumSolved: 10,
        hardSolved: 0,
        totalQuestions: 3317,
        totalEasy: 829,
        totalMedium: 1746,
        totalHard: 742,
        ranking: 1262465,
        acceptanceRate: 65.4
    };

    return (
        <section id="leetcode" className="py-24 relative overflow-hidden bg-[#050505]">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
                <SectionTitle 
                    title="LeetCode Profile" 
                    subtitle="Algorithmic milestones and problem-solving journey" 
                />

                <div className="space-y-12">
                    
                    {/* Top Stats Grid - Moderate Typography */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        <StatBox label="Total Solved" value={displayStats.totalSolved} borderColor="border-blue-500/20" />
                        <StatBox label="Easy" value={displayStats.easySolved} color="text-green-400" borderColor="border-green-500/20" />
                        <StatBox label="Medium" value={displayStats.mediumSolved} color="text-yellow-400" borderColor="border-yellow-500/20" />
                        <StatBox label="Hard" value={displayStats.hardSolved} color="text-red-400" borderColor="border-red-500/20" />
                    </div>

                    {/* Main Analytics Card - Glass Design */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-md border border-white/10 p-5 sm:p-8 md:p-12 rounded-[2rem] shadow-2xl"
                    >
                        <div className="flex flex-wrap justify-between items-center mb-8 md:mb-12 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 md:p-4 bg-blue-600/10 rounded-2xl border border-blue-500/20">
                                    <Trophy className="text-blue-500" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight">{handle}</h3>
                                    <p className="text-gray-400 font-medium text-xs md:text-sm mt-0.5 flex items-center gap-2">
                                        <Activity size={12} className="text-blue-500" /> 
                                        Rank: #{displayStats.ranking.toLocaleString()}
                                    </p>
                                </div>
                            </div>
                            
                            <button 
                                onClick={fetchLeetData}
                                disabled={loading}
                                className="px-4 py-2.5 md:px-6 md:py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all border border-white/10 flex items-center gap-2 active:scale-95 disabled:opacity-50 text-sm"
                            >
                                <RefreshCw className={`${loading ? 'animate-spin' : ''}`} size={16} />
                                <span>Sync Stats</span>
                            </button>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            {/* Circular Visualization */}
                            <div className="lg:col-span-12 xl:col-span-5 flex justify-center">
                                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle cx="50%" cy="50%" r="44%" stroke="#141418" strokeWidth="12" fill="transparent" />
                                        <motion.circle
                                            cx="50%" cy="50%" r="44%" stroke="#3b82f6" strokeWidth="12" fill="transparent"
                                            strokeDasharray={`${2 * Math.PI * 44}`}
                                            initial={{ strokeDashoffset: `${2 * Math.PI * 44}` }}
                                            animate={{ strokeDashoffset: `${2 * Math.PI * 44 * (1 - displayStats.totalSolved / displayStats.totalQuestions)}` }}
                                            transition={{ duration: 2, ease: "circOut" }}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white">{displayStats.totalSolved}</span>
                                        <span className="text-gray-500 text-[10px] font-bold tracking-[0.2em] mt-1">SOLVED</span>
                                    </div>
                                </div>
                            </div>

                            {/* Difficulty Breakdown */}
                            <div className="lg:col-span-12 xl:col-span-7 space-y-10">
                                <DifficultyBar label="Easy" solved={displayStats.easySolved} total={displayStats.totalEasy} color="text-green-400" barColor="bg-green-500" />
                                <DifficultyBar label="Medium" solved={displayStats.mediumSolved} total={displayStats.totalMedium} color="text-yellow-400" barColor="bg-yellow-500" />
                                <DifficultyBar label="Hard" solved={displayStats.hardSolved} total={displayStats.totalHard} color="text-red-400" barColor="bg-red-500" />
                                
                                <div className="pt-8 border-t border-white/5 flex flex-wrap justify-between items-center gap-4 text-sm">
                                    <span className="text-gray-400">Acceptance Rate: <span className="text-white font-bold">{displayStats.acceptanceRate}%</span></span>
                                    <a href={`https://leetcode.com/u/${handle}/`} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-medium hover:underline flex items-center gap-1.5">
                                        Profile Overview <ChevronRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex justify-center pt-6">
                        <motion.a 
                            whileHover={{ y: -3, scale: 1.05 }}
                            href={`https://leetcode.com/u/${handle}/`}
                            target="_blank" rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_10px_30px_rgba(37,99,235,0.2)] flex items-center gap-2 active:scale-95"
                        >
                            Explore All Submissions <ExternalLink size={16} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const StatBox = ({ label, value, color = "text-white", borderColor }) => (
    <div className={`p-6 bg-white/[0.02] border ${borderColor} rounded-2xl hover:bg-white/[0.04] transition-all`}>
        <p className="text-gray-500 text-[11px] font-bold uppercase tracking-wider mb-2">{label}</p>
        <p className={`text-3xl font-bold ${color} tracking-tight`}>{value}</p>
    </div>
);

const DifficultyBar = ({ label, solved, total, color, barColor }) => (
    <div className="space-y-3 px-1">
        <div className="flex justify-between items-end">
            <span className={`text-sm font-bold ${color} uppercase tracking-wider`}>{label}</span>
            <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">{solved}</span>
                <span className="text-gray-500 font-medium text-sm">/ {total}</span>
            </div>
        </div>
        <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden p-[2px] border border-white/5">
            <motion.div 
                className={`h-full ${barColor} rounded-full`} 
                initial={{ width: 0 }} 
                whileInView={{ width: `${(solved/total)*100}%` }}
                transition={{ duration: 1.5, ease: "circOut" }}
            />
        </div>
    </div>
);

export default LeetCode;



