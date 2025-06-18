'use client'

import Image from 'next/image'

import { Project } from '@/app/types/types'
import { smoothScrollTo } from '@/app/utils/utils'

type Props = {
  location: IconLocation
} & Pick<Project, 'id' | 'logoSrc' | 'name'>

const FloatingProjectIcon = (props: Props) => {
  const { location, id, logoSrc, name } = props

  // tailwind doesn't support dynamic class names, can't do things like scale-[${scale}] or delay-[${delay}]
  const random = Math.round(Math.random() * 10)

  const scales = [
    'scale-[0.8] hover:scale-[0.85]',
    'scale-95 hover:scale-100',
    'scale-100 hover:scale-105',
    'scale-[1.2] hover:scale-[1.25]',
  ]
  const randomScale = scales[random % scales.length]

  const delays = ['0s', '0.5s', '1s', '0.75s', '0.25s', '1.25s', '1.5s']
  const randomDelay = delays[random % delays.length]

  return (
    <a
      href="" // mouse doesn't change pointer if removed & doesn't focus (but that part's fine)
      onClick={(e) => smoothScrollTo(e, id, 'center')}
      className={`w-1/3 h-full ${aClassNames[location]} ${randomScale}`}
      suppressHydrationWarning
    >
      <Image
        className={`projectIcon float`}
        style={{ animationDelay: randomDelay }}
        src={logoSrc}
        alt={name + ' Logo'}
        loading="eager"
        suppressHydrationWarning // it doesn't like that Math.random is different on server and client but its just decorative so ignore them
      />
    </a>
  )
}

type IconLocation =
  | 'top-left-0'
  | 'top-left-1'
  | 'top-right-0'
  | 'top-right-1'
  | 'bottom-left-0'
  | 'bottom-left-1'
  | 'bottom-left-2'
  | 'bottom-right-0'
  | 'bottom-right-1'
  | 'bottom-right-2'
  | 'bottom-even'
  | 'bottom-odd'

type IconLocationClasses = {
  [key in IconLocation]: React.ComponentProps<'a'>['className']
}

const aClassNames: IconLocationClasses = {
  'top-left-0': 'rotate-3 translate-y-16 md:translate-x-[-3vw]',
  'top-left-1': 'rotate-3 lg:-translate-y-4 md:translate-x-[-2vw]',

  'top-right-0': '-rotate-6 lg:-translate-y-4 md:translate-x-[2vw]',
  'top-right-1': 'rotate-12 translate-y-16 md:translate-x-[2vw]',

  'bottom-left-0':
    '-rotate-12 translate-y-2 lg:-translate-y-20 md:translate-x-[-2vw] lg:translate-x-[-3vw]',
  'bottom-left-1':
    'rotate-6 -translate-y-2 lg:-translate-y-4 md:translate-x-[-1vw] lg:translate-x-[-4vw]',
  'bottom-left-2':
    '-rotate-12 translate-y-2 lg:translate-y-0 md:translate-x-[-1vw] lg:translate-x-[-3vw]',

  'bottom-right-0':
    '-rotate-6 -translate-y-2 lg:-translate-y-0 md:translate-x-[1vw] lg:translate-x-[2vw]',
  'bottom-right-1':
    'rotate-6 translate-y-2 lg:-translate-y-4 md:translate-x-[1vw] lg:translate-x-[4vw]',
  'bottom-right-2':
    'rotate-12 -translate-y-2 lg:-translate-y-24 md:translate-x-[2vw] lg:translate-x-[3vw]',

  'bottom-even': '-rotate-12 translate-y-2',
  'bottom-odd': 'rotate-6 -translate-y-2',
}

export default FloatingProjectIcon
