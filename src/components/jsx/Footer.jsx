import { IconBrandDiscord, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube, IconCheck, IconX } from "@tabler/icons"
import { useRouter } from "next/router"
import { CookieModal } from "./CookieModal"
import { ContactModal } from "./ContactModal"
import axios from "axios";
import { Fragment, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Footer() {

    const router = useRouter()

    const [consent, setConsent] = useState(false)

    const [openContactModal, setOpenContactModal] = useState(false)
    const [open, setOpen] = useState(false)
    const [enabled, setEnabled] = useState(false)
    const [email, setEmail] = useState('')
    const [showNotification, setShowNotification] = useState(false)


    const navigation = {
        product: [
            { name: 'Platform architecture', onClick: () => { router.push('/docs/architecture') } },
            { name: 'How it works', onClick: () => { router.push('/docs/how-it-works') } },
            { name: 'Pricing', onClick: () => { router.push('/pricing') } },
        ],
        docs: [
            { name: 'refinery', onClick: () => { router.push('https://docs.kern.ai/refinery') } },
            { name: 'bricks', onClick: () => { router.push('https://docs.kern.ai/bricks') } },
            { name: 'gates', onClick: () => { router.push('https://docs.kern.ai/gates') } },
            { name: 'workflow', onClick: () => { router.push('https://docs.kern.ai/workflow') } },
        ],
        company: [
            { name: 'About', onClick: () => { router.push('/company/about') } },
            { name: 'Blog', onClick: () => { router.push('/company/blog') } },
            { name: 'Careers', onClick: () => { router.push('/company/careers') } },
            { name: 'Contact', onClick: () => { setOpenContactModal(true) } },
        ],
        other: [
            { name: 'Imprint', onClick: () => { router.push('/imprint') } },
            { name: 'Privacy policy', onClick: () => { router.push('/privacy') } },
            { name: 'Terms of service', onClick: () => { router.push('/terms') } },
            { name: 'Security', onClick: () => { router.push('/security') } },
            { name: 'Cookie settings', onClick: () => { setOpen(true) } },
        ],
        social: [
            {
                name: 'GitHub',
                href: 'https://github.com/code-kern-ai',
                icon: IconBrandGithub
            },
            {
                name: 'Twitter',
                href: 'https://twitter.com/meetkern',
                icon: IconBrandTwitter
            },
            {
                name: 'LinkedIn',
                href: 'https://www.linkedin.com/company/kern-ai',
                icon: IconBrandLinkedin
            },
            {
                name: 'YouTube',
                href: 'https://www.youtube.com/channel/UCru-6X24b76TRsL6KWMFEFg',
                icon: IconBrandYoutube
            },
            {
                name: 'Discord',
                href: 'https://discord.gg/qf4rGCEphW',
                icon: IconBrandDiscord
            }
        ],
    }
    return (
        <footer className="my-10 max-w-5xl mx-auto">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="md:grid md:grid-cols-6 gap-4 text-sm">
                    <div className="flex col-span-2 md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.keys(navigation).filter(section => section != 'social').map((section) => (
                            <div key={section} className="col-span-1">
                                <h3 className="text-white">{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
                                <ul role="list" className="mt-2 space-y-2">
                                    {navigation[section].map((item) =>
                                        <li key={item.name}>
                                            <div onClick={item.onClick} className="text-gray-300 hover:text-white cursor-pointer">
                                                {item.name}
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 md:mt-0 col-span:4 md:col-span-2">
                        <div>
                            <h3 className="text-white">Subscribe to our newsletter</h3>
                            <p className="mt-4 text-gray-300">
                                The latest news, articles, and resources, sent to your inbox weekly.
                            </p>
                            <div className="mt-4 flex max-w-md">
                                <label htmlFor="newsletter" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="newsletter"
                                    id="newsletter"
                                    required
                                    className="w-full min-w-0 appearance-none rounded-md border border-transparent bg-neutral-900 py-2 px-4 text-base text-gray-100 placeholder-gray-300 focus:border-white focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 focus:ring-offset-gray-200"
                                    placeholder="Enter your email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="ml-3  rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                    <button
                                        type="button"
                                        className={classNames(
                                            !(consent && email) ? "text-gray-500 bg-neutral-700 cursor-not-allowed " : "text-neutral-900 bg-gradient-to-r from-lime-300 to-green-600 hover:from-lime-400 hover:to-green-500",
                                            "flex w-full items-center justify-center rounded-md py-2 px-4 text-base font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                                        )}
                                        onClick={() => {
                                            axios
                                                .post(
                                                    "https://getform.io/f/9cad3d6d-7a57-4818-8984-5175ca10deac",
                                                    {
                                                        email: email,
                                                    },
                                                    { headers: { Accept: "application/json" } }
                                                )
                                                .then(function (response) {
                                                    setEmail('');
                                                    setShowNotification(true);
                                                })
                                                .catch(function (error) {
                                                    console.log(error);
                                                })
                                        }}
                                        disabled={!(consent && email)}
                                    >
                                        Subscribe
                                    </button>
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
                </div>
            </div >
            <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                <div className="flex space-x-6 md:order-2">
                    {navigation.social.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-400 hover:text-lime-400">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
                    &copy; 2023 Kern AI GmbH. All rights reserved.
                </p>
            </div>
            <ContactModal open={openContactModal} setOpen={setOpenContactModal} />
            <CookieModal open={open} setOpen={setOpen} enabled={enabled} setEnabled={setEnabled} />

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
                                        <p className="text-sm font-medium text-gray-100">Subscribed to newsletter</p>
                                        <p className="mt-1 text-sm text-gray-300">We added you to our weekly newsletter.</p>
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
        </footer >
    )
}
