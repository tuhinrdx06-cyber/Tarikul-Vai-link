import React from 'react';
import { Play, Eye, Clock, ThumbsUp, Flame, Radio, Sparkles } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoGridProps {
  videos: VideoItem[];
  onAdClick: () => void;
}

export const VideoGrid: React.FC<VideoGridProps> = ({ videos, onAdClick }) => {
  return (
    <div className="mt-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-pink-500/10 text-pink-500 border border-pink-500/20">
            <Flame className="w-5 h-5 fill-pink-500" />
          </div>
          <div>
            <h2 className="text-white font-extrabold text-lg sm:text-xl tracking-tight flex items-center gap-2">
              Trending Desi Live Videos
              <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse">
                HOT
              </span>
            </h2>
            <p className="text-xs text-gray-400">High Speed 4K Streaming - Click any video thumbnail to watch</p>
          </div>
        </div>

        <button 
          onClick={onAdClick}
          className="text-xs font-bold text-pink-400 hover:text-pink-300 flex items-center gap-1 cursor-pointer"
        >
          <span>View All (120+)</span>
          <Sparkles className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {videos.map((video, idx) => (
          <div
            key={video.id}
            onClick={onAdClick}
            className="bg-[#141422] rounded-xl border border-gray-800 hover:border-pink-500/60 overflow-hidden shadow-lg hover:shadow-pink-900/20 transition-all duration-300 cursor-pointer group flex flex-col"
          >
            {/* Thumbnail Image Container */}
            <div className="relative aspect-video w-full bg-black overflow-hidden">
              <img 
                src={video.image} 
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Number Badge */}
              <div className="absolute top-2 left-2 bg-pink-600 text-white text-[11px] font-black px-2 py-0.5 rounded shadow-md uppercase">
                #{idx + 2} TRENDING
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-md text-amber-300 font-mono font-bold text-xs px-2 py-0.5 rounded border border-gray-700 flex items-center gap-1">
                <Clock className="w-3 h-3 text-pink-400" />
                <span>{video.videoTime}</span>
              </div>

              {/* Views Badge */}
              <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-md text-emerald-400 font-bold text-xs px-2 py-0.5 rounded border border-gray-700 flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>{video.views}</span>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-600 to-red-500 flex items-center justify-center shadow-xl shadow-pink-600/60 border border-white/80 group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>
              </div>
            </div>

            {/* Video Details */}
            <div className="p-3.5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-white font-bold text-sm leading-snug line-clamp-2 group-hover:text-pink-400 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between mt-2.5 text-xs text-gray-400">
                  <span className="bg-[#1e1e30] text-pink-300 px-2 py-0.5 rounded text-[11px] font-medium border border-pink-500/20">
                    {video.category || 'Desi Premium'}
                  </span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3" /> {video.rating || '99%'}
                  </span>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-gray-800/80 flex items-center justify-between">
                <span className="text-[11px] text-gray-400 flex items-center gap-1">
                  <Radio className="w-3 h-3 text-red-500 animate-pulse" /> Free HD Stream
                </span>
                <span className="text-xs font-bold text-pink-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  Watch Now →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
