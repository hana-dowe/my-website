'use client' // hanatodo move parts that need client to a separate file?

import { Mali } from 'next/font/google'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

import Button from '@/app/components/button'
import FloatingProjectIcon from '@/app/components/floatingProjectIcon'
import IconButton from '@/app/components/iconButton'
import GachaIcon from '@/app/components/icons/gacha'
import GithubIcon from '@/app/components/icons/githubIcon'
import LinkedInIcon from '@/app/components/icons/linkedInIcon'
import MailIcon from '@/app/components/icons/mailIcon'
import MyFace from '@/app/components/myFace'
import Polaroid from '@/app/components/polaroid'
import ProjectModal from '@/app/components/projectModal'
import projects, { shuffle } from '@/app/projects/projects'
import { Project } from '@/app/types/types'

const mali = Mali({
  weight: ['600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  // hanatodo shake logos on first render (shake every couple seconds?? or on hover)
  // hanatodo random size project icons on lg size screen
  // hanatodo figure out icon layout for mobile landing page

  let shuffled_icons = shuffle(projects)

  var projectsMap = new Map<string, Project>()
  projects.forEach((project) => {
    projectsMap.set(project.id, project)
  })

  const searchParams = useSearchParams()
  const router = useRouter()

  return (
    <main>
      <div className="flex w-full flex-col gap-32">
        <div className="flex flex-col my-auto gap-y-2 max-w-full m-auto sm:pb-8 self-center w-fit items-center sm:min-h-[calc(100dvh-8rem)] justify-center">
          <div className="flex flex-row w-full justify-between lg:w-[110%] relative items-start">
            <div className="hidden w-1/2 lg:w-1/3 sm:flex flex-row">
              <FloatingProjectIcon
                {...shuffled_icons[0]}
                className="rotate-3 translate-y-16 md:translate-x-[-3vw]"
              />
              <FloatingProjectIcon
                {...shuffled_icons[1]}
                className="rotate-3 md:translate-x-[-2vw]"
              />
            </div>
            <MyFace className="hidden lg:flex w-48 left-0 right-0 m-auto" />
            <div className="hidden sm:w-1/2 lg:w-1/3 sm:flex flex-row justify-end">
              <FloatingProjectIcon
                {...shuffled_icons[2]}
                className="-rotate-6  md:translate-x-[2vw]"
              />
              <FloatingProjectIcon
                {...shuffled_icons[3]}
                className="rotate-12 translate-y-16 md:translate-x-[2vw]"
              />
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
              <FloatingProjectIcon
                {...shuffled_icons[3]}
                className="-rotate-12 translate-y-2 lg:-translate-y-24 md:translate-x-[-2vw] lg:translate-x-[-3vw]"
              />
              <FloatingProjectIcon
                {...shuffled_icons[4]}
                className="rotate-6 -translate-y-2 lg:-translate-y-0 md:translate-x-[-1vw] lg:translate-x-[-4vw]"
              />
              <FloatingProjectIcon
                {...shuffled_icons[2]}
                className="-rotate-12 translate-y-2 lg:-translate-y-4 md:translate-x-[-1vw] lg:translate-x-[1vw]"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-row justify-end">
              <FloatingProjectIcon
                {...shuffled_icons[1]}
                className="-rotate-6 -translate-y-2 lg:-translate-y-4 md:translate-x-[1vw] lg:translate-x-[-1vw]"
              />
              <FloatingProjectIcon
                {...shuffled_icons[5]}
                className="rotate-6 translate-y-2 lg:-translate-y-0 md:translate-x-[1vw] lg:translate-x-[-1vw]"
              />
              <FloatingProjectIcon
                {...shuffled_icons[0]}
                className="rotate-12 -translate-y-2 lg:-translate-y-20 md:translate-x-[2vw] lg:translate-x-[3vw]"
              />
            </div>
          </div>
        </div>

        <div className="flex sm:hidden items-center w-full justify-between">
          <FloatingProjectIcon
            {...shuffled_icons[3]}
            className="-rotate-12 translate-y-2 lg:-translate-y-24 md:translate-x-[-2vw] lg:translate-x-[-3vw]"
          />
          <FloatingProjectIcon
            {...shuffled_icons[4]}
            className="rotate-6 -translate-y-2 lg:-translate-y-0 md:translate-x-[-1vw] lg:translate-x-[-4vw]"
          />
          <FloatingProjectIcon
            {...shuffled_icons[2]}
            className="-rotate-12 translate-y-2 lg:-translate-y-4 md:translate-x-[-1vw] lg:translate-x-[1vw]"
          />
        </div>

        <div
          id="about"
          className="bg-background-dark rounded-2xl px-8 lg:mx-24 flex flex-col lg:flex-row"
        >
          <div
            className="flex flex-col"
            // hanatodo lg:w-3/5 after adding random fact section
          >
            <h1 key={0} className="text-[5vw] text-beige">
              <span className={mali.className}>Hi I'm Hana!</span>
            </h1>
            <p>
              I'm a software developer based in Toronto. I'm passionate about understanding how
              things work and how people use technology—it's what drew me to UI/UX design. I
              completed a double major in Computer Science and Communication, Culture, Information &
              Technology (CCIT) at the University of Toronto. I gained professional experience
              through a co-op placement at Alida, contributing to front-end and back-end
              development, along with some UX design.
            </p>
            <br />
            <p>
              I'm a big fan of Japanese music and have been working as a translator and proofreader
              with the Magenetra team since 2016. We've translated over 400 songs to help
              English-speaking audiences better connect with them.
            </p>
            <br />
            <br />
            <div className="flex flex-row gap-6 my-4 mt-auto">
              <IconButton href="mailto:hanadowe@gmail.com">
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

          <div className="hidden lg:w-2/5 h-full flex-col items-center pt-8">
            <div className="text-center pt-4 bg-background rounded-xl w-4/5">
              <p>hanatodo</p>
              <p>always start with pic of myself</p>
              <p>i like music</p>
              <p>I know two languages (more if you count programming languages)</p>
              <p>favourite game</p>
              <p>magenetra</p>
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
                <Polaroid
                  id={project.id}
                  key={i + 1}
                  name={project.name}
                  photoSrc={project.polaroidSrc ?? ''}
                  photoAlt={project.polaroidAlt ?? ''}
                  badgeSrc={project.logoSrc}
                  variant={i % 2 == 0 ? 'right' : 'left'}
                />
              )
            })}
          </div>
          <ProjectModal
            open={!!searchParams.get('project')}
            onClose={() => router.push('/', { scroll: false })}
            project={projectsMap.get(searchParams.get('project') as string)}
          />
        </div>
      </div>
    </main>
  )
}
