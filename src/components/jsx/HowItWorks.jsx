import { useState } from "react"
import { IconCode, IconDashboard, IconLoader, IconNumber1, IconNumber2 } from "@tabler/icons"
import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { KERN_ASSETS_URL } from './_settings'

const options = [
    {
        title: "Building products",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: IconCode,
        steps: [{
            title: "Step 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            icon: IconNumber1,
            image: "screenshot-workflow"
        }, {
            title: "Step 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            icon: IconNumber2,
            image: "screenshot-workflow"
        }]
    },
    {
        title: "Building dashboards",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: IconDashboard,
        steps: [{
            title: "Step 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            icon: IconNumber1,
            image: "screenshot-workflow"
        }, {
            title: "Step 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            icon: IconNumber2,
            image: "screenshot-workflow"
        }]
    },
    {
        title: "Building workflows",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: IconLoader,
        steps: [{
            title: "Step 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            icon: IconNumber1,
            image: "screenshot-workflow"
        }, {
            title: "Step 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            icon: IconNumber2,
            image: "screenshot-workflow"
        }]
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
                className="mt-12 mx-auto w-full max-w-6xl rounded-2xl border border-neutral-700 bg-neutral-900"
            >
                <div className="relative overflow-hidden py-28 space-y-20">
                    {selected.steps.map((step, stepIdx) => (
                        <div>
                            <div className="flex mx-8 lg:grid lg:grid-cols-7 lg:gap-8 lg:items-center">
                                <div className={classNames(
                                    stepIdx % 2 === 0 ? 'order-last' : null,
                                    "col-span-4"
                                )}>
                                    <img
                                        className="w-full rounded-xl shadow-xl ring-1 ring-gray-700"
                                        src={`${KERN_ASSETS_URL}/screenshots/${step.image}.png`}
                                        alt="Customer profile user interface"
                                    />
                                </div>
                                <div className="col-span-3">
                                    <div>
                                        <div>
                                            <span className="p-1 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 border border-gray-700">
                                                <step.icon className="h-5 w-5 text-lime-500" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="mt-6">
                                            <h2 className="text-xl font-bold tracking-tight text-gray-100">
                                                {step.title}
                                            </h2>
                                            <p className="mt-4 text-lg text-gray-500">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}