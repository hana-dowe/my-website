'use client'

import { Suspense, useEffect, useState } from 'react'

import GachaResultModal from '@/app/components/gacha/gachaResultModal'
import { GachaResult } from '@/app/types/types'

type Props = {
  gachaResult: GachaResult
  disabled?: boolean
  forceOpen?: boolean
}

const GachaResultButton = (props: Props) => {
  const { gachaResult, disabled = false, forceOpen = false } = props

  const [open, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    setOpen(forceOpen)
  }, [forceOpen])

  return (
    <>
      <button
        title={gachaResult.title}
        disabled={disabled}
        className={`group w-full ${disabled && 'pointer-events-none'}`}
        onClick={() => setOpen(true)}
      >
        <div
          className={`rounded-md w-full h-16 p-1 bg-background-dark border-2 group-hover:translate-y-1 group-hover:shadow-[0rem_0.1rem]
          ${disabled ? 'text-background border-background translate-y-1' : 'text-beige border-beige shadow-beige border-solid border-2 shadow-[0rem_0.25rem]'}`}
        >
          <div
            className={`w-full h-full rounded-sm content-center justify-items-center px-4 group-hover:bg-beige group-hover:text-background-dark group-hover:border-background-dark`}
          >
            {gachaResult.icon}
          </div>
        </div>
      </button>
      <Suspense>
        <GachaResultModal open={open} onClose={onClose} gachaResult={gachaResult} />
      </Suspense>
    </>
  )
}

export default GachaResultButton
