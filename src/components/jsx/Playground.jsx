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

    return (
        <section className='py-16'>
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

            <div className={classNames(
                'mt-6 hidden md:block sticky top-14 py-1 z-40 backdrop-blur-md opacity-[98%]'
            )}>
                <div className='flex flex-row justify-center mx-auto p-2 space-x-2'>
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

            <div className='mx-auto max-w-7xl py-16 flex flex-col space-y-14 md:space-y-20 px-6'>

                <InView
                    threshold={0.5}
                    as="div" onChange={(inView, entry) => {
                        console.log(entry)
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
        </section >
    )
}


