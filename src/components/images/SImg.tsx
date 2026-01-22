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
  const [isLoaded, setIsLoaded] = useState(eager);
  const [error, setError] = useState(false);

  const getSrc = useMemo(() => {
    if (srcUrl) {
      return srcUrl;
    }
    if (src) {
      // src가 객체인 경우 처리
      if (typeof src === 'object') {
        return '';
      }
      // src가 이미 전체 URL인 경우
      if (typeof src === 'string' && (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/'))) {
        return src;
      }
      // 상대 경로인 경우
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
    opacity: isLoaded ? 1 : (eager ? 1 : 0),
    transition: transition && transition !== 'fade-transition'
      ? transition
      : (isLoaded ? 'opacity 0.3s ease' : undefined),
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
          alt={alt || ''}
          style={imageStyle}
          sizes={sizes}
          srcSet={srcset}
          onLoad={handleLoad}
          onError={handleError}
          onLoadStart={handleLoadStart}
          loading={eager ? 'eager' : 'lazy'}
        />
      )}
      {error && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f0f0f0',
          color: '#999',
        }}>
          이미지를 불러올 수 없습니다
        </div>
      )}
      {children}
    </div>
  );
};

export default SImg;
