import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";


export interface Colors {
  bg: string,
  hover_bg: string,
  border: string,
}

export function Card({ logo, url, name, padded, colors }: { logo: StaticImageData, url: string, name: string, padded: boolean, colors: Colors }) {
  const width = (padded ? 'sm:w-4/5 w-full' : 'w-full')
  const padd = (padded ? 'mt-4' : 'mt-14')

  return (
    <div className={`sm:w-[650px] h-[86px] w-[86px] flex ${padd} justify-end`}>
      <Link href={url} className={`flex ${colors.bg} ${colors.hover_bg} border-3 rounded-md ${colors.border} duration-100 p-1 ${width} h-full sm:justify-start justify-center`}>
        <div className="mt-[3px] flex">
          <div className="flex sm:mx-4 h-[64px] w-[64px]">
            <Image src={logo} alt={name} />
          </div>
          <div className="items-center text-2xl p-2 sm:flex hidden text-shadow-sm">
            {name}
          </div>
        </div>
      </Link>
    </div>
  );
}
