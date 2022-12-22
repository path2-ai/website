import Head from 'next/head'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Ecosystem } from '@/components/Ecosystem'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Animate } from "react-simple-animate";


export default function Home() {
  return (
    <>
      <div className='bg-black'>
        <div className="sticky top-0 z-50 backdrop-blur-md opacity-[98%]">
          <Header />
        </div>
        <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
          <Hero />
          <Ecosystem />
          <CallToAction />
        </Animate>
        <Footer />
      </div>
    </>
  )
}
