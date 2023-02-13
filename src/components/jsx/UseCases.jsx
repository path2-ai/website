import { IconDatabase, IconMessage, IconPerspective, IconWorldWww } from "@tabler/icons"
import { IconApiApp, IconBook, IconBug, IconTerminal, IconUsers, IconClock, IconUser, IconTableAlias, IconEyeTable, IconDashboard } from '@tabler/icons'
import { useRouter } from 'next/router'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const useCases = [{
  title: 'Training data',
  slug: 'training-data',
  description: 'Combine workflow and refinery to streamline your training data. Automatically synchronize refinery projects from stores.',
  icon: IconDatabase,
  href: 'https://docs.kern.ai/use-cases/training-data',
  color: 'red',
  image: '/screenshot-workflow.png',
  benefits: [{
    title: 'Shorten model development time',
    icon: IconTerminal,
    description: 'On average, you can build models 10x faster.'
  }, {
    title: 'Debug and improve your models',
    icon: IconBug,
    description: 'Find and fix errors in your data and models with ease.'
  }, {
    title: 'Engage collaboration',
    icon: IconUsers,
    description: 'Work with domain experts and annotators to improve your models.'
  }, {
    title: 'Integrate your workflow',
    icon: IconApiApp,
    description: 'Integrate your workflow with your internal systems and databases.'
  }]
}, {
  title: 'Email channels',
  slug: 'email-channels',
  description: 'An abundance of messages are sent via email every day. Use refinery to extract insights from your emails and automate your workflows.',
  icon: IconMessage,
  href: 'https://docs.kern.ai/use-cases/email-channels',
  color: 'blue',
  image: '/screenshot-workflow.png',
  benefits: [{
    title: 'Shorten time to response',
    icon: IconClock,
    description: 'Automate your workflows and reduce the time it takes to respond to your customers.',
    colspan: 1
  }, {
    title: 'Reduce workload on operators',
    icon: IconUser,
    description: 'Let operators focus on the most important tasks and let the platform handle the rest.',
    colspan: 1
  }, {
    title: 'Integrate internal databases',
    icon: IconDatabase,
    description: 'Key to great quality is that you can integrate your internal databases or systems to respond or synchronize easily.',
    colspan: 2
  }]
}, {
  title: 'Webscraping',
  slug: 'webscraping',
  description: 'Handling complex HTML structures can be a pain. Build a simple Python scraper, and use refinery to extract the data you need.',
  icon: IconWorldWww,
  href: 'https://docs.kern.ai/use-cases/webscraping',
  color: 'yellow',
  image: '/screenshot-workflow.png',

  benefits: [{
    title: 'HTML + NLP = 💚',
    icon: IconTerminal,
    description: 'Combine scraping with NLP, and you can extract data from any HTML element.',
    colspan: 1
  }, {
    title: 'Master data management',
    icon: IconTableAlias,
    description: 'Synchronize external data with internal sources. With workflow, handling mapping data is easy.',
    colspan: 1
  }, {
    title: 'Visual scraping',
    icon: IconEyeTable,
    description: 'Combine scraping with visual labeling, and see if your scraping technique works as you expect.',
    colspan: 1
  }, {
    title: 'Shorter time to build',
    icon: IconClock,
    description: 'Build webscraping workflows in a fraction of the time it would take to build it from scratch.',
    colspan: 1
  }]
}, {
  title: 'ETL pipelines',
  slug: 'etl',
  description: 'Why limit ETL to only structured data? Build pipelines that actually understand human language, and future-proof your pipelines.',
  icon: IconPerspective,
  href: 'https://docs.kern.ai/use-cases/etl',
  color: 'purple',
  image: '/screenshot-workflow.png',
  benefits: [{
    title: 'Shorten pipeline development time',
    icon: IconTerminal,
    description: 'You can build a pipeline in a fraction of the time it would take to build it from scratch.'
  }, {
    title: 'Debug and improve your pipelines',
    icon: IconBug,
    description: 'You can easily see what your pipeline is doing, and improve it with our visual debugging tools.'
  }, {
    title: 'Engage collaboration',
    icon: IconUsers,
    description: 'It has never been easier to integrate domain expertise into your work specifically on the data you need help for.'
  }, {
    title: 'Gain new insights',
    icon: IconDashboard,
    description: '80% of data is unstructured. You can gain new insights from your data by combining it with NLP.'
  }]
},]

export function UseCases() {
  const router = useRouter()


  return (
    <section className='py-10 sm:py-16'>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Use cases
        </h2>
        <p className="mt-3 text-lg text-gray-400">
          Our platform is broadly applicable to a wide range of use cases. Here are some of our favorite examples.
        </p>
      </div>

      <div className="hidden lg:block overflow-hidden py-12 flex flex-col space-y-40 ">
        {useCases.map((useCase, index) => (
          <div id={useCase.slug} key={index} className="m-16 px-16 border border-gray-800 bg-neutral-900 rounded-2xl relative overflow-hidden">
            {index % 2 === 0 ? (
              <div className="relative">
                <svg
                  className="absolute inset-0 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                      width={200}
                      height={200}
                      x="50%"
                      y={-1}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                  </defs>
                  <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
                    <path
                      d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                      strokeWidth={0}
                    />
                  </svg>
                  <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
                </svg>
                <svg
                  viewBox="0 0 1108 632"
                  aria-hidden="true"
                  className="absolute top-10 left-[calc(50%-4rem)] w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                >
                  <path
                    fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
                    fillOpacity=".2"
                    d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
                  />
                  <defs>
                    <linearGradient
                      id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
                      x1="1220.59"
                      x2="-85.053"
                      y1="432.766"
                      y2="638.714"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="blue" />
                      <stop offset={1} stopColor="#80CAFF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="py-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3 lg:gap-24 lg:px-8">
                  <div className="z-10 mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:col-span-2">
                    <div>
                      <div className='p-2 border border-gray-800 bg-neutral-900 w-fit rounded-lg'>
                        <useCase.icon className="h-8 w-8 text-lime-500" />
                      </div>
                      <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-100">
                          {useCase.title}
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                          {useCase.description}
                        </p>
                        <div className='mt-10 flex flex-col md:flex-row md:space-x-4'>
                          <button
                            type='button'
                            className='bg-transparent hover:text-lime-400 hover:bg-neutral-800 flex rounded-lg p-3 text-base font-semibold leading-7 text-gray-100 ring-1 ring-inset ring-gray-800 group-hover:ring-white/20'
                            onClick={() => {
                              router.push('/pricing')
                            }}
                          >
                            <span>
                              See pricing
                            </span>
                          </button>

                          <a
                            type='button'
                            className='mt-2 md:mt-0 hover:text-lime-400 hover:bg-neutral-800 flex rounded-lg p-3 text-base font-semibold leading-7 text-gray-100 ring-1 ring-inset ring-gray-800 group-hover:ring-white/20'
                            href={useCase.href}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <span>
                              <IconBook className='my-auto h-5 w-5 inline-block mr-2' />
                              See docs
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='mt-8'>
                      <div className='grid grid-cols-2 gap-8'>
                        {useCase.benefits.map((option) => (
                          <div
                            key={option.title}
                            className="flex flex-col rounded-lg"
                          >
                            <div className="border-gray-800 text-white flex items-center justify-center h-12 w-12 rounded-md border bg-gradient-to-b from-neutral-900 to-neutral-800">
                              <option.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="mt-5">
                              <h3 className="text-lg leading-6 font-medium text-gray-100">{option.title}</h3>
                              <p className="mt-2 text-sm leading-6 text-gray-300">{option.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                  <div className="mt-12 sm:mt-16 lg:mt-0">
                    <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                      <img
                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        src={useCase.image}
                        alt={useCase.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (

              <div className="relative">
                <svg
                  className="absolute inset-0 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                      width={200}
                      height={200}
                      x="50%"
                      y={-1}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                  </defs>
                  <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
                    <path
                      d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                      strokeWidth={0}
                    />
                  </svg>
                  <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
                </svg>
                <svg
                  viewBox="0 0 1108 632"
                  aria-hidden="true"
                  className="absolute top-10 left-[calc(50%-4rem)] w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                >
                  <path
                    fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
                    fillOpacity=".2"
                    d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
                  />
                  <defs>
                    <linearGradient
                      id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
                      x1="1220.59"
                      x2="-85.053"
                      y1="432.766"
                      y2="638.714"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="blue" />
                      <stop offset={1} stopColor="#80CAFF" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="py-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3 lg:gap-24 lg:px-8">
                  <div className=" mt-12 sm:mt-16 lg:mt-0">
                    <div className="-ml-48 pl-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                      <img
                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                        src={useCase.image}
                        alt={useCase.title}
                      />
                    </div>
                  </div>
                  <div className="z-10 mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:col-span-2">
                    <div>
                      <div className='p-2 border border-gray-800 bg-neutral-900 w-fit rounded-lg'>
                        <useCase.icon className="h-8 w-8 text-lime-500" />
                      </div>
                      <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-100">
                          {useCase.title}
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                          {useCase.description}
                        </p>
                        <div className='mt-10 flex flex-col md:flex-row md:space-x-4'>
                          <button
                            type='button'
                            className='bg-transparent hover:text-lime-400 hover:bg-neutral-800 flex rounded-lg p-3 text-base font-semibold leading-7 text-gray-100 ring-1 ring-inset ring-gray-800 group-hover:ring-white/20'
                            onClick={() => {
                              router.push('/pricing')
                            }}
                          >
                            <span>
                              See pricing
                            </span>
                          </button>

                          <a
                            type='button'
                            className='mt-2 md:mt-0 hover:text-lime-400 hover:bg-neutral-800 flex rounded-lg p-3 text-base font-semibold leading-7 text-gray-100 ring-1 ring-inset ring-gray-800 group-hover:ring-white/20'
                            href={useCase.href}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <span>
                              <IconBook className='my-auto h-5 w-5 inline-block mr-2' />
                              See docs
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='mt-8'>
                      <div className='grid grid-cols-2 gap-8'>
                        {useCase.benefits.map((option) => (
                          <div
                            key={option.title}
                            className="flex flex-col rounded-lg"
                          >
                            <div className="border-gray-800 text-white flex items-center justify-center h-12 w-12 rounded-md border bg-gradient-to-b from-neutral-900 to-neutral-800">
                              <option.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="mt-5">
                              <h3 className="text-lg leading-6 font-medium text-gray-100">{option.title}</h3>
                              <p className="mt-2 text-sm leading-6 text-gray-300">{option.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            )}


          </div>
        ))}


      </div>

      <div className="lg:hidden">
        {useCases.map((useCase, index) => (
          <div id={useCase.slug} key={index} className="m-6 px-6 md:m-16 m:px-16 border border-gray-800 bg-neutral-900 rounded-lg relative overflow-hidden">
            <div className="relative">
              <svg
                className="absolute inset-0 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                    width={200}
                    height={200}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M.5 200V.5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
                  <path
                    d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                    strokeWidth={0}
                  />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
              </svg>
              <svg
                viewBox="0 0 1108 632"
                aria-hidden="true"
                className="absolute top-10 left-[calc(50%-4rem)] w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
              >
                <path
                  fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
                  fillOpacity=".2"
                  d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
                />
                <defs>
                  <linearGradient
                    id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
                    x1="1220.59"
                    x2="-85.053"
                    y1="432.766"
                    y2="638.714"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="blue" />
                    <stop offset={1} stopColor="#80CAFF" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="py-6 md:py-16">
                <div className='p-2 border border-gray-800 bg-neutral-900 w-fit rounded-lg'>
                  <useCase.icon className="h-8 w-8 text-lime-500" />
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-bold tracking-tight text-gray-100">
                    {useCase.title}
                  </h2>
                  <p className="mt-4 text-sm text-gray-300">
                    {useCase.description}
                  </p>
                  <div className='mt-10 flex flex-col md:flex-row md:space-x-4'>
                    <button
                      type='button'
                      className='bg-transparent hover:text-lime-400 hover:bg-neutral-800 flex rounded-lg p-3 text-base font-semibold leading-7 text-gray-100 ring-1 ring-inset ring-gray-800 group-hover:ring-white/20'
                      onClick={() => {
                        router.push('/pricing')
                      }}
                    >
                      <span>
                        See pricing
                      </span>
                    </button>

                    <a
                      type='button'
                      className='mt-2 md:mt-0 hover:text-lime-400 hover:bg-neutral-800 flex rounded-lg p-3 text-base font-semibold leading-7 text-gray-100 ring-1 ring-inset ring-gray-800 group-hover:ring-white/20'
                      href={useCase.href}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span>
                        <IconBook className='my-auto h-5 w-5 inline-block mr-2' />
                        See docs
                      </span>
                    </a>
                  </div>
                </div>
                <div className='mt-8'>
                  <div className='grid md:grid-cols-2 gap-8'>
                    {useCase.benefits.map((option) => (
                      <div
                        key={option.title}
                        className="flex flex-col rounded-lg"
                      >
                        <div className="border-gray-800 text-white flex items-center justify-center h-12 w-12 rounded-md border bg-gradient-to-b from-neutral-900 to-neutral-800">
                          <option.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="mt-5">
                          <h3 className="text-sm leading-6 font-medium text-gray-100">{option.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-gray-300">{option.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}