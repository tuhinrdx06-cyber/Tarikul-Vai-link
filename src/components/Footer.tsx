import React from 'react';
import { ShieldCheck, Lock, Sparkles, Heart, Radio, Flame } from 'lucide-react';

interface FooterProps {
  onAdClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAdClick }) => {
  return (
    <footer className="mt-16 bg-[#0a0a10] border-t border-gray-800 text-gray-400 py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Trust & Quality Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div 
            onClick={onAdClick}
            className="p-3 bg-[#12121e] rounded-xl border border-gray-800 hover:border-pink-500/40 cursor-pointer transition"
          >
            <ShieldCheck className="w-6 h-6 text-pink-500 mx-auto mb-1" />
            <h4 className="text-white font-bold text-xs">18+ Adult Verified</h4>
            <p className="text-[10px] text-gray-400">Strict Age & Content Policy</p>
          </div>

          <div 
            onClick={onAdClick}
            className="p-3 bg-[#12121e] rounded-xl border border-gray-800 hover:border-pink-500/40 cursor-pointer transition"
          >
            <Lock className="w-6 h-6 text-emerald-400 mx-auto mb-1" />
            <h4 className="text-white font-bold text-xs">256-Bit SSL Encrypted</h4>
            <p className="text-[10px] text-gray-400">100% Anonymous & Secure</p>
          </div>

          <div 
            onClick={onAdClick}
            className="p-3 bg-[#12121e] rounded-xl border border-gray-800 hover:border-pink-500/40 cursor-pointer transition"
          >
            <Sparkles className="w-6 h-6 text-amber-400 mx-auto mb-1" />
            <h4 className="text-white font-bold text-xs">4K Ultra HD Cam</h4>
            <p className="text-[10px] text-gray-400">Zero Buffering Speed</p>
          </div>

          <div 
            onClick={onAdClick}
            className="p-3 bg-[#12121e] rounded-xl border border-gray-800 hover:border-pink-500/40 cursor-pointer transition"
          >
            <Radio className="w-6 h-6 text-red-500 mx-auto mb-1 animate-pulse" />
            <h4 className="text-white font-bold text-xs">24/7 Live Broadcasters</h4>
            <p className="text-[10px] text-gray-400">Thousands Online Now</p>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div 
          onClick={onAdClick}
          className="text-center text-xs text-gray-400 space-y-2 border-t border-b border-gray-800/80 py-4 cursor-pointer"
        >
          <p className="font-semibold text-gray-300">
            Welcome to DesiFlix LIVE - The #1 Premium Adult Web Streaming Platform
          </p>
          <p className="text-[11px] max-w-4xl mx-auto leading-relaxed">
            All actors and models portrayed on this video portal were 18 years of age or older at the time of production. 
            Clicking anywhere on this platform connects you directly to our high-speed HD live video chat servers.
          </p>
        </div>

        {/* Copyright */}
        <div 
          onClick={onAdClick}
          className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3 cursor-pointer"
        >
          <p>© 2026 DesiFlix LIVE Network. All rights reserved.</p>
          <div className="flex items-center gap-4 text-pink-400 font-medium">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>2257 Compliance</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
