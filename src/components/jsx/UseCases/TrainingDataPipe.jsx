import { useEffect, useState } from 'react'
import { IconArrowsShuffle, IconChevronLeft, IconChevronRight, IconPlayerPause, IconPlayerPlay } from '@tabler/icons'
import { Circular } from '@/util/Circular'
import { Tooltip } from "@nextui-org/react";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const slideContent = [
    {
        name: 'workflows',
        title: 'Design workflows',
        video: "/video/workflows",
    },
    {
        name: 'annotate',
        title: 'Annotate data',
        video: "/video/annotate",
    },
    {
        name: 'automate',
        title: 'Build automations',
        video: "/video/automate",
    },
    {
        name: 'manage',
        title: 'Manage and orchestrate',
        video: "/video/manage",
    },
    {
        name: 'deploy',
        title: 'Deploy as an API',
        video: "/video/deploy",
    }
]
const slideOptions = Object.entries(slideContent).map(([key, value]) => value.name)
const slider = new Circular(slideOptions)

export function TrainingDataPipe() {



    const [current, setCurrent] = useState(slider.current())

    return (
        <div
            id="training-data"
        >
            <div className='max-w-5xl mx-auto flex flex-col space-y-6'>
                <div className='flex flex-row items-center md:space-x-4'>
                    <div
                        className='hidden md:block p-3 bg-[#0d0d0d] border border-neutral-900 rounded-2xl'
                    >
                        <IconArrowsShuffle className='text-neutral-500 w-6 h-6' />
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-white'>
                            Building training data pipelines
                        </h3>
                        <p className='text-gray-400 mt-1'>
                            Collect and generate raw data, scale your labeling and quality assurance, and build pipelines for strong and reliable NLP models.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col space-y-2 lg:hidden">
                    <div
                        className='flex items-center justify-center space-x-2'
                    >
                        <button
                            onClick={() => {
                                setCurrent(slider.prev())
                            }}
                        >
                            <IconChevronLeft className='text-gray-300 w-5 h-5' />
                        </button>
                        <button
                            className='flex flex-row items-center bg-neutral-800 border border-neutral-700 rounded-full px-2 py-1'
                        >
                            <span className='text-white'>
                                {slideContent.find((item) => item.name === current).title}
                            </span>
                        </button>
                        <button
                            onClick={() => {
                                setCurrent(slider.next())
                            }}
                        >
                            <IconChevronRight className='text-gray-300 w-5 h-5' />
                        </button>
                    </div>
                </div>

                <div className='hidden lg:flex flex-row items-center space-x-2 mx-auto '>
                    <div
                        className='mx-auto w-fit h-full bg-gradient-to-b from-[#0d0d0d] to-[#0f0f0f] border border-neutral-900 rounded-full opacity-90'
                    >
                        <div className='flex flex-row mx-auto p-2 space-x-2'>
                            {slideContent.map((item) => (
                                <div key={item.name}>
                                    <div
                                        className={classNames(
                                            'text-gray-300 rounded-full p-2 bg-neutral-900 hover:text-white cursor-pointer'
                                        )}
                                        onClick={() => {
                                            while (slider.current() !== item.name) {
                                                slider.next()
                                            }
                                            setCurrent(item.name)
                                        }}
                                    >

                                        <button
                                            className={classNames(
                                                current == item.name && 'text-white',
                                                'flex flex-row items-center'
                                            )}
                                        >
                                            <span
                                                className={classNames(
                                                    'mt-0.5 rounded-full w-2 h-2 inline-block mx-1.5',
                                                    current == item.name ? 'bg-green-500' : 'bg-neutral-500'
                                                )}
                                            />
                                            <span>
                                                {item.title}
                                            </span>
                                        </button>

                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-5xl mx-auto mt-10'>
                {slideContent.map((item) => (
                    <div className={classNames(
                        current == item.name ? 'block' : 'hidden',
                        'bg-gradient-to-b from-purple-700 via-purple-400 to-purple-700 rounded-lg',
                        'transform shadow-[0_0px_100px_10px_rgba(202,73,223,0.5)]',
                    )}
                        key={item.name}
                    >
                        <div className='hidden md:block'>
                            <video
                                width="100%"
                                className='rounded-lg p-0.5'
                                autoPlay
                                loop
                                muted
                            >
                                <source src={`${item.video}.mp4`} type="video/mp4"
                                />
                                Sorry, your browser doesn't support videos.
                            </video>
                        </div>
                        <div className='block md:hidden'>
                            <img
                                src={`${item.video}.png`}
                                className='rounded-lg p-0.5'
                            />
                        </div>
                    </div>
                ))}

                <div className='mt-8'>
                    <div
                        className='mx-auto w-fit h-full bg-gradient-to-b from-[#0d0d0d] to-[#0f0f0f] border border-neutral-900 rounded-full opacity-90'
                    >
                        <a
                            href='/platform'
                            className='group text-lg bg-neutral-900 m-6 flex flex-row group space-x-2 items-center relative border border-neutral-800 rounded-full bg-neutral-900 pl-4 pr-5 py-2.5 hover:border-neutral-700'
                        >
                            <span
                                className='bg-purple-500 rounded-full w-2.5 h-2.5 animate-pulse inline-block mx-1.5'
                            />
                            <span
                                className='text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-400 animate-text group-hover:text-white'
                            >
                                Take a look at our platform
                            </span>
                        </a>
                    </div>
                </div>
            </div>

        </div >
    )
}


