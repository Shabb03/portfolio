import { ReactNode, useEffect, useState, memo, useRef } from 'react'
import { AnimationType } from '../../types'
import { useTheme } from '../../hooks/useTheme'
import '../styles/AnimatedSection.css'

interface AnimatedSectionProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
}

const AnimatedSection = memo(
  ({
    children,
    animation = 'fadeIn',
    delay = 0,
    className = '',
  }: AnimatedSectionProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isThemeChanging, setIsThemeChanging] = useState(false)
    const { theme } = useTheme()
    const visibilityTimeoutRef = useRef<NodeJS.Timeout>()
    const themeTimeoutRef = useRef<NodeJS.Timeout>()

    useEffect(() => {
      if (visibilityTimeoutRef.current) {
        clearTimeout(visibilityTimeoutRef.current)
      }

      visibilityTimeoutRef.current = setTimeout(() => {
        setIsVisible(true)
      }, delay)

      return () => {
        if (visibilityTimeoutRef.current) {
          clearTimeout(visibilityTimeoutRef.current)
        }
      }
    }, [delay])

    useEffect(() => {
      if (themeTimeoutRef.current) {
        clearTimeout(themeTimeoutRef.current)
      }

      setIsThemeChanging(true)

      themeTimeoutRef.current = setTimeout(() => {
        setIsThemeChanging(false)
      }, 150)

      return () => {
        if (themeTimeoutRef.current) {
          clearTimeout(themeTimeoutRef.current)
        }
      }
    }, [theme])

    return (
      <div
        className={`animated-section ${animation} ${isVisible ? 'visible' : ''} ${isThemeChanging ? 'theme-changing' : ''} ${className}`}
        style={{
          animationDelay: isThemeChanging ? '0ms' : `${delay}ms`,
          transitionDelay: isThemeChanging ? '0ms' : `${delay}ms`,
        }}
      >
        {children}
      </div>
    )
  }
)

AnimatedSection.displayName = 'AnimatedSection'

export default AnimatedSection
