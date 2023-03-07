import { useEffect, useState } from 'react'
import { IconAlignLeft, IconLink } from '@tabler/icons'
import { Enduser } from './MemoComponents/Enduser'
import { Developer } from './MemoComponents/Developer'
import { Manager } from './MemoComponents/Manager'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function MemoToContent() {

    const [showForStakeholders, setShowForStakeholders] = useState("enduser")

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

    return (
        <div
            className='my-28 px-6'
            id='content-generation'
        >
            <div className='max-w-5xl mx-auto flex flex-col space-y-6'>
                <div className='flex flex-row items-center md:space-x-4'>
                    <div
                        className='hidden md:block p-3 bg-[#0d0d0d] border border-neutral-900 rounded-2xl'
                    >
                        <IconLink className='text-neutral-500 w-6 h-6' />
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-white'>
                            Chaining complex NLP tasks
                        </h3>
                        <p className='text-gray-400 mt-1'>
                            Embed the power of GPT and NLP into your own processes. Ranging from content creation to transcription or summarization, text modification and many more. Put GPT-like models into your processes.
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
                                    className='flex flex-row group space-x-2 items-center relative border border-neutral-800 rounded-full bg-neutral-900 pl-2 pr-3 py-1.5'
                                >
                                    <span
                                        className={classNames(
                                            showForStakeholders === item.showFor ? 'bg-green-500' : null,
                                            'mt-0.5 rounded-full w-2 h-2 inline-block mx-1.5 bg-gray-500 group-hover:bg-green-500'
                                        )}
                                    />
                                    <span
                                        className='text-gray-400 group-hover:text-white'
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
                    <Enduser />
                )}
                {showForStakeholders == 'manager' && (
                    <Manager />
                )}
            </div>
        </div>
    )
}


