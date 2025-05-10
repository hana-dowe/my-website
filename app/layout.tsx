import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import IconButton from '@/app/components/iconButton'
import GithubIcon from '@/app/components/icons/githubIcon'
import HomeIcon from '@/app/components/icons/homeIcon'
import LinkedInIcon from '@/app/components/icons/linkedInIcon'
import MailIcon from '@/app/components/icons/mailIcon'
import NavMenu from '@/app/components/navMenu'

import './globals.css'

const nunito = Nunito({
  weight: ['400', '500', '600', '700'],
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
  // hanatodo make bottom circles bigger
  // hanatodo make inner border a separate sticky component (things aren't passing behind it rn)

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.className} bg-background-light p-2`}>
        <div className="bg-background rounded-[20px] rounded-tr-none overflow-clip flex w-full h-[calc(100vh-2rem)] min-h-[calc(100vh-16px)] [clip-path:border-box]">
          <div className="flex justify-between absolute w-[calc(100%-8px)] z-30">
            <div className="pl-3 pt-3 w-fit">
              <a href="/" className="text-beige group">
                <HomeIcon className="group-hover:scale-110 w-fit h-8 box-content p-3" />
              </a>
            </div>
            <NavMenu />
          </div>
          <div className="flex flex-col border-beige rounded-[16px] border-2 m-2 w-[calc(100%-1rem)] overflow-x-visible overflow-y-auto customScrollbar scroll-smooth">
            <div className="flex mx-auto px-4 md:px-16 w-full pt-16 justify-center z-0">
              {children}
            </div>
            <div className="flex flex-row gap-6 justify-center my-4 z-20">
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
