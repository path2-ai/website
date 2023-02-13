import { useState } from "react"
import { IconChevronRight, IconCode, IconDashboard, IconDatabase, IconLoader, IconMessage, IconNumber1, IconNumber2, IconNumber3, IconNumber4, IconNumber5, IconPerspective, IconTestPipe, IconWorldWww } from "@tabler/icons"
import { useRouter } from "next/router"

const options = [
    {
        title: "Building products",
        description: "Use refinery to craft the data for your NLP model. Optionally, you can also use the gates API to use refinery automations as your model's inference engine.",
        icon: IconCode,
        steps: [{
            title: "Connect a dataset",
            description: "refinery uses JSON for user-defined inputs. You can choose from a variety of formats to upload your data, e.g. CSV, JSON, or Excel. Alternatively, you can grab data from a store (e.g. a 3rd-party-integration or database) of the workflow product.",
            icon: IconNumber1,
            image: "screenshot-refinery"
        }, {
            title: "Label reference data",
            description: "Next, you need to label a few sample records. You can either do this in the built-in editor, or via another labeling solution like Labelstudio. Also, you can upload existing labeled data. These sample records will be (partially) used to train and validate heuristics.",
            icon: IconNumber2,
            image: "screenshot-refinery-labeling"
        }, {
            title: "Set up automations",
            description: "Now comes the fun part. You can program and integrate automations in form of heuristics. These include Python functions, regular expressions, active transfer learning models and many more. We also integrate large-language-models, such as from Hugging Face or OpenAI.",
            icon: IconNumber3,
            image: "screenshot-refinery-automation"
        }, {
            title: "Monitor and improve",
            description: "You now have your data enriched with metadata like the heuristic indices or confidence scores to analyze the overall quality of your data, and to further drill down into specific filters. E.g. filter records with a low confidence score and assign someone to relabel them.",
            icon: IconNumber4,
            image: "screenshot-refinery-dashboard"
        }, {
            title: "Integrate or deploy",
            description: "Lastly, you can decide whether you want to build your own model on top of the enriched data (you can export the data via UI or API), or rather use the gates API to use refinery automations as your model's inference engine.",
            icon: IconNumber5,
            image: "screenshot-gates"
        }],
        useCases: [{
            title: 'Training data',
            slug: 'training-data',
            description: 'Combine workflow and refinery to streamline your training data. Automatically synchronize refinery projects from stores.',
            icon: IconDatabase,
        }]
    },
    {
        title: "Building ETL pipelines",
        description: "Set up a batch-workflow to automate recurring data tasks. E.g. for internal analytical processes, dashboards, or for keeping your data up-to-date.",
        icon: IconPerspective,
        steps: [{
            title: "Define a skeleton from scratch or use a template",
            description: "First, to understand what you need to configure, set up the basic steps of your workflow. You can either start from scratch or choose a template. A batch-workflow fetches new data either daily, weekly, or monthly.",
            icon: IconNumber1,
            image: "screenshot-workflow-b-skeleton"
        }, {
            title: "Set up a store",
            description: "Connect a store from one of our integrations, or use the workflow API to stream data into a custom store. This is where your raw data will be stored. By the way, you can connect stores from workflow directly to refinery.",
            icon: IconNumber2,
            image: "screenshot-workflow-store"
        }, {
            title: "Connect a model from gates",
            description: "If you have set up a model in refinery and activated it in gates, it is now useable in workflow.",
            icon: IconNumber3,
            image: "screenshot-workflow-gates"
        }, {
            title: "Finish your workflow",
            description: "Finally, you can finish the skeleton of your workflow and connect your stores and model to the pipeline. If you run into errors, you can just reset the pipeline and start over. When you're done, you can publish your workflow.",
            icon: IconNumber4,
            image: "screenshot-workflow-b"
        }],
        useCases: [{
            title: 'ETL pipelines',
            slug: 'etl',
            description: 'Why limit ETL to only structured data? Build pipelines that actually understand human language, and future-proof your pipelines.',
            icon: IconPerspective,
        }]
    }, {
        title: "Building workflows",
        description: "Set up a realtime-workflow to automate operational natural language-driven tasks. E.g. for customer service automations.",
        icon: IconLoader,
        steps: [{
            title: "Define a skeleton from scratch or use a template",
            description: "First, to understand what you need to configure, set up the basic steps of your workflow. You can either start from scratch or choose a template. A realtime-workflow fetches new data either every second, every 5 seconds, every minute, or every 5 minutes.",
            icon: IconNumber1,
            image: "screenshot-workflow-rt-skeleton"
        }, {
            title: "Set up a store",
            description: "Connect a store from one of our integrations, or use the workflow API to stream data into a custom store. This is where your raw data will be stored. By the way, you can connect stores from workflow directly to refinery.",
            icon: IconNumber2,
            image: "screenshot-workflow-store"
        }, {
            title: "Connect a model from gates",
            description: "If you have set up a model in refinery and activated it in gates, it is now useable in workflow.",
            icon: IconNumber3,
            image: "screenshot-workflow-gates"
        }, {
            title: "Finish your workflow",
            description: "Finally, you can finish the skeleton of your workflow and connect your stores and model to the pipeline. If you run into errors, you can just reset the pipeline and start over. When you're done, you can publish your workflow.",
            icon: IconNumber4,
            image: "screenshot-workflow"
        }],
        useCases: [{
            title: 'Email channels',
            slug: 'email-channels',
            description: 'An abundance of messages are sent via email every day. Use refinery to extract insights from your emails and automate your workflows.',
            icon: IconMessage,
        }, {
            title: 'Webscraping',
            slug: 'webscraping',
            description: 'Handling complex HTML structures can be a pain. Build a simple Python scraper, and use refinery to extract the data you need.',
            icon: IconWorldWww,
        }]
    },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function HowItWorks() {

    const router = useRouter()
    const [selected, setSelected] = useState(options[0])

    return (
        <section className="mx-4 mt-16">
            <div className="mx-auto w-full max-w-5xl sm:px-6 lg:px-8">
                <div className="mt-20 py-8 sm:py-10 ">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                            How it works
                        </h2>
                        <p className="mt-4 max-w-3xl text-lg leading-6 text-gray-300">
                            Find out how you can use our platform for different NLP tasks.
                        </p>
                    </div>
                </div>
                <div className="mt-6 md:m-4 space-y-4 md:p-0 md:grid md:grid-cols-3 md:gap-4">
                    {options.map((option) => (
                        <div
                            key={option.title}
                            className="flex flex-col hover:bg-neutral-900 p-4 rounded-lg cursor-pointer"
                            onClick={() => setSelected(option)}
                        >
                            <div className={classNames(
                                selected.title === option.title ? 'border-lime-500 text-lime-500' : 'border-gray-800 text-white',
                                "flex items-center justify-center h-12 w-12 rounded-md border  bg-gradient-to-b from-neutral-900 to-neutral-800"
                            )}>
                                <option.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="mt-5">
                                <h3 className="text-lg leading-6 font-medium text-gray-100">{option.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-gray-300">{option.description}</p>
                            </div>
                            <ul>
                                {option.useCases.map((useCase) => (
                                    <li key={useCase.title}
                                        className="mt-2 text-sm leading-6 text-gray-300  hover:text-green-500"
                                        onClick={() => {
                                            router.push(`/#${useCase.slug}`)
                                        }}
                                    >
                                        <IconChevronRight className="inline-block h-4 w-4 text-gray-300" aria-hidden="true" />
                                        See "{useCase.title}"
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="hidden lg:block mt-12 mx-auto w-full max-w-6xl rounded-2xl border border-neutral-700 bg-neutral-900"
            >
                <div className="relative overflow-hidden pb-28 space-y-20">
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
                    {selected.steps.map((step, stepIdx) => (
                        <div className="relative" key={stepIdx} >
                            <div className="flex mx-8 lg:grid lg:grid-cols-7 lg:gap-8 lg:items-center">
                                <div className={classNames(
                                    stepIdx % 2 === 0 ? 'order-last' : null,
                                    "col-span-4"
                                )}>
                                    <img
                                        className="w-full rounded-xl shadow-xl ring-1 ring-gray-700
                                        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                                        src={`/${step.image}.png`}
                                        alt={step.title}
                                    />
                                </div>
                                <div className="col-span-3 mx-4">
                                    <div>
                                        <div>
                                            <span className="p-1 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 border border-gray-700">
                                                <step.icon className="h-5 w-5 text-lime-500" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="mt-6">
                                            <h2 className="text-xl font-bold tracking-tight text-gray-100">
                                                {step.title}
                                            </h2>
                                            <p className="mt-4 text-sm text-gray-500">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}