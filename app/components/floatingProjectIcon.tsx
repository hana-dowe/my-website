import Image from 'next/image'

import { Project } from '@/app/types/types'

type Props = {
  className?: React.ComponentProps<'div'>['className']
} & Pick<Project, 'id' | 'logoSrc' | 'name'>

const FloatingProjectIcon = (props: Props) => {
  const { className, id, logoSrc, name } = props

  return (
    <a href={'#' + id} className={`w-1/3 h-full hover:scale-105 ${className}`}>
      <Image className="projectIcon" src={logoSrc} alt={name + ' Logo'} />
    </a>
  )
}

export default FloatingProjectIcon
