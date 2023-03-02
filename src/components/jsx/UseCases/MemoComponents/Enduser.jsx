import React, { useEffect, useState } from 'react'
import {
    BellIcon,
    CalendarIcon,
    PencilIcon,
} from '@heroicons/react/20/solid'
import { IconLoader2, IconMicrophone, IconPencil, IconSeo } from '@tabler/icons'
import { IconChevronDown, IconPlayerPause, IconPlayerPlay } from '@tabler/icons'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
    ChevronDownIcon,
} from '@heroicons/react/20/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Enduser() {

    const audioFiles = [{
        imgSrc: 'leo-speaker.png',
        name: 'Newest blog post',
        file: 'file_example_MP3_700KB.mp3',
    }]

    const navigation = [
        {
            name: 'Integrates with',
            children: [
                { name: 'Strapi' },
            ],
        },
    ]

    const [audioPlaying, setAudioPlaying] = useState(false)
    const [selectedAudio, setSelectedAudio] = useState(audioFiles[0])
    const [showTranscribed, setShowTranscribed] = useState(false)
    const [isLoadingTranscript, setIsLoadingTranscript] = useState(false)
    const [isTransformedContent, setIsTransformedContent] = useState(false)
    const [showTransformedContent, setShowTransformedContent] = useState(false)
    const [isLoadingTransformedContent, setIsLoadingTransformedContent] = useState(false)

    useEffect(() => {
        if (!showTranscribed) {
            setIsTransformedContent(false)
        }
    }, [showTranscribed])

    useEffect(() => {
        if (isLoadingTranscript) {
            setTimeout(() => {
                setIsLoadingTranscript(false)
                setShowTranscribed(true)
                setIsLoadingTransformedContent(true)
            }, 2000)
        }
    }, [isLoadingTranscript])

    useEffect(() => {
        if (isLoadingTransformedContent) {
            setTimeout(() => {
                setIsLoadingTransformedContent(false)
                setIsTransformedContent(true)
            }, 2000)
        }
    }, [isLoadingTransformedContent])

    return (
        <>
            {showTranscribed ? (
                <div className='p-[1px] h-[48rem] rounded-xl bg-gradient-to-b from-neutral-600 to-neutral-900'>
                    <div className="flex min-h-full bg-neutral-900 rounded-xl">
                        {/* Static sidebar for desktop */}
                        <div className="lg:inset-y-0 lg:flex lg:w-64">
                            {/* Sidebar component, swap this element with another sidebar if you like */}
                            <div className="flex min-h-0 flex-1 flex-col">
                                <div className="flex h-16 flex-shrink-0 items-center border-b border-r border-gray-800 bg-[#1c1c1c] px-4 rounded-tl-xl">

                                </div>
                                <div className="flex flex-1 flex-col overflow-y-auto border-r border-gray-800 bg-[#1c1c1c] rounded-bl-xl">
                                    <nav className="flex flex-col space-y-4 pl-4 pr-8 py-4">
                                        <div
                                            className='bg-neutral-700 h-2.5 w-full rounded-full'
                                        />
                                        <div
                                            className='bg-neutral-800 h-2.5 w-1/2 rounded-full'
                                        />
                                        <div
                                            className='bg-neutral-800 h-2.5 w-1/2 rounded-full'
                                        />
                                        <div
                                            className='bg-neutral-800 h-2.5 w-1/2 rounded-full'
                                        />

                                        <div
                                            className='bg-neutral-700 h-2.5 w-full rounded-full'
                                        />
                                        <div
                                            className='bg-neutral-800 h-2.5 w-1/2 rounded-full'
                                        />
                                        <div
                                            className='bg-neutral-800 h-2.5 w-1/2 rounded-full'
                                        />
                                        <div
                                            className='bg-neutral-800 h-2.5 w-1/2 rounded-full'
                                        />
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-0 flex-1 flex-col">
                            <div className="sticky top-0 z-10 flex h-16 items-center justify-between flex-shrink-0 border-b border-gray-800 bg-neutral-900 rounded-tr-xl">
                                <span
                                    className='ml-8 text-gray-300 text-sm hover:text-gray-100 cursor-pointer'
                                    onClick={() => setShowTranscribed(false)}
                                >
                                    Go back to audio recording
                                </span>
                                {navigation.map((item) =>
                                    item.children.length ? (
                                        <Menu as="div" key={item.name} className="mr-8 relative text-left">
                                            <Menu.Button className="flex items-center rounded-md text-sm font-medium text-gray-100 focus:outline-none hover:text-gray-300">
                                                <span>{item.name}</span>
                                                <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-500" aria-hidden="true" />
                                            </Menu.Button>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-neutral-900 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        {item.children.map((child) => (
                                                            <Menu.Item key={child.name}>
                                                                {({ active }) => (
                                                                    <div
                                                                        className={classNames(
                                                                            active ? 'bg-neutral-800' : '',
                                                                            'block px-4 py-2 text-sm text-gray-300'
                                                                        )}
                                                                    >
                                                                        {child.name}
                                                                    </div>
                                                                )}
                                                            </Menu.Item>
                                                        ))}
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    ) : (
                                        <a key={item.name} href={item.href} className="text-sm font-medium text-gray-100">
                                            {item.name}
                                        </a>
                                    )
                                )}
                            </div>
                            <main className="flex-1">
                                <div className="py-2 xl:py-2">
                                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8  xl:max-w-5xl">
                                        {showTransformedContent ? (
                                            <div className='mt-4 xl:grid xl:grid-cols-3'>
                                                <div className="xl:col-span-2 xl:border-r xl:border-gray-800 xl:pr-8">
                                                    <div>
                                                        <div>
                                                            <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6 xl:border-gray-800">
                                                                <div>
                                                                    <h1 className="text-2xl font-bold text-gray-100">My content</h1>
                                                                </div>
                                                                <div className="mt-4 flex space-x-3 md:mt-0">
                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex justify-center rounded-md border border-gray-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-gray-300 shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                                                        disabled
                                                                    >
                                                                        <IconPencil className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                                                        <span>Edit</span>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex justify-center rounded-md border border-gray-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-gray-300 shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                                                        onClick={() => setShowTransformedContent(false)}
                                                                    >
                                                                        <IconMicrophone className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                                                        <span>See full transcript</span>
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            <div className="py-3 xl:pt-6 xl:pb-0">
                                                                <h2 className="sr-only">Description</h2>
                                                                <div className="max-h-[34rem] h-screen prose max-w-none text-gray-500">
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, hic? Commodi cumque
                                                                        similique id tempora molestiae deserunt at suscipit, dolor voluptatem, numquam, harum
                                                                        consequatur laboriosam voluptas tempore aut voluptatum alias?
                                                                    </p>
                                                                    <ul role="list">
                                                                        <li>
                                                                            Tempor ultrices proin nunc fames nunc ut auctor vitae sed. Eget massa parturient vulputate
                                                                            fermentum id facilisis nam pharetra. Aliquet leo tellus.
                                                                        </li>
                                                                        <li>Turpis ac nunc adipiscing adipiscing metus tincidunt senectus tellus.</li>
                                                                        <li>
                                                                            Semper interdum porta sit tincidunt. Dui suspendisse scelerisque amet metus eget sed. Ut
                                                                            tellus in sed dignissim.
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <aside className="hidden xl:block xl:pl-8">
                                                    <h2 className="sr-only">Details</h2>
                                                    <div className="space-y-5">

                                                        <div className="mt-4 flex items-center space-x-2">
                                                            <CalendarIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
                                                            <span className="text-sm font-medium text-gray-100">
                                                                Created on <time dateTime="2020-12-02">{new Date().toLocaleDateString()}</time>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 space-y-8 border-t border-gray-800 py-6">

                                                        <div>
                                                            <h2 className="text-sm font-medium text-gray-400">Tags</h2>
                                                            <ul role="list" className="mt-2 leading-8">
                                                                <li className="inline">
                                                                    <a
                                                                        href="#"
                                                                        className="relative inline-flex items-center rounded-full border border-gray-800 px-3 py-0.5"
                                                                    >
                                                                        <div className="absolute flex flex-shrink-0 items-center justify-center">
                                                                            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                                                                        </div>
                                                                        <div className="ml-3.5 text-sm font-medium text-gray-100">Bug</div>
                                                                    </a>{' '}
                                                                </li>
                                                                <li className="inline">
                                                                    <a
                                                                        href="#"
                                                                        className="relative inline-flex items-center rounded-full border border-gray-800 px-3 py-0.5"
                                                                    >
                                                                        <div className="absolute flex flex-shrink-0 items-center justify-center">
                                                                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                                                                        </div>
                                                                        <div className="ml-3.5 text-sm font-medium text-gray-100">Accessibility</div>
                                                                    </a>{' '}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </aside>
                                            </div>
                                        ) : (
                                            <div className='mt-4 xl:grid xl:grid-cols-3'>
                                                <div className="xl:col-span-2 xl:border-r xl:border-gray-800 xl:pr-8">
                                                    <div>
                                                        <div>
                                                            <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6 xl:border-gray-800">
                                                                <div>
                                                                    <h1 className="text-2xl font-bold text-gray-100">Transcript</h1>
                                                                </div>
                                                                <div className="mt-4 flex space-x-3 md:mt-0">

                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex justify-center rounded-md border border-gray-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-gray-300 shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                                                        onClick={() => setShowTransformedContent(true)}
                                                                        disabled={!isTransformedContent}
                                                                    >
                                                                        <IconSeo className="-ml-1 mt-0.5 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                                                        {!isTransformedContent ? (
                                                                            <span className='flex flex-row items-center space-x-1'>
                                                                                Calculating SEO-optimized content

                                                                                <IconLoader2 className="animate-spin -mr-1 ml-2 h-4 w-4 text-gray-500" aria-hidden="true" />
                                                                            </span>
                                                                        ) : (
                                                                            <span>See SEO-optimized content</span>

                                                                        )}
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            <div className="py-3 xl:pt-6 xl:pb-0">
                                                                <h2 className="sr-only">Description</h2>
                                                                <div className="prose max-w-none text-gray-500">
                                                                    <p className='max-h-[34rem] overflow-auto'>
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum sem eget lectus eleifend, eu consectetur mi tincidunt. Sed fermentum, mi at laoreet laoreet, enim sem cursus orci, ac posuere dolor massa a dolor. Donec sed ex justo. Vivamus vulputate dui id sapien varius sodales. Curabitur nec euismod leo. Donec blandit ut nunc eget suscipit. Duis libero metus, congue quis varius sit amet, egestas in mi. Mauris tempus, purus nec pellentesque rhoncus, odio mauris viverra velit, vel tempor quam leo non mi. Ut lacinia massa eget efficitur laoreet.

                                                                        Suspendisse venenatis tempor tortor vel suscipit. Fusce non lectus ut sem gravida laoreet iaculis sed purus. Ut at magna in massa pretium porta. Vivamus efficitur, nisl in consequat aliquet, purus ex ultrices turpis, ut ornare elit libero eu erat. Ut cursus ligula vitae tempor gravida. Donec quis luctus lacus. Integer consequat eu libero a condimentum. Nulla commodo nunc ac lorem vestibulum malesuada. Integer sit amet quam id lacus bibendum lacinia. Duis ac pulvinar risus.

                                                                        Etiam porta lacus eu nunc gravida lobortis vel sit amet quam. Curabitur nec rhoncus sapien, vitae suscipit orci. Integer placerat, magna nec maximus pellentesque, ex augue varius libero, id euismod nunc tellus ut lorem. Nullam interdum libero non rutrum auctor. Etiam ligula leo, vulputate sit amet eleifend et, interdum vel ipsum. Morbi consectetur massa mi, a commodo sem vulputate sit amet. Vestibulum non sapien sollicitudin, pellentesque mauris a, laoreet est.

                                                                        Sed ut tempor dolor. Aliquam erat volutpat. Vivamus semper condimentum massa sit amet tincidunt. Fusce pellentesque ante a sapien vestibulum hendrerit. Suspendisse vel arcu sit amet est scelerisque tincidunt et vel tellus. Praesent molestie a purus sit amet dapibus. Phasellus scelerisque dapibus ipsum, ut dictum nisi blandit at. Cras rutrum nisi vel orci commodo elementum. Donec lacinia tortor eu turpis semper, eu congue ante dignissim. Aliquam consequat nec dolor ut luctus. Praesent iaculis sodales maximus.

                                                                        Nam ut dapibus risus, in aliquet libero. Quisque est augue, efficitur eu sem id, vestibulum placerat velit. In blandit lectus nisl, ac hendrerit libero posuere ut. Nulla augue mauris, aliquet a lectus ac, egestas consectetur quam. Maecenas rutrum, est sed maximus rhoncus, velit erat luctus tellus, a viverra nisi arcu id est. Ut nec sapien eleifend, venenatis purus sed, lacinia quam. Donec vel placerat tellus.

                                                                        Aliquam ipsum nisi, volutpat vel tempor eu, cursus sed tellus. Sed nisl quam, pulvinar at purus vel, facilisis fermentum odio. Phasellus purus mi, tempor vitae nulla non, pharetra tempus erat. Suspendisse facilisis consequat ex venenatis lacinia. Vivamus fermentum gravida purus, ut pellentesque ipsum viverra at. Cras pretium egestas tortor, a placerat lorem consectetur vitae. Morbi ac euismod velit, ac imperdiet augue. Nulla vitae tortor ut risus imperdiet ultricies. Fusce fringilla id orci eget gravida. In hac habitasse platea dictumst. Integer non nisl vitae enim condimentum sollicitudin eu ut lectus. Quisque et efficitur ipsum. Ut elit ante, aliquam nec condimentum eu, consequat vitae diam. Nulla eu lacus id turpis eleifend sodales. Suspendisse augue augue, pharetra id mauris quis, facilisis porttitor erat. Nullam augue justo, congue non tempus sed, accumsan et purus.

                                                                        Integer vehicula tristique nulla, faucibus sagittis lorem auctor non. Nam auctor ornare enim, ac interdum est volutpat quis. Duis hendrerit imperdiet diam, quis mattis ligula lacinia ut. Maecenas non mauris vel ex rhoncus maximus vitae a leo. Donec porta, ante ut convallis gravida, ante ipsum venenatis nunc, ac luctus purus elit a magna. In nulla justo, tempus sit amet pretium sit amet, cursus at mauris. Sed in nisi tempor tortor tempor malesuada. Integer id neque at diam pretium semper eu convallis metus. Curabitur quis elementum dolor. Vestibulum cursus sapien a ligula lobortis, sed sagittis odio tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis diam mattis, dignissim ligula non, hendrerit nulla. Ut tempus, velit ac vulputate porta, sem nisi efficitur elit, sed convallis sem turpis ac ipsum. Donec quis turpis eros. Nullam maximus lectus eu est condimentum, eget tincidunt nunc suscipit. Morbi tincidunt, odio in aliquet eleifend, leo neque venenatis massa, eget vulputate ipsum nisi condimentum tellus.

                                                                        Sed diam turpis, imperdiet id lobortis in, fringilla hendrerit sem. Sed pulvinar leo vitae nisi fringilla ultricies. Maecenas vitae lectus vitae arcu finibus malesuada ac eget ex. Vivamus arcu leo, maximus sit amet nunc non, ornare congue magna. Nullam vitae scelerisque purus. Duis sed lacus urna. Praesent eget viverra turpis. Nunc aliquet libero non volutpat semper. Cras libero massa, consectetur a posuere in, pulvinar eget sem. Mauris malesuada pharetra faucibus. Nam eleifend nisl at sapien feugiat pellentesque vitae ac libero. Phasellus ultricies facilisis porttitor. Nunc pharetra mi in ligula ultricies, non sodales tellus consectetur. Maecenas et leo tellus. Donec et pretium lacus, et volutpat ligula.

                                                                        Suspendisse quis lectus dictum, pulvinar risus quis, mattis ante. Morbi consectetur consequat urna, id pharetra mauris imperdiet vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus malesuada lacus vitae urna porttitor ullamcorper. Sed ut erat venenatis, fringilla diam ut, vestibulum dolor. Maecenas ac consequat nisi. Etiam sollicitudin lacus et erat accumsan elementum. Aliquam pretium orci diam, sed efficitur quam interdum in. Vestibulum eget sollicitudin eros. Donec ut ultricies turpis, et volutpat metus. Nulla facilisi. Nullam hendrerit quam a fringilla facilisis. Sed tempor erat in dictum pulvinar. In quis dui blandit, varius orci a, consequat enim. Donec volutpat lobortis ex, at iaculis odio tempor vitae.

                                                                        Nunc vel pretium lectus, quis rutrum libero. Nunc elementum tincidunt augue, et placerat justo vestibulum non. Quisque vehicula purus nec elit porttitor rhoncus. Nam interdum rhoncus nunc tincidunt ultrices. Aenean eget maximus urna. Sed egestas purus lorem, accumsan auctor odio vulputate et. Vestibulum vel facilisis est, eu semper massa. Etiam vehicula enim a lobortis egestas. Integer porttitor tortor ut efficitur feugiat. Pellentesque vitae tortor in metus venenatis venenatis luctus in leo. Sed fermentum sagittis rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi sollicitudin sapien nec ante hendrerit tristique. Duis sagittis risus eget malesuada laoreet. Phasellus pellentesque ornare fermentum. Phasellus nec varius erat.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <aside className="mt-4 hidden xl:block xl:pl-8">
                                                    <h2 className="sr-only">Details</h2>
                                                    <div className="space-y-5">

                                                        <div className="flex items-center space-x-2">
                                                            <CalendarIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
                                                            <span className="text-sm font-medium text-gray-100">
                                                                Created on <time dateTime="2020-12-02">{new Date().toLocaleDateString()}</time>
                                                            </span>
                                                        </div>
                                                    </div>

                                                </aside>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </main>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <svg viewBox="0 0 366 729" role="img" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                        <defs>
                            <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                                <rect width={316} height={684} rx={36} />
                            </clipPath>
                        </defs>
                        <path
                            fill="#4B5563"
                            d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                        />
                        <path
                            fill="#343E4E"
                            d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                        />
                        <foreignObject
                            width={316}
                            height={684}
                            transform="translate(24 24)"
                            clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                        >

                            <div className='flex h-full items-end justify-center'>
                                <img
                                    src="/gradient-bg.png"
                                    className='absolute w-full h-full object-cover grayscale opacity-50'
                                />
                                <div className='my-4 flex items-center relative py-6 px-4 rounded-3xl bg-neutral-200 bg-opacity-50 shadow-md border border-gray-500'>
                                    <div>
                                        <div className='flex flex-col space-y-4 p-2 rounded-2xl bg-neutral-900 border-gray-800 w-fit'>
                                            <div className='flex flex-row bg-neutral-800 rounded-full space-x-5'>
                                                <img
                                                    src={`/audio/${selectedAudio.imgSrc}`}
                                                    className='w-8 h-8 rounded-full'
                                                />

                                                <div className='flex flex-row items-center text-sm text-gray-300 space-x-2'>
                                                    <span>{selectedAudio.name}</span>
                                                    <IconChevronDown className='w-4 h-4 text-gray-500' />
                                                </div>

                                                <button
                                                    onClick={() => {
                                                        if (audioPlaying) {
                                                            document.getElementById('player').pause()
                                                            setAudioPlaying(false)
                                                        } else {
                                                            document.getElementById('player').play()
                                                            setAudioPlaying(true)
                                                        }
                                                    }}
                                                    className={classNames(
                                                        audioPlaying ? 'bg-red-500' : 'bg-green-500',
                                                        'flex flex-row items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ease-in-out'
                                                    )}
                                                >
                                                    {audioPlaying ? (
                                                        <IconPlayerPause size={20} />
                                                    ) : (
                                                        <IconPlayerPlay size={20} />
                                                    )}
                                                </button>
                                            </div>
                                            <div
                                                className='flex flex-row items-center justify-center  p-[1px] bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 rounded-full'
                                            >
                                                <button
                                                    className='flex flex-row items-center justify-center w-full p-2 bg-black rounded-full text-white text-sm'
                                                    onClick={() => {
                                                        setIsLoadingTranscript(true)
                                                    }}
                                                >
                                                    Transcribe audio
                                                    {isLoadingTranscript && (
                                                        <IconLoader2 className='w-4 h-4 text-gray-500 animate-spin ml-1' />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                        <audio id="player" src={`/audio/${selectedAudio.file}`} />
                                    </div>
                                </div>
                            </div>
                        </foreignObject>
                    </svg>
                </div>
            )}
        </>
    )
}
