import { KERN_ASSETS_URL } from "@/components/jsx/_settings"

export const articles = [
    // {
    //     "title": "Announcing our 2.7m€ seed round",
    //     "slug": "announcing-our-seed",
    //     "teaser": "We are thrilled to announce that we have raised a 2.7m€ seed round co-led by Seedcamp and Faber, with participation from xdeck, another.vc and a number of angel investors.",
    //     "category": "Announcements",
    //     "thumbnail": `${KERN_ASSETS_URL}/images/background-careers-1440.png`,
    //     "author": {
    //         "name": "Johannes Hötter",
    //         "image": `${KERN_ASSETS_URL}/team/team-johannes.png`
    //     },
    //     "date": "2021-03-01"
    // },
    {
        "title": "How we built bricks",
        "slug": "how-we-built-bricks",
        "teaser": "bricks is an open-source collection of modular and standardized NLP components written in Python. It is designed to fit into any NLP application with ease to bridge the gap between idea and implementation. In this post, we'll show you how we built bricks and how you can use it in your own projects.",
        "category": "Knowledge",
        "thumbnail": `${KERN_ASSETS_URL}/screenshots/screenshot-bricks.png`,
        "author": {
            "name": "Leo Püttmann",
            "image": `${KERN_ASSETS_URL}/team/team-leo.png`
        },
        "date": "2021-03-01"
    }
]

export default function Overview() {
    return (
        <div>
            {/* hack */}
        </div>
    )
}