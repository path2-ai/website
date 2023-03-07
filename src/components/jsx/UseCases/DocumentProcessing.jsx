import { useEffect, useState } from 'react'
import { IconArrowsShuffle, IconFile, IconPlayerPause, IconPlayerPlay } from '@tabler/icons'
const projects = [
    { id: 1, name: 'Werbekampagne', hours: '12.0', rate: '75.00€', price: '900.00€' },
    // More projects...
]

export function DocumentProcessing() {

    const [isScanned, setIsScanned] = useState(false)
    const [listenToTimer, setListenToTimer] = useState(false)
    const [loading, setLoading] = useState(false)
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer + 1)
            if (timer % 100 === 0 && timer !== 0) {
                setTimer(0)
                setListenToTimer(false)
                if (listenToTimer) {
                    setIsScanned(true)
                    setLoading(false)
                }
            }
        }, 10)
        return () => clearInterval(interval)
    }, [timer])

    return (
        <div
            id="document-processing"
        >
            <div className='max-w-5xl mx-auto flex flex-col space-y-6'>
                <div className='flex flex-row items-center md:space-x-4'>
                    <div
                        className='hidden md:block p-3 bg-[#0d0d0d] border border-neutral-900 rounded-2xl'
                    >
                        <IconFile className='text-neutral-500 w-6 h-6' />
                    </div>
                    <div>
                        <div className='flex flex-col md:flex-row items-center justify-between'>
                            <h3 className='text-2xl font-bold text-white'>
                                Processing PDF documents
                            </h3>
                            <div
                                className='mt-2 md:mt-0 rounded-full text-sm bg-neutral-900 border border-neutral-800 px-2 py-1 text-gray-400'
                            >
                                <span
                                    className='h-2 w-2 rounded-full bg-green-500 inline-block mr-1.5 animate-pulse'
                                />
                                Coming this year
                            </div>
                        </div>
                        <p className='text-gray-400 mt-1'>
                            Collect and generate raw data, scale your labeling and quality assurance, and build pipelines for strong and reliable NLP models.
                        </p>
                    </div>
                </div>
                <div className='hidden md:block p-[1px] h-[48rem] rounded-xl bg-gradient-to-b from-neutral-600 to-neutral-900 overflow-auto scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900'>
                    <div className="flex min-h-full bg-neutral-900 rounded-xl">

                        <div className="flex w-0 flex-1 flex-col">
                            <div className="sticky top-0 z-10 flex h-16 items-center justify-between flex-shrink-0 border-b border-gray-800 bg-neutral-900 rounded-t-xl">

                            </div>
                            <main className="flex-1">
                                <div className="py-2 xl:py-2">
                                    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8 xl:max-w-5xl">

                                        <div className='mt-4 xl:grid xl:grid-cols-3'>
                                            <div className="xl:col-span-2 xl:border-r xl:border-gray-800 xl:pr-8">
                                                <div>
                                                    <div>
                                                        <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6 xl:border-gray-800">
                                                            <div>
                                                                <h1 className="text-2xl font-bold text-gray-100">my_document.pdf</h1>

                                                            </div>
                                                            {!isScanned && (
                                                                <button
                                                                    type="button"
                                                                    className="inline-flex justify-center rounded-md border border-gray-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-gray-300 shadow-sm hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                                                    onClick={() => {
                                                                        setListenToTimer(true)
                                                                        setLoading(true)
                                                                    }}
                                                                >
                                                                    <span>Scan document</span>
                                                                </button>
                                                            )}
                                                        </div>

                                                        <div className="py-3 xl:pt-6 xl:pb-0">
                                                            <h2 className="sr-only">Description</h2>
                                                            <div className="prose max-w-none text-gray-500">
                                                                {loading ? (
                                                                    <div className='text-gray-300 text-sm'>
                                                                        <div className='text-center'>
                                                                            Loading {timer}%
                                                                        </div>
                                                                        <div className="mt-2 h-2 flex rounded-lg bg-gray-200">
                                                                            <div className="w-12 bg-gradient-to-r rounded from-amber-400 to-green-600" style={{ width: `${timer}%` }} />
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    isScanned ? (
                                                                        <div className="flex flex-col space-y-0.5 pl-4 pr-8 py-4 text-gray-100">
                                                                            <div className='flex flex-row items-center'>
                                                                                <span className='border border-green-500 w-fit p-1'>Musterfirma GmbH</span> · <span className='border border-purple-500 w-fit p-1'>Musterstr. 9 · 12345 Beispielstadt</span>
                                                                            </div>
                                                                            <div className='flex flex-row items-center'>
                                                                                <span className='border border-red-500 w-fit p-1'>Kern AI GmbH</span>
                                                                            </div>
                                                                            <div className='flex flex-row items-center'>
                                                                                <span className='border border-emerald-500 w-fit p-1'>Johannes Hötter</span>
                                                                            </div>
                                                                            <div className='flex flex-row items-center'>
                                                                                <span className='border border-blue-500 w-fit p-1'>Fürstenstraße 3</span>
                                                                            </div>
                                                                            <div className='flex flex-row items-center'>
                                                                                <span className='border border-blue-500 w-fit p-1'>53111 Bonn</span>
                                                                            </div>
                                                                            <div className='pt-4 flex flex-row items-center'>
                                                                                <span className='border text-xl font-bold border-neutral-500 w-fit p-1'>Rechnung</span>
                                                                            </div>
                                                                            <div className='flex flex-row justify-end items-center space-x-1'>
                                                                                <div className='flex flex-col border border-rose-500 w-fit p-1 '><span>Rechnungsnummer</span> <span>RE1000001</span></div>
                                                                                <div className='flex flex-col border border-sky-500 w-fit p-1 '><span>Zahlungsziel</span> <span>16.02.2023</span></div>
                                                                                <div className='flex flex-col border border-purple-500 w-fit p-1 '><span>Leistungszeitraum</span> <span>08.02.2023 - 08.03.2023</span></div>
                                                                                <div className='flex flex-col border border-yellow-500 w-fit p-1 '><span>Rechnungsdatum</span> <span>09.02.2023</span></div>
                                                                            </div>
                                                                            <div className='flex flex-row items-center'>
                                                                                <span className='border border-blue-500 w-fit p-1'>Kundennummer Bonn</span>
                                                                            </div>
                                                                            <div >
                                                                                <table className="min-w-full divide-y divide-gray-700">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th scope="col" className="pb-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-0">
                                                                                                Projekt
                                                                                            </th>
                                                                                            <th
                                                                                                scope="col"
                                                                                                className="hidden pb-3.5 px-3 text-right text-sm font-semibold text-gray-100 sm:table-cell"
                                                                                            >
                                                                                                Stunden
                                                                                            </th>
                                                                                            <th
                                                                                                scope="col"
                                                                                                className="hidden pb-3.5 px-3 text-right text-sm font-semibold text-gray-100 sm:table-cell"
                                                                                            >
                                                                                                Rate
                                                                                            </th>
                                                                                            <th scope="col" className="pb-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-100 sm:pr-0">
                                                                                                Preis
                                                                                            </th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        {projects.map((project) => (
                                                                                            <tr key={project.id} className="border-b border-gray-800">
                                                                                                <td className="py-4 pl-4 pr-3 text-sm sm:pl-0">
                                                                                                    <div className="font-medium text-gray-100"><span className='border border-green-500 w-fit p-1'>{project.name}</span></div>
                                                                                                    <div className="mt-0.5 text-gray-500 sm:hidden">
                                                                                                        {project.hours} hours at {project.rate}
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell"><span className='border border-orange-500 w-fit p-1'>{project.hours}</span></td>
                                                                                                <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell"><span className='border border-brown-500 w-fit p-1'>{project.rate}</span></td>
                                                                                                <td className="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0"><span className='border border-emerald-500 w-fit p-1'>{project.price}</span></td>
                                                                                            </tr>
                                                                                        ))}
                                                                                    </tbody>
                                                                                    <tfoot>
                                                                                        <tr>
                                                                                            <th
                                                                                                scope="row"
                                                                                                colSpan={3}
                                                                                                className="hidden pl-4 pr-3 pt-2 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                                                                                            >
                                                                                                Brutto
                                                                                            </th>
                                                                                            <th scope="row" className="pl-6 pr-1 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden">
                                                                                                Brutto
                                                                                            </th>
                                                                                            <td className="pl-3 pr-6 pt-2 text-right text-sm text-gray-500 sm:pr-0"><span className='border border-red-500 w-fit p-1'>900,00€</span></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th
                                                                                                scope="row"
                                                                                                colSpan={3}
                                                                                                className="hidden pl-4 pr-3 pt-1 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                                                                                            >
                                                                                                Steuern
                                                                                            </th>
                                                                                            <th scope="row" className="pl-6 pr-3 pt-1 text-left text-sm font-normal text-gray-500 sm:hidden">
                                                                                                Steuern
                                                                                            </th>
                                                                                            <td className="pl-3 pr-6 pt-1 text-right text-sm text-gray-500 sm:pr-0"><span className='border border-cyan-500 w-fit p-1'>171,00€</span></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th
                                                                                                scope="row"
                                                                                                colSpan={3}
                                                                                                className="hidden pl-4 pr-3 pt-1 text-right text-sm font-semibold text-gray-100 sm:table-cell sm:pl-0"
                                                                                            >
                                                                                                Total
                                                                                            </th>
                                                                                            <th scope="row" className="pl-6 pr-3 pt-1 text-left text-sm font-semibold text-gray-100 sm:hidden">
                                                                                                Total
                                                                                            </th>
                                                                                            <td className="pl-3 pr-4 pt-1 text-right text-sm font-semibold text-gray-100 sm:pr-0"><span className='border border-amber-500 w-fit p-1'>1.071,00€</span></td>
                                                                                        </tr>
                                                                                    </tfoot>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    ) : (
                                                                        <div className="flex flex-col space-y-0.5 pl-4 pr-8 py-4 text-gray-100">
                                                                            <div className='flex flex-row items-center'>
                                                                                <span className='border border-transparent w-fit p-1'>Musterfirma GmbH</span> · <span className='border border-transparent w-fit p-1'>Musterstr. 9 · 12345 Beispielstadt</span>
                                                                            </div>
                                                                            <div className='flex flex-row items-center'>
                                                                                <span className='border border-transparent w-fit p-1'>Kern AI GmbH</span>
                                                                            </div>
                                                                            <div className='flex flex-row items-center'>
                                                                                <span className='border border-transparent w-fit p-1'>Johannes Hötter</span>
                                                                            </div>
                                                                            <div className='flex flex-row items-center'>
                                                                                <span className='border border-transparent w-fit p-1'>Fürstenstraße 3</span>
                                                                            </div>
                                                                            <div className='flex flex-row items-center'>
                                                                                <span className='border border-transparent w-fit p-1'>53111 Bonn</span>
                                                                            </div>
                                                                            <div className='pt-4 flex flex-row items-center'>
                                                                                <span className='border text-xl font-bold border-transparent w-fit p-1'>Rechnung</span>
                                                                            </div>
                                                                            <div className='flex flex-row justify-end items-center space-x-1'>
                                                                                <div className='flex flex-col border border-transparent w-fit p-1 '><span>Rechnungsnummer</span> <span>RE1000001</span></div>
                                                                                <div className='flex flex-col border border-transparent w-fit p-1 '><span>Zahlungsziel</span> <span>16.02.2023</span></div>
                                                                                <div className='flex flex-col border border-transparent w-fit p-1 '><span>Leistungszeitraum</span> <span>08.02.2023 - 08.03.2023</span></div>
                                                                                <div className='flex flex-col border border-transparent w-fit p-1 '><span>Rechnungsdatum</span> <span>09.02.2023</span></div>
                                                                            </div>
                                                                            <div className='flex flex-row items-center'>
                                                                                <span className='border border-transparent w-fit p-1'>Kundennummer Bonn</span>
                                                                            </div>
                                                                            <div >
                                                                                <table className="min-w-full divide-y divide-gray-700">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th scope="col" className="pb-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-100 sm:pl-0">
                                                                                                Projekt
                                                                                            </th>
                                                                                            <th
                                                                                                scope="col"
                                                                                                className="hidden pb-3.5 px-3 text-right text-sm font-semibold text-gray-100 sm:table-cell"
                                                                                            >
                                                                                                Stunden
                                                                                            </th>
                                                                                            <th
                                                                                                scope="col"
                                                                                                className="hidden pb-3.5 px-3 text-right text-sm font-semibold text-gray-100 sm:table-cell"
                                                                                            >
                                                                                                Rate
                                                                                            </th>
                                                                                            <th scope="col" className="pb-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-100 sm:pr-0">
                                                                                                Preis
                                                                                            </th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        {projects.map((project) => (
                                                                                            <tr key={project.id} className="border-b border-gray-800">
                                                                                                <td className="py-4 pl-4 pr-3 text-sm sm:pl-0">
                                                                                                    <div className="font-medium text-gray-100"><span className='border border-transparent w-fit p-1'>{project.name}</span></div>
                                                                                                    <div className="mt-0.5 text-gray-500 sm:hidden">
                                                                                                        {project.hours} hours at {project.rate}
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell"><span className='border border-transparent w-fit p-1'>{project.hours}</span></td>
                                                                                                <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell"><span className='border border-transparent w-fit p-1'>{project.rate}</span></td>
                                                                                                <td className="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0"><span className='border border-transparent w-fit p-1'>{project.price}</span></td>
                                                                                            </tr>
                                                                                        ))}
                                                                                    </tbody>
                                                                                    <tfoot>
                                                                                        <tr>
                                                                                            <th
                                                                                                scope="row"
                                                                                                colSpan={3}
                                                                                                className="hidden pl-4 pr-3 pt-2 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                                                                                            >
                                                                                                Brutto
                                                                                            </th>
                                                                                            <th scope="row" className="pl-6 pr-1 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden">
                                                                                                Brutto
                                                                                            </th>
                                                                                            <td className="pl-3 pr-6 pt-2 text-right text-sm text-gray-500 sm:pr-0"><span className='border border-transparent w-fit p-1'>900,00€</span></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th
                                                                                                scope="row"
                                                                                                colSpan={3}
                                                                                                className="hidden pl-4 pr-3 pt-1 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
                                                                                            >
                                                                                                Steuern
                                                                                            </th>
                                                                                            <th scope="row" className="pl-6 pr-3 pt-1 text-left text-sm font-normal text-gray-500 sm:hidden">
                                                                                                Steuern
                                                                                            </th>
                                                                                            <td className="pl-3 pr-6 pt-1 text-right text-sm text-gray-500 sm:pr-0"><span className='border border-transparent w-fit p-1'>171,00€</span></td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th
                                                                                                scope="row"
                                                                                                colSpan={3}
                                                                                                className="hidden pl-4 pr-3 pt-1 text-right text-sm font-semibold text-gray-100 sm:table-cell sm:pl-0"
                                                                                            >
                                                                                                Total
                                                                                            </th>
                                                                                            <th scope="row" className="pl-6 pr-3 pt-1 text-left text-sm font-semibold text-gray-100 sm:hidden">
                                                                                                Total
                                                                                            </th>
                                                                                            <td className="pl-3 pr-4 pt-1 text-right text-sm font-semibold text-gray-100 sm:pr-0"><span className='border border-transparent-500 w-fit p-1'>1.071,00€</span></td>
                                                                                        </tr>
                                                                                    </tfoot>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                )}

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <aside className="mt-4 hidden xl:block xl:pl-8">
                                                {isScanned && (
                                                    <div className="flex flex-col space-y-4">
                                                        <h4 className='text-lg font-semibold font-mono text-gray-300 pb-3 border-b border-gray-800'>JSON</h4>
                                                        <pre className='text-sm text-gray-500 overflow-auto scrollbar-thin scrollbar-thumb-neutral-900 scrollbar-track-neutral-700'>
                                                            {JSON.stringify({
                                                                "vendor": {
                                                                    "name": "Musterfirma GmbH",
                                                                    "address": "Musterstraße 1, 12345 Musterstadt"
                                                                },
                                                                "customer": {
                                                                    "name": "Kern AI GmbH",
                                                                    "handTo": "Johannes Hötter",
                                                                    "address": "Fürstenstraße 3, 53111 Bonn"
                                                                },
                                                                "invoice": {
                                                                    "language": "de",
                                                                    "currency": "EUR",
                                                                    "date": "2023-02-09",
                                                                    "dueDate": "2023-02-16",
                                                                    "number": "RE1000001",
                                                                    "items": [
                                                                        {
                                                                            "name": "Werbekampagne",
                                                                            "hours": 12,
                                                                            "rate": 75,
                                                                            "price": 900,
                                                                        }],
                                                                    "grossTotal": 900,
                                                                    "taxTotal": 171,
                                                                    "netTotal": 1071
                                                                }
                                                            }, null, 2)}
                                                        </pre>
                                                    </div>
                                                )}
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center text-gray-400 text-xs mt-4'>
                Soon, you'll be able to set up customized, data-centric document processing in Kern AI.
            </p>

        </div >
    )
}


