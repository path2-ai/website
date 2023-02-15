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
                                    From the blog
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
                                    <div className="p-4 grid grid-cols-2 gap-8 border rounded-2xl bg-neutral-900 border-gray-800">
                                        <div className="pt-12 px-12 pb-10 flex flex-col items-center">
                                            <img className="rounded-lg object-cover" src={featuredArticle.thumbnail} alt={featuredArticle.title} />
                                            <p className="mt-2 text-gray-400 text-xs italic">"{featuredArticle.prompt}"</p>
                                            <p className="text-gray-400 text-xs italic">(This image was generated via Stable Diffusion)</p>
                                        </div>
                                        <div className="py-12 mr-12 flex flex-col">
                                            <div className="mt-16 flex flex-row items-center justify-between">
                                                <div className="text-gray-400 text-sm">
                                                    {featuredArticle.category}
                                                </div>
                                                <div className="text-sm flex space-x-2.5">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src={featuredArticle.author.image}
                                                    />
                                                    <span className="text-white">{featuredArticle.author.name}</span>
                                                    <span className="text-white">|</span>
                                                    <span className="text-gray-300"> {featuredArticle.date}</span>
                                                </div>
                                            </div>
                                            <h2 className="mt-4 font-semibold text-white text-4xl">
                                                {featuredArticle.title}
                                            </h2>
                                            <p className="mt-4 text-gray-200">
                                                {featuredArticle.description}
                                            </p>

                                        </div>
                                    </div>

                                    <div className="mt-4 text-gray-200">
                                        {featuredArticle.teaser}
                                    </div>

                                </a>
                            </div>

                            {/* other posts */}
                            <div className="mx-auto mt-24 grid max-w-lg gap-16 lg:max-w-none lg:grid-cols-2">
                                {articles.slice(1).map((post) => (
                                    <a
                                        key={post.title}
                                        href={`https://blog.kern.ai//${post.slug}`}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <div className="p-8 gap-8 border rounded-2xl bg-neutral-900 border-gray-800">
                                            <div className="flex flex-col">
                                                <div className="flex flex-col justify-start">
                                                    <div className="flex flex-col items-center">
                                                        <img className="rounded-lg object-cover" src={post.thumbnail} alt={post.title} />
                                                        <p className="mt-2 text-gray-400 text-xs italic">"{post.prompt}"</p>
                                                    </div>
                                                    <div className="mt-4 flex flex-row items-end justify-between">
                                                        <div className="text-gray-400 text-sm">
                                                            {post.category}
                                                        </div>

                                                        <div className="mt-2 text-sm flex flex-row items-center space-x-2.5">
                                                            <img
                                                                className="h-4 w-4 rounded-full"
                                                                src={post.author.image}
                                                            />
                                                            <span className="text-white">{post.author.name}</span>
                                                            <span className="text-white">|</span>
                                                            <span className="text-gray-300"> {post.date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h2 className="mt-3 font-semibold text-white text-xl">
                                                    {post.title}
                                                </h2>
                                                <p className="mt-2 text-gray-200">
                                                    {post.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-4 text-gray-200">
                                            {post.teaser}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}