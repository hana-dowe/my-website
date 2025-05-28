import { SvgProps } from '@/app/types/types'

const OpenNewIcon = (props: SvgProps) => {
  const { className } = props
  return (
    <svg className={`h-full fill-current ${className}`} viewBox="0 0 96 96">
      <g clip-path="url(#clip0_203_9)">
        <path d="M72 76H24C21.8 76 20 74.2 20 72V24C20 21.8 21.8 20 24 20H44C46.2 20 48 18.2 48 16C48 13.8 46.2 12 44 12H20C15.56 12 12 15.6 12 20V76C12 80.4 15.6 84 20 84H76C80.4 84 84 80.4 84 76V52C84 49.8 82.2 48 80 48C77.8 48 76 49.8 76 52V72C76 74.2 74.2 76 72 76ZM56 16C56 18.2 57.8 20 60 20H70.36L33.84 56.52C32.28 58.08 32.28 60.6 33.84 62.16C35.4 63.72 37.92 63.72 39.48 62.16L76 25.64V36C76 38.2 77.8 40 80 40C82.2 40 84 38.2 84 36V16C84 13.8 82.2 12 80 12H60C57.8 12 56 13.8 56 16Z" />
      </g>
      <defs>
        <clipPath id="clip0_203_9">
          <rect width="96" height="96" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default OpenNewIcon
