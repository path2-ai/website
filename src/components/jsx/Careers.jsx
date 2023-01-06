import { IconChevronRight } from '@tabler/icons'
import { KERN_ASSETS_URL } from './_settings'

export function Careers() {
    return (
        <div>
            <div className="relative overflow-hidden pt-32 pb-96 lg:pt-40">
                <div>
                    <img
                        className="absolute top-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2"
                        src={`${KERN_ASSETS_URL}/images/background-careers.png`}
                        alt=""
                    />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
                    <div className="mx-auto max-w-5xl lg:max-w-6xl">
                        <p className="mt-12 text-5xl font-bold tracking-tight text-white">
                            Join us in building <span className='animate-text bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 bg-clip-text text-transparent'>magical</span> software
                        </p>
                        <p className="mt-6 text-lg leading-8 text-white">
                            We are looking for the most talented and ambitious people to join our team.
                        </p>
                    </div>
                </div>
                <div className="my-28 relative mx-auto w-fit p-6 rounded-2xl bg-gradient-to-r from-gray-900 to-neutral-900 ring-1 ring-lime-500             
                  shadow-[0_0px_40px_2px_rgba(200,250,0,0.5)]">
                    <img
                        className="mx-auto "
                        src={"https://www.kern.ai/kern-icon.png"}
                        alt=""
                        width="48"
                    />
                </div>
                <div className='relative text-gray-300 mx-auto max-w-2xl lg:max-w-3xl'>
                    <div className='text-xl text-white font-semibold'>
                        Natural language processing is growing into one of the biggest game changers in the world of software.
                    </div>
                    <div className='mt-2 text-xl text-white font-semibold'>
                        We are at the forefront of this evolution, and we are looking for <span className='font-bold animate-text bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 bg-clip-text text-transparent'>you</span> to join our team.
                    </div>
                    <div className='mt-8'>
                        At Kern AI, we are passionate about using technology to solve real-world problems. Our team is made up of talented engineers, data scientists, and natural language processing experts who are dedicated to crafting innovative solutions.
                    </div>
                    <div className='mt-4'>
                        We are constantly aiming to push the boundaries of what is possible with data and natural language processing, and we are always looking for like-minded individuals to join us on this journey. If you share our vision of a world where data is put into action, we invite you to join us and make a meaningful impact with Kern AI.
                    </div>
                    <div className="mt-4">
                        <div className="inline-flex">
                            <a
                                href="#"
                                className="hover:bg-neutral-800 bg-neutral-900 inline-block rounded-lg px-4 py-2 text-base font-semibold leading-6 shadow-sm ring-1 ring-inset ring-white/10 group-hover:ring-white/20"
                            >
                                <span className='my-auto text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600'>
                                    See open positions <IconChevronRight className='text-green-600 inline-block w-5 h-5' />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
