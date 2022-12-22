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

  console.log(router.pathname)

  return (
    <>
      <Head>
        <title>Kern AI</title>
        <meta name="description" content={pageProps.description} />
      </Head>
      {router.pathname === '/' ? (
        <Component {...pageProps} />
      ) : (
        <MDXProvider components={mdxComponents}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      )}
    </>
  )
}
