import { Pricing } from '@/components/jsx/Pricing'
import { FAQ } from '@/components/jsx/FAQ'

export default function Home(pageProps) {
  return (
    <>
      <Pricing {...pageProps} />
      <FAQ />
    </>
  )
}
