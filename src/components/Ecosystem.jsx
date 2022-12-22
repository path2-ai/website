import { useEffect, useState } from 'react'
import { Circular } from '@/util/Circular'
import { RefineryIcon } from '@/util/RefineryIcon'
import { BricksIcon } from '@/util/BricksIcon'
import { GatesIcon } from '@/util/GatesIcon'
import { WorkflowIcon } from '@/util/WorkflowIcon'
import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { IconBuildingCastle } from '@tabler/icons'

const slideContent = {
  refinery: {
    title: "refinery",
    description: "Refinery is a data management platform that allows you to easily manage your data and build data pipelines.",
    href: "https://www.kern.ai/refinery",
    icon: <RefineryIcon className="h-12 w-12" />,
    image: "/screenshot-refinery.png",
    fromColor: "from-green-500",
    toColor: "to-lime-500",
    ringColor: "ring-green-500",
    cols: 2,
    features: [
      {
        href: '/x1',
        name: 'X1',
        description:
          'Learn about the contact model and how to create, retrieve, update, delete, and list contacts.',
        icon: InboxIcon,
        colsSpan: 1,
      },
      {
        href: '/x2',
        name: 'X2',
        description:
          'Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.',
        icon: SparklesIcon,
        colsSpan: 1,
      },
      {
        href: '/x3',
        name: 'X3',
        description:
          'Learn about the message model and how to create, retrieve, update, delete, and list messages.',
        icon: InboxIcon,
        colsSpan: 2,

      },
      {
        href: '/x4',
        name: 'X4',
        description:
          'Learn about the group model and how to create, retrieve, update, delete, and list groups.',
        icon: InboxIcon,
        colsSpan: 2,
      },
    ]
  },
  bricks: {
    title: "bricks",
    description: "Bricks is a data processing platform that allows you to easily build data pipelines and run them on your data.",
    href: "https://www.kern.ai/bricks",
    icon: <BricksIcon className="h-12 w-12" />,
    image: "/screenshot-bricks.png",
    fromColor: "from-amber-500",
    toColor: "to-yellow-500",
    ringColor: "ring-yellow-500",
    cols: 2,
    features: [
      {
        href: '/x5',
        name: 'X5',
        description:
          'Learn about the contact model and how to create, retrieve, update, delete, and list contacts.',
        icon: InboxIcon,
        colsSpan: 1,
      },
      {
        href: '/x6',
        name: 'X6',
        description:
          'Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.',
        icon: SparklesIcon,
        colsSpan: 1,
      },
      {
        href: '/x7',
        name: 'X7',
        description:
          'Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.',
        icon: SparklesIcon,
        colsSpan: 2,
      },
    ]
  },
  gates: {
    title: "gates",
    description: "Gates is a data processing platform that allows you to easily build data pipelines and run them on your data.",
    href: "https://www.kern.ai/gates",
    icon: <GatesIcon className="h-12 w-12" />,
    image: "/screenshot-gates.png",
    fromColor: "from-red-500",
    toColor: "to-orange-500",
    ringColor: "ring-orange-500",
    cols: 2,
    features: [
      {
        href: '/x8',
        name: 'X8',
        description:
          'Learn about the contact model and how to create, retrieve, update, delete, and list contacts.',
        icon: InboxIcon,
        colsSpan: 2,
      },
      {
        href: '/x9',
        name: 'X9',
        description:
          'Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.',
        icon: SparklesIcon,
        colsSpan: 2,
      }
    ]
  },
  workflow: {
    title: "workflow",
    description: "Workflow is a data processing platform that allows you to easily build data pipelines and run them on your data.",
    href: "https://www.kern.ai/workflow",
    icon: <WorkflowIcon className="h-12 w-12" />,
    image: "/screenshot-workflow.png",
    fromColor: "from-sky-500",
    toColor: "to-blue-500",
    ringColor: "ring-blue-500",
    cols: 2,
    features: [
      {
        href: '/x10',
        name: 'X10',
        description:
          'Learn about the contact model and how to create, retrieve, update, delete, and list contacts.',
        icon: InboxIcon,
        colsSpan: 2,
      },
      {
        href: '/x11',
        name: 'X11',
        description:
          'Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.',
        icon: SparklesIcon,
        colsSpan: 2,
      },
      {
        href: '/x12',
        name: 'X12',
        description:
          'Learn about the message model and how to create, retrieve, update, delete, and list messages.',
        icon: InboxIcon,
        colsSpan: 2,

      },
      {
        href: '/x13',
        name: 'X13',
        description:
          'Learn about the group model and how to create, retrieve, update, delete, and list groups.',
        icon: InboxIcon,
        colsSpan: 2,
      },
    ]
  },
}

const slideOptions = Object.entries(slideContent).map(([key, value]) => value.title)
const slider = new Circular(slideOptions)


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


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

function Feature({ feature }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={feature.href}
      onMouseMove={onMouseMove}
      className={classNames(
        feature.colsSpan > 1 ? `col-span-${feature.colsSpan}` : '',
        "group relative flex rounded-2xl transition-shadow hover:shadow-md bg-neutral-900 hover:shadow-black/5"
      )}
    >
      <HoverEffect mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pt-16 pb-4">
        <div className="flex h-7 w-7 items-center justify-center rounded-full ring-1 backdrop-blur-[2px] transition duration-300 bg-white/7.5 ring-white group-hover:bg-emerald-300/10 group-hover:ring-emerald-400">
          <feature.icon className="h-5 w-5 transition-colors duration-300 fill-white/10 stroke-zinc-400 group-hover:fill-emerald-300/10 group-hover:stroke-emerald-400" />
        </div>
        <h3 className="mt-4 text-sm font-semibold leading-7 text-white">
          <Link href={feature.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {feature.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-400">
          {feature.description}
        </p>
      </div>
    </div>
  )
}


export function Ecosystem() {

  const [current, setCurrent] = useState(slider.current())
  const [clickedOption, setClickedOption] = useState(null)

  const [timer, setTimer] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1)
      if (timer % 400 === 0 && timer !== 0 && clickedOption === null) {
        setCurrent(slider.next())
        setTimer(0)
      }
    }, 10)
    return () => clearInterval(interval)
  }, [timer])

  return (
    <section className='mx-auto max-w-5xl py-10 sm:py-16'>
      <div>
        <div>
          <div className="flex">
            <div className='space-y-4'>
              <div className='bg-gradient-to-b from-lime-500 via-green-700 to-lime-500 rounded-lg 
                  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                  shadow-[0_0px_100px_10px_rgba(200,250,0,0.5)]
               '>
                <img
                  src={slideContent[current].image}
                  alt={slideContent[current].title}
                  className="rounded-lg p-0.5"
                />
              </div>
              <div className="justify-center pt-10 flex space-x-4">
                {Object.entries(slideContent).map(([key, item], index) => (
                  <div key={index}>
                    <button onClick={
                      () => {
                        if (key === clickedOption) {
                          setClickedOption(null)
                          setTimer(0)
                          return
                        }
                        while (slider.current() !== key) {
                          slider.next()
                        }
                        setCurrent(key)
                        setClickedOption(key)
                        setTimer(0)
                      }} className={classNames(
                        key === clickedOption ? `${item.ringColor}` : "ring-white/10",
                        "hover:bg-neutral-800 bg-neutral-900 inline-block rounded-lg p-4 text-base font-semibold leading-7 text-gray-100 ring-1 ring-inset group-hover:ring-white/20",
                      )}>
                      {slideContent[key].icon}
                    </button>
                    <div className="mt-2 h-1.5 flex rounded bg-green-200">
                      {key === current && (
                        <div className="w-12 bg-gradient-to-r rounded from-green-600 to-lime-600" style={{ width: `${key === clickedOption ? 0 : timer * .25}%` }} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex flex-col items-center space-y-4'>
                <div className='text-gray-100 text-sm'>
                  The Kern AI ecosystem consists of four products
                </div>
                <a
                  href='/docs/architecture'
                  type='button'
                  className='hover:text-lime-400 hover:bg-neutral-800 flex rounded-lg p-3 text-base font-semibold leading-7 text-gray-100 ring-1 ring-inset ring-neutral-700 group-hover:ring-white/20'>
                  <IconBuildingCastle className='my-auto h-5 w-5 mr-2' />
                  <span>
                    Platform architecture
                  </span>
                  <span className="flex h-3 w-3">
                    <span className="animate-ping relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
                  </span>
                </a>
              </div>
              <div>
                <h2 className={`text-3xl font-mono w-fit font-bold text-transparent bg-clip-text bg-gradient-to-r ${slideContent[current].fromColor} ${slideContent[current].toColor}`}>{current}</h2>
                <p className="text-lg text-gray-500">
                  {slideContent[current].description}
                </p>
                <a
                  type="button"
                  href={slideContent[current].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-100 ring-1 ring-gray-100/10 hover:ring-gray-100/20"
                >
                  See {current}
                </a>
              </div>
              <div className={`w-full grid grid-cols-${slideContent[current].cols} gap-4 border-t border-white/5`}>
                {slideContent[current].features.map((feature) => (
                  <Feature key={feature.href} feature={feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


