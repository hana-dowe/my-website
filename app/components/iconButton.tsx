export type ButtonVariant = 'primary' | 'secondary' | 'simple'

type Props = {
  children: React.ReactNode
  href: React.ComponentProps<'a'>['href']
  title: string
  ariaLabel: string
  variant?: ButtonVariant
  newTab?: boolean
}

// hantodo am i sure secondary shouldn't get filled in

const IconButton = (props: Props) => {
  const { children, href, title, ariaLabel, variant = 'primary', newTab } = props
  return (
    <a
      href={href}
      title={title}
      {...(newTab && { target: '_blank' })}
      aria-label={ariaLabel}
      className="group h-14"
    >
      <div
        className={`rounded-full h-full aspect-square p-1
          ${variant == 'primary' && 'border-beige text-beige group-hover:scale-95'}
          ${variant == 'secondary' && 'shadow-[0rem_0.15rem] shadow-background border-mainDark text-mainDark group-hover:translate-y-1 group-hover:shadow-[0rem_0.05rem]'}
          ${variant == 'simple' ? 'border-none text-mainDark' : 'border-2'}`}
      >
        <div
          className={`p-2 
            ${variant == 'primary' && 'group-hover:bg-beige group-hover:text-background'}
            ${variant == 'simple' ? 'animatedUnderlineIcon group-hover:animatedUnderlineIcon-active group-hover:scale-105' : 'rounded-full'}`}
        >
          {children}
        </div>
      </div>
    </a>
  )
}

export default IconButton
