import ChildHatIcon from '@/app/components/icons/childHat'
import ClubIcon from '@/app/components/icons/club'
import GameIcon from '@/app/components/icons/game'
import HeadphonesIcon from '@/app/components/icons/headphones'
import LanguageIcon from '@/app/components/icons/language'
import LyricsIcon from '@/app/components/icons/lyrics'
import MangaIcon from '@/app/components/icons/manga'
import MovieEditIcon from '@/app/components/icons/movieEdit'
import MysteryIcon from '@/app/components/icons/mystery'
import PaletteIcon from '@/app/components/icons/palette'
import PetsIcon from '@/app/components/icons/pets'
import SchoolIcon from '@/app/components/icons/school'
import UdonIcon from '@/app/components/icons/udon'
import WorkIcon from '@/app/components/icons/work'
import { GachaResult } from '@/app/types/types'

export const gachaResults: GachaResult[] = [
  {
    title: 'Background/Upbringing',
    icon: <ChildHatIcon />,
    summary: 'half Japanese, half Canadian', // hanatodo pic of myself?
  },
  {
    title: 'Languages',
    icon: <LanguageIcon />,
    summary: 'Japanese/English (lot more if you count programming languages)',
  },
  {
    title: 'Hobbies',
    icon: <HeadphonesIcon />,
    summary: 'I like japanese music, translation + concerts, yonezu, radwimps, vocaloid',
  },
  {
    title: 'Favourite Game',
    icon: <GameIcon />,
    summary: 'kirby and epic yarn + little big planet',
  },
  {
    title: 'Magenetra',
    icon: <LyricsIcon />,
    summary: 'favourite song',
  },
  {
    title: 'Video editing',
    icon: <MovieEditIcon />,
    summary: 'favourite song',
  },
  {
    title: 'favourite color',
    icon: <PaletteIcon />,
    summary: 'light blue even though site is green hmmm', // hanatodo button to change theme to blue
  },
  {
    title: 'Favourite Animal',
    icon: <PetsIcon />,
    summary: 'cat, hope to introduce a cat here in the future once I get one',
  },
  {
    title: 'Favourite Anime/manga',
    icon: <MangaIcon />,
    summary: 'idk',
  },
  {
    title: 'mystery',
    icon: <MysteryIcon />,
    summary: 'decective shows/games, escape rooms, exit board game',
  },
  {
    title: 'Work 1',
    icon: <WorkIcon />,
    summary: 'alida co-op',
  },
  {
    title: 'Work 2',
    icon: <WorkIcon />,
    summary: 'alida full-time', // hanatodo weird if u get this before co-op?
  },
  {
    title: 'School',
    icon: <SchoolIcon />,
    summary: 'uoft',
  },
  {
    title: 'club',
    icon: <ClubIcon />,
    summary: 'mcss',
  },
  {
    title: 'food',
    icon: <UdonIcon />,
    summary: 'udon, fruits',
  },
] as const

/*
hanatodo 

<div className="text-center pt-4 bg-background rounded-xl w-4/5">
      <p>I started my software development career in 2022
            at Alida as a co-op student. Through collaborating with senior engineers, I gained
            professional experience contributing to front-end and back-end development, and even
            some UX design.</p>
      <p>
        In 2024, I completed a double major in Computer Science and Communication, Culture,
        Information & Technology (CCIT) at the University of Toronto. After graduating, I was
        offered a full-time position at Alida, where I continued to take on more challenging tasks
        and grow as a developer.
      </p>
      <p>
        I'm a big fan of Japanese music and have been working as a translator and proofreader with
        the Magenetra team since 2016. We've currently translated over 400 songs to help
        English-speaking audiences better connect with their lyrics.
      </p>
    </div>     
*/
