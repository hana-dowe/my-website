import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type Project = {
  id: string
  name: string
  role: string
  summary: string
  logoSrc: string | StaticImport
  polaroidSrc: string | StaticImport
  polaroidAlt: string
  mainHref: {
    to: string
    buttonText?: string
    buttonIcon?: React.ReactNode
  }
  subHrefs?: ProjectHrefs
}

export type ProjectHrefTypes = 'github' | 'youtube' | 'tumblr' | 'x' | 'pdf' | 'default'

type ProjectHrefs = {
  [key in ProjectHrefTypes]?: string
}

export type SvgProps = {
  className?: React.ComponentProps<'svg'>['className']
}
