import { IconArrowRight, IconChessKnight, IconDatabase, IconStack3, IconTerminal, IconUser } from "@tabler/icons"

const useCases = [
    {
        name: 'Low-code',
        icon: IconTerminal,
        description: 'You need some Python knowledge to build an application on our platform, but you do not need a PhD. You have the full flexibility, but can developer fast and easy.',
    },
    {
        name: 'Your data intellectual property',
        icon: IconDatabase,
        description: 'Data lives longer than code. With our data-centric approach, you build your intellectual data property, allowing you to stay flexible when it comes to your requirements.',
    },
    {
        name: 'One developer platform',
        icon: IconStack3,
        description: 'From data generation for prototyping, to data collection and labeling, quality assurance and orchestration, to model deployment and full workflow management. One platform.',
    },
    {
        name: 'Strategic investment',
        icon: IconChessKnight,
        description: 'Businesses are run by people, and people communicate - via email, chat, PDFs, and more. NLP will must be core to your business strategy, and we are here to help you build it.',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function PlatformBenefits() {

    return (
        <section className="my-8 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2
                className='text-3xl font-bold text-white text-center'
            >
                Scale your operations and gain new insights with our platform
            </h2>
            <div className="mt-12">
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
                                        <useCase.icon className='text-gray-200' size={24} />
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
                                >
                                    <span> More details</span>
                                    <IconArrowRight className='text-gray-200 group-hover:text-green-500' size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
