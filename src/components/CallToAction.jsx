export function CallToAction() {
    return (
        <section className="mx-auto max-w-7xl py-16 px-4 text-center sm:px-6 lg:py-16 lg:px-8 space-y-8">
            <div className="mx-auto w-fit p-6 rounded-2xl bg-gradient-to-r from-gray-900 to-neutral-900 ring-1 ring-lime-500             
                  shadow-[0_0px_40px_2px_rgba(200,250,0,0.5)]">
                <img
                    className="mx-auto "
                    src={"https://www.kern.ai/kern-icon.png"}
                    alt=""
                    width="48"
                />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-3xl space-y-2">
                <span className="block">Put natural language processing into action.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600">Turn ideas into production.</span>
            </h2>
            <div className="flex justify-center">
                <div className="inline-flex">
                    <a
                        href="#"
                        className="hover:bg-neutral-800 bg-neutral-900 inline-block rounded-lg px-4 py-2 text-base font-semibold leading-6 shadow-sm ring-1 ring-inset ring-white/10 group-hover:ring-white/20"
                    >
                        <span className='my-auto text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600'>
                            Request a demo
                        </span>
                    </a>
                </div>
                <div className="ml-3 inline-flex">
                    <a
                        href="#"
                        className="hover:bg-neutral-800 bg-neutral-900 inline-block rounded-lg px-4 py-2 text-base font-semibold leading-6 shadow-sm ring-1 ring-inset ring-white/10 group-hover:ring-white/20"
                    >
                        <span className='my-auto text-gray-200'>
                            See pricing
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}
