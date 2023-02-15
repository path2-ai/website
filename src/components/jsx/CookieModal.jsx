import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IconCheck, IconCookie, IconX } from '@tabler/icons'
import { Switch } from '@headlessui/react'
// import cookieCutter from 'cookie-cutter'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function CookieModal({ open, setOpen, enabled, setEnabled, show, setShow }) {

    const [enabledTmp, setEnabledTmp] = useState(enabled)

    return (
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
                                        <IconCookie className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-100">
                                            Cookie settings
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-300">
                                                We use cookies to improve your site experience. The "strictly necessary" cookies are required for Kern AI to function.
                                            </p>
                                        </div>
                                        <div className='mt-4 border border-neutral-600 rounded-lg'>
                                            <div>
                                                <div className='rounded-t-md text-white border-b border-neutral-600 p-4 bg-neutral-800'>
                                                    <IconCheck className='h-5 w-5 text-green-500 inline-block mr-2' />
                                                    Strictly necessary cookies
                                                </div>
                                                <div className='text-gray-300 p-4'>
                                                    These are the cookies required for Kern AI to function.

                                                </div>
                                                <div className='text-white p-4 border-b border-t border-neutral-600 bg-neutral-800'>
                                                    {enabledTmp ? (
                                                        <IconCheck className='h-5 w-5 text-green-500 inline-block mr-2' />
                                                    ) : (
                                                        <IconX className='h-5 w-5 text-red-500 inline-block mr-2' />
                                                    )}
                                                    Product Analytics / Tracking Cookies
                                                </div>
                                                <div className='text-gray-300 p-4'>
                                                    <div>
                                                        We include analytics cookies to understand how you use our product and design better experiences.
                                                    </div>
                                                    <div className='mt-4'>
                                                        <Switch
                                                            checked={enabledTmp}
                                                            onChange={setEnabledTmp}
                                                            className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full "
                                                        >
                                                            <span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md bg-neutral-800" />
                                                            <span
                                                                aria-hidden="true"
                                                                className={classNames(
                                                                    enabledTmp ? 'bg-green-600' : 'bg-gray-200',
                                                                    'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out'
                                                                )}
                                                            />
                                                            <span
                                                                aria-hidden="true"
                                                                className={classNames(
                                                                    enabledTmp ? 'translate-x-5' : 'translate-x-0',
                                                                    'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-neutral-800 shadow ring-0 transition-transform duration-200 ease-in-out'
                                                                )}
                                                            />
                                                        </Switch>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end space-x-2 mt-5">
                                    <button
                                        type='button'
                                        className="hover:bg-neutral-700 bg-neutral-800 inline-block rounded-lg px-4 py-2 text-base font-semibold leading-6 shadow-sm ring-1 ring-inset ring-white/10 group-hover:ring-white/20"
                                        onClick={() => {
                                            setEnabled(enabledTmp)
                                            localStorage.setItem('kern-cookie', JSON.stringify({
                                                // cookieCutter.set('kern-cookie', JSON.stringify({
                                                strictlyNecessary: true,
                                                analytics: enabledTmp,
                                            }))
                                            setOpen(false)
                                            if (setShow) {
                                                setShow(false)
                                            }
                                        }}
                                    >
                                        <span className='my-auto text-gray-200'>
                                            Save and accept
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
    )
}
