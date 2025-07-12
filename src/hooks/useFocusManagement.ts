import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export const useFocusManagement = () => {
  const location = useLocation()
  const previousLocation = useRef(location.pathname)

  useEffect(() => {
    if (previousLocation.current !== location.pathname) {
      const mainContent = document.getElementById('main-content')
      if (mainContent) {
        setTimeout(() => {
          mainContent.focus()
        }, 100)
      }

      previousLocation.current = location.pathname
    }
  }, [location.pathname])
}

export default useFocusManagement
