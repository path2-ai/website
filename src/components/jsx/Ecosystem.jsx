import { useEffect, useState } from 'react'
import { Circular } from '@/util/Circular'
import { RefineryIcon } from '@/util/RefineryIcon'
import { BricksIcon } from '@/util/BricksIcon'
import { GatesIcon } from '@/util/GatesIcon'
import { WorkflowIcon } from '@/util/WorkflowIcon'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Icon360, IconApiApp, IconApps, IconBrain, IconBrandDocker, IconBrandOpenSource, IconBrandPython, IconBuildingCastle, IconCategory2, IconCode, IconCrystalBall, IconDashboard, IconDatabase, IconDragDrop, IconGrowth, IconHighlight, IconLock, IconNumber3, IconPlayerPause, IconPlayerPlay, IconRoute, IconTag, IconWindmill } from '@tabler/icons'
import Link from 'next/link'
import { Tooltip } from "@nextui-org/react";

import { useRouter } from 'next/router'

const YOUTUBE_VIDEO = 'https://www.youtube.com/watch?v=7VXqimJvzdU'

const slideContent = {
  refinery: {
    title: "refinery",
    description: "refinery is the editor for data-centric natural language processing. It combines training data and algorithms in a way that you can easily build NLP automations, e.g. to prototype ideas within an afternoon or to build quality assurance for your labeling workflow.",
    icon: <RefineryIcon className="h-12 w-12" />,
    image: "/screenshot-refinery.png",
    fromColor: "from-indigo-500",
    toColor: "to-purple-500",
    ringColor: "ring-purple-500",
    rgb: "200,250,0,0.5",
    cols: 2,
    features: [
      {
        href: 'https://docs.kern.ai/refinery/manual-labeling',
        name: 'Manual labeling editor',
        description:
          'refinery comes with a built-in editor (incl. role-based access) supporting classifications, span-extraction and text generation. Further, you can export data to other annotation tools like Labelstudio.',
        icon: IconTag,
        colsSpan: 1,
      },
      {
        href: 'https://docs.kern.ai/refinery/data-management',
        name: 'Best-in-class data management',
        description:
          'Use our modular data management to find e.g. records with below 30% confidence and mismatching manual and automated labels, sorted by confidence. Assign that data either to an inhouse expert or a crowdlabeler.',
        icon: IconCrystalBall,
        colsSpan: 1,
      },
      {
        href: 'https://docs.kern.ai/refinery/embedding-integration',
        name: 'Native large-language-model integration and finetuning',
        description:
          'You love Hugging Face, GPT-X or cohere for their large language models? We do too. That is why we integrated them into refinery. You can use them for embeddings (and neural search), active transfer learning, or even to create the training data for finetuning these LLMs on your data.',
        icon: IconBrain,
        colsSpan: 2,

      },
      {
        href: 'https://docs.kern.ai/refinery/heuristics',
        name: 'Automate with heuristics',
        description:
          'refinery is shipped with a Monaco editor, enabling you to write heuristics in plain Python. Use them for e.g. rules, API calls, regex, active transfer learning or zero-shot predictions',
        icon: IconCode,
        colsSpan: 1,
      },
      {
        href: 'https://docs.kern.ai/refinery/monitoring',
        name: 'Monitor your data quality',
        description:
          'In the project dashboard, you can find distribution statistics and a confusion matrix showing you where your project needs improvement. Every analysis can be filtered down to atomic level.',
        icon: IconDashboard,
        colsSpan: 1,
      },
      {
        href: 'https://github.com/code-kern-ai/refinery-python-sdk',
        name: 'Integrate into your workflow via our Python SDK',
        description:
          'Use our Python SDK (also available for the CLI) to export and import data with ease. For instance, you can use it to batch-export data from refinery to your favorite data science framework or to batch-import data from your data sources into refinery.',
        icon: IconBrandPython,
        colsSpan: 1,
      },
      {
        href: 'https://github.com/code-kern-ai/refinery',
        name: 'Open-source',
        description:
          'Yes, you read that right. Our flagship product is open-sourced under the Apache 2.0 license. You can find the code on GitHub. We are also happy to accept contributions.',
        icon: IconBrandOpenSource,
        colsSpan: 1,
      },
    ]
  },
  bricks: {
    title: "bricks",
    description: "bricks is a collection of modular and standardized code snippets which you can directly integrate into refinery. It's the application logic, driving your NLP automations. Each of them is open-source, documented and extensible.",
    icon: <BricksIcon className="h-12 w-12" />,
    image: "/screenshot-bricks.png",
    fromColor: "from-amber-500",
    toColor: "to-yellow-500",
    ringColor: "ring-yellow-500",
    cols: 2,
    features: [
      {
        href: 'https://docs.kern.ai/bricks/classifiers',
        name: 'Classifiers',
        description:
          'Classifiers summarize information, e.g. the sentiment of a text. Think of them as functions returning values, i.e. one input = one output.',
        icon: IconCategory2,
        colsSpan: 1,
      },
      {
        href: 'https://docs.kern.ai/bricks/extractors',
        name: 'Extractors',
        description:
          'Extractors retrieve information, e.g. extracting organizations in texts. Think of them as functions yielding values, i.e. one input = arbitrary number of output.',
        icon: IconHighlight,
        colsSpan: 1,
      },
      {
        href: 'https://docs.kern.ai/bricks/generators',
        name: 'Generators',
        description:
          'Generators produce new data, e.g. translating from German to Portuguese. Think of them as functions returning values, i.e. one input = one output, but that output is sequential.',
        icon: IconWindmill,
        colsSpan: 1,
      },
      {
        href: 'https://docs.kern.ai/bricks',
        name: 'Customizable',
        description:
          'Every brick is open-source and modular, such that you can customize the code itself immediately. Start with a great baseline, and adapt it to your needs.',
        icon: IconCode,
        colsSpan: 1,
      },
      {
        href: 'https://docs.kern.ai/bricks/refinery-integration',
        name: 'Integration to refinery',
        description:
          'Every brick is designed to be integrated into refinery. You can search within refinery for a brick, and then add it to your project within a few clicks.',
        icon: IconApiApp,
        colsSpan: 2,
      },
      {
        href: 'https://docs.kern.ai/bricks',
        name: 'Growing weekly',
        description:
          'We aim to add new bricks every week. If you have a great idea for a brick, please let us know. We are happy to help you implement it.',
        icon: IconGrowth,
        colsSpan: 1,
      },
      {
        href: 'https://github.com/code-kern-ai/bricks',
        name: 'Open-source',
        description:
          'Just as refinery, bricks is open-source. You can find the code on GitHub. We are also happy to accept contributions.',
        icon: IconBrandOpenSource,
        colsSpan: 1,
      },
    ]
  },
  gates: {
    title: "gates",
    description: "You've built a great set of automations in refinery, but now want to put it into production for realtime inference? Enter gates, the online monitoring and inference API for your data-centric models.",
    icon: <GatesIcon className="h-12 w-12" />,
    image: "/screenshot-gates.png",
    fromColor: "from-red-500",
    toColor: "to-orange-500",
    ringColor: "ring-orange-500",
    cols: 2,
    features: [
      {
        href: 'https://docs.kern.ai/gates/deploy',
        name: '3 clicks to deploy your model',
        description:
          'You already did the work in refinery. Now gates is as simple as it gets. Select the automations, hit deploy, and your model is live.',
        icon: IconNumber3,
        colsSpan: 1,
      },
      {
        href: 'https://docs.kern.ai/gates/token',
        name: 'Secure execution - anywhere',
        description:
          'Integrate your model into any existing infrastructure. Use the API to get secured access to your model, no matter where and how it is deployed.',
        icon: IconLock,
        colsSpan: 1,
      },
      {
        href: 'https://docs.kern.ai/gates/monitoring',
        name: 'Monitor requests per hour, confidence and runtime',
        description:
          'Each model comes with a simple monitoring dashboard, helping you to analyze the usage and performance of your model.',
        icon: IconDashboard,
        colsSpan: 1,
      },
      {
        href: 'https://docs.kern.ai/gates/deploy',
        name: 'Containerized runtime',
        description:
          'Your model is deployed as a containerized runtime. If required, you can execute the model on your own infrastructure.',
        icon: IconBrandDocker,
        colsSpan: 1,
      },
    ]
  },
  workflow: {
    title: "workflow",
    description: "workflow is the orchestration layer for your natural language-driven tasks. It allows you to build complex workflows, which can be triggered by a variety of events. It's the glue between data sources, models and transformations, and the data targets.",
    icon: <WorkflowIcon className="h-12 w-12" />,
    image: "/screenshot-workflow.png",
    fromColor: "from-sky-500",
    toColor: "to-blue-500",
    ringColor: "ring-blue-500",
    cols: 2,
    features: [
      {
        href: 'https://docs.kern.ai/workflow/workflows',
        name: 'Drag-and-drop editor',
        description:
          'Simple drag-and-drop interface to build your workflows, connected to catalogue of nodes with either no-code or programmable interfaces. This is as intuitive as it gets.',
        icon: IconDragDrop,
        colsSpan: 1,
      },
      {
        href: 'https://docs.kern.ai/workflow',
        name: 'Completing the stack',
        description:
          'workflow stands on the shoulders of refinery and gates. This means that workflow is capable of handling the most complex NLP applications (and of course also the simpler ones), while still being easy to use.',
        icon: IconApiApp,
        colsSpan: 1,
      },
      {
        href: 'https://docs.kern.ai/workflow/stores',
        name: 'Integrations',
        description:
          'workflow offers native integrations to e.g. Google workspace applications, Slack or other collaboration channels, and further offers an API and Webhook links. We are continuously adding new integrations.',
        icon: IconApps,
        colsSpan: 1,

      },
      {
        href: 'https://docs.kern.ai/workflow/stores',
        name: 'Data collection',
        description:
          'Data is being stored in marts, such that you have direct access to your data source integrations. For instance, you can just export all emails from your inbox into refinery via the GMail integration, and then start building your NLP automations.',
        icon: IconDatabase,
        colsSpan: 1,
      },
      {
        href: '/docs/workflow/realtime-and-batch',
        name: 'Realtime and batch',
        description:
          'workflow is designed to work out of the box for the use cases you want to implement, whether it is realtime or batch processing. You can run operational tasks in realtime, and batch processing can be used for e.g. data analysis. Alternatively, you can synchronize refinery in a batch-job, such that your training data is always up-to-date. You will quickly realize: This is ETL for NLP - and it is designed to fit your ideas.',
        icon: Icon360,
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

function Feature({ feature, product }) {
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

        {/* for some reason, dynamic setting of colors didn't work  */}
        {product == "refinery" && (
          <div className={`flex h-7 w-7 items-center justify-center rounded-full ring-1 backdrop-blur-[2px] transition duration-300 bg-white/7.5 ring-white group-hover:bg-purple-300/10 group-hover:ring-purple-400`}>
            <feature.icon className={`h-5 w-5 transition-colors duration-300 fill-white/10 stroke-zinc-400 group-hover:fill-purple-300/10 group-hover:stroke-purple-400`} />
          </div>
        )}
        {product == "bricks" && (
          <div className={`flex h-7 w-7 items-center justify-center rounded-full ring-1 backdrop-blur-[2px] transition duration-300 bg-white/7.5 ring-white group-hover:bg-yellow-300/10 group-hover:ring-yellow-400`}>
            <feature.icon className={`h-5 w-5 transition-colors duration-300 fill-white/10 stroke-zinc-400 group-hover:fill-yellow-300/10 group-hover:stroke-yellow-400`} />
          </div>
        )}

        {product == "gates" && (
          <div className={`flex h-7 w-7 items-center justify-center rounded-full ring-1 backdrop-blur-[2px] transition duration-300 bg-white/7.5 ring-white group-hover:bg-red-300/10 group-hover:ring-red-400`}>
            <feature.icon className={`h-5 w-5 transition-colors duration-300 fill-white/10 stroke-zinc-400 group-hover:fill-red-300/10 group-hover:stroke-red-400`} />
          </div>
        )}

        {product == "workflow" && (
          <div className={`flex h-7 w-7 items-center justify-center rounded-full ring-1 backdrop-blur-[2px] transition duration-300 bg-white/7.5 ring-white group-hover:bg-blue-300/10 group-hover:ring-blue-400`}>
            <feature.icon className={`h-5 w-5 transition-colors duration-300 fill-white/10 stroke-zinc-400 group-hover:fill-blue-300/10 group-hover:stroke-blue-400`} />
          </div>
        )}

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
  const router = useRouter()

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
      <div className='mx-6'>
        <div>
          <div className="flex">
            <div className='space-y-4'>
              {current == 'refinery' && (
                <div className='bg-gradient-to-b from-purple-700 via-purple-400 to-purple-700 rounded-lg 
                  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                  shadow-[0_0px_100px_10px_rgba(202,73,223,0.5)]
               '>
                  <img
                    src={slideContent[current].image}
                    alt={slideContent[current].title}
                    className="rounded-lg p-0.5"
                  />
                  <a
                    className='flex justify-center items-center absolute top-[47%] left-[47%] h-16 w-16 bg-black rounded-full hover:scale-110 transition-transform duration-300'
                    href={YOUTUBE_VIDEO}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <IconPlayerPlay className='h-5 w-5 text-stone-100' fill='white' />
                  </a>
                </div>
              )}
              {current == 'bricks' && (
                <div className='bg-gradient-to-b from-yellow-700 via-yellow-400 to-yellow-700 rounded-lg 
                  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                  shadow-[0_0px_100px_10px_rgba(251,217,94,0.5)]
               '>

                  <img
                    src={slideContent[current].image}
                    alt={slideContent[current].title}
                    className="rounded-lg p-0.5"
                  />
                  <a
                    className='flex justify-center items-center absolute top-[47%] left-[47%] h-16 w-16 bg-black rounded-full hover:scale-110 transition-transform duration-300'
                    href={YOUTUBE_VIDEO}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <IconPlayerPlay className='h-5 w-5 text-stone-100' fill='white' />
                  </a>
                </div>
              )}
              {current == 'gates' && (
                <div className='bg-gradient-to-b from-red-700 via-red-400 to-red-700 rounded-lg 
                  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                  shadow-[0_0px_100px_10px_rgba(251,98,78,0.5)]
               '>
                  <img
                    src={slideContent[current].image}
                    alt={slideContent[current].title}
                    className="rounded-lg p-0.5"
                  />
                  <a
                    className='flex justify-center items-center absolute top-[47%] left-[47%] h-16 w-16 bg-black rounded-full hover:scale-110 transition-transform duration-300'
                    href={YOUTUBE_VIDEO}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <IconPlayerPlay className='h-5 w-5 text-stone-100' fill='white' />
                  </a>
                </div>
              )}
              {current == 'workflow' && (
                <div className='bg-gradient-to-b from-blue-700 via-blue-400 to-blue-700 rounded-lg 
                  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                  shadow-[0_0px_100px_10px_rgba(66,127,244,0.5)]
               '>
                  <img
                    src={slideContent[current].image}
                    alt={slideContent[current].title}
                    className="rounded-lg p-0.5"
                  />
                  <a
                    className='flex justify-center items-center absolute top-[47%] left-[47%] h-16 w-16 bg-black rounded-full hover:scale-110 transition-transform duration-300'
                    href={YOUTUBE_VIDEO}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <IconPlayerPlay className='h-5 w-5 text-stone-100' fill='white' />
                  </a>
                </div>
              )}
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
                        key === clickedOption ? `${item.ringColor} ring-1 ` : `hover:ring-neutral-500`,
                        "rounded-xl inline-block ring-1 ring-black  h-12 w-12",
                      )}>
                      {/* {slideContent[key].icon} */}
                      <img
                        src={"/" + key + "-bicon.png"}
                      />
                    </button>
                    <div className="mt-2 h-1.5 flex rounded bg-gray-200">
                      {key === current && key == 'refinery' && (
                        <div className="w-12 bg-gradient-to-r rounded from-indigo-600 to-purple-600" style={{ width: `${key === clickedOption ? 0 : timer * .25}%` }} />
                      )}
                      {key === current && key == 'bricks' && (
                        <div className="w-12 bg-gradient-to-r rounded from-yellow-600 to-amber-600" style={{ width: `${key === clickedOption ? 0 : timer * .25}%` }} />
                      )}
                      {key === current && key == 'gates' && (
                        <div className="w-12 bg-gradient-to-r rounded from-orange-600 to-red-600" style={{ width: `${key === clickedOption ? 0 : timer * .25}%` }} />
                      )}
                      {key === current && key == 'workflow' && (
                        <div className="w-12 bg-gradient-to-r rounded from-sky-600 to-blue-600" style={{ width: `${key === clickedOption ? 0 : timer * .25}%` }} />
                      )}
                    </div>
                  </div>
                ))}
                {clickedOption && (
                  <div>
                    <Tooltip className='ml-1' color="invert" content={"Autoplay"} placement="right"
                    >
                      <button
                        type='button'
                        className='mt-2 h-fit hover:text-green-500 hover:bg-neutral-800 bg-neutral-900 flex rounded-lg p-2 text-xs font-semibold leading-7 text-gray-100 ring-1 ring-inset ring-neutral-700 group-hover:ring-white/20'
                        onClick={() => {
                          setClickedOption(null)
                          setTimer(0)
                        }}
                      >
                        <IconPlayerPlay className='my-auto h-5 w-5 inline-block' />
                      </button>
                    </Tooltip>
                  </div>
                )}
                {clickedOption == null && (
                  <div>
                    <Tooltip className='ml-1' color="invert" content={"Stop autoplay"} placement="right"
                    >
                      <button
                        type='button'
                        className='mt-2 h-fit hover:text-red-400 hover:bg-neutral-800 bg-neutral-900 flex rounded-lg p-2 text-xs font-semibold leading-7 text-gray-100 ring-1 ring-inset ring-neutral-700 group-hover:ring-white/20'
                        onClick={() => {
                          while (slider.current() !== current) {
                            slider.next()
                          }
                          setCurrent(current)
                          setClickedOption(current)
                          setTimer(0)
                        }}
                      >

                        <IconPlayerPause className='my-auto h-5 w-5 inline-block' />
                      </button>
                    </Tooltip>
                  </div>
                )}
              </div>
              <div className='flex flex-col items-center space-y-4'>
                <div className='text-gray-100 text-sm'>
                  The Kern AI platform consists of four products
                </div>
                <div className='flex flex-col md:flex-row md:space-x-2'>
                  <button
                    type='button'
                    className='bg-transparent hover:text-lime-400 hover:bg-neutral-800 flex rounded-lg p-3 text-base font-semibold leading-7 text-gray-100 ring-1 ring-inset ring-neutral-700 group-hover:ring-white/20'
                    onClick={() => {
                      router.push('/docs/architecture')
                    }}
                  >
                    <span>
                      <IconBuildingCastle className='my-auto h-5 w-5 inline-block mr-2' />
                      Platform architecture
                    </span>
                    <span className="flex h-3 w-3">
                      <span className="animate-ping relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
                    </span>
                  </button>

                  <button
                    type='button'
                    className='mt-2 md:mt-0 hover:text-lime-400 hover:bg-neutral-800 flex rounded-lg p-3 text-base font-semibold leading-7 text-gray-100 ring-1 ring-inset ring-neutral-700 group-hover:ring-white/20'
                    onClick={() => {
                      router.push('/docs/how-it-works')
                    }}
                  >
                    <span>
                      <IconRoute className='my-auto h-5 w-5 inline-block mr-2' />
                      How it works
                    </span>
                  </button>
                </div>
              </div>
              <div className='pt-8'>
                <h2 className={`flex flex-row items-end text-3xl font-mono w-fit font-bold text-transparent bg-clip-text bg-gradient-to-r ${slideContent[current].fromColor} ${slideContent[current].toColor}`}>
                  {clickedOption && (
                    <div>
                      <Tooltip className='mt-1' color="invert" content={"Autoplay"} placement="top"
                      >
                        <button
                          type='button'
                          className='mr-4 hover:text-green-500 hover:bg-neutral-800 bg-neutral-900 flex rounded-lg p-2 text-xs font-semibold leading-7 text-gray-100 ring-1 ring-inset ring-neutral-700 group-hover:ring-white/20'
                          onClick={() => {
                            setClickedOption(null)
                            setTimer(0)
                          }}
                        >
                          <IconPlayerPlay className='my-auto h-5 w-5 inline-block' />
                        </button>
                      </Tooltip>
                    </div>
                  )}
                  {clickedOption == null && (
                    <div>
                      <Tooltip className='mt-1' color="invert" content={"Stop autoplay"} placement="top"
                      >
                        <button
                          type='button'
                          className='mr-4 hover:text-red-400 hover:bg-neutral-800 bg-neutral-900 flex rounded-lg p-2 text-xs font-semibold leading-7 text-gray-100 ring-1 ring-inset ring-neutral-700 group-hover:ring-white/20'
                          onClick={() => {
                            while (slider.current() !== current) {
                              slider.next()
                            }
                            setCurrent(current)
                            setClickedOption(current)
                            setTimer(0)
                          }}
                        >
                          <IconPlayerPause className='my-auto h-5 w-5 inline-block' />
                        </button>
                      </Tooltip>
                    </div>
                  )}
                  <div>
                    {current}
                  </div>

                </h2>
                <p className="mt-4 text-gray-300">
                  {slideContent[current].description}
                </p>
                <p className="mt-4 text-sm text-gray-300">
                  You can click on the below feature cards to jump into the documentation.
                </p>
              </div>
              <div className='hidden md:block'>
                <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/5`}>
                  {slideContent[current].features.map((feature) => (
                    <Feature key={feature.name} feature={feature} product={current} />
                  ))}
                </div>
              </div>
              <div className='block md:hidden'>
                <div className={`w-full flex flex-col space-y-6 border-t border-white/5`}>
                  {slideContent[current].features.map((feature) => (
                    <Feature key={feature.name} feature={feature} product={current} />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


