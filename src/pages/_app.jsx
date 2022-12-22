import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

import { Layout } from '@/components/mdx/Layout'
import * as mdxComponents from '@/components/mdx/mdx'
import { useMobileNavigationStore } from '@/components/mdx/MobileNavigation'

import '@/styles/tailwind.css'
import 'focus-visible'

function onRouteChange() {
  useMobileNavigationStore.getState().close()
}

Router.events.on('hashChangeStart', onRouteChange)
Router.events.on('routeChangeComplete', onRouteChange)
Router.events.on('routeChangeError', onRouteChange)

export default function App({ Component, pageProps }) {

  const router = useRouter()

  const mdxPaths = [
    '/company/blog/',
    '/docs/bricks',
    '/docs/refinery',
    '/docs/gates',
    '/docs/workflow',
  ]

  // check if any of the paths are partially in the current path
  const isMdxPath = mdxPaths.some((path) => router.pathname.includes(path))


  return (
    <>
      <Head>
        <title>Kern AI</title>
        <meta
          name="description"
          content="Powering data-centric natural language processing"
        />
      </Head>
      {isMdxPath ? (
        <MDXProvider components={mdxComponents}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}
