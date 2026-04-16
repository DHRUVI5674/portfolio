import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Trophy, Flame, Target, Zap, ExternalLink, Code2, TrendingUp } from 'lucide-react';

const LeetCode = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fallbackData = {
        totalSolved: 122,
        easySolved: 112,
        mediumSolved: 10,
        hardSolved: 0,
        totalQuestions: 3317,
        totalEasy: 829,
        totalMedium: 1746,
        totalHard: 742,
        ranking: 1262465,
        acceptanceRate: 65.4,
        contributionPoints: 0,
        submissionCalendar: {}
    };

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('https://leetcode-stats-api.herokuapp.com/TR0kHGhQN9');
                const result = await response.json();
                setData(result.status === 'success' ? result : fallbackData);
            } catch (err) {
                setData(fallbackData);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    const stats = data || fallbackData;

    return (
        <section id="leetcode" className="py-24 relative overflow-hidden bg-black/60">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionTitle 
                    title="LeetCode Profile" 
                    subtitle="Algorithmic milestones and daily consistency" 
                />

                <div className="space-y-8">
                    {/* Main Card (Matching Reference Image) */}
                    <Card className="bg-[#1a1a1a] border-white/5 p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        <div className="flex flex-wrap justify-between items-start mb-12 gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-300 tracking-tight">TR0kHGhQN9</h3>
                                <p className="text-blue-500 font-mono text-sm mt-1">#Rank {stats.ranking.toLocaleString()}</p>
                            </div>
                            <div className="px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-gray-400 text-xs font-bold">
                                {stats.acceptanceRate}% Acceptance
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-12 items-center">
                            {/* Left: Circular Chart */}
                            <div className="lg:col-span-5 flex justify-center">
                                <div className="relative w-64 h-64">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle cx="128" cy="128" r="110" stroke="#2d2d2d" strokeWidth="12" fill="transparent" />
                                        <motion.circle
                                            cx="128" cy="128" r="110" stroke="#f0ad43" strokeWidth="12" fill="transparent"
                                            strokeDasharray={2 * Math.PI * 110}
                                            initial={{ strokeDashoffset: 2 * Math.PI * 110 }}
                                            animate={{ strokeDashoffset: 2 * Math.PI * 110 * (1 - stats.totalSolved / stats.totalQuestions) }}
                                            transition={{ duration: 2 }}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-6xl font-black text-white">{stats.totalSolved}</span>
                                        <span className="text-gray-500 text-lg font-bold uppercase tracking-widest">Solved</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Difficulty Bars */}
                            <div className="lg:col-span-7 space-y-10">
                                <RefinedDifficultyBar label="Easy" solved={stats.easySolved} total={stats.totalEasy} color="text-green-500" barColor="bg-green-500" />
                                <RefinedDifficultyBar label="Medium" solved={stats.mediumSolved} total={stats.totalMedium} color="text-yellow-500" barColor="bg-yellow-500" />
                                <RefinedDifficultyBar label="Hard" solved={stats.hardSolved} total={stats.totalHard} color="text-red-500" barColor="bg-red-500" />
                            </div>
                        </div>
                    </Card>

                    {/* Streak Boxes (Contribution Grid) */}
                    <Card className="bg-[#1a1a1a] border-white/5 p-8 shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                <Flame size={16} className="text-orange-500" /> Submission Activity
                            </h4>
                            <div className="flex gap-2 items-center">
                                <span className="text-[10px] text-gray-500 uppercase font-bold">Less</span>
                                <div className="flex gap-1">
                                    <div className="w-3 h-3 bg-[#2d2d2d] rounded-[2px]" />
                                    <div className="w-3 h-3 bg-green-900 rounded-[2px]" />
                                    <div className="w-3 h-3 bg-green-700 rounded-[2px]" />
                                    <div className="w-3 h-3 bg-green-500 rounded-[2px]" />
                                    <div className="w-3 h-3 bg-green-300 rounded-[2px]" />
                                </div>
                                <span className="text-[10px] text-gray-500 uppercase font-bold">More</span>
                            </div>
                        </div>
                        
                        <div className="overflow-x-auto pb-4 scrollbar-hide">
                            <ContributionGrid calendar={stats.submissionCalendar} />
                        </div>
                        
                        <div className="flex flex-wrap gap-8 mt-6 pt-6 border-t border-white/5">
                            <MiniInsight icon={<Zap size={16} />} label="Total Active Days" value="283 Days" />
                            <MiniInsight icon={<TrendingUp size={16} />} label="Max Streak" value="44 Days" />
                            <MiniInsight icon={<Target size={16} />} label="Contribution Points" value={stats.contributionPoints} />
                        </div>
                    </Card>

                    <div className="flex justify-center pt-8">
                        <a 
                            href="https://leetcode.com/u/TR0kHGhQN9/" 
                            target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl text-white font-bold transition-all shadow-xl hover:scale-105 active:scale-95"
                        >
                            View Source Profile <ExternalLink size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const RefinedDifficultyBar = ({ label, solved, total, color, barColor }) => (
    <div className="space-y-3">
        <div className="flex justify-between items-end">
            <span className="text-lg font-bold text-gray-400">{label}</span>
            <div className="flex items-baseline gap-1">
                <span className={`text-2xl font-black ${color}`}>{solved}</span>
                <span className="text-gray-600 font-bold text-sm">/{total}</span>
            </div>
        </div>
        <div className="h-2 w-full bg-[#2d2d2d] rounded-full overflow-hidden">
            <motion.div 
                className={`h-full ${barColor}`} 
                initial={{ width: 0 }} 
                animate={{ width: `${(solved/total)*100}%` }}
                transition={{ duration: 1.5 }}
            />
        </div>
    </div>
);

const ContributionGrid = ({ calendar }) => {
    // Generate dates for the last year (53 weeks to ensure full coverage)
    const weeks = 53;
    const daysPerWeek = 7;
    const totalDays = weeks * daysPerWeek;
    
    const boxes = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today to midnight
    
    // Predigest calendar into a Map for O(1) matching
    const calendarMap = new Map();
    Object.entries(calendar).forEach(([timestamp, count]) => {
        const d = new Date(parseInt(timestamp) * 1000);
        d.setHours(0, 0, 0, 0);
        calendarMap.set(d.getTime(), count);
    });
    
    for (let i = totalDays - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        date.setHours(0, 0, 0, 0);
        
        const count = calendarMap.get(date.getTime()) || 0;
        boxes.push({ count, date });
    }

    return (
        <div 
            className="grid grid-flow-col gap-[3px] min-w-[800px]"
            style={{ 
                gridTemplateColumns: `repeat(${weeks}, 1fr)`,
                gridTemplateRows: `repeat(${daysPerWeek}, 1fr)` 
            }}
        >
            {boxes.map((box, i) => (
                <div 
                    key={i}
                    className={`w-3 h-3 rounded-[2px] transition-colors cursor-help hover:ring-2 hover:ring-white/40 relative group`}
                    style={{ 
                        backgroundColor: box.count === 0 ? '#262626' : 
                                         box.count < 3 ? '#166534' : // Dark green
                                         box.count < 6 ? '#15803d' : // Mid green
                                         box.count < 9 ? '#16a34a' : // Vibrant green
                                         '#22c55e' // Bright neon green
                    }}
                >
                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-[10px] text-white rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity border border-white/10">
                        {box.date.toDateString()}: {box.count} submissions
                    </div>
                </div>
            ))}
        </div>
    );
};

const MiniInsight = ({ icon, label, value }) => (
    <div className="flex items-center gap-3">
        <div className="text-blue-500">{icon}</div>
        <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{label}</p>
            <p className="text-white font-bold">{value}</p>
        </div>
    </div>
);

export default LeetCode;
