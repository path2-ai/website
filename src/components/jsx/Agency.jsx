import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { KERN_ASSETS_URL } from './_settings'
import { CalModal } from './CalModal'


import { IconArrowDown, IconArrowRight, IconAsterisk, IconChevronRight, IconMessageChatbot, IconRepeat, IconWand } from '@tabler/icons'
const stats = [
    { id: 1, name: 'Estimated market size of NLP by 2027', value: '$49.4 billion' },
    { id: 2, name: 'until ChatGPT crossed 1,000,000 users', value: '5 days' },
    { id: 3, name: 'unstructured data in businesses', value: '80%' },
]

import { useState } from 'react'

export function Agency() {

    const [openBanner, setOpenBanner] = useState(true)
    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
            <section className="relative isolate overflow-hidden">
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
                        <path
                            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
                </svg>
                <svg
                    viewBox="0 0 1108 632"
                    aria-hidden="true"
                    className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                >
                    <path
                        fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
                        fillOpacity=".2"
                        d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
                    />
                    <defs>
                        <linearGradient
                            id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
                            x1="1220.59"
                            x2="-85.053"
                            y1="432.766"
                            y2="638.714"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#0000F5" />
                            <stop offset={1} stopColor="#80CAFF" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
                    <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                        <div className="mt-24 sm:mt-32 lg:mt-16">
                            <a href="https://blog.kern.ai/chatgpt-mass-awareness" className="inline-flex items-center space-x-6">
                                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-400 ring-1 ring-inset ring-blue-500/20">
                                    Insights
                                </span>
                                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                                    <span>Have your clients asked you about ChatGPT?</span>
                                    <ChevronRightIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                                </span>
                            </a>
                        </div>
                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Bring natural language processing to your clients.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            The <span className='animate-text bg-gradient-to-r from-white via-gray-600 to-white bg-clip-text text-transparent'>era of natural language processing</span> has begun.
                        </p>
                        <p className="mt-2 text-lg leading-8 text-gray-300">
                            Serve cross-industry <span className='italic'>and</span> longtail use cases to your clients with ease using our developer platform.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <div className='animate-bounce flex items-center flex-row space-x-4'>
                                <div className='p-2 border border-gray-800 bg-neutral-900 rounded-full'>
                                    <IconArrowDown className="h-4 w-4 text-blue-500" />
                                </div>
                                <div className='text-gray-300'>
                                    Scroll down
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <img
                                src="/screenshot-workflow.png"
                                alt="App screenshot"
                                width={2432}
                                height={1442}
                                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-gray-400">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>


            <section className="max-w-5xl mx-auto py-16 sm:py-20">
                <div
                    className='flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-16'
                >
                    <img src='/longtail.png' className='p-10 lg:-mb-16 max-w-sm lg:max-w-md' />
                    <div className='mx-6 lg:mx-0 mt-auto text-white'>
                        <h2 className='text-2xl font-bold'>
                            Go from repeating uses case to the longtail.
                        </h2>

                        <div className='mt-8 flex flex-col space-y-10'>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex flex-row items-center space-x-2'>
                                    <div className='p-2 border border-gray-800 bg-neutral-900 rounded-md w-fit'>
                                        <IconRepeat className='h-6 w-6 text-blue-500' />
                                    </div>
                                    <h3 className='font-semibold'>
                                        Repeatable use cases
                                    </h3>
                                </div>
                                <p className='p-2 text-gray-300'>
                                    Those are the use cases that help you <span className='font-semibold text-green-500'>land</span> a client.
                                </p>
                            </div>

                            <div className='flex flex-col space-y-2'>
                                <div className='flex flex-row items-center space-x-2'>
                                    <div className='p-2 border border-gray-800 bg-neutral-900 rounded-md w-fit'>
                                        <IconAsterisk className='h-6 w-6 text-blue-500' />
                                    </div>
                                    <h3 className='font-semibold'>
                                        Longtail use cases
                                    </h3>
                                </div>
                                <p className='p-2 text-gray-300'>
                                    Those are the use cases that help you <span className='font-semibold text-blue-500'>keep</span> a client.
                                </p>
                            </div>
                        </div>

                        <div className='mt-4 flex flex-row items-center space-x-2'>
                            <IconChevronRight className='h-6 w-6 text-blue-500' />
                            <p className='text-gray-300'>
                                Our platform is designed to help you serve both.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-5xl mx-auto py-16 sm:py-20">
                <div
                    className='flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-16'
                >
                    <img src='/sigmoid.png' className='p-10 lg:order-last max-w-sm lg:max-w-md' />
                    <div className='mx-6 lg:mx-0 mt-auto text-white'>
                        <h2 className='text-2xl font-bold'>
                            Now is the time to start natural language processing.
                        </h2>

                        <p className='mt-4 text-gray-300'>
                            Everyone is now realizing the power of NLP, not just the technicians and scientists.
                        </p>

                        <div className='mt-8 flex flex-col space-y-10'>
                            <div className='flex flex-col space-y-2'>
                                <div className='flex flex-row items-center space-x-2'>
                                    <div className='p-2 border border-gray-800 bg-neutral-900 rounded-md w-fit'>
                                        <IconMessageChatbot className='h-6 w-6 text-blue-500' />
                                    </div>
                                    <h3 className='font-semibold'>
                                        ChatGPT is only the beginning
                                    </h3>
                                </div>
                                <p className='p-2 text-gray-300'>
                                    Companies are realizing what NLP means to their business. Demand is about to explode.
                                </p>
                            </div>

                            <div className='flex flex-col space-y-2'>
                                <div className='flex flex-row items-center space-x-2'>
                                    <div className='p-2 border border-gray-800 bg-neutral-900 rounded-md w-fit'>
                                        <IconWand className='h-6 w-6 text-blue-500' />
                                    </div>
                                    <h3 className='font-semibold'>
                                        Go beyond ChatGPT
                                    </h3>
                                </div>
                                <p className='p-2 text-gray-300'>
                                    Build prototypes in a day, and deploy to production in weeks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="isolate overflow-hidden px-6 lg:px-8">
                <div className="relative mx-auto max-w-2xl py-24 sm:py-36 lg:max-w-4xl">

                    <svg
                        viewBox="0 0 1108 632"
                        aria-hidden="true"
                        className="absolute top-10 left-10 -z-10 transform-gpu blur-3xl"
                    >
                        <path
                            fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
                            fillOpacity=".2"
                            d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
                        />
                        <defs>
                            <linearGradient
                                id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
                                x1="1220.59"
                                x2="-85.053"
                                y1="432.766"
                                y2="638.714"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#0000F5" />
                                <stop offset={1} stopColor="#80CAFF" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
                        <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
                            <svg
                                viewBox="0 0 162 128"
                                fill="none"
                                aria-hidden="true"
                                className="absolute -top-12 left-0 -z-10 h-32 stroke-gray-500"
                            >
                                <path
                                    id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                                />
                                <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                            </svg>
                            <blockquote className="text-xl font-semibold leading-8 text-gray-100 sm:text-2xl sm:leading-9">
                                <p>
                                    Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat. Elit
                                    sunt proident ea nulla ad nulla dolore ad pariatur tempor non. Sint veniam minim et ea.
                                </p>
                            </blockquote>
                        </div>
                        <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
                            <img
                                className="rounded-xl lg:rounded-3xl"
                                src="/testimonials/sebastian-heinz.png"
                                alt=""
                            />
                        </div>
                        <figcaption className="text-base lg:col-start-1 lg:row-start-3">
                            <div className="font-semibold text-gray-100">Sebastian Heinz</div>
                            <div className="mt-1 text-gray-300">CEO of statworx</div>
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section className='xl:hidden mx-auto max-w-5xl'>
                <div className='flex flex-col items-center justify-center space-y-4'>
                    <div className='mx-6'>
                        <h4 className="mt-12 text-3xl font-bold tracking-tight text-white">
                            Partner with us to build <span className='animate-text bg-gradient-to-r from-sky-300 via-blue-600 to-indigo-300 bg-clip-text text-transparent'>magical</span> software
                        </h4>
                        <p className="mt-6 text-base leading-8 text-white">
                            We are looking for partners to help us build the future of NLP. Let's build great things together.
                        </p>
                    </div>
                    <div className='mt-4 w-fit'>
                        <button
                            className='text-white bg-neutral-900 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-lg p-3 text-base font-medium'
                            onClick={() => setOpenModal(true)}
                        >
                            <div className='flex items-center flex-row space-x-4'>
                                <div className='p-2 border border-gray-800 bg-neutral-900 rounded-full'>
                                    <IconArrowRight className="h-4 w-4 text-blue-500" />
                                </div>
                                <div className='text-gray-300 pr-2'>
                                    Set up a call
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            <section className='hidden xl:block -mt-20 mb-32'>
                <div className='absolute w-full mx-auto'>
                    <img
                        className="relative left-1/2 w-[1440px] max-w-none -translate-x-1/2"
                        src="/background-partners-1440.png"
                        alt=""
                    />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
                    <div className="mx-auto max-w-5xl lg:max-w-6xl">
                        <p className="mt-12 pt-64 text-5xl font-bold tracking-tight text-white">
                            Partner with us to build <span className='animate-text bg-gradient-to-r from-sky-300 via-blue-600 to-indigo-300 bg-clip-text text-transparent'>magical</span> software
                        </p>
                        <p className="mt-6 text-lg leading-8 text-white">
                            We are looking for partners to help us build the future of NLP. Let's build great things together.
                        </p>
                    </div>
                </div>
                <div className="my-28 relative mx-auto w-fit p-6 rounded-2xl bg-gradient-to-r from-gray-900 to-neutral-900 ring-1 ring-blue-500             
                  shadow-[0_0px_40px_2px_rgba(25,89,216,0.5)]">
                    <img
                        className="mx-auto "
                        src={`${KERN_ASSETS_URL}/logos/KernAI-icon.svg`}
                        alt=""
                        width="48"
                    />
                </div>
                <div className='relative mx-auto max-w-7xl mt-24'>
                    <div className='w-fit mx-auto'>
                        <button
                            className='text-white bg-neutral-900 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-lg p-3 text-base font-medium'
                            onClick={() => setOpenModal(true)}
                        >
                            <div className='flex items-center flex-row space-x-4'>
                                <div className='p-2 border border-gray-800 bg-neutral-900 rounded-full'>
                                    <IconArrowRight className="h-4 w-4 text-blue-500" />
                                </div>
                                <div className='text-gray-300 pr-2'>
                                    Set up a call
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {openBanner && (
                <div className="fixed inset-x-0 bottom-0 z-50">
                    <div className="flex items-center gap-x-6 bg-blue-900 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
                        <p className="text-sm leading-6 text-white">
                            <button onClick={() => setOpenModal(true)} >
                                <strong className="font-semibold">Partner program</strong>
                                <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                                    <circle cx={1} cy={1} r={1} />
                                </svg>
                                Join us as an implementation partner&nbsp;<span aria-hidden="true">&rarr;</span>
                            </button>
                        </p>
                        <div className="flex flex-1 justify-end">
                            <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
                                onClick={() => setOpenBanner(false)}
                            >
                                <span className="sr-only">Dismiss</span>
                                <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            )
            }

            <CalModal open={openModal} setOpen={setOpenModal} />
        </div >
    )
}
