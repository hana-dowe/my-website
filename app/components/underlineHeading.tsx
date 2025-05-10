import React from 'react'

type Props = {
  children: React.ReactNode
  className?: React.ComponentProps<'div'>['className']
}
const UnderlineHeading = (props: Props) => {
  const { children, className } = props
  return (
    // hanatodo group-hover here is weird
    <>
      <h2
        className={`font-semibold mb-4 animatedUnderline group-hover:animatedUnderline-active ${className}`}
      >
        {children}
      </h2>
    </>
  )
}

export default UnderlineHeading
