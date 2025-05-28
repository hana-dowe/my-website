import GithubIcon from '@/app/components/icons/github'
import OpenNewIcon from '@/app/components/icons/openNew'
import PdfIcon from '@/app/components/icons/pdf'
import TumblrIcon from '@/app/components/icons/tumblr'
import XIcon from '@/app/components/icons/x'
import YoutubeIcon from '@/app/components/icons/youtube'
import { Project, ProjectHrefTypes, SvgProps } from '@/app/types/types'
import alida from '@/public/alida/alida-NoOutline.png'
import alidaLogo from '@/public/alida/logo.svg'
import deerhacksLogo from '@/public/deerhacks/logo.png'
import deerhacksLandingPage from '@/public/deerhacks/MNBuilding.png'
import luka from '@/public/magenetra/channelBanner.png'
import lyricalTranslationIcon from '@/public/magenetra/lyricalTranslation.svg'
import pigeonBread from '@/public/pigeons/PigeonBread.png'
import pigeonSelfie from '@/public/pigeons/pigeonSelfie.png'
import skippyLogo from '@/public/skippy/Skippy.png'
import skippyPlaying from '@/public/skippy/SkippyPlaying.png'
import spellWellLandingPage from '@/public/spellwell/landingPage.png'
import spellWellLogo from '@/public/spellwell/wizard.svg'

const projects: Project[] = [
  {
    id: 'pigeons',
    name: "Pigeons Aren't Real",
    role: 'Game Design',
    summary: 'A card game based on the conspiracy theory that pigeons are government drones.',
    logoSrc: pigeonBread,
    polaroidSrc: pigeonSelfie,
    polaroidAlt: 'Pigeon Selfie',
    mainHref: {
      to: 'https://www.linkedin.com/in/hanadowe/overlay/1712942298600/single-media-viewer/?profileId=ACoAADsJIQwB8f5KQzGKK49nwoUz4x0gw3T2KkM',
    }, // hanatodo
    subHrefs: {
      pdf: 'https://www.linkedin.com/in/hanadowe/overlay/1712942298600/single-media-viewer/?profileId=ACoAADsJIQwB8f5KQzGKK49nwoUz4x0gw3T2KkM',
    },
  },
  {
    id: 'deerhacks',
    name: 'DeerHacks',
    role: 'Web Development',
    summary:
      'Website for DeerHacks 2024, a hackathon hosted by MCSS at UTM. Served as a platform for students to register for the event and find resources.',
    logoSrc: deerhacksLogo,
    polaroidSrc: deerhacksLandingPage,
    polaroidAlt: 'DeerHacks Landing Page',
    mainHref: { to: 'https://2024.deerhacks.ca/' },
    subHrefs: {
      default: 'https://2024.deerhacks.ca/',
      github: 'https://github.com/utmmcss/deerhacks',
    },
  },
  {
    id: 'skippy',
    name: 'Skippy the Swimmer',
    role: 'Game Design/Development',
    summary: 'An adventure game about Skippy the axolotl trying to return home.',
    logoSrc: skippyLogo,
    polaroidSrc: skippyPlaying,
    polaroidAlt: 'Skippy Playing with Skimpy',
    mainHref: { to: 'https://studioberry.itch.io/skippy-the-swimmer' },
    subHrefs: {
      default: 'https://studioberry.itch.io/skippy-the-swimmer',
      youtube: 'https://youtu.be/5J1WIgDGCDQ?si=4aJoe1QQ1_4yciym',
    },
  },
  {
    id: 'alida',
    name: 'Alida',
    role: 'Software Development',
    summary:
      'Co-op placement at on the Touchpoint team at Alida, working on a customer experience management platform that helps businesses collect and analyze customer feedback.',
    logoSrc: alidaLogo,
    polaroidSrc: alida,
    polaroidAlt: 'Alida Dashboard',
    mainHref: { to: 'https://www.alida.com/touchpoint' },
    subHrefs: {
      default: 'https://www.alida.com/touchpoint',
    },
  },
  {
    id: 'spellwell',
    name: 'Spell Well',
    role: 'Game Design/Development',
    summary: 'A web-based game that helps users practice spelling and vocabulary skills.',
    logoSrc: spellWellLogo,
    polaroidSrc: spellWellLandingPage,
    polaroidAlt: 'Spell Well Landing Page',
    mainHref: { to: 'https://hana-dowe.github.io/SpellWell/' },
    subHrefs: {
      default: 'https://hana-dowe.github.io/SpellWell/',
    },
  },
  {
    id: 'magenetra',
    name: 'Magenetra',
    role: 'Translation/Proofreading',
    summary: 'Japanese vocaloid song translations.',
    logoSrc: lyricalTranslationIcon, // hanatodo make icon color of the starry sky?
    polaroidSrc: luka,
    polaroidAlt: 'Magenetra Icon',
    mainHref: { to: 'https://youtube.com/@magenetra?si=IJxbSpzVaBOS-iBU' },
    subHrefs: {
      youtube: 'https://youtube.com/@magenetra?si=IJxbSpzVaBOS-iBU',
      tumblr: 'https://magenetratranslations.tumblr.com',
      x: 'https://twitter.com/the_magenetra',
    },
  },
  // open svg file with text editor and add preserveAspectRatio="none slice" to svg tag if adding as logo, otherwise it'll get squished on mobile
]

export const projectHrefIcons: { [key in ProjectHrefTypes]: (props: SvgProps) => JSX.Element } = {
  default: OpenNewIcon,
  github: GithubIcon,
  youtube: YoutubeIcon,
  tumblr: TumblrIcon,
  x: XIcon,
  pdf: PdfIcon,
}

// hantodo not using for now delete later if not needed
const projectsMap = new Map<string, Project>()
projects.forEach((project) => {
  projectsMap.set(project.id, project)
})

// https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
export const shuffle = (array: Project[]) => {
  let arrayCopy = array.slice(0)
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]]
  }
  return arrayCopy
}

export default projects
