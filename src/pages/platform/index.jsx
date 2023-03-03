import { Ecosystem } from '@/components/jsx/Ecosystem'
import { FAQ } from '@/components/jsx/FAQ'

export default function Home(pageProps) {
  return (
    <>
      <Ecosystem {...pageProps} />
      <FAQ />
    </>
  )
}
