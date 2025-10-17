"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import React from "react"

export function LayeredText({
  lines = [
    { top: "\u00A0", bottom: "EQUITY" },
    { top: "EQUITY", bottom: "FOR" },
    { top: "FOR", bottom: "EVERYONE" },
    { top: "EVERYONE", bottom: "FUTURE" },
    { top: "FUTURE", bottom: "OWNERSHIP" },
    { top: "OWNERSHIP", bottom: "FREEDOM" },
    { top: "FREEDOM", bottom: "\u00A0" },
  ],
  fontSize = "72px",
  fontSizeMd = "36px",
  lineHeight = 60,
  lineHeightMd = 35,
  className = "",
}) {
  const containerRef = useRef(null)
  const timelineRef = useRef()

  const calculateTranslateX = (index) => {
    const baseOffset = 35
    const baseOffsetMd = 20
    const centerIndex = Math.floor(lines.length / 2)
    return {
      desktop: (index - centerIndex) * baseOffset,
      mobile: (index - centerIndex) * baseOffsetMd,
    }
  }

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const paragraphs = container.querySelectorAll("p")

    timelineRef.current = gsap.timeline({ paused: true })

    timelineRef.current.to(paragraphs, {
      y: window.innerWidth >= 768 ? -60 : -35,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.08,
    })

    const handleMouseEnter = () => {
      timelineRef.current?.play()
    }

    const handleMouseLeave = () => {
      timelineRef.current?.reverse()
    }

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
      timelineRef.current?.kill()
    }
  }, [lines])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ 
        margin: '0 auto', 
        padding: '6rem 0', 
        fontFamily: 'sans-serif', 
        fontWeight: '900', 
        letterSpacing: '-2px', 
        textTransform: 'uppercase', 
        color: 'black', 
        WebkitFontSmoothing: 'antialiased', 
        cursor: 'default',
        userSelect: 'none',
        fontSize, 
        textAlign: 'center'
      }}
    >
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {lines.map((line, index) => {
          const translateX = calculateTranslateX(index)
          return (
            <li
              key={index}
              style={{
                overflow: 'hidden',
                position: 'relative',
                height: `${lineHeight}px`,
                transform: `translateX(${translateX.desktop}px) skew(${index % 2 === 0 ? "60deg, -30deg" : "0deg, -30deg"}) scaleY(${index % 2 === 0 ? "0.66667" : "1.33333"})`,
              }}
            >
              <p
                style={{
                  lineHeight: '55px',
                  padding: '0 15px',
                  verticalAlign: 'top',
                  whiteSpace: 'nowrap',
                  margin: 0,
                  height: `${lineHeight}px`,
                }}
              >
                {line.top}
              </p>
              <p
                style={{
                  lineHeight: '55px',
                  padding: '0 15px',
                  verticalAlign: 'top',
                  whiteSpace: 'nowrap',
                  margin: 0,
                  height: `${lineHeight}px`,
                }}
              >
                {line.bottom}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}