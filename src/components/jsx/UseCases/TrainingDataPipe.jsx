import { useEffect, useState } from 'react'
import { IconArrowsShuffle, IconPlayerPause, IconPlayerPlay } from '@tabler/icons'
import { Circular } from '@/util/Circular'
import { Tooltip } from "@nextui-org/react";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const slideContent = [
    {
        name: 'workflows',
        title: 'Design workflows',
        video: "/video/quickstart.mp4",
    },
    {
        name: 'annotate',
        title: 'Annotate data',
        video: "/video/quickstart.mp4",
    },
    {
        name: 'manage',
        title: 'Manage and orchestrate',
        video: "/video/quickstart.mp4",
    },
    {
        name: 'automate',
        title: 'Build automations',
        video: "/video/quickstart.mp4",
    },
    {
        name: 'deploy',
        title: 'Deploy as an API',
        video: "/video/quickstart.mp4",
    }
]
const slideOptions = Object.entries(slideContent).map(([key, value]) => value.name)
const slider = new Circular(slideOptions)

export function TrainingDataPipe() {



    const [current, setCurrent] = useState(slider.current())
    const [clickedOption, setClickedOption] = useState(null)

    const [timer, setTimer] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer + 1)
            if (timer % 500 === 0 && timer !== 0 && clickedOption === null) {
                setCurrent(slider.next())
                setTimer(0)
            }
        }, 10)
        return () => clearInterval(interval)
    }, [timer])


    return (
        <div className='my-20'>
            <div className='max-w-5xl mx-auto flex flex-col space-y-6'>
                <div className='flex flex-row items-center space-x-4'>
                    <div
                        className='p-3 bg-[#0d0d0d] border border-neutral-900 rounded-2xl'
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
                <div className='flex flex-row items-center space-x-2 mx-auto '>
                    <div className='w-fit p-[1px] rounded-2xl bg-gradient-to-r from-gray-900 via-gray-600 to-black'>
                        <div className='flex flex-row space-x-2 items-center justify-between p-2 text-gray-500 text-sm rounded-2xl bg-neutral-900'>
                            {slideContent.map((item) => (
                                <div className='w-fit p-[1px] rounded-xl bg-gradient-to-r from-gray-800 to-gray-700'>
                                    <div
                                        className={classNames(
                                            clickedOption === item.name ? 'border border-green-500' : 'border border-transparent',
                                            'p-2 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-xl hover:from-neutral-800 hover:via-neutral-700 hover:to-neutral-800 hover:text-white cursor-pointer'
                                        )}
                                        onClick={() => {
                                            if (item.name === clickedOption) {
                                                setClickedOption(null)
                                                setTimer(0)
                                                return
                                            }
                                            while (slider.current() !== item.name) {
                                                slider.next()
                                            }
                                            setCurrent(item.name)
                                            setClickedOption(item.name)
                                            setTimer(0)
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
                                        <div
                                            className={classNames(
                                                current == item.name ? 'bg-gray-200' : 'bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800',
                                                'mt-1 w-full h-1.5 rounded-full'
                                            )}
                                        >
                                            {current == item.name && !clickedOption && (
                                                <div
                                                    className='bg-green-500 h-1.5 rounded-full' style={{ width: `${timer / 5}%` }}
                                                />
                                            )}

                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                    {clickedOption && (
                        <div className="-mt-2">
                            <Tooltip className='ml-1' color="invert" content={"Autoplay"} placement="right"
                            >
                                <button
                                    type='button'
                                    className='mt-2 h-fit hover:text-green-500 hover:bg-neutral-800 bg-neutral-900 flex rounded-lg p-2 text-xs font-semibold leading-7 text-gray-100 ring-1 ring-inset ring-neutral-700 group-hover:ring-white/20'
                                    onClick={() => {
                                        setClickedOption(null)
                                        setTimer(0)
                                    }}
                                >
                                    <IconPlayerPlay className='my-auto h-5 w-5 inline-block' />
                                </button>
                            </Tooltip>
                        </div>
                    )}
                    {clickedOption == null && (
                        <div className='-mt-2'>
                            <Tooltip className='ml-1' color="invert" content={"Stop autoplay"} placement="right"
                            >
                                <button
                                    type='button'
                                    className='mt-2 h-fit hover:text-red-400 hover:bg-neutral-800 bg-neutral-900 flex rounded-lg p-2 text-xs font-semibold leading-7 text-gray-100 ring-1 ring-inset ring-neutral-700 group-hover:ring-white/20'
                                    onClick={() => {
                                        while (slider.current() !== current) {
                                            slider.next()
                                        }
                                        setCurrent(current)
                                        setClickedOption(current)
                                        setTimer(0)
                                    }}
                                >

                                    <IconPlayerPause className='my-auto h-5 w-5 inline-block' />
                                </button>
                            </Tooltip>
                        </div>
                    )}
                </div>
            </div>

            <div className='mt-10'>
                <div className='
                bg-gradient-to-b from-purple-700 via-purple-400 to-purple-700 rounded-lg 
                  transform 
                  shadow-[0_0px_100px_10px_rgba(202,73,223,0.5)]
               '>
                    <video
                        width="100%"
                        className='rounded-lg p-0.5'
                        autoPlay
                        loop
                        muted
                    >
                        <source src={
                            slideContent.find((item) => item.name === current).video
                        } type="video/mp4"
                        />
                        Sorry, your browser doesn't support videos.
                    </video>
                </div>
            </div>
        </div>
    )
}


