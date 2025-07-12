import { Component, ReactNode, ErrorInfo } from 'react'
import useTranslation from '../../hooks/useTranslation'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

interface ErrorFallbackProps {
  error: Error | null
  onReset: () => void
}

const ErrorFallback = ({ error, onReset }: ErrorFallbackProps) => {
  const { t } = useTranslation()

  return (
    <div className="error-container" role="alert" aria-labelledby="error-title">
      <h2 id="error-title">{t('errors.somethingWentWrong')}</h2>
      <p>{t('errors.errorMessage')}</p>
      {error && (
        <details className="error-details">
          <summary>{t('common.errorDetails')}</summary>
          <p className="error-message">{error.message}</p>
        </details>
      )}
      <button
        className="btn btn-primary"
        onClick={onReset}
        aria-label={t('common.tryAgain')}
      >
        {t('common.tryAgain')}
      </button>
    </div>
  )
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <ErrorFallback error={this.state.error} onReset={this.handleReset} />
        )
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
