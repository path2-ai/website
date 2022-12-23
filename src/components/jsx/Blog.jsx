import { articles } from "@/pages/company/blog/overview"

export function Blog() {

    const featuredArticle = articles[0]

    return (
        <section className="mt-32 mx-auto w-full max-w-5xl sm:px-6 lg:px-8">
            {articles && (
                <div className="relative">
                    <div className="relative mx-auto max-w-7xl">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                                From the blog
                            </h2>
                            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                                Updates from the team, and insights into the world of data-centric natural language processing.
                            </p>
                        </div>

                        {/* featured post */}
                        <div
                            className="mt-12 max-w-lg mx-auto lg:max-w-none"
                        >
                            <a href={`blog/${featuredArticle.slug}`}>
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
                            </a>
                        </div>

                        {/* other posts */}
                        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                            {articles.slice(1).map((post) => (
                                <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                    <div className="flex-shrink-0">
                                        <img className="h-48 w-full object-cover" src={post.thumbnail} alt="" />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-indigo-600">
                                                <a className="hover:underline">
                                                    {post.category}
                                                </a>
                                            </p>
                                            <a href={`blog/${post.slug}`} className="mt-2 block">
                                                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                                <p className="mt-3 text-base text-gray-500">{post.teaser}</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}