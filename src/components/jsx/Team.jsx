import { IconBrain } from "@tabler/icons";
import { KERN_ASSETS_URL } from "./_settings";
import { positions } from './Careers';
import Link from "next/link";
import { useState, useEffect } from 'react';

export function Team() {

    const [gitHubStarsRefinery, setGitHubStarsRefinery] = useState(0);
    const [gitHubStarsBricks, setGitHubStarsBricks] = useState(0);


    useEffect(() => {
        fetch('https://api.github.com/repos/code-kern-ai/refinery')
            .then(response => response.json())
            .then(data => setGitHubStarsRefinery(data.stargazers_count));

        fetch('https://api.github.com/repos/code-kern-ai/bricks')
            .then(response => response.json())
            .then(data => setGitHubStarsBricks(data.stargazers_count));
    }, []);

    return (
        <div className="mx-4">
            <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="mt-20 py-8 sm:py-10">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-100">
                            How we view <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600">
                                <IconBrain className="inline-block text-lime-300 pb-4 h-16 w-16" />
                                artificial intelligence
                            </span>
                        </h2>
                        <p className="mt-2 text-sm leading-5 text-gray-300">
                            The rise of artificial intelligence is one of the most important developments of our time. We believe that its biggest impact will be felt in the field of natural language processing, enabling new ways of interaction between humans and machines. It will impact how we search for information, how we get creative about new content, and ultimately how we get things done.
                        </p>
                        <p className="mt-2 text-sm leading-5 text-gray-300">
                            As large language models are becoming more and more powerful, we further believe that the next step is to make them more data-centric. This gives developers and scientists the superpower to control and shape the models to their needs. And for this to happen, data must finally be the first-class citizen in the world of NLP.
                        </p>
                        <div className="mt-10">
                            <div
                                className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600"
                            >Our mission
                            </div> {' '}
                            <div className="text-gray-300 -sm mt-2">
                                Help you succeed in one of the most fascinating technology innovations of our time.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-8 pt-28 text-white mx-auto md:grid md:grid-cols-5 md:gap-8">

                    <div className="col-span-2 mt-auto">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-100">
                            Our team
                        </h2>
                        <p className="mt-2 text-sm leading-5 text-gray-300">
                            We are a rather small team, focusing on how modern natural language processing can shift how we view and interact with data.
                        </p>
                        <p className="mt-2 text-sm leading-5 text-gray-300">
                            Our work is based on very simple principals. When we built software, we think of the endusers first, and how we can help them to not only get their work done, but to do it in a way that sparks their creativity and curiosity.
                        </p>
                        <p className="mt-2 text-sm leading-5 text-gray-300">
                            Also, we see our product as more than a user interface attached to some backend. We believe that the product starts with the client's problem, and so we will always try to understand the problem first, and then see how we can help to solve it.
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0 col-span-3 mx-auto border border-gray-700 rounded-lg p-3 pb-10 bg-neutral-800 shadow-[0_0px_10px_2px_rgba(255,255,255,0.2)]">
                        <img
                            src="/team.png"
                            alt="Team"
                            className="rounded-md"
                        />
                        <p className='text-gray-300 text-xs'>
                            On a hot summer day in 2022
                        </p>
                    </div>
                </div>

                <div className="py-8 pt-28 text-white mx-auto md:grid md:grid-cols-5 md:gap-8">

                    <div className="col-span-2 mt-auto">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-100">
                            Our founders
                        </h2>
                        <h3 className="text-lg font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-600">
                            are here to help you succeed with NLP
                        </h3>
                        <p className="mt-2 text-sm leading-5 text-gray-300">
                            Henrik and Johannes started Kern AI during their master's degree at <a
                                href="https://hpi.de/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-500 hover:text-green-600"
                            >Hasso Plattner Institute</a>, where they worked on modern natural language processing research. After having started a consultancy together in early 2020, they decided to build Kern AI as the data-centric developer platform for natural language processing to help companies turn their unstructured text into value.
                        </p>
                    </div>
                    <div className="mt-10 md:mt-0 col-span-3 grid md:grid-cols-2 gap-10 md:gap-20 mx-auto">
                        <div>
                            <img
                                src="/team/team-johannes.png"
                                alt="Johannes Hötter"
                                className="rounded-md h-40 w-40"
                            />
                            <a
                                className='mt-1 text-sm text-gray-300 font-semibold'
                                href="https://www.linkedin.com/in/johannesh%C3%B6tter/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Johannes Hötter
                            </a>
                            <p className='text-gray-300 text-xs'>
                                Co-founder & CEO
                            </p>
                            <a
                                href="https://cal.com/jhoetter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-green-500 hover:text-green-600"
                            >
                                Book a call with Johannes
                            </a>
                        </div>
                        <div>
                            <img
                                src="/team/team-henrik.png"
                                alt="Henrik Wenck"
                                className="rounded-md h-40 w-40"
                            />
                            <a
                                className='mt-1 text-sm text-gray-300 font-semibold'
                                href="https://www.linkedin.com/in/henrikwenck/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Henrik Wenck
                            </a>
                            <p className='text-gray-300 text-xs'>
                                Co-founder & COO
                            </p>
                        </div>
                    </div>
                </div>

                <div className="py-8 pt-28 text-white mx-auto md:grid md:grid-cols-5 md:gap-8">

                    <div className="col-span-2 mb-auto">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-100">
                            Our investors
                        </h2>
                        <p className="mt-2 text-sm leading-5 text-gray-300">
                            We are backed by leading investors in Europe.
                        </p>
                        <p className="mt-2 text-sm leading-5 text-gray-300">
                            If you are an investor (business angel or institutional) interested in speaking with our co-founder <a
                                href="https://www.linkedin.com/in/johannesh%C3%B6tter/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-500"
                            >Johannes</a>, please book a slot in the <a href="https://cal.com/jhoetter" target="_blank" rel="noopener noreferrer" className="text-green-500">calendar</a>.
                        </p>

                    </div>
                    <div className="mt-4 md:mt-0 col-span-3 mx-auto p-3">
                        <div className="grid grid-cols-3 gap-8">
                            <img src="/investors/seedcamp.png" className="w-44 mr-auto my-auto" />
                            <img src="/investors/another-vc.png" className="w-40 mr-auto my-auto" />
                            <img src="/investors/xdeck.png" className="w-28 mr-auto my-auto" />

                            <img src="/investors/faber.png" className="w-20 mr-auto my-auto" />
                            <img src="/investors/hpi-seed.png" className="w-16 mr-auto my-auto" />
                        </div>
                        <div className="mt-10">
                            <div className="grid grid-cols-3 gap-8">
                                <div>
                                    <p className='text-gray-100 text-semibold'>
                                        Nicolas Peters
                                    </p>
                                    <p className='text-gray-300 text-xs'>
                                        Co-Founder & Ex-CTO Signavio
                                    </p>
                                </div>
                                <div>
                                    <p className='text-gray-100 text-semibold'>
                                        Gerrit de Veer
                                    </p>
                                    <p className='text-gray-300 text-xs'>
                                        Senior Vice President Sales MEE Signavio
                                    </p>
                                </div>
                                <div>
                                    <p className='text-gray-100 text-semibold'>
                                        Marcus Nagel
                                    </p>
                                    <p className='text-gray-300 text-xs'>
                                        Ex-CEO Zurich Deutschland, Senior Advisor PE
                                    </p>
                                </div>
                                <div>
                                    <p className='text-gray-100 text-semibold'>
                                        Sebastian Heinz
                                    </p>
                                    <p className='text-gray-300 text-xs'>
                                        CEO statworx
                                    </p>
                                </div>
                                <div>
                                    <p className='text-gray-100 text-semibold'>
                                        Julius Heinz
                                    </p>
                                    <p className='text-gray-300 text-xs'>
                                        CFO statworx
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto py-16 sm:py-24">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-100">
                            Some numbers and the story so far
                        </h2>
                        <div className="mt-8 space-y-10">
                            <div className="flex flex-col md:items-center md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                                <div className="flex justify-center items-center h-28 w-28 text-3xl font-semibold text-white rounded-xl bg-neutral-900 border border-gray-700">
                                    €2.7M
                                </div>
                                <div className="w-fit text-sm my-auto text-gray-300">
                                    We raised 2,700,000€ venture capital in our seed round from leading investors in Europe.
                                </div>
                            </div>
                            <div className="flex flex-col md:items-center md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                                <div className="flex justify-center items-center h-28 w-32 text-3xl font-semibold text-white rounded-xl bg-neutral-900 border border-gray-700">
                                    2020
                                </div>
                                <div className="w-fit text-sm my-auto text-gray-300">
                                    Was the year we started Kern AI. Initially, we started as a consulting companies, and helped our clients to build their first AI models. We quickly realized that there was a need for a better way to build and manage especially the training data for these models. So we started to build refinery, our first product. After seeing its impact, we turned into a software company, and fully committed to building the best tools for NLP.
                                </div>
                            </div>
                            <div className="flex flex-col md:items-center md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                                <div className="flex justify-center items-center h-28 w-32 text-3xl font-semibold text-white rounded-xl bg-neutral-900 border border-gray-700">
                                    11
                                </div>
                                <div className="w-fit text-sm my-auto text-gray-300">
                                    People are working at Kern AI. We are a small team, but we know how to work together efficiently, how to communicate, and how to get things done.
                                </div>
                            </div>
                            <div className="flex flex-col md:items-center md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                                <div className="flex justify-center items-center h-28 w-32 text-3xl font-semibold text-white rounded-xl bg-neutral-900 border border-gray-700">
                                    {positions.length}
                                </div>
                                <div className="w-fit text-sm my-auto text-gray-300">
                                    Open positions are currently available at Kern AI. We are always looking for new team members, so if you are interested, please check out our <Link href="/company/careers"><span className="text-lime-300">careers page</span></Link>.
                                </div>
                            </div>
                            <div className="flex flex-col md:items-center md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                                <div className="flex justify-center items-center h-28 w-32 text-3xl font-semibold text-white rounded-xl bg-neutral-900 border border-gray-700">
                                    {(gitHubStarsRefinery + gitHubStarsBricks).toLocaleString()}
                                </div>
                                <div className="w-fit text-sm my-auto text-gray-300">
                                    GitHub stars are currently attributed to our two open-source projects, {' '}
                                    <a
                                        href="https://github.com/code-kern-ai/refinery"
                                        target="_blank"
                                        className="text-lime-300"
                                    >
                                        refinery
                                    </a>{' '} ({gitHubStarsRefinery.toLocaleString()} stars) and {' '}
                                    <a
                                        href="https://github.com/code-kern-ai/bricks"
                                        target="_blank"
                                        className="text-lime-300"
                                    >
                                        bricks
                                    </a> {' '} ({gitHubStarsBricks.toLocaleString()} stars). We are very proud of these projects, and we are happy to see that they are used by so many people.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}
