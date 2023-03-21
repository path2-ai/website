import { KERN_ASSETS_URL } from "@/components/jsx/_settings"

export const articles = [
    {
        "title": "Alleviate the pain of manual labeling and deploying models with weak supervision",
        "description": "How to use weak supervision to get high quality labels fast",
        "slug": "whats-weak-supervision",
        "teaser": "In this article we explain how to use weak supervision and how to leverage it to quickly obtain high quality labels for your text datagit .",
        "category": "Knowledge",
        "thumbnail": "/blog/multiple-streams.png",
        "prompt": "multiple streams flowing into the ocean, abstract style.",
        "author": {
            "name": "Leonard Püttmann",
            "image": `${KERN_ASSETS_URL}/team/team-leo.png`
        },
        "date": "2023-03-09"
    },
    {
        "title": "How we use the Kern AI platform to build a stock sentiment slackbot",
        "description": "We build a really cool slackbot to automatically classifiy stock news.",
        "slug": "slackbot-workflow",
        "teaser": "In this article, we would like to provide you with a step-by-step tutorial, in which we build a slack bot that sends us a daily message on the sentiment of the news of our stocks.",
        "category": "Knowledge",
        "thumbnail": "/blog/robot-news.png",
        "prompt": "A robot throwing newspapers comic style.",
        "author": {
            "name": "Leo Püttmann",
            "image": `${KERN_ASSETS_URL}/team/team-leo.png`
        },
        "date": "2023-02-23"
    },
    {
        "title": "Announcing our 2.7m€ seed round",
        "description": "And how we got there (with a failed first product) since our start in 2020.",
        "slug": "our-seed",
        "teaser": "We are thrilled to announce that we have raised a 2.7m€ seed round co-led by Seedcamp and Faber, with participation from xdeck, another.vc and a number of angel investors.",
        "category": "Announcements",
        "thumbnail": "/blog/our-seed-funding.png",
        "prompt": "A seed growing into a plant in a comic style.",
        "author": {
            "name": "Johannes Hötter",
            "image": `${KERN_ASSETS_URL}/team/team-johannes.png`
        },
        "date": "2023-02-16"
    },
    {
        "title": "Bayesian Hyperparameter Optimization",
        "description": "Best of both worlds: fast and accurate hyperparameter optimization.",
        "slug": "bayesian-hyperparameter-optimization",
        "teaser": "We will cover some of the concepts describing how bayesian optimisation works and how fast it is compared to random search and grid search hyperparameter optimisation methods.​",
        "category": "Knowledge",
        "thumbnail": "/blog/hyperparameter-optimization.png",
        "prompt": "Waves in an ocean in a cartoon-style.",
        "author": {
            "name": "Divyanshu Katiyar",
            "image": `${KERN_ASSETS_URL}/team/team-div.png`
        },
        "date": "2023-02-01"
    },
    {
        "title": "Active learners with transformers",
        "description": "See how you can leverage large language models for active learning.",
        "slug": "active-learning-transformers",
        "teaser": "This post will explore how transformer-based machine learning models can be used in an active learning setting, as well as which models are best suited for this task.",
        "category": "Knowledge",
        "thumbnail": "/blog/active-learning.png",
        "prompt": "A roboter student preparing for an exam in a cartoon-style.",
        "author": {
            "name": "Leo Püttmann",
            "image": `${KERN_ASSETS_URL}/team/team-leo.png`
        },
        "date": "2023-01-19"
    },
    {
        "title": "How we built bricks",
        "description": "Our simple backend to power an online playground for modular NLP components.",
        "slug": "how-we-built-bricks",
        "teaser": "bricks is an open-source collection of modular and standardized NLP components written in Python. It is designed to fit into any NLP application with ease to bridge the gap between idea and implementation. In this post, we'll show you how we built bricks and how you can use it in your own projects.",
        "category": "Engineering",
        "thumbnail": "/blog/how-we-built-bricks.png",
        "prompt": "A wall of colored bricks in a cartoon-style.",
        "author": {
            "name": "Leo Püttmann",
            "image": `${KERN_ASSETS_URL}/team/team-leo.png`
        },
        "date": "2022-12-15"
    },
    {
        "title": "Data-centric AI",
        "description": "Why it is here, and why it is here to stay.",
        "slug": "data-centric-ai",
        "teaser": "When a machine learning model performs poorly, many teams intuitively try to improve the model and the underlying code - let’s say switching from a logistic regression to a neural network. Knowing that this can be helpful, it isn’t the only approach you can take to implement your use case.",
        "category": "Knowledge",
        "thumbnail": "/blog/data-centricity.png",
        "prompt": "A green, digital nucleus in a cartoon-style.",
        "author": {
            "name": "Leo Püttmann",
            "image": `${KERN_ASSETS_URL}/team/team-leo.png`
        },
        "date": "2022-10-22"
    },
    {
        "title": "How qdrant powers our vector search",
        "description": "The open-source engine that powers large scale vector search",
        "slug": "how-we-use-qdrant",
        "teaser": "Embeddings are a generalization of database technologies. Instead of filtering and searching only on structured data such as spreadsheets, we’re currently experiencing search technologies build on top of embeddings. Effectively, you turn text into a query-able structure that embeds the meaning of the text.",
        "category": "Engineering",
        "thumbnail": "/blog/qdrant-as-our-engine.png",
        "prompt": "Blueprint of an engine in a cartoon-style on purple paper.",
        "author": {
            "name": "Johannes Hötter",
            "image": `${KERN_ASSETS_URL}/team/team-johannes.png`
        },
        "date": "2022-10-03"
    },
    {
        "title": "How to deploy NLP models to the cloud",
        "description": "Bringing a model into production can be difficult. We show you some steps how to do so.",
        "slug": "how-to-deploy-nlp-models",
        "teaser": "In this article, we want to show you how you can use our refinery Python SDK to quickly extract data from refinery itself, build a NLP model with it and then deploy it to the cloud with the help of Truss, a free-to-use and open-source tool developed by Baseten.",
        "category": "Engineering",
        "thumbnail": "/blog/deploy-nlp-models.png",
        "prompt": "A blue, digital cloud drawn in cartoon-style",
        "author": {
            "name": "Leo Püttmann",
            "image": `${KERN_ASSETS_URL}/team/team-leo.png`
        },
        "date": "2022-09-23"
    },
    {
        "title": "How to finetune your embeddings",
        "description": "Improve vectors for similarity search and active learning.",
        "slug": "how-to-finetuning-embeddings",
        "teaser": "We share our experience with fine-tuning sentence embeddings on a commonly available dataset using similarity learning. We additionally explore how this could benefit the labeling workflow in the Kern AI refinery",
        "category": "Knowledge",
        "thumbnail": "/blog/finetuning-embeddings.png",
        "prompt": "A wall of colored bricks in a cartoon-style.",
        "author": {
            "name": "Moritz Feuerpfeil",
            "image": `${KERN_ASSETS_URL}/team/team-moritz.png`
        },
        "date": "2022-09-15"
    },
    {
        "title": "Beautiful UIs with Figma and Tailwind",
        "description": "In this post, we’re going to share how we used Figma and Tailwind to redesign our open-source tool refinery.",
        "slug": "beautiful-uis",
        "teaser": "The article entirely focuses on how to build beautiful UIs quickly. You don’t need any prior knowledge to understand this post. After this post, you’ll know: (a) Why Figma and Tailwind are such a great combination to build a beautiful UI, (b) How you can quickly build a consistent design, and (c) that those mockups are worth the time! :-)",
        "category": "Knowledge",
        "thumbnail": "/blog/beautiful-uis.png",
        "prompt": "A beautiful purple graphical user interface in a cartoon style.",
        "author": {
            "name": "Johannes Hötter",
            "image": `${KERN_ASSETS_URL}/team/team-johannes.png`
        },
        "date": "2022-07-25"
    },
    {
        "title": "We're open-source!",
        "description": "Being the data-centric sibling of VS Code.",
        "slug": "we-are-open-source",
        "teaser": "We have been working tirelessly towards this day for a long time. Finally, we can say that Kern refinery goes open-source, and we celebrate this with our version 1.0!",
        "category": "Announcements",
        "thumbnail": "/blog/we-went-open-source.png",
        "prompt": "A glass house in a cartoon-style.",
        "author": {
            "name": "Johannes Hötter",
            "image": `${KERN_ASSETS_URL}/team/team-johannes.png`
        },
        "date": "2022-07-18"
    }
]

export default function Overview() {
    return (
        <div>
            {/* hack */}
        </div>
    )
}