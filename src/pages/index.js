import React from 'react'
import Head from 'next/head'

export default function Home() {
  return React.createElement(React.Fragment, null,
    React.createElement(Head, null,
      React.createElement('title', null, 'E4E - Equity for Everyone'),
      React.createElement('meta', { name: 'description', content: 'Own the future, one startup at a time.' }),
      React.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
      React.createElement('link', { rel: 'icon', href: '/favicon.ico' })
    ),
    React.createElement('main', null,
      // Background Spline Container
      React.createElement('div', {
        style: {
          position: 'fixed',
          top: '8px',
          left: '8px',
          right: '8px',
          bottom: '8px',
          borderRadius: '16px',
          overflow: 'hidden',
          zIndex: 2,
          pointerEvents: 'auto'
        }
      },
        React.createElement('div', {
          style: {
            width: '130%',
            height: '130%',
            transform: 'translate(-15%, -15%)',
            pointerEvents: 'auto'
          }
        },
          React.createElement('iframe', {
            src: 'https://my.spline.design/interactiveaiwebsite-ASCI5QutUJ0IxBaSVTx2EkRz/',
            frameBorder: '0',
            width: '100%',
            height: '100%',
            style: {
              border: 'none',
              borderRadius: '16px',
              pointerEvents: 'auto'
            },
            allow: 'camera; microphone; fullscreen; display-capture',
            allowFullScreen: true
          })
        )
      ),
      
      // CTA Button at Bottom
      React.createElement('div', { 
        style: { 
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          pointerEvents: 'auto'
        }
      },
        React.createElement('a', {
          href: 'https://docs.google.com/forms/d/e/1FAIpQLScbyP21VTXpYSbwGe2UHaXAoz097z1mnbkgTn6WZxv8DSW4Zw/viewform?usp=dialog',
          target: '_blank',
          rel: 'noopener noreferrer',
          style: {
            textDecoration: 'none',
            display: 'inline-block'
          }
        },
          React.createElement('button', {
            style: {
              backgroundColor: '#000000',
              color: '#ffffff',
              padding: '1rem 2rem',
              fontSize: '1.125rem',
              fontWeight: '600',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.2s ease',
              transform: 'translateY(0)',
              position: 'relative',
              overflow: 'hidden'
            },
            onMouseEnter: (e) => {
              e.target.style.backgroundColor = '#333333';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3), 0 6px 12px rgba(0, 0, 0, 0.2)';
            },
            onMouseLeave: (e) => {
              e.target.style.backgroundColor = '#000000';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)';
            },
            onMouseDown: (e) => {
              e.target.style.transform = 'translateY(1px)';
              e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)';
            },
            onMouseUp: (e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3), 0 6px 12px rgba(0, 0, 0, 0.2)';
            }
          }, 'Join Early Access')
        )
      )
    )
  )
}