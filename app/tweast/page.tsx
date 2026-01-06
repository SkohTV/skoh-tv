import { Card } from "../_components";

import Twitch from "@/public/brand/twitch.png";
import Youtube from "@/public/brand/youtube.png";
import X from "@/public/brand/x.png";
import Tiktok from "@/public/brand/tiktok.png";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Tweast',
  description: 'Wip',
}


export default function Page() {
  return (
    <div>
      <Card logo={Twitch} url='https://twitch.tv/tweast_tv' name='Twitch' padded={false} colors={{ bg: 'bg-purple-800/20', hover_bg: 'hover:bg-purple-800/50', border: 'border-purple-800' }} />
      <Card logo={Youtube} url='https://www.youtube.com/@tweasttweast6661' name='Youtube' padded={true} colors={{ bg: 'bg-red-600/20', hover_bg: 'hover:bg-red-600/50', border: 'border-red-600' }} />
      <Card logo={X} url='https://x.com/TweastW' name='X' padded={true} colors={{ bg: 'bg-black/20', hover_bg: 'hover:bg-black/50', border: 'border-black' }} />
      <Card logo={Tiktok} url='https://tiktok.com/@tweast0' name='TikTok' padded={true} colors={{ bg: 'bg-black/20', hover_bg: 'hover:bg-black/50', border: 'border-black' }} />
      <div className="h-4"></div>
    </div>
  );
}
