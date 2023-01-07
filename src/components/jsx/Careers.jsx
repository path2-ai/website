import { IconAirBalloon, IconBeach, IconBulb, IconCash, IconChevronRight, IconClock, IconDeviceDesktop, IconFile, IconFileText, IconGlobe, IconHeart, IconHomeDollar, IconMessages, IconMicrophone, IconMoneybag, IconMoodHappy, IconMoodNerd, IconRocket, IconTrophy, IconUsers, IconWritingSign } from '@tabler/icons'
import { KERN_ASSETS_URL } from './_settings'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'

const timeline = [
    {
        id: 1,
        title: 'Application',
        description: 'Apply for the job in our job portal (see below)',
        remote_or_onsite: 'Remote',
        icon: IconFileText,
        iconBackground: 'bg-gray-900',
    },
    {
        id: 2,
        title: 'Initial screening',
        description: 'This is a short and informal chat with one of our team members (can be an employee or founder). We mainly want to get to know you and your background, and you can ask us initial questions you have.',
        remote_or_onsite: 'Remote',
        icon: IconMessages,
        iconBackground: 'bg-gray-700',
    },
    {
        id: 3,
        title: 'Founder interview',
        description: 'This is a ca 30 minute interview with one of our founders. We want to understand how you can help the team grow, what you are highly passionate about, and what is important to you.',
        remote_or_onsite: 'Remote',
        icon: IconMicrophone,
        iconBackground: 'bg-lime-800',
    },
    {
        id: 4,
        title: 'Case study',
        description: 'In this step, we will send you a case study, for which we will hire you as a contractor. You will have 72 hours to complete it. We will then schedule a call to discuss your solution.',
        remote_or_onsite: 'Remote',
        icon: CheckIcon,
        iconBackground: 'bg-lime-700',
    },
    {
        id: 5,
        title: 'Meet the team',
        description: 'If you pass the case study, we will schedule a call with the team. Get to know your potential future colleagues, and get a feeling for what the team culture is like. If you want to, you can visit us in Bonn.',
        remote_or_onsite: 'Remote or onsite',
        icon: IconMoodHappy,
        iconBackground: 'bg-green-600',
    },
    {
        id: 6,
        title: 'Contract signing',
        description: 'We will send you the contract with all the details. We will previously have discussed what is important to you, and will try to make sure you are happy with the proposed contract.',
        remote_or_onsite: 'Remote or onsite',
        icon: IconWritingSign,
        iconBackground: 'bg-green-500',
    },
    {
        id: 7,
        title: 'Onboarding',
        description: 'Welcome, you are now part of the team! We will schedule a call to discuss your onboarding, and how the first two weeks will look like, and what you can expect.',
        remote_or_onsite: 'Remote or onsite',
        icon: IconRocket,
        iconBackground: 'bg-lime-500',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


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

const perks = [
    {
        name: 'CET ± 2 hours',
        description: "You can work from anywhere within CET ± 2 hours. We have an office in Bonn if you want to join on-site.",
        icon: IconGlobe,
    },
    {
        name: 'Equity for every full-time employee',
        description: "Share in the success of the company. We offer equity to every full-time employee.",
        icon: IconHomeDollar,
    },
    {
        name: 'Competitive salary',
        description: "We offer a competitive salary, based on your experience and skills.",
        icon: IconCash,
    },
    {
        name: 'Equipment of your choice',
        description: "MacOS, Windows or Linux? You can choose the equipment that works best for you.",
        icon: IconDeviceDesktop,
    },
    {
        name: 'We help you grow',
        description: "We pay for educational title, do internal learning sessions and help you grow as much as possible.",
        icon: IconBulb,
    },
    {
        name: '5 weeks of vacation',
        description: "We offer 5 weeks of vacation every year, so you can take a break and recharge.",
        icon: IconBeach,
    },
    {
        name: 'Amazing team',
        description: "Working with a small team of highly passionate people is just incredible. You will be part of a great team.",
        icon: IconMoodHappy,
    },
    {
        name: 'Responsibility',
        description: "You are not just one gear in a machine. You are a key part of the team, and you have a lot of responsibility.",
        icon: IconTrophy,
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

function Perk({ perk }) {
    return (
        <div>
            <div className='flex items-center text-white'>
                <perk.icon className="h-6 w-6 text-lime-500 inline-block mr-2" />
                {perk.name}
            </div>
            <div className='mt-2 text-sm text-gray-300'>
                {perk.description}
            </div>
        </div>
    )
}

function PolaroidImage({ src, rotation, pos, description }) {
    return (
        <div className={`absolute rotate-[${rotation}deg] ${pos} border border-gray-300 rounded-lg p-3 pb-10 bg-white shadow-[0_0px_10px_2px_rgba(255,255,255,0.6)] hover:z-50`}>
            <img
                style={{
                    width: '320px',
                    height: '360px',
                }}
                className="rounded-md"
                src={`${KERN_ASSETS_URL}/images/${src}.png`}
            />
            <p className='text-gray-600 text-xs'>
                {description}
            </p>
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
                            Join us in building <span className='animate-text bg-gradient-to-r from-green-300 via-emerald-600 to-lime-300 bg-clip-text text-transparent'>magical</span> software
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
                    <div className='mt-4 text-gray-200'>
                        We are makers, designers, engineers. We like getting our hands dirty and building things that could change how technology is used in the world. If you agree with the following values, we would love to hear from you.
                    </div>
                    <div className='mt-4 grid grid-cols-2 gap-4'>
                        {values.map((value) => (
                            <Value key={value.name} value={value} />
                        ))}
                    </div>
                </div>
                <div className='py-20'>
                    <div className='relative flex py-44 mx-auto mt-10 max-w-5xl lg:max-w-6xl'>
                        <PolaroidImage src={'polaroid-office-bonn-get-together'} rotation={0} pos={'right-60 -mt-40'} description={'Get together in Bonn'} />
                        <PolaroidImage src={'polaroid-office-bonn-lunch'} rotation={-17} pos={'left-20 -mt-32'} description={'Lunch at the office in Bonn'} />
                        <PolaroidImage src={'polaroid-office-bonn-felix'} rotation={30} pos={'right-0 top-10'} description={'Felix improving refinery'} />
                        <PolaroidImage src={'polaroid-office-bonn-moritz'} rotation={17} pos={'top-64 right-44'} description={'Moritz in full hacker-mode'} />
                        <PolaroidImage src={'polaroid-activity'} rotation={0} pos={'left-72 -mt-10'} description={'Some after-work activities :)'} />
                        <PolaroidImage src={'polaroid-office-bonn-late-hour'} rotation={-17} pos={'mt-16'} description={'Late night in the office'} />
                    </div>
                </div>

            </div>
            <div className='mt-16 text-white mx-auto max-w-2xl lg:max-w-3xl'>
                <div className='text-2xl font-semibold animate-text bg-gradient-to-r from-white via-gray-600 to-white bg-clip-text text-transparent'>
                    Perks and benefits
                </div>
                <div className='mt-6 text-gray-200 grid grid-cols-2 gap-8'>
                    {perks.map((perk) => (
                        <Perk key={perk.name} perk={perk} />
                    ))}
                </div>
            </div>

            <div className='mt-16 text-white mx-auto max-w-2xl lg:max-w-3xl'>
                <div className='text-2xl font-semibold'>
                    Hiring process
                </div>

                <div className="mt-10 flow-root">
                    <ul role="list" className="-mb-8">
                        {timeline.map((event, eventIdx) => (
                            <li key={event.id}>
                                <div className="relative pb-8">
                                    {eventIdx !== timeline.length - 1 ? (
                                        <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-lime-400" aria-hidden="true" />
                                    ) : null}
                                    <div className="relative flex space-x-3">
                                        <div>
                                            <span
                                                className={classNames(
                                                    event.iconBackground,
                                                    'h-8 w-8 rounded-full flex items-center justify-center ring-2 ring-lime-500'
                                                )}
                                            >
                                                <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="flex min-w-0 flex-1 justify-between">
                                            <div>
                                                <p className="text-sm text-gray-400">
                                                    <div>
                                                        {event.title}
                                                    </div>
                                                    <div className="font-medium text-gray-100">
                                                        {event.description}
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="whitespace-nowrap text-right text-sm text-gray-300">
                                                {event.remote_or_onsite}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
