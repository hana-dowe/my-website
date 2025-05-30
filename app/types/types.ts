import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type Project = {
  id: string
  name: string
  role: string
  summary: string
  logoSrc: StaticImport
  polaroidSrc: StaticImport
  polaroidAlt: string
  hrefs: ProjectHrefs
  images?: ProjectImage[]
}

export type ProjectHrefTypes = 'github' | 'youtube' | 'tumblr' | 'x' | 'pdf' | 'default'

type ProjectHrefs = {
  [key in ProjectHrefTypes]?: string
}

export type ProjectImage = {
  src: string
  alt: string
  width: number
  height: number
  description?: string
}

export type SvgProps = {
  className?: React.ComponentProps<'svg'>['className']
}
