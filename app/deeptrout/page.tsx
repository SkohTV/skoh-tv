import { Card } from "../_components";

import Youtube from "@/public/brand/youtube.png";
import Discord from "@/public/brand/discord.png";
import Instagram from "@/public/brand/instagram.png";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'DeepTrout',
  description: 'Wip',
}

export default function Page() {
  return (
    <div>
      <Card logo={Youtube} url='https://www.youtube.com/@DeepTrout' name='Youtube' padded={false} colors={{ bg: 'bg-red-600/20', hover_bg: 'hover:bg-red-600/50', border: 'border-red-600' }} />
      <Card logo={Discord} url='' name='Discord' padded={true} colors={{ bg: 'bg-indigo-600/20', hover_bg: 'hover:bg-indigo-600/50', border: 'border-indigo-600' }} />
      <Card logo={Instagram} url='' name='Instagram' padded={true} colors={{ bg: 'bg-fuchsia-600/20', hover_bg: 'hover:bg-fuchsia-600/50', border: 'border-fuchsia-600' }} />
      <div className="h-4"></div>
    </div>
  );
}
