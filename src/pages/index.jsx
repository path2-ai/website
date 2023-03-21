import { Hero } from '@/components/jsx/Hero'
import { CallToAction } from '@/components/jsx/CallToAction'
import { Playground } from '@/components/jsx/Playground'
import { PlatformBenefits } from '@/components/jsx/PlatformBenefits'
import { Story } from '@/components/jsx/Story'
import { Intro } from '@/components/jsx/Intro'



export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Story />
      <Playground />
      <PlatformBenefits />
      <CallToAction />
    </>
  )
}
