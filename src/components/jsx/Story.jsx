import { IconArrowDown, IconArrowRight, IconCategory2, IconFile, IconHighlight, IconMail, IconSearch, IconWindmill, IconWorldWww } from '@tabler/icons'
import Link from 'next/link'

export function Story() {

    const companies = [
        { name: 'Kern AI GmbH', founded: '2020', teamsize: '11' },
    ]

    const nlpActions = [{
        name: 'Classify',
        description: 'Define categories (topic, sentiment)',
        icon: IconCategory2,
        color: 'text-yellow-500'
    }, {
        name: 'Extract',
        description: 'Retrieve information (e.g. names, dates)',
        icon: IconHighlight,
        color: 'text-blue-500'
    }, {
        name: 'Search',
        description: 'Search by similarity (e.g. by reference)',
        icon: IconSearch,
        color: 'text-green-500'
    }, {
        name: 'Generate',
        description: 'Create content (e.g. responses, articles)',
        icon: IconWindmill,
        color: 'text-purple-500'
    }]

    const nlpTransformations = [{
        fromTitle: 'Natural language',
        fromDescription: 'Emails, audio, PDFs, ...',
        toTitle: 'Structured insights',
        toDescription: 'Metrics, spreadsheets, ...',
    }, {
        fromTitle: 'Natural language',
        fromDescription: 'Emails, audio, PDFs, ...',
        toTitle: 'New natural language',
        toDescription: 'Responses, audio, PDFs, ...',
    }, {
        fromTitle: 'Structured insights',
        fromDescription: 'Metrics, spreadsheets, ...',
        toTitle: 'Natural language',
        toDescription: 'Emails, audio, PDFs, ...',
    },]

    return (
        <div>
            <section>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl py-16 sm:py-20">

                        <h3
                            className='text-2xl md:text-3xl font-bold text-white md:text-center'
                        >
                            A bit about natural language processing
                        </h3>
                        <p className='text-sm md:text-base text-gray-400 md:text-center mt-2 md:mt-4'>
                            ...and why you should care!
                        </p>
                        <div
                            className='mt-8 relative'
                        >
                            <div
                                className='absolute w-full h-full bg-gradient-to-b from-[#0d0d0d] to-[#0f0f0f] border border-neutral-900 rounded-2xl opacity-90'
                            />
                            <div
                                className="p-6 relative flex overflow-x-scroll scrollbar-thin scrollbar-thumb-neutral-900 scrollbar-track-neutral-700"
                            >
                                <div
                                    className="flex flex-nowrap space-x-6"
                                >
                                    <div className="inline-block">
                                        <div
                                            className="p-4 w-[34rem] w-fit h-72 overflow-hidden rounded-lg shadow-md bg-neutral-900 border border-gray-800 hover:shadow-sm hover:shadow-gray-800 transition-shadow duration-300 ease-in-out"
                                        >
                                            <div className="px-4 sm:px-6 lg:px-8">
                                                <div className="mt-12 flow-root">
                                                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                                            <table className="min-w-full divide-y divide-gray-700">
                                                                <thead>
                                                                    <tr className="divide-x divide-gray-800">
                                                                        <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-100 sm:pl-0">
                                                                            Name
                                                                        </th>
                                                                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-100">
                                                                            Founded
                                                                        </th>
                                                                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-100">
                                                                            Employees
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="divide-y divide-gray-800">
                                                                    {companies.map((company) => (
                                                                        <tr
                                                                            key={company.name}
                                                                            className="divide-x divide-gray-800">
                                                                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-100 sm:pl-0">
                                                                                {company.name}
                                                                            </td>
                                                                            <td className="whitespace-nowrap p-4 text-sm text-gray-500">{company.founded}</td>
                                                                            <td className="whitespace-nowrap p-4 text-sm text-gray-500">{company.teamsize}</td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-center text-sm mt-4">
                                                    This is structured data. For instance, your everyday Excel spreadsheet.
                                                </p>
                                                <p className="text-gray-400 text-center text-sm">
                                                    It's easy for machines to understand. But humans don't talk in spreadsheets.
                                                </p>
                                                <p className="text-gray-400 text-center text-sm">
                                                    Instead, we use natural language. Like this very text. Or a speech.
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="inline-block">
                                        <div
                                            className="w-96 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-neutral-900 border border-gray-800 hover:shadow-sm hover:shadow-gray-800 transition-shadow duration-300 ease-in-out"
                                        >
                                            <img
                                                className="w-full h-full object-cover"
                                                src="speech.png"
                                                alt="Natural language"
                                            />
                                        </div>
                                    </div>


                                    <div className="inline-block">
                                        <div
                                            className="p-4 w-96 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-neutral-900 border border-gray-800 hover:shadow-sm hover:shadow-gray-800 transition-shadow duration-300 ease-in-out"
                                        >
                                            <div>
                                                <p className="text-gray-400 text-center text-sm mt-4">
                                                    Humans run on natural language. We use it to communicate, to learn, to understand.
                                                </p>
                                                <div>
                                                    <IconArrowDown className="h-4 w-4 mx-auto my-2 text-gray-400" />
                                                </div>
                                                <p className="text-gray-400 text-center text-sm">
                                                    Businesses are run by humans. Most of the data in a company contains natural language.
                                                </p>
                                                <div>
                                                    <IconArrowDown className="h-4 w-4 mx-auto my-2 text-gray-400" />
                                                </div>
                                                <p className="text-gray-400 text-center text-sm">
                                                    It becomes obvious why 80% of the data in the world is unstructured like text.
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="inline-block">
                                        <div
                                            className="p-4 w-96 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-neutral-900 border border-gray-800 hover:shadow-sm hover:shadow-gray-800 transition-shadow duration-300 ease-in-out"
                                        >
                                            <div>
                                                <h3 className="text-gray-400 text-center text-5xl font-bold mt-2">
                                                    80%
                                                </h3>
                                                <div className='mx-4 mt-2'>
                                                    <div className='w-full bg-neutral-700 h-2 rounded-full'>
                                                        <div className='w-4/5 h-2 bg-green-500 rounded-full'></div>
                                                    </div>
                                                </div>
                                                <p className="text-gray-400 text-center text-sm mt-2">
                                                    Think about it. For instance:
                                                </p>
                                            </div>
                                            <div
                                                className='mt-4 flex flex-col space-y-2 ml-4'
                                            >
                                                <div className='flex flex-row space-x-2 items-center'>
                                                    <div
                                                        className="flex items-center border border-gray-800 rounded-lg p-2 w-fit"
                                                    >
                                                        <IconMail className="h-4 w-4 text-gray-400" />
                                                    </div>
                                                    <p className='text-gray-400 text-sm'>
                                                        <span className="text-gray-400 font-semibold text-sm">Emails</span> in customer interactions.
                                                    </p>
                                                </div>
                                                <div className='flex flex-row space-x-2 items-center'>
                                                    <div
                                                        className="flex items-center border border-gray-800 rounded-lg p-2 w-fit"
                                                    >
                                                        <IconFile className="h-4 w-4 text-gray-400" />
                                                    </div>
                                                    <p className='text-gray-400 text-sm'>
                                                        <span className="text-gray-400 font-semibold text-sm">PDFs</span> in human resources.
                                                    </p>
                                                </div>
                                                <div className='flex flex-row space-x-2 items-center'>
                                                    <div
                                                        className="flex items-center border border-gray-800 rounded-lg p-2 w-fit"
                                                    >
                                                        <IconWorldWww className="h-4 w-4 text-gray-400" />
                                                    </div>
                                                    <p className='text-gray-400 text-sm'>
                                                        <span className="text-gray-400 font-semibold text-sm">News data</span> in the media.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="inline-block">
                                        <div
                                            className="w-96 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-neutral-900 border border-gray-800 hover:shadow-sm hover:shadow-gray-800 transition-shadow duration-300 ease-in-out"
                                        >
                                            <img
                                                className="w-full h-full object-cover"
                                                src="research.png"
                                                alt="Natural language"
                                            />
                                        </div>
                                    </div>


                                    <div className="inline-block">
                                        <div
                                            className="p-4 w-96 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-neutral-900 border border-gray-800 hover:shadow-sm hover:shadow-gray-800 transition-shadow duration-300 ease-in-out"
                                        >
                                            <div>
                                                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600 text-center text-5xl font-bold mt-16">
                                                    NLP
                                                </h3>
                                                <p className="text-gray-400 text-center text-sm mt-4">
                                                    tackles these 80% of unstructured data.
                                                </p>
                                                <p className="text-gray-400 text-center text-sm">
                                                    It helps your machines to understand and generate natural language.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="inline-block">
                                        <div
                                            className="w-96 h-72 max-w-xs overflow-hidden grid grid-cols-2 gap-5"
                                        >
                                            {nlpActions.map((action, index) => (
                                                <div
                                                    key={index}
                                                    className='rounded-lg shadow-md bg-neutral-900 border border-gray-800 hover:shadow-sm hover:shadow-gray-800 transition-shadow duration-300 ease-in-out'
                                                >
                                                    <div className='flex flex-row items-center space-x-2'>
                                                        <div className='p-2 border-r border-b border-gray-800 w-fit rounded-br-lg'>
                                                            <action.icon className={action.color} />
                                                        </div>
                                                        <h3 className="text-gray-400 font-semibold">
                                                            {action.name}
                                                        </h3>
                                                    </div>
                                                    <div className='mx-1 flex items-center justify-center pt-4 px-2'>
                                                        <p className="text-gray-400 text-xs">
                                                            {action.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>


                                    <div className="inline-block">
                                        <div
                                            className="p-2 w-14 h-72 overflow-hidden rounded-lg shadow-md bg-neutral-900 border border-gray-800 hover:shadow-sm hover:shadow-gray-800 transition-shadow duration-300 ease-in-out"
                                        >
                                            <div className='flex items-center justify-center h-full text-gray-300'>
                                                <span className='transform -rotate-180' style={{ writingMode: 'vertical-rl' }}>
                                                    This enables new applications
                                                </span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="inline-block">
                                        <div
                                            className="flex flex-col space-y-5 max-w-fit h-72 overflow-hidden"
                                        >
                                            {nlpTransformations.map((transformation, index) => (
                                                <div
                                                    key={index}
                                                    className='flex flex-row items-center space-x-6 py-2 px-4 h-full rounded-lg shadow-md bg-neutral-900 border border-gray-800 hover:shadow-sm hover:shadow-gray-800 transition-shadow duration-300 ease-in-out'
                                                >
                                                    <div className='w-44 flex flex-col space-y-1'>
                                                        <h3 className="text-gray-400 font-semibold">
                                                            {transformation.fromTitle}
                                                        </h3>
                                                        <p className="text-gray-400 text-sm">
                                                            {transformation.fromDescription}
                                                        </p>
                                                    </div>
                                                    <div className='p-[1px] rounded-full bg-gradient-to-b from-neutral-600 via-neutral-900 to-neutral-600'>
                                                        <div className="relative w-6 h-14 flex flex-col rounded-full bg-gradient-to-r from-neutral-900 to-zinc-900">
                                                            <IconArrowRight className="text-gray-400 h-5 w-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                                        </div>
                                                    </div>
                                                    <div className='w-44 flex flex-col space-y-1'>
                                                        <h3 className="text-gray-400 font-semibold">
                                                            {transformation.toTitle}
                                                        </h3>
                                                        <p className="text-gray-400 text-sm">
                                                            {transformation.toDescription}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="inline-block">
                                        <div
                                            className="p-4 w-96 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-neutral-900 border border-gray-800 hover:shadow-sm hover:shadow-gray-800 transition-shadow duration-300 ease-in-out"
                                        >
                                            <div>
                                                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600 text-center text-3xl font-bold mt-16">
                                                    It will change everything
                                                </h3>
                                                <p className="text-gray-400 text-center text-sm mt-4">
                                                    ChatGPT is only the beginning.
                                                </p>
                                                <p className="text-gray-400 text-center text-sm">
                                                    We curated the most prominent use cases built on our platform below.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="inline-block">
                                        <div
                                            className="w-96 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-neutral-900 border border-gray-800 hover:shadow-sm hover:shadow-gray-800 transition-shadow duration-300 ease-in-out"
                                        >
                                            <img
                                                className="w-full h-full object-cover"
                                                src="blog/data-centricity.png"
                                                alt="Data Centricity"
                                            />
                                        </div>
                                    </div>

                                    <div className="inline-block">
                                        <div
                                            className="p-4 w-96 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-neutral-900 border border-gray-800 hover:shadow-sm hover:shadow-gray-800 transition-shadow duration-300 ease-in-out"
                                        >
                                            <div>
                                                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-600 text-center text-3xl font-bold mt-8">
                                                    And what is data-centric NLP?
                                                </h3>
                                                <p className="text-gray-400 text-center text-sm mt-4">
                                                    NLP models are a bit like students preparing for an exam.
                                                </p>
                                                <p className="text-gray-400 text-center text-sm">
                                                    They learn via index cards; on the upper half is the question, on the lower half is the answer.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="inline-block">
                                        <div
                                            className="p-4 w-96 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-neutral-900 border border-gray-800 hover:shadow-sm hover:shadow-gray-800 transition-shadow duration-300 ease-in-out"
                                        >
                                            <div className='absolute w-72 text-sm text-gray-500'>
                                                <span className='hidden md:block text-center'>
                                                    Hover over this card to see the response
                                                </span>
                                                <span className='block md:hidden text-center'>
                                                    Click on this card to see the response
                                                </span>
                                            </div>
                                            <div className='relative rounded-md border border-gray-600 bg-neutral-800 h-64 mt-12 hover:mt-0 transition-all duration-300 ease-in-out'>
                                                <div className='flex flex-col items-center justify-center text-white h-52'>
                                                    What is the capital of France?
                                                </div>
                                                <div className='flex flex-col items-center justify-center text-white h-12 border-t border-gray-600'>
                                                    Paris
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="inline-block">
                                        <div
                                            className="p-4 w-96 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-neutral-900 border border-gray-800 hover:shadow-sm hover:shadow-gray-800 transition-shadow duration-300 ease-in-out"
                                        >
                                            <div>
                                                <p className="text-gray-400 text-center text-2xl font-semibold mt-20">
                                                    Now imagine, you have the following index card to prepare for the exam.
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="inline-block">
                                        <div
                                            className="p-4 w-96 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-neutral-900 border border-gray-800 hover:shadow-sm hover:shadow-gray-800 transition-shadow duration-300 ease-in-out"
                                        >
                                            <div className='absolute w-72 text-sm text-gray-500'>
                                                <span className='hidden md:block text-center'>
                                                    Hover over this card to see the response
                                                </span>
                                                <span className='block md:hidden text-center'>
                                                    Click on this card to see the response
                                                </span>
                                            </div>
                                            <div className='relative rounded-md border border-gray-600 bg-neutral-800 h-64 mt-12 hover:mt-0 transition-all duration-300 ease-in-out'>
                                                <div className='flex flex-col items-center justify-center text-white h-52'>
                                                    What is the capital of France?
                                                </div>
                                                <div className='flex flex-col items-center justify-center text-white h-12 border-t border-gray-600'>
                                                    Berlin
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="inline-block">
                                        <div
                                            className="p-4 w-96 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-neutral-900 border border-gray-800 hover:shadow-sm hover:shadow-gray-800 transition-shadow duration-300 ease-in-out"
                                        >
                                            <div>
                                                <p className="text-gray-400 text-center text-2xl font-semibold mt-20">
                                                    Making sure that this doesn't happen is the key to data-centric NLP.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="inline-block">
                                        <div
                                            className="p-4 w-96 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-neutral-900 border border-gray-800 hover:shadow-sm hover:shadow-gray-800 transition-shadow duration-300 ease-in-out"
                                        >
                                            <div>
                                                <p className="text-gray-400 text-center text-2xl font-semibold mt-24">
                                                    And we're here to help <span className='text-yellow-500'>you</span> with that.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='mt-4 flex flex-row space-x-4 items-center'>
                            <div className='flex flex-row items-center space-x-2'>
                                <div className='p-2 rounded-full bg-neutral-900 border-gray-800 w-fit'>
                                    <IconArrowRight className='h-4 w-4 text-gray-100' />
                                </div>
                                <span className='text-white text-sm'>Scroll to the right</span>
                            </div>
                            <div>
                                <Link
                                    href="/file/kernai_pitch_deck.pdf" download
                                    className='flex flex-row items-center space-x-2 group text-gray-200 hover:text-white'>
                                    <div className='p-2 rounded-full bg-neutral-900 border-gray-800 w-fit'>
                                        <IconArrowRight className='h-4 w-4 text-gray-100  group-hover:text-white group-hover:rotate-90 transition-transform duration-300 ease-in-out' />
                                    </div>
                                    <span className='text-white text-sm'>Download slides</span>

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
