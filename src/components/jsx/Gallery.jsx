import { useEffect, useState } from 'react'
import { Circular } from '@/util/Circular'
import { BoltIcon as BoltIconSolid } from '@heroicons/react/24/solid'
import { BoltIcon as BoltIconOutline } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/outline'
import { KERN_ASSETS_URL } from './_settings'
import { IconApps, IconChevronRight, IconUser } from '@tabler/icons'
import Link from 'next/link'

const slideContent = {
    "Customer support": {
        teaser: "Take your customer support to the next level. Understand what your customers want to understand (both on high-level and on a granular level) and provide them with the best possible support.",
        description: "You want to give your clients the best possible operational support. But how can you operate on high-frequency while stile ensuring that you're keeping up with customers' requirements? Future-proof your customer support by building your own pipeline using the 'Customer support' template.",
        features: [
            "Automatically route messages to the right department",
            "Automatically gather granular information about the customer's problem",
            "Use internal systems (e.g. CRM, ERP, etc.) to collect the data required to write an answer",
            "Depending on the AI's confidence, automatically send the answer to the customer or send it to a human for review",
        ],
        image: "customer-automation-full-hd",
        complexity: "advanced",
    },
    "NLP dashboards": {
        teaser: "Build dashboards that understand natural language. Identify characteristics and patterns that can only be retrieved via state-of-the-art AI.",
        description: "If you have a large text corpora (e.g. all external reviews for a product of yours), you can use the 'NLP dashboards' template to build a dashboard that understands natural language. This allows you to identify characteristics and patterns that can only be retrieved via state-of-the-art AI.",
        features: [
            "Attach a datasource such as Google Sheets or a database",
            "Automatically extract entities and relationships from the text",
            "Use the extracted entities and relationships to build a dashboard",
            "Analyze behavior and patterns in the data that would otherwise be impossible to identify",
        ],
        image: "analytics-full-hd",
        complexity: "advanced",
    },
}

const slideOptions = Object.entries(slideContent).map(([key, value]) => key)
const slider = new Circular(slideOptions)


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function getComplexityIcon(complexity) {
    if (complexity === "starter") {
        return (
            <div className='flex space-x-1'>
                <BoltIconOutline className="h-5 w-5 text-green-500" />
                <BoltIconOutline className="h-5 w-5 text-green-500" />
                <BoltIconSolid className="h-5 w-5 text-green-500" />
            </div>
        )
    } else if (complexity === "intermediate") {
        return (
            <div className='flex space-x-1'>
                <BoltIconOutline className="h-5 w-5 text-green-500" />
                <BoltIconSolid className="h-5 w-5 text-green-500" />
                <BoltIconSolid className="h-5 w-5 text-green-500" />
            </div>
        )
    } else if (complexity === "advanced") {
        return (
            <div className='flex space-x-1'>
                <BoltIconSolid className="h-5 w-5 text-green-500" />
                <BoltIconSolid className="h-5 w-5 text-green-500" />
                <BoltIconSolid className="h-5 w-5 text-green-500" />
            </div>
        )
    }
}

export function Gallery() {
    const [current, setCurrent] = useState(slider.current())
    const [clickedOption, setClickedOption] = useState(null)

    const [timer, setTimer] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer + 1)
            if (timer % 400 === 0 && timer !== 0 && clickedOption === null) {
                setCurrent(slider.next())
                setTimer(0)
            }
        }, 10)
        return () => clearInterval(interval)
    }, [timer])

    return (
        <div className='mx-4'>
            <div className="absolute inset-0"
                style={{
                    backgroundColor: "#000000",
                    opacity: 0.4,
                    backgroundImage: " radial-gradient(#84cc16 1.1500000000000001px, transparent 1.1500000000000001px), radial-gradient(#84cc16 1.1500000000000001px, #000000 1.1500000000000001px)",
                    backgroundSize: "46px 46px",
                    backgroundPosition: "0 0,23px 23px"
                }} />

            <div
                className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75'
            />
            <main className="relative">
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl py-16 sm:py-20">
                        <div>
                            <div>
                                <h1 className="text-white text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                    <div>Use case gallery</div>
                                </h1>
                                <p className="mt-6 text-xl leading-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 sm:text-center">
                                    Used by data scientists at AI-driven organizations, both small and large
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:grid md:grid-cols-5 md:gap-8 max-w-5xl mx-auto justify-center pt-4 text-white'>
                    <div className='md:col-span-3'>
                        <img
                            src={`${KERN_ASSETS_URL}/images/${slideContent[current].image}.png`}
                            alt={current}
                            className="rounded-xl border border-gray-700 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                            shadow-[0_0px_20px_5px_rgba(255,255,255,0.2)]"
                        />
                    </div>
                    <div className='md:col-span-2'>
                        <div className="flex justify-between mt-6 text-gray-100">
                            <span>
                                {current}
                            </span>
                            {/* <span>
                            {getComplexityIcon(slideContent[current].complexity)}
                        </span> */}
                        </div>
                        <div className="mt-4 text-gray-400 text-sm">
                            {slideContent[current].description}
                        </div>
                        <div className='mt-4 text-white text-sm'>
                            <ul className='grid grid-cols-2 gap-4'>
                                {slideContent[current].features.map((feature, index) => (
                                    <li key={index} className='flex space-x-2'>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* <div className='mt-4 text-gray-200'>
                        <div className='font-semibold text-sm'>
                            Integrated nodes
                        </div>
                        <div className='mt-2 flex space-x-2'>
                            {slideContent[current].usedApps.map((app, index) => (
                                <div key={index} className='inline-block'>
                                    <img
                                        src={app}
                                        alt={app}
                                        className="inline-block p-0.5 h-10 w-10 rounded-full ring-1 ring-gray-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mt-4 space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-lime-300 to-green-500'>
                        {slideContent[current].tags.map((tag, index) => (
                            <span key={index} className='inline-block text-sm font-semibold'>
                                #{tag}
                            </span>
                        ))}
                    </div> */}
                </div>
                <div className="md:grid md:grid-cols-2 max-w-5xl mx-auto justify-center pt-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:gap-4">
                    {Object.entries(slideContent).map(([key, item], index) => (
                        <div key={index}
                            className={classNames(
                                key === clickedOption ? "ring-gray-500" : "ring-white/10",
                                "w-full hover:bg-neutral-800 bg-neutral-900 inline-block rounded-lg p-4 text-base font-semibold leading-7 text-gray-100 ring-1 ring-inset group-hover:ring-white/20 cursor-pointer",
                            )}
                            onClick={
                                () => {
                                    if (key === clickedOption) {
                                        setClickedOption(null)
                                        setTimer(0)
                                        return
                                    }
                                    while (slider.current() !== key) {
                                        slider.next()
                                    }
                                    setCurrent(key)
                                    setClickedOption(key)
                                    setTimer(0)
                                }}
                        >
                            <div className='flex justify-between text-gray-100'>
                                <span>
                                    {key}
                                </span>
                                {/* <span>
                                    {getComplexityIcon(slideContent[key].complexity)}
                                </span> */}
                            </div>
                            <div className='mt-2 text-sm text-gray-400'>
                                {slideContent[key].teaser}
                            </div>
                            <div className='mt-2 flex justify-between'>
                                {/* <div className='space-x-1'>
                                    {slideContent[key].usedApps.slice(0, 3).map((app, index) => (
                                        <div key={index} className='inline-block'>
                                            <img
                                                src={app}
                                                alt={app}
                                                className="inline-block p-0.5 h-6 w-6 rounded-full ring-1 ring-gray-500"
                                            />
                                        </div>
                                    ))}
                                    {slideContent[key].usedApps.length > 3 && (
                                        <div className='inline-block'>
                                            <div className="inline-block">
                                                <div className="ml-0.5 flex items-center justify-center h-full w-full text-gray-100 font-mono text-sm">
                                                    +{slideContent[key].usedApps.length - 3}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div> */}
                                <div className="mt-4 h-1.5 w-44 flex rounded bg-green-200">
                                    {key === current && (
                                        <div className="w-12 bg-gradient-to-r rounded from-green-600 to-lime-600" style={{ width: `${key === clickedOption ? 0 : timer * .25}%` }} />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>



                <div className='max-w-5xl mx-auto justify-center mt-28 '>
                    <h3 className='text-white text-xl font-semibold'>Growing our team to grow our platform</h3>
                </div>
                <div className='max-w-5xl mx-auto flex flex-col justify-center mt-6 w-full md:grid md:grid-cols-2 md:gap-4 space-y-4 md:space-y-0'>
                    <div className='flex flex-col col-span-1 bg-neutral-900 hover:bg-neutral-800 p-8 rounded-lg border border-gray-700 space-y-4'>
                        <div className='flex justify-center items-center bg-neutral-800 rounded-md border border-gray-700 w-10 h-10'>
                            <IconUser className='h-5 w-5 text-gray-400 inline-block' />
                        </div>
                        <h3 className='font-semibold text-white'>
                            We're hiring a <span className='text-green-500'>Go-to-Market Manager</span> to join our team!
                        </h3>
                        <div className='text-gray-300'>
                            Responsibility of this role is to drive the growth of the company by researching and defining use cases on top of our platform, and building a go-to-market strategy to reach out to potential customers.
                        </div>
                        <div className='text-gray-300'>
                            In other words: working closely together with the founding team to add use cases to this gallery, e.g. in form of standalone products.
                        </div>
                        <Link href='/company/careers'>
                            <span className='inline-block text-green-500 font-semibold hover:text-green-400'>
                                Learn more <IconChevronRight className='inline-block h-4 w-4' />
                            </span>
                        </Link>
                    </div>
                    <div className='flex flex-col col-span-1 bg-neutral-900 hover:bg-neutral-800 p-8 rounded-lg border border-gray-700 space-y-4'>
                        <div className='flex justify-center items-center bg-neutral-800 rounded-md border border-gray-700 w-10 h-10'>
                            <IconApps className='h-5 w-5 text-gray-400 inline-block' />
                        </div>
                        <h3 className='font-semibold text-white'>
                            We're adding new integrations <span className='text-green-500'>on a weekly basis</span>.
                        </h3>
                        <div className='text-gray-300'>
                            If you need an integration that's not yet available, please let us know! We're happy to add it to our roadmap, and implement it with high priority.
                        </div>
                        <Link href='/integrations'>
                            <span className='inline-block text-white font-semibold hover:text-gray-400'>
                                Learn more <IconChevronRight className='inline-block h-4 w-4' />
                            </span>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
