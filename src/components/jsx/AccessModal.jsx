import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IconCheck, IconDoorEnter, IconX } from '@tabler/icons'
import { useState } from 'react'
import axios from "axios";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function AccessModal({ open, setOpen }) {

    const [consent, setConsent] = useState(false)
    const [email, setEmail] = useState('')
    const [showNotification, setShowNotification] = useState(false)

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
                                            <IconDoorEnter className="h-6 w-6 text-green-600" />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-100">
                                                Get access
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                                    Enter your email
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        className="block w-full rounded-md border-gray-700 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 bg-neutral-900 text-gray-200"
                                                        placeholder="you@example.com"
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>

                                                {/* consent checkbox */}
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
                                    </div>
                                    <div className="flex justify-end space-x-2 mt-5">
                                        <button
                                            type='button'
                                            className={classNames(
                                                (email && consent) ? 'hover:bg-neutral-700 bg-neutral-800 text-gray-200' : 'bg-neutral-700 text-gray-500 cursor-not-allowed',
                                                "inline-block rounded-lg px-4 py-2 text-base font-semibold leading-6 shadow-sm ring-1 ring-inset ring-white/10 group-hover:ring-white/20"
                                            )}
                                            onClick={() => {
                                                setOpen(false)
                                                axios
                                                    .post(
                                                        "https://getform.io/f/a6bcfa85-cd0c-4450-adc1-c1962bfa1d81",
                                                        {
                                                            email: email,
                                                        },
                                                        { headers: { Accept: "application/json" } }
                                                    )
                                                    .then(function (response) {
                                                        setEmail('')
                                                        setShowNotification(true)
                                                    })
                                                    .catch(function (error) {
                                                        console.log(error);
                                                    });
                                            }}
                                            disabled={!(consent && email)}
                                        >
                                            <span className='my-auto '>
                                                Send
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

            </Transition.Root >
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
                                        <p className="text-sm font-medium text-gray-100">Requested access</p>
                                        <p className="mt-1 text-sm text-gray-300">We will let you know via email when you can access your account.</p>
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
