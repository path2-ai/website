import { useEffect, useState } from 'react'
import { Circular } from '@/util/Circular'
import { BoltIcon as BoltIconSolid } from '@heroicons/react/24/solid'
import { BoltIcon as BoltIconOutline } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/outline'

const slideContent = {
    "Speech to Summary": {
        title: "Speech to Summary",
        teaser: "Build your custom recorder, which transcribes audio into summarized texts and analyzes its content based on your inputs.",
        description: "You're just coming out of two hours of meetings and have already forgotten 70% of what was discussed. Wouldn't it be great if you could just look into a summarized transcript of the meeting notes, enriched with interesting metadata and insights? Directly sent to the tool of your choice? Well, now you can! Build your own pipeline using the 'Speech to Summary' template.",
        features: [
            "Grab audio directly from Google Meet or any other video conferencing tool",
            "Transcribe audio into text",
            "Summarize text",
            "Extract structured data from text and customize pipeline flows",
            "Send to Slack or any other tool of your choice",
        ],
        image: "/screenshot-workflow.png",
        usedApps: [
            "https://www.kern.ai/kern-icon.png",
            "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png",
            "https://st2.depositphotos.com/47577860/46275/v/600/depositphotos_462751152-stock-illustration-algorithm-gym-learning-icon-in.jpg",
            "https://avatars.githubusercontent.com/u/25720743?s=200&v=4",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png",
        ],
        tags: [
            "Speech2Text",
            "TextSummarization",
            "TextAnalysis",
            "Productivity",
        ],
        complexity: "advanced",
    },
    "ChatAnalyzer": {
        title: "ChatAnalyzer",
        teaser: "Build your own chatbot, which collects messages from your communication channels and analyzes them based on your configuration.",
        description: "You receive hundreds of messages every day, but you don't have the time to read them all. Wouldn't it be great if you could just look into a dashboard of what was discussed, enriched with interesting metadata and insights? Well, now you can! Build your own pipeline using the 'ChatAnalyzer' template.",
        features: [
            "Grab messages from Slack, Discord, or any other communication channel",
            "Extract structured data from text and customize pipeline flows",
            "Send to Slack or any other tool of your choice",
        ],
        image: "/screenshot-workflow.png",
        usedApps: [
            "https://www.kern.ai/kern-icon.png",
            "https://cdn.worldvectorlogo.com/logos/discord-4.svg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png",
        ],
        tags: [
            "ChatAnalysis",
            "Productivity",
        ],
        complexity: "intermediate",
    },
    "StockAnalyzer": {
        title: "StockAnalyzer",
        teaser: "Build your own stock analyzer, which collects stock data from your favorite stock market and analyzes it based on your configuration.",
        description: "You're interested in the stock market, but you don't have the time to read all the news. Wouldn't it be great if you could just look into a dashboard of what's going on, enriched with interesting metadata and insights? Well, now you can! Build your own pipeline using the 'StockAnalyzer' template.",
        features: [
            "Grab stock data from Yahoo Finance or any other stock market",
            "Extract structured data from text and customize pipeline flows",
            "Send to Slack or any other tool of your choice",
        ],
        image: "/screenshot-workflow.png",
        usedApps: [
            "https://www.kern.ai/kern-icon.png",
            "https://upload.wikimedia.org/wikipedia/commons/8/8f/Yahoo%21_Finance_logo_2021.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png",
        ],
        tags: [
            "StockAnalysis",
            "Productivity",
        ],
        complexity: "intermediate",
    },
}

const slideOptions = Object.entries(slideContent).map(([key, value]) => value.title)
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
        <div>
            <div className="absolute inset-0"
                style={{
                    backgroundColor: "#000000",
                    opacity: 0.5,
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
                                    <div>Workflow templates for ETL</div>
                                </h1>
                                <p className="mt-6 text-xl leading-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 sm:text-center">
                                    Used by data scientists at AI-driven organizations, both small and large
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-5xl mx-auto justify-center pt-10 text-white'>
                    <div className='bg-gradient-to-b from-gray-500 via-neutral-700 to-gray-500 rounded-lg 
                  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                  shadow-[0_0px_100px_10px_rgba(255,255,255,0.3)]
               '>
                        <img
                            src={slideContent[current].image}
                            alt={slideContent[current].title}
                            className="rounded-lg p-0.5"
                        />
                    </div>
                    <div className="flex justify-between mt-6 text-gray-100">
                        <span>
                            {slideContent[current].title}
                        </span>
                        <span>
                            {getComplexityIcon(slideContent[current].complexity)}
                        </span>
                    </div>
                    <div className="mt-4 text-gray-400 text-sm">
                        {slideContent[current].description}
                    </div>
                    <div className='mt-4 text-white text-sm'>
                        <ul className='grid grid-cols-2 gap-4'>
                            {slideContent[current].features.map((feature, index) => (
                                <li key={index} className='flex space-x-2'>
                                    <CheckIcon className="h-5 w-5 text-green-500" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='mt-4 text-gray-200'>
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
                    </div>
                </div>
                <div className="grid grid-cols-2 max-w-5xl mx-auto justify-center pt-10 flex gap-4">
                    {Object.entries(slideContent).map(([key, item], index) => (
                        <div key={index}
                            className={classNames(
                                key === clickedOption ? "ring-lime-500" : "ring-white/10",
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
                                    {slideContent[key].title}
                                </span>
                                <span>
                                    {getComplexityIcon(slideContent[key].complexity)}
                                </span>
                            </div>
                            <div className='mt-2 text-sm text-gray-400'>
                                {slideContent[key].teaser}
                            </div>
                            <div className='mt-2 flex justify-between'>
                                <div className='space-x-1'>
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
                                </div>
                                <div className="mt-4 h-1.5 w-44 flex rounded bg-green-200">
                                    {key === current && (
                                        <div className="w-12 bg-gradient-to-r rounded from-green-600 to-lime-600" style={{ width: `${key === clickedOption ? 0 : timer * .25}%` }} />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}
