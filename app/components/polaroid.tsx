import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'

import UnderlineHeading from '@/app/components/underlineHeading'

type Props = {
  id: string
  name: string
  photoSrc: string | StaticImport
  photoAlt: string
  badgeSrc: string | StaticImport
  variant?: 'left' | 'right'
}

// hanatodo do i need animated underline??
// hanatodo do i need tape? replace with pin?

const Polaroid = (props: Props) => {
  const { id, name, photoSrc, photoAlt, badgeSrc, variant = 'left' } = props
  return (
    <Link
      id={id}
      className={`relative group h-fit ${variant == 'left' && 'md:-translate-y-64'}`}
      href={`/?project=${id}`}
      scroll={false}
    >
      <div className={`relative my-8 mx-4 ${variant == 'left' ? 'rotate-2' : '-rotate-2 '}`}>
        <div
          className={`group bg-beige border-[1rem] border-beige rounded-md pt-4 
             shadow-background-dark shadow-[0.5rem_0.5rem] group-hover:shadow-background-dark group-hover:shadow-[0.55rem_0.75rem]`}
        >
          <div className="aspect-square overflow-clip ">
            <Image
              className="bg-black w-full h-full object-cover group-hover:scale-105 transition-all duration-200"
              src={photoSrc}
              alt={photoAlt}
            />
          </div>
          <div className="text-center mx-[calc(33.333%_-_2rem)] mt-4">
            <UnderlineHeading className="text-mainDark text-xl lg:text-3xl inline">
              {name}
            </UnderlineHeading>
          </div>
        </div>
        <div className="absolute w-1/2 h-[15%] bg-white top-2 left-1/4 -translate-y-1/2 object-center tape" />
      </div>
      <Image
        className={`projectIcon absolute bottom-4 !w-1/3
              ${variant == 'left' ? '-left-8 -rotate-3 group-hover:-rotate-12 group-hover:-left-10' : '-right-8 rotate-6 group-hover:rotate-12 group-hover:-right-10'}`}
        src={badgeSrc}
        alt={name + ' logo'}
      />
    </Link>
  )
}

export default Polaroid
