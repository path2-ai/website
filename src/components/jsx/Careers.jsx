import { KERN_ASSETS_URL } from './_settings'

export function Careers() {
    return (
        <div>
            <div className="relative overflow-hidden pt-32 pb-96 lg:pt-40">
                <div>
                    <img
                        className="absolute top-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2"
                        src={`${KERN_ASSETS_URL}/images/background-careers.png`}
                        alt=""
                    />
                </div>
                <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
                    <div className="mx-auto max-w-5xl lg:max-w-6xl">
                        <p className="mt-12 text-5xl font-bold tracking-tight text-white">
                            Join us in building <span className='animate-text bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500 bg-clip-text text-transparent'>magical</span> software
                        </p>
                        <p className="mt-6 text-lg leading-8 text-white">
                            We are looking for the most talented and ambitious people to join our team.
                        </p>
                    </div>
                </div>
                <div className="my-28 relative mx-auto w-fit p-6 rounded-2xl bg-gradient-to-r from-gray-900 to-neutral-900 ring-1 ring-lime-500             
                  shadow-[0_0px_40px_2px_rgba(200,250,0,0.5)]">
                    <img
                        className="mx-auto "
                        src={"https://www.kern.ai/kern-icon.png"}
                        alt=""
                        width="48"
                    />
                </div>
            </div>
        </div>
    )
}
