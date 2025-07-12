import { memo, useMemo } from 'react'
import './styles/Hobbies.css'
import hobbiesData from '../data/hobbies.json'
import AnimatedSection from './ui/AnimatedSection'
import useTranslation from '../hooks/useTranslation'
import { getImageUrlSync } from '@/utils/imageUtils'
import { HobbiesData } from '../types'

const Hobbies = memo(() => {
  const { t } = useTranslation()
  const data = useMemo(() => hobbiesData as HobbiesData, [])

  return (
    <div className="hobbies">
      <div className="container">
        <AnimatedSection animation="fadeIn">
          <header>
            <h1 className="page-title">{t('hobbies.pageTitle')}</h1>
            <p className="page-subtitle">{t('hobbies.pageSubtitle')}</p>
          </header>
        </AnimatedSection>

        <div
          className="hobbies-grid"
          role="list"
          aria-label={t('hobbies.pageTitle')}
        >
          {data.hobbies.map((hobby, index) => (
            <AnimatedSection
              key={`${hobby.name}-${index}`}
              animation="slideUp"
              delay={index * 150}
            >
              <article
                className="hobby-card"
                role="listitem"
                aria-labelledby={`hobby-title-${index}`}
              >
                <div className="hobby-image">
                  <img
                    src={getImageUrlSync(hobby.image)}
                    alt={t('hobbies.hobbyAlt', { hobbyName: hobby.name })}
                  />
                  <div className="hobby-overlay" aria-hidden="true">
                    <span className="hobby-icon">{hobby.icon}</span>
                  </div>
                </div>
                <div className="hobby-content">
                  <div className="hobby-header">
                    <h3 id={`hobby-title-${index}`} className="hobby-name">
                      {hobby.name}
                    </h3>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeIn" delay={800}>
          <section
            className="benefits-section"
            aria-labelledby="benefits-title"
          >
            <h2 id="benefits-title" className="benefits-title">
              {t('hobbies.benefitsTitle')}
            </h2>
            <div className="benefits-grid" role="list">
              {data.benefits.map((benefit, index) => (
                <div
                  key={`${benefit.title}-${index}`}
                  className="benefit-item"
                  role="listitem"
                >
                  <div className="benefit-icon" aria-hidden="true">
                    {benefit.icon}
                  </div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  )
})

Hobbies.displayName = 'Hobbies'

export default Hobbies
