import React, { useEffect, useState } from 'react';
import { PhoneCall, PhoneOff, Video, ShieldCheck, Sparkles, Volume2, MessageSquare } from 'lucide-react';
import { CALLERS } from '../data';
import { CallerProfile } from '../types';

interface CallingCardModalProps {
  onAdClick: () => void;
}

export const CallingCardModal: React.FC<CallingCardModalProps> = ({ onAdClick }) => {
  const [callerIndex, setCallerIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Initial popup after 2.5 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Card stays on screen for 4.5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);

      // Wait 10 seconds before bringing up the next card
      const nextCardTimer = setTimeout(() => {
        setCallerIndex((prevIndex) => (prevIndex + 1) % CALLERS.length);
        setIsVisible(true);
      }, 10000);

      return () => clearTimeout(nextCardTimer);
    }, 4500);

    return () => clearTimeout(hideTimer);
  }, [isVisible, callerIndex]);

  if (!isVisible) return null;

  const currentCaller: CallerProfile = CALLERS[callerIndex];

  return (
    <div 
      onClick={onAdClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm cursor-pointer animate-fade-in"
    >
      {/* Calling Card Box with Zoom-In Zoom-Out Breathing Animation */}
      <div 
        className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-[#1c1a2e] via-[#141224] to-[#0d0c18] border-2 border-pink-500 p-6 shadow-[0_0_50px_rgba(255,42,95,0.6)] text-center text-white animate-zoom-pulse cursor-pointer overflow-hidden"
      >
        {/* Subtle Radar Ring background effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-pink-500/20 animate-ping pointer-events-none" />

        {/* Incoming Call Header Tag */}
        <div className="inline-flex items-center gap-2 bg-red-600/90 text-white font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-red-600/50 mb-4 animate-bounce">
          <Video className="w-4 h-4 text-white animate-pulse" />
          <span>INCOMING VIDEO CALL...</span>
        </div>

        {/* Girl's Profile Photo Container with Glowing Online Badge */}
        <div className="relative w-28 h-28 mx-auto mb-3">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-amber-400 p-1 animate-spin" style={{ animationDuration: '6s' }} />
          <img 
            src={currentCaller.image} 
            alt={currentCaller.name} 
            className="w-full h-full object-cover rounded-full p-1 bg-[#141224] relative z-10 shadow-2xl"
          />
          {/* Green Online Ring Badge */}
          <div className="absolute bottom-1 right-1 z-20 bg-emerald-500 border-2 border-[#141224] w-6 h-6 rounded-full flex items-center justify-center shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
          </div>
        </div>

        {/* Caller Name */}
        <h3 className="text-2xl font-black tracking-tight text-white mb-1 drop-shadow">
          {currentCaller.name}
        </h3>

        {/* Status Text */}
        <p className="text-xs font-semibold text-pink-400 mb-4 flex items-center justify-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span>{currentCaller.status}</span>
        </p>

        {/* Contact Logos (WhatsApp, Telegram, Facebook) */}
        <div className="flex items-center justify-center gap-3 mb-5 py-2.5 px-4 bg-[#110e20] rounded-2xl border border-gray-800/80">
          <span className="text-[11px] font-bold text-gray-400 mr-1">Available on:</span>

          {/* WhatsApp Logo */}
          <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </div>

          {/* Telegram Logo */}
          <div className="w-8 h-8 rounded-full bg-[#0088cc] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform">
            <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </div>

          {/* Facebook Logo */}
          <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>
        </div>

        {/* Action Call Buttons: Accept (Green Pulsing) vs Decline (Red) */}
        <div className="grid grid-cols-2 gap-3">
          {/* Decline Button */}
          <button 
            onClick={onAdClick}
            className="flex items-center justify-center gap-1.5 bg-red-600/20 hover:bg-red-600/40 text-red-400 border border-red-500/40 py-3 rounded-2xl font-extrabold text-sm transition-all"
          >
            <PhoneOff className="w-4 h-4" />
            <span>Decline</span>
          </button>

          {/* Accept Button (Pulsing Ring) */}
          <button 
            onClick={onAdClick}
            className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-white py-3 rounded-2xl font-black text-sm shadow-xl shadow-emerald-500/40 hover:opacity-95 transition-all animate-bounce"
          >
            <PhoneCall className="w-5 h-5 animate-shake-ring" />
            <span>ACCEPT CALL</span>
          </button>
        </div>

        {/* Small Disclaimer Footer */}
        <p className="mt-4 text-[10px] text-gray-400 font-medium">
          🔒 100% Free & Anonymous Private Cam Stream
        </p>
      </div>
    </div>
  );
};
