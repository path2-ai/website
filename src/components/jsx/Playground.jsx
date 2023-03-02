import { EmailAnalytics } from './UseCases/EmailAnalytics'
import { MemoToContent } from './UseCases/MemoToContent'
import { TrainingDataPipe } from './UseCases/TrainingDataPipe'

export function Playground() {

    return (
        <section className='mx-auto max-w-7xl py-20 sm:py-24'>
            <div className="mx-6"
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

            <div className='flex flex-col space-y-10'>
                <EmailAnalytics />
                <MemoToContent />
                <TrainingDataPipe />
            </div>
        </section >
    )
}


