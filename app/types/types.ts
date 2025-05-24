import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type Project = {
  id: string
  name: string
  role: string
  summary: string
  logoSrc: string | StaticImport
  polaroidSrc: string | StaticImport
  polaroidAlt: string
  href: string
}
