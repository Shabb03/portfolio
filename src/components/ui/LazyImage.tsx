import React, { useState, useCallback, useRef } from "react";
import { useScrollAnimation } from "../../hooks";

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: string;
  srcSet?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIHN0b3AtY29sb3I9IiNmMGYwZjAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjZTBlMGUwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==",
  srcSet,
  sizes,
  loading = "lazy",
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  const imgRef = useRef<HTMLImageElement>(null);

  const { ref: containerRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  React.useEffect(() => {
    if (isVisible && !isLoaded && !hasError && currentSrc === placeholder) {
      setCurrentSrc(src);
    }
  }, [isVisible, isLoaded, hasError, currentSrc, placeholder, src]);

  const imageClasses = `
    lazy-image
    ${isLoaded ? "loaded" : "loading"}
    ${hasError ? "error" : ""}
    ${className}
  `.trim();

  const containerClasses = `lazy-image-container ${
    width ? "has-fixed-width" : ""
  } ${height ? "has-fixed-height" : ""}`.trim();

  return (
    <div
      ref={containerRef}
      className={containerClasses}
      data-width={width}
      data-height={height}
    >
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        className={imageClasses}
        srcSet={isVisible && !hasError ? srcSet : undefined}
        sizes={sizes}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        decoding="async"
      />

      {!isLoaded && !hasError && <div className="image-placeholder" />}
      {hasError && <div className="image-error">Image not available</div>}
    </div>
  );
};

export default LazyImage;
