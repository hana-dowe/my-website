type Props = {
  children: React.ReactNode
  colors?: {
    // hanatodo figure this out
    background: string
    border: string
    accent: string
    accentActive: string
  }
  className?: React.ComponentProps<'div'>['className']
}

const FlowyBox = (props: Props) => {
  const { children, className } = props
  return (
    <div
      className={`group relative grid grid-flow-col items-center text-background rounded-lg flowyBox hover:flowyBox-active overflow-clip p-4 border-solid border-8 border-beige ${className}`}
    >
      {children}
    </div>
  )
}

export default FlowyBox
