import GachaResultButton from '@/app/components/gacha/gachaResultButton'
import { gachaResults } from '@/app/components/gacha/gachaResults'
import GachaIcon from '@/app/components/icons/gacha'

const Gacha = () => {
  // hanatodo keep track of result obtained state

  return (
    <div className="lg:w-2/5 h-full flex-col items-center pt-8">
      <div className="bg-background-light rounded-t-full text-mainDark w-full">
        <div className="max-w-20 p-4 mx-auto">
          <GachaIcon className="text-background-dark" />
        </div>
        <div className="text-center">
          <h3>0/{gachaResults.length}</h3>
        </div>
      </div>

      <div className="grid  grid-cols-3 p-4 gap-4">
        {gachaResults.map((result, i) => {
          return <GachaResultButton key={i} gachaResult={result} />
        })}
      </div>
    </div>
  )
}

export default Gacha
