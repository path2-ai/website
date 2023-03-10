export function Intro() {


    return (
        <div>
            <section>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl py-16 sm:py-20">

                        <h3
                            className='text-3xl md:text-4xl font-bold text-white md:text-center'
                        >
                            What does that mean?
                        </h3>
                        <p className='text-sm md:text-base text-gray-400 md:text-center mt-4 md:mt-10'>
                            Think of any use case in your company that requires some form of communication (e.g. via emails).
                        </p>
                        <p className='text-sm md:text-base text-gray-400 md:text-center mt-2'>
                            How is this process currently executed? What are the bottlenecks? What are the pain points?
                        </p>
                        <p className='text-sm md:text-base text-gray-400 md:text-center mt-2'>
                            We help you to build process automations that understand texts, voice, and documents.
                        </p>
                        <p className='text-sm md:text-base text-gray-400 md:text-center mt-2'>
                            For instance, to create an automation across all customer-facing channels - <span className='text-white'>beyond chatbots</span>.
                        </p>

                        <div className="hidden md:block">
                            <img src="/nlp-hero-desktop.png" className='mt-8 mx-auto' />
                        </div>
                        <div className="block md:hidden">
                            <img src="/nlp-hero-mobile.png" className='mt-8 mx-auto' />
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
