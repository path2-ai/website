import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { IconArrowRight } from '@tabler/icons'
import Link from 'next/link'


const faqs = [
    {
        question: "How is my data encrypted?",
        answer:
            "All of your data is encrypted with A-grade SSL at transfer and with LUKS at rest to protect requests from eavesdropping and man-in-the-middle attacks and to secure your data from unauthorized access.",
    }, {
        question: "How often are backups created?",
        answer: "Our databases are provided and managed by our certified cloud service provider. Daily full cluster database backups are created and write-ahead-logs are maintained to enable rollbacks to any point in time for the last seven days. The database rollback strategy gets detailed tested at least quarterly.",
    }, {
        question: "Where are the data centers located?",
        answer: "Our application server and managed databases are located in Frankfurt, Germany. The data centers of the provider we use maintain state-of-the-art physical security, including around-the-clock surveillance, environmental protection, and comprehensive secure access policies, and are ISO 27001 certified.",
    }, {
        question: "How do you ensure operational security?",
        answer: "We have set up ISO 27001 conform processes and continuously train the security awareness of our employees to ensure a high level of operational security. Amongst other measures, we protect all digital assets from malware, have strict logging procedures, and have comprehensive technical vulnerability management.",
    }, {
        question: "Can we use Multi-Factor Authorization?",
        answer: "In our App we provide users the ability to enable MFA for login to reduce friction and increase security. Additionally, we use a security stack that detects on account creation whether a password has been leaked in a data breach, and validates that used passwords are secure.",
    }, {
        question: "How do you deal with vendors?",
        answer: "At Kern AI, we strive to minimize our reliance on external service providers. When we do need to engage their services, we take great care to choose providers who meet our high standards, and we conduct audits of all key service providers in compliance with ISO 27001.",
    }, {
        question: "I have some further questions about your security - who can I contact?",
        answer: "For all further questions, please contact security@kern.ai.",
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export function Security() {
    return (
        <div className="relative overflow-hidden text-gray-100 py-16">
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-prose text-lg flex flex-col space-y-8">
                    <h1>
                        <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
                            Security at Kern AI in a nutshell
                        </span>
                    </h1>
                    <p className="mt-8 text-lg leading-8 text-gray-300">
                        For the development and operation of our application platform, we follow industry-leading best practices to keep your data secure.
                    </p>

                    <dl className="mt-10 space-y-6 divide-y divide-gray-800">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt className="text-sm">
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
                                            <p className="text-sm text-gray-500">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>


                    <h2>
                        <span className="mt-16 block text-center text-2xl font-bold leading-8 tracking-tight text-white sm:text-3xl">
                            ISO 27001
                        </span>
                    </h2>
                    <p className="mt-8 text-lg leading-8 text-gray-300">
                        ISO 27001 is an internationally recognized standard that outlines requirements for establishing, implementing, maintaining, and continuously improving an information security management system (ISMS). This standard provides a systematic approach to managing sensitive information and helps organizations protect the confidentiality, integrity, and availability of their data.
                    </p>
                    <img src="/proks_certificationfull.png" className="mt-4 w-40 mx-auto" />

                    <Link
                        href="/file/DE_IS_20230058_27001_KernAI_ENG.pdf" download
                        className='flex flex-row items-center space-x-2 group text-gray-200 hover:text-white'>
                        <IconArrowRight className='h-5 w-5 text-gray-200 group-hover:text-white group-hover:rotate-90 transition-transform duration-300 ease-in-out' />
                        <span>
                            Download certification
                        </span>
                    </Link>

                    <h2>
                        <span className="mt-16 block text-center text-2xl font-bold leading-8 tracking-tight text-white sm:text-3xl">
                            GDPR
                        </span>
                    </h2>
                    <p className="mt-8 text-lg leading-8 text-gray-300">
                        At Kern AI, we strictly adhere to all requirements of the General Data Protection Regulation (GDPR), including those related to data protection, privacy, and the sharing of personal data.
                    </p>
                    <img src="/heydata.png" className="mt-4 w-40 mx-auto" />

                    <h1>
                        <span className="mt-20 block text-center text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
                            General Information Security Policy
                        </span>
                    </h1>

                    <div>
                        <span className="font-bold">Protect</span> Kern AI’s informational and IT assets (including but not limited to all computers, mobile
                        devices, networking equipment, software and sensitive data) against all internal, external, deliberate
                        or accidental threats and to mitigate the risks associated with the theft, loss, misuse, damage or
                        abuse of these systems;
                    </div>
                    <div>
                        <span className="font-bold">Ensure</span> information will be protected against any unauthorized access. Users shall only have access to
                        resources that they have been specifically authorized to access. The allocation of privileges shall be
                        strictly controlled and reviewed regularly.
                    </div>
                    <div>
                        <span className="font-bold">Protect CONFIDENTIALITY</span> of information. When we talk about confidentiality of information, we are
                        talking about protecting the information from disclosure to unauthorized parties;
                    </div>
                    <div>
                        <span className="font-bold">Ensure INTEGRITY</span> of information. Integrity of information refers to protecting information from
                        being modified by unauthorized parties;
                    </div>
                    <div>
                        <span className="font-bold">Maintain AVAILABILITY</span> of information for business processes. Availability of information refers to
                        ensuring that authorized parties can access the information when needed.
                    </div>
                    <div>
                        <span className="font-bold">Comply</span> with and, wherever possible, exceed, national legislative and regulatory requirements,
                        standards and best practices;
                    </div>
                    <div>
                        <span className="font-bold">Develop</span>, <span className="font-bold">Maintain</span> and <span className="font-bold">Test</span> business continuity plans to ensure we stay on course despite all
                        obstacles that we may come across. It is about “keeping calm and carrying on!”;
                    </div>
                    <div>
                        <span className="font-bold">Raise</span> awareness of information security by making information security training available for all
                        Employees. Security awareness and targeted training shall be conducted consistently, security
                        responsibilities reflected in job descriptions, and compliance with security requirements shall be
                        expected and accepted as a part of our culture;
                    </div>
                    <div>
                        <span className="font-bold">Ensure</span> that no action will be taken against any employee who discloses an information security
                        concern through reporting or in direct contact with the Information Security Management Leader,
                        unless such disclosure indicates, beyond any reasonable doubt, an illegal act, gross negligence, or a
                        repetitive deliberate or willful disregard for regulations or procedures;
                    </div>
                    <div>
                        <span className="font-bold">Report</span> all actual or suspected information security breaches security@kern.ai.
                    </div>


                    {/* <h1>
                        <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
                            Everything you need to know about our security practices
                        </span>
                    </h1>
                    <p className="mt-8 text-xl leading-8 text-white">
                        Our application refinery is highly secure, as we follow industry-leading best practices to keep all of your data secure.
                    </p>
                    <div>
                        <p className="mt-6 text-white">
                            How is my data encrypted?
                        </p>
                        <p className="mt-2 text-gray-300">
                            All of your data is encrypted at transfer using HTTPS in order to protect requests from eavesdrop and man-in-the-middle attacks. Additionally, your data is encrypted at rest using AES-256, securing your data from unauthorized access.
                        </p>
                    </div>
                    <div>
                        <p className="mt-6 text-white">
                            How often are backups created?
                        </p>
                        <p className="mt-2 text-gray-300">
                            We use a managed database for production, which automatically creates backups in form of snapshots from the data every day.
                        </p>
                    </div>
                    <div>
                        <p className="mt-6 text-white">
                            Where are the data centers located?
                        </p>
                        <p className="mt-2 text-gray-300">
                            Our application solely runs on three Digital Ocean located in Frankfurt, Germany. Digital Ocean data centers maintain state-of-the-art physical security, including 24x7x365 surveillance, environmental protection, and extensive secure access policies.
                        </p>
                    </div>
                    <div>
                        <p className="mt-6 text-white">
                            On which OS is the application running?
                        </p>
                        <p className="mt-2 text-gray-300">
                            Kern AI servers run in recent Linux OS releases with Long Term Support policies and are regularly updated. Our engineering team monitors uptime and is able to quickly act if errors occur.
                        </p>
                    </div>
                    <div>
                        <p className="mt-6 text-white">
                            How do you ensure operational security?
                        </p>
                        <p className="mt-2 text-gray-300">
                            Only a small number of authorized employees can access user data. Accessing users’ accounts by kern employees is only allowed in exceptional cases, always with your prior permission and for the purpose of resolving a specific issue only.
                            We use specialized tools for storing and sharing passwords and other sensitive data and require our employees to use Multi-Factor authentication for all tools where possible.
                        </p>
                    </div>
                    <div>
                        <p className="mt-6 text-white">
                            Can we use Multi-Factor Authorization?
                        </p>
                        <p className="mt-2 text-gray-300">
                            We provide your users to enable MFA for login to reduce friction and increase security. Additionally, we use a security stack that detects whether your password has been leaked in a recent data breach, and validates that used passwords are secure.
                        </p>
                    </div>
                    <div>
                        <p className="mt-6 text-white">
                            Is the application available on private cloud or on-premises?
                        </p>
                        <p className="mt-2 text-gray-300">
                            Yes, we offer multiple deployment options. Please contact our sales.
                        </p>
                    </div>
                    <div>
                        <p className="mt-6 text-white">
                            I have some further questions about your security - who can I contact?
                        </p>
                        <p className="mt-2 text-gray-300">
                            For all further questions, please contact henrik.wenck@kern.ai.
                        </p>
                    </div> */}

                </div>

            </div>
        </div>
    )
}