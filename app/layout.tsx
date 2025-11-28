'use client';
import "@/styles/globals.css";

 
import { usePathname } from 'next/navigation'

import Image, { StaticImageData } from "next/image";

import LogoSkoh from "@/public/logo/logo_skoh.jpg";
import LogoNotSkoh from "@/public/logo/logo_notskoh.jpg";
import LogoQuantum from "@/public/logo/logo_quantum.jpg";
import LogoKrystal from "@/public/logo/logo_krystal.jpg";
import LogoDeeptrout from "@/public/logo/logo_deeptrout.jpg";
import LogoTweast from "@/public/logo/logo_tweast.jpg";
import LogoGabiholo from "@/public/logo/logo_gabiholo.jpg";
import LogoLucup from "@/public/logo/logo_lucup.jpg";
import LogoUndefined from "@/public/logo/logo_undefined.jpg";
import Link from "next/link";




export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="h-screen bg-neutral-900 text-white">

        <div className="flex flex-col h-full">
          <div className="flex w-full justify-center">
            <BigPic />
          </div>

          <Name />

          <div className="flex flex-row grow justify-center sm:pb-16 pb-4 overflow-auto">
            <Wallpaper />
            <PreloadBackgrounds />
            {children}
          </div>
        </div>

        <div tabIndex={0} className="
          absolute right-0 top-0
          duration-200 overflow-hidden
          h-full w-7
          hover:w-16 focus:w-16
          group
        ">
          <div className="flex h-3/4 items-center">
            <div className="flex items-center bg-white/30 border-zinc-800/70 border-2 backdrop-blur-sm py-1 rounded-l-lg h-fit">
              <div className="
                min-w-5 min-h-5 m-1
                group-hover:min-w-0 group-hover:min-h-0 group-hover:m-0
                group-focus:min-w-0 group-focus:min-h-0 group-focus:m-0
              ">
                <LeftArrow />
              </div>
              <div>
                <ChannelPic src={LogoSkoh} size={48} bsize={2} alt='Skoh&amps;s logo' url='/skoh' />
                <ChannelPic src={LogoNotSkoh} size={48} bsize={2} alt='NotSkoh&amps;s logo' url='' />
                <div className="h-px group-hover:w-4/5 group-focus:w-4/5 rounded-full m-2 bg-zinc-700"></div>
                <ChannelPic src={LogoDeeptrout} size={48} bsize={2} alt='Deeptrout&amps;s logo' url='/deeptrout' />
                <ChannelPic src={LogoTweast} size={48} bsize={2} alt='Tweast&amps;s logo' url='/tweast' />
                <ChannelPic src={LogoGabiholo} size={48} bsize={2} alt='Gabiholo&amps;s logo' url='/gabiholo' />
                <ChannelPic src={LogoLucup} size={48} bsize={2} alt='LucUp&amps;s logo' url='/lucup' />
                <div className="flex justify-evenly">
                  <div><ChannelPic src={LogoKrystal} size={20} bsize={2} alt='Krystal&amps;s logo' url='/krystal' /></div>
                  <div><ChannelPic src={LogoQuantum} size={20} bsize={2} alt='Quantum&amps;s logo' url='/quantum' /></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}



const LeftArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 512 463.95">
    <path
      fillRule="nonzero"
      d="M512 332.66H268.5v92.31c-.68 15.47-5.77 26.46-15.43 32.82-25.79 17.2-52.31-5.26-69.24-22.6L14.33 261.6c-19.11-17.28-19.11-41.93 0-59.21L188.71 24.42c16.06-16.39 40.56-34.09 64.36-18.21 9.66 6.35 14.75 17.34 15.43 32.81v92.31H512v201.33z"
    />
  </svg>
)




//
// Reusable components
//

function PreloadBackgrounds() {
  return (
    <div className="hidden">
      {["Skoh", "NotSkoh", "Quantum", "Krystal", "Deeptrout", "Tweast", "Gabiholo", "Lucup"].map(n => {
        return (
          <img
            key={n}
            loading="eager" decoding="async" fetchPriority="low" // Download the image, but VERY LOW priority, to avoid slowing page rendering
            src={"/background/BlurBg" + n + ".jpg"}
          />
        )
      })}
    </div>
  )
}

function BigPic() {
  const pathname = usePathname()

  return (
    <Image height={160} width={160} className="rounded-md mt-4" src={logo_pick(pathname)} alt={pathname} />
  )
}


function ChannelPic({ src, size, bsize, alt, url }: { src: StaticImageData, size: number, bsize: number, alt: string, url: string }) {
  let pathname = usePathname()
  if (pathname === '/')
    pathname = '/skoh'

  const border_size = (bsize === 2 ? 'group-hover:border-2 group-focus:border-2' : '')
  const border_color = (pathname === url ? 'border-indigo-600' : 'border-zinc-800')
  const margins = (size < 48 ? '' : 'm-2')

  return (
    <Link href={url} className="w-[0px] h-[0px]">
      <div className={`${border_size} ${border_color} rounded-full ${margins} w-fit`}>
      <Image src={src} height={size} width={size} className="rounded-full" alt={alt} />
      </div>
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

function Name() {
  const pathname = usePathname()
  const name = name_pick(pathname)

  return (
    <h1 className="text-5xl text-center font-bold pt-2 text-shadow-lg">
      {name}
    </h1>
  )
}



//
// Pickers
//

const wp_pick = (path: string) => {
  switch (path) {
    case '/':
    case '/skoh':
     return 'bg-[url(/background/BlurBgSkoh.jpg)]'
    case '/notskoh':
     return 'bg-[url(/background/BlurBgNotSkoh.jpg)]'
    case '/krystal':
     return 'bg-[url(/background/BlurBgKrystal.jpg)]'
    case '/quantum':
     return 'bg-[url(/background/BlurBgQuantum.jpg)]'
    case '/deeptrout':
     return 'bg-[url(/background/BlurBgDeeptrout.jpg)]'
    case '/tweast':
     return 'bg-[url(/background/BlurBgTweast.jpg)]'

    case '/gabiholo':
     return 'bg-[url(/background/BlurBgNotSkoh.jpg)]'
    case '/lucup':
     return 'bg-[url(/background/BlurBgNotSkoh.jpg)]'

    default:
      return ''
  }
}


const logo_pick = (path: string) => {
  switch (path) {
    case '/':
    case '/skoh':
     return LogoSkoh 
    case '/notskoh':
     return LogoNotSkoh 
    case '/krystal':
     return LogoKrystal 
    case '/quantum':
     return LogoQuantum 
    case '/deeptrout':
     return LogoDeeptrout 
    case '/tweast':
     return LogoTweast 
    case '/gabiholo':
     return LogoGabiholo 
    case '/lucup':
     return LogoLucup 
    default:
      return LogoUndefined
  }
}

const name_pick = (path: string) => {
  switch (path) {
    case '/':
    case '/skoh':
     return 'Skoh'
    case '/notskoh':
     return 'NotSkoh'
    case '/krystal':
     return 'Krystal'
    case '/quantum':
     return 'Quantum'
    case '/deeptrout':
     return 'DeepTrout'
    case '/tweast':
     return 'Tweast'
    case '/gabiholo':
     return 'Gabiholo'
    case '/lucup':
     return 'LucUp'
    default:
      return ''
  }
}
