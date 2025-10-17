import React from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return React.createElement(Component, pageProps)
}

export default MyApp