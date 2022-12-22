import Head from 'next/head'
import { Header } from '@/components/jsx/Header'
import { Footer } from '@/components/jsx/Footer'
import { Animate } from "react-simple-animate";
import { IntegrationsBanner } from '@/components/jsx/IntegrationsBanner'
import { Integrations } from '@/components/jsx/Integrations'


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
          <IntegrationsBanner />
          <Integrations />
        </Animate>
        <Footer />
      </div>
    </>
  )
}
