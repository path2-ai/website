import { useState } from 'react'
import { LogoCloud } from './LogoCloud'
import { StrategicNLPBanner } from './StrategicNLPBanner'
import { AccessModal } from './AccessModal'

export function Hero() {

    const [openAccessModal, setOpenAccessModal] = useState(false)

    return (
        <div>
            {/* <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black" /> */}
            <main className="relative">
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl py-16 sm:py-20">
                        <div>
                            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-100/10 hover:ring-gray-100/20">
                                    <span className="text-gray-300">
                                        Announcing our 2.7m€ seed funding.{' '}
                                        <a href="https://blog.kern.ai/our-seed" className="font-semibold text-green-400" target="_blank" rel="noreferrer noopener">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            Read more <span aria-hidden="true">&rarr;</span>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-white text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                    <div>We help companies to embed modern</div>
                                    <div className="md:py-6 text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-emerald-500 to-green-600 animate-text">
                                        natural language processing
                                    </div>
                                    <div>into their products and processes</div>
                                </h1>
                                <p className="mt-6 text-xl leading-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 sm:text-center">
                                    Used by teams at AI-driven organizations, both small and large
                                </p>
                                <LogoCloud />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <StrategicNLPBanner />
            <AccessModal open={openAccessModal} setOpen={setOpenAccessModal} />
        </div>
    )
}
