type Props = {
  children: string
  icon?: React.ReactNode
  href: React.ComponentProps<'a'>['href']
  newTab?: boolean
  fullWidth?: boolean
}

const Button = (props: Props) => {
  const { children, icon, href, newTab, fullWidth } = props
  return (
    <a
      href={href}
      {...(newTab && { target: '_blank' })}
      className={`group ${fullWidth && 'w-full'}`}
    >
      <div
        className="rounded-md w-full h-16 p-1 bg-background text-beige border-beige border-solid border-2 
      flex flex-row justify-between text-lg font-bold items-center text-center shadow-[0rem_0.25rem] shadow-beige group-hover:translate-y-1 group-hover:shadow-[0rem_0.1rem]"
      >
        <div className="px-4 w-full h-full rounded-sm content-center group-hover:bg-beige group-hover:text-background group-hover:border-background">
          {children}
        </div>
        {icon}
      </div>
    </a>
  )
}

export default Button
