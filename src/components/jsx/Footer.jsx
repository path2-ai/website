import { IconBrandDiscord, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons"
import { useRouter } from "next/router"
import { CookieModal } from "./CookieModal"
import { ContactModal } from "./ContactModal"
import { useState, useEffect } from "react"

export function Footer() {

    const router = useRouter()

    const [openContactModal, setOpenContactModal] = useState(false)
    const [open, setOpen] = useState(false)
    const [enabled, setEnabled] = useState(false)

    const navigation = {
        product: [
            { name: 'Gallery', onClick: () => { router.push('/solutions/gallery') } },
            { name: 'Platform architecture', onClick: () => { router.push('/docs/architecture') } },
            { name: 'How it works', onClick: () => { router.push('/docs/how-it-works') } },
            { name: 'Pricing', onClick: () => { router.push('/pricing') } },
        ],
        docs: [
            { name: 'refinery', onClick: () => { router.push('/docs/refinery') } },
            { name: 'bricks', onClick: () => { router.push('/docs/bricks') } },
            { name: 'gates', onClick: () => { router.push('/docs/gates') } },
            { name: 'workflow', onClick: () => { router.push('/docs/workflow') } },
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
                <div className="grid grid-cols-6 gap-4 text-sm">
                    <div className="flex col-span-4 grid grid-cols-4">
                        {Object.keys(navigation).filter(section => section != 'social').map((section) => (
                            <div className="col-span-1">
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
                    <div className="col-span-2">
                        <h3 className="text-white">Subscribe to our newsletter</h3>
                        <p className="mt-4 text-gray-300">
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>
                        <form className="mt-4 flex max-w-md">
                            <label htmlFor="newsletter" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="newsletter"
                                id="newsletter"
                                autoComplete="email"
                                required
                                className="w-full min-w-0 appearance-none rounded-md border border-transparent bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:border-white focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                placeholder="Enter your email"
                            />
                            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-lime-300 to-green-600 py-2 px-4 text-base font-medium text-neutral-900 hover:from-lime-400 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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
        </footer>
    )
}
