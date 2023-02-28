import { useEffect, useState } from 'react'
import { IconArrowRight, IconLanguageOff, IconLoader2, IconMail, IconMoodAngry, IconMoodHappy, IconMoodNeutral } from '@tabler/icons'


import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export function EmailAPI() {


    const [useCaseInput, setUseCaseInput] = useState('Wow, this looks absolutely amazing!')
    function apiCall(useCaseInput) {
        return `curl -X POST \\
  https://app.kern.ai/workflow-api/workflows/3b521496-59ff-4281-b030-..../post-to-store/4b521496-59ff-4281-b030-..../then-listen-to-store/5b521496-59ff-4281-b030-.... \\
  -H 'Content-Type: application/json' \\
  -H 'Authorization: Bearer INSERT_KERN_API_KEY_HERE' \\
  -d '{"input":"${useCaseInput}"'

`
    }

    const examples = [
        "Wow, this looks absolutely amazing!",
        "I'm not sure if I like this.",
        "Interesting, but I don't think it's for me.",
    ]

    const [useCaseOutput, setUseCaseOutput] = useState(null)
    const [apiResponse, setApiResponse] = useState(null)

    const [loading, setLoading] = useState(false)
    const [responseTime, setResponseTime] = useState(null)

    useEffect(() => {
        if (loading) {
            const startTime = performance.now()

            setTimeout(() => {
                setUseCaseOutput({
                    "sentiment": "positive",
                    "sentiment_score": 0.958,
                    "language": "en",
                    "draft": "Thanks for your comment! We're glad you liked our product. We're working hard to make it even better."
                })
                setApiResponse(`{
    "record": {
        "input": "${useCaseInput}",
        "running_id": 0,
        "draft": "Thanks for your comment! We're glad you liked our product. We're working hard to make it even better.",
        "language": "en",
    },
    "results": {
        "sentiment": {
            "prediction": "positive",
            "confidence": 0.958,
            "heuristics": [
                {
                "name": "DistilbertLR",
                "prediction": "positive",
                "confidence": 0.93491
                },
                {
                "name": "DistilbertTree",
                "prediction": "positive",
                "confidence": 1
                }
            ]
        }
    }
}`)
                const endTime = performance.now()
                setResponseTime(Math.round(endTime - startTime))
                setLoading(false)
            }, 934)
        }
    }, [loading])




    return (


        <div>

            <div className='relative'>

                <div
                    className='absolute w-full h-full bg-gradient-to-b from-[#0d0d0d] to-[#0f0f0f] border border-neutral-900 rounded-2xl opacity-90'
                />

                <div className='p-6 relative flex flex-col space-y-6'>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='p-[1px] rounded-md bg-gradient-to-b from-gray-800 to-neutral-900'>
                            <div className='flex flex-row items-center justify-between px-4 py-1 text-gray-500 text-sm rounded-t-md bg-neutral-900 border-b border-gray-800'>
                                <div>
                                    Input (the email you received)
                                </div>
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-900 px-2 text-sm font-medium text-gray-500 hover:text-gray-200 hover:bg-neutral-800 focus:outline-none">
                                            Choose an example
                                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                {examples.map((example) => (
                                                    <Menu.Item key={example}>
                                                        {({ active }) => (
                                                            <div
                                                                className={classNames(
                                                                    active ? 'text-gray-100' : 'text-gray-400',
                                                                    'block px-4 py-2 text-sm cursor-pointer bg-neutral-900'
                                                                )}
                                                                onClick={() => setUseCaseInput(example)}
                                                            >
                                                                {example}
                                                            </div>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                            <textarea
                                rows={8}
                                name="comment"
                                id="comment"
                                className="h-44 text-gray-100 block w-full bg-gradient-to-b from-[#0f0f0f] to-[#141414] p-4 focus:outline-none sm:text-sm resize-none"
                                value={useCaseInput}
                                onChange={(e) => setUseCaseInput(e.target.value)}
                            />
                            <div
                                className='h-12 rounded-b-md bg-neutral-800 border-t border-gray-800 flex flex-row px-4 items-center text-sm text-gray-500'
                            >
                                {useCaseOutput ? (
                                    useCaseOutput.language == 'en' ? (
                                        <div className='flex flex-row items-center space-x-2'>
                                            <div className='flex items-center justify-center p-2 rounded-lg border border-gray-900 bg-neutral-900'>
                                                {useCaseOutput.sentiment === 'positive' ? (
                                                    <IconMoodHappy className='inline-block w-4 h-4 text-green-500' />
                                                ) : (
                                                    useCaseOutput.sentiment === 'negative' ? (
                                                        <IconMoodAngry className='inline-block w-4 h-4 text-red-500' />
                                                    ) : (
                                                        <IconMoodNeutral className='inline-block w-4 h-4 text-yellow-500' />
                                                    )
                                                )}
                                            </div>
                                            <div className=''>
                                                {useCaseOutput.sentiment} ({useCaseOutput.sentiment_score * 100}%)
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='flex flex-row items-center space-x-2'>
                                            <div className='flex items-center justify-center p-2 rounded-lg border border-gray-900 bg-neutral-900'>
                                                <IconLanguageOff className='inline-block w-4 h-4 text-gray-500' />
                                            </div>
                                            <div className=''>
                                                Unknown language
                                            </div>
                                        </div>
                                    )

                                ) : (
                                    "Hit the below button to classify this text."
                                )}
                            </div>
                        </div>
                        <div className='p-[1px] rounded-md bg-gradient-to-b from-gray-800 to-neutral-900 overflow-hidden'>
                            <div className='px-4 py-1 flex flex-row justify-between rounded-t-md bg-neutral-900 border-b border-gray-800 font-mono'>
                                <div className='text-gray-500 text-sm'>
                                    cURL
                                </div>
                                <a
                                    className='group text-gray-500 hover:text-gray-300 text-sm'
                                    href='https://docs.kern.ai'
                                    target='_blank'
                                    rel='noreferrer noopener'
                                >
                                    Docs
                                    <IconArrowRight className='inline-block w-4 h-4 ml-1 text-gray-500 group-hover:text-gray-300' />
                                </a>
                            </div>
                            <pre
                                className="h-56 block w-full bg-gradient-to-b from-[#0f0f0f] to-[#141414] p-4 rounded-b-md focus:outline-slate-800 font-mono text-xs text-green-500 overflow-auto"
                            >
                                {apiCall(useCaseInput.replace(/"/g, '\\"').replace(/\n/g, '\\n'))}
                            </pre>
                        </div>
                    </div>

                    <div className='p-[1px] rounded-lg bg-gradient-to-r from-neutral-900 via-green-700 to-neutral-900 hover:from-neutral-800 hover:via-green-600 hover:to-neutral-800'>
                        <button
                            className="h-16 w-full bg-[#141414] rounded-lg text-gray-200 flex flex-col items-center justify-center text-sm hover:bg-[#171717] active:bg-[#0f0f0f] hover:text-gray-300 transition-colors duration-200"
                            onClick={() => setLoading(true)}
                        >
                            <div className='flex flex-row items-center font-semibold'>
                                Calculate output
                                <IconArrowRight className='h-4 w-4 ml-2' />
                            </div>
                            <p className='text-gray-500 text-sm ml-2'>
                                Based on the sentiment of the input text, this generates a draft for a response.
                            </p>
                        </button>
                    </div>

                    <div className='grid grid-cols-2 gap-6'>
                        <div className='p-[1px] rounded-lg bg-gradient-to-t from-gray-800 to-neutral-900'>
                            <div className='flex flex-row justify-between px-4 py-1'>
                                <div className='text-gray-500 text-sm rounded-t-md'>
                                    Output (the generated response draft)
                                </div>
                                <button
                                    className="text-gray-500 hover:text-gray-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                    onClick={() => {
                                        setUseCaseOutput(null)
                                        setApiResponse(null)
                                    }}
                                    disabled={!useCaseOutput || loading}
                                >
                                    Clear
                                </button>
                            </div>
                            <div
                                className="h-44 w-full bg-gradient-to-b from-[#141414] to-[#171717] p-4  focus:outline-slate-800 text-gray-200 text-sm"
                            >
                                {loading ? (
                                    <div className='pt-12 flex items-center justify-center h-full'>
                                        <div className='rounded-full bg-stone-500 h-8 w-8 flex items-center justify-center'>
                                            <IconLoader2 className='animate-spin h-5 w-5 text-gray-700' />
                                        </div>
                                    </div>
                                ) : (
                                    useCaseOutput ? (
                                        useCaseOutput.language === 'en' ? (
                                            <span>{useCaseOutput.draft}</span>
                                        ) : (
                                            <div className='flex flex-col items-center justify-center h-full space-y-2'>
                                                <div className='flex flex-row space-x-1.5'>
                                                    In this example, only English is supported. In your own use case, you can use any language supported by the platform.
                                                </div>
                                            </div>
                                        )
                                    ) : (
                                        <div className='flex flex-col items-center justify-center h-full space-y-2'>
                                            <div className='flex flex-row space-x-1.5'>
                                                <span>Hit the above button to create a </span>
                                                <span
                                                    className='px-2 border border-gray-800 rounded-full text-gray-200 text-sm'
                                                >
                                                    <span
                                                        className='h-2 w-2 rounded-full bg-orange-500 inline-block mr-1.5'
                                                    />
                                                    draft
                                                </span>
                                            </div>
                                            <div className='flex flex-row space-x-1.5'>
                                                <span>fitting the</span>
                                                <span
                                                    className='px-2 border border-gray-800 rounded-full text-gray-200 text-sm'
                                                >

                                                    <span
                                                        className='h-2 w-2 rounded-full bg-green-500 inline-block mr-1.5'
                                                    />
                                                    sentiment
                                                </span>
                                                <span>of your input.</span>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                            <div
                                className='h-12 rounded-b-md bg-neutral-800 border-t border-gray-800 flex flex-row px-4 items-center text-sm text-gray-500'
                            >
                                Integrate directly into your Outlook or GMail client.
                            </div>
                        </div>


                        <div className='p-[1px] rounded-lg bg-gradient-to-t from-gray-800 to-neutral-900 overflow-hidden'>
                            <div className='flex flex-row justify-between px-4 py-1 text-gray-500 text-sm rounded-t-md'>
                                <div>
                                    Response
                                </div>
                                <div>
                                    {responseTime && (
                                        <span className='px-1.5 border border-gray-800 rounded-lg text-gray-500 text-xs'>
                                            {responseTime} ms
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div
                                className="h-56 block w-full bg-gradient-to-b from-[#141414] to-[#171717] p-4 rounded-b-md focus:outline-slate-800 text-green-500 text-sm font-mono overflow-auto"
                            >
                                {loading ? (
                                    <div className='flex items-center justify-center h-full'>
                                        <div className='rounded-full bg-green-500 h-8 w-8 flex items-center justify-center'>
                                            <IconLoader2 className='animate-spin h-5 w-5 text-gray-200' />
                                        </div>
                                    </div>
                                ) : (
                                    apiResponse ? (
                                        <pre className='text-xs'>
                                            {apiResponse}
                                        </pre>
                                    ) : (
                                        <div className='flex items-center justify-center h-full'>
                                            The response will appear here.
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-row space-x-6'>
                        <a
                            className='bg-[#171717] group flex flex-row items-center pl-2 pr-3 py-1 rounded-lg border border-gray-800 text-gray-100 text-sm space-x-2'
                            href='https://www.youtube.com/watch?v=yeML0vX0yLw&ab_channel=KernAI'
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            <span>
                                <IconArrowRight className='h-4 w-4 rounded-full border border-gray-800 group-hover:-rotate-45 group-hover:text-green-500 transition-transform duration-200' />
                            </span>
                            <span
                                className='group-hover:text-green-500'
                            >
                                See details (customization)
                            </span>
                        </a>
                        <a
                            className='bg-[#171717] group flex flex-row items-center pl-2 pr-3 py-1 rounded-lg border border-gray-800 text-gray-100 text-sm space-x-2'
                            href='https://www.youtube.com/watch?v=yeML0vX0yLw&ab_channel=KernAI'
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            <span>
                                <IconArrowRight className='h-4 w-4 rounded-full border border-gray-800 group-hover:-rotate-45 group-hover:text-green-500 transition-transform duration-200' />
                            </span>
                            <span
                                className='group-hover:text-green-500'
                            >
                                See how this was built
                            </span>
                        </a>
                        <a
                            className='bg-[#171717] group flex flex-row items-center pl-2 pr-3 py-1 rounded-lg border border-gray-800 text-gray-100 text-sm space-x-2'
                            href='https://www.youtube.com/watch?v=yeML0vX0yLw&ab_channel=KernAI'
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            <span>
                                <IconArrowRight className='h-4 w-4 rounded-full border border-gray-800 group-hover:-rotate-45 group-hover:text-green-500 transition-transform duration-200' />
                            </span>
                            <span
                                className='group-hover:text-green-500'
                            >
                                See workflow in action
                            </span>
                        </a>
                    </div>
                </div>

            </div>
        </div >
    )
}


