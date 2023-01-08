import { IconBrandGithub } from "@tabler/icons"
import { useRouter } from "next/router"
import { CookieModal } from "./CookieModal"
import { useState, useEffect } from "react"

export function Footer() {

    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [enabled, setEnabled] = useState(false)

    const navigation = {
        legal: [
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
        ],
    }

    return (
        <footer className="mt-10 max-w-5xl mx-auto">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-base font-medium text-white">Legal</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <div onClick={item.onClick} className="text-base text-gray-300 hover:text-white cursor-pointer">
                                                {item.name}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 xl:mt-0">
                        <h3 className="text-base font-medium text-white">Subscribe to our newsletter</h3>
                        <p className="mt-4 text-base text-gray-300">
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>
                        <form className="mt-4 sm:flex sm:max-w-md">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email-address"
                                id="email-address"
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
                <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        {navigation.social.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                    <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
                        &copy; 2023 Kern AI GmbH. All rights reserved.
                    </p>
                </div>
            </div>
            <CookieModal open={open} setOpen={setOpen} enabled={enabled} setEnabled={setEnabled} />
        </footer>
    )
}
