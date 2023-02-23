import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { IconInfoCircle } from '@tabler/icons'

export function PricingModal({ open, setOpen }) {

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
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

                <div className="fixed inset-0 z-10 overflow-y-auto">
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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-neutral-900 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-900 text-green-400 sm:mx-0 sm:h-10 sm:w-10">
                                        <IconInfoCircle size={24} stroke={1.5} />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-100">
                                            refinery credits
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-300">
                                                Everyone wants a simple pricing model, right? We do too. But most importantly, we want it to also fit your requirements. So we've created a pricing model that is flexible and easy to understand.
                                            </p>
                                            <p className="mt-2 text-sm text-gray-300">
                                                Mainly, there are two things to price in our platform:
                                            </p>
                                            <ul className="ml-5 mt-2 text-sm text-gray-300">
                                                <li className="list-disc">Implementing operational workflows that process data in realtime.</li>
                                                <li className="list-disc">Implementing analytical workflows, processing data in batches.</li>
                                            </ul>
                                            <p className="mt-2 text-sm text-gray-300">
                                                For now, we don't price the data storage. In the near future, you'll also be able to call 3rd party APIs via credits.
                                            </p>
                                            <p className="mt-2 text-sm text-gray-300">
                                                Our costs mainly depend on the amount of workload you create, and for how long you store the data. Still, we want you to be creative when implementing via refinery, not worrying about every single action you take credit-wise. This is embodied in the pricing model.
                                            </p>
                                            <p className="mt-2 text-sm text-gray-300">
                                                <span className='text-green-500 font-semibold'>While you're working in refinery, we charge only 1 credit per 100 items processed</span>, so you can be creative and answer critical questions for your data. <span className='text-green-500 font-semibold'>Once you put workflows into gates, we charge one credit per item (aka task) processed</span>.
                                            </p>
                                            <p className="mt-2 text-sm text-gray-300">
                                                Ultimately, we want you to make the best out of refinery. If you're not happy with the results of using our platform, we guarantee a full refund of your credits for two months.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="hover:bg-neutral-700 bg-neutral-800 inline-block rounded-lg px-4 py-2 text-base font-semibold leading-6 shadow-sm ring-1 ring-inset ring-white/10 group-hover:ring-white/20 text-green-500"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Got it!
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
