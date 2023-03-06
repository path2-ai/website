import { IconArrowRight, IconMoon, IconSun } from "@tabler/icons";
import Link from "next/link";
import { useState } from "react";

export function LeanNLPCanvas() {

    const [showLightVersion, setShowLightVersion] = useState(false)

    return (
        <section className='max-w-5xl mx-auto py-32'>
            <h1 className='text-5xl font-bold text-center text-white'>Lean NLP Canvas</h1>
            <p className='mt-4 text-center text-gray-300'>A simple tool to help you get plan your next NLP use case</p>
            <div className="my-10">
                <Link
                    href={
                        showLightVersion ? "/file/lean_nlp_canvas_light.pdf" : "/file/lean_nlp_canvas.pdf"
                    }
                    download
                >
                    <img src={
                        showLightVersion ? "/lean-nlp-canvas-light.png" : "/lean-nlp-canvas.png"
                    } alt="Lean NLP Canvas" className="mx-auto" />
                </Link>
                <div className="mt-2 flex flex-row items-center justify-between">
                    <p className='text-center text-gray-300'>Click on the image to download the PDF</p>
                    <div className="flex flex-row items-center space-x-2">
                        <span className="text-gray-300">
                            Show {showLightVersion ? 'dark' : 'light'} version
                        </span>
                        <button
                            className='flex flex-row items-center justify-center bg-neutral-900 border border-neutral-800 rounded-full p-2 hover:bg-neutral-800'
                            onClick={() => setShowLightVersion(!showLightVersion)}
                        >
                            {showLightVersion ? <IconSun className='text-yellow-400' /> : <IconMoon className='text-blue-600' />}
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col space-y-16">
                <div>
                    <h2 className='text-2xl font-bold text-white'>Who is this for?</h2>
                    <p className='text-gray-300 mt-2'>
                        The canvas is designed for people involved in planning use cases for natural language processing in their company. This can be directors, process owners, domain experts or anyone else who is responsible for the success of a project.
                    </p>
                </div>

                <div>
                    <h2 className='text-2xl font-bold text-white'>What makes the Lean NLP Canvas special?</h2>
                    <p className='text-gray-300 mt-2'>
                        It is simple. That makes the canvas powerful. Of course, there are further questions to dive into, but the canvas is meant as a tool to help you plan and communicate quickly.
                    </p>
                </div>

                <div className="m-2 grid grid-cols-2 gap-8">
                    <img src="/lean-nlp-canvas-email-intelligence.png" alt="Lean NLP Canvas" className="mx-auto" />
                    <div className="mt-auto">
                        <h2 className='text-2xl font-bold text-white'>Example: email intelligence</h2>

                        <p className="mt-6 text-gray-300">
                            In this canvas, we dive into the info@-inbox that every company has. We want to turn it from an unloved tool into a powerful communications channel with lots of potential for automation.
                        </p>
                        <div className='mt-2'>
                            <Link
                                href="/file/lean_nlp_canvas_email_intelligence.pdf" download
                                className='flex flex-row items-center space-x-2 group text-gray-200 hover:text-white'>
                                <IconArrowRight className='h-5 w-5 text-gray-200 group-hover:text-white group-hover:rotate-90 transition-transform duration-300 ease-in-out' />
                                <span>
                                    Download canvas
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="m-2 grid grid-cols-2 gap-8">
                    <div className="mt-auto">
                        <h2 className='text-2xl font-bold text-white'>Example: content generation</h2>

                        <p className="mt-6 text-gray-300">
                            In this canvas, we dive into call centers. A forefront of customer services, but also a place with lots of opportunities for automation. We show how voice-to-text in combination with NLP can help you gain deeper insights and help in operations.
                        </p>
                        <div className='mt-2'>
                            <Link
                                href="/file/lean_nlp_canvas_email_intelligence.pdf" download
                                className='flex flex-row items-center space-x-2 group text-gray-200 hover:text-white'>
                                <IconArrowRight className='h-5 w-5 text-gray-200 group-hover:text-white group-hover:rotate-90 transition-transform duration-300 ease-in-out' />
                                <span>
                                    Download canvas
                                </span>
                            </Link>
                        </div>
                    </div>
                    <img src="/lean-nlp-canvas-email-intelligence.png" alt="Lean NLP Canvas" className="mx-auto" />

                </div>

                <div>
                    <h2 className='text-2xl font-bold text-white'>A few notes on the canvas</h2>
                    <div className="mt-4 text-gray-300">
                        <ul className="mt-4 list-disc list-inside">
                            <li>The canvas aims to bridge strategical and technical questions. Use it with the level of granularity you think makes sense; that is, if you want to add a KPI to the value proposition, do that.</li>
                            <li>Your canvas will be iterative. Don't aim for perfection right away.</li>
                            <li>Try to understand which challenges could come when you use the canvas.</li>
                            <li>The canvas is a tool. Not your answer. The relevant part is what happens when you work with it. It helps you gain an overview of questions that are relevant to ask, and potential obstacles.</li>
                        </ul>
                        <p className="mt-4 text-gray-300">
                            If you need help filling out the canvas, or if you have any questions, feel free to reach out to us.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}
