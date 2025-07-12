import './styles/Home.css'
import homeData from '@/data/home.json'
import AnimatedSection from './ui/AnimatedSection'
import useTranslation from '@/hooks/useTranslation'
import { getImageUrlSync } from '@/utils/imageUtils'

const Home = () => {
  const { t } = useTranslation()
  const profileImageUrl = getImageUrlSync(homeData.profileImage)

  console.log(profileImageUrl);

  return (
    <div className="home">
      <section className="hero" aria-labelledby="hero-title">
        <AnimatedSection animation="slideLeft">
          <div className="hero-content">
            <h1
              id="hero-title"
              className="hero-title"
              data-text={t('home.welcomeTitle', { name: homeData.name })}
            >
              {t('home.welcomeTitle', { name: homeData.name })}
            </h1>
            <p className="hero-subtitle">{homeData.subtitle}</p>
            <div className="hero-buttons">
              <a
                href={homeData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label={`${t('home.linkedinButton')} ${t('screenReader.newTabIndicator')}`}
              >
                {t('home.linkedinButton')}
              </a>
              <a
                href={homeData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label={`${t('home.githubButton')} ${t('screenReader.newTabIndicator')}`}
              >
                {t('home.githubButton')}
              </a>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="slideRight" delay={300}>
          <div className="hero-image">
            <img
              src={profileImageUrl}
              alt={t('home.profileImageAlt')}
              className="profile-image"
            />
          </div>
        </AnimatedSection>
      </section>

      <AnimatedSection animation="fadeIn" delay={600}>
        <section className="intro" aria-labelledby="about-title">
          <div className="container">
            <h2 id="about-title">{t('home.aboutMeTitle')}</h2>
            <p>{homeData.aboutMe}</p>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}

export default Home
