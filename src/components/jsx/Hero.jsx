import { useState, useEffect } from 'react'
import { LogoCloud } from './LogoCloud'
import { StrategicNLPBanner } from './StrategicNLPBanner'
import { AccessModal } from './AccessModal'
import { IconPlayerPlay } from '@tabler/icons'

export function Hero() {

    const [openAccessModal, setOpenAccessModal] = useState(false)
    const [text, setText] = useState('to grow customer satisfaction')
    const [counter, setCounter] = useState(0)



    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the counter
            setCounter((prevCounter) => prevCounter + 1)

            // Update the text based on the counter value
            if (counter % 3 == 0) {
                setText('to grow customer satisfaction')
            } else if (counter % 3 == 1) {
                setText('to scale operations')
            } else if (counter % 3 == 2) {
                setText('by improving training data')
            }
        }, 3000) // Update the text every 2 seconds

        return () => clearInterval(interval)
    }, [counter]) // Only run the effect when the counter changes

    return (
        <div>
            {/* <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black" /> */}
            <main className="relative">
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl py-16 sm:py-20">
                        <div>
                            <div>
                                <h1 className="text-white text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                    <div>Embed text, speech, and document AI</div>
                                    <div className="md:py-3 lg:py-6 text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-emerald-500 to-green-600 animate-text">
                                        built on reliable training data
                                    </div>
                                    <div>into your processes.</div>
                                </h1>
                                <p className="mt-6 text-xl leading-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 sm:text-center">
                                    Used by teams at AI-driven organizations, both small and large
                                </p>
                                <LogoCloud />
                            </div>
                            <div className='flex flex-col space-y-10 pt-10'>
                                <div className="hidden sm:mt-8 sm:flex sm:justify-center">
                                    <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-100/10 hover:ring-gray-100/20">
                                        <span className="text-gray-300">
                                            GPT, GPT, GPT - everyone is talking about it. Learn more about its use cases in our booklet. {' '}
                                            <a href="https://hitchhiker.kern.ai/" className="font-semibold text-green-400" target="_blank" rel="noreferrer noopener">
                                                <span className="absolute inset-0" aria-hidden="true" />
                                                Read more <span aria-hidden="true">&rarr;</span>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                                <div className='hidden md:block'>
                                    <div className='bg-gradient-to-b from-purple-700 via-purple-400 to-purple-700 rounded-lg 
                                        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                                        shadow-[0_0px_100px_10px_rgba(202,73,223,0.5)]
                                    '>
                                        <img
                                            src="/hero-hitchhiker.png"
                                            alt="Hitchhiker's Guide to ChatGPT"
                                            className="rounded-lg p-0.5"
                                        />
                                        <a
                                            className='flex justify-center items-center absolute top-[34%] left-[40%] md:top-[47%] md:left-[47%] h-16 w-16 bg-black rounded-full hover:scale-110 transition-transform duration-300'
                                            href='https://www.youtube.com/watch?v=KCMbwFq6eTM'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <IconPlayerPlay className='h-5 w-5 text-stone-100' fill='white' />
                                        </a>
                                    </div>
                                    <p className="mt-4 text-sm text-gray-300 text-center">
                                        Learn more about our new booklet on ChatGPT, which guides you through use cases and best practices.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* <StrategicNLPBanner /> */}
            <AccessModal open={openAccessModal} setOpen={setOpenAccessModal} />
        </div>
    )
}
