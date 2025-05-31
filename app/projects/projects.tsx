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
import deerhacksLogo from '@/public/deerhacks/logo.png'
import deerhacksPolaroid from '@/public/deerhacks/MNBuilding.png'
// magenetra
import magenetraPolaroid from '@/public/magenetra/channelBanner.png'
import magenetraIcon from '@/public/magenetra/lyricalTranslation.svg'
// pigeons
import pigeonsLogo from '@/public/pigeons/PigeonBread.png'
import pigeonsPolaroid from '@/public/pigeons/pigeonSelfie.png'
// skippy
import skippyLogo from '@/public/skippy/Skippy.png'
import skippyPolaroid from '@/public/skippy/SkippyPlaying.png'
// spellwell
import spellWellPolaroid from '@/public/spellwell/landingPage.png'
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
        src: 'deerhacks/landingPage.png',
        alt: 'DeerHacks Landing Page',
        width: 1905,
        height: 1198,
        description: 'Home page!',
      },
      {
        src: 'deerhacks/dashboardFull.png',
        alt: 'DeerHacks Dashboard',
        width: 993,
        height: 1199,
        description: 'Users log in with discord to view their dashboard',
      },
      {
        src: 'deerhacks/scheduleEvent.png',
        alt: 'DeerHacks Schedule with event details showing',
        width: 1920,
        height: 1200,
        description: 'Dynamic schedule that updates with a CMS',
      },
      {
        src: 'deerhacks/application.png',
        alt: 'DeerHacks Application Page',
        width: 1899,
        height: 1199,
        description: 'Application submissions were done on the website as well',
      },
      {
        src: 'deerhacks/wireframe.png',
        alt: 'Wireframe of 3D model used on home page',
        width: 1207,
        height: 700,
        description: 'Making the 3D model on blender',
      },
      {
        src: 'deerhacks/closingCeremony.jpg',
        alt: 'DeerHacks Closing Ceremony',
        width: 1200,
        height: 1800,
      },
      {
        src: 'deerhacks/deer.jpg',
        alt: 'An actual photo of a deer taken on campus',
        width: 2992,
        height: 5238,
        description: 'An actual deer on campus',
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
        src: 'skippy/SkippyBanner.png',
        alt: 'Banner art for Skippy the Swimmer',
        width: 2024,
        height: 850,
      },
      {
        src: 'skippy/FindHome.png',
        alt: 'Initial screen after starting the game',
        width: 1432,
        height: 793,
      },
      {
        src: 'skippy/MainMenu.png',
        alt: 'Main menu of Skippy the Swimmer',
        width: 1421,
        height: 794,
      },
      {
        src: 'skippy/SkippyPlaying.png',
        alt: 'Skippy playing with his brother Skimpy',
        width: 2400,
        height: 1350,
      },
      {
        src: 'skippy/TempRoom.png',
        alt: 'Room level design',
        width: 698,
        height: 481,
        description: 'Planning the main level',
      },
      {
        src: 'skippy/OriginalGame.png',
        alt: 'First iteration of Skippy the Swimmer',
        width: 779,
        height: 433,
        description: 'One of the first iterations of the game',
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
        src: 'spellwell/dictionaries.png',
        alt: 'Dictionaries used in Spell Well',
        width: 1881,
        height: 1199,
      },
      {
        src: 'spellwell/originalDictionary.png',
        alt: 'User created Dictionary screen',
        width: 1881,
        height: 1200,
      },
      {
        src: 'spellwell/gameScreen.png',
        alt: 'Spell Well Game Screen',
        width: 1916,
        height: 1120,
      },
      {
        src: 'spellwell/prototype.png',
        alt: 'Spell Well Prototype design',
        width: 1355,
        height: 676,
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
  // make sure images aren't too big in size (around 200K) use https://tiny-img.com/image-compressor/
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
