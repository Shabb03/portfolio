import { memo, useMemo } from 'react'
import './styles/Accomplishments.css'
import accomplishmentsData from '../data/accomplishments.json'
import AnimatedSection from './ui/AnimatedSection'
import useTranslation from '../hooks/useTranslation'
import { AccomplishmentsData } from '../types'

const Accomplishments = memo(() => {
  const { t } = useTranslation()
  const data = useMemo(() => accomplishmentsData as AccomplishmentsData, [])

  return (
    <div className="accomplishments">
      <div className="container">
        <AnimatedSection animation="fadeIn">
          <header>
            <h1 className="page-title">{t('accomplishments.pageTitle')}</h1>
            <p className="page-subtitle">{t('accomplishments.pageSubtitle')}</p>
          </header>
        </AnimatedSection>

        <div
          className="accomplishments-grid"
          role="list"
          aria-label={t('accomplishments.pageTitle')}
        >
          {data.accomplishments.map((item, index) => (
            <AnimatedSection
              key={`${item.title}-${index}`}
              animation="scaleIn"
              delay={index * 100}
            >
              <article
                className={`accomplishment-card ${item.category}`}
                role="listitem"
                aria-labelledby={`accomplishment-title-${index}`}
                aria-describedby={`accomplishment-description-${index}`}
              >
                <div className="accomplishment-icon" aria-hidden="true">
                  <span className="icon">{item.icon}</span>
                </div>
                <div className="accomplishment-content">
                  <div className="accomplishment-header">
                    <h3
                      id={`accomplishment-title-${index}`}
                      className="accomplishment-title"
                    >
                      {item.title}
                    </h3>
                    <time className="accomplishment-date" dateTime={item.date}>
                      {item.date}
                    </time>
                  </div>
                  <h4 className="accomplishment-organization">
                    {item.organization}
                  </h4>
                  <p
                    id={`accomplishment-description-${index}`}
                    className="accomplishment-description"
                  >
                    {item.description}
                  </p>
                  <div
                    className="accomplishment-category"
                    aria-label={t('accomplishments.categoryLabel', {
                      category: t(
                        `accomplishments.categories.${item.category}`
                      ),
                    })}
                  >
                    <span className="sr-only">
                      {t('accomplishments.categoryLabel', {
                        category: t(
                          `accomplishments.categories.${item.category}`
                        ),
                      })}
                    </span>
                    <span className="category-badge" aria-hidden="true">
                      {t(`accomplishments.categories.${item.category}`)}
                    </span>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
})

Accomplishments.displayName = 'Accomplishments'

export default Accomplishments
