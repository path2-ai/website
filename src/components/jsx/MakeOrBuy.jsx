import { useEffect, useState } from 'react'
import { Circular } from '@/util/Circular'
import { IconArrowRight, IconBallon, IconBulb, IconChecklist, IconFileText, IconHeartHandshake, IconMessages, IconMicrophone } from '@tabler/icons'
import { PlatformBenefits } from './PlatformBenefits'

const slider = new Circular(["email-intelligence", "voice-processing", "document-processing"])
const data = [{
    key: "email-intelligence",
    title: "Email intelligence",
    description: "It's time to turn your generic info@-inbox into an AI superpower. Automatically categorize incoming mails, detect sentiment (e.g. positive, negative, neutral) and extract information (e.g. name, address, phone number, etc.) from them. Autogenerate response drafts and use the extracted information to automate your business processes.",
    href: 'email-automation'
}, {
    key: "voice-processing",
    title: "Voice processing",
    description: "Transcribe voice recordings with highest accuracy, and automatically turn the transcripts into actionable items. Use the extracted information to automate your business processes, or transform the transcripts via simple instructions into formats like articles, posts and many more.",
    href: 'content-generation'
}, {
    key: "document-processing",
    title: "Document processing",
    description: "Turn your PDF documents into machine-readable data, even for niche cases specific to your company. Finally solve the longtail of your document processing needs with NLP.",
    href: 'document-processing'
}]

const timeline = [
    {
        id: 1,
        title: 'Workshop',
        description: 'We will run a workshop with you and your colleagues in a 1 - 2 hour session, diving into different use cases and what ideal solutions would look like for you.',
        result: 'After the workshop, we will have a completed lean NLP canvas.',
        icon: IconBulb,
        link: '/company/lean-nlp-canvas',
        iconBackground: 'bg-gray-900',
    },
    {
        id: 2,
        title: 'First implementation',
        description: 'Within one week only, we will have the use case up and running for you - including NLP model and setup. If you have no access to data, we will generate realistic data given a handful of examples from your side.',
        result: 'We will have a running workflow set up for you.',
        icon: IconBallon,
        iconBackground: 'bg-gray-700',
    },
    {
        id: 3,
        title: 'Workshop review',
        description: 'We will run another workshop with you, reviewing the solution and planning out further next steps with you.',
        result: 'After the workshop, you will know how NLP can be used in your business and have a running solution to start with.',
        icon: IconChecklist,
        iconBackground: 'bg-lime-800',
    },
    {
        id: 4,
        title: 'Continued support',
        description: 'You can expect ongoing, first-class support from us. We will help you with any questions you might have and help you to further improve your solution.',
        icon: IconHeartHandshake,
        iconBackground: 'bg-lime-800',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function MakeOrBuy() {

    const [showUseCase, setShowUseCase] = useState(slider.current())
    const [current, setCurrent] = useState(data[0])

    useEffect(() => {
        setCurrent(data.find(d => d.key === showUseCase))
    }, [showUseCase])

    return (
        <div>
            {/* <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black" /> */}
            <main className="relative mx-6">
                <div className="relative">
                    <div className="mx-auto max-w-5xl py-12 md:py-32">
                        <div>
                            <h1 className="text-white text-4xl font-bold tracking-tight sm:text-center">
                                <span>"How will </span>
                                <span className="mr-2 md:py-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-500 to-green-600 animate-text">
                                    ChatGPT and the likes
                                </span>
                                <span>affect my business?"</span>
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 sm:text-center">
                                - a question we get asked a lot.
                            </p>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col items-center justify-center'>

                    <section className="max-w-5xl mx-auto py-16 sm:py-12">
                        <div
                            className='flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-16'
                        >
                            <img src='/communication.png' className='lg:p-10 lg:order-last max-w-xs lg:max-w-md lg:ml-auto' />
                            <div className='mt-10 lg:mt-0 lg:mx-6 lg:mx-0 text-white'>
                                <h2 className='text-2xl font-bold'>
                                    Every process that involves two or more people in communication will be affected.
                                </h2>

                                <p className='mt-4 text-gray-300'>
                                    ChatGPT is the very beginning. NLP itself is much bigger than just that. Think of every email, every PDF, every company website, every customer support ticket, every customer service call, every blog post, ... the list goes on.
                                </p>
                                <p className='mt-2 text-yellow-500 font-semibold'>
                                    Because we as people depend on natural language. <br /> And your company depends on people.
                                </p>

                            </div>
                        </div>
                    </section>

                    {/* natural language as one of the core data modalities in a company */}
                    <section className="max-w-5xl mx-auto py-16 sm:py-20">
                        <div
                            className='flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-16'
                        >
                            <img src='/sigmoid.png' className='p-10 lg:order-first max-w-xs lg:max-w-md lg:ml-auto' />
                            <div className='mt-10 lg:mt-0 lg:mx-6 lg:mx-0 text-white'>
                                <h2 className='text-2xl font-bold'>
                                    ChatGPT is only the beginning.
                                </h2>

                                <p className='mt-4 text-gray-300'>
                                    Don't make the mistake thinking ChatGPT is the final result of NLP. No, it is the beginning of mass awareness. In the next years, we will see more and more companies using NLP to automate their processes.
                                </p>
                                <p className='mt-2 text-blue-500 font-semibold'>
                                    You're wondering which use cases NLP can be applied to? <br /> Read on.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* exemplary applications */}
                    <section className="max-w-5xl mx-auto py-16 sm:py-20">
                        <div
                            className='flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-16'
                        >
                            <div className='lg:mx-6 lg:mx-0 text-white'>
                                <h2 className='text-2xl font-bold'>
                                    {current.title}
                                </h2>

                                <p className='mt-4 text-gray-300'>
                                    {current.description}
                                </p>
                                <div className='flex flex-row items-center space-x-4'>
                                    <button
                                        className='group flex items-center mt-4 text-sm font-semibold text-gray-300 hover:text-white space-x-2'
                                        onClick={() => {
                                            slider.next()
                                            setShowUseCase(slider.current())
                                        }}>
                                        <IconArrowRight className='w-5 h-5 text-gray-300 group-hover:text-white' />
                                        <span>
                                            Next
                                        </span>
                                    </button>
                                    <a href={`/#${current.href}`} className='group flex items-center mt-4 text-sm font-semibold text-gray-300 hover:text-white space-x-2'>
                                        <IconArrowRight className='w-5 h-5 text-gray-300 group-hover:text-white' />
                                        <span>
                                            More details
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className='mt-10 lg:mt-0 w-fit bg-gradient-to-b from-[#0d0d0d] to-[#0f0f0f] border border-neutral-900 rounded-2xl opacity-90'
                            >
                                <img src={`/${showUseCase}.png`} className='relative p-4 lg:p-10 lg:order-last max-w-xs lg:max-w-md lg:ml-auto' />
                            </div>
                        </div>
                    </section>

                    {/* make or buy? longtail of use cases, strengths of a platform */}
                    <section className="max-w-5xl mx-auto py-16 sm:py-20">
                        <div
                            className='flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-16'
                        >
                            <img src='/longtail.png' className='p-10 lg:order-first max-w-xs lg:max-w-md lg:ml-auto' />
                            <div className='mt-10 lg:mt-0 lg:mx-6 lg:mx-0 text-white'>
                                <h2 className='text-2xl font-bold'>
                                    Make or buy? With a longtail of use cases, the strengths of a platform become apparent.
                                </h2>

                                <p className='mt-4 text-gray-300'>
                                    Our platform gives you the power to solve even niche use cases that are not covered by other providers in short time. And more than our platform, we are here to help you with your use case.
                                </p>
                                <p className='mt-2 text-blue-500 font-semibold'>
                                    Build your first use case with us. <br /> Turn your team into NLP pioneers, and solve your use cases with ease.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* how this looks like */}
                    <div className='mt-28 text-white mx-auto max-w-2xl lg:max-w-3xl'>
                        <h2 className='text-2xl font-bold'>
                            What does it look like to partner with us?
                        </h2>

                        <div className="mt-10 flow-root">
                            <ul role="list" className="-mb-8">
                                {timeline.map((event, eventIdx) => (
                                    <li key={event.id}>
                                        <div className="relative pb-8">
                                            {eventIdx !== timeline.length - 1 ? (
                                                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-lime-400" aria-hidden="true" />
                                            ) : null}
                                            <div className="relative flex space-x-3">
                                                <div>
                                                    <span
                                                        className={classNames(
                                                            event.iconBackground,
                                                            'h-8 w-8 rounded-full flex items-center justify-center ring-2 ring-lime-500'
                                                        )}
                                                    >
                                                        <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                                                    </span>
                                                </div>
                                                <div className="text-sm text-gray-400">
                                                    <div>
                                                        {event.title}
                                                    </div>
                                                    <div className="font-medium text-gray-100">
                                                        {event.description}
                                                    </div>
                                                    {event.link && (
                                                        <a
                                                            href={event.link}
                                                            className="group flex flex-row space-x-1 items-center text-blue-500 font-semibold hover:text-white"
                                                        >
                                                            <span>More about our lean NLP canvas</span>
                                                            <IconArrowRight className='w-4 h-4 text-blue-500 group-hover:text-white' />
                                                        </a>
                                                    )}

                                                    <div className="text-sm text-gray-300">
                                                        {event.result}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='py-20'>
                    <PlatformBenefits />
                </div>
            </main>
        </div>
    )
}
