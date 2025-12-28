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
  const padd = (padded ? 'sm:mt-4 mt-3' : 'sm:mt-14 mt-10')

  return (
    <div className={`sm:w-[650px] sm:h-[86px] w-screen h-[70px] sm:px-0 px-10 flex ${padd} justify-end`}>
      <Link href={url} className={
        `
          ${width} p-1 flex h-full sm:justify-start justify-center
          ${colors.border} ${colors.bg} ${url === '' ? 'cursor-not-allowed opacity-50' : colors.hover_bg}
          border-3 rounded-md duration-100
        `
      }>
        <div className="mt-[3px] flex w-full sm:mx-0 mx-4 sm:justify-start justify-between">
          <div className="flex sm:mx-4 sm:h-[64px] sm:w-[64px] h-[48px] w-[48px]">
            <Image className='rounded-md' src={logo} alt={name} />
          </div>
          <div className="items-center text-2xl p-2 flex text-shadow-sm">
            {name}
          </div>
          <div className="h-[32px] w-[32px] " />
        </div>
      </Link>
    </div>
  );
}
