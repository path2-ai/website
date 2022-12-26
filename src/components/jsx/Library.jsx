import { useEffect, useState } from 'react'
import { Circular } from '@/util/Circular'
import { BoltIcon as BoltIconSolid } from '@heroicons/react/24/solid'
import { BoltIcon as BoltIconOutline } from '@heroicons/react/24/outline'

const slideContent = {
    workflow: {
        title: "workflow",
        teaser: "Workflow is a data processing platform that allows you to easily build data pipelines and run them on your data.",
        description: "Workflow is a data processing platform that allows you to easily build data pipelines and run them on your data.",
        image: "/screenshot-workflow.png",
        usedApps: [
            "https://www.kern.ai/kern-icon.png",
            "https://st2.depositphotos.com/47577860/46275/v/600/depositphotos_462751152-stock-illustration-algorithm-gym-learning-icon-in.jpg",
            "https://avatars.githubusercontent.com/u/25720743?s=200&v=4",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png",
        ],
        complexity: "starter",
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

export function Library() {
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
            <div className="fixed inset-0"
                style={{
                    backgroundColor: "#000000",
                    opacity: 0.25,
                    backgroundImage: " radial-gradient(#84cc16 1.1500000000000001px, transparent 1.1500000000000001px), radial-gradient(#84cc16 1.1500000000000001px, #000000 1.1500000000000001px)",
                    backgroundSize: "46px 46px",
                    backgroundPosition: "0 0,23px 23px"
                }} />
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
                            <div className='flex justify-between'>
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
