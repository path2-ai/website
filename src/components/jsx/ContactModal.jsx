import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IconMessages, IconSend, IconX } from '@tabler/icons'
import { useState } from 'react'
import { AccessModal } from './AccessModal'
import { DiscoveryModal } from './DiscoveryModal'
import { CalModal } from './CalModal'
import axios from "axios";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function ContactModal({ open, setOpen }) {

    const [consent, setConsent] = useState(false)

    const [openAccessModal, setOpenAccessModal] = useState(false)
    const [openDiscoveryModal, setOpenDiscoveryModal] = useState(false)
    const [openCalModal, setOpenCalModal] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-neutral-800 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
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
                                                Contact us
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-300">
                                                    Reach out to us with any questions or asks you may have.
                                                </p>
                                                <p className="mt-2 text-xs text-gray-300">
                                                    If you meant to reach out to us for {' '}
                                                    <button
                                                        className='text-xs text-lime-300 underline hover:text-lime-200'
                                                        onClick={() => {
                                                            setOpen(false)
                                                            setOpenAccessModal(true)
                                                        }}
                                                    >
                                                        early access
                                                    </button>, {' '} <button
                                                        className='text-xs text-lime-300 underline hover:text-lime-200'
                                                        onClick={() => {
                                                            setOpen(false)
                                                            setOpenCalModal(true)
                                                        }}
                                                    >
                                                        requesting a demo
                                                    </button> {' '} or {' '}
                                                    <button
                                                        className='text-xs text-lime-300 underline hover:text-lime-200'
                                                        onClick={() => {
                                                            setOpen(false)
                                                            setOpenDiscoveryModal(true)
                                                        }}
                                                    >
                                                        contacting sales
                                                    </button>, {' '}
                                                    please click on the respective links.
                                                </p>
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
                                                    What is your message?
                                                </label>
                                                <div className="mt-1">
                                                    <textarea
                                                        id="name"
                                                        name="name"
                                                        rows={4}
                                                        className="text-gray-200 shadow-sm mt-1 block w-full sm:text-sm border-gray-300 rounded-md p-2 bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                                        placeholder="John Doe"
                                                        onChange={(e) => {
                                                            setMessage(e.target.value)
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
                                                !(consent && name && email && message) ? 'bg-neutral-700 text-gray-500  cursor-not-allowed' : 'text-gray-200 bg-neutral-800 hover:bg-neutral-700 '
                                            )}
                                            onClick={() => {
                                                setOpen(false)
                                                axios
                                                    .post(
                                                        "https://getform.io/f/db1a2152-0d46-47c1-85bc-f65360be84e5",
                                                        {
                                                            name: name,
                                                            email: email,
                                                            message: message
                                                        },
                                                        { headers: { Accept: "application/json" } }
                                                    )
                                                    .then(function (response) {
                                                        setName('')
                                                        setEmail('')
                                                        setMessage('')
                                                    })
                                                    .catch(function (error) {
                                                        console.log(error);
                                                    });
                                            }}
                                            disabled={!(consent && name && email && message)}
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
            <CalModal open={openCalModal} setOpen={setOpenCalModal} />
            <AccessModal open={openAccessModal} setOpen={setOpenAccessModal} />
            <DiscoveryModal open={openDiscoveryModal} setOpen={setOpenDiscoveryModal} />
        </div>
    )
}
