import Image from 'next/image'

import face from '@/public/face.svg'
import faceOutline from '@/public/faceOutline.svg'
import sunglasses from '@/public/sunglasses.png'

type Props = {
  className?: React.ComponentProps<'div'>['className']
  outline?: boolean
}

// https://charat.me/portrait/

// hanatodo get svg as code so I can change color here?

const MyFace = (props: Props) => {
  const { className, outline = false } = props

  return (
    <div className={`flex group relative ${className}`}>
      <Image
        className="p-2 w-full h-auto select-none pointer-events-none"
        src={outline ? faceOutline : face}
        alt="Drawing of myself"
        priority
      />
      {!outline && (
        <div className="absolute top-[59%] left-[52%] -translate-x-[35%] -translate-y-20 group-hover:top-[89%] object-center scale-125 transition-all opacity-0 pointer-events-none group-hover:opacity-100">
          <Image
            className="w-full h-auto select-none"
            src={sunglasses}
            alt="Sunglasses that make me look cooler"
          />
        </div>
      )}
    </div>
  )
}

export default MyFace
