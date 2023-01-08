import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { IconBuilding, IconCloud } from '@tabler/icons'
import { useState, useEffect } from 'react'
import { AccessModal } from './AccessModal'
import { PricingModal } from './PricingModal'
import { CalModal } from './CalModal'
import { DiscoveryModal } from './DiscoveryModal'
import { useRouter } from 'next/router'

const featuresCloud = [
    {
        title: 'bricks',
        tiers: [
            { title: 'personal', value: true },
            { title: 'growth', featured: true, value: true },
            { title: 'enterprise', value: true },
        ],
    },
    {
        title: 'refinery',
        tiers: [
            { title: 'personal', value: true },
            { title: 'growth', featured: true, value: true },
            { title: 'enterprise', value: true },
        ],
    },
    {
        title: 'gates',
        tiers: [
            { title: 'personal', value: true },
            { title: 'growth', featured: true, value: true },
            { title: 'enterprise', value: true },
        ],
    },
    {
        title: 'workflow',
        tiers: [
            { title: 'personal', value: true },
            { title: 'growth', featured: true, value: true },
            { title: 'enterprise', value: true },
        ],
    }
]


const featuresSelfHosted = [
    {
        title: 'bricks',
        tiers: [
            { title: 'community', value: true },
            { title: 'enterprise', featured: true, value: true },
        ],
    },
    {
        title: 'refinery',
        tiers: [
            { title: 'community', value: true },
            { title: 'enterprise', featured: true, value: true },
        ],
    },
    {
        title: 'gates',
        tiers: [
            { title: 'community', value: false },
            { title: 'enterprise', featured: true, value: true },
        ],
    },
    {
        title: 'workflow',
        tiers: [
            { title: 'community', value: false },
            { title: 'enterprise', featured: true, value: true },
        ],
    }
]

const perksCloud = [
    {
        title: 'Role-based access control',
        tiers: [
            { title: 'personal', value: false },
            { title: 'growth', featured: true, value: true },
            { title: 'enterprise', value: true },
        ],
    },
    {
        title: 'Batch data processing',
        tiers: [
            { title: 'personal', value: true },
            { title: 'growth', featured: true, value: true },
            { title: 'enterprise', value: true },
        ],
    },
    {
        title: 'Realtime data processing',
        tiers: [
            { title: 'personal', value: true },
            { title: 'growth', featured: true, value: true },
            { title: 'enterprise', value: true },
        ],
    },
    {
        title: 'Incl. refinery credits/month',
        tiers: [
            { title: 'personal', value: '100' },
            { title: 'growth', featured: true, value: '5,000' },
            { title: 'enterprise', value: 'Custom' },
        ],
    },
    {
        title: 'Price 100 added refinery credits (one-time)',
        tiers: [
            { title: 'personal', value: '14.99€' },
            { title: 'growth', featured: true, value: '9.99€' },
            { title: 'enterprise', value: 'Custom' },
        ],
    },
    {
        title: 'Realtime items/credit',
        tiers: [
            { title: 'personal', value: '1' },
            { title: 'growth', featured: true, value: '1' },
            { title: 'enterprise', value: '1' },
        ],
    },
    {
        title: 'Batch items/credit',
        tiers: [
            { title: 'personal', value: '100' },
            { title: 'growth', featured: true, value: '100' },
            { title: 'enterprise', value: '100' },
        ],
    },
    {
        title: 'MB storage/credit',
        tiers: [
            { title: 'personal', value: '1' },
            { title: 'growth', featured: true, value: '1' },
            { title: 'enterprise', value: '1' },
        ],
    },
    {
        title: 'Managed labeling service',
        tiers: [
            { title: 'personal', value: false },
            { title: 'growth', featured: true, value: true },
            { title: 'enterprise', value: true },
        ],
    },
    {
        title: 'Costs labeling service',
        tiers: [
            { title: 'personal', value: false },
            { title: 'growth', featured: true, value: 'Custom' },
            { title: 'enterprise', value: 'Custom' },
        ],
    },
    {
        title: 'Realtime processing frequency',
        tiers: [
            { title: 'personal', value: '1 hour' },
            { title: 'growth', featured: true, value: '10 minutes' },
            { title: 'enterprise', value: 'Custom' },
        ],
    },
    {
        title: 'Custom integrations',
        tiers: [
            { title: 'personal', value: false },
            { title: 'growth', featured: true, value: false },
            { title: 'enterprise', value: true },
        ],
    },
    {
        title: 'Support',
        tiers: [
            { title: 'personal', value: 'Community' },
            { title: 'growth', featured: true, value: 'Priority' },
            { title: 'enterprise', value: 'Dedicated' },
        ],
    }
]

const perksSelfHosted = [
    {
        title: 'Role-based access control',
        tiers: [
            { title: 'community', value: false },
            { title: 'enterprise', featured: true, value: true },
        ],
    },
    {
        title: 'Batch data processing',
        tiers: [
            { title: 'community', value: true },
            { title: 'enterprise', featured: true, value: true },
        ],
    },
    {
        title: 'Realtime data processing',
        tiers: [
            { title: 'community', value: false },
            { title: 'enterprise', value: true },
        ],
    },
    {
        title: 'Custom integrations',
        tiers: [
            { title: 'community', value: false },
            { title: 'enterprise', featured: true, value: true },
        ],
    },
    {
        title: 'Support',
        tiers: [
            { title: 'community', value: 'Community' },
            { title: 'enterprise', featured: true, value: 'Dedicated' },
        ],
    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Pricing() {

    const router = useRouter()
    const [openPricingModal, setOpenPricingModal] = useState(false)
    const [openCalModal, setOpenCalModal] = useState(false)
    const [openDiscoveryModal, setOpenDiscoveryModal] = useState(false)
    const [openAccessModal, setOpenAccessModal] = useState(false)

    const plansCloud = [
        {
            title: 'Personal',
            featured: false,
            description: 'For individuals who want to see how NLP can automate their workflows.',
            price: null,
            mainFeatures: [
                { id: 1, value: 'Access to full suite' },
                { id: 2, value: 'Unlimited items' },
                { id: 3, value: '1 user' },
                { id: 4, value: '100 incl. refinery credits/month*' },
                { id: 5, value: 'Community support' },
            ],
            buttons: [
                {
                    id: 1,
                    text: 'Request access',
                    featured: false,
                    onClick: () => { setOpenAccessModal(true) }
                }
            ],
        },
        {
            title: 'Growth',
            featured: true,
            description: 'For teams that want to build NLP products, grow workflows or create NLP-driven dashboards.',
            price: "249€",
            mainFeatures: [
                { id: 1, value: 'Access to full suite' },
                { id: 2, value: 'Unlimited items' },
                { id: 3, value: 'Unlimited users' },
                { id: 4, value: '5,000 incl. refinery credits/month*' },
                { id: 5, value: 'Priority support' },
            ],
            buttons: [
                {
                    id: 1,
                    text: 'Contact us',
                    featured: true,
                    onClick: () => { setOpenDiscoveryModal(true) }
                },
                {
                    id: 2,
                    text: 'See demo',
                    featured: false,
                    onClick: () => { setOpenCalModal(true) }
                }
            ],
        },
        {
            title: 'Enterprise',
            featured: false,
            description: 'For companies that heavily rely on natural language and textual data for their operations.',
            price: 'From 999€',
            mainFeatures: [
                { id: 1, value: 'All Growth features' },
                { id: 2, value: 'Custom integrations' },
                { id: 3, value: 'Custom refinery credits/month*' },
                { id: 4, value: 'Dedicated support' },
            ],
            buttons: [
                {
                    id: 1,
                    text: 'Contact us',
                    featured: true,
                    onClick: () => { setOpenDiscoveryModal(true) }
                },
                {
                    id: 2,
                    text: 'See demo',
                    featured: false,
                    onClick: () => { setOpenCalModal(true) }
                }
            ],
        },
    ]

    const plansSelfHosted = [
        {
            title: 'Community',
            featured: false,
            description: 'Use the single-user version of refinery for free on your own premises.',
            price: null,
            mainFeatures: [
                { id: 1, value: '1 user' },
                { id: 2, value: 'Keep your data on your own premises' },
                { id: 3, value: 'Community support' },
            ],
            buttons: [
                {
                    id: 1,
                    text: 'Go to GitHub',
                    featured: false,
                    onClick: () => { router.push('https://github.comcode-kern-ai/refinery') },

                }
            ],
        },
        {
            title: 'Enterprise',
            featured: true,
            description: 'Get access to premium features and the full product suite on your own premises.',
            price: "On Request",
            mainFeatures: [
                { id: 1, value: 'Access to full suite' },
                { id: 2, value: 'Unlimited users' },
                { id: 3, value: 'Dedicated support' },
            ],
            buttons: [
                {
                    id: 1,
                    text: 'Contact us',
                    featured: true,
                    onClick: () => { setOpenDiscoveryModal(true) }
                },
                {
                    id: 2,
                    text: 'See demo',
                    featured: false,
                    onClick: () => { setOpenCalModal(true) }
                }
            ],
        },
    ]

    const [cloudIsSelected, setCloudIsSelected] = useState(true)
    const [plans, setPlans] = useState(plansCloud)
    const [features, setFeatures] = useState(featuresCloud)
    const [perks, setPerks] = useState(perksCloud)

    useEffect(() => {
        if (cloudIsSelected) {
            setPlans(plansCloud)
            setFeatures(featuresCloud)
            setPerks(perksCloud)
        } else {
            setPlans(plansSelfHosted)
            setFeatures(featuresSelfHosted)
            setPerks(perksSelfHosted)
        }
    }, [cloudIsSelected])

    return (
        <div>
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black" />
            <div className="relative">
                <div className="relative mx-auto max-w-2xl px-4 pt-16 text-center sm:px-6 sm:pt-32 lg:max-w-5xl lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Simple pricing, for your requirements.
                    </h1>
                    <p className="mt-8 text-xl text-lime-100">
                        Everything you need, nothing you don't. Pick a plan that best suits your business.
                    </p>
                    <div className='text-sm mt-4 mx-auto max-w-5xl text-gray-300'>
                        All prices are billed annually. You have a 2-months money-back guarantee.
                    </div>
                </div>



                <div className='flex mt-8 mx-auto bg-neutral-900 border border-gray-500 p-1 rounded-xl w-fit space-x-2 text-white'>
                    <button
                        className={classNames(
                            cloudIsSelected ? 'ring-lime-500' : 'ring-white/10 group-hover:ring-white/20',
                            "flex space-x-2 hover:bg-neutral-800 bg-neutral-900 inline-block rounded-lg px-4 py-2 text-base font-semibold leading-6 shadow-sm ring-1 ring-inset"
                        )}
                        onClick={() => setCloudIsSelected(true)}
                    >
                        <IconCloud className='w-6 h-6 text-lime-500' />
                        <span className='my-auto text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600'>
                            In the cloud
                        </span>
                    </button>
                    <button
                        className={classNames(
                            !cloudIsSelected ? 'ring-lime-500' : 'ring-white/10 group-hover:ring-white/20',
                            "flex space-x-2 hover:bg-neutral-800 bg-neutral-900 inline-block rounded-lg px-4 py-2 text-base font-semibold leading-6 shadow-sm ring-1 ring-inset"
                        )}
                        onClick={() => setCloudIsSelected(false)}
                    >
                        <IconBuilding className='w-6 h-6 text-gray-200' />
                        <span className='my-auto text-gray-200'>
                            Self-Hosted
                        </span>
                    </button>
                </div>

                <h2 className="sr-only">Plans</h2>
                {/* Cards */}
                <div className="relative mx-auto mt-8 max-w-2xl px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-6xl lg:px-8 lg:pb-0">
                    {/* Decorative background */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 top-4 bottom-6 left-8 right-8 hidden rounded-tl-lg rounded-tr-lg lg:block"
                    />

                    <div className={classNames(
                        cloudIsSelected ? "lg:grid-cols-3" : "lg:grid-cols-2",
                        "relative space-x-4 space-y-6 lg:grid  lg:space-y-0"
                    )}>
                        {plans.map((tier) => (
                            <div
                                key={tier.title}
                                className="relative flex flex-col rounded-2xl border border-gray-700 bg-neutral-800 p-8 shadow-sm"
                            >
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-100">{tier.title}</h3>
                                    {tier.featured ? (
                                        <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-green-500 py-1.5 px-4 text-sm font-semibold text-neutral-900">
                                            Most popular
                                        </p>
                                    ) : null}
                                    <div className="mt-4 flex items-baseline text-gray-100">
                                        {tier.price ? (
                                            plans === plansCloud ? (
                                                <div>
                                                    <span className="text-3xl font-bold tracking-tight">{tier.price}</span>
                                                    <span className="ml-1 text-xl font-semibold">/month</span>
                                                </div>
                                            ) : (
                                                <div>
                                                    <span className="text-3xl font-bold tracking-tight">{tier.price}</span>
                                                </div>
                                            )
                                        ) : (
                                            <span className="text-3xl font-bold tracking-tight">Free</span>
                                        )}
                                    </div>
                                    <p className="mt-6 text-gray-500">{tier.description}</p>

                                    {/* Feature list */}
                                    <ul role="list" className="mt-6 space-y-6">
                                        {tier.mainFeatures.map((feature) => (
                                            <li key={feature.id} className="flex">
                                                <CheckIcon className="h-6 w-6 flex-shrink-0 text-green-500" aria-hidden="true" />
                                                <span className="ml-3 text-gray-500">{feature.value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className='flex space-x-2'>
                                    {tier.buttons.map((button) => (
                                        <button
                                            key={button.id}
                                            onClick={button.onClick}
                                            className={classNames(
                                                button.featured
                                                    ? 'bg-green-500 text-neutral-900 hover:bg-green-400'
                                                    : 'bg-green-900 text-green-300 hover:bg-green-900',
                                                'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                                            )}
                                        >
                                            {button.text}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='text-sm mt-4 mx-auto max-w-5xl text-gray-300'>
                    refinery credits are used as an abstraction to power both execution and storage in the refinery cloud. Credits are consumed for realtime inference, batch inference and storage. Depending on your plan, you get a certain amount of credits every month, and you can buy more credits at any time.
                </div>
                <div
                    className='text-sm mt-2 mx-auto max-w-5xl text-green-500 cursor-pointer'
                    onClick={() => setOpenPricingModal(true)}
                >
                    Why did we choose credits to implement our pricing model?
                </div>
            </div>


            {/* Feature comparison (up to lg) */}
            <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
                <h2 id="mobile-comparison-heading" className="sr-only">
                    Feature comparison
                </h2>

                <div className="mx-auto max-w-2xl space-y-16 py-16 px-4 sm:px-6">
                    {plans.map((plan, mobilePlanIndex) => (
                        <div key={plan.title} className="border-t border-gray-200">
                            <div
                                className={classNames(
                                    plan.featured ? 'border-lime-600' : 'border-transparent',
                                    '-mt-px pt-6 border-t-2 sm:w-1/2 '
                                )}
                            >
                                <h3 className={classNames(plan.featured ? 'text-lime-400' : 'text-gray-100', 'text-sm font-bold')}>
                                    {plan.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                            </div>
                            <h4 className="mt-10 text-sm font-bold text-gray-100">Access to product suite</h4>

                            <div className="relative mt-6">
                                {/* Fake card background */}
                                <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                                    <div
                                        className={classNames(
                                            plan.featured ? 'shadow-md' : 'shadow',
                                            'absolute right-0 w-1/2 h-full bg-neutral-900 rounded-lg'
                                        )}
                                    />
                                </div>

                                <div
                                    className={classNames(
                                        plan.featured ? 'ring-2 ring-lime-600 shadow-md' : 'ring-1 ring-gray-700 shadow',
                                        'relative py-3 px-4 bg-neutral-900 rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                                    )}
                                >
                                    <dl className="divide-y divide-gray-200">
                                        {features.map((feature) => (
                                            <div
                                                key={feature.title}
                                                className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2"
                                            >
                                                <dt className="pr-4 text-sm font-medium text-gray-400">{feature.title}</dt>
                                                <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                                    {typeof feature.tiers[mobilePlanIndex].value === 'string' ? (
                                                        <span
                                                            className={classNames(
                                                                feature.tiers[mobilePlanIndex].featured ? 'text-lime-400' : 'text-gray-100',
                                                                'text-sm font-medium'
                                                            )}
                                                        >
                                                            {feature.tiers[mobilePlanIndex].value}
                                                        </span>
                                                    ) : (
                                                        <>
                                                            {feature.tiers[mobilePlanIndex].value === true ? (
                                                                <CheckIcon className="mx-auto h-5 w-5 text-lime-400" aria-hidden="true" />
                                                            ) : (
                                                                <XMarkIcon className="mx-auto h-5 w-5 text-gray-600" aria-hidden="true" />
                                                            )}

                                                            <span className="sr-only">
                                                                {feature.tiers[mobilePlanIndex].value === true ? 'Yes' : 'No'}
                                                            </span>
                                                        </>
                                                    )}
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>

                                {/* Fake card border */}
                                <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                                    <div
                                        className={classNames(
                                            plan.featured ? 'ring-2 ring-lime-600' : 'ring-1 ring-gray-700',
                                            'absolute right-0 w-1/2 h-full rounded-lg'
                                        )}
                                    />
                                </div>
                            </div>

                            <h4 className="mt-10 text-sm font-bold text-gray-100">Usage details</h4>

                            <div className="relative mt-6">
                                {/* Fake card background */}
                                <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                                    <div
                                        className={classNames(
                                            plan.featured ? 'shadow-md' : 'shadow',
                                            'absolute right-0 w-1/2 h-full bg-neutral-900 rounded-lg'
                                        )}
                                    />
                                </div>

                                <div
                                    className={classNames(
                                        plan.featured ? 'ring-2 ring-lime-600 shadow-md' : 'ring-1 ring-gray-700 shadow',
                                        'relative py-3 px-4 bg-neutral-900 rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                                    )}
                                >
                                    <dl className="divide-y divide-gray-200">
                                        {perks.map((perk) => (
                                            <div
                                                key={perk.title}
                                                className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2"
                                            >
                                                <dt className="pr-4 text-sm font-medium text-gray-400">{perk.title}</dt>
                                                <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                                    {typeof perk.tiers[mobilePlanIndex].value === 'string' ? (
                                                        <span
                                                            className={classNames(
                                                                perk.tiers[mobilePlanIndex].featured ? 'text-lime-400' : 'text-gray-100',
                                                                'text-sm font-medium'
                                                            )}
                                                        >
                                                            {perk.tiers[mobilePlanIndex].value}
                                                        </span>
                                                    ) : (
                                                        <>
                                                            {perk.tiers[mobilePlanIndex].value === true ? (
                                                                <CheckIcon className="mx-auto h-5 w-5 text-lime-400" aria-hidden="true" />
                                                            ) : (
                                                                <XMarkIcon className="mx-auto h-5 w-5 text-gray-600" aria-hidden="true" />
                                                            )}

                                                            <span className="sr-only">
                                                                {perk.tiers[mobilePlanIndex].value === true ? 'Yes' : 'No'}
                                                            </span>
                                                        </>
                                                    )}
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>

                                {/* Fake card border */}
                                <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                                    <div
                                        className={classNames(
                                            plan.featured ? 'ring-2 ring-lime-400' : 'ring-1 ring-gray-700',
                                            'absolute right-0 w-1/2 h-full rounded-lg'
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Feature comparison (lg+) */}
            <section aria-labelledby="comparison-heading" className="hidden lg:block">
                <h2 id="comparison-heading" className="sr-only">
                    Feature comparison
                </h2>

                <div className="mx-auto max-w-5xl py-24 px-8">
                    <div className="flex w-full items-stretch border-t border-gray-200">
                        <div className={classNames(
                            cloudIsSelected ? 'w-1/4' : 'w-1/3',
                            "-mt-px flex items-end py-6 pr-4"
                        )}>
                            <h3 className="mt-auto text-sm font-bold text-gray-100">Access to product suite</h3>
                        </div>
                        {plans.map((plan, planIdx) => (
                            <div
                                key={plan.title}
                                aria-hidden="true"
                                className={classNames(
                                    planIdx === plans.length - 1 ? '' : 'pr-4',
                                    cloudIsSelected ? 'w-1/4' : 'w-1/3',
                                    '-mt-px pl-4'
                                )}
                            >
                                <div
                                    className={classNames(plan.featured ? 'border-lime-400' : 'border-transparent', 'py-6 border-t-2')}
                                >
                                    <p className={classNames(plan.featured ? 'text-lime-400' : 'text-gray-100', 'text-sm font-bold')}>
                                        {plan.title}
                                    </p>
                                    <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative">
                        {/* Fake card backgrounds */}
                        <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
                            <div className={classNames(
                                cloudIsSelected ? 'w-1/4' : 'w-1/3',
                                "pr-4"
                            )} />
                            <div className={classNames(
                                cloudIsSelected ? 'w-1/4' : 'w-1/3',
                                "px-4"
                            )} >
                                <div className="h-full w-full rounded-lg bg-neutral-900 ring-1 ring-gray-700 shadow" />
                            </div>
                            <div className={classNames(
                                cloudIsSelected ? 'w-1/4' : 'w-1/3',
                                "px-4"
                            )}>
                                <div className="h-full w-full rounded-lg bg-neutral-900 ring-1 ring-gray-700 shadow-md" />
                            </div>
                            {cloudIsSelected && (
                                <div className="w-1/4 pl-4">
                                    <div className="h-full w-full rounded-lg bg-neutral-900 ring-1 ring-gray-700 shadow" />
                                </div>
                            )}
                        </div>

                        <table className="relative w-full">
                            <caption className="sr-only">Business feature comparison</caption>
                            <thead>
                                <tr className="text-left">
                                    <th scope="col">
                                        <span className="sr-only">Feature</span>
                                    </th>
                                    {plans.map((plan) => (
                                        <th key={plan.title} scope="col">
                                            <span className="sr-only">{plan.title} plan</span>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {features.map((feature) => (
                                    <tr key={feature.title}>
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-400">
                                            {feature.title}
                                        </th>
                                        {feature.tiers.map((tier, tierIdx) => (
                                            <td
                                                key={tier.title}
                                                className={classNames(
                                                    tierIdx === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                                                    'relative w-1/4 py-0 text-center'
                                                )}
                                            >
                                                <span className="relative h-full w-full py-3">
                                                    {typeof tier.value === 'string' ? (
                                                        <span
                                                            className={classNames(
                                                                tier.featured ? 'text-lime-400' : 'text-gray-100',
                                                                'text-sm font-medium'
                                                            )}
                                                        >
                                                            {tier.value}
                                                        </span>
                                                    ) : (
                                                        <>
                                                            {tier.value === true ? (
                                                                <CheckIcon className="mx-auto h-5 w-5 text-lime-400" aria-hidden="true" />
                                                            ) : (
                                                                <XMarkIcon className="mx-auto h-5 w-5 text-gray-600" aria-hidden="true" />
                                                            )}

                                                            <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                                                        </>
                                                    )}
                                                </span>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Fake card borders */}
                        <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
                            <div className={classNames(
                                cloudIsSelected ? 'w-1/4' : 'w-1/3',
                                "pr-4"
                            )} />
                            <div className={classNames(
                                cloudIsSelected ? 'w-1/4' : 'w-1/3',
                                "px-4"
                            )}>
                                <div className="h-full w-full rounded-lg ring-1 ring-gray-700" />
                            </div>
                            <div className={classNames(
                                cloudIsSelected ? 'w-1/4' : 'w-1/3',
                                "px-4"
                            )}>
                                <div className="h-full w-full rounded-lg ring-2 ring-lime-600" />
                            </div>
                            {cloudIsSelected && (
                                <div className="w-1/4 pl-4">
                                    <div className="h-full w-full rounded-lg ring-1 ring-gray-700" />
                                </div>
                            )}
                        </div>
                    </div>

                    <h3 className="mt-10 text-sm font-bold text-gray-100">Usage details</h3>

                    <div className="relative mt-6">
                        {/* Fake card backgrounds */}
                        <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
                            <div className={classNames(
                                cloudIsSelected ? 'w-1/4' : 'w-1/3',
                                "pr-4"
                            )} />
                            <div className={classNames(
                                cloudIsSelected ? 'w-1/4' : 'w-1/3',
                                "px-4"
                            )}>
                                <div className="h-full w-full rounded-lg bg-neutral-900 ring-1 ring-gray-700 shadow" />
                            </div>
                            <div className={classNames(
                                cloudIsSelected ? 'w-1/4' : 'w-1/3',
                                "px-4"
                            )}>
                                <div className="h-full w-full rounded-lg bg-neutral-900 ring-1 ring-gray-700 shadow-md" />
                            </div>
                            {cloudIsSelected && (
                                <div className="w-1/4 pl-4">
                                    <div className="h-full w-full rounded-lg bg-neutral-900 ring-1 ring-gray-700 shadow" />
                                </div>
                            )}

                        </div>

                        <table className="relative w-full">
                            <caption className="sr-only">Perk comparison</caption>
                            <thead>
                                <tr className="text-left">
                                    <th scope="col">
                                        <span className="sr-only">Perk</span>
                                    </th>
                                    {plans.map((plan) => (
                                        <th key={plan.title} scope="col">
                                            <span className="sr-only">{plan.title} plan</span>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {perks.map((perk) => (
                                    <tr key={perk.title}>
                                        <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-400">
                                            {perk.title}
                                        </th>
                                        {perk.tiers.map((tier, tierIdx) => (
                                            <td
                                                key={tier.title}
                                                className={classNames(
                                                    tierIdx === perk.tiers.length - 1 ? 'pl-4' : 'px-4',
                                                    'relative w-1/4 py-0 text-center'
                                                )}
                                            >
                                                <span className="relative h-full w-full py-3">
                                                    {typeof tier.value === 'string' ? (
                                                        <span
                                                            className={classNames(
                                                                tier.featured ? 'text-lime-400' : 'text-gray-100',
                                                                'text-sm font-medium'
                                                            )}
                                                        >
                                                            {tier.value}
                                                        </span>
                                                    ) : (
                                                        <>
                                                            {tier.value === true ? (
                                                                <CheckIcon className="mx-auto h-5 w-5 text-lime-400" aria-hidden="true" />
                                                            ) : (
                                                                <XMarkIcon className="mx-auto h-5 w-5 text-gray-600" aria-hidden="true" />
                                                            )}

                                                            <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                                                        </>
                                                    )}
                                                </span>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Fake card borders */}
                        <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
                            <div className={classNames(
                                cloudIsSelected ? 'w-1/4' : 'w-1/3',
                                "pr-4"
                            )} />
                            <div className={classNames(
                                cloudIsSelected ? 'w-1/4' : 'w-1/3',
                                "px-4"
                            )}>
                                <div className="h-full w-full rounded-lg ring-1 ring-gray-700" />
                            </div>
                            <div className={classNames(
                                cloudIsSelected ? 'w-1/4' : 'w-1/3',
                                "px-4"
                            )}>
                                <div className="h-full w-full rounded-lg ring-2 ring-lime-600" />
                            </div>
                            {cloudIsSelected && (
                                <div className="w-1/4 pl-4">
                                    <div className="h-full w-full rounded-lg ring-1 ring-gray-700" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <PricingModal open={openPricingModal} setOpen={setOpenPricingModal} />
            <CalModal open={openCalModal} setOpen={setOpenCalModal} />
            <DiscoveryModal open={openDiscoveryModal} setOpen={setOpenDiscoveryModal} />
            <AccessModal open={openAccessModal} setOpen={setOpenAccessModal} />
        </div>
    )
}
