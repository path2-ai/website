/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { IconApi, IconArticle, IconBrandGithub, IconBriefcase, IconBuildingCastle, IconChessKnight, IconChevronRight, IconDatabase, IconInfoCircle, IconMessage, IconPerspective, IconRoute, IconStack3, IconTags, IconTools, IconUser, IconUsers, IconWorldWww } from '@tabler/icons'
import Link from 'next/link'
import { KERN_ASSETS_URL } from './_settings'
import { Menu } from '@headlessui/react'
import { AccessModal } from './AccessModal'


const navigation = [
    // {
    //     name: 'Solutions', subnav: [
    //         { name: 'ETL library', href: '/solutions/library', icon: IconTemplate, description: 'Browse through our library of workflows you can implement right away' },
    //         { name: 'CSM assistant', href: 'https://csm-assistant.kern.ai', icon: IconQuote, description: 'Add a digital, intelligent assistant to your customer success team' },
    //     ]
    // },
    // {
    //     name: 'Use cases', subnav: [
    //         { name: 'Building training data', href: '/#training-data', icon: IconDatabase, description: 'Pipeline and automate your training data' },
    //         { name: 'Email automation', href: '/#email-channels', icon: IconMessage, description: 'Automate email-channels from analysis to automation' },
    //         { name: 'Webscraping NLP', href: '/#webscraping', icon: IconWorldWww, description: 'Make complex webscraping a breeze' },
    //         { name: 'Extract, transform, load', href: '/#etl', icon: IconPerspective, description: 'Build pipelines that understand natural language' },

    //     ]
    // },
    { name: 'ChatGPT Hitchhiker', href: 'https://hitchhiker.kern.ai/' },
    {
        name: 'Developers', subnav: [
            { name: 'Data-centric NLP', href: '/platform', icon: IconTools, description: 'Get an overview of the platform' },
            { name: 'Platform architecture', href: '/platform/architecture', icon: IconStack3, description: 'See how the platform of Kern AI works under the hood' },
            { name: 'How it works', href: '/platform/how-it-works', icon: IconRoute, description: 'How does a step-by-step implementation look like?' },
            { name: 'Labeling services', href: '/platform/labeling-services', icon: IconTags, description: 'Let us handle your labeling needs' },
            { name: 'Changelog', icon: IconInfoCircle, href: 'https://changelog.kern.ai', description: 'See what we have been up to' },
        ]
    },

    {
        name: 'Docs', subnav: [
            { name: 'refinery', href: 'https://docs.kern.ai/refinery', icon: null, description: 'The data-centric editor to build data and algorithms' },
            { name: 'bricks', href: 'https://docs.kern.ai/bricks', icon: null, description: 'Our collection of modular and off-the-shelf NLP enrichments' },
            { name: 'gates', href: 'https://docs.kern.ai/gates', icon: null, description: 'Turn refinery into a realtime API' },
            { name: 'workflow', href: 'https://docs.kern.ai/workflow', icon: null, description: 'Automate any natural language-driven process' },
        ]
    },
    // { name: 'Use Case Gallery', href: '/integrations' },
    { name: 'Integrations', href: '/integrations' },
    { name: 'Pricing', href: '/pricing' },
    // {
    //     name: 'Comparisons', subnav: [
    //         { name: 'Automations [Zapier, Levity and n8n]', href: '/comparisons/automations', icon: IconLoader, description: 'vs. workflow' },
    //         { name: 'Internal Tooling [Retool and Appsmith]', href: '/comparisons/internal-tooling', icon: IconHammer, description: 'vs. workflow and gates' },
    //         { name: 'RPA [UiPath]', href: '/comparisons/rpa', icon: IconRobot, description: 'vs. workflow' },
    //         { name: 'Labeling [Labelstudio and Prodi.gy]', href: '/comparisons/labeling', icon: IconTag, description: 'vs. refinery' },
    //         { name: 'ML Operations [Baseten]', href: '/comparisons/ml-ops', icon: IconBulldozer, description: 'vs. gates' },
    //         { name: 'Enterprise AI [Snorkel AI, Scale AI]', href: '/comparisons/enterprise-ai', icon: IconBrain, description: 'vs. refinery and gates' },
    //     ]
    // },
    {
        name: 'Company', subnav: [
            { name: 'About', href: '/company/about', icon: IconUsers, description: 'Get to know the team behind Kern AI' },
            { name: 'Careers', href: '/company/careers', icon: IconBriefcase, description: 'Interested in joining the team? Take a look at our open positions' },
            { name: 'Blog', href: '/company/blog', icon: IconArticle, description: 'Updates and interesting articles curated by our team' },
            { name: 'Lean NLP Canvas', href: '/company/lean-nlp-canvas', icon: IconChessKnight, description: 'Plan your NLP use case with our lean canvas' },
        ]
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Header({ isDarkTheme }) {

    const router = useRouter()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openAccessModal, setOpenAccessModal] = useState(false)

    return (
        <div className="px-6 pt-3 lg:px-8 mx-auto justify-center max-w-6xl">
            <div className='mx-6'>

                {/* desktop menu */}
                {!mobileMenuOpen && (
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="mt-2" aria-label="Global">
                            <button
                                type='button'
                                className="-mt-1.5 p-1.5 cursor-pointer">
                                <span className="sr-only">Kern AI</span>
                                <span className='hidden xl:block'>
                                    {isDarkTheme ? (
                                        <img
                                            className="h-8"
                                            src="/KernAI-primary-gray-100.svg"
                                            alt=""
                                            onClick={
                                                () => {
                                                    router.push('/')
                                                }
                                            } />
                                    ) : (
                                        <img
                                            className="h-8"
                                            src="/KernAI-primary-gray-900.svg"
                                            alt=""
                                            onClick={
                                                () => {
                                                    router.push('/')
                                                }
                                            } />
                                    )}
                                </span>
                                <span className='block xl:hidden'>
                                    <img
                                        className="h-8"
                                        src="/KernAI-icon.svg"
                                        alt=""
                                        onClick={
                                            () => {
                                                router.push('/')
                                            }
                                        } />
                                </span>

                            </button>
                        </div>

                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="-mt-1.5 hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-8">
                            {navigation.map((item) => (
                                item.href ? (
                                    <Link key={item.name} href={item.href} className={classNames(
                                        isDarkTheme ? (
                                            "text-gray-300 hover:text-lime-400"
                                        ) : (
                                            "text-gray-700 hover:text-lime-700"
                                        ),
                                        "h-8 pt-2 font-semibold"
                                    )}>
                                        {item.name}
                                    </Link>
                                ) : (
                                    <Popover key={item.name} className="relative">
                                        {({ open }) => (
                                            <>
                                                <Popover.Button
                                                    className={classNames(
                                                        isDarkTheme ? (
                                                            open ? 'text-lime-300' : 'text-gray-300'
                                                        ) : (
                                                            open ? 'text-green-700' : 'text-gray-700'
                                                        ),
                                                        isDarkTheme ? (
                                                            'hover:text-lime-400'
                                                        ) : (
                                                            'hover:text-green-800'
                                                        ),
                                                        'h-8 pt-2 group inline-flex items-center rounded-md text-base font-semibold focus:outline-none'
                                                    )}
                                                >
                                                    <span>{item.name}</span>
                                                    <ChevronDownIcon
                                                        className={
                                                            classNames(
                                                                isDarkTheme ? (
                                                                    open ? 'text-lime-300' : 'text-gray-300'
                                                                ) : (
                                                                    open ? 'text-green-700' : 'text-gray-700'
                                                                ),
                                                                isDarkTheme ? (
                                                                    'group-hover:text-lime-400'
                                                                ) : (
                                                                    'group-hover:text-green-800'
                                                                ),
                                                                'ml-2 h-4 w-4'
                                                            )
                                                        }
                                                        aria-hidden="true"
                                                    />
                                                </Popover.Button>

                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-200"
                                                    enterFrom="opacity-0 translate-y-1"
                                                    enterTo="opacity-100 translate-y-0"
                                                    leave="transition ease-in duration-150"
                                                    leaveFrom="opacity-100 translate-y-0"
                                                    leaveTo="opacity-0 translate-y-1"
                                                >
                                                    <Popover.Panel className="absolute left-1/2 z-40 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                                                        <div className={
                                                            classNames(
                                                                isDarkTheme ? (
                                                                    "ring-black"
                                                                ) : (
                                                                    "ring-white"
                                                                ),
                                                                "overflow-hidden rounded-lg shadow-lg ring-1 ring-opacity-5"
                                                            )
                                                        }>
                                                            <div className={
                                                                classNames(
                                                                    isDarkTheme ? (
                                                                        "bg-neutral-900 border border-gray-800"
                                                                    ) : (
                                                                        "bg-white border border-gray-200"
                                                                    ),
                                                                    "relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8"
                                                                )
                                                            }>
                                                                {item.subnav.map((subItem) => (
                                                                    <Link
                                                                        key={subItem.name}
                                                                        href={subItem.href}
                                                                        className={
                                                                            classNames(
                                                                                isDarkTheme ? (
                                                                                    "hover:bg-neutral-800"
                                                                                ) : (
                                                                                    "hover:bg-neutral-50"
                                                                                ),
                                                                                "-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out")
                                                                        }
                                                                    >
                                                                        {subItem.icon ? (
                                                                            <subItem.icon className={classNames(
                                                                                isDarkTheme ? (
                                                                                    "text-lime-400"
                                                                                ) : (
                                                                                    "text-green-700"
                                                                                ),
                                                                                "h-6 w-6 flex-shrink-0"
                                                                            )} aria-hidden="true" />
                                                                        ) : (
                                                                            <img src={`/${subItem.name}-icon.png`} className={classNames(
                                                                                isDarkTheme ? (
                                                                                    "text-lime-400"
                                                                                ) : (
                                                                                    "text-green-700"
                                                                                ),
                                                                                "h-6 w-6 flex-shrink-0"
                                                                            )} />
                                                                        )}

                                                                        <div className="ml-4">
                                                                            <p className={
                                                                                classNames(
                                                                                    isDarkTheme ? (
                                                                                        "text-gray-100"
                                                                                    ) : (
                                                                                        "text-gray-900"
                                                                                    ),
                                                                                    "text-base font-medium"
                                                                                )
                                                                            }>{subItem.name}</p>
                                                                            <p className={classNames(
                                                                                isDarkTheme ? (
                                                                                    "text-gray-300"
                                                                                ) : (
                                                                                    "text-gray-700"
                                                                                ),
                                                                                "mt-1 text-sm"
                                                                            )
                                                                            }>{subItem.description}</p>
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>
                                )

                            ))}
                        </div>
                        <div className='hidden lg:flex flex-row space-x-4'>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button
                                        className={classNames(
                                            isDarkTheme ? (
                                                "hover:bg-neutral-800 bg-neutral-900 ring-white/10 group-hover:ring-white/20 text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600"
                                            ) : (
                                                "hover:bg-neutral-50 bg-white ring-black/10 group-hover:ring-black/20 text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500"
                                            ),
                                            "inline-flex inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm ring-1 ring-inset"
                                        )
                                        }
                                    >
                                        Actions
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className={classNames(
                                        isDarkTheme ? (
                                            "bg-neutral-900 ring-gray-800"
                                        ) : (
                                            "bg-white ring-gray-200"
                                        ),
                                        "absolute right-0 z-40 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none"
                                    )}>
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        onClick={() => {
                                                            setOpenAccessModal(true)
                                                        }}
                                                        className={classNames(
                                                            isDarkTheme ? (
                                                                active ? 'text-gray-100' : 'text-gray-400'
                                                            ) : (
                                                                active ? 'text-gray-900' : 'text-gray-700'
                                                            ),
                                                            'block px-4 py-2 text-sm cursor-pointer'
                                                        )}
                                                    >
                                                        Request platform access
                                                    </a>
                                                )}
                                            </Menu.Item>

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="https://demo.kern.ai"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={classNames(
                                                            isDarkTheme ? (
                                                                active ? 'text-gray-100' : 'text-gray-400'
                                                            ) : (
                                                                active ? 'text-gray-900' : 'text-gray-700'
                                                            ),
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Try Kern AI online
                                                    </a>
                                                )}
                                            </Menu.Item>

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="https://github.com/code-kern-ai/refinery"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={classNames(
                                                            isDarkTheme ? (
                                                                active ? 'text-gray-100' : 'text-gray-400'
                                                            ) : (
                                                                active ? 'text-gray-900' : 'text-gray-700'
                                                            ),
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Leave a star on GitHub
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            <a
                                className={classNames(
                                    isDarkTheme ? (
                                        'ring-white/10 group-hover:ring-white/20'
                                    ) : (
                                        'ring-black/10 group-hover:ring-black/20'
                                    ),
                                    'flex items-center px-2.5 shadow-sm ring-1 ring-inset rounded-lg cursor-pointer'
                                )}
                                href='https://github.com/code-kern-ai'
                                target='_blank'
                                rel='noreferrer noopener'
                            >
                                <IconBrandGithub className='h-4 w-4 text-gray-500 hover:text-lime-400' />
                            </a>
                            {/* <a
                                href="https://demo.kern.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:bg-neutral-800 bg-neutral-900 inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm ring-1 ring-inset ring-white/10 group-hover:ring-white/20"
                            >
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600'>
                                    Try refinery online
                                </span>
                            </a> */}
                        </div>
                    </nav>
                )}


                {/* mobile menu */}
                <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <Dialog.Panel focus="true" className="fixed inset-0 z-40 overflow-y-auto bg-black px-6 py-6 lg:hidden">
                        <div className="flex h-9 items-center justify-between">
                            <div className="flex">
                                <a
                                    className="-m-1.5 p-1.5"
                                >
                                    <span className="sr-only">Kern AI</span>
                                    <img
                                        className="h-8"
                                        src={`${KERN_ASSETS_URL}/logos/KernAI-icon.svg`}
                                        alt=""
                                        onClick={
                                            () => {
                                                router.push('/')
                                            }
                                        }
                                    />
                                </a>
                            </div>
                            <div className="flex">
                                <button
                                    type="button"
                                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="m-4 py-4 grid grid-cols-2 gap-8">
                                    {navigation.map((item) => (
                                        !item.href && (
                                            <div key={item.name}>
                                                <div
                                                    key={item.name}
                                                    className="font-semibold text-gray-100 hover:bg-gray-600/10"
                                                >
                                                    {item.name}
                                                </div>
                                                <div className='mt-4 flex flex-col space-y-4'>
                                                    {item.subnav.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                        >
                                                            <div className="ml-1 flex flex-row items-center space-x-1">
                                                                <IconChevronRight className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                <p className="text-base font-medium text-gray-100">{subItem.name}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    ))}
                                    {navigation.map((item) => (
                                        item.href && (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="font-semibold text-gray-100 hover:bg-gray-600/10"
                                            >
                                                {item.name}
                                            </Link>
                                        )
                                    ))}
                                </div>
                                <div className="m-4 py-2">
                                    <a
                                        href="https://demo.kern.ai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-100 hover:bg-gray-600/10"
                                    >
                                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600'>
                                            Request platform access
                                        </span>
                                    </a>
                                    <a
                                        href="https://demo.kern.ai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-100 hover:bg-gray-600/10"
                                    >
                                        <span className='text-gray-300'>
                                            Try refinery online
                                        </span>
                                    </a>
                                    <a
                                        href="https://demo.kern.ai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-100 hover:bg-gray-600/10"
                                    >
                                        <span className='text-gray-300'>
                                            Leave a star on GitHub
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </div>

            {!mobileMenuOpen && (
                <div className={classNames(
                    isDarkTheme ? (
                        "from-gray-800 via-lime-600 to-gray-800"
                    ) : (
                        "from-gray-100 via-green-600 to-gray-100"
                    ),
                    "mt-3 h-px bg-gradient-to-r"
                )} />
            )}
            <AccessModal open={openAccessModal} setOpen={setOpenAccessModal} />
        </div>

    )
}
