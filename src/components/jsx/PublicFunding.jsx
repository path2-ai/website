export function PublicFunding() {
    return (
        <div className="relative overflow-hidden text-gray-100 py-16">
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-prose text-lg flex flex-col space-y-8">
                    <h1>
                        <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
                            Unser Projekt wird durch die EU und das Land Brandenburg gefördert.
                        </span>
                    </h1>
                    <p className="text-center mt-8 text-xl leading-8 text-gray-300">
                        Brandenburgischer Innovationsgutschein 1 (BIG 1)
                    </p>
                    <div className='bg-white p-2 max-w-sm mx-auto'>
                        <img src="/eu_efre.png" />
                    </div>
                    <div>
                        Beschreibung der Maßnahme „Brandenburgischer Innovationsgutschein": Im Rahmen des Projekts „BIG FuE“ wird erforscht, wie verschiedene Textgruppen und Entitäten von Dokumenten automatisiert extrahiert und anschließend gelabelt werden können. Die Erkenntnisse aus dem Forschungsprojekt sollen zur Entwicklung entsprechender Algorithmen verwendet werden.
                    </div>
                </div>
            </div>
        </div>
    )
}