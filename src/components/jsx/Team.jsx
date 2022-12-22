import { IconBrain } from "@tabler/icons";

export function Team() {
    return (
        <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mt-20 py-8 sm:py-10">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                        How we view <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600">
                            <IconBrain className="inline-block text-lime-300 pb-4 h-16 w-16" />
                            artificial intelligence
                        </span>
                    </h2>
                    <p className="mt-2 text-lg leading-5 text-gray-400">
                        The rise of artificial intelligence is one of the most important developments of our time. We believe that its biggest impact will be felt in the field of natural language processing, enabling new ways of interaction between humans and machines. It will impact how we search for information, how we get creative about new content, and ultimately how we get things done.
                    </p>
                    <p className="mt-2 text-lg leading-5 text-gray-400">
                        As large language models are becoming more and more powerful, we further believe that the next step is to make them more data-centric. This gives developers and scientists the superpower to control and shape the models to their needs. And for this to happen, data must finally be the first-class citizen in the world of NLP.
                    </p>
                    <p className="mt-2 text-lg leading-5 text-gray-400">
                        We will not stop until training data is treated as if it were software code, such that ideas can be turned into reality in a matter of hours.
                    </p>
                    <div className="mt-4 text-2xl">
                        <span
                            className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600"
                        >Our mission:
                        </span> {' '}
                        <span className="text-white">
                            shorten the gap between ideas and reality in NLP, ultimately enabling reliable, controllable and powerful natural language interfaces.
                        </span>
                    </div>
                </div>
            </div>

            <div className="mx-auto py-8 sm:py-10">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                        Our team
                    </h2>
                    <p className="mt-2 text-lg leading-5 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500">
                        test
                    </p>
                </div>
            </div>
            <div className="text-white mx-auto grid grid-cols-5">
                <div className="col-span-2">
                    test
                </div>
                <img
                    src="https://www.kern.ai/teamfoto.jpg"
                    alt="Team"
                    className="col-span-3 mx-auto rounded-2xl
                    shadow-[0_0px_20px_2px_rgba(255,255,255,0.5)]
                    "
                />
            </div>

            <div className="mx-auto py-16 sm:py-24">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                        Some numbers and the story so far
                    </h2>
                    <p className="mt-2 text-lg leading-5 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500">
                        test
                    </p>
                </div>
            </div>

        </section>
    )
}
