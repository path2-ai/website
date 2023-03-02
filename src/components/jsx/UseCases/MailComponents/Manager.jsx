import { IconCategory2, IconNote, IconRoute } from '@tabler/icons'
import { useState } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Manager() {

    const [sliderValue, setSliderValue] = useState(50)

    return (
        <>
            <div className="relative isolate overflow-hidden px-6 py-10 sm:py-12 lg:overflow-visible lg:px-0">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-green-400">Shortage of skilled labor</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">The truly intelligent inbox</h1>
                                <p className="mt-6 text-xl leading-8 text-gray-300">
                                    You're working with emails every single day. It is the universal communication tool. But it's not very smart. We're here to change that.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-16 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">

                        <div className='relative'>

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
                                                How many emails are entered into your central inbox per day?
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
                                            className="h-44 text-gray-100 block w-full bg-gradient-to-b from-[#141414] to-[#111111] p-4 focus:outline-none sm:text-sm resize-none"

                                        >
                                        </div>
                                        <div
                                            className='h-12 rounded-b-md bg-neutral-800 border-t border-gray-800 flex flex-row px-4 items-center text-sm text-gray-500'
                                        >
                                            x
                                        </div>
                                    </div>
                                </div>
                            </div>
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
