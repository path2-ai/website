import { IconTools } from '@tabler/icons'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function AnyCase() {


    return (
        <div
            id="any-case"
        >
            <div className='max-w-5xl mx-auto flex flex-col space-y-6'>
                <div className='flex flex-row items-center md:space-x-4'>
                    <div
                        className='hidden md:block p-3 bg-[#0d0d0d] border border-neutral-900 rounded-2xl'
                    >
                        <IconTools className='text-neutral-500 w-6 h-6' />
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-white'>
                            It's a dev platform
                        </h3>
                        <p className='text-gray-400 mt-1'>
                            With low-code, you can build almost any NLP use cases on top of Kern AI with ease.
                        </p>
                    </div>
                </div>
            </div>
            <div
                className='border border-neutral-800 rounded-2xl p-6 bg-[#0d0d0d] mt-6 md:mx-20'
            >
                <img
                    src="/astronaut.png"
                    className='rounded-xl'
                />
            </div>
            <p className='max-w-2xl mx-auto text-gray-400 mt-2 md:text-center'>
                See this <a
                    href='https://www.youtube.com/watch?v=yeML0vX0yLw&ab_channel=KernAI'
                    className='text-green-500 hover:text-white'
                    target='_blank'
                    rel='noreferrer noopener'
                >example video</a> where we build a Slackbot summarizing sentiment of stocknews data for daily stock market updates in 5 minutes.
            </p>
        </div >
    )
}
