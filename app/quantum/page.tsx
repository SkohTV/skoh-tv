import { Card } from "../_components";

import Youtube from "@/public/brand/youtube.png";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Quantum',
  description: 'Wip',
}


export default function Page() {
  return (
    <div>
      <Card logo={Youtube} url='https://www.youtube.com/@quantum-rs' name='Youtube' padded={false} colors={{ bg: 'bg-red-600/20', hover_bg: 'hover:bg-red-600/50', border: 'border-red-600' }} />
      <div className="h-4"></div>
    </div>
  );
}
