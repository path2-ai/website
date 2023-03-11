import { IconCategory2, IconNote, IconRoute } from '@tabler/icons'
import { useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // this must be imported to enable the charts plugin; don't remove it!

export function ManagerGerman() {


    const dataSentiment = {
        labels: [
            'Positiv',
            'Neutral',
            'Negativ'
        ],
        datasets: [{
            label: 'Sentiment',
            data: [300, 50, 100],
            backgroundColor: [
                '#16a34a',
                '#ca8a04',
                '#dc2626'
            ],
            hoverOffset: 4
        }]
    };

    const dataIntent = {
        labels: [
            'Anfragen',
            'Feedback',
            'Support',
            'Andere'
        ],
        datasets: [{
            label: 'Intent',
            data: [300, 50, 100, 200],
            backgroundColor: [
                '#16a34a',
                '#ca8a04',
                '#dc2626',
                '#2563eb'
            ],
            hoverOffset: 4
        }]
    };

    const [sliderValue, setSliderValue] = useState(50)

    return (
        <>
            <div className="relative isolate overflow-hidden lg:px-6 py-10 sm:py-12 lg:overflow-visible lg:px-0">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-4 lg:gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-green-400">Fachkräftemangel</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Intelligente Postfächer</h1>
                                <p className="mt-6 lg:text-xl lg:leading-8 text-gray-700">
                                    Sie arbeiten jeden Tag mit E-Mails. Sie ist das universelle Kommunikationsmittel. Aber Postfächer bieten unglaubliches Optimierungspotential. Wir sind hier, um Emails zu revolutionieren.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base lg:leading-7 text-gray-700 lg:max-w-lg">
                                <p>
                                    Jedes Unternehmen hat allgemeine Posteingänge; denken Sie nur an den typischen Info@-, Support@- oder Sales@-Posteingang (auch wir haben solche). Wenn Sie diese Postfächer intelligenter gestalten, können Sie Ihrem Team unglaublich viel Zeit ersparen. Lassen Sie uns sehen, wie:
                                </p>
                                <ul role="list" className="mt-4 space-y-4 lg:mt-8 lg:space-y-8 text-gray-500">
                                    <li className="flex gap-x-3">
                                        <IconCategory2 className="mt-1 h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                                        <span className="text-sm lg:text-base">
                                            <strong className="font-semibold text-gray-900">Automatisierte Kategorien.</strong> Jede eingehende E-Mail erhält eine Kategorie, die Ihnen hilft, E-Mails an die richtige Abteilung weiterzuleiten, und Ihnen Einblicke in die Stimmung, Dringlichkeit oder Sprache gibt.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <IconNote className="mt-1 h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                                        <span className="text-sm lg:text-base">
                                            <strong className="font-semibold text-gray-900">Automatisierte Entwürfe.</strong> Stellen Sie sich vor, Sie betreten Ihren Posteingang, und für 50 % Ihrer E-Mails sind bereits Entwürfe erstellt worden. Lesen, bearbeiten, abschicken. Erledigt.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <IconRoute className="mt-1 h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                                        <span className="text-sm lg:text-base">
                                            <strong className="font-semibold text-gray-900">Bedingte Workflows.</strong> Erstellen Sie bedingte Abläufe, damit Sie sich auf das konzentrieren können, was wichtig ist. Lassen Sie sich zum Beispiel benachrichtigen, wenn eine Mail wirklich dringend ist. Oder wenn Ihr NLP nicht zufriedenstellend war und Sie einen Blick darauf werfen sollten.
                                        </span>
                                    </li>
                                </ul>
                                <p className="mt-4 lg:mt-8">
                                    Die Auswirkungen liegen auf der Hand: Ihr Team kann viel Zeit sparen und gleichzeitig eine schnelle und einheitliche Antwort an die Empfänger sicherstellen. Darüber hinaus erhalten Sie eine Fülle von Informationen über die Merkmale Ihrer eingehenden E-Mails.                                </p>
                                <div className='hidden lg:block'>
                                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Emails haben seit Jahrzehnten keine Innovation gesehen.</h2>
                                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">Wir ändern das.</h2>
                                </div>
                                <div className='block lg:hidden'>
                                    <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Emails haben seit Jahrzehnten keine Innovation gesehen. Wir ändern das</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:p-16 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <div className='relative'>
                            <div
                                className='absolute w-full h-full bg-stone-100 border border-neutral-200 rounded-2xl opacity-90'
                            />

                            <div className='p-6 relative flex flex-col space-y-6'>
                                <div className=''>
                                    <div className='p-[1px] rounded-md bg-gradient-to-b from-gray-200 to-neutral-100'>
                                        <div className='flex flex-row items-center justify-between px-4 py-1 text-gray-500 text-sm rounded-t-md bg-neutral-100 border-b border-gray-300'>
                                            Operative Vorteile
                                        </div>
                                        <div
                                            className="h-66 text-gray-900 block w-full bg-white p-4 focus:outline-none sm:text-sm resize-none"
                                        >
                                            <label for="minmax-range" className="block mb-2 text-sm font-medium text-gray-500">
                                                Wie viele E-Mails gehen pro Tag in Ihrem zentralen Posteingang ein?                                            </label>
                                            <input
                                                id="minmax-range"
                                                type="range"
                                                min={0}
                                                max={500}
                                                value={sliderValue}
                                                onChange={(e) => setSliderValue(e.target.value)}
                                                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                                            />
                                            <div className='mt-1 flex justify-end'>
                                                <span
                                                    className='text-sm rounded-md border border-neutral-200 bg-neutral-100 w-fit px-2 py-1 text-sm'
                                                >
                                                    <span className='font-semibold'>{sliderValue}</span> E-Mails
                                                </span>
                                            </div>
                                            <div className='mt-2'>
                                                <p className='text-gray-600 text-sm'>
                                                    <span className='font-semibold text-green-500'>{Math.round(sliderValue * 0.95)}</span> Mails werden automatisch angereichert (z.B. Kategorie, Sentiment, Sprache) und an die richtige Abteilung weitergeleitet.
                                                </p>
                                                <p className='text-gray-600 text-sm'>
                                                    <span className='font-semibold text-green-500'>{Math.round(sliderValue * 0.5)}</span> Mails erhalten einen automatischen Antwortentwurf.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center justify-between px-4 py-1 text-gray-500 text-sm border-t bg-neutral-100 border-b border-gray-300'>
                                            Analytische Vorteile
                                        </div>
                                        <div
                                            className="flex flex-col h-88 text-gray-900 block w-full bg-white p-4 focus:outline-none sm:text-sm resize-none"
                                        >
                                            <div className='mt-2 flex flex-col'>
                                                <div
                                                    className=''
                                                >
                                                    <Doughnut
                                                        data={dataSentiment}
                                                        options={{
                                                            responsive: true,
                                                            maintainAspectRatio: false,
                                                            plugins: {
                                                                legend: {
                                                                    display: false,
                                                                },
                                                            },
                                                        }}
                                                    />
                                                </div>
                                                <div
                                                    className='mt-10'
                                                >
                                                    <Doughnut
                                                        data={dataIntent}
                                                        options={{
                                                            responsive: true,
                                                            maintainAspectRatio: false,
                                                            plugins: {
                                                                legend: {
                                                                    display: false,
                                                                },
                                                            },
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className='mt-6'>
                                                <p className='text-gray-600 text-sm'>
                                                    Erhalten Sie <span className='font-semibold text-green-500'>relevante Einblicke</span> direkt aus Ihrem Posteingang.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className='h-12 rounded-b-md bg-neutral-200 border-t border-gray-300 flex flex-row pl-4 pr-2 items-center justify-between text-sm text-gray-500'
                                        >
                                            <a
                                                type="button"
                                                className="inline-flex items-center px-2 py-1 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-800 bg-neutral-100 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                                href='https://cal.com/jhoetter'
                                                target='_blank'
                                                rel='noreferrer noopener'
                                            >
                                                Kontakt mit Gründer aufnehmen
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
