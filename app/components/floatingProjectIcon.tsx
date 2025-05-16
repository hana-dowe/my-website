import Image from 'next/image'

import { Project } from '@/app/types/types'

type Props = {
  className?: React.ComponentProps<'div'>['className']
} & Pick<Project, 'href' | 'logoSrc' | 'name'>

//hanatodo remove target blank once theres a page for each project

const FloatingProjectIcon = (props: Props) => {
  const { className, href, logoSrc, name } = props

  return (
    <a href={href} className={`w-1/3 h-full hover:scale-105 ${className}`} target="_blank">
      <Image className="projectIcon" src={logoSrc} alt={name + ' Logo'} />
    </a>
  )
}

export default FloatingProjectIcon
