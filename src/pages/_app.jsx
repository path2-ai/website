import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

import { Header } from '@/components/jsx/Header'
import { Footer } from '@/components/jsx/Footer'
import { Animate } from "react-simple-animate";

import { Layout } from '@/components/mdx/Layout'
import * as mdxComponents from '@/components/mdx/mdx'
import { useMobileNavigationStore } from '@/components/mdx/MobileNavigation'

import { CookieBanner } from '@/components/jsx/CookieBanner'

import '@/styles/tailwind.css'
import 'focus-visible'


function onRouteChange() {
  useMobileNavigationStore.getState().close()
}

Router.events.on('hashChangeStart', onRouteChange)
Router.events.on('routeChangeComplete', onRouteChange)
Router.events.on('routeChangeError', onRouteChange)

export const blogPath = '/company/blog/'
export const changelogPath = '/changelog'

export default function App({ Component, pageProps }) {

  const router = useRouter()

  const Body = ({ pageProps, Component }) => {
    // check if any of the paths are partially in the current path

    if ((router.pathname.includes(blogPath) || router.pathname.includes(changelogPath))) {
      return (
        <MDXProvider components={mdxComponents}>
          <Layout  {...pageProps}>
            <Component {...pageProps} />
          </Layout>
          <CookieBanner />
        </MDXProvider>
      )
    } else {
      return (
        <div className='bg-black'>
          <div className="sticky top-0 z-50 backdrop-blur-md opacity-[98%]">
            <Header />
          </div>
          <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
            <Component
              {...pageProps}
            />
          </Animate>
          <Footer />
          <CookieBanner />
        </div>
      )
    }
  }

  return (
    <>
      <Head>
        <title>Kern AI</title>
        <meta
          name="description"
          content="Powering data-centric natural language processing"
        />
      </Head>
      <Body pageProps={pageProps} Component={Component} />
    </>
  )
}
