import React from 'react'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return React.createElement(React.Fragment, null,
    React.createElement(Head, null,
      React.createElement('link', {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      }),
      React.createElement('link', {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous'
      }),
      React.createElement('link', {
        href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap',
        rel: 'stylesheet'
      }),
      React.createElement('link', {
        rel: 'preload',
        href: '/default_dark_pink.png',
        as: 'image'
      }),
      React.createElement('style', {
        dangerouslySetInnerHTML: {
          __html: `
            html, body {
              background-image: url('/default_dark_pink.png') !important;
              background-size: cover !important;
              background-position: center !important;
              background-repeat: no-repeat !important;
              background-attachment: fixed !important;
              background-color: #1a0a1a !important;
              margin: 0;
              padding: 0;
              min-height: 100vh;
              overflow-x: hidden;
            }
            #__next {
              background-image: url('/default_dark_pink.png') !important;
              background-size: cover !important;
              background-position: center !important;
              background-repeat: no-repeat !important;
              background-attachment: fixed !important;
              background-color: #1a0a1a !important;
              min-height: 100vh;
              position: relative;
            }
            * {
              box-sizing: border-box;
            }
            div:not([class*="loader"]):not([class*="Loader"]) {
              background-color: transparent !important;
            }
          `
        }
      })
    ),
    React.createElement(Component, pageProps)
  )
}

export default MyApp