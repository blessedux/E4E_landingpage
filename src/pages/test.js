import React from 'react'
import Head from 'next/head'
import { LayeredText } from '../components/LayeredText'

export default function Test() {
  return React.createElement(React.Fragment, null,
    React.createElement(Head, null,
      React.createElement('title', null, 'E4E - Test Page'),
      React.createElement('meta', { name: 'description', content: 'Test page for LayeredText component' }),
      React.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
      React.createElement('link', { rel: 'icon', href: '/favicon.ico' })
    ),
    React.createElement('main', {
      style: {
        backgroundImage: 'url(/default_dark_pink.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }
    },
      React.createElement('div', {
        style: {
          width: '100%',
          maxWidth: '1200px',
          textAlign: 'center'
        }
      },
        React.createElement('h1', {
          style: {
            fontSize: '2rem',
            fontWeight: '600',
            color: '#000000',
            marginBottom: '3rem',
            userSelect: 'none'
          }
        }, 'LayeredText Component Test'),
        
        React.createElement(LayeredText, {
          lines: [
            { top: "\u00A0", bottom: "EQUITY" },
            { top: "EQUITY", bottom: "FOR" },
            { top: "FOR", bottom: "EVERYONE" },
            { top: "EVERYONE", bottom: "FUTURE" },
            { top: "FUTURE", bottom: "OWNERSHIP" },
            { top: "OWNERSHIP", bottom: "FREEDOM" },
            { top: "FREEDOM", bottom: "\u00A0" },
          ],
          fontSize: "72px",
          fontSizeMd: "36px",
          lineHeight: 60,
          lineHeightMd: 35,
          className: "test-layered-text"
        }),
        
        React.createElement('p', {
          style: {
            fontSize: '1.2rem',
            color: '#000000',
            marginTop: '3rem',
            userSelect: 'none',
            opacity: 0.8
          }
        }, 'Hover over the text above to see the layered animation effect')
      )
    )
  )
}
