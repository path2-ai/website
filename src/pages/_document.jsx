import { Head, Html, Main, NextScript } from 'next/document'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches

    let isDarkMode = !window.location.href.includes('german-insurers')

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function Document() {


  return (
    <Html lang="en">
      <Head>
        <script src="https://cdn.usefathom.com/script.js" data-site="ZIUTHOCW" defer></script>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      </Head>
      <body className="antialiased bg-slate-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
