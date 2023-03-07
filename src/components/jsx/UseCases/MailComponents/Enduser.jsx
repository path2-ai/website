import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
    ChevronDownIcon,
} from '@heroicons/react/20/solid'
import { IconFilter, IconLoader2, IconRefresh } from '@tabler/icons'
import { CustomMailModal } from './CustomMailModal'
import { InView } from 'react-intersection-observer';

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

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Enduser() {

    const [messages, setMessages] = useState([
        {
            id: 1,
            subject: 'I love this tool!',
            sender: {
                name: 'Monica White',
                email: 'monica.white@acme.org',
            },
            userDefinedMail: false,
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
                    date: 'Wed. at 4:35pm',
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
            userDefinedMail: false,
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
                    <p>Hi, how exactly can I deploy a gates API? Thanks</p>
                  `,
                },
                {
                    id: 2,
                    author: {
                        name: 'You',
                        email: 'you@your-company.com'
                    },
                    date: 'Thursday at 10:37am',
                    datetime: '2021-01-28T10:37',
                    body: `
                    <p>Hi Richard,</p>
                    <p>Simply head over to your gates overview and configure the API settings. <a class="underline" href="https://docs.kern.ai/gates">Here are the docs</a>.</p>
                  `,
                },
                {
                    id: 3,
                    author: {
                        name: 'Richard Hendricks',
                        email: 'richard.hendricks@piedpiper.com'
                    },
                    date: 'Thursday at 10:35am',
                    datetime: '2021-01-28T10:35',
                    body: `
                    <p>Hi support, we are experiencing some downtime. Can you please look into this?</p>
                    <p><strong style="font-weight: 600;">Richard Hendricks</strong></p>
                  `,
                },
            ],
            response: {
                text: 'Hi Richard, We are looking into this. We will get back to you as soon as possible.',
                sentiment: 'negative',
            }
        },
    ])

    const [selectedMessage, setSelectedMessage] = useState(messages[0])
    const [messagesInFilter, setMessagesInFilter] = useState(messages)

    const [loading, setLoading] = useState(false)
    const [draftAccepted, setDraftAccepted] = useState(false)
    const [openCustomMailModal, setOpenCustomMailModal] = useState(false)
    const [classifiedMessageIds, setClassifiedMessageIds] = useState([])
    const [acceptedDraftMessageIds, setAcceptedDraftMessageIds] = useState([])
    const [filterOnSentiment, setFilterOnSentiment] = useState(null)

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false)
                setDraftAccepted(false)

                setClassifiedMessageIds(computedMessages => [...computedMessages, selectedMessage.id])
            }, 523)
        }
    }, [loading])

    useEffect(() => {
        setDraftAccepted(false)
    }, [selectedMessage])

    useEffect(() => {
        if (classifiedMessageIds.includes(selectedMessage.id)) {
            setAcceptedDraftMessageIds(computedMessages => [...computedMessages, selectedMessage.id])
        }
    }, [draftAccepted])


    useEffect(() => {
        if (filterOnSentiment) {
            setMessagesInFilter(messages.filter(message => message.response.sentiment === filterOnSentiment && classifiedMessageIds.includes(message.id)))
        } else {
            setMessagesInFilter(messages)
        }
    }, [filterOnSentiment, messages])

    return (
        <>
            <InView as="div" onChange={(inView, entry) => {
                if (!classifiedMessageIds.includes(selectedMessage.id)) {
                    setLoading(inView)
                }
            }}>
                <div className='hidden md:block p-[1px] rounded-xl bg-gradient-to-b from-neutral-600 to-neutral-900 m-4'>
                    <div className="relative h-[48rem] flex flex-col rounded-xl bg-neutral-900 p-[1px]">
                        {/* Top nav*/}
                        <header className="relative flex h-16 flex-shrink-0 items-center bg-neutral-900 rounded-t-xl">
                            {/* Logo area */}
                            <div className="hidden lg:block absolute inset-y-0 left-0 lg:static lg:flex-shrink-0 border-r border-gray-800">
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
                            <main className="min-w-0 flex flex-row border-t border-gray-800 xl:flex">
                                {/* Message list*/}
                                <aside className="hidden md:block xl:flex-shrink-0">
                                    <div className="relative flex h-full w-96 flex-col border-r border-gray-800 bg-neutral-900">
                                        <div className="flex-shrink-0">
                                            <div className="flex h-16 flex-row items-center justify-between bg-neutral-900 px-6">
                                                <div className="flex items-baseline space-x-3">
                                                    <h2 className="text-lg font-medium text-gray-100">Inbox</h2>
                                                    <p className="text-sm font-medium text-gray-500">{messagesInFilter.length} messages</p>
                                                </div>
                                                <div className='flex flex-row items-center space-x-2'>
                                                    {filterOnSentiment && (
                                                        <div className={classNames(
                                                            "mt-1 inline-flex items-center rounded-lg px-1.5 py-0.5 text-xs",
                                                            filterOnSentiment === 'positive' ? 'bg-green-700 text-green-400' : (filterOnSentiment === 'negative' ? 'bg-red-700 text-red-400' : 'bg-yellow-700 text-yellow-400')
                                                        )}>
                                                            {filterOnSentiment}
                                                        </div>
                                                    )}
                                                    <Menu as="div" key="filter" className="relative text-left">
                                                        <Menu.Button className="mt-2">
                                                            <IconFilter className='h-5 w-5 text-gray-500 hover:text-gray-300 transition-colors duration-200' />
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
                                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-neutral-900 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
                                                                <div className="py-1">
                                                                    <Menu.Item key="remove">
                                                                        {({ active }) => (
                                                                            <div
                                                                                className={classNames(
                                                                                    active ? 'bg-neutral-800' : '',
                                                                                    'block px-4 py-2 text-sm text-gray-300 cursor-pointer'
                                                                                )}
                                                                                onClick={() => {
                                                                                    setFilterOnSentiment(null)
                                                                                }}
                                                                            >
                                                                                remove filter
                                                                            </div>
                                                                        )}
                                                                    </Menu.Item>
                                                                    <Menu.Item key="positive">
                                                                        {({ active }) => (
                                                                            <div
                                                                                className={classNames(
                                                                                    active ? 'bg-neutral-800' : '',
                                                                                    'block px-4 py-2 text-sm text-gray-300 cursor-pointer'
                                                                                )}
                                                                                onClick={() => {
                                                                                    setFilterOnSentiment('positive')
                                                                                }}
                                                                            >
                                                                                positive
                                                                            </div>
                                                                        )}
                                                                    </Menu.Item>
                                                                    <Menu.Item key="neutral">
                                                                        {({ active }) => (
                                                                            <div
                                                                                className={classNames(
                                                                                    active ? 'bg-neutral-800' : '',
                                                                                    'block px-4 py-2 text-sm text-gray-300 cursor-pointer'
                                                                                )}
                                                                                onClick={() => {
                                                                                    setFilterOnSentiment('neutral')
                                                                                }}
                                                                            >
                                                                                neutral
                                                                            </div>
                                                                        )}
                                                                    </Menu.Item>
                                                                    <Menu.Item key="negative">
                                                                        {({ active }) => (
                                                                            <div
                                                                                className={classNames(
                                                                                    active ? 'bg-neutral-800' : '',
                                                                                    'block px-4 py-2 text-sm text-gray-300 cursor-pointer'
                                                                                )}
                                                                                onClick={() => {
                                                                                    setFilterOnSentiment('negative')
                                                                                }}
                                                                            >
                                                                                negative
                                                                            </div>
                                                                        )}
                                                                    </Menu.Item>
                                                                </div>
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                </div>
                                            </div>
                                            <div className="border-t border-b border-gray-800 bg-zinc-800 px-6 py-2 text-sm font-medium text-gray-500">
                                                Sorted by date
                                            </div>
                                        </div>
                                        <nav aria-label="Message list" className="min-h-0 flex-1 overflow-y-auto">
                                            <ul role="list" className="divide-y divide-gray-800 border-b border-gray-800">
                                                {messagesInFilter.map((message) => (
                                                    <li
                                                        key={message.id}
                                                        className={classNames(
                                                            message.id === selectedMessage?.id ? "bg-zinc-800" : "bg-neutral-900",
                                                            "relative py-5 px-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 hover:bg-neutral-800"
                                                        )}
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
                                                        {loading && selectedMessage?.id === message.id && (
                                                            <div className={classNames(
                                                                "mt-1 inline-flex items-center rounded-lg p-1.5 text-xs bg-neutral-700 text-stone-400",
                                                            )}>
                                                                <IconLoader2 className='h-4 w-4 animate-spin' />
                                                            </div>
                                                        )}
                                                        {classifiedMessageIds.includes(message.id) && (
                                                            <div className={classNames(
                                                                selectedMessage?.id === message.id && loading && "hidden",
                                                                "mt-1 inline-flex items-center rounded-lg px-1.5 py-0.5 text-xs",
                                                                message.response.sentiment === 'positive' ? 'bg-green-700 text-green-400' : (message.response.sentiment === 'negative' ? 'bg-red-700 text-red-400' : 'bg-yellow-700 text-yellow-400')
                                                            )}>
                                                                {message.response.sentiment}
                                                            </div>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                            {/* <button
                                                type='button'
                                                className='relative bg-neutral-900 py-5 px-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 hover:bg-neutral-800 text-white text-sm focus:ring-green-500'
                                                onClick={() => setOpenCustomMailModal(true)}
                                            >
                                                Click here to enter a message yourself, and see how the draft is generated
                                            </button> */}
                                        </nav>
                                    </div>
                                </aside>


                                <section
                                    aria-labelledby="message-heading"
                                    className="flex h-full min-w-0 flex-1 flex-col overflow-hidden"
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

                                                {classifiedMessageIds.includes(selectedMessage.id) && (
                                                    <div className="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start">
                                                        <span className={classNames(
                                                            "inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium",
                                                            selectedMessage.response.sentiment === 'positive' ? 'bg-green-700 text-green-400' : (selectedMessage.response.sentiment === 'negative' ? 'bg-red-700 text-red-400' : 'bg-yellow-700 text-yellow-400')
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
                                            {(classifiedMessageIds.includes(selectedMessage.id) || acceptedDraftMessageIds.includes(selectedMessage.id)) && (
                                                (draftAccepted || acceptedDraftMessageIds.includes(selectedMessage.id)) ? (
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
                                        {!loading && !acceptedDraftMessageIds.includes(selectedMessage.id) && (
                                            <div
                                                className='my-2 flex items-center justify-end px-4 sm:px-6 lg:px-8'
                                            >
                                                {classifiedMessageIds.includes(selectedMessage.id) ? (
                                                    <div className='p-[1px] rounded-lg bg-gradient-to-r from-neutral-900 via-green-700 to-neutral-900 hover:from-neutral-800 hover:via-green-600 hover:to-neutral-800'>
                                                        <button
                                                            className="p-4 bg-[#141414] rounded-lg text-gray-200 flex flex-col items-center justify-center text-sm hover:bg-[#171717] active:bg-[#0f0f0f] hover:text-gray-300 transition-colors duration-200"
                                                            onClick={() => {
                                                                setLoading(true)
                                                                setClassifiedMessageIds(classifiedMessageIds.filter((messageId) => messageId !== selectedMessage.id))
                                                            }}
                                                        >
                                                            <IconRefresh className='h-5 w-5' />
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div className='p-[1px] rounded-lg bg-gradient-to-r from-neutral-900 via-green-700 to-neutral-900 hover:from-neutral-800 hover:via-green-600 hover:to-neutral-800'>
                                                        <button
                                                            className="h-20 px-4 bg-[#141414] rounded-lg text-gray-200 flex flex-col items-center justify-center text-sm hover:bg-[#171717] active:bg-[#0f0f0f] hover:text-gray-300 transition-colors duration-200"
                                                            onClick={() => {
                                                                setLoading(true)
                                                            }}
                                                        >
                                                            <div className='flex flex-row items-center font-semibold'>
                                                                Classify mail and generate draft
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
                            </main>
                        </div>
                    </div>
                    <CustomMailModal open={openCustomMailModal} setOpen={setOpenCustomMailModal} messages={messages} setMessages={setMessages} />
                </div>
                <div className='block md:hidden text-white'>
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

                                <div className='flex flex-col justify-start h-full bg-neutral-900'>
                                    <div className="flex-shrink-0">
                                        <div className="flex h-16 flex-row items-center justify-between bg-neutral-900 px-6">
                                            <div className="flex items-baseline space-x-3">
                                                <h2 className="text-lg font-medium text-gray-100">Inbox</h2>
                                                <p className="text-sm font-medium text-gray-500">{messagesInFilter.length} messages</p>
                                            </div>
                                            <div className='flex flex-row items-center space-x-2'>
                                                {filterOnSentiment && (
                                                    <div className={classNames(
                                                        "mt-1 inline-flex items-center rounded-lg px-1.5 py-0.5 text-xs",
                                                        filterOnSentiment === 'positive' ? 'bg-green-700 text-green-400' : (filterOnSentiment === 'negative' ? 'bg-red-700 text-red-400' : 'bg-yellow-700 text-yellow-400')
                                                    )}>
                                                        {filterOnSentiment}
                                                    </div>
                                                )}
                                                <Menu as="div" key="filter" className="relative text-left">
                                                    <Menu.Button className="mt-2">
                                                        <IconFilter className='h-5 w-5 text-gray-500 hover:text-gray-300 transition-colors duration-200' />
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
                                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-neutral-900 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
                                                            <div className="py-1">
                                                                <Menu.Item key="remove">
                                                                    {({ active }) => (
                                                                        <div
                                                                            className={classNames(
                                                                                active ? 'bg-neutral-800' : '',
                                                                                'block px-4 py-2 text-sm text-gray-300 cursor-pointer'
                                                                            )}
                                                                            onClick={() => {
                                                                                setFilterOnSentiment(null)
                                                                            }}
                                                                        >
                                                                            remove filter
                                                                        </div>
                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item key="positive">
                                                                    {({ active }) => (
                                                                        <div
                                                                            className={classNames(
                                                                                active ? 'bg-neutral-800' : '',
                                                                                'block px-4 py-2 text-sm text-gray-300 cursor-pointer'
                                                                            )}
                                                                            onClick={() => {
                                                                                setFilterOnSentiment('positive')
                                                                            }}
                                                                        >
                                                                            positive
                                                                        </div>
                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item key="neutral">
                                                                    {({ active }) => (
                                                                        <div
                                                                            className={classNames(
                                                                                active ? 'bg-neutral-800' : '',
                                                                                'block px-4 py-2 text-sm text-gray-300 cursor-pointer'
                                                                            )}
                                                                            onClick={() => {
                                                                                setFilterOnSentiment('neutral')
                                                                            }}
                                                                        >
                                                                            neutral
                                                                        </div>
                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item key="negative">
                                                                    {({ active }) => (
                                                                        <div
                                                                            className={classNames(
                                                                                active ? 'bg-neutral-800' : '',
                                                                                'block px-4 py-2 text-sm text-gray-300 cursor-pointer'
                                                                            )}
                                                                            onClick={() => {
                                                                                setFilterOnSentiment('negative')
                                                                            }}
                                                                        >
                                                                            negative
                                                                        </div>
                                                                    )}
                                                                </Menu.Item>
                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </div>
                                        </div>
                                        <div className="border-t border-b border-gray-800 bg-zinc-800 px-6 py-2 text-sm font-medium text-gray-500">
                                            Sorted by date
                                        </div>
                                    </div>
                                    {messagesInFilter.map((message) => (
                                        <div
                                            key={message.id}
                                            className='flex flex-col space-y-3 p-6 w-full bg-neutral-900 border-b border-gray-800'
                                        >
                                            <div className='flex flex-row items-center justify-between'>
                                                <p className='text-gray-100 text-sm'>
                                                    {message.sender.name}
                                                </p>
                                                <p className='text-gray-400 text-sm'>
                                                    {message.date}
                                                </p>
                                            </div>

                                            <h3 className='text-gray-100'>
                                                {message.subject}
                                            </h3>
                                            <p className='text-gray-400'>
                                                {message.preview}
                                            </p>
                                            <div className={classNames(
                                                selectedMessage?.id === message.id && loading && "hidden",
                                                "w-fit inline-flex items-center rounded-lg px-1.5 py-0.5 text-xs",
                                                message.response.sentiment === 'positive' ? 'bg-green-700 text-green-400' : (message.response.sentiment === 'negative' ? 'bg-red-700 text-red-400' : 'bg-yellow-700 text-yellow-400')
                                            )}>
                                                {message.response.sentiment}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </foreignObject>
                        </svg>
                    </div>
                </div>
                <p className='mt-4 text-center text-gray-300'>
                    This works for any email client, for all channels (Email, WhatsApp, Telegram, Social Media) and with any customer-facing IT system (CRM, CSM).
                </p>
            </InView>
        </>
    )
}
