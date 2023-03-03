import { IconAlignLeft, IconArrowLeft, IconArrowRight, IconCategory2, IconMailOpened, IconNote, IconPhone, IconPhoneCall, IconRoute, IconUsers } from '@tabler/icons'
import { useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // this must be imported to enable the charts plugin; don't remove it!

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Manager() {

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
            description: 'Transcribe and analyze calls to improve customer experience and reduce costs.'
        },
        {
            name: 'Sales follow-up',
            icon: <IconMailOpened size={24} className='text-gray-200' />,
            description: 'Transcribe and analyze sales calls and follow up with customers to close more deals.'
        },
        {
            name: 'Meeting notes',
            icon: <IconUsers size={24} className='text-gray-200' />,
            description: 'Automatically protocol, share and analyze meeting notes and infer action items.'
        },
        {
            name: 'Content creation',
            icon: <IconAlignLeft size={24} className='text-gray-200' />,
            description: 'Automatically create content for your website, shop or blog and optimize for SEO.'
        },
    ])

    return (
        <>
            <div className="relative isolate overflow-hidden px-6 py-10 sm:py-12 lg:overflow-visible lg:px-0">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-green-400">Integrate NLP into your processes</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">"What can ChatGPT do for my business?"</h1>
                                <p className="mt-6 text-xl leading-8 text-gray-300">
                                    We get this question on a daily basis. And it's not just ChatGPT, but so much more. Embed and chain powerful NLP models into your processes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-16 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">

                        <div className='relative'>
                            {!showRoI && (
                                <div
                                    className='grid grid-cols-2 gap-8'
                                >
                                    {useCases.map((useCase, index) => (
                                        <div
                                            className='relative'
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
                                                    <span> More details</span>
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
                                        <span> Go back</span>
                                    </button>

                                    <div
                                        className='absolute w-full h-full bg-gradient-to-b from-[#0d0d0d] to-[#0f0f0f] border border-neutral-900 rounded-2xl opacity-90'
                                    />

                                    <div className='p-6 relative flex flex-col space-y-6'>
                                        <div className=''>
                                            <div className='p-[1px] rounded-md bg-gradient-to-b from-gray-800 to-neutral-900'>
                                                <div className='flex flex-row items-center justify-between px-4 py-1 text-gray-500 text-sm rounded-t-md bg-neutral-900 border-b border-gray-800'>
                                                    Operational benefits
                                                </div>
                                                <div
                                                    className="h-52 text-gray-100 block w-full bg-gradient-to-b from-[#0f0f0f] to-[#141414] p-4 focus:outline-none sm:text-sm resize-none"
                                                >
                                                    <label for="minmax-range" className="block mb-2 text-sm font-medium text-gray-500">
                                                        {showRoI.name == 'Call center' && (
                                                            "How many calls does your call center have per month?"
                                                        )}
                                                        {showRoI.name == 'Sales follow-up' && (
                                                            "How many sales calls does your team have per month?"
                                                        )}
                                                        {showRoI.name == 'Meeting notes' && (
                                                            "How many meetings does your team have per month?"
                                                        )}
                                                        {showRoI.name == 'Content creation' && (
                                                            "How many content pieces does your team create per month?"
                                                        )}
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
                                                            <span className='font-semibold'>{sliderValue}</span> mails
                                                        </span>
                                                    </div>
                                                    <div className='mt-2'>
                                                        <p className='text-gray-400 text-sm'>
                                                            <span className='font-semibold text-green-500'>{Math.round(sliderValue * 0.95)}</span> mails will automatically be enriched (e.g. category, sentiment, language) and forwarded to the right department.
                                                        </p>
                                                        <p className='text-gray-400 text-sm'>
                                                            <span className='font-semibold text-green-500'>{Math.round(sliderValue * 0.5)}</span> mails will get an automated response draft.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-row items-center justify-between px-4 py-1 text-gray-500 text-sm border-t bg-neutral-900 border-b border-gray-800'>
                                                    Analytical benefits
                                                </div>
                                                <div
                                                    className="flex flex-col h-60 text-gray-100 block w-full bg-gradient-to-b from-[#141414] to-[#111111] p-4 focus:outline-none sm:text-sm resize-none"
                                                >
                                                    <div className='mt-2 flex flex-row'>
                                                        <div
                                                            className='-ml-10'
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
                                                            className='-ml-28'
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
                                                            Gain <span className='font-semibold text-green-500'>relevant insights</span> directly from your inbox.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div
                                                    className='h-12 rounded-b-md bg-neutral-800 border-t border-gray-800 flex flex-row pl-4 pr-2 items-center justify-between text-sm text-gray-500'
                                                >
                                                    <span>
                                                        Help your team to work smarter
                                                    </span>
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center px-2 py-1 border border-gray-800 text-sm font-medium rounded-md shadow-sm text-gray-200 bg-neutral-900 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                                    >
                                                        Get started
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-300 lg:max-w-lg">
                                <p>
                                    Every company has generic inboxes; think of the typical info@, support@, or sales@ inbox (even we have them). Making them smarter is an incredible time saver for your team. Let's see how:
                                </p>
                                <ul role="list" className="mt-8 space-y-8 text-gray-500">
                                    <li className="flex gap-x-3">
                                        <IconCategory2 className="mt-1 h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                                        <span>
                                            <strong className="font-semibold text-gray-100">Automate categorization.</strong> Every incoming email receives a category, helping you to forward mails to the right department and giving you insights about sentiment, urgency or language.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <IconNote className="mt-1 h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                                        <span>
                                            <strong className="font-semibold text-gray-100">Automate response drafting.</strong> Imagine that you enter your inbox, and 50% of your mails already have drafts generated for you. Read it, edit it, send it. Done.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <IconRoute className="mt-1 h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                                        <span>
                                            <strong className="font-semibold text-gray-100">Conditional flows.</strong> Create conditional flows helping you focus on what matters. For instance, get notified when a mail is really urgent. Or when your NLP wasn't confident and you should take a look.
                                        </span>
                                    </li>
                                </ul>
                                <p className="mt-8">
                                    The implications are clear: your team can save a lot of time while ensuring a fast and consistent response to recipients. And on top of this, you can get tons of insights about characteristics of your incoming mails.
                                </p>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-100">Email hasn't seen innovation for decades.</h2>
                                <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-100">We change that.</h2>
                                <p className="mt-6">
                                    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                                    Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                                    tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                                    turpis ipsum eu a sed convallis diam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
