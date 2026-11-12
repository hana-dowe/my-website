'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import ImageGallery from '@/app/components/imageGallery'
import Modal from '@/app/components/modal'
import ProjectHrefIcons from '@/app/components/projectHrefIcons'
import { Project } from '@/app/types/types'

type Props = {
  project: Project
}

// hanatodo scroll to where polaroid is on reload
// hanatodo add previous/next at bottom of modal?

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
    <Modal open={open} onClose={onClose} fullHeight fullWidth={hasImages}>
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
    </Modal>
  )
}

export default ProjectModal
