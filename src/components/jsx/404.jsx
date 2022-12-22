import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Bars4Icon, BookmarkSquareIcon, BookOpenIcon, RssIcon } from '@heroicons/react/24/outline'

const links = [
    { title: 'Documentation', description: 'Learn how to integrate our tools with your app', icon: BookOpenIcon },
    { title: 'API Reference', description: 'A complete API reference for our libraries', icon: Bars4Icon },
    { title: 'Guides', description: 'Installation guides that cover popular setups', icon: BookmarkSquareIcon },
    { title: 'Blog', description: 'Read our latest news and articles', icon: RssIcon },
]

export function NotFound() {
    return (
        <section className="mt-32 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grayscale mx-auto w-fit p-6 rounded-2xl bg-gradient-to-r from-gray-900 to-neutral-900 ring-1 ring-lime-500             
                  shadow-[0_0px_40px_2px_rgba(200,250,0,0.5)]">
                <img
                    className="mx-auto "
                    src={"https://www.kern.ai/kern-icon.png"}
                    alt=""
                    width="48"
                />
            </div>
            <div className="mx-auto max-w-xl py-16 sm:py-24">
                <div className="text-center">
                    <p className="text-base font-semibold text-green-600">404</p>
                    <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
                        This page does not exist.
                    </h1>
                    <p className="mt-2 text-lg text-gray-500">The page you are looking for could not be found.</p>
                </div>
                <div className="mt-12">
                    <h2 className="text-base font-semibold text-gray-500">Popular pages</h2>
                    <ul role="list" className="mt-4 divide-y divide-gray-800 border-t border-b border-gray-800">
                        {links.map((link, linkIdx) => (
                            <li key={linkIdx} className="relative flex items-start space-x-4 py-6 hover:bg-neutral-900">
                                <div className="flex-shrink-0">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-900">
                                        <link.icon className="h-6 w-6 text-green-700" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-base font-medium text-gray-100">
                                        <span className="rounded-sm focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2">
                                            <a href="#" className="focus:outline-none">
                                                <span className="absolute inset-0" aria-hidden="true" />
                                                {link.title}
                                            </a>
                                        </span>
                                    </h3>
                                    <p className="text-base text-gray-500">{link.description}</p>
                                </div>
                                <div className="flex-shrink-0 self-center">
                                    <ChevronRightIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8">
                        <a href="#" className="text-base font-medium text-green-400 hover:text-green-500">
                            Or go back home
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
