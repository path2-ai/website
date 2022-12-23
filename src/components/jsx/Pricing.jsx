import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const plans = [
    {
        title: 'Starter',
        featured: false,
        description: 'All your essential business finances, taken care of.',
        price: 5,
        mainFeatures: [
            { id: 1, value: 'Basic invoicing' },
            { id: 2, value: 'Easy to use accounting' },
            { id: 3, value: 'Mutli-accounts' },
        ],
        cta: 'Get started',
    },
    {
        title: 'Scale',
        featured: true,
        description: 'The best financial services for your thriving business.',
        price: 19,
        mainFeatures: [
            { id: 1, value: 'Advanced invoicing' },
            { id: 2, value: 'Easy to use accounting' },
            { id: 3, value: 'Mutli-accounts' },
            { id: 4, value: 'Tax planning toolkit' },
            { id: 5, value: 'VAT & VATMOSS filing' },
            { id: 6, value: 'Free bank transfers' },
        ],
        cta: 'Get started',
    },
    {
        title: 'Growth',
        featured: false,
        description: 'Convenient features to take your business to the next level.',
        price: 12,
        mainFeatures: [
            { id: 1, value: 'Basic invoicing' },
            { id: 2, value: 'Easy to use accounting' },
            { id: 3, value: 'Mutli-accounts' },
            { id: 4, value: 'Tax planning toolkit' },
        ],
        cta: 'Get started',
    },
]
const features = [
    {
        title: 'Tax Savings',
        tiers: [
            { title: 'starter', value: true },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: true },
        ],
    },
    {
        title: 'Easy to use accounting',
        tiers: [
            { title: 'starter', value: true },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: true },
        ],
    },
    {
        title: 'Multi-accounts',
        tiers: [
            { title: 'starter', value: '3 accounts' },
            { title: 'popular', featured: true, value: 'Unlimited accounts' },
            { title: 'intermediate', value: '7 accounts' },
        ],
    },
    {
        title: 'Invoicing',
        tiers: [
            { title: 'starter', value: '3 invoices' },
            { title: 'popular', featured: true, value: 'Unlimited invoices' },
            { title: 'intermediate', value: '10 invoices' },
        ],
    },
    {
        title: 'Exclusive offers',
        tiers: [
            { title: 'starter', value: false },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: true },
        ],
    },
    {
        title: '6 months free advisor',
        tiers: [
            { title: 'starter', value: false },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: true },
        ],
    },
    {
        title: 'Mobile and web access',
        tiers: [
            { title: 'starter', value: false },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: false },
        ],
    },
]
const perks = [
    {
        title: '24/7 customer support',
        tiers: [
            { title: 'starter', value: true },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: true },
        ],
    },
    {
        title: 'Instant notifications',
        tiers: [
            { title: 'starter', value: true },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: true },
        ],
    },
    {
        title: 'Budgeting tools',
        tiers: [
            { title: 'starter', value: true },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: true },
        ],
    },
    {
        title: 'Digital receipts',
        tiers: [
            { title: 'starter', value: true },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: true },
        ],
    },
    {
        title: 'Pots to separate money',
        tiers: [
            { title: 'starter', value: false },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: true },
        ],
    },
    {
        title: 'Free bank transfers',
        tiers: [
            { title: 'starter', value: false },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: false },
        ],
    },
    {
        title: 'Business debit card',
        tiers: [
            { title: 'starter', value: false },
            { title: 'popular', featured: true, value: true },
            { title: 'intermediate', value: false },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Pricing() {
    return (
        <div>
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black" />
            <div className="relative">
                <div className="relative mx-auto max-w-2xl px-4 pt-16 text-center sm:px-6 sm:pt-32 lg:max-w-5xl lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        <span className="block lg:inline">Simple pricing,</span>
                        <span className="block lg:inline">no commitment.</span>
                    </h1>
                    <p className="mt-4 text-xl text-lime-100">
                        Everything you need, nothing you don't. Pick a plan that best suits your business.
                    </p>
                </div>

                <h2 className="sr-only">Plans</h2>
                {/* Cards */}
                <div className="relative mx-auto mt-8 max-w-2xl px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-6xl lg:px-8 lg:pb-0">
                    {/* Decorative background */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 top-4 bottom-6 left-8 right-8 hidden rounded-tl-lg rounded-tr-lg lg:block"
                    />

                    <div className="relative space-x-4 space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0">
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
                                    <p className="mt-4 flex items-baseline text-gray-100">
                                        <span className="text-5xl font-bold tracking-tight">${tier.price}</span>
                                        <span className="ml-1 text-xl font-semibold">/month</span>
                                    </p>
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

                                <Link
                                    href="#"
                                    className={classNames(
                                        tier.featured
                                            ? 'bg-green-500 text-neutral-900 hover:bg-green-400'
                                            : 'bg-green-900 text-green-300 hover:bg-green-900',
                                        'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                                    )}
                                >
                                    {tier.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Feature comparison (up to lg) */}
            <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
                <h2 id="mobile-comparison-heading" className="sr-only">
                    Feature comparison
                </h2>

                <div className="mx-auto max-w-2xl space-y-16 py-16 px-4 sm:px-6">
                    {plans.map((plan, mobilePlanIndex) => (
                        <div key="plan.title" className="border-t border-gray-200">
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
                            <h4 className="mt-10 text-sm font-bold text-gray-100">Catered for business</h4>

                            <div className="relative mt-6">
                                {/* Fake card background */}
                                <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                                    <div
                                        className={classNames(
                                            plan.featured ? 'shadow-md' : 'shadow',
                                            'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                                        )}
                                    />
                                </div>

                                <div
                                    className={classNames(
                                        plan.featured ? 'ring-2 ring-lime-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow',
                                        'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
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
                                            plan.featured ? 'ring-2 ring-lime-600' : 'ring-1 ring-black ring-opacity-5',
                                            'absolute right-0 w-1/2 h-full rounded-lg'
                                        )}
                                    />
                                </div>
                            </div>

                            <h4 className="mt-10 text-sm font-bold text-gray-100">Other perks</h4>

                            <div className="relative mt-6">
                                {/* Fake card background */}
                                <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                                    <div
                                        className={classNames(
                                            plan.featured ? 'shadow-md' : 'shadow',
                                            'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                                        )}
                                    />
                                </div>

                                <div
                                    className={classNames(
                                        plan.featured ? 'ring-2 ring-lime-600 shadow-md' : 'ring-1 ring-black ring-opacity-5 shadow',
                                        'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
                                    )}
                                >
                                    <dl className="divide-y divide-gray-200">
                                        {perks.map((perk) => (
                                            <div key={perk.title} className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                                                <dt className="text-sm font-medium text-gray-400 sm:pr-4">{perk.title}</dt>
                                                <dd className="text-center sm:px-4">
                                                    {perk.tiers[mobilePlanIndex].value === true ? (
                                                        <CheckIcon className="mx-auto h-5 w-5 text-lime-400" aria-hidden="true" />
                                                    ) : (
                                                        <XMarkIcon className="mx-auto h-5 w-5 text-gray-600" aria-hidden="true" />
                                                    )}

                                                    <span className="sr-only">{perk.tiers[mobilePlanIndex].value === true ? 'Yes' : 'No'}</span>
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>

                                {/* Fake card border */}
                                <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
                                    <div
                                        className={classNames(
                                            plan.featured ? 'ring-2 ring-lime-400' : 'ring-1 ring-black ring-opacity-5',
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
                        <div className="-mt-px flex w-1/4 items-end py-6 pr-4">
                            <h3 className="mt-auto text-sm font-bold text-gray-100">Catered for business</h3>
                        </div>
                        {plans.map((plan, planIdx) => (
                            <div
                                key={plan.title}
                                aria-hidden="true"
                                className={classNames(planIdx === plans.length - 1 ? '' : 'pr-4', '-mt-px pl-4 w-1/4')}
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
                            <div className="w-1/4 pr-4" />
                            <div className="w-1/4 px-4">
                                <div className="h-full w-full rounded-lg bg-neutral-900 ring-1 ring-gray-700 shadow" />
                            </div>
                            <div className="w-1/4 px-4">
                                <div className="h-full w-full rounded-lg bg-neutral-900 ring-1 ring-gray-700 shadow-md" />
                            </div>
                            <div className="w-1/4 pl-4">
                                <div className="h-full w-full rounded-lg bg-neutral-900 ring-1 ring-gray-700 shadow" />
                            </div>
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
                            <div className="w-1/4 pr-4" />
                            <div className="w-1/4 px-4">
                                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
                            </div>
                            <div className="w-1/4 px-4">
                                <div className="h-full w-full rounded-lg ring-2 ring-lime-600 ring-opacity-100" />
                            </div>
                            <div className="w-1/4 pl-4">
                                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
                            </div>
                        </div>
                    </div>

                    <h3 className="mt-10 text-sm font-bold text-gray-100">Other perks</h3>

                    <div className="relative mt-6">
                        {/* Fake card backgrounds */}
                        <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
                            <div className="w-1/4 pr-4" />
                            <div className="w-1/4 px-4">
                                <div className="h-full w-full rounded-lg bg-neutral-900 ring-1 ring-gray-700 shadow" />
                            </div>
                            <div className="w-1/4 px-4">
                                <div className="h-full w-full rounded-lg bg-neutral-900 ring-1 ring-gray-700 shadow-md" />
                            </div>
                            <div className="w-1/4 pl-4">
                                <div className="h-full w-full rounded-lg bg-neutral-900 ring-1 ring-gray-700 shadow" />
                            </div>
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
                                                    {tier.value === true ? (
                                                        <CheckIcon className="mx-auto h-5 w-5 text-lime-400" aria-hidden="true" />
                                                    ) : (
                                                        <XMarkIcon className="mx-auto h-5 w-5 text-gray-600" aria-hidden="true" />
                                                    )}

                                                    <span className="sr-only">{tier.value === true ? 'Yes' : 'No'}</span>
                                                </span>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Fake card borders */}
                        <div className="pointer-events-none absolute inset-0 flex items-stretch" aria-hidden="true">
                            <div className="w-1/4 pr-4" />
                            <div className="w-1/4 px-4">
                                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
                            </div>
                            <div className="w-1/4 px-4">
                                <div className="h-full w-full rounded-lg ring-2 ring-lime-600 ring-opacity-100" />
                            </div>
                            <div className="w-1/4 pl-4">
                                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
