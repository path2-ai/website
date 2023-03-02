import { useEffect, useState } from 'react'
import { IconArrowRight, IconLanguageOff, IconLoader2, IconMail, IconMoodAngry, IconMoodHappy, IconMoodNeutral } from '@tabler/icons'
import { Enduser } from './MailComponents/Enduser'
import { Developer } from './MailComponents/Developer'
import { Manager } from './MailComponents/Manager'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function EmailAnalytics() {

    const [showForStakeholders, setShowForStakeholders] = useState("enduser")

    return (
        <div className='my-20'>
            <div className='max-w-5xl mx-auto flex flex-col space-y-6'>
                <div className='flex flex-row items-center space-x-4'>
                    <div
                        className='p-3 bg-[#0d0d0d] border border-neutral-900 rounded-2xl'
                    >
                        <IconMail className='text-neutral-500 w-6 h-6' />
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-white'>
                            Email automation
                        </h3>
                        <p className='text-gray-400 mt-1'>
                            Send personalized emails to your customers based on their behavior. Automated directly in your inbox. Customizable to your needs.
                        </p>
                    </div>
                </div>
                <div className='mx-auto w-fit p-[1px] rounded-2xl bg-gradient-to-r from-gray-900 via-gray-600 to-black'>
                    <div className='flex flex-row space-x-2 items-center justify-between p-2 text-gray-500 text-sm rounded-2xl bg-neutral-900'>

                        <div className='w-fit p-[1px] rounded-xl bg-gradient-to-r from-gray-800 to-gray-600'>
                            <button
                                className={classNames(
                                    showForStakeholders == 'enduser' && 'text-white',
                                    'flex flex-row items-center p-2 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-xl hover:from-neutral-800 hover:via-neutral-700 hover:to-neutral-800 hover:text-white'
                                )}
                                onClick={() => setShowForStakeholders("enduser")}
                            >
                                <span
                                    className={classNames(
                                        'mt-0.5 rounded-full w-2 h-2 inline-block mx-1.5',
                                        showForStakeholders == 'enduser' ? 'bg-green-500' : 'bg-neutral-500'
                                    )}
                                />
                                <span>
                                    How does this look like for a user?
                                </span>
                            </button>
                        </div>

                        <div className='w-fit p-[1px] rounded-xl bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600'>
                            <button
                                className={classNames(
                                    showForStakeholders == 'manager' && 'text-white',
                                    'flex flex-row items-center p-2 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-xl hover:from-neutral-800 hover:via-neutral-700 hover:to-neutral-800 hover:text-white'
                                )}
                                onClick={() => setShowForStakeholders('manager')}
                            >
                                <span
                                    className={classNames(
                                        'mt-0.5 rounded-full w-2 h-2 inline-block mx-1.5',
                                        showForStakeholders == 'manager' ? 'bg-green-500' : 'bg-neutral-500'
                                    )}
                                />
                                <span>
                                    What are my benefits?
                                </span>
                            </button>
                        </div>

                        <div className='w-fit p-[1px] rounded-xl bg-gradient-to-r from-gray-600 to-neutral-800'>
                            <button
                                className={classNames(
                                    showForStakeholders == 'developer' && 'text-white',
                                    'flex flex-row items-center p-2 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-xl hover:from-neutral-800 hover:via-neutral-700 hover:to-neutral-800 hover:text-white'
                                )}
                                onClick={() => setShowForStakeholders('developer')}
                            >
                                <span
                                    className={classNames(
                                        'mt-0.5 rounded-full w-2 h-2 inline-block mx-1.5',
                                        showForStakeholders == 'developer' ? 'bg-green-500' : 'bg-neutral-500'
                                    )}
                                />
                                <span>
                                    Show me the API for this!
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                {showForStakeholders == 'developer' && (
                    <Developer />
                )}
                {showForStakeholders == 'enduser' && (
                    <Enduser />
                )}
                {showForStakeholders == 'manager' && (
                    <Manager />
                )}
            </div>
        </div>
    )
}


