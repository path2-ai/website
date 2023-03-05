import { IconPlayerPlay } from "@tabler/icons"

const YOUTUBE_VIDEO = 'https://www.youtube.com/watch?v=Wcbdwwr5AI8&ab_channel=KernAI'
export function APIProxy() {


    return (
        <div className="py-32 max-w-5xl mx-auto">
            <main className="grid grid-cols-2 gap-4">
                <div
                    className="flex flex-col items-center justify-center"
                >
                    <h2 className="text-2xl font-bold text-gray-100">
                        You managing multiple APIs
                    </h2>
                    <img
                        src="/without-consolidation.png"
                        alt="Without Consolidation"
                        className="mt-6"
                        width={280}
                    />
                </div>
                <div
                    className="flex flex-col items-center justify-center"
                >
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                        Us helping you manage them
                    </h2>
                    <img
                        src="/with-consolidation.png"
                        alt="With Consolidation"
                        className="mt-6"
                        width={280}
                    />
                </div>
            </main>
            <section className="mt-20 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-gray-100">
                    With bricks, you can consolidate all your APIs into one
                </h1>
                <div className='my-16 bg-gradient-to-b from-yellow-700 via-yellow-400 to-yellow-700 rounded-lg 
                  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                  shadow-[0_0px_100px_10px_rgba(251,217,94,0.5)]
               '>

                    <img
                        src="/screenshot-bricks-generator.png"
                        alt="Bricks Generator"
                        className="rounded-lg p-0.5"
                    />
                    <a
                        className='flex justify-center items-center absolute top-[34%] left-[40%] md:top-[47%] md:left-[47%] h-16 w-16 bg-black rounded-full hover:scale-110 transition-transform duration-300'
                        href={YOUTUBE_VIDEO}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <IconPlayerPlay className='h-5 w-5 text-stone-100' fill='white' />
                    </a>
                </div>
                <div className='mx-auto max-w-7xl flex items-center justify-center'>
                    <p className="text-gray-100">bricks is directly integrated in our platform with an API proxy.</p>
                </div>
            </section>
        </div >
    )
}
