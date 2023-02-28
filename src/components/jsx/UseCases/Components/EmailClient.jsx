import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
    ChevronDownIcon,
} from '@heroicons/react/20/solid'
import { IconLoader2, IconRefresh } from '@tabler/icons'

const navigation = [
    {
        name: 'Integrates with',
        children: [
            { name: 'Outlook' },
            { name: 'Gmail' },
            { name: 'Zendesk' },
            { name: 'Intercom' },
            { name: 'Your own API' },
            { name: 'Speech (voice recordings)' }
        ],
    },
]

const messages = [
    {
        id: 1,
        subject: 'I love this tool!',
        sender: {
            name: 'Monica White',
            email: 'monica.white@acme.org',
        },
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'It is amazing to see how natural language processing can be used to automate email workflows. I love this tool!',
        thread: [
            {
                id: 1,
                author: {
                    name: 'Monica White',
                    email: 'monica.white@acme.org',
                },
                date: 'Wednesday at 4:35pm',
                datetime: '2021-01-27T16:35',
                body: `
                <p>It is amazing to see how natural language processing can be used to automate email workflows. I love this tool!</p>
                <p><strong style="font-weight: 600;">Monica White</strong><br/>Customer Service</p>
              `,
            }
        ],
        response: {
            text: 'Thanks, Monica! We are glad you like it!',
            sentiment: 'positive',
        }
    },
    {
        id: 2,
        subject: 'Downtime',
        sender: {
            name: 'Richard Hendricks',
            email: 'richard.hendricks@piedpiper.com',
        },
        date: '1d ago',
        datetime: '2021-01-28T10:35',
        preview:
            'Hi support, We are experiencing some downtime. Can you please look into this?',
        thread: [
            {
                id: 1,
                author: {
                    name: 'Richard Hendricks',
                    email: 'richard.hendricks@piedpiper.com'
                },
                date: 'Thursday at 10:35am',
                datetime: '2021-01-28T10:35',
                body: `
                <p>Hi support,</p>
                <p>We are experiencing some downtime. Can you please look into this?</p>
                <p><strong style="font-weight: 600;">Richard Hendricks</strong><br/>CEO & Founder Pied Piper</p>
              `,
            }
        ],
        response: {
            text: 'Hi Richard, We are looking into this. We will get back to you as soon as possible.',
            sentiment: 'negative',
        }
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function EmailClient() {

    const [selectedMessage, setSelectedMessage] = useState(messages[0])

    const [loading, setLoading] = useState(false)
    const [draftExists, setDraftExists] = useState(false)
    const [draftAccepted, setDraftAccepted] = useState(false)
    const [isCustomMessage, setIsCustomMessage] = useState(false)

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false)
                setDraftExists(true)
                setDraftAccepted(false)
            }, 523)
        }
    }, [loading])

    useEffect(() => {
        setDraftExists(false)
        setDraftAccepted(false)
    }, [selectedMessage])

    return (
        <>
            <div className='p-[1px] rounded-xl bg-gradient-to-b from-neutral-600 to-neutral-900'>

                <div className="relative h-[48rem] flex flex-col rounded-xl bg-neutral-900 p-[1px]">
                    {/* Top nav*/}
                    <header className="relative flex h-16 flex-shrink-0 items-center bg-neutral-900 rounded-t-xl">
                        {/* Logo area */}
                        <div className="absolute inset-y-0 left-0 lg:static lg:flex-shrink-0 border-r border-gray-800">
                            <div
                                className="flex h-16 w-16 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 lg:w-20 rounded-tl-xl"
                            />
                        </div>

                        {/* Desktop nav area */}
                        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:justify-end">
                            <div className="ml-10 flex flex-shrink-0 items-center space-x-10 pr-4">
                                <nav aria-label="Global" className="flex space-x-10">
                                    {navigation.map((item) =>
                                        item.children.length ? (
                                            <Menu as="div" key={item.name} className="relative text-left">
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
                                </nav>
                                <div className="flex items-center space-x-8">
                                    <div className="relative inline-block text-left">
                                        <div className="flex rounded-full bg-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                                            <span className="sr-only">Open user menu</span>
                                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Bottom section */}
                    <div className="flex min-h-0 flex-1 overflow-hidden">
                        {/* Narrow sidebar*/}
                        <nav aria-label="Sidebar" className="hidden lg:block lg:flex-shrink-0 lg:overflow-y-auto lg:bg-neutral-900 border-r border-t border-gray-800 rounded-bl-xl">
                            <div className="relative flex w-20 flex-col space-y-3 p-3" />
                        </nav>

                        {/* Main area */}
                        <main className="min-w-0 flex-1 border-t border-gray-800 xl:flex">
                            <section
                                aria-labelledby="message-heading"
                                className="flex h-full min-w-0 flex-1 flex-col overflow-hidden xl:order-last"
                            >
                                <div className="mb-6 min-h-0 flex-1 overflow-y-auto">
                                    <div className="bg-neutral-900 pt-5 pb-6 shadow">
                                        <div className="px-4 sm:flex sm:items-baseline sm:justify-between sm:px-6 lg:px-8">
                                            <div className="sm:w-0 sm:flex-1">
                                                <h1 id="message-heading" className="text-lg font-medium text-gray-100">
                                                    {selectedMessage.subject}
                                                </h1>
                                                <p className="mt-1 truncate text-sm text-gray-500">{selectedMessage.sender.email}</p>
                                            </div>

                                            {draftExists && (
                                                <div className="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start">
                                                    <span className={classNames(
                                                        "inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium",
                                                        selectedMessage.response.sentiment === 'positive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                    )}>
                                                        {selectedMessage.response.sentiment}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {/* Thread section*/}
                                    <ul role="list" className="space-y-2 py-4 sm:space-y-4 sm:px-6 lg:px-8">
                                        {selectedMessage.thread.map((item, index) => (
                                            <li key={item.id} className={classNames(
                                                "bg-neutral-800 px-4 py-6 shadow sm:rounded-lg sm:px-6",
                                                index % 2 === 0 ? 'mr-8' : 'ml-8'
                                            )}>
                                                <div className="sm:flex sm:items-baseline sm:justify-between">
                                                    <h3 className="text-base font-medium">
                                                        <span className="text-gray-100">{item.author.name}</span>{' '}
                                                        <span className="text-gray-300">wrote</span>
                                                    </h3>
                                                    <p className="mt-1 whitespace-nowrap text-sm text-gray-200 sm:mt-0 sm:ml-3">
                                                        <time dateTime={item.datetime}>{item.date}</time>
                                                    </p>
                                                </div>
                                                <div
                                                    className="mt-4 space-y-6 text-sm text-gray-300"
                                                    dangerouslySetInnerHTML={{ __html: item.body }}
                                                />
                                            </li>
                                        ))}
                                        {loading && (
                                            <div className='pt-12 flex items-center justify-end h-full'>
                                                <div className='rounded-full bg-stone-500 h-8 w-8 flex items-center justify-center'>
                                                    <IconLoader2 className='animate-spin h-5 w-5 text-gray-700' />
                                                </div>
                                            </div>
                                        )}
                                        {draftExists && (
                                            draftAccepted ? (
                                                <li key='response' className={classNames(
                                                    "bg-neutral-800 px-4 py-6 shadow sm:rounded-lg sm:px-6",
                                                    selectedMessage.thread.length % 2 === 0 ? 'mr-8' : 'ml-8'
                                                )}>
                                                    <div className="sm:flex sm:items-baseline sm:justify-between">
                                                        <h3 className="text-base font-medium">
                                                            <span className="text-gray-100">You</span>{' '}
                                                            <span className="text-gray-300">wrote</span>
                                                        </h3>
                                                        <p className="mt-1 whitespace-nowrap text-sm text-gray-200 sm:mt-0 sm:ml-3">
                                                            Now
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="mt-4 space-y-6 text-sm text-gray-300"
                                                        dangerouslySetInnerHTML={{ __html: selectedMessage.response.text }}
                                                    />
                                                </li>
                                            ) : (
                                                <li key='draft' className={classNames(
                                                    "bg-neutral-800 px-4 py-6 shadow sm:rounded-lg sm:px-6 bg-opacity-50 border-2 border-dashed border-gray-700",
                                                    selectedMessage.thread.length % 2 === 0 ? 'mr-8' : 'ml-8'
                                                )}>
                                                    <div className="sm:flex sm:items-baseline sm:justify-between">
                                                        <h3 className="text-base font-medium">
                                                            <span className="text-gray-100">You</span>{' '}
                                                            <span className="text-gray-300">drafted</span>
                                                        </h3>
                                                        <p className="mt-1 whitespace-nowrap text-sm text-gray-200 sm:mt-0 sm:ml-3">
                                                            Now
                                                        </p>
                                                    </div>
                                                    <div className='mt-4 flex flex-row justify-between'>
                                                        <div
                                                            className="space-y-6 text-sm text-gray-300"
                                                            dangerouslySetInnerHTML={{ __html: selectedMessage.response.text }}
                                                        />
                                                        <button
                                                            className="py-1.5 px-3 rounded-full bg-neutral-900 hover:bg-neutral-700 active:bg-neutral-800 transition-colors duration-200 text-gray-200 text-sm"
                                                            onClick={() => {
                                                                setDraftAccepted(true)
                                                            }}
                                                        >
                                                            Accept & Send
                                                        </button>
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    {!loading && (
                                        <div
                                            className='my-2 flex items-center justify-end px-4 sm:px-6 lg:px-8'
                                        >
                                            {draftExists ? (
                                                <div className='p-[1px] rounded-lg bg-gradient-to-r from-neutral-900 via-green-700 to-neutral-900 hover:from-neutral-800 hover:via-green-600 hover:to-neutral-800'>
                                                    <button
                                                        className="p-4 bg-[#141414] rounded-lg text-gray-200 flex flex-col items-center justify-center text-sm hover:bg-[#171717] active:bg-[#0f0f0f] hover:text-gray-300 transition-colors duration-200"
                                                        onClick={() => {
                                                            setDraftExists(false)
                                                            setLoading(true)
                                                        }}
                                                    >
                                                        <IconRefresh className='h-5 w-5' />
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className='p-[1px] rounded-lg bg-gradient-to-r from-neutral-900 via-green-700 to-neutral-900 hover:from-neutral-800 hover:via-green-600 hover:to-neutral-800'>
                                                    <button
                                                        className="h-16 px-4 bg-[#141414] rounded-lg text-gray-200 flex flex-col items-center justify-center text-sm hover:bg-[#171717] active:bg-[#0f0f0f] hover:text-gray-300 transition-colors duration-200"
                                                        onClick={() => {
                                                            setDraftExists(false)
                                                            setLoading(true)
                                                        }}
                                                    >
                                                        <div className='flex flex-row items-center font-semibold'>
                                                            Generate response draft
                                                        </div>
                                                        <p className='text-gray-500 text-sm ml-2'>
                                                            In production, this would happen in the background
                                                        </p>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </section>

                            {/* Message list*/}
                            <aside className="hidden xl:order-first xl:block xl:flex-shrink-0">
                                <div className="relative flex h-full w-96 flex-col border-r border-gray-800 bg-neutral-900">
                                    <div className="flex-shrink-0">
                                        <div className="flex h-16 flex-col justify-center bg-neutral-900 px-6">
                                            <div className="flex items-baseline space-x-3">
                                                <h2 className="text-lg font-medium text-gray-100">Inbox</h2>
                                                <p className="text-sm font-medium text-gray-500">{messages.length} messages</p>
                                            </div>
                                        </div>
                                        <div className="border-t border-b border-gray-800 bg-zinc-800 px-6 py-2 text-sm font-medium text-gray-500">
                                            Sorted by date
                                        </div>
                                    </div>
                                    <nav aria-label="Message list" className="min-h-0 flex-1 overflow-y-auto">
                                        <ul role="list" className="divide-y divide-gray-800 border-b border-gray-800">
                                            {messages.map((message) => (
                                                <li
                                                    key={message.id}
                                                    className="relative bg-neutral-900 py-5 px-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 hover:bg-neutral-800"
                                                >
                                                    <div className="flex justify-between space-x-3">
                                                        <div className="min-w-0 flex-1">
                                                            <div
                                                                className="block focus:outline-none cursor-pointer"
                                                                onClick={() => setSelectedMessage(message)}
                                                            >
                                                                <span className="absolute inset-0" aria-hidden="true" />
                                                                <p className="truncate text-sm font-medium text-gray-100">{message.sender.name}</p>
                                                                <p className="truncate text-sm text-gray-500">{message.subject}</p>
                                                            </div>
                                                        </div>
                                                        <time
                                                            dateTime={message.datetime}
                                                            className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                                                        >
                                                            {message.date}
                                                        </time>
                                                    </div>
                                                    <div className="mt-1">
                                                        <p className="text-sm text-gray-600 line-clamp-2">{message.preview}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </aside>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}