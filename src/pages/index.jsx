import { Hero } from '@/components/jsx/Hero'
import { Ecosystem } from '@/components/jsx/Ecosystem'
import { CallToAction } from '@/components/jsx/CallToAction'
import { UseCases } from '@/components/jsx/UseCases'
import { Playground } from '@/components/jsx/Playground'



export default function Home() {
  return (
    <>
      <Hero />
      <Playground />
      {/* <Ecosystem /> */}
      {/* <UseCases /> */}
      <CallToAction />
    </>
  )
}
