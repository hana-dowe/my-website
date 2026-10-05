'use client'

import Modal from '@/app/components/modal'
import { GachaResult } from '@/app/types/types'

type Props = {
  open: boolean
  onClose: () => void
  gachaResult: GachaResult
}

// hanatodo add previous/next at bottom of modal?
// hanatodo style

const GachaResultModal = (props: Props) => {
  const { open, onClose, gachaResult } = props
  return (
    <Modal open={open} onClose={onClose}>
      <div className={`flex flex-col gap-4 sm:gap-8 items-center justify-center`}>
        <div className="h-14">{gachaResult.icon}</div>
        <div className="flex flex-col gap-2 items-center mt-16 sm:mt-0">
          {/* <h1 className="text-4xl font-medium">{gachaResult.title}</h1> */}
          <h1 className="text-lg uppercase">{gachaResult.title}</h1>
        </div>
        <p className="text-lg max-w-lg">{gachaResult.summary}</p>
      </div>
    </Modal>
  )
}

export default GachaResultModal
