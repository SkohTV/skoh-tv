import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";


export interface Colors {
  bg: string,
  hover_bg: string,
  border: string,
}

export function Card({ logo, url, name, padded, colors }: { logo: StaticImageData, url: string, name: string, padded: boolean, colors: Colors }) {
  const width = (padded ? 'w-4/5' : 'w-full')
  const padd = (padded ? 'mt-4' : 'mt-16')

  return (
    <div className={`w-[650px] h-[86px] flex ${padd} justify-end`}>
      <Link href={url} className={`flex ${colors.bg} ${colors.hover_bg} border-3 rounded-md ${colors.border} duration-100 p-1 ${width} h-full`}>
        <div className="mt-[3px] flex">
          <div className="flex mx-4 h-[64px] w-[64px]">
            <Image src={logo} alt={name} />
          </div>
          <div className="flex items-center text-2xl p-2">
            {name}
          </div>
        </div>
      </Link>
    </div>
  );
}
