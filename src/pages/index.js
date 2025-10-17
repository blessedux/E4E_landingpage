import React from 'react'
import Head from 'next/head'
import AnimatedText from '../components/AnimatedText'

export default function Home() {
  return React.createElement(React.Fragment, null,
    React.createElement(Head, null,
      React.createElement('title', null, 'E4E - Equity for Everyone'),
      React.createElement('meta', { name: 'description', content: 'Own the future, one startup at a time.' }),
      React.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
      React.createElement('link', { rel: 'icon', href: '/favicon.ico' }),
      React.createElement('link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }),
      React.createElement('link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }),
      React.createElement('link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }),
      React.createElement('link', { rel: 'manifest', href: '/site.webmanifest' })
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
            pointerEvents: 'auto',
            position: 'relative'
          },
          className: 'spline-container'
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
          }),
          // Fade-out gradient overlay
          React.createElement('div', {
            style: {
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              height: '200px',
              background: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 0) 100%)',
              pointerEvents: 'none',
              zIndex: 1
            }
          })
        )
      ),
      
      // E4E Logo in Top Left
      React.createElement('div', {
        style: {
          position: 'fixed',
          top: '2rem',
          left: '2rem',
          zIndex: 10,
          pointerEvents: 'auto'
        }
      },
        React.createElement('div', {
          style: {
            width: '60px',
            height: '60px',
            cursor: 'pointer',
            padding: '0.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          },
          onMouseEnter: (e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
          },
          onMouseLeave: (e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
          }
        },
          React.createElement('img', {
            src: '/android-chrome-192x192.png',
            alt: 'E4E Logo',
            style: {
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }
          })
        )
      ),
      
      // Animated Text Title Overlay
      React.createElement('div', {
        style: {
          position: 'fixed',
          top: '50%',
          left: '2rem',
          transform: 'translateY(-50%)',
          zIndex: 5,
          pointerEvents: 'auto',
          maxWidth: '600px'
        }
      },
        React.createElement(AnimatedText, {
          shortText: "E4E",
          fullText: "EQUITY FOR EVERYONE",
          fontSize: "clamp(2.5rem, 8vw, 4rem)",
          color: "#000000",
          className: "e4e-title"
        })
      ),
      
      // CTA Button at Bottom
      React.createElement('div', { 
        style: { 
          position: 'fixed',
          bottom: '20%',
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