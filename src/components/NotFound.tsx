import { Link } from 'react-router-dom'
import './styles/NotFound.css'
import useTranslation from '../hooks/useTranslation'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className="not-found" role="main" aria-labelledby="not-found-title">
      <h1 id="not-found-title" className="not-found-title">
        {t('errors.notFoundTitle')}
      </h1>
      <h2 className="not-found-subtitle">{t('errors.pageNotFound')}</h2>
      <p className="not-found-message">{t('errors.pageNotFoundMessage')}</p>
      <Link to="/" className="home-button" aria-label={t('common.goHome')}>
        {t('common.goHome')}
      </Link>
    </div>
  )
}

export default NotFound
