import { Hero } from '@/components/jsx/Hero'
import { Ecosystem } from '@/components/jsx/Ecosystem'
import { CallToAction } from '@/components/jsx/CallToAction'
import { UseCases } from '@/components/jsx/UseCases'
import { Playground } from '@/components/jsx/Playground'
import { PlatformBenefits } from '@/components/jsx/PlatformBenefits'



export default function Home() {
  return (
    <>
      <Hero />
      <Playground />
      <PlatformBenefits />
      <CallToAction />
    </>
  )
}
