import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Cal from "@calcom/embed-react";

export function CalModal({ open, setOpen }) {

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-40" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-neutral-900 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-40 overflow-y-auto">
                    <div className="flex min-h-full justify-center text-center items-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="flex items-center justify-center rounded-lg relative transform overflow-hidden transition-all w-full max-w-4xl pl-1.5 p-2 space-x-2">
                                <div className='absolute w-12 h-12 -mt-2.5 -ml-1.5' style={{
                                    left: "50%",
                                    top: "50%"
                                }}>
                                    <div className='bg-neutral-300 border border-neutral-300 h-full animate-pulse'>
                                    </div>
                                </div>
                                <Cal
                                    id='cal'
                                    className='w-full h-full'
                                    calLink="jhoetter"
                                    config={{
                                        theme: "dark",
                                    }}
                                />

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
