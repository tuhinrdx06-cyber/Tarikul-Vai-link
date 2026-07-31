import React from 'react';
import { Video, Flame, Sparkles, Volume2 } from 'lucide-react';

interface LiveHeaderBannerProps {
  onAdClick: () => void;
}

export const LiveHeaderBanner: React.FC<LiveHeaderBannerProps> = ({ onAdClick }) => {
  return (
    <div 
      onClick={onAdClick}
      className="bg-gradient-to-r from-red-700 via-pink-600 to-red-700 text-white py-2 px-4 shadow-md cursor-pointer hover:opacity-95 transition-all border-b border-pink-400/30"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-bold">
        <div className="flex items-center gap-2">
          <span className="bg-white text-red-600 px-2 py-0.5 rounded-md text-[11px] font-black uppercase tracking-wider flex items-center gap-1 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            HOT LIVE
          </span>
          <span className="flex items-center gap-1 text-yellow-200">
            <Flame className="w-4 h-4 fill-amber-300 text-amber-300 animate-bounce" />
            <span>SPECIAL BROADCAST: 100% Free Live Private Video Chat Online!</span>
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="hidden md:flex items-center gap-1 text-pink-100">
            <Volume2 className="w-3.5 h-3.5 animate-pulse" /> Clear Hindi & Regional Audio Included
          </span>
          <span className="underline decoration-amber-300 underline-offset-2 font-extrabold text-amber-200 hover:text-white flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Tap Anywhere To Connect Live
          </span>
        </div>
      </div>
    </div>
  );
};
