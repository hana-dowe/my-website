'use client'

import { useEffect, useState } from 'react'

import CloseIcon from '@/app/components/icons/close'

export const ModalAnimationDuration = 250 // 0.25s

type Props = {
  open: boolean
  onClose: () => void
  fullWidth?: boolean
  fullHeight?: boolean
  children: React.ReactNode
}

// hanatodo press esc to close modal

const Modal = (props: Props) => {
  const { open, onClose, fullWidth = false, fullHeight = false, children } = props

  // use this instead of open so we can wait for animations to play out
  const [shouldRender, setShouldRender] = useState(open)
  const [animationClass, setAnimationClass] = useState(open ? 'showModal' : '')

  useEffect(() => {
    if (open) {
      setShouldRender(true)
      setAnimationClass('showModal')
    } else if (shouldRender) {
      setAnimationClass('hideModal')

      const timer = setTimeout(() => {
        setShouldRender(false)
        setAnimationClass('')
      }, ModalAnimationDuration) // same duration as animation

      return () => clearTimeout(timer)
    }
  }, [open, shouldRender])

  return (
    shouldRender && (
      <div
        role="dialog"
        className={`absolute m-2 top-0 left-0 z-50 text-mainDark w-[calc(100%-1rem)] h-[calc(100dvh-1rem)] backdrop-blur-sm ${animationClass === 'showModal' ? 'fadeIn' : 'fadeOut'}`}
      >
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${animationClass} z-50 flex
          w-full h-full ${!fullHeight && 'sm:h-auto'} sm:max-w-[85%] sm:max-h-[85%] ${fullWidth ? 'sm:w-[85vw]' : 'sm:w-max'} p-2 bg-beige rounded-2xl`}
        >
          <div
            className={`border-2 border-dashed border-mainDark rounded-xl max-h-full max-w-full w-full ${fullHeight && 'h-full'} px-8 py-16 sm:px-16 sm:py-24 md:px-24 md:py-32 
            items-center text-center overflow-y-auto customScrollbar ${!fullWidth && 'content-center'}`}
          >
            <div
              className={`flex flex-col lg:flex-row rounded-xl min-h-fit ${fullWidth && 'lg:h-full'} gap-12 items-start text-center justify-center`}
            >
              <button
                onClick={onClose}
                title="Close"
                aria-label="Close Modal"
                className="group h-16 sm:h-14 absolute -top-2 -right-2 sm:-top-4 sm:-right-4 rounded-full z-50 p-2 bg-background-light"
              >
                <div className="rounded-full h-full aspect-square bg-background-light text-background border-2 border-dashed group-hover:border-solid border-mainDark ">
                  <div className="rounded-full p-4 sm:p-3 group-hover:scale-110">
                    <CloseIcon />
                  </div>
                </div>
              </button>
              {children}
            </div>
          </div>
        </div>
        <div
          className={`top-0 h-full w-full bg-background opacity-75 z-40 rounded-[20px]`}
          onClick={onClose}
        />
      </div>
    )
  )
}

export default Modal
