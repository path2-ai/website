import { useState, useEffect } from "react"


const integrations = [
    {
        name: "OpenAI",
        image: "openai",
        highlightE: true,
    },
    {
        name: "GSheet",
        image: "gsheet",
        highlightE: true,

    },
    {
        name: "Webhook",
        image: "webhook",
        highlightE: true,
    },
    {
        name: "Slack",
        image: "slack",
        highlightT: true,
    },
    {
        name: "S3",
        image: "s3",
        highlightT: true,
    },
    {
        name: "Twitter",
        image: "twitter",
        highlightT: true,
    },
    {
        name: "Hubspot",
        image: "hubspot",
        highlightL: true,
    },
    {
        name: "Webflow",
        image: "webflow",
    },
    {
        name: "Zapier",
        image: "zapier",
    },
    {
        name: "Discord",
        image: "discord",
        highlightE: true,
    },
    {
        name: "Gmail",
        image: "gmail",
    },
    {
        name: "Airtable",
        image: "airtable",
    },
    {
        name: "SurveyMonkey",
        image: "surveymonkey",
    },
    {
        name: "OpenAI",
        image: "openai",
        highlightT: true,
    },
    {
        name: "Excel",
        image: "excel",
    },
    {
        name: "Intercom",
        image: "intercom",
        highlightL: true,
    },
    {
        name: "Hugging Face",
        image: "huggingface",
    },
    {
        name: "Excel",
        image: "excel",
    },
    {
        name: "GMail",
        image: "gmail",
        highlightE: true,
    },
    {
        name: "GSheet",
        image: "gsheet",
        highlightE: true,
    },
    {
        name: "Webhook",
        image: "webhook",
        highlightE: true,
    },
    {
        name: "Slack",
        image: "slack",
    },
    {
        name: "S3",
        image: "s3",
        highlightT: true,
    },
    {
        name: "Outlook",
        image: "outlook",
    },
    {
        name: "Hubspot",
        image: "hubspot",
        highlightL: true,
    },
    {
        name: "Webflow",
        image: "webflow",
    },
    {
        name: "Zapier",
        image: "zapier",
    },
    {
        name: "Slack",
        image: "slack",
        highlightE: true,
    },
    {
        name: "Outlook",
        image: "outlook",
    },
    {
        name: "Zapier",
        image: "zapier",
    },
    {
        name: "SurveyMonkey",
        image: "surveymonkey",
    },
    {
        name: "Airtable",
        image: "airtable",
        highlightT: true,
    },
    {
        name: "Excel",
        image: "excel",
    },
    {
        name: "Intercom",
        image: "intercom",
        highlightL: true,
    },
    {
        name: "Hugging Face",
        image: "huggingface",
    },
    {
        name: "OpenAI",
        image: "openai",
    },
    {
        name: "Excel",
        image: "excel",
        highlightE: true,
    },
    {
        name: "Intercom",
        image: "intercom",
        highlightE: true,
    },
    {
        name: "Hugging Face",
        image: "huggingface",
        highlightE: true,
    },
    {
        name: "Excel",
        image: "excel",
    },
    {
        name: "GMail",
        image: "gmail",
        highlightT: true,
    },
    {
        name: "GSheet",
        image: "gsheet",
    },
    {
        name: "Zapier",
        image: "zapier",
        highlightL: true,
    },
    {
        name: "Discord",
        image: "discord",
        highlightL: true,
    },
    {
        name: "Gmail",
        image: "gmail",
        highlightL: true,
    },
]

import { WORKFLOW_ASSETS_URL } from "./_settings"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function IntegrationsBanner() {

    const [currentHighlighted, setCurrentHighlighted] = useState("E")

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHighlighted(currentHighlighted => {
                if (currentHighlighted == "E") {
                    return "T"
                } else if (currentHighlighted == "T") {
                    return "L"
                } else {
                    return "E"
                }
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [])


    return (
        <div>
            <main className="">
                <div className="relative px-6 max-w-5xl mx-auto lg:px-8">
                    <div className="opacity-0 opacity-20 opacity-40 opacity-60 opacity-80 opacity-100" /> {/* This is a hack to get the opacity classes to work */}
                    <div className="grid grid-cols-9 gap-4 absolute mt-16 inset-0">
                        {integrations.map((integration, index) => (
                            <div key={index} className={classNames(
                                "mx-auto w-fit h-fit p-6 rounded-2xl ring-1 ring-gray-500 shadow-[0_0px_20px_2px_rgba(255,255,255,0.1)]",
                                (index % 9 == 4) ? (
                                    'opacity-100'
                                ) : (
                                    index % 9 > 4 ? (
                                        `opacity-${100 - Math.round((index % 9 / 5 + (1 / 5)) * 100) % 100}`
                                    ) : (
                                        `opacity-${Math.round((index % 9 / 5 + (1 / 5)) * 100) % 100}`
                                    )
                                ),
                                ((currentHighlighted == "E" && integration.highlightE) ? (
                                    "bg-yellow-800 border border-yellow-500"
                                ) : (currentHighlighted == "T" && integration.highlightT) ? (
                                    "bg-blue-800 border border-blue-500"
                                ) : (currentHighlighted == "L" && integration.highlightL) ? (
                                    "bg-green-800 border border-green-500"
                                ) : (
                                    "bg-gradient-to-r from-gray-800 to-neutral-800"
                                ))
                            )}>
                                <img
                                    className="mx-auto animate-pulse"
                                    src={`${WORKFLOW_ASSETS_URL}/icons/${integration.image}.png`}
                                    alt=""
                                    width="48"
                                />
                            </div>
                        )
                        )}
                    </div>
                    <div>
                        <div className="absolute inset-0 bg-gradient-radial from-black via-neutral-900 to-transparent opacity-[.55]" />
                        <div className="py-64 relative mx-auto rounded-2xl w-fit justify-center">
                        </div>
                    </div>
                </div>
            </main >
            <div className="pt-32 relative mx-auto rounded-2xl w-fit justify-center">
                <h1 className="flex text-4xl font-semibold text-gray-300">

                </h1>
                <div className="mt-10 flex flex-col text-gray-300">
                    <div className="text-lg flex flex-col mx-auto items-center">
                        <div>Create pipelines for your natural language.</div>
                        <div>Choose from the below extractors, transformers, and loaders.</div>
                    </div>
                </div>
            </div>
        </div >
    )
}
