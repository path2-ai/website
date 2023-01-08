import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { IconCookie } from '@tabler/icons'
import { CookieModal } from './CookieModal'
import { useEffect } from 'react'
import cookieCutter from 'cookie-cutter'

export function CookieBanner() {
    const [show, setShow] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [enabled, setEnabled] = useState(true)

    useEffect(() => {
        let cookie = cookieCutter.get('kern-cookie')
        if (!cookie) {
            setShow(true)
        }
    }, [])

    return (
        <>
            {/* Global notification live region, render this permanently at the end of the document */}
            <div
                aria-live="assertive"
                className="z-40 fixed bottom-0 w-full pointer-events-none flex items-end px-4 py-6 sm:items-start sm:p-6"
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
                                        <IconCookie size={24} stroke={1.5} className="text-gray-300" />
                                    </div>
                                    <div className="ml-3 w-0 flex-1">
                                        <p className="text-sm font-medium text-gray-100">Cookies</p>
                                        <p className="mt-1 text-sm text-gray-300">This site uses cookies to measure and improve your experience.</p>
                                        <div className="flex mt-4">
                                            <div className="inline-flex">
                                                <button
                                                    type="button"
                                                    className="hover:bg-neutral-800 bg-neutral-900 inline-block rounded-lg px-4 py-2 text-base font-semibold leading-6 shadow-sm ring-1 ring-inset ring-white/10 group-hover:ring-white/20"
                                                    onClick={() => {
                                                        cookieCutter.set('kern-cookie', JSON.stringify({
                                                            strictlyNecessary: true,
                                                            analytics: enabled,
                                                        }))
                                                        setShow(false)
                                                    }}
                                                >
                                                    <span className='my-auto text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600'>
                                                        Accept
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="ml-3 inline-flex">
                                                <button
                                                    type='button'
                                                    className="hover:bg-neutral-800 bg-neutral-900 inline-block rounded-lg px-4 py-2 text-base font-semibold leading-6 shadow-sm ring-1 ring-inset ring-white/10 group-hover:ring-white/20"
                                                    onClick={() => { setOpenModal(true) }}
                                                >
                                                    <span className='my-auto text-gray-200'>
                                                        Configure
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
                <CookieModal open={openModal} setOpen={setOpenModal} enabled={enabled} setEnabled={setEnabled} show={show} setShow={setShow} />
            </div>
        </>
    )
}
