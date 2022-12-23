import Link from "next/link"

const siloData = [
    {
        product: 'bricks',
        title: 'test',
        description: 'Bricks is a data management platform that allows you to store, organize, and share your data.',
        fromColor: 'green',
        toColor: 'lime',
        link: '/docs/bricks',
        imageOnRighternSide: false,
    },
    {
        product: 'refinery',
        title: 'test',
        description: 'Bricks is a data management platform that allows you to store, organize, and share your data.',
        fromColor: 'green',
        toColor: 'lime',
        link: '/docs/refinery',
        imageOnRighternSide: true,
    },
    {
        product: 'gates',
        title: 'test',
        description: 'Bricks is a data management platform that allows you to store, organize, and share your data.',
        fromColor: 'green',
        toColor: 'lime',
        link: '/docs/gates',
        imageOnRighternSide: false,
    },
    {
        product: 'workflow',
        title: 'test',
        description: 'Bricks is a data management platform that allows you to store, organize, and share your data.',
        fromColor: 'green',
        toColor: 'lime',
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
                <span className={`font-mono text-transparent bg-clip-text bg-gradient-to-r from-${fromColor}-500 to-${toColor}-500`}>{product}</span>: {title}
            </h2>
            <div className="mt-2">
                {description}
            </div>
            <div className="mt-6 inline-flex">
                <Link
                    href={link}
                    className="hover:bg-neutral-800 bg-neutral-900 inline-block rounded-lg px-4 py-2 text-base font-semibold leading-6 shadow-sm ring-1 ring-inset ring-white/10 group-hover:ring-white/20"
                >
                    <span className={`my-auto text-transparent bg-clip-text bg-gradient-to-r from-${fromColor}-400 to-${toColor}-600`}>
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
    )
}

export function Architecture() {
    return (
        <section className="my-32 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <h1 className="flex flex-col text-4xl font-semibold items-center text-gray-300">
                <span>Want to know how the platform works?</span>
                <span>See what it looks like <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">under the hood.</span></span>
            </h1>
            <div className="mt-32 text-gray-400 space-y-20">
                {siloData.map((silo) => (
                    <Silo key={silo.product} {...silo} />
                ))}
            </div>
        </section>
    )
}
