import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { IconArrowDown, IconMail } from '@tabler/icons'
import { EmailAnalytics } from './UseCases/EmailAnalytics'
import { Enduser } from './UseCases/MailComponents/Enduser'
import { Manager } from './UseCases/MailComponents/Manager'
import { EnduserGerman } from './UseCases/MailComponents/EnduserGerman'
import { ManagerGerman } from './UseCases/MailComponents/ManagerGerman'

const stats = [
    { id: 1, name: 'geringere Kosten im Claims Processing', value: 'Bis zu 30%', reference: 'McKinsey', link: 'https://www.mckinsey.com/~/media/mckinsey/industries/financial%20services/our%20insights/what%20drives%20insurance%20operating%20costs/successfully_reducing_operating_costs.pdf' },
    { id: 2, name: 'Verbesserung der Durchlaufzeiten', value: 'Bis zu 50%', reference: 'McKinsey', link: 'https://www.mckinsey.com/~/media/mckinsey/industries/financial%20services/our%20insights/what%20drives%20insurance%20operating%20costs/successfully_reducing_operating_costs.pdf' },
    { id: 3, name: 'Umsatzwachstum durch IPA', value: 'Bis zu 2 - 5%', reference: 'Capgemini', link: 'https://www.capgemini.com/gb-en/wp-content/uploads/sites/3/2018/07/Report-1.pdf' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export function GermanInsurers() {

    const navigation = [{
        name: 'How does this look like for a user?',
        showFor: 'enduser',
        onClick: () => setShowForStakeholders("enduser")
    },
    {
        name: 'What are my benefits?',
        showFor: 'manager',
        onClick: () => setShowForStakeholders("manager")
    }]


    const [showForStakeholders, setShowForStakeholders] = useState("enduser")

    return (
        <div className=''>
            <div className="relative isolate overflow-hidden bg-slate-50">
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
                </svg>
                <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                        <img
                            className="h-11"
                            src="/KernAI-icon.svg"
                            alt="KernAI"
                        />
                        <div className="mt-24 sm:mt-32 lg:mt-16">
                            <a href="/" className="inline-flex space-x-6">
                                <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                                    KI aus Deutschland
                                </span>
                                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                                    <span>Zu unserer Website</span>
                                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </a>
                        </div>
                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Sprach- und Text-KIs für Versicherungen
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Wir helfen Versicherungen, indem wir Fachbereiche mithilfe Künstlicher Intelligenz entlasten.
                        </p>
                        <p className="text-lg leading-8 text-gray-600">
                            Damit Fachexpert:innen mehr Zeit für Kund:innen und der Bearbeitung von Schadensfällen haben.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <div className='animate-bounce flex items-center flex-row space-x-4'>
                                <div className='p-2 border border-gray-300 rounded-full'>
                                    <IconArrowDown className="h-4 w-4 text-green-500" />
                                </div>
                                <div className='text-gray-800'>
                                    Runterscrollen
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                <img
                                    src="/screenshot-workflow.png"
                                    alt="App screenshot"
                                    width={2432}
                                    height={1442}
                                    className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    {stat.value}
                                </dd>
                                <p className="text-base leading-7 text-gray-600">Quelle: <a
                                    href={stat.link}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="text-gray-600 underline"
                                >
                                    {stat.reference}
                                </a>
                                </p>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            <div
                className='max-w-7xl mx-auto px-6'
                id="email-automation">
                <div className='max-w-5xl mx-auto flex flex-col space-y-6'>
                    <div className='flex flex-row items-center md:space-x-4'>
                        <div
                            className='hidden md:block p-3 border border-neutral-300 bg-neutral-200 rounded-2xl'
                        >
                            <IconMail className='text-neutral-800 w-6 h-6' />
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold'>
                                Email automation
                            </h3>
                            <p className='text-gray-700 mt-1'>
                                Turn your info@-inbox (or any other inbox) into a first-class AI assistant. Automatically categorize incoming emails by intent, identify sentiment and urgency, extract key information and automatically create response drafts.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div
                            className='mx-auto w-fit h-full md:border border-neutral-200 rounded-full opacity-90'
                        >
                            <div className='flex flex-col md:flex-row mx-auto p-2 space-y-2 md:space-y-0 md:space-x-2'>
                                {navigation.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={item.onClick}
                                        className={classNames(
                                            item.showFor == 'manager' ? 'bg-gradient-to-r from-amber-300 via-lime-400 to-green-500' : 'border border-neutral-300',
                                            'flex flex-row group space-x-2 items-center relative rounded-full bg-slate-100 pl-2 pr-3 py-1.5'
                                        )}
                                    >
                                        <span
                                            className={classNames(
                                                showForStakeholders === item.showFor ? 'bg-green-500' : null,
                                                'mt-0.5 rounded-full w-2 h-2 inline-block mx-1.5 bg-gray-500 group-hover:bg-green-500'
                                            )}
                                        />
                                        <span
                                            className={classNames(
                                                item.showFor == 'manager' ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-lime-800 to-green-900' : 'text-gray-800 group-hover:text-black',
                                            )}
                                        >
                                            {item.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <div className='mt-6'>
                    {/* {showForStakeholders == 'developer' && (
                    <Developer />
                )} */}
                    {showForStakeholders == 'enduser' && (
                        <EnduserGerman />
                    )}
                    {showForStakeholders == 'manager' && (
                        <ManagerGerman />
                    )}
                </div>
            </div>


            <div>
                <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                            Boost your productivity.
                            <br />
                            Start using our app today.
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
                            commodo do ea.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <footer className="">
            </footer>
        </div>
    )
}
