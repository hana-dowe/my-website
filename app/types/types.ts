import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export type Project = {
  name: string
  logoSrc: string | StaticImport
  polaroidSrc: string | StaticImport
  polaroidAlt: string
  href: string
}
