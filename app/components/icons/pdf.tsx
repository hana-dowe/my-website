import { SvgProps } from '@/app/types/types'

const PdfIcon = (props: SvgProps) => {
  const { className } = props
  return (
    <svg className={`h-full fill-current ${className}`} viewBox="0 0 96 96">
      <g clipPath="url(#clip0_203_24)">
        <path d="M80 8H32C27.6 8 24 11.6 24 16V64C24 68.4 27.6 72 32 72H80C84.4 72 88 68.4 88 64V16C88 11.6 84.4 8 80 8ZM46 38C46 41.32 43.32 44 40 44H36V49C36 50.64 34.64 52 33 52C31.36 52 30 50.64 30 49V32C30 29.8 31.8 28 34 28H40C43.32 28 46 30.68 46 34V38ZM66 46C66 49.32 63.32 52 60 52H52C50.88 52 50 51.12 50 50V30C50 28.88 50.88 28 52 28H60C63.32 28 66 30.68 66 34V46ZM82 31C82 32.64 80.64 34 79 34H76V38H79C80.64 38 82 39.36 82 41C82 42.64 80.64 44 79 44H76V49C76 50.64 74.64 52 73 52C71.36 52 70 50.64 70 49V32C70 29.8 71.8 28 74 28H79C80.64 28 82 29.36 82 31ZM36 38H40V34H36V38ZM12 24C9.8 24 8 25.8 8 28V80C8 84.4 11.6 88 16 88H68C70.2 88 72 86.2 72 84C72 81.8 70.2 80 68 80H20C17.8 80 16 78.2 16 76V28C16 25.8 14.2 24 12 24ZM56 46H60V34H56V46Z" />
      </g>
      <defs>
        <clipPath id="clip0_203_24">
          <rect width="96" height="96" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default PdfIcon
