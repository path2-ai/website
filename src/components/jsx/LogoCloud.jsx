import { KERN_ASSETS_URL } from "./settings"

export function LogoCloud() {
    return (
        <div className="mx-auto max-w-7xl pt-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-5">
                <div className="flex justify-center col-span-1">
                    <img className="h-4" src={`${KERN_ASSETS_URL}/users/user-docusign.png`} alt="DocuSign" />
                </div>
                <div className="flex justify-center col-span-1">
                    <img className="h-4" src={`${KERN_ASSETS_URL}/users/user-crowd.png`} alt="Crowd" />
                </div>
                <div className="flex justify-center col-span-1">
                    <img className="h-4" src={`${KERN_ASSETS_URL}/users/user-samsung.png`} alt="Samsung" />
                </div>
                <div className="flex justify-center col-span-1">
                    <img className="h-4" src={`${KERN_ASSETS_URL}/users/user-cohere.png`} alt="Cohere" />
                </div>
                <div className="hidden lg:block flex justify-center col-span-1">
                    <img className="h-4" src={`${KERN_ASSETS_URL}/users/user-barmenia.png`} alt="Barmenia" />

                </div>
            </div>
        </div>
    )
}
