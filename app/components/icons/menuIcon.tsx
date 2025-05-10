type Props = {
  className?: React.ComponentProps<'svg'>['className']
}

const MenuIcon = (props: Props) => {
  const { className } = props
  return (
    <svg
      className={`h-full fill-current ${className}`}
      data-testid="MenuRoundedIcon"
      viewBox="0 0 72 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 48H68C70.2 48 72 46.2 72 44C72 41.8 70.2 40 68 40H4C1.8 40 0 41.8 0 44C0 46.2 1.8 48 4 48ZM4 28H68C70.2 28 72 26.2 72 24C72 21.8 70.2 20 68 20H4C1.8 20 0 21.8 0 24C0 26.2 1.8 28 4 28ZM0 4C0 6.2 1.8 8 4 8H68C70.2 8 72 6.2 72 4C72 1.8 70.2 0 68 0H4C1.8 0 0 1.8 0 4Z" />
    </svg>
  )
}

export default MenuIcon
