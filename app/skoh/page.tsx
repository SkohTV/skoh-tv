import { Card } from "../_components";

import Youtube from "@/public/brand/youtube.png";
import Discord from "@/public/brand/discord.png";
import Steam from "@/public/brand/steam.png";
import Github from "@/public/brand/github.png";
import Linkedin from "@/public/brand/linkedin.png";
import Instagram from "@/public/brand/instagram.png";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Skoh',
  description: 'Wip',
}

export default function Page() {
  return (
    <div>
      <Card logo={Youtube} url='https://www.youtube.com/@Skoh' name='Youtube' padded={false} colors={{ bg: 'bg-red-600/20', hover_bg: 'hover:bg-red-600/50', border: 'border-red-600' }} />
      <Card logo={Discord} url='https://discord.gg/G8hrncZ' name='Discord' padded={true} colors={{ bg: 'bg-indigo-600/20', hover_bg: 'hover:bg-indigo-600/50', border: 'border-indigo-600' }} />
      <Card logo={Steam} url='https://steamcommunity.com/id/SkohTV/' name='Steam' padded={true} colors={{ bg: 'bg-indigo-950/20', hover_bg: 'hover:bg-indigo-950/50', border: 'border-indigo-950' }} />

      <Card logo={Github} url='https://github.com/SkohTV' name='Github' padded={false} colors={{ bg: 'bg-black/20', hover_bg: 'hover:bg-black/50', border: 'border-black' }} />
      <Card logo={Linkedin} url='https://www.linkedin.com/in/noe-lorret-despret/' padded={true} name='LinkedIn' colors={{ bg: 'bg-blue-600/20', hover_bg: 'hover:bg-blue-600/50', border: 'border-blue-600' }} />

      <Card logo={Instagram} url='https://www.instagram.com/noe.lorret/' name='Instagram' padded={false} colors={{ bg: 'bg-fuchsia-600/20', hover_bg: 'hover:bg-fuchsia-600/50', border: 'border-fuchsia-600' }} />
      <div className="h-4"></div>
    </div>
  );
}
