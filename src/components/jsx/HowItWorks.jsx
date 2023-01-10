import { useState } from "react"
import { IconCode, IconDashboard, IconLoader, IconNumber1, IconNumber2, IconNumber3, IconNumber4, IconNumber5, IconPerspective, IconTestPipe } from "@tabler/icons"
import { KERN_ASSETS_URL } from './_settings'

const options = [
    {
        title: "Building products",
        description: "Use refinery to craft the data for your NLP model. Optionally, you can also use the gates API to use refinery automations as your model's inference engine.",
        icon: IconCode,
        steps: [{
            title: "Connect a dataset",
            description: "refinery uses JSON for user-defined inputs. You can choose from a variety of formats to upload your data, e.g. CSV, JSON, or Excel. Alternatively, you can grab data from a mart (e.g. a 3rd-party-integration or database) of the workflow product.",
            icon: IconNumber1,
            image: "screenshot-refinery-data"
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
        },]
    },
    {
        title: "Building ETL pipelines",
        description: "Set up a batch-workflow to automate recurring data tasks. E.g. for internal analytical processes, dashboards, or for keeping your data up-to-date.",
        icon: IconPerspective,
        steps: [{
            title: "Define a skeleton from scratch or use a template",
            description: "First, to understand what you need to configure, set up the basic steps of your workflow. You can either start from scratch or choose a template. A batch-workflow fetches new data either daily, weekly, or monthly.",
            icon: IconNumber1,
            image: "screenshot-batch-skeleton"
        }, {
            title: "Set up a data mart",
            description: "Connect a data mart from one of our integrations, or use the workflow API to stream data into a custom data mart. This is where your raw data will be stored. By the way, you can connect data marts from workflow directly to refinery.",
            icon: IconNumber2,
            image: "screenshot-spreadsheet-mart"
        }, {
            title: "Connect a model from gates",
            description: "If you have set up a model in refinery and activated it in gates, it is now useable in workflow. Simply grab an API token from the refinery project, insert the token, and you have your custom API available.",
            icon: IconNumber3,
            image: "screenshot-model-activation"
        }, {
            title: "Finish your workflow",
            description: "Finally, you can finish the skeleton of your workflow and connect your marts and model to the pipeline. If you run into errors, you can just reset the pipeline and start over. When you're done, you can publish your workflow.",
            icon: IconNumber4,
            image: "screenshot-batch-workflow"
        }]
    }, {
        title: "Building workflows",
        description: "Set up a realtime-workflow to automate operational natural language-driven tasks. E.g. for customer service automations.",
        icon: IconLoader,
        steps: [{
            title: "Define a skeleton from scratch or use a template",
            description: "First, to understand what you need to configure, set up the basic steps of your workflow. You can either start from scratch or choose a template. A realtime-workflow fetches new data either every second, every 5 seconds, every minute, or every 5 minutes.",
            icon: IconNumber1,
            image: "screenshot-realtime-skeleton"
        }, {
            title: "Set up a data mart",
            description: "Connect a data mart from one of our integrations, or use the workflow API to stream data into a custom data mart. This is where your raw data will be stored. By the way, you can connect data marts from workflow directly to refinery.",
            icon: IconNumber2,
            image: "screenshot-spreadsheet-mart"
        }, {
            title: "Connect a model from gates",
            description: "If you have set up a model in refinery and activated it in gates, it is now useable in workflow. Simply grab an API token from the refinery project, insert the token, and you have your custom API available.",
            icon: IconNumber3,
            image: "screenshot-model-activation"
        }, {
            title: "Finish your workflow",
            description: "Finally, you can finish the skeleton of your workflow and connect your marts and model to the pipeline. If you run into errors, you can just reset the pipeline and start over. When you're done, you can publish your workflow.",
            icon: IconNumber4,
            image: "screenshot-realtime-workflow"
        }]
    },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function HowItWorks() {

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
                <div className="mt-6 m-4 md:p-0 md:grid md:grid-cols-3 md:gap-4">
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
                        </div>
                    ))}
                </div>
            </div>

            <div
                className="hidden lg:block mt-12 mx-auto w-full max-w-6xl rounded-2xl border border-neutral-700 bg-neutral-900"
            >
                <div className="relative overflow-hidden py-28 space-y-28">
                    {selected.steps.map((step, stepIdx) => (
                        <div>
                            <div className="flex mx-8 lg:grid lg:grid-cols-7 lg:gap-8 lg:items-center">
                                <div className={classNames(
                                    stepIdx % 2 === 0 ? 'order-last' : null,
                                    "col-span-4"
                                )}>
                                    <img
                                        className="w-full rounded-xl shadow-xl ring-1 ring-gray-700
                                        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                                        src={`${KERN_ASSETS_URL}/screenshots/${step.image}.png`}
                                        alt="Customer profile user interface"
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
                                            <p className="mt-4 text-lg text-gray-500">
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