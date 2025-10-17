import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const AnimatedText = ({ 
  shortText = "E4E",
  fullText = "EQUITY FOR EVERYONE", 
  fontSize = "4rem",
  color = "#000000",
  className = ""
}) => {
  const textRef = useRef(null);
  const sloganRef = useRef(null);
  const [currentText, setCurrentText] = useState(shortText);

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll('.letter');
    
    // Initial state - letters are invisible and positioned
    gsap.set(letters, {
      opacity: 0,
      y: 50,
      rotationX: 90
    });

    // Animation on mount - show E4E first
    gsap.to(letters, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.1,
      delay: 0.5
    });

    // After 2 seconds, expand to full text
    const expandTimer = setTimeout(() => {
      setCurrentText(fullText);
      
      // Re-animate with new text
      setTimeout(() => {
        const newLetters = textRef.current.querySelectorAll('.letter');
        gsap.fromTo(newLetters, 
          {
            opacity: 0,
            scale: 0.8,
            y: 20
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.05,
            delay: 0.2
          }
        );
        }, 100);
      }, 2000);

      // Show slogan after title expansion
      const sloganTimer = setTimeout(() => {
        if (sloganRef.current) {
          gsap.fromTo(sloganRef.current,
            {
              opacity: 0,
              y: 30
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              delay: 0.5
            }
          );
        }
      }, 3500);

    // Hover animation
    const handleMouseEnter = () => {
      const currentLetters = textRef.current.querySelectorAll('.letter');
      gsap.to(currentLetters, {
        scale: 1.1,
        color: "#333333",
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.05
      });
    };

    const handleMouseLeave = () => {
      const currentLetters = textRef.current.querySelectorAll('.letter');
      gsap.to(currentLetters, {
        scale: 1,
        color: color,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.05
      });
    };

    textRef.current.addEventListener('mouseenter', handleMouseEnter);
    textRef.current.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        clearTimeout(expandTimer);
        clearTimeout(sloganTimer);
        if (textRef.current) {
          textRef.current.removeEventListener('mouseenter', handleMouseEnter);
          textRef.current.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
  }, [shortText, fullText, color]);

  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  },
    React.createElement('div', {
      ref: textRef,
      className: `animated-text ${className}`,
      style: {
        fontSize: fontSize,
        fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        fontWeight: '500',
        letterSpacing: '-2px',
        textTransform: 'uppercase',
        cursor: 'default',
        userSelect: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        lineHeight: '1.1',
        marginBottom: '1rem',
        maxWidth: '90vw'
      }
    },
      currentText.split(' ').map((word, wordIndex) => 
        React.createElement('div', {
          key: wordIndex,
          style: {
            display: 'inline-block',
            marginRight: wordIndex < currentText.split(' ').length - 1 ? '0.5em' : '0'
          }
        },
          word.split('').map((letter, letterIndex) => 
            React.createElement('span', {
              key: `${wordIndex}-${letterIndex}`,
              className: 'letter',
              style: {
                display: 'inline-block',
                color: color,
                transformOrigin: 'center bottom'
              }
            }, letter)
          )
        )
      )
    ),
    React.createElement('p', {
      ref: sloganRef,
      className: 'slogan',
      style: {
        fontSize: '1.5rem',
        fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        fontWeight: '300',
        color: '#000000',
        letterSpacing: '0.05em',
        opacity: 0,
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
  );
};

export default AnimatedText;
