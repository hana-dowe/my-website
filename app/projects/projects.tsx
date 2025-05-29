// icons
import GithubIcon from '@/app/components/icons/github'
import OpenNewIcon from '@/app/components/icons/openNew'
import PdfIcon from '@/app/components/icons/pdf'
import TumblrIcon from '@/app/components/icons/tumblr'
import XIcon from '@/app/components/icons/x'
import YoutubeIcon from '@/app/components/icons/youtube'
import { Project, ProjectHrefTypes, SvgProps } from '@/app/types/types'
// alida
import alidaPolaroid from '@/public/alida/alida-NoOutline.png'
import alidaLogo from '@/public/alida/logo.svg'
// deerhacks
import deerhacksApplication from '@/public/deerhacks/application.png'
import deerhacksDashboard from '@/public/deerhacks/dashboardFull.png'
import deerhacksDeer from '@/public/deerhacks/deer.jpg'
import deerhacksLandingPage from '@/public/deerhacks/landingPage.png'
import deerhacksLogo from '@/public/deerhacks/logo.png'
import deerhacksPolaroid from '@/public/deerhacks/MNBuilding.png'
import deerhacksSchedule from '@/public/deerhacks/scheduleEvent.png'
import deerhacksWireframe from '@/public/deerhacks/wireframe.png'
// magenetra
import magenetraPolaroid from '@/public/magenetra/channelBanner.png'
import magenetraIcon from '@/public/magenetra/lyricalTranslation.svg'
// pigeons
import pigeonsLogo from '@/public/pigeons/PigeonBread.png'
import pigeonsPolaroid from '@/public/pigeons/pigeonSelfie.png'
// skippy
import skippyFindHome from '@/public/skippy/FindHome.png'
import skippyMainMenu from '@/public/skippy/MainMenu.png'
import skippyOriginalGame from '@/public/skippy/OriginalGame.png'
import skippyLogo from '@/public/skippy/Skippy.png'
import skippyBanner from '@/public/skippy/SkippyBanner.png'
import skippyPolaroid from '@/public/skippy/SkippyPlaying.png'
import skippyTempRoom from '@/public/skippy/TempRoom.png'
// spellwell
import spellWellDictionary from '@/public/spellwell/dictionaries.png'
import spellWellGameScreen from '@/public/spellwell/gameScreen.png'
import spellWellPolaroid from '@/public/spellwell/landingPage.png'
import spellWellOriginalDictionary from '@/public/spellwell/originalDictionary.png'
import spellWellPrototype from '@/public/spellwell/prototype.png'
import spellWellLogo from '@/public/spellwell/wizard.svg'

const projects: Project[] = [
  {
    id: 'pigeons',
    name: "Pigeons Aren't Real",
    role: 'Game Design',
    summary: 'A card game based on the conspiracy theory that pigeons are government drones.',
    logoSrc: pigeonsLogo,
    polaroidSrc: pigeonsPolaroid,
    polaroidAlt: 'Pigeon Selfie',
    hrefs: {
      pdf: 'https://drive.google.com/file/d/11mpvWapGpEDHvyFRlCmzw37xtGKtOw5A/view?usp=drive_link',
    },
    images: [], //hanatodo
  },
  {
    id: 'deerhacks',
    name: 'DeerHacks',
    role: 'Web Development',
    summary:
      'Website for DeerHacks 2024, a hackathon hosted by MCSS at UTM. Served as a platform for students to register for the event and find resources.',
    logoSrc: deerhacksLogo,
    polaroidSrc: deerhacksPolaroid,
    polaroidAlt: 'DeerHacks Landing Page',
    hrefs: {
      default: 'https://2024.deerhacks.ca/',
      github: 'https://github.com/utmmcss/deerhacks',
    },
    images: [
      {
        src: deerhacksLandingPage,
        alt: 'DeerHacks Landing Page',
      },
      {
        src: deerhacksDashboard,
        alt: 'DeerHacks Dashboard',
      },
      {
        src: deerhacksSchedule,
        alt: 'DeerHacks Schedule with event details showing',
      },
      {
        src: deerhacksApplication,
        alt: 'DeerHacks Application Page',
      },
      {
        src: deerhacksWireframe,
        alt: 'Wireframe of 3D model used on home page',
      },
      {
        src: deerhacksDeer,
        alt: 'An actual photo of a deer taken on campus',
      },
    ],
  },
  {
    id: 'skippy',
    name: 'Skippy the Swimmer',
    role: 'Game Design/Development',
    summary: 'An adventure game about Skippy the axolotl trying to return home.',
    logoSrc: skippyLogo,
    polaroidSrc: skippyPolaroid,
    polaroidAlt: 'Skippy Playing with Skimpy',
    hrefs: {
      default: 'https://studioberry.itch.io/skippy-the-swimmer',
      youtube: 'https://youtu.be/5J1WIgDGCDQ?si=4aJoe1QQ1_4yciym',
    },
    images: [
      {
        src: skippyBanner,
        alt: 'Banner art for Skippy the Swimmer',
      },
      {
        src: skippyFindHome,
        alt: 'Initial screen after starting the game',
      },
      {
        src: skippyMainMenu,
        alt: 'Main menu of Skippy the Swimmer',
      },
      {
        src: skippyTempRoom,
        alt: 'Room level design',
      },
      {
        src: skippyOriginalGame,
        alt: 'First iteration of Skippy the Swimmer',
      },
    ],
  },
  {
    id: 'alida',
    name: 'Alida',
    role: 'Software Development',
    summary:
      'Co-op placement at the Touchpoint team in Alida, worked on a customer experience management platform that helps businesses collect and analyze customer feedback.',
    logoSrc: alidaLogo,
    polaroidSrc: alidaPolaroid,
    polaroidAlt: 'Alida Dashboard',
    hrefs: {
      default: 'https://www.alida.com/touchpoint',
    },
  },
  {
    id: 'spellwell',
    name: 'Spell Well',
    role: 'Game Design/Development',
    summary: 'A web-based game that helps users practice spelling and vocabulary skills.',
    logoSrc: spellWellLogo,
    polaroidSrc: spellWellPolaroid,
    polaroidAlt: 'Spell Well Landing Page',
    hrefs: {
      default: 'https://hana-dowe.github.io/SpellWell/',
    },
    images: [
      {
        src: spellWellDictionary,
        alt: 'Dictionaries used in Spell Well',
      },
      {
        src: spellWellOriginalDictionary,
        alt: 'User created Dictionary screen',
      },
      {
        src: spellWellGameScreen,
        alt: 'Spell Well Game Screen',
      },
      {
        src: spellWellPrototype,
        alt: 'Spell Well Prototype design',
      },
    ],
  },
  {
    id: 'magenetra',
    name: 'Magenetra',
    role: 'Translation/Proofreading',
    summary: 'Japanese vocaloid song translations.',
    logoSrc: magenetraIcon, // hanatodo make icon color of the starry sky?
    polaroidSrc: magenetraPolaroid,
    polaroidAlt: 'Magenetra Icon',
    hrefs: {
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
