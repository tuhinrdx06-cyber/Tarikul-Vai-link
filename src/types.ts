export interface VideoItem {
  id: string;
  image: string;
  title: string;
  videoTime: string;
  views: string;
  isLive?: boolean;
  liveViewers?: string;
  category?: string;
  rating?: string;
}

export interface CallerProfile {
  id: string;
  name: string;
  image: string;
  status: string;
  contacts: ('whatsapp' | 'telegram' | 'facebook')[];
  age?: number;
  location?: string;
}

export interface NotificationItem {
  id: string;
  callerName: string;
  callerImage: string;
  message: string;
  timeAgo: string;
}
