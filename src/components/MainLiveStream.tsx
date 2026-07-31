import React from 'react';
import { Play, Eye, Clock, Radio, ThumbsUp, Share2, Volume2, Maximize2, ShieldAlert, Sparkles } from 'lucide-react';
import { VideoItem } from '../types';

interface MainLiveStreamProps {
  video: VideoItem;
  onAdClick: () => void;
}

export const MainLiveStream: React.FC<MainLiveStreamProps> = ({ video, onAdClick }) => {
  return (
    <div className="bg-[#12121e] rounded-2xl border border-pink-500/30 overflow-hidden shadow-2xl shadow-pink-950/40 transition-all hover:border-pink-500/60 group">
      {/* Top Banner Tag */}
      <div 
        onClick={onAdClick}
        className="bg-gradient-to-r from-red-600 via-pink-600 to-red-600 px-4 py-2 flex items-center justify-between text-white font-bold cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-90"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-200"></span>
          </span>
          <Radio className="w-4 h-4 text-white animate-pulse" />
          <span className="uppercase tracking-wide text-xs sm:text-sm font-black">
            FEATURED LIVE WEBCAM BROADCAST
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs bg-black/30 px-2.5 py-1 rounded-full border border-white/20">
          <Eye className="w-3.5 h-3.5 text-pink-300 animate-pulse" />
          <span className="text-pink-200 font-extrabold">{video.liveViewers || '18,492'} Viewers Now</span>
        </div>
      </div>

      {/* Main Video Thumbnail Player Container */}
      <div 
        onClick={onAdClick}
        className="relative aspect-video sm:aspect-[21/9] w-full bg-black cursor-pointer overflow-hidden group/thumb"
      >
        {/* Background Thumbnail Image */}
        <img 
          src={video.image} 
          alt={video.title}
          className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-700 filter brightness-95 group-hover/thumb:brightness-100"
        />

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60" />

        {/* LIVE Badge Floating Top-Left */}
        <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
          <span className="bg-red-600 text-white font-extrabold text-xs px-3 py-1 rounded-md tracking-wider uppercase shadow-lg shadow-red-600/50 flex items-center gap-1.5 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            LIVE NOW
          </span>
          <span className="bg-black/70 backdrop-blur-md text-amber-300 text-xs font-bold px-2.5 py-1 rounded-md border border-amber-500/40">
            4K Ultra HD
          </span>
        </div>

        {/* Video Duration Badge Top-Right */}
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-white font-mono font-bold text-xs px-2.5 py-1 rounded-md border border-gray-700 flex items-center gap-1 z-10">
          <Clock className="w-3.5 h-3.5 text-pink-400" />
          <span>{video.videoTime}</span>
        </div>

        {/* Big Center Pulsing Play Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
          <div className="relative flex items-center justify-center">
            {/* Pulsing Ripple Rings */}
            <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-pink-600/40 animate-ping" />
            <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/30 animate-pulse" />
            
            {/* Play Button Icon Circle */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-pink-600 via-red-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-pink-600/80 border-2 border-white/80 group-hover/thumb:scale-110 transition-transform">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1.5 filter drop-shadow" />
            </div>
          </div>
          
          <span className="mt-3 bg-black/80 backdrop-blur-md text-pink-300 font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full border border-pink-500/40 shadow-lg tracking-wide uppercase flex items-center gap-1.5 animate-bounce">
            <Sparkles className="w-4 h-4 text-amber-300" />
            Click to Start Live Uncensored Stream
          </span>
        </div>

        {/* Fake Video Control Bar Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 pt-6 z-10">
          {/* Progress Bar */}
          <div className="w-full bg-gray-700/80 h-1.5 rounded-full overflow-hidden mb-2">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 h-full w-[35%] relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md" />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-300">
            <div className="flex items-center gap-3 font-mono font-medium">
              <Play className="w-4 h-4 text-pink-400 fill-pink-400 cursor-pointer" />
              <Volume2 className="w-4 h-4 text-gray-300" />
              <span className="text-white font-bold">00:00 / {video.videoTime}</span>
              <span className="hidden sm:inline-block text-xs bg-red-600/80 text-white font-sans px-2 py-0.5 rounded text-[10px] uppercase font-bold">
                Clear Audio
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" /> {video.views} Views
              </span>
              <Maximize2 className="w-4 h-4 text-gray-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Title & Metadata Footer */}
      <div className="p-4 bg-[#141422]" onClick={onAdClick}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h1 className="text-white font-bold text-base sm:text-lg leading-snug group-hover:text-pink-400 transition-colors cursor-pointer">
              {video.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-400">
              <span className="bg-pink-500/10 text-pink-400 px-2.5 py-0.5 rounded-full border border-pink-500/20 font-semibold">
                {video.category || 'Indian Bhabhi'}
              </span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <ThumbsUp className="w-3.5 h-3.5" /> {video.rating || '98% Positive'}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-gray-500" /> {video.views} total views
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button className="bg-[#1e1e30] hover:bg-pink-900/30 text-pink-300 border border-gray-700 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition">
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
            <button className="bg-gradient-to-r from-pink-600 to-red-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold shadow-md shadow-pink-600/30 animate-pulse flex items-center gap-1">
              JOIN CAM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
