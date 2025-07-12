import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout'
import ErrorBoundary from './components/error-handling/ErrorBoundary'
import ScrollToTop from './components/ui/ScrollToTop'
import { ThemeProvider } from './contexts/ThemeContext'
import useTranslation from './hooks/useTranslation'
import './styles/App.css'

const Home = lazy(() => import('./components/Home'))
const History = lazy(() => import('./components/History'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Accomplishments = lazy(() => import('./components/Accomplishments'))
const Hobbies = lazy(() => import('./components/Hobbies'))
const NotFound = lazy(() => import('./components/NotFound'))

const Loading = () => {
  const { t } = useTranslation()

  return (
    <div className="loading" role="status" aria-live="polite">
      <div className="loading-spinner" aria-hidden="true"></div>
      <p>{t('common.loading')}</p>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router basename="/portfolio">
          <Layout>
            <ErrorBoundary>
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route
                    path="/accomplishments"
                    element={<Accomplishments />}
                  />
                  <Route path="/hobbies" element={<Hobbies />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </Layout>
          <ScrollToTop />
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
