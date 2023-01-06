import { IconAirBalloon, IconBulb, IconChevronRight, IconHeart, IconMoodNerd, IconTrophy, IconUsers } from '@tabler/icons'
import { KERN_ASSETS_URL } from './_settings'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { IconCrystalBall, IconTag } from '@tabler/icons'



const values = [
    {
        name: 'Bias towards action',
        description:
            'You make clear plans, and then execute. When you see a goal in sight, you sprint towards it. You are not afraid to fail, and you learn from your mistakes.',
        icon: IconTrophy,
    },
    {
        name: 'Creativity and innovation',
        description:
            'You are not afraid to trust your gut, and push ideas forward when thinking of new ways to tackle existing problems.',
        icon: IconBulb,
    },
    {
        name: 'Self-starters',
        description:
            'You take initiative and take responsibility for your work. And you know there is a clear reason you are part of the team.',
        icon: IconAirBalloon,
    },
    {
        name: 'Teamwork',
        description:
            'You put the team first, and you create together with colleagues. This means you are open to feedback, and you are willing to help others.',
        icon: IconUsers,
    },
    {
        name: 'Kindness and empathy',
        description:
            'You are kind to others, and you are empathetic. You are not afraid to ask for help, and you are willing to help others.',
        icon: IconHeart,
    },
    {
        name: 'Curiosity and passion',
        description:
            'You are curious about the world, and you are passionate about what you do. You are driven by a desire to learn and grow. And you share deep interest in technology and software.',
        icon: IconMoodNerd,
    },
]

function HoverEffect({ mouseX, mouseY }) {
    let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
    let style = { maskImage, WebkitMaskImage: maskImage }
    return (
        <div className="pointer-events-none">
            <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
            </div>
            <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#202D2E] to-[#303428] opacity-0 transition duration-300 group-hover:opacity-100"
                style={style}
            />
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
                style={style}
            >
            </motion.div>
        </div>
    )
}

function Value({ value, product }) {
    let mouseX = useMotionValue(0)
    let mouseY = useMotionValue(0)

    function onMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <div
            onMouseMove={onMouseMove}
            className="col-span-1 group relative flex rounded-2xl transition-shadow hover:shadow-md bg-neutral-900 hover:shadow-black/5"
        >
            <HoverEffect mouseX={mouseX} mouseY={mouseY} />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />
            <div className="relative rounded-2xl px-4 pt-16 pb-4">
                <div className={`flex h-7 w-7 items-center justify-center rounded-full ring-1 backdrop-blur-[2px] transition duration-300 bg-white/7.5 ring-white group-hover:bg-green-300/10 group-hover:ring-green-400`}>
                    <value.icon className={`h-5 w-5 transition-colors duration-300 fill-white/10 stroke-zinc-400 group-hover:fill-green-300/10 group-hover:stroke-green-400`} />
                </div>
                <h3 className="mt-4 text-sm font-semibold leading-7 text-white">
                    <span className="absolute inset-0 rounded-2xl" />
                    {value.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">
                    {value.description}
                </p>
            </div>
        </div>
    )
}


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
                <div className='mt-28 relative text-white mx-auto max-w-2xl lg:max-w-3xl'>
                    <div className='text-2xl font-semibold'>
                        Values at Kern AI
                    </div>
                    <div className='mt-4 text-sm text-gray-200'>
                        We are makers, designers, engineers. We like getting our hands dirty and building things that could change how technology is used in the world. If you agree with the following values, we would love to hear from you.
                    </div>
                    <div className='mt-4 grid grid-cols-2 gap-4'>
                        {values.map((value) => (
                            <Value key={value.name} value={value} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
