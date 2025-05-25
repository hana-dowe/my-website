import Button from '@/app/components/button'
import CloseIcon from '@/app/components/icons/closeIcon'
import { Project } from '@/app/types/types'

type Props = {
  open: boolean
  onClose: () => void
  project: Project
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
      className={`${open ? 'absolute' : 'hidden'} m-2 top-0 left-0 z-50 text-mainDark w-[calc(100%-1rem)] h-[calc(100dvh-1rem)]`}
    >
      <div
        className={`absolute flex flex-col gap-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-beige rounded-2xl w-max max-w-[85%] md:w-fit p-8 sm:p-20 items-center text-center`}
      >
        <a
          onClick={(e) => {
            e.preventDefault()
            onClose()
          }}
          tabIndex={0} // makes button focusable even without href prop, don't want href because you can click and drag
          className="group h-14 absolute -top-4 -right-4 bg-background-light rounded-full p-1"
        >
          <div className="rounded-full h-full aspect-square border-2 border-background text-background p-1 group-hover:scale-95">
            <div className="rounded-full p-3 group-hover:bg-background group-hover:text-beige">
              <CloseIcon />
            </div>
          </div>
        </a>
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
