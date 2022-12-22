import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import { Footer } from '@/components/mdx/Footer'
import { Header } from '@/components/mdx/Header'
import { Navigation } from '@/components/mdx/Navigation'
import { Prose } from '@/components/mdx/Prose'
import { SectionProvider } from '@/components/mdx/SectionProvider'
import Link from 'next/link'
import { Button } from './Button'

function PageLink({ label, page, previous = false }) {
  return (
    <>
      <Button
        href={page.href}
        aria-label={`${label}: ${page.title}`}
        variant="secondary"
        arrow={previous ? 'left' : 'right'}
      >
        {label}
      </Button>
      <Link
        href={page.href}
        tabIndex={-1}
        aria-hidden="true"
        className="text-base font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
      >
        {page.title}
      </Link>
    </>
  )
}

export function Layout({ children, sections = [], showNavigation = true }) {

  const router = useRouter()

  return (
    <SectionProvider sections={sections}>
      <div className="lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className="fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pt-4 pb-8 dark:border-white/10 lg:block xl:w-80"
        >


          {showNavigation ? (
            <div>
              <div className="hidden lg:flex">
                <img
                  className="h-8 cursor-pointer"
                  src="/KernAI-primary-gray-100.svg"
                  alt=""
                  onClick={() => {
                    router.push('/')
                  }}
                />
              </div>
              <Header />
              <Navigation className="hidden lg:mt-10 lg:block" />
            </div>
          ) : (
            <div className='flex space-x-4'>
              <div className="hidden lg:flex">
                <img
                  className="h-8 cursor-pointer"
                  src="/KernAI-icon.svg"
                  alt=""
                  onClick={() => {
                    router.push('/')
                  }}
                />
              </div>
              <PageLink label="Back" page={{ href: '/' }} previous />
            </div>
          )}
        </motion.header>
        <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
          <main className="py-16">
            <Prose as="article">{children}</Prose>
          </main>
          <Footer />
        </div>
      </div>
    </SectionProvider>
  )
}
