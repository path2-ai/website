import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { Header } from '@/components/mdx/Header'
import { Navigation } from '@/components/mdx/Navigation'
import { Prose } from '@/components/mdx/Prose'
import { SectionProvider } from '@/components/mdx/SectionProvider'
import { KERN_ASSETS_URL } from '../jsx/_settings'


export function Layout({ children, sections = [] }) {

  const router = useRouter()

  return (
    <SectionProvider sections={sections}>
      <div className="lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className="bg-neutral-900 fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pt-4 pb-8 dark:border-white/10 lg:block xl:w-80"
        >
          <div>
            <div className="hidden lg:flex">
              <img
                className="h-8 cursor-pointer"
                src={`${KERN_ASSETS_URL}/logos/KernAI-primary-gray-100.svg`}
                alt=""
                onClick={() => {
                  router.push('/')
                }}
              />
            </div>
            <Header />
            <Navigation className="hidden lg:mt-10 lg:block" />
          </div>
        </motion.header>
        <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
          <main className="py-16">
            <Prose as="article">{children}</Prose>
          </main>
        </div>
      </div>
    </SectionProvider>
  )
}
