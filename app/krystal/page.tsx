import { Card } from "../_components";

import Youtube from "@/public/brand/youtube.png";
import Twitch from "@/public/brand/twitch.png";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Krystal',
  description: 'Wip',
}


export default function Page() {
  return (
    <div>
      <Card logo={Youtube} url='https://www.youtube.com/@krystal090' name='Youtube' padded={false} colors={{ bg: 'bg-red-600/20', hover_bg: 'hover:bg-red-600/50', border: 'border-red-600' }} />
      <Card logo={Twitch} url='https://www.twitch.tv/Krystal090' name='Twitch' padded={true} colors={{ bg: 'bg-purple-800/20', hover_bg: 'hover:bg-purple-800/50', border: 'border-purple-800' }} />
      <div className="h-4"></div>
    </div>
  );
}
