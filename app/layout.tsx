import type { Metadata } from 'next'
import { Mali, Nunito } from 'next/font/google'

import IconButton from '@/app/components/iconButton'
import GithubIcon from '@/app/components/icons/githubIcon'
import HomeIcon from '@/app/components/icons/homeIcon'
import LinkedInIcon from '@/app/components/icons/linkedInIcon'
import MailIcon from '@/app/components/icons/mailIcon'
import MyFace from '@/app/components/myFace'
import NavMenu from '@/app/components/navMenu'

import './globals.css'

const nunito = Nunito({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const mali = Mali({
  weight: ['600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hana Dowe',
  description: 'Hana Dowe is a software developer and UI/UX designer based in Toronto Canada',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // hanatodo change nav menu based on current page (after adding pages for specific projects) (home needs to scroll up instead of diff page on home page)

  return (
    <html lang="en" className="overflow-hidden">
      <body className={`${nunito.className} bg-background-light p-2`}>
        <div className="bg-background rounded-[20px] rounded-tr-none overflow-clip flex w-full h-[calc(100dvh-2rem)] min-h-[calc(100dvh-16px)] [clip-path:border-box]">
          <div className="flex justify-between absolute w-[calc(100%-8px)] z-30">
            <div className="pl-3 pt-3 w-fit">
              <a href="/" className="text-beige group">
                <HomeIcon className="group-hover:scale-110 h-8 box-content p-3" />
              </a>
            </div>
            <NavMenu />
          </div>
          <div className="absolute left-4 top-4 right-4 h-[calc(100dvh-2rem)] border-beige rounded-[16px] border-2 pointer-events-none z-20"></div>
          <div className="flex flex-col p-2 overflow-x-visible overflow-y-auto customScrollbar scroll-smooth">
            <div className="flex mx-auto px-4 md:px-16 w-full pt-16 justify-center z-0">
              {children}
            </div>

            <div className="flex flex-col items-center pt-8 ">
              <MyFace outline className="w-28" />
              <h1 className="text-beige">
                <span className={mali.className}>© Hana Dowe</span>
              </h1>
            </div>
            <div className="flex flex-row gap-6 justify-center py-8 z-20">
              <IconButton href="mailto:han_d87@outlook.com">
                <MailIcon />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/hanadowe/" newTab>
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/hana-dowe" newTab>
                <GithubIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
