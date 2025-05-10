type Props = {
  children: React.ReactNode
  href: React.ComponentProps<'a'>['href']
  newTab?: boolean
}

const IconButton = (props: Props) => {
  const { children, href, newTab } = props
  return (
    <a href={href} {...(newTab && { target: '_blank' })} className="group h-14">
      <div className="rounded-full h-full aspect-square border-2 border-beige text-beige p-1 group-hover:scale-95">
        <div className="rounded-full p-2 group-hover:bg-beige group-hover:text-background">
          {children}
        </div>
      </div>
    </a>
  )
}

export default IconButton
