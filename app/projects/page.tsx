import { Mali } from 'next/font/google'

const mali = Mali({
  weight: ['600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

//hanatodo delete later

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center gap-24 p-24">
      <h1 className="flowyHeading">
        <span className={mali.className}>why are you here</span>
      </h1>
    </main>
  )
}
