import { IconDatabase, IconMessage, IconPerspective, IconWorldWww } from "@tabler/icons"
import Link from "next/link"
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const useCases = [{
  title: 'Training data',
  description: 'Combine workflow and refinery to streamline your training data. Automatically synchronize refinery projects from stores.',
  icon: IconDatabase,
  href: '/use-cases/training-data',
  color: 'red',
  image: 'https://kern-assets.s3.eu-central-1.amazonaws.com/website/welcome/guide-training-data.png',
  features: [
    {
      name: 'Push to deploy.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: CloudArrowUpIcon,

    },
    {
      name: 'SSL certificates.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: LockClosedIcon,
    },
    {
      name: 'Database backups.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ServerIcon,
    },
  ]
}, {
  title: 'Email channels',
  description: 'An abundance of messages are sent via email every day. Use refinery to extract insights from your emails and automate your workflows.',
  icon: IconMessage,
  href: '/use-cases/email-channels',
  color: 'blue',
  image: 'https://kern-assets.s3.eu-central-1.amazonaws.com/website/welcome/guide-training-data.png',
  features: [
    {
      name: 'Push to deploy.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: CloudArrowUpIcon,

    },
    {
      name: 'SSL certificates.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: LockClosedIcon,
    },
    {
      name: 'Database backups.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ServerIcon,
    },
  ]
}, {
  title: 'Webscraping',
  description: 'Handling complex HTML structures can be a pain. Build a simple Python scraper, and use refinery to extract the data you need.',
  icon: IconWorldWww,
  href: '/use-cases/webscraping',
  color: 'yellow',
  image: 'https://kern-assets.s3.eu-central-1.amazonaws.com/website/welcome/guide-training-data.png',
  features: [
    {
      name: 'Push to deploy.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: CloudArrowUpIcon,

    },
    {
      name: 'SSL certificates.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: LockClosedIcon,
    },
    {
      name: 'Database backups.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ServerIcon,
    },
  ]
}, {
  title: 'ETL pipelines',
  description: 'Why limit ETL to only structured data? Build pipelines that actually understand human language, and future-proof your pipelines.',
  icon: IconPerspective,
  href: '/use-cases/etl',
  color: 'purple',
  image: 'https://kern-assets.s3.eu-central-1.amazonaws.com/website/welcome/guide-training-data.png',
  features: [
    {
      name: 'Push to deploy.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: CloudArrowUpIcon,

    },
    {
      name: 'SSL certificates.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: LockClosedIcon,
    },
    {
      name: 'Database backups.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ServerIcon,
    },
  ]
},]

export function UseCases() {
  return (
    <section className='mx-auto max-w-5xl py-10 sm:py-16'>
      <div className="mx-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Use cases
        </h2>
        <p className="mt-3 text-lg text-gray-400">
          Our platform is broadly applicable to a wide range of use cases. Here are some of our favorite examples.
        </p>
      </div>

      <div className="overflow-hidden py-8 flex flex-col space-y-20">
        {useCases.map((useCase, index) => (
          <div key={useCase.name} className="mx-auto max-w-7xl md:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
              <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                  <h2 className={classNames(
                    useCase.color == 'green' ? "text-purple-600" : null,
                    useCase.color == 'blue' ? "text-blue-600" : null,
                    useCase.color == 'yellow' ? "text-yellow-600" : null,
                    useCase.color == 'red' ? "text-red-600" : null,
                    "text-lg font-semibold leading-8 tracking-tight text-green-600"
                  )}>Deploy faster</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">A better workflow</p>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                    iste dolor cupiditate blanditiis ratione.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                    {useCase.features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-100">
                          <feature.icon className={classNames(
                            useCase.color == 'green' ? "text-purple-600" : null,
                            useCase.color == 'blue' ? "text-blue-600" : null,
                            useCase.color == 'yellow' ? "text-yellow-600" : null,
                            useCase.color == 'red' ? "text-red-600" : null,
                            "absolute top-1 left-1 h-5 w-5")}
                            aria-hidden="true" />
                          {feature.name}
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className={classNames(
                index % 2 === 0 ? 'order-first' : '',
                "sm:px-6 lg:px-0"
              )}>
                <div className={classNames(
                  useCase.color == 'purple' ? "shadow-[0_0px_50px_5px_rgba(202,73,223,0.5)]" : null,
                  useCase.color == 'blue' ? "shadow-[0_0px_50px_5px_rgba(66,127,244,0.5)]" : null,
                  useCase.color == 'yellow' ? "shadow-[0_0px_50px_5px_rgba(251,217,94,0.5)]" : null,
                  useCase.color == 'red' ? "shadow-[0_0px_50px_5px_rgba(251,98,78,0.5)]" : null,
                  "bg-neutral-900 relative isolate overflow-hidden px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none")}
                >
                  <div
                    className={classNames(
                      index % 2 === 0 ?
                        "absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-neutral-300 opacity-20 ring-1 ring-inset ring-white"
                        :
                        "absolute -inset-y-px -right-3 -z-10 w-full origin-bottom-right skew-x-[30deg] bg-neutral-300 opacity-20 ring-1 ring-inset ring-white"
                      ,
                    )}
                    aria-hidden="true"
                  />
                  <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                    <img
                      src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                      alt="Product screenshot"
                      width={2432}
                      height={1442}
                      className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                    />
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}