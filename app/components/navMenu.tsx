'use client'
import { useState } from 'react'

import GithubIcon from '@/app/components/icons/github'
import HomeIcon from '@/app/components/icons/home'
import LinkedInIcon from '@/app/components/icons/linkedIn'
import MailIcon from '@/app/components/icons/mail'
import MenuIcon from '@/app/components/icons/menu'
import { smoothScrollTo } from '@/app/utils/utils'

const NavMenu = () => {
  var [navOpen, setNavOpen] = useState(false)

  // hanatodo change nav menu based on current page if I add multiple pages (need to change anyways for not found pages)
  // chack if the current page is the home page, if not hide menu and only show home icon? or change link in menu to go home and to correct position
  // hanatodo add 404 / error pages with button to go back to home page

  return (
    <div className="flex justify-between absolute w-[calc(100%-8px)]">
      <div className="pl-3 pt-3 w-fit">
        <a
          href=""
          onClick={(e) => {
            smoothScrollTo(e, 'home', 'start')
          }}
          className="text-beige group hidden sm:block"
        >
          <HomeIcon className="group-hover:scale-110 h-8 box-content p-3" />
        </a>
      </div>
      <div className="rounded-bl-[24px] border-beige border-l-2 border-b-2 pb-2 pl-2 z-50">
        <div
          suppressHydrationWarning
          className={`grid bg-beige rounded-bl-[16px] text-mainDark font-bold gap-6 ${navOpen && 'py-5 px-8'}`}
        >
          <div className="flex justify-between">
            <div className={`${!navOpen && 'hidden'}`}>
              <a
                href=""
                onClick={(e) => {
                  setNavOpen(false)
                  smoothScrollTo(e, 'home', 'start')
                }}
                className="group"
              >
                <HomeIcon className="group-hover:scale-110 h-full box-content" />
              </a>
            </div>
            <button
              className={`group w-fit justify-self-end ${!navOpen && 'py-5 px-8'}`}
              onClick={() => setNavOpen(!navOpen)}
            >
              <h2 className={'h-6 group-hover:scale-110 w-fit'}>
                <MenuIcon />
              </h2>
            </button>
          </div>
          <div className={`${navOpen ? 'grid' : 'hidden'} gap-4 text-xl`}>
            <a href="#about" onClick={() => setNavOpen(false)} className="group">
              <h2 className="animatedUnderline group-hover:animatedUnderline-active group-hover:scale-105">
                About
              </h2>
            </a>
            <a href="#projects" onClick={() => setNavOpen(false)} className="group">
              <h2 className="animatedUnderline group-hover:animatedUnderline-active group-hover:scale-105">
                Projects
              </h2>
            </a>
          </div>
          <div className={`${navOpen ? 'flex' : 'hidden'} flex-row gap-6`}>
            <a href="mailto:hanadowe@gmail.com" className="group">
              <h2 className="h-8 group-hover:scale-110">
                <MailIcon />
              </h2>
            </a>
            <a href="https://www.linkedin.com/in/hanadowe/" target="_blank" className="group">
              <h2 className="h-8 group-hover:scale-110">
                <LinkedInIcon />
              </h2>
            </a>
            <a href="https://github.com/hana-dowe" target="_blank" className="group">
              <h2 className="h-8 group-hover:scale-110">
                <GithubIcon />
              </h2>
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${navOpen ? 'fixed' : 'hidden'} h-full w-full bg-background opacity-50 z-40 rounded-[20px]`}
        onClick={() => setNavOpen(false)}
      />
    </div>
  )
}

export default NavMenu
