import Head from 'next/head'
import { Header } from '@/components/jsx/Header'
import { Hero } from '@/components/jsx/Hero'
import { Ecosystem } from '@/components/jsx/Ecosystem'
import { CallToAction } from '@/components/jsx/CallToAction'
import { Footer } from '@/components/jsx/Footer'
import { Animate } from "react-simple-animate";


export default function Home() {
  return (
    <>
      <Head>
        <title>Kern AI</title>
        <meta
          name="description"
          content="Powering data-centric natural language processing"
        />
      </Head>
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
