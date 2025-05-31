'use client'

import Image from 'next/image'
import { useState } from 'react'
import { RowsPhotoAlbum } from 'react-photo-album'

import CloseIcon from '@/app/components/icons/close'
import { ProjectImage } from '@/app/types/types'

import 'react-photo-album/rows.css'

type Props = {
  images: ProjectImage[]
}

// hanatodo switch pics with keyboard arrow buttons
// hanatodo do something about to atrocious image loading performance :D
// hantodo style photos like the buttons with shadow?

// https://react-photo-album.com/documentation

const ImageGallery = (props: Props) => {
  const { images } = props

  const [displayImage, setDisplayImage] = useState(-1)

  if (images.length == 0) {
    return
  }

  return (
    <>
      <RowsPhotoAlbum
        photos={images}
        breakpoints={[300, 900]}
        onClick={(e) => setDisplayImage(e.index)}
        componentsProps={{
          button: {
            className: 'overflow-clip rounded-lg group',
          },
          image: {
            className: 'group-hover:scale-110 ease-in-out duration-200',
          },
        }}
        defaultContainerWidth={300}
        skeleton={<div style={{ width: '100%', minWidth: '100%', minHeight: '100%' }} />}
      />
      {-1 < displayImage && (
        <>
          <div
            className={`absolute w-[calc(100vw-1rem)] h-[calc(100dvh-1rem)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-mainDark bg-opacity-90 rounded-[20px] 
                justify-items-center content-center p-4 z-40`}
            onClick={() => setDisplayImage(-1)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-mainDark backdrop-blur-md bg-opacity-50 rounded-full flex items-center justify-center p-4"
              onClick={() => setDisplayImage(-1)}
            >
              <div className="w-full h-full text-beige">
                <CloseIcon />
              </div>
            </button>

            <Image
              width={0}
              height={0}
              className="w-auto max-h-[calc(100%-4rem)] object-contain m-auto"
              src={images[displayImage].src}
              alt={images[displayImage].alt}
              onClick={(e) => e.stopPropagation()}
            />
            {images[displayImage].description && (
              <div
                className="absolute w-[calc(100%-2rem)] right-1/2 translate-x-1/2 sm:w-auto bottom-8 rounded-full p-2 px-4 text-beige bg-mainDark backdrop-blur-md z-50 bg-opacity-50"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-center text-xl">{images[displayImage].description}</p>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default ImageGallery
