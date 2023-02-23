import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { CalModal } from './CalModal'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { Icon3dCubeSphere, IconApi, IconApiApp, IconArrowDown, IconArrowRight, IconArrowsSplit, IconAsterisk, IconChevronRight, IconDashboard, IconFilter, IconHighlight, IconLink, IconMessageChatbot, IconNumber3, IconRepeat, IconTerminal, IconUsers, IconWall, IconWand } from '@tabler/icons'

const features = {
    "pipeline": [
        {
            name: 'Native integrations.',
            description:
                'Integrate with sources such as you email inbox, Slack workspace or GitHub repository to collect data with ease.',
            icon: IconApiApp,
        },
        {
            name: 'Text generation.',
            description: 'Integrate large language models to grow from 1,000 records to 10,000 records in a matter of minutes.',
            icon: Icon3dCubeSphere,
        },
        {
            name: 'API and conditional flows.',
            description: 'Push and pull data from your workflow, and define programmable conditions within your workflow.',
            icon: IconArrowsSplit,
        },
    ],
    "automate": [
        {
            name: 'Implement heuristics.',
            description:
                'From classification via extraction to generation, you can implement heuristics such as active learners or regular expressions for automatic data labeling.',
            icon: IconTerminal,
        },
        {
            name: 'Rich set of open-source modules.',
            description: 'Get started with our open-source bricks modules, e.g. for language detection, sentiment analysis, text summarization and many more.',
            icon: IconWall,
        },
        {
            name: 'Built-in labeling editor.',
            description: 'Use our NLP-optimized labeling editor for things such as classifications, nested span labeling or attribute generation.',
            icon: IconHighlight,
        },
    ],
    "dashboard": [
        {
            name: 'Estimate data quality.',
            description:
                'Automatically labeled records have a weakly supervised confidence score. Understand where your automations do not work yet, or sort labeling sessions by confidence.',
            icon: IconDashboard,
        },

        {
            name: 'Best-in-class data management.',
            description: 'Granular filters allow you to slice down datasets by e.g. heuristic, confidence or attribute.',
            icon: IconFilter,
        },
        {
            name: 'Multiuser and shareable filters.',
            description: 'Share your headache-causing filters with colleagues (inhouse or crowd) to orchestrate tasks with ease. Simply send the link, and they can start labeling right away.',
            icon: IconLink,
        },
    ],
    "deploy": [
        {
            name: '3 clicks.',
            description:
                'You already did the work in refinery. Now gates is as simple as it gets. Select the automations, hit deploy, and your model is live.',
            icon: IconNumber3,
        },
        {
            name: 'Integrate anywhere.',
            description: 'Integrate your model into any existing infrastructure. Use the API to get secured access to your model, no matter where and how it is deployed.',
            icon: IconApi,
        },
        {
            name: 'Database backups.',
            description: 'Each model comes with a simple monitoring dashboard, helping you to analyze the usage and performance of your model.',
            icon: IconDashboard,
        },
    ]
}

import { useState } from 'react'
import { CallToAction } from './CallToAction'

export function Developers() {

    const [openBanner, setOpenBanner] = useState(true)
    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
            <section className="relative isolate overflow-hidden">
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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
                    className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
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
                            <stop stopColor="green" />
                            <stop offset={1} stopColor="#80CAFF" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
                    <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                        <div className="mt-24 sm:mt-32 lg:mt-16">
                            <a href="https://github.com/code-kern-ai/refinery" className="inline-flex items-center space-x-6">
                                <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold leading-6 text-green-400 ring-1 ring-inset ring-green-500/20">
                                    Open-core
                                </span>
                                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                                    <span>Find our flagship product on GitHub</span>
                                    <ChevronRightIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                                </span>
                            </a>
                        </div>
                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Build <span className='animate-text bg-gradient-to-r from-white via-gray-600 to-white bg-clip-text text-transparent'>natural language processing</span> inhouse, fast.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Whether you are a beginner or an expert, whether you are just starting to roll out NLP or have already built a few use cases, we have the right tools for you.
                        </p>
                        <div className='mt-4'>
                            {/* <div className='flex flex-row items-center px-3 py-2 border border-gray-800 bg-neutral-900 rounded-full text-gray-300 w-fit text-xs'>
                                <div
                                    className='h-2.5 w-2.5 inline-block mr-2 bg-green-500 rounded-full animate-pulse'
                                />
                                <span>
                                    We follow an open-core approach!
                                </span>
                            </div> */}
                            <p className="mt-2 text-sm leading-8 text-gray-300">
                                Our flagship product is open-source and free to use. The platform is built on top of it, making it easy to build, deploy and scale your NLP applications.
                            </p>
                        </div>

                        <div className="mt-10 flex items-center gap-x-6">
                            <div className='animate-bounce flex items-center flex-row space-x-4'>
                                <div className='p-2 border border-gray-800 bg-neutral-900 rounded-full'>
                                    <IconArrowDown className="h-4 w-4 text-green-500" />
                                </div>
                                <div className='text-gray-300'>
                                    Scroll down
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <img
                                src="/screenshot-refinery.png"
                                alt="App screenshot"
                                width={2432}
                                height={1442}
                                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-gray-800"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="overflow-hidden py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:ml-auto lg:pt-4 lg:pl-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600">Pipeline collection</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Collect and generate textual data</p>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    Design simple or complex workflows powered via Python logic and a visual editor. Collect data from websites, inboxes, APIs, large language models and much more.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                                    {features["pipeline"].map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-white">
                                                <feature.icon className="absolute top-1 left-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <div className="sm:px-6 lg:px-0 lg:order-first">
                            <div className="hidden lg:block relative isolate overflow-hidden bg-gradient-to-r from-neutral-800 to-neutral-900 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none">
                                <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                                    <img
                                        src="/screenshot-workflow.png"
                                        alt="Product screenshot"
                                        width={2432}
                                        height={1442}
                                        className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-blue-800"
                                    />
                                </div>
                            </div>
                            <div className='lg:hidden'>
                                <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                                    <img
                                        src="/screenshot-workflow.png"
                                        alt="Product screenshot"
                                        width={2432}
                                        height={1442}
                                        className="-mb-12 w-[57rem] max-w-none rounded-l-xl bg-gray-800 ring-1 ring-blue-800"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="overflow-hidden py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-500">Automate and assess</h2>
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Weak supervision for automation</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">
                                        With our data-centric approach, you can easily label and assess your training data. Apply weak supervision (i.e. combining Python scripts, regular expressions, active learners or large language models) to automate your tasks.
                                    </p>
                                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                                        {features["automate"].map((feature) => (
                                            <div key={feature.name} className="relative pl-9">
                                                <dt className="inline font-semibold text-white">
                                                    <feature.icon className="absolute top-1 left-1 h-5 w-5 text-purple-500" aria-hidden="true" />
                                                    {feature.name}
                                                </dt>{' '}
                                                <dd className="inline">{feature.description}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                            <div className="sm:px-6 lg:px-0">
                                <div className="hidden lg:block relative isolate overflow-hidden bg-gradient-to-l from-neutral-800 to-neutral-900 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 lg:mx-0 lg:max-w-none sm:pl-16 sm:pr-0">
                                    <div className="relative mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                                        <img
                                            src="/screenshot-refinery.png"
                                            alt="Product screenshot"
                                            width={2432}
                                            height={1442}
                                            className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-purple-800"
                                        />
                                    </div>
                                </div>
                                <div className='lg:hidden'>
                                    <img
                                        src="/screenshot-refinery.png"
                                        alt="Product screenshot"
                                        width={2432}
                                        height={1442}
                                        className="-mb-12 w-[57rem] max-w-none rounded-l-xl bg-gray-800 ring-1 ring-purple-800"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="overflow-hidden py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:ml-auto lg:pt-4 lg:pl-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-yellow-500 to-green-700">Assess and orchestrate</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Powerful analytics</p>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    All your training data gets enriched with valuable metadata, allowing you to drill down into your data and make informed decisions.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                                    {features["dashboard"].map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-white">
                                                <feature.icon className="absolute top-1 left-1 h-5 w-5 text-lime-500" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <div className="sm:px-6 lg:px-0 lg:order-first">
                            <div className="hidden lg:block relative isolate overflow-hidden bg-gradient-to-r from-neutral-800 to-neutral-900 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none">
                                <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                                    <img
                                        src="/screenshot-refinery-dashboard.png"
                                        alt="Product screenshot"
                                        width={2432}
                                        height={1442}
                                        className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-purple-800"
                                    />
                                </div>
                            </div>
                            <div className='lg:hidden'>
                                <img
                                    src="/screenshot-refinery-dashboard.png"
                                    alt="Product screenshot"
                                    width={2432}
                                    height={1442}
                                    className="-mb-12 w-[57rem] max-w-none rounded-l-xl bg-gray-800 ring-1 ring-purple-800"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="overflow-hidden py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-600 to-orange-500">Deploy faster</h2>
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Integrate anywhere in minutes</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">
                                        Once you've built your NLP, you can easily deploy it to your own infrastructure or to the cloud via gates within 3 clicks.
                                    </p>
                                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                                        {features["deploy"].map((feature) => (
                                            <div key={feature.name} className="relative pl-9">
                                                <dt className="inline font-semibold text-white">
                                                    <feature.icon className="absolute top-1 left-1 h-5 w-5 text-rose-500" aria-hidden="true" />
                                                    {feature.name}
                                                </dt>{' '}
                                                <dd className="inline">{feature.description}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                            <div className="sm:px-6 lg:px-0">
                                <div className="hidden lg:block relative isolate overflow-hidden bg-gradient-to-l from-neutral-800 to-neutral-900 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 lg:mx-0 lg:max-w-none sm:pl-16 sm:pr-0">
                                    <div className="relative mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                                        <img
                                            src="/screenshot-gates.png"
                                            alt="Product screenshot"
                                            width={2432}
                                            height={1442}
                                            className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-red-800"
                                        />
                                    </div>
                                </div>
                                <div className='lg:hidden'>
                                    <img
                                        src="/screenshot-gates.png"
                                        alt="Product screenshot"
                                        width={2432}
                                        height={1442}
                                        className="-mb-12 w-[57rem] max-w-none rounded-l-xl bg-gray-800 ring-1 ring-red-800"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="isolate overflow-hidden px-6 lg:px-8">
                <div className="relative mx-auto max-w-2xl py-24 sm:py-36 lg:max-w-4xl">

                    <svg
                        viewBox="0 0 1108 632"
                        aria-hidden="true"
                        className="absolute top-10 left-10 -z-10 transform-gpu blur-3xl"
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
                                <stop stopColor="#0000F5" />
                                <stop offset={1} stopColor="#80CAFF" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
                        <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
                            <svg
                                viewBox="0 0 162 128"
                                fill="none"
                                aria-hidden="true"
                                className="absolute -top-12 left-0 -z-10 h-32 stroke-gray-500"
                            >
                                <path
                                    id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                                />
                                <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                            </svg>
                            <blockquote className="text-xl font-semibold leading-8 text-gray-100 sm:text-2xl sm:leading-9">
                                <p>
                                    With Kern AI we were able to drastically simplify and organize a process of automated, standardized content classification, while simultaneously creating an implicit labeling documentation to rely on. The rich and versatile Python SDK allowed for a seamless integration with our pre-existing architecture.
                                </p>
                            </blockquote>
                        </div>
                        <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
                            <img
                                className="rounded-xl lg:rounded-3xl"
                                src="/testimonials/finn-schmidt.png"
                                alt=""
                            />
                        </div>
                        <figcaption className="text-base lg:col-start-1 lg:row-start-3">
                            <div className="font-semibold text-gray-100">Finn Schmidt</div>
                            <div className="mt-1 text-gray-300">Data Scientist at Büro Bardohn</div>
                        </figcaption>
                    </figure>
                </div>
            </section>

            <CallToAction />

            <CalModal open={openModal} setOpen={setOpenModal} />
        </div >
    )
}
