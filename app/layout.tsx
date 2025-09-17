'use client';
import "@/styles/globals.css";

 
import { usePathname } from 'next/navigation'

import Image, { StaticImageData } from "next/image";

import LogoSkoh from "@/public/logo/logo_skoh.jpg";
import LogoNotSkoh from "@/public/logo/logo_notskoh.jpg";
import LogoQuantum from "@/public/logo/logo_quantum.jpg";
import LogoKrystal from "@/public/logo/logo_krystal.jpg";
import Link from "next/link";




export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="h-screen bg-neutral-900 text-white">

        <div className="flex flex-col h-full">
          <div className="flex w-full justify-center">
            <div className="flex bg-white/30 rounded-b-lg px-2">
              <ChannelPic src={LogoSkoh} size={86} bsize={4} alt='Skoh&amps;s logo' url='/skoh' />
              <ChannelPic src={LogoNotSkoh} size={86} bsize={4} alt='NotSkoh&amps;s logo' url='' />
            </div>
          </div>

          <div className="flex flex-row grow justify-center sm:p-16 p-4 overflow-auto">
            <Wallpaper />
            {children}
          </div>
        </div>

        <div className="absolute right-0 top-0 w-16 h-full">
          <div className="flex h-3/4 items-center">
            <div className="bg-white/30 backdrop-blur-sm py-1 rounded-l-lg h-fit">
              <ChannelPic src={LogoKrystal} size={48} bsize={2} alt='Krystal&amps;s logo' url='/krystal' />
              <ChannelPic src={LogoQuantum} size={48} bsize={2} alt='Quantum&amps;s logo' url='/quantum' />
              <div className="h-px w-4/5 rounded-full m-2 bg-zinc-700"></div>
              <ChannelPic src={LogoNotSkoh} size={48} bsize={2} alt='NotSkoh&amps;s logo' url='' />
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}





function ChannelPic({ src, size, bsize, alt, url }: { src: StaticImageData, size: number, bsize: number, alt: string, url: string }) {
  let pathname = usePathname()
  if (pathname === '/')
    pathname = '/skoh'

  const border_size = (bsize === 2 ? 'border-2' : bsize === 4 ? 'border-4' : '')
  const border_color = (pathname === url ? 'border-indigo-600' : 'border-zinc-800')

  return (
    <Link href={url}>
      <Image src={src} height={size} width={size} className={`rounded-full m-2 ${border_size} ${border_color}`} alt={alt} />
    </Link>
  )
}

function Wallpaper() {
  const pathname = usePathname()
  const wallpaper = wp_pick(pathname)

  return (
    <div className={`${wallpaper} duration-200 h-full w-full absolute -z-1 bottom-0 left-0 bg-cover bg-center bg-scroll`}>
    </div>
  )
}

const wp_pick = (path: string) => {
  switch (path) {
    case '/':
    case '/skoh':
     return 'bg-[url(../public/background/BlurBgSkoh.jpg)]'
    case '/notskoh':
     return 'bg-[url(../public/background/BlurBgNotSkoh.jpg)]'
    case '/krystal':
     return 'bg-[url(../public/background/BlurBgKrystal.jpg)]'
    case '/quantum':
     return 'bg-[url(../public/background/BlurBgQuantum.jpg)]'
    default:
      return ''
  }
}
