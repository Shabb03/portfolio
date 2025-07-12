import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import useTranslation from '../hooks/useTranslation'
import './styles/Navigation.css'

const Navigation = () => {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()
  const isDark = theme === 'dark'

  const navItems = [
    { path: '/', label: t('navigation.home') },
    { path: '/history', label: t('navigation.history') },
    { path: '/skills', label: t('navigation.skills') },
    { path: '/projects', label: t('navigation.projects') },
    { path: '/accomplishments', label: t('navigation.accomplishments') },
    { path: '/hobbies', label: t('navigation.hobbies') },
  ]

  return (
    <nav
      className="navigation"
      role="navigation"
      aria-label={t('aria.mainNavigation')}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo" aria-label={t('common.portfolio')}>
          {t('common.portfolio')}
        </Link>
        <div className="nav-right">
          <ul className="nav-menu" role="menubar">
            {navItems.map(item => (
              <li key={item.path} className="nav-item" role="none">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  role="menuitem"
                  aria-current={
                    location.pathname === item.path ? 'page' : undefined
                  }
                  aria-label={
                    location.pathname === item.path
                      ? `${item.label} ${t('screenReader.currentPageIndicator')}`
                      : item.label
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={t('navigation.toggleTheme')}
            aria-pressed={isDark}
            title={
              isDark
                ? t('navigation.switchToLightMode')
                : t('navigation.switchToDarkMode')
            }
          >
            <span className="sr-only">
              {isDark
                ? t('navigation.switchToLightMode')
                : t('navigation.switchToDarkMode')}
            </span>
            {isDark ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
