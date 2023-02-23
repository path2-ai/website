import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { CalModal } from './CalModal'
import { Icon3dCubeSphere, IconApi, IconApiApp, IconArrowDown, IconArrowsSplit, IconDashboard, IconFilter, IconHighlight, IconLink, IconNumber3, IconTerminal, IconWall } from '@tabler/icons'

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

export function GermanInsurers() {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
            <div className="relative isolate overflow-hidden">
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
                </svg>
                <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                        <div className="mt-24 sm:mt-32 lg:mt-16">
                            <a href="#" className="inline-flex space-x-6">
                                <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                                    What's new
                                </span>
                                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                                    <span>Just shipped v1.0</span>
                                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </a>
                        </div>
                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Deploy to the cloud with confidence
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                <img
                                    src="/screenshot-workflow.png"
                                    alt="App screenshot"
                                    width={2432}
                                    height={1442}
                                    className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CalModal open={openModal} setOpen={setOpenModal} />
        </div >
    )
}
