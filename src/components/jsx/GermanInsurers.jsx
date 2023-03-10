import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { EnduserGerman } from './UseCases/MailComponents/EnduserGerman'
import { ManagerGerman } from './UseCases/MailComponents/ManagerGerman'
import { Footer } from './Footer'
import { CallToActionGerman } from './CallToActionGerman'
import { IconArrowDown, IconArrowRight, IconBallon, IconBulb, IconChecklist, IconDashboard, IconFileSearch, IconHeartHandshake, IconInbox, IconMail, IconNote, IconNumber1, IconChessKnight, IconDatabase, IconStack3, IconTerminal, IconNumber2, IconNumber3, IconNumber4, } from "@tabler/icons"

const useCases = [
    {
        name: 'Low-code Entwicklung',
        icon: IconTerminal,
        description: 'Sie brauchen keinen Doktortitel in KI, um mit unserer Plattform zu arbeiten. Entwickler:innen mit etwas Programmiererfahrung können bereits auf unserer Plattform programmieren. Sie haben die volle Flexibilität, können aber schnell und einfach entwickeln.',
    },
    {
        name: 'Ihr Trainingsdaten-Asset',
        icon: IconDatabase,
        description: 'Daten leben länger als Code. Mit unserem datenzentrierten Ansatz bauen Sie Ihr intellektuelles Trainingsdaten-Asset auf, so dass Sie flexibel bleiben, wenn es um Ihre Anforderungen geht. Modelle können Sie schnell tauschen, Trainingsdaten halten länger.',
    },
    {
        name: 'Alles aus einer Plattform',
        icon: IconStack3,
        description: 'Von der Datengenerierung für das Prototyping über die Datenerfassung und -labeling, die Qualitätssicherung und Orchestrierung bis hin zur Modellbereitstellung und dem vollständigen Workflow-Management. Alles aus einer Plattform.',
    },
    {
        name: 'Strategische Investition',
        icon: IconChessKnight,
        description: 'Unternehmen werden von Menschen geführt, und Menschen kommunizieren - per E-Mail, Chat, PDFs und mehr. NLP muss ein zentraler Bestandteil Ihrer Unternehmensstrategie sein, und wir helfen Ihnen dabei, sie aufzubauen.',
    },
]


const stats = [
    { id: 1, name: 'geringere Kosten im Claims Processing', value: 'Bis zu 30%', reference: 'McKinsey', link: 'https://www.mckinsey.com/~/media/mckinsey/industries/financial%20services/our%20insights/what%20drives%20insurance%20operating%20costs/successfully_reducing_operating_costs.pdf' },
    { id: 2, name: 'Verbesserung der Durchlaufzeiten', value: 'Bis zu 50%', reference: 'McKinsey', link: 'https://www.mckinsey.com/~/media/mckinsey/industries/financial%20services/our%20insights/what%20drives%20insurance%20operating%20costs/successfully_reducing_operating_costs.pdf' },
    { id: 3, name: 'Umsatzwachstum durch IPA', value: 'Bis zu 2 - 5%', reference: 'Capgemini', link: 'https://www.capgemini.com/gb-en/wp-content/uploads/sites/3/2018/07/Report-1.pdf' },
]

const steps = [{
    title: "Ermöglicht durch neue Technologien",
    description: "Embedding text & language-based AI automation is now easy with groundbreaking tools such as ChatGPT and Open API. Kern AI is your gateway to utilising these tools for business-critical use cases.",
    icon: IconNumber1,
}, {
    title: "Skalierbare und maßgeschneiderte Lösungen",
    description: "Kern AI accelerates the time it takes to see results, allowing you to start small and scale AI across workflows or teams with ease. With Kern, you can supercharge your implementation process.",
    icon: IconNumber2,
}, {
    title: "Kund:innen haben höchste Ansprüche",
    description: "According to Salesforce, 64% of consumers and 80% of business buyers expect companies to respond to their inquiries within 24 hours. AI makes it possible to offer superior customer service.",
    icon: IconNumber3,
}, {
    title: "Reduzieren Sie Kosten in der Schadensfallbearbeitung",
    description: "According to a study by McKinsey, claims automation can reduce claims handling costs by up to 30%. AI is the primary way to automate claims handling, support existing teams and reduce costs.",
    icon: IconNumber4,
}]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



const benefits = [
    {
        title: "Schadensfälle prüfen",
        description: "KI kann die Schadenaufnahme automatisieren, Betrug aufdecken und Schäden korrekt weiterleiten. Automatisiert, sofort und kostengünstig. KI-gestützte Schadenbearbeitung unterstützt die gesamte Organisation.",
        icon: IconFileSearch,
    },
    {
        title: "Entwürfe automatisieren",
        description: "Die automatische Generierung von Antwortsentwürfen spart wertvolle Zeit für Aufgaben, sowie verbessert gleichzeitig die Kundenerfahrung und rationalisiert die Arbeitsabläufe.",
        icon: IconNote,
    }, {
        title: "Posteingänge managen",
        description: "Kategorisieren Sie eingehende E-Mails automatisch, erkennen Sie die Stimmung (z. B. positiv, negativ, neutral) und extrahieren Sie Informationen (z. B. Name, Adresse, Telefonnummer usw.)",
        icon: IconInbox,
    }, {
        title: "Posteingänge analysieren",
        description: "Nutzen Sie die neugewonnenen Erkenntnisse aus dem operativen Prozess um analytische Dashboards zu erstellen, die Ihnen helfen, neue Einblicke in Ihre Postfächer zu erhalten.",
        icon: IconDashboard,
    }
]

const timeline = [
    {
        id: 1,
        title: 'Workshop',
        description: 'Wir führen mit Ihnen und Ihren Kolleg:innen einen 1- bis 2-stündigen Workshop durch, in dem wir uns mit verschiedenen Anwendungsfällen und den idealen Lösungen für Sie beschäftigen. Wir bearbeiten dafür einen Lean NLP Canvas.',
        result: 'Nach dem Workshop haben Sie eine bessere Vorstellung, was Natural Language Processing kann und wie es in Ihrem Unternehmen eingesetzt werden kann. Außerdem haben wir einen ausgefüllten Lean NLP Canvas für Sie.',
        icon: IconBulb,
        link: '/company/lean-nlp-canvas',
        iconBackground: 'bg-white',
    },
    {
        id: 2,
        title: 'Erste Implementierung',
        description: 'Innerhalb von nur einer Woche haben wir den Anwendungsfall für Sie zum Laufen gebracht - inklusive NLP-Modell und Setup. Wenn Sie keinen Zugang zu Daten haben, generieren wir realistische Daten anhand einer Handvoll Beispiele.',
        result: 'Wir werden einen laufenden Workflow für Sie einrichten.',
        icon: IconBallon,
        iconBackground: 'bg-white',
    },
    {
        id: 3,
        title: 'Workshop Review',
        description: 'Wir führen mit Ihnen einen weiteren Workshop durch, in dem wir die Lösung überprüfen und gemeinsam mit Ihnen die weiteren Schritte planen.',
        result: 'Nach dem Workshop wissen Sie, wie NLP in Ihrem Unternehmen eingesetzt werden kann, und Sie haben eine fertige Lösung, mit der Sie beginnen können.',
        icon: IconChecklist,
        iconBackground: 'bg-white',
    },
    {
        id: 4,
        title: 'Weiterer Support',
        description: 'Sie können von uns einen kontinuierlichen, erstklassigen Support erwarten. Wir helfen Ihnen bei allen Fragen, die Sie haben, und unterstützen Sie dabei, Ihre Lösung weiter zu verbessern.',
        icon: IconHeartHandshake,
        iconBackground: 'bg-white',
    },
]


export function GermanInsurers() {

    const navigation = [{
        name: 'How does this look like for a user?',
        showFor: 'enduser',
        onClick: () => setShowForStakeholders("enduser")
    },
    {
        name: 'What are my benefits?',
        showFor: 'manager',
        onClick: () => setShowForStakeholders("manager")
    }]


    const [showForStakeholders, setShowForStakeholders] = useState("enduser")

    return (
        <div className='flex flex-col space-y-52'>
            <div className="relative isolate overflow-hidden bg-slate-50">
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
                </svg>
                <div className="mx-auto max-w-7xl px-6 pt-10 lg:flex lg:py-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                        <img
                            className="h-11"
                            src="/KernAI-icon.svg"
                            alt="KernAI"
                        />
                        <div className="mt-24 sm:mt-32 lg:mt-16">
                            <a href="/" className="inline-flex space-x-6">
                                <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                                    KI aus Deutschland
                                </span>
                                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                                    <span>Zu unserer Website</span>
                                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </a>
                        </div>
                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Sprach- und Text-KIs für Versicherungen
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Wir helfen Versicherungen, indem wir Fachbereiche mithilfe Künstlicher Intelligenz entlasten.
                        </p>
                        <p className="text-lg leading-8 text-gray-600">
                            Damit Fachexpert:innen mehr Zeit für Kund:innen und der Bearbeitung von Schadensfällen haben.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <div className='animate-bounce flex items-center flex-row space-x-4'>
                                <div className='p-2 border border-gray-300 rounded-full'>
                                    <IconArrowDown className="h-4 w-4 text-green-500" />
                                </div>
                                <div className='text-gray-800'>
                                    Runterscrollen
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                <img
                                    src="/screenshot-workflow.png"
                                    alt="App screenshot"
                                    width={2432}
                                    height={1442}
                                    className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="-mt-40 flex flex-col space-y-16 mx-auto w-full max-w-5xl sm:px-6 lg:px-8">
                    <div className=''>
                        <h2 className="text-2xl font-bold tracking-tight sm:text-center sm:text-4xl">
                            Was bedeutet Text-KI?
                        </h2>
                        <p className="mt-6 text-xl leading-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-gray-900 to-gray-600 sm:text-center">
                            KI ist in der Lage, manuelle und zeitaufwändige E-Mail-Prozesse, die geschäftskritisch sind, zu automatisieren.
                        </p>
                    </div>
                    <div className="md:m-4 space-y-4 md:p-0 md:grid md:grid-cols-2 md:gap-8">
                        {benefits.map((benefit) => (
                            <div
                                key={benefit.title}
                                className="flex flex-col hover:bg-neutral-100 p-4 rounded-lg"
                            >
                                <div className={classNames(
                                    "flex items-center justify-center h-12 w-12 rounded-md border bg-gradient-to-b from-neutral-100 to-neutral-200 border-gray-300 text-gray-800"
                                )}>
                                    <benefit.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <div className="mt-5">
                                    <h3 className="text-lg leading-6 font-medium text-gray-800">{benefit.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-600">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div
                className='max-w-7xl mx-auto px-6'
                id="email-automation">
                <div className='max-w-5xl mx-auto flex flex-col space-y-6'>
                    <div className='flex flex-row items-center md:space-x-4'>
                        <div
                            className='hidden md:block p-3 border border-neutral-300 bg-neutral-200 rounded-2xl'
                        >
                            <IconMail className='text-neutral-800 w-6 h-6' />
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold'>
                                Email automation
                            </h3>
                            <p className='text-gray-700 mt-1'>
                                Turn your info@-inbox (or any other inbox) into a first-class AI assistant. Automatically categorize incoming emails by intent, identify sentiment and urgency, extract key information and automatically create response drafts.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div
                            className='mx-auto w-fit h-full md:border border-neutral-200 rounded-full opacity-90'
                        >
                            <div className='flex flex-col md:flex-row mx-auto p-2 space-y-2 md:space-y-0 md:space-x-2'>
                                {navigation.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={item.onClick}
                                        className={classNames(
                                            item.showFor == 'manager' ? 'bg-gradient-to-r from-amber-300 via-lime-400 to-green-500' : 'border border-neutral-300',
                                            'flex flex-row group space-x-2 items-center relative rounded-full bg-slate-100 pl-2 pr-3 py-1.5'
                                        )}
                                    >
                                        <span
                                            className={classNames(
                                                showForStakeholders === item.showFor ? 'bg-green-500' : null,
                                                'mt-0.5 rounded-full w-2 h-2 inline-block mx-1.5 bg-gray-500 group-hover:bg-green-500'
                                            )}
                                        />
                                        <span
                                            className={classNames(
                                                item.showFor == 'manager' ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-lime-800 to-green-900' : 'text-gray-800 group-hover:text-black',
                                            )}
                                        >
                                            {item.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <div className='mt-6'>
                    {/* {showForStakeholders == 'developer' && (
                    <Developer />
                )} */}
                    {showForStakeholders == 'enduser' && (
                        <EnduserGerman />
                    )}
                    {showForStakeholders == 'manager' && (
                        <ManagerGerman />
                    )}
                </div>
            </div>

            <div
                className="hidden lg:block mx-auto w-full max-w-6xl rounded-2xl"
            >
                <div className="grid grid-cols-4 gap-8">

                    {steps.map((step, stepIdx) => (
                        <div key={stepIdx} >
                            <span className="p-1 flex h-8 w-8 items-center justify-center rounded-full bg-white border border-gray-300">
                                <step.icon className="h-5 w-5 text-lime-500" aria-hidden="true" />
                            </span>
                            <div className="mt-6">
                                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                                    {step.title}
                                </h2>
                                <p className="mt-4 text-sm text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    {stat.value}
                                </dd>
                                <p className="text-base leading-7 text-gray-600">Quelle: <a
                                    href={stat.link}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="text-gray-600 underline"
                                >
                                    {stat.reference}
                                </a>
                                </p>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 py-20 px-6 sm:rounded-3xl sm:py-24 sm:px-10 lg:py-24 xl:px-24">
                    <div className="mx-auto">
                        <div className="">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-500 to-purple-300 mr-2'>Das Besondere an uns:</span>
                                Wir bieten die technische Plattform um exakt Ihre Anforderungen abbilden zu können, gepaart mit unserer langjährigen Erfahrung im Natural Language Processing.
                            </h2>
                        </div>
                        <div className="lg:row-start-3 lg:mt-10">
                            <div
                                className='grid md:grid-cols-2 gap-4 md:gap-8'
                            >
                                {useCases.map((useCase, index) => (
                                    <div
                                        className='relative'
                                        key={index}
                                    >
                                        <div
                                            className='absolute w-full h-full bg-gradient-to-b from-[#0d0d0d] to-[#0f0f0f] border border-neutral-900 rounded-2xl opacity-90'
                                        />
                                        <div className='flex flex-col m-3 relative border border-gray-800 rounded-lg bg-neutral-900 p-4 space-y-3'>
                                            <div className='flex flex-row items-center space-x-3 '>
                                                <div>
                                                    <useCase.icon className='text-gray-200' size={24} />
                                                </div>
                                                <h3 className='text-gray-200 font-semibold'>
                                                    {useCase.name}
                                                </h3>
                                            </div>
                                            <div>
                                                <p className='text-gray-400 text-sm'>
                                                    {useCase.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <svg
                        className="pointer-events-none absolute top-1/2 left-12 -z-10 h-[42.375rem] -translate-y-1/2 transform-gpu blur-3xl lg:top-auto lg:bottom-[-12rem] lg:translate-y-0"
                        viewBox="0 0 1155 678"
                        fill="none"
                    >
                        <path
                            fill="url(#c0458c57-1330-459f-9d5c-f0d75c210466)"
                            fillOpacity=".25"
                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
                        <defs>
                            <linearGradient
                                id="c0458c57-1330-459f-9d5c-f0d75c210466"
                                x1="1155.49"
                                x2="-78.208"
                                y1=".177"
                                y2="474.645"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9089FC" />
                                <stop offset={1} stopColor="#FF80B5" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className='mx-auto max-w-2xl lg:max-w-3xl'>
                <h2 className='text-2xl font-bold'>
                    Wie wir mit Ihnen zusammenarbeiten
                </h2>

                <div className="mt-10 flow-root">
                    <ul role="list" className="-mb-8">
                        {timeline.map((event, eventIdx) => (
                            <li key={event.id}>
                                <div className="relative pb-8">
                                    {eventIdx !== timeline.length - 1 ? (
                                        <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-blue-400" aria-hidden="true" />
                                    ) : null}
                                    <div className="relative flex space-x-3">
                                        <div>
                                            <span
                                                className={classNames(
                                                    event.iconBackground,
                                                    'h-8 w-8 rounded-full flex items-center justify-center ring-2 ring-blue-500'
                                                )}
                                            >
                                                <event.icon className="h-5 w-5 text-blue-500" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-700">
                                            <div>
                                                {event.title}
                                            </div>
                                            <div className="font-medium text-gray-900">
                                                {event.description}
                                            </div>
                                            {event.link && (
                                                <a
                                                    href={event.link}
                                                    className="group flex flex-row space-x-1 items-center text-blue-500 font-semibold hover:text-blue-800"
                                                >
                                                    <span>Was ist ein Lean NLP Canvas? (englisch)</span>
                                                    <IconArrowRight className='w-4 h-4 text-blue-500 group-hover:text-blue-800' />
                                                </a>
                                            )}

                                            <div className="text-sm text-gray-700">
                                                {event.result}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <CallToActionGerman />

            <Footer isDarkTheme={false} />
        </div>
    )
}
