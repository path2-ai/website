import Head from 'next/head'
import { Header } from '@/components/Header'
import { Careers } from '@/components/Careers';
import { Footer } from '@/components/Footer'
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
                    <Careers />
                </Animate>
                <Footer />
            </div>
        </>
    )
}
