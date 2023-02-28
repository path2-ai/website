import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IconMail, IconSend } from '@tabler/icons'

export function CustomMailModal({ open, setOpen, messages, setMessages }) {

    const cancelButtonRef = useRef(null)

    const [mailSubject, setMailSubject] = useState(null)
    const [mailBody, setMailBody] = useState(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />
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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-neutral-900 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-700 sm:mx-0 sm:h-10 sm:w-10">
                                        <IconMail className="h-6 w-6 text-green-400" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-100">
                                            Write a mail
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-300">
                                                Write your own message to see how it would be processed by the system.
                                            </p>
                                        </div>
                                        <div className='mt-6'>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                                                Mail subject
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    name="subject"
                                                    id="subject"
                                                    className="p-2 text-gray-200 block w-full rounded-md bg-neutral-800 border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    value={mailSubject}
                                                    onChange={(e) => setMailSubject(e.target.value)}
                                                    placeholder="Write your subject here..."
                                                />
                                            </div>
                                        </div>
                                        <div className='mt-2'>
                                            <label htmlFor="mailbody" className="block text-sm font-medium text-gray-300">
                                                Mail body
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    rows={4}
                                                    name="mailbody"
                                                    id="mailbody"
                                                    className="p-2 text-gray-200 block w-full rounded-md bg-neutral-800 border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    value={mailBody}
                                                    onChange={(e) => setMailBody(e.target.value)}
                                                    placeholder="Write your message here..."
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <p className="text-sm text-gray-500">
                                                Disclaimer: This is not a real mail, but a simulation of how the system (and thus Kern AIs platform) would process it. Do not send any sensitive information.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex flex-row justify-end space-x-4">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-800 pl-3 pr-4 py-2 text-base font-medium text-gray-100 shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => {
                                            setMessages([
                                                ...messages,
                                                {
                                                    id: messages.length + 1,
                                                    subject: mailSubject,
                                                    sender: {
                                                        name: 'You',
                                                        email: 'you@your-company.com',
                                                    },
                                                    userDefinedMail: true,
                                                    date: 'now',
                                                    datetime: new Date().toISOString(),
                                                    preview: mailBody,
                                                    thread: [
                                                        {
                                                            id: 1,
                                                            author: {
                                                                name: 'You',
                                                                email: 'you@your-company.com',
                                                            },
                                                            date: 'now',
                                                            datetime: new Date().toISOString(),
                                                            body: `
                                                            <p>${mailBody}</p>
                                                          `,
                                                        }
                                                    ],
                                                    response: {
                                                        text: 'Thanks! We are glad you like it!',
                                                        sentiment: 'positive',
                                                    }
                                                },
                                            ])
                                            setMailSubject(null)
                                            setMailBody(null)
                                            setOpen(false)
                                        }}
                                    >
                                        <IconSend className="h-6 w-6 text-green-400 mr-3" aria-hidden="true" />
                                        Send
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-700 bg-neutral-900 px-4 py-2 text-base font-medium text-gray-300 shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
