import { IconBook, IconClock, IconDatabase, IconEyeTable, IconMessage, IconTableAlias, IconTerminal, IconUser, IconWorldWww } from '@tabler/icons'
import { useRouter } from 'next/router'

const benefits = [{
    title: 'HTML + NLP = 💚',
    icon: IconTerminal,
    description: 'Ever struggled parsing textual data inside a div, paragraph or table? Combine scraping with NLP, and you can extract data from any HTML element.',
    colspan: 1
}, {
    title: 'Master data management',
    icon: IconTableAlias,
    description: 'When webscraping, you often need mapping data to synchronize external data with internal sources. With workflow, handling mapping data is easy.',
    colspan: 1
}, {
    title: 'Visual scraping',
    icon: IconEyeTable,
    description: 'Scraping can be really difficult sometimes. Combine scraping with visual labeling, and see if your scraping technique works as you expect.',
    colspan: 1
}, {
    title: 'Shorter time to build',
    icon: IconClock,
    description: 'Webscraping is a complex task. With our platform, you can build webscraping workflows in a fraction of the time it would take to build it from scratch.',
    colspan: 1
}]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Webscraping() {

    const router = useRouter()

    return (
        <div className="relative isolate overflow-hidden">
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
                        <stop stopColor="yellow" />
                        <stop offset={1} stopColor="#80CAFF" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="mx-auto max-w-5xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
                <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                    <div className='p-2 border border-gray-700 bg-neutral-900 w-fit rounded-lg'>
                        <IconWorldWww className="h-8 w-8 text-lime-500" />
                    </div>
                    <h1 className="mt-20 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Make complex webscraping a breeze
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Webscraping is an extremely powerful tool. Still, it can be really difficult to make sense of HTML trees. Have you ever thought about how NLP can help you in webscraping? We did.
                    </p>
                    <div className='mt-10 flex flex-col md:flex-row md:space-x-2'>
                        <button
                            type='button'
                            className='bg-transparent hover:text-lime-400 hover:bg-neutral-800 flex rounded-lg p-3 text-base font-semibold leading-7 text-gray-100 ring-1 ring-inset ring-neutral-700 group-hover:ring-white/20'
                            onClick={() => {
                                router.push('/pricing')
                            }}
                        >
                            <span>
                                See pricing
                            </span>
                        </button>

                        <button
                            type='button'
                            className='mt-2 md:mt-0 hover:text-lime-400 hover:bg-neutral-800 flex rounded-lg p-3 text-base font-semibold leading-7 text-gray-100 ring-1 ring-inset ring-neutral-700 group-hover:ring-white/20'
                            onClick={() => {
                                router.push('/docs')
                            }}
                        >
                            <span>
                                <IconBook className='my-auto h-5 w-5 inline-block mr-2' />
                                See docs
                            </span>
                        </button>
                    </div>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <img
                            src="/screenshot-workflow.png"
                            alt="App screenshot"
                            width={2432}
                            height={1442}
                            className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                        />
                    </div>
                </div>
            </div>
            <div className='mx-auto max-w-5xl px-6 pb-20 lg:flex lg:px-8'>
                <div className='grid grid-cols-2 gap-8'>
                    {benefits.map((option) => (
                        <div
                            key={option.title}
                            className={classNames(
                                option.colspan === 2 ? 'col-span-2' : '',
                                "flex flex-col p-4 rounded-lg")}
                        >
                            <div className="border-gray-800 text-white flex items-center justify-center h-12 w-12 rounded-md border bg-gradient-to-b from-neutral-900 to-neutral-800">
                                <option.icon className="h-6 w-6" aria-hidden="true" />
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
    )
}
