import React, { useEffect, useState } from 'react'
import {
    BellIcon,
    CalendarIcon,
    PencilIcon,
} from '@heroicons/react/20/solid'
import { IconLoader2, IconMicrophone, IconPencil, IconSeo } from '@tabler/icons'
import { IconChevronDown, IconPlayerPause, IconPlayerPlay } from '@tabler/icons'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
    ChevronDownIcon,
} from '@heroicons/react/20/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Enduser() {

    const audioFiles = [{
        imgSrc: 'leo-speaker.png',
        name: 'Newest blog post',
        file: 'slackbot.mp3',
    }]

    const navigation = [
        {
            name: 'Integrates with',
            children: [
                { name: 'Strapi' },
            ],
        },
    ]

    const [audioPlaying, setAudioPlaying] = useState(false)
    const [selectedAudio, setSelectedAudio] = useState(audioFiles[0])
    const [showTranscribed, setShowTranscribed] = useState(false)
    const [isLoadingTranscript, setIsLoadingTranscript] = useState(false)
    const [isTransformedContent, setIsTransformedContent] = useState(false)
    const [showTransformedContent, setShowTransformedContent] = useState(false)
    const [isLoadingTransformedContent, setIsLoadingTransformedContent] = useState(false)

    useEffect(() => {
        if (!showTranscribed) {
            setIsTransformedContent(false)
        }
    }, [showTranscribed])

    useEffect(() => {
        if (isLoadingTranscript) {
            setTimeout(() => {
                setIsLoadingTranscript(false)
                setShowTranscribed(true)
                setIsLoadingTransformedContent(true)
            }, 2000)
        }
    }, [isLoadingTranscript])

    useEffect(() => {
        if (isLoadingTransformedContent) {
            setTimeout(() => {
                setIsLoadingTransformedContent(false)
                setIsTransformedContent(true)
            }, 2000)
        }
    }, [isLoadingTransformedContent])

    return (
        <>
            {showTranscribed ? (
                <div className='p-[1px] h-[48rem] rounded-xl bg-gradient-to-b from-neutral-600 to-neutral-900'>
                    <div className="flex min-h-full bg-neutral-900 rounded-xl">
                        {/* Static sidebar for desktop */}
                        <div className="lg:inset-y-0 lg:flex lg:w-64">
                            {/* Sidebar component, swap this element with another sidebar if you like */}
                            <div className="flex min-h-0 flex-1 flex-col">
                                <div className="flex h-16 flex-shrink-0 items-center border-b border-r border-gray-800 bg-[#1c1c1c] px-4 rounded-tl-xl">

                                </div>
                                <div className="flex flex-1 flex-col overflow-y-auto border-r border-gray-800 bg-[#1c1c1c] rounded-bl-xl">
                                    <nav className="flex flex-col space-y-4 pl-4 pr-8 py-4">
                                        <div
                                            className='bg-neutral-700 h-2.5 w-full rounded-full'
                                        />
                                        <div
                                            className='bg-neutral-800 h-2.5 w-1/2 rounded-full'
                                        />
                                        <div
                                            className='bg-neutral-800 h-2.5 w-1/2 rounded-full'
                                        />
                                        <div
                                            className='bg-neutral-800 h-2.5 w-1/2 rounded-full'
                                        />

                                        <div
                                            className='bg-neutral-700 h-2.5 w-full rounded-full'
                                        />
                                        <div
                                            className='bg-neutral-800 h-2.5 w-1/2 rounded-full'
                                        />
                                        <div
                                            className='bg-neutral-800 h-2.5 w-1/2 rounded-full'
                                        />
                                        <div
                                            className='bg-neutral-800 h-2.5 w-1/2 rounded-full'
                                        />
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-0 flex-1 flex-col">
                            <div className="sticky top-0 z-10 flex h-16 items-center justify-between flex-shrink-0 border-b border-gray-800 bg-neutral-900 rounded-tr-xl">
                                <span
                                    className='ml-8 text-gray-300 text-sm hover:text-gray-100 cursor-pointer'
                                    onClick={() => setShowTranscribed(false)}
                                >
                                    Go back to audio recording
                                </span>
                                {navigation.map((item) =>
                                    item.children.length ? (
                                        <Menu as="div" key={item.name} className="mr-8 relative text-left">
                                            <Menu.Button className="flex items-center rounded-md text-sm font-medium text-gray-100 focus:outline-none hover:text-gray-300">
                                                <span>{item.name}</span>
                                                <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" aria-hidden="true" />
                                            </Menu.Button>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-neutral-900 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        {item.children.map((child) => (
                                                            <Menu.Item key={child.name}>
                                                                {({ active }) => (
                                                                    <div
                                                                        className={classNames(
                                                                            active ? 'bg-neutral-800' : '',
                                                                            'block px-4 py-2 text-sm text-gray-300'
                                                                        )}
                                                                    >
                                                                        {child.name}
                                                                    </div>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    ) : (
                                        <a key={item.name} href={item.href} className="text-sm font-medium text-gray-100">
                                            {item.name}
                                        </a>
                                    )
                                )}
                            </div>
                            <main className="flex-1">
                                <div className="py-2 xl:py-2">
                                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8  xl:max-w-5xl">
                                        {showTransformedContent ? (
                                            <div className='mt-4 xl:grid xl:grid-cols-3'>
                                                <div className="xl:col-span-2 xl:border-r xl:border-gray-800 xl:pr-8">
                                                    <div>
                                                        <div>
                                                            <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6 xl:border-gray-800">
                                                                <div>
                                                                    <h1 className="text-2xl font-bold text-gray-100">Stocknews Slackbot</h1>
                                                                </div>
                                                                <div className="mt-4 flex space-x-3 md:mt-0">
                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex justify-center rounded-md border border-gray-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-gray-300 shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                                                        disabled
                                                                    >
                                                                        <IconPencil className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                                                        <span>Edit</span>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex justify-center rounded-md border border-gray-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-gray-300 shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                                                        onClick={() => setShowTransformedContent(false)}
                                                                    >
                                                                        <IconMicrophone className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                                                        <span>See full transcript</span>
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            <div className="py-3 xl:pt-6 xl:pb-0">
                                                                <div className="max-h-[34rem] h-screen prose max-w-none text-gray-500">
                                                                    <p>
                                                                        Have you ever wanted to get the latest stock news in Slack? Enriched with sentiment, so you know if positive or negative things are happening? Well, now you can!

                                                                        In this post, I'm going to show you how to build a Slackbot that will send you the latest stock news, enriched with sentiment, in Slack. For this, we'll need:
                                                                    </p>
                                                                    <ul role="list">
                                                                        <li>
                                                                            An API in workflow, which will fetch the latest stock news and enrich it with sentiment.
                                                                        </li>
                                                                        <li>A classifier in refinery that can enrich newly incoming data with gates.</li>
                                                                        <li>
                                                                            A webhook to a Slack channel, which will send the enriched data to Slack.
                                                                        </li>
                                                                    </ul>
                                                                    <p>
                                                                        Let's get started!
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <aside className="hidden xl:block xl:pl-8">
                                                    <h2 className="sr-only">Details</h2>
                                                    <div className="space-y-5">

                                                        <div className="mt-4 flex items-center space-x-2">
                                                            <CalendarIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
                                                            <span className="text-sm font-medium text-gray-100">
                                                                Created on <time dateTime="2020-12-02">{new Date().toLocaleDateString()}</time>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 space-y-8 border-t border-gray-800 py-6">

                                                        <div>
                                                            <h2 className="text-sm font-medium text-gray-400">Tags</h2>
                                                            <ul role="list" className="mt-2 leading-8">
                                                                <li className="inline">
                                                                    <a
                                                                        href="#"
                                                                        className="relative inline-flex items-center rounded-full border border-gray-800 px-3 py-0.5"
                                                                    >
                                                                        <div className="absolute flex flex-shrink-0 items-center justify-center">
                                                                            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                                                                        </div>
                                                                        <div className="ml-3.5 text-sm font-medium text-gray-100">Knowledge</div>
                                                                    </a>{' '}
                                                                </li>
                                                                <li className="inline">
                                                                    <a
                                                                        href="#"
                                                                        className="relative inline-flex items-center rounded-full border border-gray-800 px-3 py-0.5"
                                                                    >
                                                                        <div className="absolute flex flex-shrink-0 items-center justify-center">
                                                                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                                                                        </div>
                                                                        <div className="ml-3.5 text-sm font-medium text-gray-100">Tutorial</div>
                                                                    </a>{' '}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </aside>
                                            </div>
                                        ) : (
                                            <div className='mt-4 xl:grid xl:grid-cols-3'>
                                                <div className="xl:col-span-2 xl:border-r xl:border-gray-800 xl:pr-8">
                                                    <div>
                                                        <div>
                                                            <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6 xl:border-gray-800">
                                                                <div>
                                                                    <h1 className="text-2xl font-bold text-gray-100">Transcript</h1>
                                                                </div>
                                                                <div className="mt-4 flex space-x-3 md:mt-0">

                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex justify-center rounded-md border border-gray-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-gray-300 shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                                                        onClick={() => setShowTransformedContent(true)}
                                                                        disabled={!isTransformedContent}
                                                                    >
                                                                        <IconSeo className="-ml-1 mt-0.5 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                                                        {!isTransformedContent ? (
                                                                            <span className='flex flex-row items-center space-x-1'>
                                                                                Creating post draft

                                                                                <IconLoader2 className="animate-spin -mr-1 ml-2 h-4 w-4 text-gray-500" aria-hidden="true" />
                                                                            </span>
                                                                        ) : (
                                                                            <span>See post draft</span>

                                                                        )}
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            <div className="py-3 xl:pt-6 xl:pb-0">
                                                                <h2 className="sr-only">Description</h2>
                                                                <div className="prose max-w-none text-gray-500">
                                                                    <p className='h-screen max-h-[34rem] overflow-auto'>
                                                                        Ok, so I have this idea for a slackbot that is able to fetch news about the stocks that I own and send out the sentiment of these news. I would need an API which I could use in workflow: After that, I could build a classifier in refinery and enrich newly incoming data with gates. Once that's done, I can simply send out my data via a webhook to a slack channel.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <aside className="mt-4 hidden xl:block xl:pl-8">
                                                    <h2 className="sr-only">Details</h2>
                                                    <div className="space-y-5">

                                                        <div className="flex items-center space-x-2">
                                                            <CalendarIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
                                                            <span className="text-sm font-medium text-gray-100">
                                                                Created on <time dateTime="2020-12-02">{new Date().toLocaleDateString()}</time>
                                                            </span>
                                                        </div>
                                                    </div>

                                                </aside>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </main>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <svg viewBox="0 0 366 729" role="img" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                        <defs>
                            <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                                <rect width={316} height={684} rx={36} />
                            </clipPath>
                        </defs>
                        <path
                            fill="#4B5563"
                            d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                        />
                        <path
                            fill="#343E4E"
                            d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                        />
                        <foreignObject
                            width={316}
                            height={684}
                            transform="translate(24 24)"
                            clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                        >

                            <div className='flex h-full items-end justify-center'>
                                <img
                                    src="/gradient-bg.png"
                                    className='absolute w-full h-full object-cover grayscale opacity-50'
                                />
                                <div className='my-4 flex items-center relative py-6 px-4 rounded-3xl bg-neutral-200 bg-opacity-50 shadow-md border border-gray-500'>
                                    <div>
                                        <div className='flex flex-col space-y-4 p-2 rounded-2xl bg-neutral-900 border-gray-800 w-fit'>
                                            <div className='flex flex-row bg-neutral-800 rounded-full space-x-5'>
                                                <img
                                                    src={`/audio/${selectedAudio.imgSrc}`}
                                                    className='w-8 h-8 rounded-full'
                                                />

                                                <div className='flex flex-row items-center text-sm text-gray-300 space-x-2'>
                                                    <span>{selectedAudio.name}</span>
                                                    <IconChevronDown className='w-4 h-4 text-gray-500' />
                                                </div>

                                                <button
                                                    onClick={() => {
                                                        if (audioPlaying) {
                                                            document.getElementById('player').pause()
                                                            setAudioPlaying(false)
                                                        } else {
                                                            document.getElementById('player').play()
                                                            setAudioPlaying(true)
                                                        }
                                                    }}
                                                    className={classNames(
                                                        audioPlaying ? 'bg-red-500' : 'bg-green-500',
                                                        'flex flex-row items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ease-in-out'
                                                    )}
                                                >
                                                    {audioPlaying ? (
                                                        <IconPlayerPause size={20} />
                                                    ) : (
                                                        <IconPlayerPlay size={20} />
                                                    )}
                                                </button>
                                            </div>
                                            <div
                                                className='flex flex-row items-center justify-center  p-[1px] bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 rounded-full'
                                            >
                                                <button
                                                    className='flex flex-row items-center justify-center w-full p-2 bg-black rounded-full text-white text-sm'
                                                    onClick={() => {
                                                        setIsLoadingTranscript(true)
                                                    }}
                                                >
                                                    Transcribe audio
                                                    {isLoadingTranscript && (
                                                        <IconLoader2 className='w-4 h-4 text-gray-500 animate-spin ml-1' />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                        <audio id="player" src={`/audio/${selectedAudio.file}`} />
                                    </div>
                                </div>
                            </div>
                        </foreignObject>
                    </svg>
                </div>
            )}
        </>
    )
}
