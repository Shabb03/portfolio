import { ReactNode } from 'react'
import Navigation from '../Navigation'
import useTranslation from '../../hooks/useTranslation'
import useFocusManagement from '../../hooks/useFocusManagement'
import '../../styles/App.css'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation()

  useFocusManagement()

  return (
    <div className="App">
      <a href="#main-content" className="skip-link">
        {t('common.skipToContent')}
      </a>
      <Navigation />
      <main
        id="main-content"
        className="main-content"
        tabIndex={-1}
        role="main"
        aria-label={t('aria.mainContent')}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
