import { Card } from "../_components";

import Github from "@/public/brand/github.png";
import Linkedin from "@/public/brand/linkedin.png";
import Link_ from "@/public/brand/link.png";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Skoh',
  description: 'Wip',
}

export default function Page() {
  return (
    <div>
      <Card logo={Github} url='https://github.com/SkohTV' name='Github' padded={false} colors={{ bg: 'bg-black/20', hover_bg: 'hover:bg-black/50', border: 'border-black' }} />
      <Card logo={Linkedin} url='https://www.linkedin.com/in/noe-lorret-despret/' padded={true} name='LinkedIn' colors={{ bg: 'bg-blue-600/20', hover_bg: 'hover:bg-blue-600/50', border: 'border-blue-600' }} />
      <Card logo={Link_} url='https://skoh.dev' padded={true} name='Portfolio' colors={{ bg: 'bg-slate-500/20', hover_bg: 'hover:bg-slate-500/50', border: 'border-slate-500' }} />
      <div className="h-4"></div>
    </div>
  );
}
