import { Card } from "../_components";

import Youtube from "@/public/brand/youtube.png";
import Twitch from "@/public/brand/twitch.png";
import Undefined from "@/public/logo/logo_notskoh.jpg";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'NotSkoh',
  description: 'Wip',
}


export default function Page() {
  return (
    <div>
      <Card logo={Youtube} url='https://www.youtube.com/@NotSkoh' name='Youtube' padded={false} colors={{ bg: 'bg-red-600/20', hover_bg: 'hover:bg-red-600/50', border: 'border-red-600' }} />
      <Card logo={Twitch} url='http://twitch.tv/NotSkoh' name='Twitch' padded={true} colors={{ bg: 'bg-purple-800/20', hover_bg: 'hover:bg-purple-800/50', border: 'border-purple-800' }} />
      <Card logo={Undefined} url='' name='Undefined' padded={true} colors={{ bg: 'bg-black/20', hover_bg: 'hover:bg-black/50', border: 'border-black' }} />
      <div className="h-4"></div>
    </div>
  );
}
