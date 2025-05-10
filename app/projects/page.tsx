import { Mali } from 'next/font/google'

const mali = Mali({
  weight: ['600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center gap-24 p-24">
      <h1 className="flowyHeading">
        <span className={mali.className}>go to home page</span>
      </h1>
    </main>
  )
}
