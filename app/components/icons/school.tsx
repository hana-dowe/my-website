import { SvgProps } from '@/app/types/types'

const SchoolIcon = (props: SvgProps) => {
  const { className } = props
  return (
    <svg
      className={`h-full fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="M840-280v-276L480-360 40-600l440-240 440 240v320h-80ZM480-120 200-272v-200l280 152 280-152v200L480-120Z" />
    </svg>
  )
}

export default SchoolIcon
