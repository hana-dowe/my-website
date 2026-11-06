'use client'

import { useState } from 'react'

import GachaResultButton from '@/app/components/gacha/gachaResultButton'
import { gachaResults } from '@/app/components/gacha/gachaResults'
import GachaIcon from '@/app/components/icons/gacha'
import { ModalAnimationDuration } from '@/app/components/modal'

const Gacha = () => {
  const [remainingCapsules, setRemainingCapsules] = useState([
    ...Array(gachaResults.length).keys(),
  ] as const)

  const [newResult, setNewResult] = useState(NaN)

  const handleRollGacha = () => {
    const removeIndex = Math.floor(Math.random() * remainingCapsules.length) // index from remainingCapsules
    setNewResult(remainingCapsules[removeIndex]) // index based on gachaResults

    setTimeout(() => {
      // enable button after modal open animation completes
      setRemainingCapsules(remainingCapsules.toSpliced(removeIndex, 1))
    }, ModalAnimationDuration)
  }

  const unlockAll = () => {
    setRemainingCapsules([])
    setNewResult(NaN)
  }

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="w-full md:w-1/2 flex flex-col m-auto items-center">
        <button onClick={unlockAll} disabled={remainingCapsules.length == 0}>
          ?
        </button>
        <div className="max-w-48 p-4 mx-auto w-full">
          <GachaIcon className="text-beige" />
        </div>
        <button onClick={handleRollGacha} disabled={remainingCapsules.length == 0}>
          Roll
        </button>
      </div>

      <div className="md:w-1/2 h-full items-center pt-8">
        <div className="bg-background-light rounded-t-full text-mainDark w-full py-2">
          <div className="text-center">
            <h3>
              {gachaResults.length - remainingCapsules.length}/{gachaResults.length}
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-3 p-4 gap-4">
          {gachaResults.map((result, i) => {
            return (
              <GachaResultButton
                key={i}
                gachaResult={result}
                disabled={remainingCapsules.includes(i)}
                forceOpen={i == newResult}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Gacha
