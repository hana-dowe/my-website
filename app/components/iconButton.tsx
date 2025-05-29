type Props = {
  children: React.ReactNode
  href: React.ComponentProps<'a'>['href']
  ariaLabel: string
  secondary?: boolean
  newTab?: boolean
}

const IconButton = (props: Props) => {
  const { children, href, ariaLabel, secondary = false, newTab } = props
  return (
    <a
      href={href}
      {...(newTab && { target: '_blank' })}
      aria-label={ariaLabel}
      className="group h-14"
    >
      <div
        className={`rounded-full h-full aspect-square border-2 p-1 
          ${
            secondary
              ? 'shadow-[0rem_0.15rem] shadow-background border-background text-background group-hover:translate-y-1 group-hover:shadow-[0rem_0.05rem]'
              : 'border-beige text-beige group-hover:scale-95'
          }`}
      >
        <div
          className={`rounded-full p-2 
            ${secondary ? '' : 'group-hover:bg-beige group-hover:text-background'}`}
        >
          {children}
        </div>
      </div>
    </a>
  )
}

export default IconButton
