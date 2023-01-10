import { useEffect, useState } from 'react'
import { IconApiApp, IconCategory2, IconChevronLeft, IconChevronRight, IconHighlight, IconMessage, IconMoneybag, IconSocial, IconTrophy, IconWindmill } from '@tabler/icons'
import { WORKFLOW_ASSETS_URL } from './_settings'

const tabsExtractions = [
    { name: 'All', icon: IconApiApp },
    { name: 'Social Media', icon: IconSocial },
    { name: 'Collaboration', icon: IconMessage },
    { name: 'Customer Success', icon: IconTrophy },
]

const tabsTransformations = [
    { name: 'All', icon: IconApiApp },
    { name: 'Classifier', icon: IconCategory2 },
    { name: 'Extractor', icon: IconHighlight },
    { name: 'Generator', icon: IconWindmill }
]

const tabsLoaders = [
    { name: 'All', icon: IconApiApp },
    { name: 'Customer Success', icon: IconTrophy },
    { name: 'Collaboration', icon: IconMessage },
]

const integrationsExtractions = [
    {
        name: 'Gmail',
        image: 'gmail',
        description: 'Gmail is a free, advertising-supported email service developed by Google. Users can access Gmail on the web and using third-party programs that synchronize email content through POP or IMAP protocols.',
        link: 'https://www.google.com/gmail/about/',
        tags: ['Customer Success'],
        state: 'production',
    },
    {
        name: 'Twitter',
        image: 'twitter',
        description: 'Twitter is a social networking service on which users post and interact with messages known as "tweets". Registered users can post, like, and retweet tweets, but unregistered users can only read them.',
        link: 'https://twitter.com/',
        tags: ['Social Media'],
        state: 'development',
    },
    {
        name: 'Slack',
        image: 'slack',
        description: 'Slack is a tool to help you communicate with your team. It\'s a place where you can share information, discuss ideas, and collaborate on projects.',
        link: 'https://slack.com/',
        tags: ['Collaboration'],
        state: 'production',
    },
    {
        name: 'Discord',
        image: 'discord',
        description: 'Discord is a platform designed for video gaming communities, that specializes in text, image, video and audio communication between users in a chat channel.',
        link: 'https://discord.com/',
        tags: ['Collaboration'],
        state: 'development',
    },
    {
        name: 'Outlook',
        image: 'outlook',
        description: 'Outlook is a an inbox service from Microsoft, available as a part of the Microsoft Office suite. It can manage your email, calendar, contacts, and tasks.',
        link: 'https://outlook.live.com/owa/',
        tags: ['Customer Success'],
        state: 'development',
    },
    {
        name: 'Zapier',
        image: 'zapier',
        description: 'Zapier is a web-based automation tool that allows users to connect their applications and automate repetitive tasks.',
        link: 'https://zapier.com/',
        tags: [],
        state: 'development',
    },
    {
        name: 'Intercom',
        image: 'intercom',
        description: 'Intercom is a customer messaging platform that helps businesses to communicate with their customers.',
        link: 'https://www.intercom.com/',
        tags: ['Customer Success'],
        state: 'development',
    },
    {
        name: 'GSheet',
        image: 'gsheet',
        description: 'Google Sheets is a spreadsheet program included as part of a free, web-based software office suite offered by Google within its Google Drive service.',
        link: 'https://www.google.com/sheets/about/',
        tags: ['Collaboration'],
        state: 'production',
    }
]

const integrationsLoaders = [
    {
        name: 'Airtable',
        image: 'airtable',
        description: 'Airtable is a low-code platform for building collaborative apps. It\'s the easiest way to organize everything you know and get work done.',
        link: 'https://airtable.com/',
        tags: ['Collaboration'],
        state: 'development',
    },
    {
        name: 'GSheet',
        image: 'gsheet',
        description: 'Google Sheets is a spreadsheet program included as part of a free, web-based software office suite offered by Google within its Google Drive service.',
        link: 'https://www.google.com/sheets/about/',
        tags: ['Collaboration'],
        state: 'production',
    },
    {
        name: 'Gmail',
        image: 'gmail',
        description: 'Gmail is a free, advertising-supported email service developed by Google. Users can access Gmail on the web and using third-party programs that synchronize email content through POP or IMAP protocols.',
        link: 'https://www.google.com/gmail/about/',
        tags: ['Customer Success'],
        state: 'development',
    },
    {
        name: 'Outlook',
        image: 'outlook',
        description: 'Outlook is a an inbox service from Microsoft, available as a part of the Microsoft Office suite. It can manage your email, calendar, contacts, and tasks.',
        link: 'https://outlook.live.com/owa/',
        tags: ['Customer Success'],
        state: 'development',
    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function IntegrationList({ name, color, integrations, tabs, currentTab, setCurrentTab, currentOffset, setCurrentOffset }) {
    const filteredIntegrations = integrations.filter(
        (integration) => {
            if (currentTab.name == 'All') {
                return true
            } else {
                return integration.tags.includes(currentTab.name)
            }
        }
    )

    return (
        <div className='mt-16 max-w-5xl mx-auto'>
            {currentTab && (
                <div>
                    <h1 className={`text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-${color}-300 to-${color}-600`}>
                        {name}
                    </h1>
                    <div>
                        <div className="sm:hidden">
                            <label htmlFor="tabs" className="sr-only">
                                Select a tab
                            </label>
                            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                            <select
                                id="tabs"
                                name="tabs"
                                className="block w-full rounded-md border-gray-700 focus:border-green-500 focus:ring-green-500"
                                defaultValue={tabs.find((tab) => tab == currentTab)?.name}
                            >
                                {tabs.map((tab) => (
                                    <option key={tab.name}>{tab.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="hidden sm:block">
                            <div className="border-b border-gray-200">
                                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                    {tabs.map((tab) => (
                                        <a
                                            key={tab.name}
                                            type="button"
                                            className={classNames(
                                                tab.current
                                                    ? 'border-green-500 text-green-400'
                                                    : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-700',
                                                'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm cursor-pointer'
                                            )}
                                            onClick={() => {
                                                setCurrentTab(tab)
                                                setCurrentOffset(0)
                                            }}
                                            aria-current={tab == currentTab ? 'page' : undefined}
                                        >
                                            <tab.icon
                                                className={classNames(
                                                    tab == currentTab ? 'text-green-500' : 'text-gray-600 group-hover:text-gray-500',
                                                    '-ml-0.5 mr-2 h-5 w-5'
                                                )}
                                                aria-hidden="true"
                                            />
                                            <span>{tab.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {filteredIntegrations.slice(currentOffset * 8, (currentOffset + 1) * 8).map((integration) => (
                            <div
                                key={integration.name}
                                className="relative flex items-center space-x-3 rounded-lg border border-gray-700 bg-neutral-900 px-6 py-5 shadow-sm focus-within:ring-1 focus-within:ring-green-500 focus-within:ring-offset-2 hover:border-gray-600"
                            >
                                <div className="flex-shrink-0">
                                    {name == 'Transformations' ? (
                                        <img className="ring-1 ring-gray-700 h-10 w-10 rounded-lg p-2" src={integration.image} alt="" />
                                    ) : (
                                        <img className="ring-1 ring-gray-700 h-10 w-10 rounded-lg p-2" src={`${WORKFLOW_ASSETS_URL}/icons/${integration.image}.png`} alt="" />

                                    )}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <a href={integration.link} className="focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        <div className='flex justify-between'>
                                            <p className="text-sm font-medium text-gray-100">{integration.name}</p>
                                            {integration.state == 'development' && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-700 text-gray-300 border border-gray-700">
                                                    Coming soon
                                                </span>
                                            )}
                                        </div>
                                        <p className="truncate text-sm text-gray-500">{integration.description}</p>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-4 flex justify-between'>
                        <div className='text-gray-200'>
                            Showing {currentOffset * 8 + 1} to {Math.min((currentOffset + 1) * 8, filteredIntegrations.length)} of {filteredIntegrations.length} {name.toLowerCase()}
                        </div>
                        <div className="flex space-x-4 justify-end">
                            <button
                                className={classNames(
                                    currentOffset == 0 ? 'text-gray-800' : 'text-gray-500 hover:text-gray-400',
                                    "text-sm font-medium cursor-pointer"
                                )}
                                onClick={() => {
                                    setCurrentOffset(currentOffset - 1)
                                }}
                                disabled={currentOffset == 0}
                            >
                                <IconChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                className={classNames(
                                    currentOffset + 1 >= Math.ceil(filteredIntegrations.length / 8) ? 'text-gray-800' : 'text-gray-500 hover:text-gray-400',
                                    "text-sm font-medium cursor-pointer"
                                )} onClick={() => {
                                    setCurrentOffset(currentOffset + 1)
                                }}
                                disabled={currentOffset + 1 >= Math.ceil(filteredIntegrations.length / 8)}
                            >
                                <IconChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}


export function Integrations() {

    const BRICKS_CMS_URI = 'https://cms.bricks.kern.ai'

    const [integrationsTransformations, setIntegrationsTransformations] = useState([])

    const [currentTabExtractions, setCurrentTabExtractions] = useState(tabsExtractions[0])
    const [currentTabTransformations, setCurrentTabTransformations] = useState(tabsTransformations[0])
    const [currentTabLoaders, setCurrentTabLoaders] = useState(tabsLoaders[0])

    const [currentOffsetExtractions, setCurrentOffsetExtractions] = useState(0)
    const [currentOffsetTransformations, setCurrentOffsetTransformations] = useState(0)
    const [currentOffsetLoaders, setCurrentOffsetLoaders] = useState(0)

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        fetch(`${BRICKS_CMS_URI}/api/modules?pagination[pageSize]=999`)
            .then((response) => response.json())
            .then((data) => {
                const loadedIntegrationsTransformations = []
                Object.entries(data.data).forEach(([id, integration]) => {
                    const attributes = integration.attributes
                    loadedIntegrationsTransformations.push({
                        name: attributes.name,
                        image: "https://bricks.kern.ai/kern-bricks.svg",
                        description: attributes.description,
                        link: "https://bricks.kern.ai",
                        tags: capitalizeFirstLetter(attributes.moduleType),
                    })
                })
                setIntegrationsTransformations(loadedIntegrationsTransformations)
            })
    }, [])

    return (
        <div className='space-y-20'>
            <IntegrationList name='Extractions' color='lime' integrations={integrationsExtractions} tabs={tabsExtractions} currentTab={currentTabExtractions} setCurrentTab={setCurrentTabExtractions} currentOffset={currentOffsetExtractions} setCurrentOffset={setCurrentOffsetExtractions} />
            <IntegrationList name='Transformations' color='lime' integrations={integrationsTransformations} tabs={tabsTransformations} currentTab={currentTabTransformations} setCurrentTab={setCurrentTabTransformations} currentOffset={currentOffsetTransformations} setCurrentOffset={setCurrentOffsetTransformations} />
            <IntegrationList name='Loaders' color='lime' integrations={integrationsLoaders} tabs={tabsLoaders} currentTab={currentTabLoaders} setCurrentTab={setCurrentTabLoaders} currentOffset={currentOffsetLoaders} setCurrentOffset={setCurrentOffsetLoaders} />
        </div>
    )
}
