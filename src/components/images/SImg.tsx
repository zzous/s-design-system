import React, { useState, useMemo } from 'react';
import './SImg.scss';

interface SImgProps {
  src?: string | object;
  srcUrl?: string;
  lazySrc?: string;
  lazySrcUrl?: string;
  publicPath?: string;
  alt?: string;
  aspectRatio?: string | number;
  cover?: boolean;
  eager?: boolean;
  gradient?: string;
  options?: {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number;
  };
  sizes?: string;
  srcset?: string;
  transition?: string;
  width?: string | number;
  className?: {
    [key: string]: boolean;
  };
  bind?: { [key: string]: any };
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onLoadStart?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  children?: React.ReactNode;
}

export const SImg: React.FC<SImgProps> = ({
  src = '',
  srcUrl,
  lazySrc,
  lazySrcUrl,
  publicPath = '',
  alt,
  aspectRatio,
  cover = false,
  eager = false,
  gradient,
  options,
  sizes,
  srcset,
  transition = 'fade-transition',
  width,
  className = {},
  bind = {},
  onError,
  onLoad,
  onLoadStart,
  children,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const getSrc = useMemo(() => {
    if (srcUrl) {
      return srcUrl;
    }
    if (src) {
      const srcPath = publicPath ? `${publicPath}/${src}` : `/assets/images/${src}`;
      return srcPath;
    }
    return '';
  }, [src, srcUrl, publicPath]);

  const getLazySrc = useMemo(() => {
    if (lazySrcUrl) {
      return lazySrcUrl;
    }
    if (lazySrc) {
      const lazySrcPath = publicPath ? `${publicPath}/${lazySrc}` : `/assets/images/${lazySrc}`;
      return lazySrcPath;
    }
    return undefined;
  }, [lazySrc, lazySrcUrl, publicPath]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setError(true);
    onError?.(e);
  };

  const handleLoadStart = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    onLoadStart?.(e);
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
    aspectRatio: aspectRatio ? (typeof aspectRatio === 'number' ? aspectRatio.toString() : aspectRatio) : undefined,
    overflow: 'hidden',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: cover ? '100%' : 'auto',
    objectFit: cover ? 'cover' : 'contain',
    backgroundImage: gradient ? `linear-gradient(${gradient})` : undefined,
    opacity: isLoaded ? 1 : 0,
    transition: transition ? `opacity ${transition}` : undefined,
  };

  const placeholderStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    display: isLoaded ? 'none' : 'block',
  };

  const classNames = ['s-img', ...Object.keys(className).filter(key => className[key])].join(' ');

  return (
    <div className={classNames} style={containerStyle} {...bind}>
      {getLazySrc && !isLoaded && (
        <img
          src={getLazySrc}
          alt={alt}
          style={placeholderStyle}
          onError={handleError}
        />
      )}
      {!error && getSrc && (
        <img
          src={getSrc}
          alt={alt}
          style={imageStyle}
          sizes={sizes}
          srcSet={srcset}
          onLoad={handleLoad}
          onError={handleError}
          onLoadStart={handleLoadStart}
          loading={eager ? 'eager' : 'lazy'}
        />
      )}
      {children}
    </div>
  );
};

export default SImg;
