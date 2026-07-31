import React, { useEffect, useState } from 'react';
import { MessageCircle, Bell, Sparkles, X, Flame } from 'lucide-react';
import { NOTIFICATIONS } from '../data';
import { NotificationItem } from '../types';

interface NotificationToastsProps {
  onAdClick: () => void;
}

export const NotificationToasts: React.FC<NotificationToastsProps> = ({ onAdClick }) => {
  const [activeNotifications, setActiveNotifications] = useState<NotificationItem[]>([]);

  useEffect(() => {
    // Sequentially trigger notifications after entering the site
    const timers: NodeJS.Timeout[] = [];

    NOTIFICATIONS.forEach((notif, index) => {
      const timer = setTimeout(() => {
        setActiveNotifications((prev) => {
          // Keep max 2 visible at a time to prevent overcrowding on mobile
          const next = [...prev, notif];
          return next.slice(-2);
        });

        // Automatically dismiss each individual notification after 6 seconds
        setTimeout(() => {
          setActiveNotifications((prev) => prev.filter((item) => item.id !== notif.id));
        }, 6000);

      }, (index + 1) * 1800); // Trigger every 1.8 seconds

      timers.push(timer);
    });

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  if (activeNotifications.length === 0) return null;

  return (
    <div className="fixed top-14 sm:top-16 right-2 sm:right-4 z-40 flex flex-col gap-2.5 max-w-xs sm:max-w-sm w-full pointer-events-none px-2">
      {activeNotifications.map((notif) => (
        <div
          key={notif.id}
          onClick={onAdClick}
          className="pointer-events-auto bg-[#181628]/95 backdrop-blur-md border border-pink-500/50 rounded-2xl p-3 shadow-xl shadow-pink-950/50 flex items-center gap-3 cursor-pointer animate-float-up hover:border-pink-400 hover:scale-[1.02] transition-all group"
        >
          {/* Girl Avatar with Pulsing Red Notification Badge */}
          <div className="relative shrink-0">
            <img
              src={notif.callerImage}
              alt={notif.callerName}
              className="w-12 h-12 rounded-full object-cover border-2 border-pink-500 shadow-md group-hover:scale-105 transition-transform"
            />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full border border-black animate-pulse">
              NEW
            </span>
          </div>

          {/* Message Text */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <span className="text-xs font-black text-white truncate group-hover:text-pink-300">
                {notif.callerName}
              </span>
              <span className="text-[10px] text-pink-400 font-semibold bg-pink-500/10 px-1.5 py-0.5 rounded-full border border-pink-500/20">
                {notif.timeAgo}
              </span>
            </div>
            <p className="text-xs font-medium text-gray-200 mt-0.5 line-clamp-2 leading-tight">
              {notif.message}
            </p>
          </div>

          {/* Action Icon */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-600 to-red-500 flex items-center justify-center text-white shrink-0 shadow-md group-hover:animate-bounce">
            <MessageCircle className="w-4 h-4 fill-white" />
          </div>
        </div>
      ))}
    </div>
  );
};
