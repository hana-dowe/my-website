'use client'

import { useState } from 'react'
import { RowsPhotoAlbum } from 'react-photo-album'

import { ProjectImage } from '@/app/types/types'
import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'

import 'react-photo-album/rows.css'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'

type Props = {
  images: ProjectImage[]
}

// hanatodo not the biggest fan of hover state

// https://react-photo-album.com/documentation
// https://yet-another-react-lightbox.com/documentation

const ImageGallery = (props: Props) => {
  const { images } = props

  const [lightboxImage, setLightboxImage] = useState(-1)

  if (images.length == 0) {
    return
  }

  return (
    <>
      <RowsPhotoAlbum
        photos={images}
        breakpoints={[300, 900]}
        onClick={(e) => setLightboxImage(e.index)}
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

      <Lightbox
        index={lightboxImage}
        slides={images}
        open={lightboxImage >= 0}
        close={() => setLightboxImage(-1)}
        plugins={[Captions]}
        captions={{ descriptionTextAlign: 'center' }}
        styles={{
          container: {
            backgroundColor: 'rgba(74, 72, 89)', // mainDark
          },
        }}
      />
    </>
  )
}

export default ImageGallery
