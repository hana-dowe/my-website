import { Mali } from 'next/font/google'

import Button from '@/app/components/button'
import FloatingProjectIcon from '@/app/components/floatingProjectIcon'
import IconButton from '@/app/components/iconButton'
import GachaIcon from '@/app/components/icons/gacha'
import GithubIcon from '@/app/components/icons/github'
import LinkedInIcon from '@/app/components/icons/linkedIn'
import MailIcon from '@/app/components/icons/mail'
import MyFace from '@/app/components/myFace'
import Polaroid from '@/app/components/polaroid'
import projects, { shuffle } from '@/app/projects/projects'

const mali = Mali({
  weight: ['600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  // hanatodo shake logos on first render (shake every couple seconds?? or on hover)
  // hanatodo figure out icon layout for mobile landing page

  const shuffledProjects = shuffle(projects) // runs twice (server + client) if this file has 'use client' and messes up onClick in projectIcon

  return (
    <main>
      <div className="flex w-full flex-col gap-32">
        <div className="flex flex-col my-auto gap-y-2 max-w-full m-auto sm:pb-8 self-center w-fit items-center sm:min-h-[calc(100dvh-8rem)] justify-center">
          <div className="flex flex-row w-full justify-between lg:w-[110%] relative items-start">
            <div className="hidden w-1/2 lg:w-1/3 sm:flex flex-row">
              <FloatingProjectIcon {...shuffledProjects[0]} location="top-left-0" />
              <FloatingProjectIcon {...shuffledProjects[1]} location="top-left-1" />
            </div>
            <MyFace className="hidden lg:flex w-48 left-0 right-0 m-auto" />
            <div className="hidden sm:w-1/2 lg:w-1/3 sm:flex flex-row justify-end">
              <FloatingProjectIcon {...shuffledProjects[2]} location="top-right-0" />
              <FloatingProjectIcon {...shuffledProjects[3]} location="top-right-1" />
            </div>
          </div>

          <div className="flex flex-col gap-y-8 md:mx-[5vw] items-center">
            <div className="w-fit flex flex-col align-middle items-center flex-wrap-reverse">
              <MyFace className="flex lg:hidden w-48" />
              <div className="my-auto text-wrap justify-items-center">
                <h1 className={`${mali.className} flowyHeading text-balance`}>
                  <span>Hana Dowe</span>
                </h1>
                <p className="text-xl md:text-[2vw] text-center text-pretty text-beige lg:ml-4">
                  A Software Developer with a passion for UX design
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row align-middle justify-center gap-4 self-center min-w-[30%] w-full lg:w-2/3 sm:pb-16 min-h-36 lg:pt-4">
              <Button href="#about" fullWidth>
                About
              </Button>
              <Button href="#projects" fullWidth>
                Projects
              </Button>
            </div>
          </div>

          <div className=" hidden sm:flex flex-col sm:flex-row items-center w-full justify-between lg:w-[110%]">
            <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-row">
              <FloatingProjectIcon {...shuffledProjects[3]} location="bottom-left-0" />
              <FloatingProjectIcon {...shuffledProjects[4]} location="bottom-left-1" />
              <FloatingProjectIcon {...shuffledProjects[2]} location="bottom-left-2" />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-row justify-end">
              <FloatingProjectIcon {...shuffledProjects[1]} location="bottom-right-0" />
              <FloatingProjectIcon {...shuffledProjects[5]} location="bottom-right-1" />
              <FloatingProjectIcon {...shuffledProjects[0]} location="bottom-right-2" />
            </div>
          </div>
        </div>

        <div className="flex sm:hidden items-center w-full justify-between">
          <FloatingProjectIcon {...shuffledProjects[0]} location="bottom-even" />
          <FloatingProjectIcon {...shuffledProjects[1]} location="bottom-odd" />
          <FloatingProjectIcon {...shuffledProjects[2]} location="bottom-even" />
          <FloatingProjectIcon {...shuffledProjects[3]} location="bottom-odd" />
          <FloatingProjectIcon {...shuffledProjects[4]} location="bottom-even" />
        </div>

        <div
          id="about"
          className="bg-background-dark rounded-2xl p-8 lg:mx-24 flex flex-col lg:flex-row"
        >
          <div
            className="flex flex-col gap-4"
            // hanatodo lg:w-3/5 after adding random fact section
          >
            <h1 key={0} className="text-4xl md:text-6xl text-beige">
              <span className={mali.className}>Hi I'm Hana!</span>
            </h1>
            <br />
            <p>
              I'm a software developer based in Toronto with a passion for understanding how things
              work and how people use technology. I completed a double major in Computer Science and
              Communication, Culture, Information & Technology (CCIT) at the University of Toronto.
              During my co-op placement at Alida, I gained professional experience contributing to
              front-end and back-end development, and even some UX design.
            </p>
            <p>
              I'm a big fan of Japanese music and have been working as a translator and proofreader
              with the Magenetra team since 2016. We've currently translated over 400 songs to help
              English-speaking audiences better connect with their lyrics.
            </p>
            <br />
            <br />
            <div className="flex flex-row gap-6 my-4 mt-auto">
              <IconButton href="mailto:hanadowe@gmail.com" ariaLabel="My Email">
                <MailIcon />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/hanadowe/"
                ariaLabel="My LinkedIn"
                newTab
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/hana-dowe" ariaLabel="My GitHub" newTab>
                <GithubIcon />
              </IconButton>
            </div>
          </div>

          <div className="hidden lg:w-2/5 h-full flex-col items-center pt-8">
            <div className="text-center pt-4 bg-background rounded-xl w-4/5">
              <p>hanatodo</p>
              <p>always start with pic of myself?</p>
              <p>i like music</p>
              <p>I know two languages (more if you count programming languages)</p>
              <p>favourite game - kirby yarn and little big planet</p>
              <p>magenetra - favourite tl</p>
              <p>subbed videos</p>
              <p>hobby(concerts)</p>
              <p>I like cats :D</p>
            </div>
            <div className="bg-background-light rounded-t-full text-mainDark w-full">
              <div className="max-w-20 p-4 mx-auto">
                <GachaIcon className="text-background-dark" />
              </div>
              <div className="text-center">
                <h3>New Random Fact</h3>
              </div>
            </div>
          </div>
        </div>

        <div
          id="projects"
          className="flex w-full flex-col items-center gap-24 px-8 sm:px-24 md:px-8"
        >
          <div
            className={
              `grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl ${projects.length % 2 == 0 && 'sm:-mb-64'}`
              // hanatodo sizing works but covers stuff under it, and makes it not clickable if theres an even number of projects
            }
          >
            <h1 key={0} className="text-[5vw] text-beige text-center">
              <span className={mali.className}>Projects</span>
            </h1>
            {projects.map((project, i) => {
              return (
                <Polaroid key={i + 1} project={project} variant={i % 2 == 0 ? 'right' : 'left'} />
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
