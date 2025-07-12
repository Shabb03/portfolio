import { useState, useRef, useEffect, memo } from 'react'
import '../styles/LazyImage.css'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  width?: number
  height?: number
  loading?: 'lazy' | 'eager'
}

const LazyImage = memo(
  ({
    src,
    alt,
    className = '',
    placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMzUgOTBIMTY1VjExMEgxMzVWOTBaIiBmaWxsPSIjOUI5QkEwIi8+CjxwYXRoIGQ9Ik0xMjAgMTIwSDE4MFYxMzBIMTIwVjEyMFoiIGZpbGw9IiM5QjlCQTAiLz4KPC9zdmc+',
    width,
    height,
    loading = 'lazy',
  }: LazyImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isError, setIsError] = useState(false)
    const [imageSrc, setImageSrc] = useState(placeholder)
    const imgRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
      const img = new Image()
      img.onload = () => {
        setImageSrc(src)
        setIsLoaded(true)
      }
      img.onerror = () => {
        setIsError(true)
      }
      img.src = src
    }, [src])

    return (
      <div className={`lazy-image-container ${className}`}>
        <img
          ref={imgRef}
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          className={`lazy-image ${isLoaded ? 'loaded' : ''} ${isError ? 'error' : ''}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsError(true)}
        />
        {!isLoaded && !isError && (
          <div className="lazy-image-placeholder">
            <div className="loading-spinner"></div>
          </div>
        )}
        {isError && (
          <div className="lazy-image-error">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21,15 16,10 5,21" />
            </svg>
            <p>Image failed to load</p>
          </div>
        )}
      </div>
    )
  }
)

LazyImage.displayName = 'LazyImage'

export default LazyImage
