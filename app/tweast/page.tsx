import { Card } from "../_components";

import Twitch from "@/public/brand/twitch.png";
import X from "@/public/brand/x.png";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'NotSkoh',
  description: 'Wip',
}


export default function Page() {
  return (
    <div>
      <Card logo={Twitch} url='https://twitch.tv/tweast_tv' name='Twitch' padded={false} colors={{ bg: 'bg-purple-800/20', hover_bg: 'hover:bg-purple-800/50', border: 'border-purple-800' }} />
      <Card logo={X} url='https://x.com/TweastW' name='X' padded={true} colors={{ bg: 'bg-black/20', hover_bg: 'hover:bg-black/50', border: 'border-black' }} />
      <div className="h-4"></div>
    </div>
  );
}
