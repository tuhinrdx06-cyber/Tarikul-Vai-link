import React from 'react';
import { Play, Flame, Radio, Search, ShieldCheck, Users, Sparkles } from 'lucide-react';
import { AD_LINK } from '../data';

interface HeaderProps {
  onAdClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onAdClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0d0d15]/95 backdrop-blur-md border-b border-pink-500/20 shadow-lg shadow-pink-950/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        {/* Logo */}
        <div 
          onClick={onAdClick}
          className="flex items-center gap-2 cursor-pointer group shrink-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-pink-600 via-red-500 to-amber-400 p-0.5 shadow-lg shadow-pink-500/30 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0f0f17] rounded-[10px] flex items-center justify-center">
              <Play className="w-5 h-5 text-pink-500 fill-pink-500 ml-0.5" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white font-sans">
                Desi<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">Flix</span>
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-red-600 text-white rounded-md tracking-wider uppercase animate-pulse flex items-center gap-1 shadow-sm shadow-red-500/50">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                LIVE
              </span>
            </div>
            <p className="text-[10px] text-gray-400 font-medium hidden sm:block">#1 Free Desi Adult Video Cam Streaming</p>
          </div>
        </div>

        {/* Search Bar - Aesthetic Fake Input */}
        <div 
          onClick={onAdClick}
          className="hidden md:flex flex-1 max-w-md mx-4 items-center bg-[#181824] border border-gray-800 rounded-full px-4 py-1.5 text-sm text-gray-400 hover:border-pink-500/50 cursor-pointer transition-all shadow-inner"
        >
          <Search className="w-4 h-4 text-pink-400 mr-2 shrink-0" />
          <span className="truncate">Search Indian Bhabhi, College Girls, Live Cams...</span>
          <span className="ml-auto bg-pink-500/10 text-pink-400 text-xs px-2 py-0.5 rounded-full font-semibold border border-pink-500/20">HD 4K</span>
        </div>

        {/* Live Counter & Action Badge */}
        <div className="flex items-center gap-2.5">
          <div 
            onClick={onAdClick}
            className="hidden lg:flex items-center gap-2 bg-[#181824] border border-green-500/30 px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-400 cursor-pointer hover:bg-green-950/20 transition"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            <span>48,920 Live Users</span>
          </div>

          <button
            onClick={onAdClick}
            className="flex items-center gap-1.5 bg-gradient-to-r from-pink-600 via-red-500 to-pink-600 hover:opacity-95 text-white font-bold text-xs sm:text-sm px-3.5 py-2 rounded-full shadow-lg shadow-pink-600/30 cursor-pointer transform hover:scale-105 transition-all"
          >
            <Radio className="w-4 h-4 animate-pulse" />
            <span>START LIVE CAM</span>
          </button>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="bg-[#12121c] border-t border-gray-800/80 px-3 py-1.5 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold whitespace-nowrap">
          <button onClick={onAdClick} className="bg-pink-600 text-white px-3 py-1 rounded-full flex items-center gap-1 hover:bg-pink-500 cursor-pointer transition">
            <Flame className="w-3.5 h-3.5" /> All Videos
          </button>
          <button onClick={onAdClick} className="bg-[#1a1a28] hover:bg-pink-950/40 text-pink-300 border border-pink-500/30 px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer transition">
            <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" /> 🔴 Live Cams
          </button>
          <button onClick={onAdClick} className="bg-[#1a1a28] hover:bg-gray-800 text-gray-300 px-3 py-1 rounded-full cursor-pointer transition">
            🔥 Indian Bhabhi
          </button>
          <button onClick={onAdClick} className="bg-[#1a1a28] hover:bg-gray-800 text-gray-300 px-3 py-1 rounded-full cursor-pointer transition">
            💖 College Girls
          </button>
          <button onClick={onAdClick} className="bg-[#1a1a28] hover:bg-gray-800 text-gray-300 px-3 py-1 rounded-full cursor-pointer transition">
            ⭐ Desi Sex Erotic
          </button>
          <button onClick={onAdClick} className="bg-[#1a1a28] hover:bg-gray-800 text-gray-300 px-3 py-1 rounded-full cursor-pointer transition">
            🎬 Full Length 4K
          </button>
          <button onClick={onAdClick} className="bg-[#1a1a28] hover:bg-gray-800 text-gray-300 px-3 py-1 rounded-full cursor-pointer transition flex items-center gap-1 text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" /> VIP Private Chat
          </button>
        </div>
      </div>
    </header>
  );
};
