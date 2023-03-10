import Link from 'next/link'
import { CalModal } from './CalModal'
import { useState } from 'react'
import { KERN_ASSETS_URL } from './_settings'

export function CallToActionGerman() {

    const [openCalModal, setOpenCalModal] = useState(false)
    return (
        <section className="mx-auto max-w-7xl py-16 px-4 text-center sm:px-6 lg:py-16 lg:px-8 space-y-8">
            <div className="mx-auto w-fit p-6 rounded-2xl bg-gradient-to-r from-gray-100 to-neutral-100 ring-1 ring-blue-500             
                  shadow-[0_0px_40px_2px_rgba(0,191,255,0.5)]">
                <img
                    className="mx-auto "
                    src={`${KERN_ASSETS_URL}/logos/KernAI-icon.svg`}
                    alt=""
                    width="48"
                />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl space-y-2">
                <span className="block">Lassen Sie Text-KI für Sie arbeiten.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600">Wir helfen Ihnen dabei.</span>
            </h2>
            <div className="flex justify-center">
                <div className="inline-flex">
                    <a
                        className="hover:bg-white bg-neutral-100 inline-block rounded-lg px-4 py-2 text-base font-semibold leading-6 shadow-sm ring-1 ring-inset ring-gray-300 group-hover:ring-gray-200"
                        href='https://cal.com/jhoetter'
                        target='_blank'
                        rel='noreferrer noopener'
                    >
                        <span className='my-auto text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-green-800'>
                            Kontakt mit Gründer aufnehmen
                        </span>
                    </a>
                </div>
                <div className="ml-3 inline-flex">
                    <Link
                        href="/pricing"
                        className="hover:bg-white bg-neutral-100 inline-block rounded-lg px-4 py-2 text-base font-semibold leading-6 shadow-sm ring-1 ring-inset ring-gray-300 group-hover:ring-gray-200"
                    >
                        <span className='my-auto text-gray-800'>
                            Preise sehen (englisch)
                        </span>
                    </Link>
                </div>
            </div>
            <CalModal open={openCalModal} setOpen={setOpenCalModal} />
        </section>
    )
}
