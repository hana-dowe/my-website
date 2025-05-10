'use client'
import { useState } from 'react'

import GithubIcon from '@/app/components/icons/githubIcon'
import LinkedInIcon from '@/app/components/icons/linkedInIcon'
import MailIcon from '@/app/components/icons/mailIcon'
import MenuIcon from '@/app/components/icons/menuIcon'

const NavMenu = () => {
  var [navOpen, setNavOpen] = useState(false)
  return (
    <>
      <div className="rounded-bl-[24px] border-beige border-l-2 border-b-2 pb-2 pl-2 z-50">
        <div
          suppressHydrationWarning
          className={`grid bg-beige rounded-bl-[16px] text-mainDark font-bold gap-6 ${navOpen && 'py-5 px-8'}`}
        >
          <button
            className={`group w-fit justify-self-end ${!navOpen && 'py-5 px-8'}`}
            onClick={() => setNavOpen(!navOpen)}
          >
            <h2 className={'h-6 group-hover:scale-110 w-fit'}>
              <MenuIcon />
            </h2>
          </button>
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
            <a href="mailto:han_d87@outlook.com" className="group">
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
    </>
  )
}

export default NavMenu
