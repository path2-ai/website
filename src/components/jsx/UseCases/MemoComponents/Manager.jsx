import { IconAlignLeft, IconArrowLeft, IconArrowRight, IconArrowsShuffle, IconBulb, IconCategory2, IconMailOpened, IconMicrophone, IconNote, IconPhone, IconPhoneCall, IconRoute, IconUsers } from '@tabler/icons'
import { useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // this must be imported to enable the charts plugin; don't remove it!
import { CalModal } from '../../CalModal';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Manager() {

    const [openCalModal, setOpenCalModal] = useState(false)

    const dataSentiment = {
        labels: [
            'Positive',
            'Neutral',
            'Negative'
        ],
        datasets: [{
            label: 'Sentiment',
            data: [300, 50, 100],
            backgroundColor: [
                '#16a34a',
                '#ca8a04',
                '#dc2626'
            ],
            hoverOffset: 4
        }]
    };

    const dataIntent = {
        labels: [
            'Outreach',
            'Feedback',
            'Support',
            'Other'
        ],
        datasets: [{
            label: 'Intent',
            data: [300, 50, 100, 200],
            backgroundColor: [
                '#16a34a',
                '#ca8a04',
                '#dc2626',
                '#2563eb'
            ],
            hoverOffset: 4
        }]
    };

    const [sliderValue, setSliderValue] = useState(50)
    const [showRoI, setShowRoI] = useState(null)

    const [useCases, setUseCases] = useState([
        {
            name: 'Call center',
            icon: <IconPhoneCall size={24} className='text-gray-200' />,
            description: 'Transcribe and analyze calls to improve customer experience and reduce costs.',
            question: "How many calls does your call center have per month?",
            unit: "calls"
        },
        {
            name: 'Sales follow-up',
            icon: <IconMailOpened size={24} className='text-gray-200' />,
            description: 'Transcribe and analyze sales calls and follow up with customers to close more deals.',
            question: "How many sales calls does your team have per month?",
            unit: "calls"
        },
        {
            name: 'Meeting notes',
            icon: <IconUsers size={24} className='text-gray-200' />,
            description: 'Automatically protocol, share and analyze meeting notes and infer action items.',
            question: "How many meetings does your team have per month?",
            unit: "meetings"
        },
        {
            name: 'Content creation',
            icon: <IconAlignLeft size={24} className='text-gray-200' />,
            description: 'Automatically create content for your website, shop or blog and optimize for SEO.',
            question: "How many content pieces does your team create per month?",
            unit: "pieces"
        },
    ])

    return (
        <>
            <div className="relative isolate overflow-hidden lg:px-6 py-10 sm:py-12 lg:overflow-visible lg:px-0">
                <div className="mx-auto grid max-w-2xl gap-y-4 lg:gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-green-400">Integrate NLP into your processes</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">"What can ChatGPT do for my business?"</h1>
                                <p className="mt-6 lg:text-xl lg:leading-8 text-gray-300">
                                    We get this question on a daily basis. And it's not just ChatGPT, but so much more. Embed and chain powerful NLP models into your processes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-300 lg:max-w-lg">
                                <p>
                                    Every company has processes running mainly on communication, collaboration and creativity. We know that these processes can be optimized by using AI to automate repetitive tasks and to provide insights that help to make better decisions.
                                </p>
                                <ul role="list" className="mt-4 space-y-4 lg:mt-8 lg:space-y-8 text-gray-500">
                                    <li className="flex gap-x-3">
                                        <IconBulb className="mt-1 h-5 w-5 flex-none text-yellow-400" aria-hidden="true" />
                                        <span className="text-sm lg:text-base">
                                            <strong className="font-semibold text-gray-100">Automate insights.</strong> Every idea, ticket or post receives a category, giving you insights about sentiment, urgency or language.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <IconMicrophone className="mt-1 h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                                        <span className="text-sm lg:text-base">
                                            <strong className="font-semibold text-gray-100">Text-to-text, voice-to-text.</strong> Build transformations that turn voice into text, and text into modified text. For instance, to create a detailed ticket from a voice message.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <IconArrowsShuffle className="mt-1 h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                                        <span className="text-sm lg:text-base">
                                            <strong className="font-semibold text-gray-100">Structure-to-text, text-to-structure</strong> Turn any complex text into a structured format, and vice versa. For instance, turn spreadsheets describing products into SEO-optimized texts.
                                        </span>
                                    </li>
                                </ul>
                                <p className="mt-4 lg:mt-8">
                                    The implications are clear: your team can save a lot of time while generating better content, e.g. in sales, in support or other roles.
                                </p>
                                <h2 className="mt-8 lg:mt-16 text-2xl font-bold tracking-tight text-gray-100">ChatGPT is only the beginning.</h2>
                                <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-100">Put NLP into action for you.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:p-16 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <div className='relative'>
                            {!showRoI && (
                                <div
                                    className='grid xl:grid-cols-2 gap-4 xl:gap-8'
                                >
                                    {useCases.map((useCase, index) => (
                                        <div
                                            className='relative'
                                            key={index}
                                        >
                                            <div
                                                className='absolute w-full h-full bg-gradient-to-b from-[#0d0d0d] to-[#0f0f0f] border border-neutral-900 rounded-2xl opacity-90'
                                            />
                                            <div className='flex flex-col m-3 relative border border-gray-800 rounded-lg bg-neutral-900 p-4 space-y-3'>
                                                <div className='flex flex-row items-center space-x-3 '>
                                                    <div>
                                                        {useCase.icon}
                                                    </div>
                                                    <h3 className='text-gray-200 font-semibold'>
                                                        {useCase.name}
                                                    </h3>
                                                </div>
                                                <div>
                                                    <p className='text-gray-400 text-sm'>
                                                        {useCase.description}
                                                    </p>
                                                </div>
                                                <button
                                                    className='group flex flex-row items-center space-x-2 text-sm text-gray-200 hover:text-green-500'
                                                    onClick={() => setShowRoI(useCase)}
                                                >
                                                    <span>More details</span>
                                                    <IconArrowRight className='text-gray-200 group-hover:text-green-500' size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {showRoI && (
                                <div>
                                    <button
                                        className='mb-2 flex flex-row items-center space-x-2 text-sm text-gray-200 hover:text-green-500 group'
                                        onClick={() => setShowRoI(null)}
                                    >
                                        <IconArrowLeft className='text-gray-200 group-hover:text-green-500' size={16} />
                                        <span>Go back</span>
                                    </button>

                                    <div
                                        className='absolute w-full h-full bg-gradient-to-b from-[#0d0d0d] to-[#0f0f0f] border border-neutral-900 rounded-2xl opacity-90'
                                    />

                                    <div className='relative flex flex-col space-y-6'>
                                        <div className=''>
                                            <div className='p-[1px] rounded-md bg-gradient-to-b from-gray-800 to-neutral-900'>
                                                <div className='flex flex-row items-center justify-between px-4 py-1 text-gray-500 text-sm rounded-t-md bg-neutral-900 border-b border-gray-800'>
                                                    Operational benefits
                                                </div>
                                                <div
                                                    className="h-66 text-gray-100 block w-full bg-gradient-to-b from-[#0f0f0f] to-[#141414] p-4 focus:outline-none sm:text-sm resize-none"
                                                >
                                                    <label for="minmax-range" className="block mb-2 text-sm font-medium text-gray-500">
                                                        {showRoI.question}
                                                    </label>
                                                    <input
                                                        id="minmax-range"
                                                        type="range"
                                                        min={0}
                                                        max={500}
                                                        value={sliderValue}
                                                        onChange={(e) => setSliderValue(e.target.value)}
                                                        className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                                                    />
                                                    <div className='mt-1 flex justify-end'>
                                                        <span
                                                            className='text-sm rounded-md border border-neutral-800 bg-neutral-900 w-fit px-2 py-1 text-sm'
                                                        >
                                                            <span className='font-semibold'>{sliderValue}</span> {showRoI.unit}
                                                        </span>
                                                    </div>
                                                    <div className='mt-2'>
                                                        <p className='text-gray-400 text-sm'>
                                                            <span className='font-semibold text-green-500'>All</span> {showRoI.unit} will automatically be transcribed at highest quality.
                                                        </p>
                                                        <p className='text-gray-400 text-sm'>
                                                            <span className='font-semibold text-green-500'>{Math.round(sliderValue * 0.95)}</span> {showRoI.unit} will automatically be enriched with relevant metadata (e.g. sentiment, entities, topics, etc.).
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-row items-center justify-between px-4 py-1 text-gray-500 text-sm border-t bg-neutral-900 border-b border-gray-800'>
                                                    Analytical benefits
                                                </div>
                                                <div
                                                    className="flex flex-col h-88 text-gray-100 block w-full bg-gradient-to-b from-[#141414] to-[#111111] p-4 focus:outline-none sm:text-sm resize-none"
                                                >
                                                    <div className='mt-2 flex flex-col'>
                                                        <div
                                                            className=''
                                                        >
                                                            <Doughnut
                                                                data={dataSentiment}
                                                                options={{
                                                                    responsive: true,
                                                                    maintainAspectRatio: false,
                                                                    plugins: {
                                                                        legend: {
                                                                            display: false,
                                                                        },
                                                                    },
                                                                    borderColor: '#171717',
                                                                }}
                                                            />
                                                        </div>
                                                        <div
                                                            className='mt-10'
                                                        >
                                                            <Doughnut
                                                                data={dataIntent}
                                                                options={{
                                                                    responsive: true,
                                                                    maintainAspectRatio: false,
                                                                    plugins: {
                                                                        legend: {
                                                                            display: false,
                                                                        },
                                                                    },
                                                                    borderColor: '#171717',
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='mt-6'>
                                                        <p className='text-gray-400 text-sm'>
                                                            Gain <span className='font-semibold text-green-500'>relevant insights</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div
                                                    className='h-12 rounded-b-md bg-neutral-800 border-t border-gray-800 flex flex-row pl-4 pr-2 items-center justify-between text-sm text-gray-500'
                                                >
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center px-2 py-1 border border-gray-800 text-sm font-medium rounded-md shadow-sm text-gray-200 bg-neutral-900 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                                        onClick={() => setOpenCalModal(true)}
                                                    >
                                                        Contact the founder
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <CalModal open={openCalModal} setOpen={setOpenCalModal} />
            </div>
        </>
    )
}
