import { useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'
import { articles } from '@/pages/company/blog/overview'
import { logs } from '@/pages/changelog/navbar'

import { Button } from '@/components/mdx/Button'
import { useIsInsideMobileNavigation } from '@/components/mdx/MobileNavigation'
import { useSectionStore } from '@/components/mdx/SectionProvider'
import { Tag } from '@/components/mdx/Tag'
import { remToPx } from '@/lib/remToPx'

function useInitialValue(value, condition = true) {
  let initialValue = useRef(value).current
  return condition ? initialValue : value
}

function TopLevelNavItem({ href, children }) {
  return (
    <li className="md:hidden">
      <Link
        href={href}
        className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

function NavLink({ href, tag, active, isAnchorLink = false, children }) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex justify-between gap-2 py-1 pr-3 text-sm transition',
        isAnchorLink ? 'pl-7' : 'pl-4',
        active
          ? 'text-zinc-900 dark:text-white'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
      )}
    >
      <span className="truncate">{children}</span>
      {tag && (
        <Tag variant="small" color="zinc">
          {tag}
        </Tag>
      )}
    </Link>
  )
}

function VisibleSectionHighlight({ group, pathname }) {
  let [sections, visibleSections] = useInitialValue(
    [
      useSectionStore((s) => s.sections),
      useSectionStore((s) => s.visibleSections),
    ],
    useIsInsideMobileNavigation()
  )

  let isPresent = useIsPresent()
  let firstVisibleSectionIndex = Math.max(
    0,
    [{ id: '_top' }, ...sections].findIndex(
      (section) => section.id === visibleSections[0]
    )
  )
  let itemHeight = remToPx(2)
  let height = isPresent
    ? Math.max(1, visibleSections.length) * itemHeight
    : itemHeight
  let top =
    group.links.findIndex((link) => link.href === pathname) * itemHeight +
    firstVisibleSectionIndex * itemHeight

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"
      style={{ borderRadius: 8, height, top }}
    />
  )
}

function ActivePageMarker({ group, pathname }) {
  let itemHeight = remToPx(2)
  let offset = remToPx(0.25)
  let activePageIndex = group.links.findIndex((link) => link.href === pathname)
  let top = offset + activePageIndex * itemHeight

  return (
    <motion.div
      layout
      className="absolute left-2 h-6 w-px bg-emerald-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      style={{ top }}
    />
  )
}

function NavigationGroup({ group, className }) {
  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  let isInsideMobileNavigation = useIsInsideMobileNavigation()
  let [router, sections] = useInitialValue(
    [useRouter(), useSectionStore((s) => s.sections)],
    isInsideMobileNavigation
  )

  let isActiveGroup =
    group.links.findIndex((link) => link.href === router.pathname) !== -1

  return (
    <li className={clsx('relative mt-6', className)}>
      <motion.h2
        layout="position"
        className="text-xs font-semibold text-zinc-900 dark:text-white"
      >
        {group.title}
      </motion.h2>
      <div className="relative mt-3 pl-2">
        <AnimatePresence initial={!isInsideMobileNavigation}>
          {isActiveGroup && (
            <VisibleSectionHighlight group={group} pathname={router.pathname} />
          )}
        </AnimatePresence>
        <motion.div
          layout
          className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
        />
        <AnimatePresence initial={false}>
          {isActiveGroup && (
            <ActivePageMarker group={group} pathname={router.pathname} />
          )}
        </AnimatePresence>
        <ul role="list" className="border-l border-transparent">
          {group.links.map((link) => (
            <motion.li key={link.href} layout="position" className="relative">
              <NavLink href={link.href} active={link.href === router.pathname}>
                {link.title}
              </NavLink>
              <AnimatePresence mode="popLayout" initial={false}>
                {link.href === router.pathname && sections.length > 0 && (
                  <motion.ul
                    role="list"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}
                  >
                    {sections.map((section) => (
                      <li key={section.id}>
                        <NavLink
                          href={`${link.href}#${section.id}`}
                          tag={section.tag}
                          isAnchorLink
                        >
                          {section.title}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export function getNavigationElements(type) {
  if (type == 'docs') {
    return [
      {
        title: 'refinery - getting started',
        links: [
          { title: 'About', href: '/docs/refinery' },
          { title: 'Self-hosted-version', href: '/docs/refinery/getting-started/self-hosted-version' },
          { title: 'Managed version', href: '/docs/refinery/getting-started/managed-version' },
          { title: 'Configuration page', href: '/docs/refinery/getting-started/configuration-page' },
          { title: 'Updating refinery', href: '/docs/refinery/getting-started/updating-refinery' },
        ],
      },
      {
        title: 'refinery - process',
        links: [
          { title: 'Project creation', href: '/docs/refinery/process/project-creation' },
          { title: 'Large language models', href: '/docs/refinery/process/large-language-models' },
          { title: 'Attribute modification', href: '/docs/refinery/process/attribute-modification' },
          { title: 'Labeling tasks', href: '/docs/refinery/process/labeling-tasks' },
          { title: 'Manual labeling workflow', href: '/docs/refinery/process/manual-labeling' },
          { title: 'Building heuristics', href: '/docs/refinery/process/building-heuristics' },
          { title: 'Weak supervision', href: '/docs/refinery/process/weak-supervision' },
          { title: 'Monitoring', href: '/docs/refinery/process/monitoring' },
          { title: 'Data management', href: '/docs/refinery/process/data-management' },
          { title: 'Neural search', href: '/docs/refinery/process/neural-search' },
          { title: 'Comments', href: '/docs/refinery/process/comments' },
          { title: 'Download data', href: '/docs/refinery/process/download-data' },
          { title: 'Model feedback', href: '/docs/refinery/process/model-feedback' },
          { title: 'Python SDK', href: '/docs/refinery/process/python-sdk' },
          { title: 'Access token', href: '/docs/refinery/process/token' },
        ],
      },
      {
        title: 'refinery - multiuser',
        links: [
          { title: 'Managing roles', href: '/docs/refinery/multi-user/managing-roles' },
          { title: 'Minimized labeling view', href: '/docs/refinery/multi-user/minimized-labeling-view' },
        ],
      },
      {
        title: 'bricks',
        links: [
          { title: 'About', href: '/docs/bricks' },
          { title: 'Classifiers', href: '/docs/bricks/classifiers' },
          { title: 'Extractors', href: '/docs/bricks/extractors' },
          { title: 'Generators', href: '/docs/bricks/generators' },
          { title: 'refinery x bricks', href: '/docs/bricks/refinery-integration' },
          { title: 'Roadmap', href: '/docs/bricks/roadmap' },
        ],
      },
      {
        title: 'gates',
        links: [
          { title: 'About', href: '/docs/gates' },
          { title: 'Deploy', href: '/docs/gates/deploy' },
          { title: 'Monitoring', href: '/docs/gates/monitoring' },
          { title: 'Container', href: '/docs/gates/container' },
        ],
      },
      {
        title: 'workflow',
        links: [
          { title: 'About', href: '/docs/workflow' },
          { title: 'Editor', href: '/docs/workflow/editor' },
          { title: 'Integrations', href: '/docs/workflow/integrations' },
          { title: 'refinery x gates x workflow', href: '/docs/workflow/refinery-gates-integration' },
          { title: 'Realtime and batch', href: '/docs/workflow/realtime-and-batch' },
          { title: 'Data marts', href: '/docs/workflow/data-marts' },
        ],
      },
    ]
  } else if (type == 'blog') {

    const announcements = {
      title: 'Announcements',
      links: articles.filter(article => article.category == 'Announcements').map(article => {
        return { title: article.title, href: `/company/blog/${article.slug}` }
      })
    }


    const knowledge = {
      title: 'Knowledge',
      links: articles.filter(article => article.category == 'Knowledge').map(article => {
        return { title: article.title, href: `/company/blog/${article.slug}` }
      })
    }


    const nav = [announcements, knowledge]

    return nav
  } else if (type == 'changelog') {
    return [
      {
        title: 'Changelog',
        links: [
          { title: 'About', href: '/changelog' }
        ]
      },
      {
        title: 'Versions',
        links: logs.map(log => {
          return { title: `${log.title} (${log.href})`, href: `/changelog/${log.href}` }
        })
        // links: [
        //   { title: 'version 1', href: '/changelog/v1_0_0' },
        // ],
      },]
  }
}

export function Navigation(props) {

  const navigation = getNavigationElements(props['type'])
  return (
    <nav {...props}>
      <ul role="list">
        <TopLevelNavItem href="/">API</TopLevelNavItem>
        <TopLevelNavItem href="#">Documentation</TopLevelNavItem>
        <TopLevelNavItem href="#">Support</TopLevelNavItem>
        {navigation.map((group, groupIndex) => (
          <NavigationGroup
            key={group.title}
            group={group}
            className={groupIndex === 0 && 'md:mt-0'}
          />
        ))}
        <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
          <Button href="#" variant="filled" className="w-full">
            Sign in
          </Button>
        </li>
      </ul>
    </nav>
  )
}
