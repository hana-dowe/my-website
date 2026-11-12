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
    title: 'Background',
    icon: <ChildHatIcon />,
    summary: (
      <p>
        I'm half Canadian and half Japanese. I've been living in Canada for a while now but grew up
        in Japan when I was little!
      </p>
    ), // hanatodo pic of myself?
  },
  {
    title: 'Languages',
    icon: <LanguageIcon />,
    summary: (
      <p>
        I'm fluent in English and Japanese (but I know lot more if you count programming languages
        😌)
      </p>
    ),
  },
  {
    title: 'School',
    icon: <SchoolIcon />,
    summary: (
      <p>
        I graduated from University of Toronto Mississauga with a double major in Computer Science
        and Communication Culture Information & Technology (CCIT)
      </p>
    ),
  },
  {
    title: 'Club',
    icon: <ClubIcon />,
    summary: (
      <p>
        I was part of the Mathematical & Computational Sciences Society (MCSS) at the University of
        Toronto Mississauga
      </p>
    ),
  },
  {
    title: 'Co-op',
    icon: <WorkIcon />,
    summary: (
      <p>
        I started my software development career in 2022 at Alida as a co-op student. Through
        collaborating with senior engineers, I gained professional experience contributing to
        full-stack development and even some UX design.
      </p>
    ),
  },
  {
    title: 'Full-time',
    icon: <WorkIcon />,
    summary: (
      <p>
        After graduating, I was offered a full-time position at Alida, where I continued to take on
        more challenging tasks and grow as a developer.
      </p>
    ), // hanatodo weird if u get this before co-op?
  },
  {
    title: 'Favourite Colour',
    icon: <PaletteIcon />,
    summary: (
      <p>
        My favourite colour is light blue. This site being very green probably isn't making my
        statement very convincing though. 😃
      </p>
    ), // hanatodo button to change theme to blue
  },
  {
    title: 'Food',
    icon: <UdonIcon />,
    summary: (
      <>
        <p>
          Very very very big fan of udon, fruits (except bananas) (yes even if they rhyme with my
          name), and my grandma's gratin 🤤
        </p>
      </>
    ),
  },
  {
    title: 'CATS',
    icon: <PetsIcon />,
    summary: (
      <p>
        I <b>LOVE</b> cats. Hope to introduce a cat here in the future once I adopt one!!!!
      </p>
    ),
  },
  {
    title: 'Music',
    icon: <HeadphonesIcon />,
    summary: (
      <p>
        I'm a big fan of japanese music, especially Yonezu Kenshi, RADWIMPS, and Vocaloid. I
        couldn't be happier that so many artists I like have been performing concerts around my area
        recently 😭
      </p>
    ),
  },
  {
    title: 'Translations',
    icon: <LyricsIcon />,
    summary: (
      <>
        <p>
          I've been working as a translator and proofreader with the Magenetra team since 2016.
          We've currently translated over 400 songs to help English-speaking audiences better
          connect with their lyrics.
        </p>
        <p>
          My top 3 favourite translations are probably{' '}
          <a href="https://youtu.be/dB2kew1tFys?si=xLZT8qS--Ls-m4MR" target="_blank">
            KILIG
          </a>
          ,{' '}
          <a href="https://youtu.be/0NK7_heMMv0?si=rUVY_JZG3qKqtL9R" target="_blank">
            Kiritan Wants to Battle Online Endlessly
          </a>
          , and{' '}
          <a href="https://youtu.be/pTZe2UCCUnI?si=Kmw2brnaBHZ5QhcJ" target="_blank">
            Weigh Anchor
          </a>
          .
        </p>
      </>
    ), // hanatodo style links better
  },
  {
    title: 'Video Editing',
    icon: <MovieEditIcon />,
    summary: (
      <>
        <p>I don't work on it that often, but I also like video editing for fun.</p>
        <p>Here's some of my favourites: </p>
        <p>
          I added translations to match the original video for{' '}
          <a href="https://youtu.be/W10eCgCUVEE?si=8hrEpGjxw4SZlIPV" target="_blank">
            Datte
          </a>
          .
        </p>
        <p>
          Recreated the original music video for{' '}
          <a href="https://youtu.be/zG0ZsxUkzW8?si=nCthCPoL78neJxJU" target="_blank">
            Devil's Classroom
          </a>
          .
        </p>
        <p>
          This one is extra special because I was also part of the development team too for{' '}
          <a href="https://youtu.be/5J1WIgDGCDQ?si=5sxFvyV9L1Q522zI" target="_blank">
            Skippy the Swimmer
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: 'Video Games',
    icon: <GameIcon />,
    summary: (
      <p>
        I love cozy games like Kirby and the Epic Yarn, Animal Crossing, Little Big Planet... The
        list goes on for a lot longer but you can just assume anything Nintendo I like as well.
      </p>
    ), // hanatodo constant slow moving pictures of game posters/cases at bottom (clickable)
  },
  {
    title: 'Manga & Anime',
    icon: <MangaIcon />,
    summary: (
      <>
        <p>Must read: Fragrant Flower Blooms with Dignity</p>
        <p>Must watch: The Secret World of Arrietty</p>
        <p>You don't need to do either, but I like it: Gintama</p>
      </>
    ),
  },
  {
    title: 'Mystery Solving',
    icon: <MysteryIcon />,
    summary: (
      <>
        <p>
          My grandpa is a big mystery fan, so ever since I was a kid, I've always seen people dying
          on TV for his detective shows when I visited my grandparents. He trained me young, and now
          I'm also a big fan. Detective shows, puzzle games, escape rooms, exit board game, you name
          them. I like them all.
        </p>
        <p>
          I honestly think my love for software development probably stems from this love of problem
          solving.
        </p>
      </>
    ),
  },
] as const
