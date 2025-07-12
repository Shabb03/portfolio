import { useMemo, memo } from 'react'
import './styles/Projects.css'
import projectsData from '../data/projects.json'
import LazyImage from './ui/LazyImage'
import AnimatedSection from './ui/AnimatedSection'
import useTranslation from '../hooks/useTranslation'
import { getImageUrlSync } from '@/utils/imageUtils'
import { ProjectData } from '../types'

const Projects = memo(() => {
  const { t } = useTranslation()
  const projects = useMemo(() => projectsData as ProjectData[], [])

  return (
    <div className="projects">
      <div className="projects-container">
        <AnimatedSection animation="fadeIn">
          <header>
            <h1 className="page-title">{t('projects.pageTitle')}</h1>
            <p className="page-subtitle">{t('projects.pageSubtitle')}</p>
          </header>
        </AnimatedSection>

        <div
          className="projects-grid"
          role="list"
          aria-label={t('projects.pageTitle')}
        >
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              animation="slideUp"
              delay={index * 150}
            >
              <article
                className="project-card"
                role="listitem"
                aria-labelledby={`project-title-${index}`}
              >
                {project.featured && (
                  <div className="project-featured" aria-hidden="true"></div>
                )}
                <div className="project-image">
                  <LazyImage
                    src={getImageUrlSync(project.image)}
                    alt={t('projects.projectImageAlt', {
                      title: project.title,
                    })}
                    className="project-img"
                  />
                </div>
                <div className="project-content">
                  <h3 id={`project-title-${index}`} className="project-title">
                    {project.title}
                  </h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta">
                    <div
                      className="project-technologies"
                      aria-label={t('projects.projectTechnologies', {
                        technologies: project.technologies.join(', '),
                      })}
                    >
                      <span className="sr-only">
                        {t('projects.projectTechnologies', {
                          technologies: project.technologies.join(', '),
                        })}
                      </span>
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={`${tech}-${techIndex}`}
                          className="tech-tag"
                          aria-hidden="true"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="project-links-spaced">
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github-link"
                        aria-label={`${t('projects.code')} repository for ${project.title}`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        {t('projects.code')}
                      </a>
                    </div>
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

Projects.displayName = 'Projects'

export default Projects
