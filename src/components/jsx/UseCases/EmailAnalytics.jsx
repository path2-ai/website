import { useEffect, useState } from 'react'
import { IconArrowRight, IconLanguageOff, IconLoader2, IconMail, IconMoodAngry, IconMoodHappy, IconMoodNeutral } from '@tabler/icons'
import { Enduser } from './MailComponents/Enduser'
import { Developer } from './MailComponents/Developer'
import { Manager } from './MailComponents/Manager'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function EmailAnalytics({ industry }) {

    const navigation = [{
        name: 'How does this look like for a user?',
        showFor: 'enduser',
        onClick: () => setShowForStakeholders("enduser")
    },
    {
        name: 'What are my benefits?',
        showFor: 'manager',
        onClick: () => setShowForStakeholders("manager")
    },
        // {
        //     name: 'Show me the API!',
        //     showFor: 'developer',
        //     onClick: () => setShowForStakeholders("developer")
        // }
    ]


    const [showForStakeholders, setShowForStakeholders] = useState("enduser")

    return (
        <div
            id="email-automation">
            <div className='max-w-5xl mx-auto flex flex-col space-y-6'>
                <div className='flex flex-row items-center md:space-x-4'>
                    <div
                        className='hidden md:block p-3 bg-[#0d0d0d] border border-neutral-900 rounded-2xl'
                    >
                        <IconMail className='text-neutral-500 w-6 h-6' />
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-white'>
                            Email automation
                        </h3>
                        <p className='text-gray-400 mt-1'>
                            Turn your info@-inbox (or any other inbox) into a first-class AI assistant. Automatically categorize incoming emails by intent, identify sentiment and urgency, extract key information and automatically create response drafts that have the context of your IT-systems (e.g. ERP or CRM).
                        </p>
                    </div>
                </div>

                <div>
                    <div
                        className='mx-auto w-fit h-full md:bg-gradient-to-b from-[#0d0d0d] to-[#0f0f0f] md:border border-neutral-900 rounded-full opacity-90'
                    >
                        <div className='flex flex-col md:flex-row mx-auto p-2 space-y-2 md:space-y-0 md:space-x-2'>
                            {navigation.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={item.onClick}
                                    className={classNames(
                                        item.showFor == 'manager' ? 'bg-gradient-to-r from-amber-200 via-lime-300 to-green-400 border border-neutral-500' : 'border border-neutral-800',
                                        'flex flex-row group space-x-2 items-center relative  rounded-full bg-neutral-900 pl-2 pr-3 py-1.5'
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
                                            item.showFor == 'manager' ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-lime-800 to-green-900' : 'text-gray-400 group-hover:text-white',
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
                    <Enduser industry={industry} />
                )}
                {showForStakeholders == 'manager' && (
                    <Manager />
                )}
            </div>
        </div>
    )
}


