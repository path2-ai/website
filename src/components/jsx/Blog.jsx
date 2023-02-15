import { articles } from "@/pages/company/blog/overview"
import Link from "next/link"

export function Blog() {

    const featuredArticle = articles[0]

    return (
        <div className="mx-4">
            <section className="mt-16 mx-auto w-full max-w-5xl sm:px-6 lg:px-8">
                {articles && (
                    <div className="relative">
                        <div className="relative mx-auto max-w-7xl">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                                    From our blog
                                </h2>
                                <div className="mt-3 text-xl text-gray-300 sm:mt-4">
                                    Updates from the team, and insights into the world of data-centric natural language processing.
                                </div>
                            </div>

                            {/* featured post */}
                            <div
                                className="mt-12 max-w-lg mx-auto lg:max-w-none"
                            >
                                <a
                                    href={`https://blog.kern.ai/${featuredArticle.slug}`}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <div className="p-4 grid md:grid-cols-2 gap-8 border rounded-2xl bg-neutral-900 border-gray-800 hover:bg-neutral-800 hover:border-gray-700 transition duration-300 ease-in-out">
                                        <div className="md:pt-12 md:px-12 md:pb-10 flex flex-col items-center">
                                            <img className="rounded-lg object-cover" src={featuredArticle.thumbnail} alt={featuredArticle.title} />
                                            <p className="mt-2 text-gray-400 text-xs italic">"{featuredArticle.prompt}"</p>
                                            <p className="text-gray-400 text-xs italic">(This image was generated via Stable Diffusion)</p>
                                        </div>
                                        <div className="md:py-12 md:mr-12 flex flex-col">
                                            <div className="md:mt-16 flex flex-col md:flex-row md:items-center justify-between">
                                                <div className="text-gray-400 text-sm">
                                                    {featuredArticle.category}
                                                </div>
                                                <div className="mt-2 md:mt-0 text-sm flex space-x-2.5">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src={featuredArticle.author.image}
                                                    />
                                                    <span className="text-white">{featuredArticle.author.name}</span>
                                                    <span className="text-white">|</span>
                                                    <span className="text-gray-300"> {featuredArticle.date}</span>
                                                </div>
                                            </div>
                                            <h2 className="mt-4 font-semibold text-white text-lg md:text-4xl">
                                                {featuredArticle.title}
                                            </h2>
                                            <p className="mt-4 text-gray-200">
                                                {featuredArticle.description}
                                            </p>

                                        </div>
                                    </div>

                                    <div className="p-2 mt-4 text-gray-400">
                                        {featuredArticle.teaser}
                                    </div>

                                </a>
                            </div>

                            {/* other posts */}
                            <div className="mx-auto py-16 md:mt-24 grid max-w-lg gap-16 lg:max-w-none lg:grid-cols-2">
                                {articles.slice(1).map((post) => (
                                    <a
                                        key={post.title}
                                        href={`https://blog.kern.ai//${post.slug}`}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <div className="p-4 md:p-8 gap-8 border rounded-2xl bg-neutral-900 border-gray-800 hover:bg-neutral-800 hover:border-gray-700 transition duration-300 ease-in-out">
                                            <div className="flex flex-col">
                                                <div className="flex flex-col justify-start">
                                                    <div className="flex flex-col items-center">
                                                        <img className="rounded-lg object-cover" src={post.thumbnail} alt={post.title} />
                                                        <p className="mt-2 text-gray-400 text-xs italic">"{post.prompt}"</p>
                                                    </div>
                                                    <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between">
                                                        <div className="text-gray-400 text-sm">
                                                            {post.category}
                                                        </div>
                                                        <div className="mt-2 text-sm flex flex-row items-center space-x-2.5">
                                                            <img
                                                                className="h-6 w-6 md:h-4 md:w-4 rounded-full"
                                                                src={post.author.image}
                                                            />
                                                            <span className="text-white">{post.author.name}</span>
                                                            <span className="text-white">|</span>
                                                            <span className="text-gray-300"> {post.date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h2 className="mt-3 font-semibold text-white text-lg md:text-xl">
                                                    {post.title}
                                                </h2>
                                                <p className="mt-2 text-gray-200">
                                                    {post.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="p-2 mt-4 text-gray-400">
                                            {post.teaser}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <p className="mt-8 text-center text-base text-gray-400">
                    We generated the blog post images using <a href="https://github.com/Stability-AI/stablediffusion" target="_blank" rel="noreferrer noopener" className="text-gray-100 underline hover:text-green-500">Stable Diffusion</a>.
                </p>
            </section>
        </div>
    )
}