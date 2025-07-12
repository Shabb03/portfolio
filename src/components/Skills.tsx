import { useMemo, memo } from 'react'
import './styles/Skills.css'
import skillsData from '../data/skills.json'
import AnimatedSection from './ui/AnimatedSection'
import useTranslation from '../hooks/useTranslation'
import { SkillData } from '../types'

const Skills = memo(() => {
  const { t } = useTranslation()
  const skills = useMemo(() => skillsData as SkillData[], [])

  return (
    <div className="skills">
      <div className="skills-container">
        <AnimatedSection animation="fadeIn">
          <header>
            <h1 className="page-title">{t('skills.pageTitle')}</h1>
            <p className="page-subtitle">{t('skills.pageSubtitle')}</p>
          </header>
        </AnimatedSection>

        <div
          className="skills-grid"
          role="list"
          aria-label={t('skills.pageTitle')}
        >
          {skills.map((category, index) => (
            <AnimatedSection
              key={category.category}
              animation="slideUp"
              delay={index * 200}
            >
              <section
                className="skill-category"
                role="listitem"
                aria-labelledby={`category-title-${index}`}
              >
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3 id={`category-title-${index}`}>{category.category}</h3>
                </div>
                <div className="skills-wrapper">
                  {category.skills.map((skill, skillIndex: number) => (
                    <div
                      className="skill-item"
                      key={`${skill.name}-${skillIndex}`}
                      style={{
                        animationDelay: `${skillIndex * 100}ms`,
                      }}
                    >
                      <div className="skill-content">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-shine"></div>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
})

Skills.displayName = 'Skills'

export default Skills
