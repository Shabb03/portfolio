import { memo, useMemo } from 'react'
import './styles/History.css'
import historyData from '../data/history.json'
import AnimatedSection from './ui/AnimatedSection'
import useTranslation from '../hooks/useTranslation'
import { HistoryData } from '../types'

const History = memo(() => {
  const { t } = useTranslation()
  const data = useMemo(() => historyData as HistoryData, [])

  return (
    <div className="history">
      <div className="container">
        <AnimatedSection animation="fadeIn">
          <header>
            <h1 className="page-title">{t('history.pageTitle')}</h1>
            <p className="page-subtitle">{t('history.pageSubtitle')}</p>
          </header>
        </AnimatedSection>

        <section className="timeline" aria-label={t('history.timelineLabel')}>
          {data.timelineData.map((item, index) => (
            <AnimatedSection
              key={`${item.year}-${item.title}-${index}`}
              animation="slideUp"
              delay={index * 150}
            >
              <article
                className={`timeline-item ${item.type} ${index % 2 === 0 ? 'left' : 'right'}`}
                aria-labelledby={`timeline-title-${index}`}
                aria-describedby={`timeline-description-${index}`}
              >
                <div className="timeline-marker" aria-hidden="true"></div>
                <div className="timeline-content">
                  <div
                    className="timeline-year"
                    aria-label={t('history.yearLabel', { year: item.year })}
                  >
                    {item.year}
                  </div>
                  <h3 id={`timeline-title-${index}`} className="timeline-title">
                    {item.title}
                  </h3>
                  <h4 className="timeline-company">{item.company}</h4>
                  {item.description && item.description.length > 0 && (
                    <ul
                      id={`timeline-description-${index}`}
                      className="timeline-description"
                    >
                      {item.description.map((point, pointIndex) => (
                        <li key={pointIndex} className="timeline-point">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div
                    className="timeline-type"
                    aria-label={t('history.typeLabel', { type: item.type })}
                  >
                    <span className="sr-only">
                      {t('history.typeLabel', { type: item.type })}
                    </span>
                    <span
                      className={`type-badge ${item.type}`}
                      aria-hidden="true"
                    >
                      {item.type}
                    </span>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </section>
      </div>
    </div>
  )
})

History.displayName = 'History'

export default History
