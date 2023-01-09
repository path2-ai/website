import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "Is this open source?",
        answer:
            "Partially. The core of refinery is open source, and bricks is fully available on GitHub. gates and workflow are proprietary. You can find the open source repositories on our GitHub page."
    },
    {
        question: "Why did you choose a credit-based pricing?",
        answer:
            "The goal of our pricing is to both be fair and easy to understand. You can find more details in the pricing table listed above."
    },
    {
        question: "What are items?",
        answer:
            "An item is the atomic unit of our pricing. In a realtime workflow, it is one processed task (e.g. an incoming customer mail). In a batch process, it is a row in your dataset."
    },
    {
        question: "Do I pay for each item?",
        answer:
            "No, each plan of our pricing model gives you a set of included credits, which you can use to process items. If you exceed the included credits, you will be charged for the additional items."
    },
    {
        question: "What happens if I exceed my included credits?",
        answer:
            "You will be charged for the additional items. You will be notified before your credits run out and can then decide to either continue or to pause your workflow."
    },
    {
        question: "I'm missing an integration. Can you add it?",
        answer:
            "Yes, we are constantly adding new integrations. If you are missing an integration, please let us know and we will add it to our roadmap. If you're on the enterprise plan, we can also add custom integrations."
    },
    {
        question: "Where is my data stored?",
        answer:
            "Your data is stored in the cloud on DigitalOcean servers in Frankfurt, Germany. We use the latest security standards to protect your data, and are ISO 27001 certified."
    },
    {
        question: "How can I cancel my subscription?",
        answer:
            "You can cancel your subscription at any time, but our billing is based on a yearly cycle. If you cancel your subscription, you will still be able to use your credits until the end of the year."
    },
    {
        question: "How do the products work together?",
        answer:
            "Our products can be stacked together. Take a look into our product architecture to see how the stack is designed."
    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function FAQ() {
    return (
        <div>
            <div className="mx-auto max-w-5xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl divide-y-2 divide-gray-800">
                    <h2 className="text-center text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-800">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt className="text-lg">
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-600">
                                                <span className="font-medium text-gray-100">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    <ChevronDownIcon
                                                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base text-gray-500">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
