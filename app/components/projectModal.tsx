import Button from '@/app/components/button'
import { Project } from '@/app/types/types'

type Props = {
  open: boolean
  onClose: () => void
  project?: Project
}

// hanatodo animate (to make up for slow load or figure out why it's kind of slow)
// hanatodo add close button
// hanatodo add option for different links
// hanatodo add option for pictures

const ProjectModal = (props: Props) => {
  const { open, onClose: onClose, project } = props

  if (!project) return

  return (
    <div
      className={`${open ? 'absolute' : 'hidden'} absolute m-2 top-0 z-50 text-mainDark w-[calc(100%-1rem)] h-[calc(100dvh-1rem)]`}
    >
      <div
        className={`absolute flex flex-col gap-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-beige rounded-2xl w-max max-w-[85%] md:w-fit p-8 sm:p-20 items-center text-center`}
      >
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-4xl font-medium">{project.name}</h1>
          <h1 className="text-lg uppercase">{project.role}</h1>
        </div>
        <p className="text-lg">{project.summary}</p>
        <Button href={project.href} newTab secondary>
          View Project
        </Button>
      </div>
      <div
        className={`top-0 h-full w-full bg-background opacity-50 z-40 rounded-[20px]`}
        onClick={onClose}
      />
    </div>
  )
}

export default ProjectModal
