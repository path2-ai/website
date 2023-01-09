import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRouter } from 'next/router'

import { Button } from '@/components/mdx/Button'
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
} from '@/components/mdx/MobileNavigation'
import { useMobileNavigationStore } from '@/components/mdx/MobileNavigation'
import { ModeToggle } from '@/components/mdx/ModeToggle'
import { MobileSearch, Search } from '@/components/mdx/Search'
import { KERN_ASSETS_URL } from '../jsx/_settings'

function TopLevelNavItem({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

export const Header = forwardRef(function Header({ className }, ref) {
  const router = useRouter()

  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore()
  let isInsideMobileNavigation = useIsInsideMobileNavigation()

  let { scrollY } = useScroll()
  let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9])
  let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8])

  return (
    <motion.div
      ref={ref}
      className={clsx(
        className,
        'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:z-30 lg:px-8',
        !isInsideMobileNavigation &&
        'backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80',
        isInsideMobileNavigation
          ? 'bg-white dark:bg-zinc-900'
          : 'bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]'
      )}
      style={{
        '--bg-opacity-light': bgOpacityLight,
        '--bg-opacity-dark': bgOpacityDark,
      }}
    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
          'bg-zinc-900/7.5 dark:bg-white/7.5'
        )}
      />
      <Search />
      <div className="flex items-center gap-5 lg:hidden">
        <MobileNavigation />
        <img
          className="h-8 cursor-pointer"
          src={`${KERN_ASSETS_URL}/logos/KernAI-primary-gray-100.svg`}
          alt=""
          onClick={() => {
            router.push('/')
          }}
        />
      </div>
      <div className="flex items-center gap-5">
        <nav className="hidden md:block">
          <ul role="list" className="flex items-center gap-8">
            {/* <TopLevelNavItem href="/">API</TopLevelNavItem>
            <TopLevelNavItem href="#">Documentation</TopLevelNavItem> */}
            <TopLevelNavItem href="https://discord.com/invite/qf4rGCEphW">Community support</TopLevelNavItem>
          </ul>
        </nav>
        <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
        <div className="flex gap-4">
          <MobileSearch />
          {/* <ModeToggle /> */}
        </div>
        <div className="hidden min-[416px]:contents">
          {/* <Button href="#">Log in</Button> */}
          <a
            href="https://demo.kern.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-100 hover:bg-gray-600/10"
          >
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-600'>
              Try refinery online
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  )
})
