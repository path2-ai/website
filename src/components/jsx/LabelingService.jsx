import { IconClock, IconMoneybag, IconTrendingUp } from '@tabler/icons'


const benfits = [
    {
        name: 'Save time',
        icon: IconClock,
    },
    {
        name: 'Save money',
        icon: IconMoneybag,
    },
    {
        name: 'Better results',
        icon: IconTrendingUp,
    },
]

export function LabelingService() {

    return (
        <div>
            {/* <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black" /> */}
            <div className="py-24 sm:py-32 px-6">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="mt-10 grid xl:grid-cols-5 gap-8 text-base leading-7 text-gray-300">
                            <div className='col-span-3 mt-auto'>
                                <p className="text-base font-semibold leading-7 text-purple-500">Labeling just got smarter</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Hire experts for your labeling</h1>
                                <p className="mt-8">
                                    Manual data labeling is the heavy lifting of building NLP models. It's time-consuming, expensive, and prone to errors.
                                </p>
                                <p>
                                    We change that. Our managed labeling service is designed to work along the platform, so you can save time and money while getting better results.
                                </p>
                                <h3 className="mt-10 text-xl font-bold text-gray-100">Crowd labeling as a heuristic</h3>
                                <p className="mt-4">
                                    The way this works is simple. You label a few examples as the reference data, and we then help you set up automations to analyze which records should be labeled by crowd workers.
                                </p>
                                <p>
                                    Once the data has been labeled, our platform combines the automated and crowd labels to produce a single, high-quality dataset.
                                </p>
                                <div className="mt-12">
                                    <div
                                        className='grid lg:grid-cols-3 gap-4'
                                    >
                                        {benfits.map((benefit, index) => (
                                            <div
                                                className='relative'
                                                key={index}
                                            >
                                                <div
                                                    className='absolute w-full h-full bg-gradient-to-b from-[#0d0d0d] to-[#0f0f0f] border border-neutral-900 rounded-2xl opacity-90'
                                                />
                                                <div className='flex flex-col m-3 relative border border-gray-800 rounded-lg bg-neutral-900 p-4 space-y-3'>
                                                    <div className='flex flex-row items-center space-x-2 '>
                                                        <div>
                                                            <benefit.icon className='text-gray-200' size={24} />
                                                        </div>
                                                        <h3 className='text-gray-200 text-sm font-semibold'>
                                                            {benefit.name}
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden xl:block col-span-2 p-4 border rounded-2xl bg-neutral-900 border-gray-800  hover:border-gray-700 transition duration-300 ease-in-out">
                                <div className="md:pt-12 md:px-12 md:pb-10 flex flex-col items-center">
                                    <img className="rounded-lg object-cover" src="/expert-annotator.png" alt="Expert annotator" />
                                    <p className="mt-2 text-gray-400 text-xs italic">"Expert sitting in front of a computer labeling some data in cartoon style"</p>
                                    <p className="text-gray-400 text-xs italic">(This image was generated via Stable Diffusion)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden pt-16 lg:pt-20">
                    <div className='mx-auto max-w-7xl flex items-center justify-center'>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Get your labeling done in our platform</h1>
                    </div>
                    <div className="mt-10 mx-auto max-w-7xl px-6 lg:px-8">
                        <div className='bg-gradient-to-b from-purple-700 via-purple-400 to-purple-700 rounded-lg 
                        transition xl:shadow-[0_0px_100px_10px_rgba(202,73,223,0.5)]
                        '>
                            <img
                                className="mb-[-12%] rounded-lg p-[1px] shadow-2xl ring-1 ring-gray-900/10"
                                src="/screenshot-refinery-annotator.png"
                                alt=""
                            />
                        </div>
                        <div className="relative" aria-hidden="true">
                            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-black pt-[7%]" />
                        </div>
                    </div>
                </div>
                <div className='mx-auto max-w-7xl flex items-center justify-center'>
                    <p className="mt-10 text-gray-100">Labeling services are directly available within our platform.</p>
                </div>
            </div>
        </div>
    )
}
