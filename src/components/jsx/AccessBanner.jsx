import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { IconLockAccess, IconX } from '@tabler/icons'
import { useEffect } from 'react'
import cookieCutter from 'cookie-cutter'


export function AccessBanner({ setOpenAccessModal }) {

    const [show, setShow] = useState(false)

    useEffect(() => {
        let cookie = cookieCutter.get('access-banner')
        if (!cookie) {
            setShow(true)
        }

        const callback = (event) => {
            // listen if cmd and k are pressed simultaneously
            if (event.metaKey && event.key === 'k') {
                setOpenAccessModal(true)
            }
        };
        document.addEventListener('keydown', callback);
        return () => {
            document.removeEventListener('keydown', callback);
        };


    }, [])


    return (
        <>
            {/* Global notification live region, render this permanently at the end of the document */}
            <div
                aria-live="assertive"
                className="z-40 fixed bottom-0 left-0 w-[22rem] pointer-events-none flex px-4 py-6"
            >
                <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                    {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                    <Transition
                        show={show}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="pointer-events-auto w-full max-w-sm rounded-lg bg-neutral-900 shadow-lg ring-1 ring-gray-700">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 pt-0.5">
                                        <IconLockAccess size={24} stroke={1.5} className="text-gray-300" />
                                    </div>
                                    <div className="ml-3 w-0 flex-1">
                                        <p className="text-sm font-medium text-gray-100">Access</p>
                                        <p className="mt-1 text-sm text-gray-300">Press <span className='m-1 p-1 rounded-md border border-gray-700 cursor-pointer' onClick={
                                            () => {
                                                setOpenAccessModal(true)
                                            }

                                        }>⌘ + K</span> to request access</p>
                                    </div>
                                    <div>
                                        <IconX size={24} stroke={1.5} className="text-gray-300 hover:text-gray-500 cursor-pointer" onClick={() => {
                                            cookieCutter.set('access-banner', JSON.stringify(true))
                                            setShow(false)
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </>
    )
}
