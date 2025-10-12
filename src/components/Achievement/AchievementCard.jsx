import { useState,useEffect } from "react";


const AchievementCard = ({ achievement }) => {
    const Icon = achievement.icon;
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (achievement.platform === 'LeetCode') {
            setLoading(true);
            fetch(`https://leetcode-stats-api.herokuapp.com/${achievement.username}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then(data => {
                    if(data.status === 'success') {
                        setStats(data);
                    } else {
                        throw new Error('Failed to fetch stats');
                    }
                    setLoading(false);
                })
                .catch(error => {
                    console.warn("LeetCode API failed, using fallback data.", error);
                    setStats(achievement.fallbackStats);
                    setLoading(false);
                });
        }
    }, [achievement.platform, achievement.username, achievement.fallbackStats]);
    
    const ExternalLinkIcon = ({ className = "w-6 h-6" }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    );

    if (achievement.platform === 'LeetCode') {
        const displayStats = stats || achievement.fallbackStats;

        const StatItem = ({ color, label, value }) => (
            <div className={`grid grid-cols-3 text-justify items-center px-5 py-3 my-3 rounded-lg gap-3 bg-pink-500/10`}>
                <p className={`text-[15px] font-semibold text-${color}-400`}>{label}</p>
                <p className={`text-[15px] font-bold text-${color}-400`}>&nbsp;&nbsp;&nbsp;&nbsp;:</p>
                <p className={`text-2xl font-bold text-${color}-400`}>{loading ? '...' : value}</p>
            </div>
        );

        return (
            <div className="bg-slate-800/50 rounded-lg p-6 flex flex-col items-center text-center border border-slate-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1">
                <div className="text-yellow-400 mb-4">
                    <Icon className="w-12 h-12" />
                </div>
                <h4 className="font-bold text-lg text-slate-100">{achievement.platform}</h4>
                <p className="text-sm text-slate-400 mt-1 mb-4">{achievement.description}</p>
                
                <div className="w-full my-2">
                    <div className="text-center p-3 rounded-lg bg-slate-900/50">
                        <p className="text-4xl font-bold text-purple-300">{loading ? '...' : displayStats.totalSolved}</p>
                        <p className="text-sm font-semibold text-purple-200">Total Solved</p>
                    </div>
                    <div className="mt-2">
                        <StatItem color="blue" label="Easy" value={displayStats.easySolved} />
                        <StatItem color="yellow" label="Medium" value={displayStats.mediumSolved} />
                        <StatItem color="orange" label="Hard" value={displayStats.hardSolved} />
                    </div>
                </div>

                <a 
                    href={achievement.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-sm font-semibold mt-6 inline-flex items-center space-x-1.5 group"
                >
                    <span>View Profile</span>
                    <ExternalLinkIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        );
    }
    
    // OverTheWire Card
    if (achievement.wargames) {
         return (
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 md:col-span-2">
                <div className="flex items-center mb-4">
                     <div className="text-cyan-400 mr-4 flex-shrink-0">
                        <Icon className="w-12 h-12" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-slate-100">{achievement.platform}</h4>
                        <p className="text-sm text-slate-400">{achievement.description}</p>
                    </div>
                </div>
                 <div className="w-full text-left mt-5">
                    <ul className="space-y-4">
                        {achievement.wargames.map(game => (
                            <li key={game.name} className="bg-slate-900/50 p-4 rounded-lg">
                                <div className="flex justify-between items-center mb-2">
                                    <div>
                                        <p className="font-semibold text-slate-200">{game.name}</p>
                                        <p className="text-xs text-slate-500">{game.levels}</p>
                                    </div>
                                    <p className="text-sm font-medium text-slate-300">{`${game.currentLevel} / ${game.totalLevels}`}</p>
                                </div>
                                <div className="w-full bg-slate-700 rounded-full h-2 my-2">
                                    <div 
                                        className="bg-cyan-500 h-2 rounded-full" 
                                        style={{ width: `${(game.currentLevel / game.totalLevels) * 100}%` }}>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {game.concepts.map(concept => (
                                        <span key={concept} className="bg-cyan-900/60 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">
                                            {concept}
                                        </span>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                 <a 
                    href={achievement.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-sm font-semibold mt-6 inline-flex items-center space-x-1.5 group"
                >
                    <span>View Profile</span>
                    <ExternalLinkIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        );
    }

    return null; // Fallback for any other card type
};


export default AchievementCard;