import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import AnimatedText from '../components/AnimatedText'
import Loader from '../components/Loader'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [audio, setAudio] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // Show preloader for 3 seconds

    return () => clearTimeout(timer)
  }, [])

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Audio initialization and control
  useEffect(() => {
    if (!isLoading) {
      const audioElement = new Audio('/sound/Awalk_edit.mp3')
      audioElement.loop = true
      audioElement.volume = 0.3
      setAudio(audioElement)
      
      // Auto-play with user interaction
      const playAudio = () => {
        audioElement.play().catch(console.error)
        document.removeEventListener('click', playAudio)
        document.removeEventListener('touchstart', playAudio)
      }
      
      document.addEventListener('click', playAudio)
      document.addEventListener('touchstart', playAudio)
      
      return () => {
        audioElement.pause()
        document.removeEventListener('click', playAudio)
        document.removeEventListener('touchstart', playAudio)
      }
    }
  }, [isLoading])

  // Mute/unmute functionality
  const toggleMute = () => {
    if (audio) {
      audio.muted = !audio.muted
      setIsMuted(audio.muted)
    }
  }

  if (isLoading) {
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
      React.createElement('div', {
        style: {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/default_dark_pink.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          transition: 'opacity 0.5s ease-out'
        }
      },
        React.createElement(Loader, null)
      )
    )
  }
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
    React.createElement('main', {
      style: {
        backgroundImage: 'url(/default_dark_pink.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '200vh',
        overflow: 'auto'
      }
    },
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
          pointerEvents: 'auto',
          opacity: 1,
          transition: 'opacity 0.3s ease'
        },
        className: 'spline-outer-container'
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
          left: 'calc(2rem + 5%)',
          zIndex: 10,
          pointerEvents: 'auto',
          opacity: 1,
          transition: 'opacity 0.3s ease'
        }
      },
        React.createElement('div', {
          style: {
            width: '60px',
            height: '60px',
            cursor: 'pointer',
            padding: '0.5rem',
            backgroundColor: 'transparent',
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          },
          onMouseEnter: (e) => {
            e.target.style.transform = 'scale(1.05)';
          },
          onMouseLeave: (e) => {
            e.target.style.transform = 'scale(1)';
          }
        },
          React.createElement('img', {
            src: '/e4e_logo.png',
            alt: 'E4E Logo',
            style: {
              width: '200%',
              height: '200%',
              objectFit: 'contain',
              transform: 'translate(-25%, -25%)'
            }
          })
        )
      ),

      // Sound Control Icon - Top Right
      React.createElement('div', {
        style: {
          position: 'fixed',
          top: '2rem',
          right: '2rem',
          zIndex: 10,
          pointerEvents: 'auto',
          opacity: 1,
          transition: 'opacity 0.3s ease'
        }
      },
        React.createElement('button', {
          onClick: toggleMute,
          style: {
            width: '50px',
            height: '50px',
            backgroundColor: 'transparent',
            border: '2px solid #000000',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            fontSize: '1.2rem',
            color: '#000000'
          },
          onMouseEnter: (e) => {
            e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            e.target.style.transform = 'scale(1.05)';
          },
          onMouseLeave: (e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.transform = 'scale(1)';
          }
        },
          isMuted ? '🔇' : '🔊'
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
          maxWidth: '420px',
          opacity: 1,
          transition: 'opacity 0.3s ease'
        },
        className: 'animated-title'
      },
        React.createElement(AnimatedText, {
          shortText: "E4E",
          fullText: "EQUITY FOR EVERYONE",
          fontSize: "clamp(2.5rem, 8vw, 4rem)",
          color: "#000000",
          className: "e4e-title",
          scrollY: scrollY
        })
      ),
      
      // Slogan near CTA Button
      React.createElement('div', {
        style: {
          position: 'fixed',
          bottom: '16%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          pointerEvents: 'auto',
          textAlign: 'center',
          opacity: Math.max(0, 1 - scrollY / 300),
          transition: 'opacity 0.3s ease'
        },
        className: 'slogan'
      },
        React.createElement('p', {
          style: {
            fontSize: '1.5rem',
            fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
            fontWeight: '300',
            color: '#000000',
            letterSpacing: '0.05em',
            margin: '0 0 2rem 0',
            lineHeight: '1.4',
            maxWidth: '100vw',
            width: '100vw',
            wordBreak: 'break-word',
            userSelect: 'none',
            cursor: 'default',
            padding: '0 1rem',
            boxSizing: 'border-box'
          }
        }, 'Own the future, one startup at a time.')
      ),

      // Animated Scroll Down Chevron
      React.createElement('div', {
        style: {
          position: 'fixed',
          bottom: 'calc(16% + 7.2vh)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          pointerEvents: 'auto',
          opacity: Math.max(0, 1 - scrollY / 300),
          transition: 'opacity 0.3s ease',
          animation: 'bounce 2s infinite'
        },
        className: 'scroll-chevron'
      },
        React.createElement('div', {
          style: {
            width: '40px',
            height: '40px',
            border: '2px solid #000000',
            borderTop: 'none',
            borderLeft: 'none',
            transform: 'rotate(45deg)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          },
          onMouseEnter: (e) => {
            e.target.style.borderColor = '#333333';
            e.target.style.transform = 'rotate(45deg) scale(1.1)';
          },
          onMouseLeave: (e) => {
            e.target.style.borderColor = '#000000';
            e.target.style.transform = 'rotate(45deg) scale(1)';
          },
          onClick: () => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }
        })
      ),
      
      // CTA Button at Bottom
      React.createElement('div', { 
        style: { 
          position: 'fixed',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          pointerEvents: 'auto',
          opacity: 1,
          transition: 'opacity 0.3s ease'
        },
        className: 'cta-button'
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
              fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
              fontWeight: '600',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.2s ease',
              transform: 'translateY(0)',
              position: 'relative',
              overflow: 'hidden',
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
      ),

      // Second Title - Bottom Right (fades in on scroll)
      React.createElement('div', {
        style: {
          position: 'fixed',
          bottom: 'calc(10vh + 2rem)',
          right: '2rem',
          zIndex: 10,
          pointerEvents: 'auto',
          opacity: Math.min(1, Math.max(0, (scrollY - 200) / 200)),
          transition: 'opacity 0.5s ease',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '2rem',
          maxWidth: '500px'
        },
        className: 'second-title'
      },
        React.createElement('h2', {
          style: {
            fontSize: '1.5rem',
            fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
            fontWeight: '300',
            color: '#000000',
            letterSpacing: '0.05em',
            margin: '0',
            lineHeight: '1.4',
            textAlign: 'right',
            userSelect: 'none',
            cursor: 'default',
            whiteSpace: 'pre-line'
          }
        }, 
          'With ',
          React.createElement('strong', { style: { fontWeight: '600' } }, 'e4e'),
          ', anyone can invest \nin startups from $50.\nWatch founders pitch, swipe right,\n and back those you believe in.\nFunds unlock only when founders deliver.'
        )
      )
    )
  )
}