import { useEffect, useState } from 'react'
import { IconArrowsShuffle } from '@tabler/icons'
import { Circular } from '@/util/Circular'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const slider = new Circular([
    {
        name: 'workflows',
        video: "/video/quickstart.mp4",
    },
    {
        name: 'annotate',
        video: "/video/quickstart.mp4",
    },
    {
        name: 'manage',
        video: "/video/quickstart.mp4",
    },
    {
        name: 'automate',
        video: "/video/quickstart.mp4",
    },
    {
        name: 'deploy',
        video: "/video/quickstart.mp4",
    }
])

export function TrainingDataPipe() {

    const [showFeature, setShowFeature] = useState("workflows")


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

    useEffect(() => {
        setShowFeature(current.name)
    }, [current])

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
                <div className='mx-auto w-fit p-[1px] rounded-2xl bg-gradient-to-r from-gray-900 via-gray-600 to-black'>
                    <div className='flex flex-row space-x-2 items-center justify-between p-2 text-gray-500 text-sm rounded-2xl bg-neutral-900'>

                        <div className='w-fit p-[1px] rounded-xl bg-gradient-to-r from-gray-800 to-gray-700'>
                            <div
                                className=' p-2 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-xl hover:from-neutral-800 hover:via-neutral-700 hover:to-neutral-800 hover:text-white'
                            >

                                <button
                                    className={classNames(
                                        showFeature == 'workflows' && 'text-white',
                                        'flex flex-row items-center'
                                    )}
                                    onClick={() => setShowFeature("workflows")}
                                >
                                    <span
                                        className={classNames(
                                            'mt-0.5 rounded-full w-2 h-2 inline-block mx-1.5',
                                            showFeature == 'workflows' ? 'bg-green-500' : 'bg-neutral-500'
                                        )}
                                    />
                                    <span>
                                        Design workflows
                                    </span>
                                </button>
                                <div
                                    className='mt-1 w-full bg-gray-200 h-1.5 rounded-full'
                                >
                                    {showFeature == 'workflows' && (
                                        <div
                                            className='bg-green-500 h-1.5 rounded-full' style={{ width: `${timer / 5}%` }}
                                        />
                                    )}

                                </div>
                            </div>

                        </div>

                        <div className='w-fit p-[1px] rounded-xl bg-gradient-to-r from-gray-700 via-gray-500 to-gray-600'>
                            <button
                                className={classNames(
                                    showFeature == 'annotate' && 'text-white',
                                    'flex flex-row items-center p-2 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-xl hover:from-neutral-800 hover:via-neutral-700 hover:to-neutral-800 hover:text-white'
                                )}
                                onClick={() => setShowFeature('annotate')}
                            >
                                <span
                                    className={classNames(
                                        'mt-0.5 rounded-full w-2 h-2 inline-block mx-1.5',
                                        showFeature == 'annotate' ? 'bg-green-500' : 'bg-neutral-500'
                                    )}
                                />
                                <span>
                                    Annotate data
                                </span>
                            </button>
                        </div>

                        <div className='w-fit p-[1px] rounded-xl bg-gradient-to-r from-gray-600 via gray-500 to-gray-600'>
                            <button
                                className={classNames(
                                    showFeature == 'manage' && 'text-white',
                                    'flex flex-row items-center p-2 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-xl hover:from-neutral-800 hover:via-neutral-700 hover:to-neutral-800 hover:text-white'
                                )}
                                onClick={() => setShowFeature('manage')}
                            >
                                <span
                                    className={classNames(
                                        'mt-0.5 rounded-full w-2 h-2 inline-block mx-1.5',
                                        showFeature == 'manage' ? 'bg-green-500' : 'bg-neutral-500'
                                    )}
                                />
                                <span>
                                    Manage and orchestrate
                                </span>
                            </button>
                        </div>

                        <div className='w-fit p-[1px] rounded-xl bg-gradient-to-r from-gray-600 to-neutral-700'>
                            <button
                                className={classNames(
                                    showFeature == 'automate' && 'text-white',
                                    'flex flex-row items-center p-2 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-xl hover:from-neutral-800 hover:via-neutral-700 hover:to-neutral-800 hover:text-white'
                                )}
                                onClick={() => setShowFeature('automate')}
                            >
                                <span
                                    className={classNames(
                                        'mt-0.5 rounded-full w-2 h-2 inline-block mx-1.5',
                                        showFeature == 'automate' ? 'bg-green-500' : 'bg-neutral-500'
                                    )}
                                />
                                <span>
                                    Build automations
                                </span>
                            </button>
                        </div>

                        <div className='w-fit p-[1px] rounded-xl bg-gradient-to-r from-neutral-700 to-neutral-800'>
                            <button
                                className={classNames(
                                    showFeature == 'deploy' && 'text-white',
                                    'flex flex-row items-center p-2 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-xl hover:from-neutral-800 hover:via-neutral-700 hover:to-neutral-800 hover:text-white'
                                )}
                                onClick={() => setShowFeature('deploy')}
                            >
                                <span
                                    className={classNames(
                                        'mt-0.5 rounded-full w-2 h-2 inline-block mx-1.5',
                                        showFeature == 'deploy' ? 'bg-green-500' : 'bg-neutral-500'
                                    )}
                                />
                                <span>
                                    Deploy as API
                                </span>
                            </button>
                        </div>
                    </div>
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
                        <source src={current.video} type="video/mp4"
                        />
                        Sorry, your browser doesn't support videos.
                    </video>
                </div>
            </div>
        </div>
    )
}


