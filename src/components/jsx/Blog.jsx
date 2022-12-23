import { articles } from "@/pages/company/blog/overview"
import Link from "next/link"

export function Blog() {

    const featuredArticle = articles[0]

    return (
        <section className="mt-16 mx-auto w-full max-w-5xl sm:px-6 lg:px-8">
            {articles && (
                <div className="relative">
                    <div className="relative mx-auto max-w-7xl">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                                From the blog
                            </h2>
                            <div className="mt-3 text-xl text-gray-500 sm:mt-4">
                                Updates from the team, and insights into the world of data-centric natural language processing.
                            </div>
                        </div>

                        {/* featured post */}
                        <div
                            className="mt-12 max-w-lg mx-auto lg:max-w-none"
                        >
                            <Link href={`blog/${featuredArticle.slug}`}>
                                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                    <img className="object-cover" src={featuredArticle.thumbnail} alt={featuredArticle.title} />
                                </div>
                                <div className="mt-2 text-gray-600 text-sm">
                                    {featuredArticle.category}
                                </div>
                                <h2 className="mt-4 font-semibold text-white text-2xl">
                                    {featuredArticle.title}
                                </h2>
                                <div className="mt-4 text-gray-200">
                                    {featuredArticle.teaser}
                                </div>
                                <div className="mt-4 text-sm flex space-x-2.5">
                                    <img
                                        className="h-6 w-6 rounded-full"
                                        src={featuredArticle.author.image}
                                    />
                                    <span className="text-white">{featuredArticle.author.name}</span>
                                    <span className="text-white">|</span>
                                    <span className="text-gray-500"> {featuredArticle.date}</span>
                                </div>
                            </Link>
                        </div>

                        {/* other posts */}
                        <div className="mx-auto mt-24 grid max-w-lg gap-16 lg:max-w-none lg:grid-cols-2">
                            {articles.slice(1).map((post) => (
                                <Link
                                    key={post.title}
                                    href={`blog/${post.slug}`}
                                >
                                    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <img className="object-cover" src={post.thumbnail} alt={post.title} />
                                    </div>
                                    <div className="mt-2 text-gray-600 text-sm">
                                        {post.category}
                                    </div>
                                    <h2 className="mt-4 font-semibold text-white text-2xl">
                                        {post.title}
                                    </h2>
                                    <div className="mt-4 text-gray-200">
                                        {post.teaser}
                                    </div>
                                    <div className="mt-4 text-sm flex space-x-2.5">
                                        <img
                                            className="h-6 w-6 rounded-full"
                                            src={post.author.image}
                                        />
                                        <span className="text-white">{post.author.name}</span>
                                        <span className="text-white">|</span>
                                        <span className="text-gray-500"> {post.date}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}