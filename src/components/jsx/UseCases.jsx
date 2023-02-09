import { IconDatabase, IconMessage, IconPerspective, IconWorldWww } from "@tabler/icons"

const useCases = [{
  title: 'Training data',
  description: 'Combine workflow and refinery to streamline your training data. Automatically synchronize refinery projects from stores.',
  icon: IconDatabase,
  image: 'https://kern-assets.s3.eu-central-1.amazonaws.com/website/welcome/guide-training-data.png',
}, {
  title: 'Email channels',
  description: 'An abundance of messages are sent via email every day. Use refinery to extract insights from your emails and automate your workflows.',
  icon: IconMessage,
  image: 'https://kern-assets.s3.eu-central-1.amazonaws.com/website/welcome/guide-training-data.png',
}, {
  title: 'Webscraping',
  description: 'Handling complex HTML structures can be a pain. Build a simple Python scraper, and use refinery to extract the data you need.',
  icon: IconWorldWww,
  image: 'https://kern-assets.s3.eu-central-1.amazonaws.com/website/welcome/guide-training-data.png',
}, {
  title: 'ETL pipelines',
  description: 'Why limit ETL to only structured data? Build pipelines that actually understand human language, and future-proof your pipelines.',
  icon: IconPerspective,
  image: 'https://kern-assets.s3.eu-central-1.amazonaws.com/website/welcome/guide-training-data.png',
},]

export function UseCases() {
  return (
    <section className='mx-auto max-w-5xl py-10 sm:py-16'>
      <div className="mx-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Featured use cases
        </h2>
        <p className="mt-3 text-lg text-gray-400">
          Our platform is broadly applicable to a wide range of use cases. Here are some of our favorite examples.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6">
        {useCases.map((useCase, index) => (
          <div className="hover:bg-zinc-900 p-6 rounded-2xl">
            <div
              className="flex flex-col space-y-8"
            >
              <div className="w-fit p-4 rounded-lg bg-neutral-900 border border-gray-800">
                <useCase.icon size={24} stroke={1.5} className="text-gray-400 " />
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="font-semibold text-gray-100">
                  {useCase.title}
                </h3>
                <p className="text-gray-400">
                  {useCase.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}