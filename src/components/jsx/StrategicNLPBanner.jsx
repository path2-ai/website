import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { IconChessKnight, IconChevronUp, IconLayoutNavbarExpand, IconLockAccess, IconX } from '@tabler/icons'
import { useEffect } from 'react'
import cookieCutter from 'cookie-cutter'
import Link from 'next/link'


export function StrategicNLPBanner() {

    const [show, setShow] = useState(false)
    const [isLarge, setIsLarge] = useState(false)

    useEffect(() => {
        let cookie = cookieCutter.get('strategic-nlp-banner')
        if (!cookie) {
            setShow(true)
        }
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
                                        <IconChessKnight size={24} stroke={1.5} className="text-yellow-500" />
                                    </div>
                                    <div className="ml-3 w-0 flex-1">
                                        <h3 className="text-sm font-medium text-gray-100 hover:text-gray-200 cursor-pointer">
                                            <button onClick={() => {
                                                setIsLarge(true)
                                            }}
                                                className="text-left"
                                            >
                                                "How will
                                                <span className='mx-1 text-amber-400'>ChatGPT</span>and the likes affect my business?"
                                            </button>

                                        </h3>
                                        {isLarge && (
                                            <div>
                                                <p className='mt-3 text-sm text-gray-300'>
                                                    A question we get very often, as NLP addresses nearly every process involving communication. Let us help you understand the impact of these technologies on your business, and how you can win as an NLP pioneer.
                                                </p>
                                                <div className='mt-3'>
                                                    <Link href="/strategic-nlp" className="text-sm font-medium text-yellow-500 hover:text-yellow-400">
                                                        Learn more
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        {isLarge ? (
                                            <IconX size={24} stroke={1.5} className="text-gray-300 hover:text-gray-500 cursor-pointer" onClick={() => {
                                                cookieCutter.set('strategic-nlp-banner', JSON.stringify(true))
                                                setShow(false)
                                            }} />
                                        ) : (
                                            <IconChevronUp size={24} stroke={1.5} className="text-gray-300 hover:text-gray-500 cursor-pointer" onClick={() => setIsLarge(true)} />
                                        )}

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
