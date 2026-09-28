import GachaResultButton from '@/app/components/gacha/gachaResultButton'
import GachaIcon from '@/app/components/icons/gacha'
import MailIcon from '@/app/components/icons/mail'

const Gacha = () => {
  return (
    <div className="lg:w-2/5 h-full flex-col items-center pt-8">
      {/* <div className="text-center pt-4 bg-background rounded-xl w-4/5">
        <p>hanatodo</p>
        <p>always start with pic of myself?</p>
        <p>i like music</p>
        <p>I know two languages (more if you count programming languages)</p>
        <p>favourite game - kirby yarn and little big planet</p>
        <p>magenetra - favourite tl</p>
        <p>subbed videos</p>
        <p>hobby(concerts)</p>
        <p>I like cats :D</p>
        <p>I started my software development career in 2022
              at Alida as a co-op student. Through collaborating with senior engineers, I gained
              professional experience contributing to front-end and back-end development, and even
              some UX design.</p>
        <p>
          In 2024, I completed a double major in Computer Science and Communication, Culture,
          Information & Technology (CCIT) at the University of Toronto. After graduating, I was
          offered a full-time position at Alida, where I continued to take on more challenging tasks
          and grow as a developer.
        </p>
        <p>
          I'm a big fan of Japanese music and have been working as a translator and proofreader with
          the Magenetra team since 2016. We've currently translated over 400 songs to help
          English-speaking audiences better connect with their lyrics.
        </p>
      </div> */}
      <div className="bg-background-light rounded-t-full text-mainDark w-full">
        <div className="max-w-20 p-4 mx-auto">
          <GachaIcon className="text-background-dark" />
        </div>
        <div className="text-center">
          <h3>1/X</h3>
        </div>
      </div>

      <div className="grid  grid-cols-3 p-4 gap-4">
        <GachaResultButton>
          <MailIcon />
        </GachaResultButton>
        <GachaResultButton>
          <MailIcon />
        </GachaResultButton>
        <GachaResultButton>icon</GachaResultButton>
        <GachaResultButton disabled>icon</GachaResultButton>
        <GachaResultButton>icon</GachaResultButton>
        <GachaResultButton disabled>
          <MailIcon />
        </GachaResultButton>
      </div>
    </div>
  )
}

export default Gacha
