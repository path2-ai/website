import { useEffect, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Icon360, IconApiApp, IconApps, IconArrowRight, IconArrowsRightDown, IconBrain, IconBrandDocker, IconBrandOpenSource, IconBrandPython, IconBuildingCastle, IconCategory2, IconCode, IconCrystalBall, IconDashboard, IconDatabase, IconDragDrop, IconGrowth, IconHighlight, IconLoader, IconLoader2, IconLock, IconMail, IconNumber3, IconPlayerPause, IconPlayerPlay, IconRoute, IconTag, IconWindmill } from '@tabler/icons'
import { EmailAnalytics } from './UseCases/EmailAnalytics'




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export function Playground() {

    const [devIsSelected, setDevIsSelected] = useState(true)

    const [useCaseInput, setUseCaseInput] = useState('Wow, this looks absolutely amazing!')
    function apiCall(useCaseInput) {
        return `curl -X POST \\
  https://app.kern.ai/workflow-api/workflows/3b521496-59ff-4281-b030-..../post-to-store/4b521496-59ff-4281-b030-..../then-listen-to-store/5b521496-59ff-4281-b030-.... \\
  -H 'Content-Type: application/json' \\
  -H 'Authorization: Bearer INSERT_KERN_API_KEY_HERE' \\
  -d '{"input":"${useCaseInput}"'

`
    }

    const [useCaseOutput, setUseCaseOutput] = useState(null)
    const [apiResponse, setApiResponse] = useState(null)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setUseCaseOutput(`wow, that's a lot of text!`)
                setApiResponse(`wow, that's a lot of text! really really a lot of text! really really really a lot of text! really really really really a lot of text! really really really really really a lot of text! really really really really really really a lot of text! really really really really really really really a lot of text! really really really really really really really really a lot of text! really really really really really really really really really a lot of text'`)
                setLoading(false)
            }, 3000)
        }
    }, [loading])




    return (
        <section className='mx-auto max-w-7xl py-20 sm:py-24'>
            <div className="mx-6"
            >
                <h2 className='text-4xl font-bold text-white text-center flex flex-row space-x-2 items-center justify-center'>
                    <span className='animate-text bg-gradient-to-r from-white via-gray-600 to-white bg-clip-text text-transparent'>
                        Common use cases
                    </span>
                    <span>
                        built on our platform
                    </span>
                </h2>
                <p className='text-gray-400 text-center mt-2'>
                    See exemplary use cases that can be built with Kern AI.
                </p>

            </div>

            <EmailAnalytics />
            {/* <MemoToContent devIsSelected={devIsSelected} /> */}
        </section >
    )
}


