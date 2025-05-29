'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Project } from '@/app/types/types'

type Props = {
  project: Project
}

// hanatodo switch pics with keyboard arrow buttons
// hanatodo click big image to make it full screen?
// hanatodo arrow buttons visuals for disabled
// hanatodo no preview images for small screens

const ImageGallery = (props: Props) => {
  const { project } = props

  const [displayImage, setDisplayImage] = useState(0)

  if (!project.images || project.images.length == 0) {
    return
  }

  return (
    <div className="flex flex-col w-full aspect-square items-center gap-4">
      <div
        className={`relative w-full ${project.images.length > 1 ? 'h-3/4 content-end' : 'm-auto'} justify-items-center `}
      >
        <Image
          width={0}
          height={0}
          className="w-full max-h-full min-h-[80%] object-contain"
          src={project.images[displayImage].src}
          alt={project.images[displayImage].alt}
        />
        {project.images[displayImage].description && (
          <div className="absolute bottom-2 right-0 bg-black rounded-md p-1 text-beige bg-opacity-50">
            <p className="text-center text-lg">{project.images[displayImage].description}</p>
          </div>
        )}
      </div>
      {project.images.length > 1 && (
        <div className="flex w-full h-1/6 gap-1 items-center ">
          <button
            onClick={() => setDisplayImage(displayImage - 1)}
            aria-label={'Previous Image'}
            disabled={displayImage == 0}
            className={`group h-12`}
          >
            <div
              className={`rounded-l-lg rounded-r-sm h-full p-2 aspect-square border-2 ${displayImage == 0 ? 'opacity-50' : 'group-hover:translate-y-1 group-hover:shadow-[0rem_0.05rem]'}
                shadow-[0rem_0.15rem] shadow-background border-background text-background`}
            >
              &lt;
            </div>
          </button>
          {project.images.map((img, i) => {
            return (
              <button
                key={i}
                style={{ width: `${project.images && 100 / project.images.length}%` }}
                onClick={() => setDisplayImage(i)}
                disabled={i == displayImage}
                className={`h-full ${i == displayImage ? 'opacity-15' : 'opacity-100 hover:scale-95'}`}
              >
                <Image
                  key={i}
                  width={0}
                  height={0}
                  className="object-contain max-h-full"
                  src={img.src}
                  alt={img.alt}
                />
              </button>
            )
          })}
          <button
            onClick={() => setDisplayImage(displayImage + 1)}
            aria-label={'Previous Image'}
            disabled={displayImage == project.images.length - 1}
            className={`group h-12`}
          >
            <div
              className={`rounded-r-lg rounded-l-sm h-full p-2 aspect-square border-2 ${displayImage == project.images.length - 1 ? 'opacity-50' : 'group-hover:translate-y-1 group-hover:shadow-[0rem_0.05rem]'}
                shadow-[0rem_0.15rem] shadow-background border-background text-background `}
            >
              &gt;
            </div>
          </button>
        </div>
      )}
    </div>
  )
}

export default ImageGallery
