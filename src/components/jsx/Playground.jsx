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
        name: 'GPT-like content generation',
        href: '#content-generation',
    }, {
        name: 'Data-centric NLP',
        href: '#training-data',
    }]

    const [currentView, setCurrentView] = useState(null)
    const [hideSubNav, setHideSubNav] = useState(true)

    return (
        <section className='py-16'>
            <div className={classNames(
                hideSubNav ? 'hidden' : null,
                'hidden md:block sticky top-14 py-1 z-40 backdrop-blur-md opacity-[98%]'
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


            <div className="mx-auto max-w-7xl px-6"
            >
                <h2 className='text-4xl font-bold text-white md:text-center flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 md:items-center md:justify-center'>
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
                                setCurrentView('GPT-like content generation')
                            }
                        }}>
                        <MemoToContent />
                    </InView>
                    <InView
                        threshold={0.5}
                        as="div" onChange={(inView, entry) => {
                            if (inView) {
                                setCurrentView('Data-centric NLP')
                            }
                        }}>
                        <TrainingDataPipe />
                    </InView>
                </div>
            </InView>
        </section >
    )
}


