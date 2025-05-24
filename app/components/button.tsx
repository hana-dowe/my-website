type Props = {
  children: string
  icon?: React.ReactNode
  href: React.ComponentProps<'a'>['href']
  newTab?: boolean
  fullWidth?: boolean
  secondary?: boolean
}

const Button = (props: Props) => {
  const { children, icon, href, newTab, fullWidth = false, secondary = false } = props
  return (
    <a
      href={href}
      {...(newTab && { target: '_blank' })}
      className={`group ${fullWidth ? 'w-full' : 'w-fit'}`}
    >
      <div
        className={`rounded-md w-full h-16 p-1 flex flex-row justify-between font-bold items-center text-center
          ${secondary ? 'text-base bg-beige text-background border-background shadow-background' : 'text-lg bg-background text-beige border-beige shadow-beige'}  
       border-solid border-2 shadow-[0rem_0.25rem]  group-hover:translate-y-1 group-hover:shadow-[0rem_0.1rem]`}
      >
        <div
          className={`w-full h-full rounded-sm content-center px-4 
            ${secondary ? '' : 'group-hover:bg-beige group-hover:text-background group-hover:border-background'}`}
        >
          {children}
        </div>
        {icon}
      </div>
    </a>
  )
}

export default Button
