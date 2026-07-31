import React, { useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { LiveHeaderBanner } from './components/LiveHeaderBanner';
import { MainLiveStream } from './components/MainLiveStream';
import { VideoGrid } from './components/VideoGrid';
import { CallingCardModal } from './components/CallingCardModal';
import { NotificationToasts } from './components/NotificationToasts';
import { Footer } from './components/Footer';
import { AD_LINK, VIDEOS } from './data';
import { Flame, Radio, ShieldCheck, Sparkles, Users, Video } from 'lucide-react';

export default function App() {
  // Global ad click handler - whenever user clicks anywhere, redirect to AD_LINK
  const handleAdRedirect = useCallback(() => {
    try {
      const newWin = window.open(AD_LINK, '_blank');
      if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
        // Fallback if popups are blocked
        window.location.href = AD_LINK;
      }
    } catch {
      window.location.href = AD_LINK;
    }
  }, []);

  // Global document click listener so clicking literally anywhere triggers the ad link
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Trigger ad redirect
      handleAdRedirect();
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [handleAdRedirect]);

  return (
    <div 
      className="min-h-screen bg-[#09090e] text-gray-100 font-sans selection:bg-pink-500 selection:text-white cursor-pointer relative overflow-x-hidden"
      onClick={handleAdRedirect}
    >
      {/* Top High-Urgency Announcement Banner */}
      <LiveHeaderBanner onAdClick={handleAdRedirect} />

      {/* Main Header Nav */}
      <Header onAdClick={handleAdRedirect} />

      {/* Notification Toasts Popup (Appears automatically) */}
      <NotificationToasts onAdClick={handleAdRedirect} />

      {/* Calling Card Popup Modal (Appears 2-3s after entry, stays 4-5s, 10s delay loop) */}
      <CallingCardModal onAdClick={handleAdRedirect} />

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 py-6 space-[#1e1b2e]">
        
        {/* Floating Call-to-Action Bar */}
        <div 
          onClick={handleAdRedirect}
          className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-pink-900/60 via-red-950/80 to-purple-900/60 border border-pink-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 cursor-pointer hover:border-pink-400 transition"
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-pink-600 to-red-500 flex items-center justify-center shrink-0 shadow-lg shadow-pink-600/40">
              <Video className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <h2 className="text-white font-extrabold text-sm sm:text-base flex items-center gap-2">
                <span>Direct 1-on-1 Private Cam Chat Available</span>
                <span className="text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse">
                  ONLINE NOW
                </span>
              </h2>
              <p className="text-xs text-pink-200">
                Click anywhere to instantly unlock 4K Uncensored HD Stream & Private Room Access!
              </p>
            </div>
          </div>

          <button 
            onClick={handleAdRedirect}
            className="w-full sm:w-auto bg-gradient-to-r from-pink-500 via-red-500 to-amber-500 text-white font-black text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-lg shadow-pink-500/30 hover:scale-105 transition-transform shrink-0 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>CONNECT LIVE NOW</span>
          </button>
        </div>

        {/* 1st Featured Live Stream Thumbnail (Live option on top) */}
        <MainLiveStream video={VIDEOS[0]} onAdClick={handleAdRedirect} />

        {/* Remaining 3 Video Thumbnails Grid */}
        <VideoGrid videos={VIDEOS.slice(1)} onAdClick={handleAdRedirect} />

      </main>

      {/* Footer */}
      <Footer onAdClick={handleAdRedirect} />
    </div>
  );
}
