import { useState } from "react"
import { IconCode, IconDashboard, IconLoader, IconUser } from "@tabler/icons"
import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline'

const options = [
    {
        title: "Building products",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: IconCode
    },
    {
        title: "Building dashboards",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: IconDashboard
    },
    {
        title: "Building workflows",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: IconLoader
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function HowItWorks() {

    const [selected, setSelected] = useState(options[0])

    return (
        <section className="mt-16">
            <div className="mx-auto w-full max-w-5xl sm:px-6 lg:px-8">
                <div className="mt-20 py-8 sm:py-10 ">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                            How it works
                        </h2>
                        <p className="mt-4 max-w-3xl text-lg leading-6 text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                    {options.map((option) => (
                        <div
                            key={option.title}
                            className="flex flex-col hover:bg-neutral-900 p-4 rounded-lg cursor-pointer"
                            onClick={() => setSelected(option)}
                        >
                            <div className={classNames(
                                selected.title === option.title ? 'border-lime-500 text-lime-500' : 'border-gray-800 text-white',
                                "flex items-center justify-center h-12 w-12 rounded-md border  bg-gradient-to-b from-neutral-900 to-neutral-800"
                            )}>
                                <option.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="mt-5">
                                <h3 className="text-lg leading-6 font-medium text-gray-100">{option.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-300">{option.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="mx-auto w-full max-w-6xl mt-8 rounded-2xl border border-neutral-700 bg-neutral-900"
            >
                <div className="relative overflow-hidden py-16">
                    <div className="relative">
                        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                                <div>
                                    <div>
                                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600">
                                            <InboxIcon className="h-8 w-8 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-bold tracking-tight text-gray-100">Stay on top of customer support</h2>
                                        <p className="mt-4 text-lg text-gray-300">
                                            Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia
                                            porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus
                                            viverra dui tellus ornare pharetra.
                                        </p>
                                        <div className="mt-6">
                                            <a
                                                href="#"
                                                className="inline-flex rounded-lg bg-green-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-600 hover:bg-green-700 hover:ring-green-700"
                                            >
                                                Get started
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 border-t border-gray-800 pt-6">
                                    <blockquote>
                                        <div>
                                            <p className="text-base text-gray-300">
                                                &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur
                                                donec aliquet. Mi venenatis in euismod ut.&rdquo;
                                            </p>
                                        </div>
                                        <footer className="mt-3">
                                            <div className="flex items-center space-x-3">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="text-base font-medium text-gray-300">Marcia Hill, Digital Marketing Manager</div>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                    <img
                                        className="w-full rounded-xl shadow-xl ring-1 ring-white ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                                        alt="Inbox user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-24">
                        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                            <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                                <div>
                                    <div>
                                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600">
                                            <SparklesIcon className="h-8 w-8 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-bold tracking-tight text-gray-100">Better understand your customers</h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia
                                            porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus
                                            viverra dui tellus ornare pharetra.
                                        </p>
                                        <div className="mt-6">
                                            <a
                                                href="#"
                                                className="inline-flex rounded-lg bg-green-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-600 hover:bg-green-700 hover:ring-green-700"
                                            >
                                                Get started
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                    <img
                                        className="w-full rounded-xl shadow-xl ring-1 ring-white ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                                        alt="Customer profile user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}