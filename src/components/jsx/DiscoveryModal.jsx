import { Fragment, useState } from 'react'
import { Dialog, Transition, Menu } from '@headlessui/react'
import { IconCheck, IconMessages, IconSend, IconX } from '@tabler/icons'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import axios from "axios";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function DiscoveryModal({ open, setOpen }) {

    const [consent, setConsent] = useState(false)
    const [showNotification, setShowNotification] = useState(false)

    const [selectedUseOfProduct, setSelectedUseOfProduct] = useState(null)
    const useOfProductOptions = [
        "I'm not sure yet",
        "I want to build AI products, and want to use the platform to build and maintain training data",
        "I want to set up ETL workflows to build analytical use cases",
        "I want to set up operational realtime-workflows to build operational use cases",
        "All of the above",
    ]

    const [selectedAmountMessages, setSelectedAmountMessages] = useState(null)
    const amountMessagesOptions = [
        "I'm not sure yet",
        "Less than 1,000 items",
        "1,000 - 10,000 items",
        "10,000 - 100,000 items",
        "More than 100,000 items",
    ]

    const [selectedTypeOfMessages, setSelectedTypeOfMessages] = useState(null)
    const typeOfMessagesOptions = [
        "I'm not sure yet",
        "Short messages, e.g. chat messages",
        "Long form messages, e.g. emails",
        "Documents, e.g. PDFs",
        "Semi-structured data, e.g. JSON",
        "All of the above",
    ]

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [company, setCompany] = useState(null)
    const [role, setRole] = useState(null)
    const [comments, setComments] = useState(null)


    return (
        <div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-neutral-800 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                                    <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                                        <button
                                            type="button"
                                            className="rounded-md bg-neutral-800 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="sr-only">Close</span>
                                            <IconX className="h-6 w-6" />
                                        </button>
                                    </div>
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-zinc-900 to-zinc-800 sm:mx-0 sm:h-10 sm:w-10 ring-1 ring-green-500">
                                            <IconMessages className="h-6 w-6 text-green-600" />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-100">
                                                Discovery survey
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-300">
                                                    We're happy to jump on a call with you to discuss your needs and how we can help. Before that, please help us preparing for the call by answering the following questions.
                                                </p>
                                            </div>
                                            <div className='mt-8'>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-100">
                                                    What best describes what you could see yourself using our product for?
                                                </label>
                                                <Menu as="div" className="mt-1 relative inline-block w-full">
                                                    <div>
                                                        <Menu.Button className="text-left inline-flex w-full justify-between rounded-md border border-gray-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-gray-300 shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                                                            {selectedUseOfProduct ? selectedUseOfProduct : "Select an option"}
                                                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                                        </Menu.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="absolute left-0 z-50 mt-2 w-full origin-top-right border border-gray-700 rounded-md bg-neutral-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <div className="py-1">
                                                                {useOfProductOptions.map((option, index) => (
                                                                    <Menu.Item key={index}>
                                                                        {({ active }) => (
                                                                            <div
                                                                                key={index}
                                                                                className={classNames(
                                                                                    active ? 'bg-neutral-700 text-gray-100' : 'text-gray-300',
                                                                                    'block px-4 py-2 text-sm cursor-pointer'
                                                                                )}
                                                                                onClick={() => {
                                                                                    setSelectedUseOfProduct(option)
                                                                                }}

                                                                            >
                                                                                {option}
                                                                            </div>
                                                                        )}
                                                                    </Menu.Item>
                                                                ))}
                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </div>
                                            <div className='mt-8'>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-100">
                                                    By rule of thumb, how many text items do you plan to process in the next 12 months?
                                                </label>
                                                <Menu as="div" className="mt-1 relative inline-block w-full">
                                                    <div>
                                                        <Menu.Button className="text-left inline-flex w-full justify-between rounded-md border border-gray-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-gray-300 shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                                                            {selectedAmountMessages ? selectedAmountMessages : "Select an option"}
                                                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                                        </Menu.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="absolute left-0 z-50 mt-2 w-full origin-top-right border border-gray-700 rounded-md bg-neutral-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <div className="py-1">
                                                                {amountMessagesOptions.map((option, index) => (
                                                                    <Menu.Item key={index}>
                                                                        {({ active }) => (
                                                                            <div
                                                                                key={index}
                                                                                className={classNames(
                                                                                    active ? 'bg-neutral-700 text-gray-100' : 'text-gray-300',
                                                                                    'block px-4 py-2 text-sm cursor-pointer'
                                                                                )}
                                                                                onClick={() => {
                                                                                    setSelectedAmountMessages(option)
                                                                                }}

                                                                            >
                                                                                {option}
                                                                            </div>
                                                                        )}
                                                                    </Menu.Item>
                                                                ))}
                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                                <p className='mt-1 text-xs text-gray-300'>
                                                    For now, think of "processing" simply as uploading a file to the platform. How many files would you upload?
                                                </p>
                                            </div>

                                            <div className='mt-8'>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-100">
                                                    What kind of textual items do you plan to process?
                                                </label>
                                                <Menu as="div" className="mt-1 relative inline-block w-full">
                                                    <div>
                                                        <Menu.Button className="text-left inline-flex w-full justify-between rounded-md border border-gray-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-gray-300 shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                                                            {selectedTypeOfMessages ? selectedTypeOfMessages : "Select an option"}
                                                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                                        </Menu.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="absolute left-0 z-50 mt-2 w-full origin-top-right border border-gray-700 rounded-md bg-neutral-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <div className="py-1">
                                                                {typeOfMessagesOptions.map((option, index) => (
                                                                    <Menu.Item key={index}>
                                                                        {({ active }) => (
                                                                            <div
                                                                                key={index}
                                                                                className={classNames(
                                                                                    active ? 'bg-neutral-700 text-gray-100' : 'text-gray-300',
                                                                                    'block px-4 py-2 text-sm cursor-pointer'
                                                                                )}
                                                                                onClick={() => {
                                                                                    setSelectedTypeOfMessages(option)
                                                                                }}

                                                                            >
                                                                                {option}
                                                                            </div>
                                                                        )}
                                                                    </Menu.Item>
                                                                ))}
                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </div>

                                            <div className='mt-8'>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-100">
                                                    Please tell us your name
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        className="text-gray-200 shadow-sm mt-1 block w-full sm:text-sm border-gray-300 rounded-md p-2 bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                                        placeholder="John Doe"
                                                        onChange={(e) => {
                                                            setName(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className='mt-8'>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-100">
                                                    Where do you work?
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        className="text-gray-200 shadow-sm mt-1 block w-full sm:text-sm border-gray-300 rounded-md p-2 bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                                        placeholder="ACME Inc."
                                                        onChange={(e) => {
                                                            setCompany(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className='mt-8'>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-100">
                                                    What is your role?
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        className="text-gray-200 shadow-sm mt-1 block w-full sm:text-sm border-gray-300 rounded-md p-2 bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                                        placeholder="NLP Lead"
                                                        onChange={(e) => {
                                                            setRole(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className='mt-8'>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-100">
                                                    What is your email address?
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="email"
                                                        name="name"
                                                        id="name"
                                                        className="text-gray-200 shadow-sm mt-1 block w-full sm:text-sm border-gray-300 rounded-md p-2 bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                                        placeholder="john.doe@acme.com"
                                                        onChange={(e) => {
                                                            setEmail(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className='mt-8'>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-100">
                                                    Any other comments? <span className='italic text-neutral-500'>- optional</span>
                                                </label>
                                                <div className="mt-1">
                                                    <textarea
                                                        id="name"
                                                        name="name"
                                                        rows={4}
                                                        className="text-gray-200 shadow-sm mt-1 block w-full sm:text-sm border-gray-300 rounded-md p-2 bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                                        placeholder="John Doe"
                                                        onChange={(e) => {
                                                            setComments(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-4">
                                                <div className="mb-auto flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            id="consent"
                                                            name="consent"
                                                            type="checkbox"
                                                            className="accent-green-500 focus:ring-green-500 h-4 w-4 text-green-600 border-gray-700 rounded"
                                                            onChange={() => setConsent(!consent)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="ml-2 text-xs">
                                                    <label htmlFor="consent" className="font-medium text-gray-300">
                                                        I agree to the storage of my data for the purpose of contacting me and I consent to the privacy policy.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end space-x-2 mt-5">
                                        <button
                                            type='button'
                                            className={classNames(
                                                "inline-block rounded-lg px-4 py-2 font-semibold leading-6 shadow-sm ring-1 ring-inset ring-white/10 group-hover:ring-white/20",
                                                !(consent && name && company && role && email && selectedAmountMessages && selectedTypeOfMessages && selectedUseOfProduct) ? 'bg-neutral-700 text-gray-500  cursor-not-allowed' : 'text-gray-200 bg-neutral-800 hover:bg-neutral-700 '
                                            )}
                                            onClick={() => {
                                                setOpen(false)
                                                axios
                                                    .post(
                                                        "https://getform.io/f/df6fd1d4-3639-4bde-91bd-b918d40a72e2",
                                                        {
                                                            selectedUseOfProduct: selectedUseOfProduct,
                                                            selectedTypeOfMessages: selectedTypeOfMessages,
                                                            selectedAmountMessages: selectedAmountMessages,
                                                            name: name,
                                                            company: company,
                                                            role: role,
                                                            email: email,
                                                            comments: comments,
                                                        },
                                                        { headers: { Accept: "application/json" } }
                                                    )
                                                    .then(function (response) {
                                                        setSelectedUseOfProduct(null)
                                                        setSelectedTypeOfMessages(null)
                                                        setSelectedAmountMessages(null)
                                                        setName('')
                                                        setCompany('')
                                                        setRole('')
                                                        setEmail('')
                                                        setComments('')
                                                        setShowNotification(true)
                                                    })
                                                    .catch(function (error) {
                                                        console.log(error);
                                                    });
                                            }}
                                            disabled={!(consent && name && company && role && email && selectedAmountMessages && selectedTypeOfMessages && selectedUseOfProduct)}
                                        >
                                            <span className='my-auto'>
                                                <IconSend className='h-4 w-4 inline-block mr-1' /> Send
                                            </span>
                                        </button>
                                        <button
                                            type='button'
                                            className="hover:bg-neutral-700 bg-neutral-800 inline-block rounded-lg px-4 py-2 text-base font-semibold leading-6 shadow-sm ring-1 ring-inset ring-white/10 group-hover:ring-white/20"
                                            onClick={() => {
                                                setOpen(false)
                                            }}
                                        >
                                            <span className='my-auto text-gray-200'>
                                                Cancel
                                            </span>
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <div
                aria-live="assertive"
                className="z-30 fixed bottom-0 right-0 w-full pointer-events-none flex items-end px-4 py-6 sm:items-start sm:p-6"
            >
                <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                    {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                    <Transition
                        show={showNotification}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-neutral-900 shadow-lg ring-1 ring-gray-700">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <IconCheck className="h-6 w-6 text-green-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className="text-sm font-medium text-gray-100">Message is sent</p>
                                        <p className="mt-1 text-sm text-gray-300">We received your message and will get back to you as soon as possible.</p>
                                    </div>
                                    <div className="ml-4 flex flex-shrink-0">
                                        <button
                                            type="button"
                                            className="inline-flex rounded-md bg-neutral-900 text-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                            onClick={() => {
                                                setShowNotification(false)
                                            }}
                                        >
                                            <span className="sr-only">Close</span>
                                            <IconX className="h-5 w-5" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    )
}
