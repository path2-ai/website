import { useState, useEffect } from 'react'
import { LogoCloud } from './LogoCloud'
import Link from 'next/link'

export function Hero() {
    const [text, setText] = useState('reportings')
    const [counter, setCounter] = useState(0)



    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the counter
            setCounter((prevCounter) => prevCounter + 1)

            // Update the text based on the counter value
            if (counter % 3 == 0) {
                setText('workflows')
            } else if (counter % 3 == 1) {
                setText('products')
            } else if (counter % 3 == 2) {
                setText('reportings')
            }
        }, 2000) // Update the text every 2 seconds

        return () => clearInterval(interval)
    }, [counter]) // Only run the effect when the counter changes

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
                                        <Link href="/company/blog/announcing-our-seed" className="font-semibold text-green-400">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            Read more <span aria-hidden="true">&rarr;</span>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-white text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                    <div>The data-centric platform to power</div>
                                    <div className="md:py-6 text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600">
                                        natural language <span className='bg-clip-text bg-gradient-to-r from-lime-300 to-green-600 animate-pulse'>{' '}{text}</span>
                                    </div>
                                </h1>
                                <p className="mt-6 text-xl leading-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 sm:text-center">
                                    Used by data scientists at AI-driven organizations, both small and large
                                </p>
                                <LogoCloud />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
