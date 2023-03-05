import { IconMoon, IconSun } from "@tabler/icons";
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

            {/* example 1 of filled canvas */}
            {/* example 2 of filled canvas */}

            {/* faq, e.g. "who is this for" etc. */}
            {/* extended canvas */}

        </section >
    )
}
