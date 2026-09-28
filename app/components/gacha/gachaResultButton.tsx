type Props = {
  children: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
}

const GachaResultButton = (props: Props) => {
  const { children, icon, disabled = false } = props
  return (
    <button disabled={disabled} className={`group w-full ${disabled && 'pointer-events-none'}`}>
      <div
        className={`rounded-md w-full h-16 p-1 bg-background-dark border-2 group-hover:translate-y-1 group-hover:shadow-[0rem_0.1rem]
          ${disabled ? 'text-background border-background translate-y-1' : 'text-beige border-beige shadow-beige border-solid border-2 shadow-[0rem_0.25rem]'}`}
      >
        <div
          className={`w-full h-full rounded-sm content-center justify-items-center px-4 group-hover:bg-beige group-hover:text-background-dark group-hover:border-background-dark`}
        >
          {children}
        </div>
        {icon}
      </div>
    </button>
  )
}

export default GachaResultButton
