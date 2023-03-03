import { EmailAnalytics } from './UseCases/EmailAnalytics'
import { MemoToContent } from './UseCases/MemoToContent'
import { TrainingDataPipe } from './UseCases/TrainingDataPipe'
import { InView } from 'react-intersection-observer';
import { useState } from 'react'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Playground() {

    const navigation = [{
        name: 'Email automation',
        href: '#email-automation',
    }, {
        name: 'Content generation',
        href: '#content-generation',
    }, {
        name: 'Training data',
        href: '#training-data',
    }]

    const [currentView, setCurrentView] = useState(null)
    const [hideSubNav, setHideSubNav] = useState(true)

    return (
        <section className=' py-16'>
            <div className={classNames(
                hideSubNav ? 'hidden' : null,
                'sticky top-14 py-1 z-40 backdrop-blur-md opacity-[98%]'
            )}>
                <div
                    className='max-w-5xl mx-auto '
                >
                    <div className='flex flex-row mx-auto p-2 space-x-2'>
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className='flex flex-row group space-x-2 items-center relative border border-neutral-800 rounded-full bg-neutral-900 pl-2 pr-3 py-1.5'
                            >
                                <span
                                    className={classNames(
                                        currentView === item.name ? 'bg-green-500' : null,
                                        'mt-0.5 rounded-full w-2 h-2 inline-block mx-1.5 bg-gray-500 group-hover:bg-green-500'
                                    )}
                                />
                                <span
                                    className='text-gray-400 group-hover:text-white'
                                >
                                    {item.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>


            <div className="mx-auto max-w-7xl mx-6"
            >
                <h2 className='text-4xl font-bold text-white text-center flex flex-row space-x-2 items-center justify-center'>
                    <span className='animate-text bg-gradient-to-r from-white via-gray-600 to-white bg-clip-text text-transparent'>
                        Common use cases
                    </span>
                    <span>
                        built on our platform
                    </span>
                </h2>
                <p className='text-gray-400 text-center mt-2'>
                    See exemplary use cases that can be built with Kern AI.
                </p>
            </div>

            <InView
                threshold={0.2}
                as="div" onChange={(inView, entry) => {
                    if (inView) {
                        setHideSubNav(false)
                    } else {
                        setHideSubNav(true)
                    }
                }}
            >
                <div className='mx-auto max-w-7xl my-6 flex flex-col'>
                    <InView
                        threshold={0.5}
                        as="div" onChange={(inView, entry) => {
                            if (inView) {
                                setCurrentView('Email automation')
                            }
                        }}>
                        <EmailAnalytics />
                    </InView>

                    <InView
                        threshold={0.5}
                        as="div" onChange={(inView, entry) => {
                            if (inView) {
                                setCurrentView('Content generation')
                            }
                        }}>
                        <MemoToContent />
                    </InView>
                    <InView
                        threshold={0.5}
                        as="div" onChange={(inView, entry) => {
                            if (inView) {
                                setCurrentView('Training data')
                            }
                        }}>
                        <TrainingDataPipe />
                    </InView>
                </div>
            </InView>
        </section >
    )
}


