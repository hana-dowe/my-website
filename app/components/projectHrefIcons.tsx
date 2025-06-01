import IconButton from '@/app/components/iconButton'
import { projectHrefIcons, projectHrefTitles } from '@/app/projects/projects'
import { ProjectHrefs, ProjectHrefTypes } from '@/app/types/types'

type Props = {
  projectHrefs: ProjectHrefs
  className?: React.ComponentProps<'div'>['className']
}

const ProjectHrefIcons = (props: Props) => {
  const { projectHrefs, className } = props
  return (
    <div className={`flex-row gap-8 w-full justify-center pt-2 ${className}`}>
      {Object.keys(projectHrefs).map((key, index) => {
        const subHrefType = key as ProjectHrefTypes
        const Icon = projectHrefIcons[subHrefType]
        return (
          <IconButton
            key={index}
            href={projectHrefs[subHrefType]}
            title={projectHrefTitles[subHrefType]}
            ariaLabel={subHrefType}
            newTab
            variant="secondary"
          >
            <Icon />
          </IconButton>
        )
      })}
    </div>
  )
}

export default ProjectHrefIcons
