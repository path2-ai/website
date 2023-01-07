import { useState } from "react"
import { IconCode, IconDashboard, IconLoader, IconUser } from "@tabler/icons"

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
        <section className="mt-16 mx-auto w-full max-w-5xl sm:px-6 lg:px-8">
            <div className="mt-20 py-8 sm:py-10">
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
            <div
                className="mt-8 p-16 rounded-2xl border border-neutral-700 bg-neutral-900"
            >
                {selected.title}
            </div>
        </section>
    )
}