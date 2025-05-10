import { Mali } from 'next/font/google'
import Image from 'next/image'

import skippyPlaying from '@/public/skippy/SkippyPlaying.png'

const mali = Mali({
  weight: ['600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

// hanatodo delete this page later

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <h1 className="flowyHeading">
        <span className={mali.className}>About Me</span>
      </h1>

      <p>
        idk what to write here yet but I need to pretend like I have content so I can see what the
        font looks like :\/
      </p>
      <p>email somewhere</p>
      <p>work experience</p>
      <p>interests</p>
      <p>magenetra</p>
      <p>hobby(concerts)</p>
      <p>I like cats :D</p>

      <div className=" hover:scale-105 transition-all duration-75">
        <div className="relative aspect-video min-h-64 " /* images */>
          <Image
            className="p-2 bg-black border-2 border-white absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 object-center scale-75 -rotate-6 z-10 hover:z-40 hover:-rotate-12 hover:scale-90 w-full h-auto saturate-0 hover:saturate-100"
            src={skippyPlaying}
            alt="DeerHacks Dashboard Page"
          />
          <Image
            className="p-2 bg-black border-2 border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-center scale-75 z-30 hover:z-40 hover:scale-90 w-full h-auto saturate-0 hover:saturate-100"
            src="/deerhacks/landingPage.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="DeerHacks Landing Page"
          />
          <Image
            className="p-2 bg-black border-2 border-white absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 rotate-6 scale-75 z-20 hover:z-40 hover:rotate-12 hover:scale-90 w-full h-auto saturate-0 hover:saturate-100"
            src="/deerhacks/schedule.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="DeerHacks Schedule Page"
          />
        </div>
        <div className="text-center pt-4">
          <h2>DeerHacks</h2>
        </div>
      </div>
    </main>
  )
}
