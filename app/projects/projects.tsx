import { Project } from '@/app/types/types'
import alida from '@/public/alida/alida-NoOutline.png'
import alidaLogo from '@/public/alida/logo.svg'
import deerhacksLogo from '@/public/deerhacks/logo.png'
import deerhacksLandingPage from '@/public/deerhacks/MNBuilding.png'
import luka from '@/public/magenetra/channelBanner.png'
import lyricalTranslationIcon from '@/public/magenetra/lyricalTranslation.png'
import pigeonBread from '@/public/pigeons/PigeonBread.png'
import pigeonSelfie from '@/public/pigeons/pigeonSelfie.png'
import skippyLogo from '@/public/skippy/Skippy.png'
import skippyPlaying from '@/public/skippy/SkippyPlaying.png'
import spellWellLandingPage from '@/public/spellwell/landingPage.png'
import spellWellLogo from '@/public/spellwell/wizard.png'

const projects: Project[] = [
  {
    id: 'pigeons',
    name: "Pigeons Aren't Real",
    role: 'Game Design',
    summary: 'A card game based on the conspiracy theory that pigeons are government drones.',
    logoSrc: pigeonBread,
    polaroidSrc: pigeonSelfie,
    polaroidAlt: 'Pigeon Selfie',
    href: 'https://www.linkedin.com/in/hanadowe/overlay/1712942298600/single-media-viewer/?profileId=ACoAADsJIQwB8f5KQzGKK49nwoUz4x0gw3T2KkM', // hanatodo
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
    href: 'https://2024.deerhacks.ca/',
  },
  {
    id: 'skippy',
    name: 'Skippy the Swimmer',
    role: 'Game Design/Development',
    summary: 'An adventure game about Skippy the axolotl trying to return home.',
    logoSrc: skippyLogo,
    polaroidSrc: skippyPlaying,
    polaroidAlt: 'Skippy Playing with Skimpy',
    href: 'https://studioberry.itch.io/skippy-the-swimmer',
  },
  {
    id: 'alida',
    name: 'Alida',
    role: 'Software Development',
    summary:
      'Worked on Alida Touchpoint, a customer experience management platform that helps businesses collect and analyze customer feedback.',
    logoSrc: alidaLogo,
    polaroidSrc: alida,
    polaroidAlt: 'Alida Dashboard',
    href: 'https://www.alida.com/touchpoint',
  },
  {
    id: 'spellwell',
    name: 'Spell Well',
    role: 'Game Design/Development',
    summary: 'A web-based game that helps users practice spelling and vocabulary skills.',
    logoSrc: spellWellLogo,
    polaroidSrc: spellWellLandingPage,
    polaroidAlt: 'Spell Well Landing Page',
    href: 'https://hana-dowe.github.io/SpellWell/',
  },
  {
    id: 'magenetra',
    name: 'Magenetra',
    role: 'Translation/Proofreading',
    summary: 'A group that translates Japanese vocaloid songs.',
    logoSrc: lyricalTranslationIcon, // hanatodo make icon color of the starry sky?
    polaroidSrc: luka,
    polaroidAlt: 'Magenetra Icon',
    href: 'https://youtube.com/@magenetra?si=IJxbSpzVaBOS-iBU',
  },
  // don't use svg as logo, because it gets squished on mobile
]

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
