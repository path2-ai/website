import { IconArrowRight, IconBallon, IconBulb, IconChecklist, IconCode, IconDashboard, IconFileSearch, IconHeartHandshake, IconInbox, IconLoader, IconMoneybag, IconNote, IconNumber1, IconNumber2, IconNumber3, IconNumber4, IconPerspective } from '@tabler/icons'
import { CallToAction } from '../CallToAction'
import { PlatformBenefits } from '../PlatformBenefits'
import { EmailAnalytics } from '../UseCases/EmailAnalytics'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { faqs } from '../Ecosystem'
import { NotFound } from '../404'
import * as icons from 'tabler-icons-react';


import { useRouter } from "next/router"
import { useEffect, useState } from "react"
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

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


function SVGIcon({ icon, size, strokeWidth, color }) {
    const Icon = icons[icon];
    return (
        <Icon
            size={size}
            strokeWidth={strokeWidth}
            color={color}
        />
    )
}

const STRAPI_BASE_URL = 'https://cms.kern.ai' //'http://localhost:1337'

export function LandingPage() {

    const router = useRouter()
    const [slug, setSlug] = useState()
    const [strapiData, setStrapiData] = useState()
    const [imgData, setImgData] = useState()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setSlug(router.query['page-slug'])
    }, [router.isReady])

    useEffect(() => {
        if (!slug) return
        const STRAPI_URL = `${STRAPI_BASE_URL}/api/landing-pages?populate=*&filters[slug][$eq]=${slug}`
        const IMG_URL = `${STRAPI_BASE_URL}/api/landing-pages?populate[reason][populate]=*&filters[slug][$eq]=${slug}`
        fetch(STRAPI_URL)
            .then((response) => response.json())
            .then((data) => {
                setStrapiData(data.data[0]?.attributes)
                setLoaded(true)
            })
        fetch(IMG_URL)
            .then((response) => response.json())
            .then((data) => {
                setImgData(data.data[0]?.attributes)
            })
    }, [slug])

    return (
        <section>
            {strapiData && imgData ? (
                <main className="relative">
                    <div className="relative px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl py-16 sm:py-20">
                            <div>
                                <div>
                                    <h1 className="text-white text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                        {strapiData.heading1}
                                    </h1>
                                    <p className="mt-6 text-xl leading-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 sm:text-center">
                                        {strapiData.description1}
                                    </p>
                                </div>
                            </div>
                            <div className='my-28'>
                                <div className="mx-auto w-full max-w-5xl sm:px-6 lg:px-8">
                                    <div className='my-8'>
                                        <h2 className="text-white text-2xl font-bold tracking-tight sm:text-center sm:text-4xl">
                                            What does this mean?
                                        </h2>
                                        <p className="mt-6 text-xl leading-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 sm:text-center">
                                            {strapiData.description2}
                                        </p>
                                    </div>
                                    <div className="mt-6 md:m-4 space-y-4 md:p-0 md:grid md:grid-cols-2 md:gap-4">
                                        {strapiData.feature.map((option) => (
                                            <div
                                                key={option.title}
                                                className="flex flex-col hover:bg-neutral-900 p-4 rounded-lg"
                                            >
                                                <div className={classNames(
                                                    "flex items-center justify-center h-12 w-12 rounded-md border  bg-gradient-to-b from-neutral-900 to-neutral-800 border-gray-800 text-white"
                                                )}>
                                                    <SVGIcon icon={option.icon} size={24} strokeWidth={2} color={"white"} />
                                                </div>
                                                <div className="mt-5">
                                                    <h3 className="text-lg leading-6 font-medium text-gray-100">{option.title}</h3>
                                                    <p className="mt-2 text-sm leading-6 text-gray-300">{option.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='my-14'>
                                <div className="mx-auto w-full">
                                    <div className='flex flex-col space-y-10 my-8'>
                                        <h2 className="text-white text-2xl font-bold tracking-tight sm:text-center sm:text-4xl">
                                            See Kern AI in action
                                        </h2>
                                    </div>
                                    <EmailAnalytics industry={'insurance'} />
                                </div>
                            </div>

                            <div className='my-32 px-6'>
                                <div className="flex flex-col space-y-16 mx-auto w-full max-w-5xl sm:px-6 lg:px-8">
                                    <div className=''>
                                        <h2 className="text-gray-100 text-2xl font-bold tracking-tight sm:text-center sm:text-4xl">
                                            Is this yet another chatbot?
                                        </h2>
                                        <p className="mt-6 text-xl leading-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 sm:text-center">
                                            No; a chatbot is typically placed on your website. We, on the other hand, offer holistic process automation across a wide range of channels, such as emails and other communication channels.                                    </p>
                                        <p className="mt-2 text-xl leading-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 sm:text-center">
                                            In other words, we offer AI to support specialist staff. Your customers notice this in the form of shorter return times and higher satisfaction.                                    </p>
                                    </div>
                                    <img src="/nlp-hero-desktop.png" className="hidden md:block w-full" />
                                    <img src="/nlp-hero-mobile.png" className="block md:hidden w-full" />
                                    <p className="text-gray-300 sm:text-center">
                                        Your IT landscape can be integrated, for example, to use customer-specific data.
                                    </p>
                                </div>
                            </div>

                            <div className='my-28'>
                                <div className="mx-auto w-full max-w-5xl sm:px-6 lg:px-8">
                                    <div className='my-8'>
                                        <h2 className="text-white text-2xl font-bold tracking-tight sm:text-center sm:text-4xl">
                                            <span>Why now is the right time to </span>
                                            <span className="md:py-3 lg:py-6 text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-emerald-500 to-green-600 animate-text">
                                                embed AI
                                            </span>
                                        </h2>
                                        <p className="mt-6 text-xl leading-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 sm:text-center">
                                            AI has the power to automate manual and time consuming email processes that are business-critical.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="hidden lg:block mt-12 mx-auto w-full max-w-6xl rounded-2xl border border-neutral-700 bg-neutral-900"
                            >
                                <div className="relative overflow-hidden pb-28 space-y-20">
                                    <svg
                                        className="absolute inset-0 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                        aria-hidden="true"
                                    >
                                        <defs>
                                            <pattern
                                                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                                                width={200}
                                                height={200}
                                                x="50%"
                                                y={-1}
                                                patternUnits="userSpaceOnUse"
                                            >
                                                <path d="M.5 200V.5H200" fill="none" />
                                            </pattern>
                                        </defs>
                                        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
                                            <path
                                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                                strokeWidth={0}
                                            />
                                        </svg>
                                        <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
                                    </svg>
                                    <svg
                                        viewBox="0 0 1108 632"
                                        aria-hidden="true"
                                        className="absolute top-10 left-[calc(50%-4rem)] w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                                    >
                                        <path
                                            fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
                                            fillOpacity=".2"
                                            d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
                                                x1="1220.59"
                                                x2="-85.053"
                                                y1="432.766"
                                                y2="638.714"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="blue" />
                                                <stop offset={1} stopColor="#80CAFF" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    {strapiData.reason.map((step, stepIdx) => (
                                        <div className="relative" key={stepIdx} >
                                            <div className="flex mx-8 lg:grid lg:grid-cols-7 lg:gap-8 lg:items-center">
                                                <div className={classNames(
                                                    stepIdx % 2 === 0 ? 'order-last' : null,
                                                    "col-span-4"
                                                )}>
                                                    <img
                                                        className="w-full rounded-3xl shadow-xl bg-black p-4
                                        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                                                        src={`${STRAPI_BASE_URL}${imgData.reason[stepIdx].image.data.attributes.url}`}
                                                        alt={step.title}
                                                    />
                                                </div>
                                                <div className="col-span-3 mx-4">
                                                    <div>
                                                        <div>
                                                            <span className="p-1 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 border border-gray-700">
                                                                <SVGIcon icon={step.icon} size={24} strokeWidth={2} color={"white"} />
                                                            </span>
                                                        </div>
                                                        <div className="mt-6">
                                                            <h2 className="text-xl font-bold tracking-tight text-gray-100">
                                                                {step.title}
                                                            </h2>
                                                            <p className="mt-4 text-sm text-gray-500">
                                                                {step.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='my-28'>
                                <div className="mx-auto w-full max-w-5xl sm:px-6 lg:px-8">
                                    <div className='flex flex-col space-y-10 my-8'>
                                        <h2 className="text-white text-2xl font-bold tracking-tight sm:text-center sm:text-4xl">
                                            Possible business impacts
                                        </h2>
                                        <div className='pt-10'>
                                            <dl className="space-y-10 md:space-y-0 md:grid grid-cols-1 gap-y-16 md:gap-x-8 md:text-center md:grid-cols-3">
                                                {strapiData.statistic.map((stat) => (
                                                    <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                                        <div className="text-base leading-7 text-gray-400">{stat.name}</div>
                                                        <div className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{stat.value}</div>
                                                        <div className="text-base leading-7 text-gray-400">according to <a
                                                            href={stat.link}
                                                            target='_blank'
                                                            rel='noreferrer noopener'
                                                            className='font-semibold text-green-500 hover:text-white'>{stat.reference}</a></div>
                                                    </div>
                                                ))}
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='my-28'>
                                <div className="mx-auto w-full max-w-5xl sm:px-6 lg:px-8">
                                    <div className='flex flex-col space-y-10 my-8'>
                                        <h2 className="text-white text-2xl font-bold tracking-tight sm:text-center sm:text-4xl">
                                            What makes us different
                                        </h2>
                                        <PlatformBenefits />
                                    </div>
                                </div>
                            </div>

                            <div className='my-28 text-white mx-auto max-w-2xl lg:max-w-3xl'>
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

                            <div>
                                <div className="mx-auto max-w-3xl lg:max-w-5xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                                    <div className="mx-auto max-w-5xl divide-y-2 divide-gray-800">
                                        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                                            Frequently asked questions
                                        </h2>
                                        <dl className="mt-10 space-y-6 divide-y divide-gray-800">
                                            {faqs.map((faq) => (
                                                <Disclosure as="div" key={faq.question} className="pt-6">
                                                    {({ open }) => (
                                                        <>
                                                            <dt className="text-sm">
                                                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-600">
                                                                    <span className="font-medium text-gray-100">{faq.question}</span>
                                                                    <span className="ml-6 flex h-7 items-center">
                                                                        <ChevronDownIcon
                                                                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                </Disclosure.Button>
                                                            </dt>
                                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                                <p className="text-sm text-gray-500">{faq.answer}</p>
                                                            </Disclosure.Panel>
                                                        </>
                                                    )}
                                                </Disclosure>
                                            ))}
                                        </dl>
                                    </div>
                                </div>
                            </div>

                            <CallToAction />
                        </div>
                    </div>
                </main>
            ) : (
                <div>
                    {loaded && <NotFound />}
                </div>
            )}
        </section>
    )
}
