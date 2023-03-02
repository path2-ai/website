import { useEffect, useState } from 'react'
import { IconAlignLeft } from '@tabler/icons'
import { Enduser } from './MemoComponents/Enduser'
import { Developer } from './MemoComponents/Developer'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function MemoToContent() {

    const [devIsSelected, setDevIsSelected] = useState(false)

    return (
        <div className='my-20'>
            <div className='flex flex-col space-y-6'>
                <div className='flex flex-row items-center space-x-4'>
                    <div
                        className='p-3 bg-[#0d0d0d] border border-neutral-900 rounded-2xl'
                    >
                        <IconAlignLeft className='text-neutral-500 w-6 h-6' />
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-white'>
                            Memo to content
                        </h3>
                        <p className='text-gray-400 mt-1'>
                            Transcribe voice memos to text and create valuable content directly from it.
                        </p>
                    </div>
                </div>
                <div className='w-fit p-[1px] rounded-2xl bg-gradient-to-r from-gray-800 via-gray-500 to-neutral-900'>
                    <div className='flex flex-row space-x-2 items-center justify-between p-2 text-gray-500 text-sm rounded-2xl bg-neutral-900 border-b border-gray-800'>
                        <div className='w-fit p-[1px] rounded-xl bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800'>
                            <button
                                className={classNames(
                                    devIsSelected ? null : 'text-white',
                                    'flex flex-row items-center p-2 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-xl hover:from-neutral-800 hover:via-neutral-700 hover:to-neutral-800 hover:text-white'
                                )}
                                onClick={() => setDevIsSelected(false)}
                            >
                                <span
                                    className={classNames(
                                        'mt-0.5 rounded-full w-2 h-2 inline-block mx-1.5',
                                        devIsSelected ? 'bg-neutral-500' : 'bg-green-500'
                                    )}
                                />
                                <span>
                                    Show me how the end user's experience looks like
                                </span>
                            </button>
                        </div>

                        <div className='w-fit p-[1px] rounded-xl bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800'>
                            <button
                                className={classNames(
                                    devIsSelected ? 'text-white' : null,
                                    'flex flex-row items-center p-2 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-xl hover:from-neutral-800 hover:via-neutral-700 hover:to-neutral-800 hover:text-white'
                                )}
                                onClick={() => setDevIsSelected(true)}
                            >
                                <span
                                    className={classNames(
                                        'mt-0.5 rounded-full w-2 h-2 inline-block mx-1.5',
                                        devIsSelected ? 'bg-green-500' : 'bg-neutral-500'
                                    )}
                                />
                                <span>
                                    Show me how the developer's experience looks like
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    {devIsSelected ? (
                        <Developer />
                    ) : (
                        <Enduser />
                    )}
                </div>
            </div>

        </div>
    )
}


