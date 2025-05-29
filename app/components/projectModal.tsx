'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import IconButton from '@/app/components/iconButton'
import CloseIcon from '@/app/components/icons/close'
import ImageGallery from '@/app/components/imageGallery'
import { projectHrefIcons } from '@/app/projects/projects'
import { Project, ProjectHrefTypes } from '@/app/types/types'

type Props = {
  project: Project
}

// hanatodo animate (to make up for slow load or figure out why it's kind of slow)
// hanatodo scroll to where polaroid is on reload
// hanatodo add previous/next at bottom of modal
// hanatodo make button big if only one
// hanatodo move action buttons to bottom on mobile

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
    <div
      className={`${open ? 'absolute' : 'hidden'} m-2 top-0 left-0 z-50 text-mainDark w-[calc(100%-1rem)] h-[calc(100dvh-1rem)]`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full h-full sm:w-max sm:max-w-[85%] sm:max-h-[85%] p-2 bg-beige rounded-2xl">
        <div
          className={`border-2 border-dashed border-mainDark rounded-xl max-h-full max-w-full w-full h-full
          px-8 py-16 sm:px-16 sm:py-24 md:px-24 md:py-32 items-center text-center overflow-y-auto  customScrollbar content-center`}
        >
          <div
            className={`flex flex-col lg:flex-row rounded-xl min-h-fit ${hasImages && 'lg:h-full'} gap-12 items-center text-center justify-center`}
          >
            <button
              onClick={onClose}
              aria-label="Close Project Modal"
              className="group h-14 absolute -top-2 -right-2 sm:-top-4 sm:-right-4 rounded-full p-2"
            >
              <div className="h-14 aspect-square absolute top-0 right-0 bg-background-light rounded-full p-2 -z-10" />
              <div className="rounded-full h-full aspect-square bg-background-light text-background border-2 border-dashed group-hover:border-solid border-mainDark ">
                <div className="rounded-full p-3 group-hover:scale-110">
                  <CloseIcon />
                </div>
              </div>
            </button>
            <div
              className={`flex flex-col gap-4 sm:gap-8 items-center justify-center ${hasImages ? 'sm:h-full lg:w-5/12' : 'w-full'}`}
            >
              <div className="flex flex-col gap-2 items-center mt-16 sm:mt-0">
                <h1 className="text-4xl font-medium">{project.name}</h1>
                <h1 className="text-lg uppercase">{project.role}</h1>
              </div>
              <p className="text-lg max-w-lg">{project.summary}</p>
              {project.hrefs && (
                <div className="flex flex-row gap-8 justify-center pt-2">
                  {Object.keys(project.hrefs).map((key, index) => {
                    const subHrefType = key as ProjectHrefTypes
                    if (!project.hrefs) return
                    const Icon = projectHrefIcons[subHrefType]
                    return (
                      <IconButton
                        key={index}
                        href={project.hrefs[subHrefType]}
                        ariaLabel={subHrefType}
                        newTab
                        secondary
                      >
                        <Icon />
                      </IconButton>
                    )
                  })}
                </div>
              )}
            </div>
            {hasImages && (
              <div className="flex flex-row lg:w-7/12 lg:h-full gap-2">
                <ImageGallery project={project} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`top-0 h-full w-full bg-background opacity-75 z-40 rounded-[20px]`}
        onClick={onClose}
      />
    </div>
  )
}

export default ProjectModal
