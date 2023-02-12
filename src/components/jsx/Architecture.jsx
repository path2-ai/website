import Link from "next/link"

const siloData = [
    {
        product: 'refinery',
        title: 'the heart of the platform',
        description: 'This is the flagship of our NLP stack. refinery is both database and the application logic editor; it allows you to scale, assess and maintain your data. It automates the process of data cleaning and labeling, and shows you where improvements can be made. It also allows you to easily work together with inhouse or external annotators, and leverages the power of large language models to help you with your data.',
        link: '/docs/refinery',
        imageOnRighternSide: false,
    },
    {
        product: 'bricks',
        title: 'the fuel of the platform',
        description: 'Our overall platform runs on plenty of natural language processing automations, which can be defined by the user. Now, the use cases our users face have different challenges, and require different automations. This is why we have implemented bricks: a collection of open-source and modular automations that can be stacked together, enabling users to customize the platform to their use cases with ease.',
        link: '/docs/bricks',
        imageOnRighternSide: true,
    },
    {
        product: 'gates',
        title: 'enabling realtime processing',
        description: 'gates simply is the add-on to refinery, allowing it to process realtime data streams. With gates, you can use refinery to make predictions on data immediately, and use the results to make operational decisions.',
        link: '/docs/gates',
        imageOnRighternSide: false,
    },
    {
        product: 'workflow',
        title: 'the orchestrator of the platform',
        description: 'workflow is the glue of the platform, allowing you to define ETL-like pipelines that can understand natural language. For instance, you can use workflow to grab data from a 3rd party API, put it through refinery/gates, and then use the results in any further step of the pipeline.',
        link: '/docs/workflow',
        imageOnRighternSide: true,
    },
]

function SiloImage({ product }) {
    return (
        <div className="mx-auto">
            <img src="/silhouette-activation.svg" alt={`rings-${product}`} className="absolute animate-pulse" />
            <img src="/silhouette.svg" alt={`silhouette-${product}`} className="absolute opacity-50" />
            <img src="/shadow.svg" alt={`shadow-${product}`} className="absolute" />
            <img src={`/${product}.svg`} alt={product} className="relative animate-pulse " />
        </div>
    )
}

function SiloText({ product, title, description, fromColor, toColor, link }) {
    return (
        <div className="m-auto">
            <h2 className="font-semibold text-xl">
                {product == 'bricks' && (
                    <span className={`font-mono text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500`}>{product}</span>
                )}
                {product == 'refinery' && (
                    <span className={`font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500`}>{product}</span>
                )}
                {product == 'gates' && (
                    <span className={`font-mono text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500`}>{product}</span>
                )}
                {product == 'workflow' && (
                    <span className={`font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500`}>{product}</span>
                )}
                : {title}
            </h2>
            <div className="mt-2">
                {description}
            </div>
            <div className="mt-6 inline-flex">
                <Link
                    href={link}
                    className="hover:bg-neutral-800 bg-neutral-900 inline-block rounded-lg px-4 py-2 text-base font-semibold leading-6 shadow-sm ring-1 ring-inset ring-white/10 group-hover:ring-white/20"
                >
                    <span className={`my-auto text-white`}>
                        See {product} docs
                    </span>
                </Link>
            </div>
        </div>
    )
}

function Silo({ product, title, description, fromColor, toColor, link, imageOnRighternSide }) {
    return (
        <div>
            <div className="hidden md:block">
                {imageOnRighternSide ? (
                    <div className="grid grid-cols-2 gap-10">
                        <SiloText product={product} title={title} description={description} fromColor={fromColor} toColor={toColor} link={link} />
                        <SiloImage product={product} />
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-10">
                        <SiloImage product={product} />
                        <SiloText product={product} title={title} description={description} fromColor={fromColor} toColor={toColor} link={link} />
                    </div>
                )}
            </div>
            <div className="md:hidden flex flex-col justify-center">
                <SiloImage product={product} />
                <SiloText product={product} title={title} description={description} fromColor={fromColor} toColor={toColor} link={link} />
            </div>
        </div>
    )
}

export function Architecture() {
    return (
        <section className="my-32 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <h1 className="flex justify-center text-4xl font-semibold items-center text-gray-300">
                <span>See what the platform looks like <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">under the hood.</span></span>
            </h1>
            <div className="flex md:justify-center mt-4 text-gray-200">
                A brief technical overview
            </div>
            <div className="mt-32 text-gray-400 space-y-20">
                {siloData.map((silo) => (
                    <Silo key={silo.product} {...silo} />
                ))}
            </div>
        </section>
    )
}
