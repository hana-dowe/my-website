'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import CloseIcon from '@/app/components/icons/close'
import ImageGallery from '@/app/components/imageGallery'
import ProjectHrefIcons from '@/app/components/projectHrefIcons'
import { Project } from '@/app/types/types'

type Props = {
  project: Project
}

// hanatodo scroll to where polaroid is on reload
// hanatodo add previous/next at bottom of modal?
// hanatodo press esc to close modal
// hanatodo modal open/close animation

// Need to wrap with <Suspense> when using searchParams or will get error when trying to deploy

const ProjectModal = (props: Props) => {
  const { project } = props

  const searchParams = useSearchParams()
  const router = useRouter()

  const open = searchParams.get('project') === project.id

  const onClose = () => {
    router.push('/', { scroll: false })
  }

  const hasImages = project.images && project.images.length > 0

  return (
    open && (
      <div className="absolute m-2 top-0 left-0 z-50 text-mainDark w-[calc(100%-1rem)] h-[calc(100dvh-1rem)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full h-full sm:w-max sm:max-w-[85%] sm:max-h-[85%] p-2 bg-beige rounded-2xl">
          <div
            className={`border-2 border-dashed border-mainDark rounded-xl max-h-full max-w-full w-full h-full px-8 py-16 sm:px-16 sm:py-24 md:px-24 md:py-32 
            items-center text-center overflow-y-auto customScrollbar ${!hasImages && 'content-center'}`}
          >
            <div
              className={`flex flex-col lg:flex-row rounded-xl min-h-fit ${hasImages && 'lg:h-full'} gap-12 items-start text-center justify-center`}
            >
              <button
                onClick={onClose}
                title="Close"
                aria-label="Close Project Modal"
                className="group h-16 sm:h-14 absolute -top-2 -right-2 sm:-top-4 sm:-right-4 rounded-full p-2 bg-background-light"
              >
                <div className="rounded-full h-full aspect-square bg-background-light text-background border-2 border-dashed group-hover:border-solid border-mainDark ">
                  <div className="rounded-full p-4 sm:p-3 group-hover:scale-110">
                    <CloseIcon />
                  </div>
                </div>
              </button>
              <div
                className={`flex flex-col gap-4 sm:gap-8 items-center justify-center lg:sticky lg:top-0 lg:z-20 w-full ${hasImages && 'sm:h-full lg:w-5/12'}`}
              >
                <div className="flex flex-col gap-2 items-center mt-16 sm:mt-0">
                  <h1 className="text-4xl font-medium">{project.name}</h1>
                  <h1 className="text-lg uppercase">{project.role}</h1>
                </div>
                <p className="text-lg max-w-lg">{project.summary}</p>

                <ProjectHrefIcons projectHrefs={project.hrefs} className="hidden lg:flex" />
              </div>
              {hasImages && (
                <div className="flex flex-row lg:w-7/12 gap-2 items-center m-auto">
                  <ImageGallery images={project.images ?? []} />
                </div>
              )}
              <ProjectHrefIcons projectHrefs={project.hrefs} className="lg:hidden flex" />
            </div>
          </div>
        </div>
        <div
          className={`top-0 h-full w-full bg-background opacity-75 z-40 rounded-[20px]`}
          onClick={onClose}
        />
      </div>
    )
  )
}

export default ProjectModal
