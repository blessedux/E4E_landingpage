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
      })
    ),
    React.createElement(Component, pageProps)
  )
}

export default MyApp