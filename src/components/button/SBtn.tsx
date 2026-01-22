import React from 'react';
import './SBtn.scss';

interface SBtnProps {
  title?: string;
  to?: string | null;
  height?: string | number | null;
  size?: 'default' | 'x-small' | 'small' | 'large' | 'x-large';
  color?: string;
  icon?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'elevated' | 'outlined' | 'text';
  className?: string;
  style?: React.CSSProperties;
}

export const SBtn: React.FC<SBtnProps> = ({
  title = '',
  to = null,
  height = null,
  size = 'default',
  color = 'blue',
  icon,
  children,
  onClick,
  disabled = false,
  variant = 'elevated',
  className = '',
  style,
}) => {
  const hasIcon = !!icon;
  const hasChildren = !!children;
  const hasTitle = !!title;

  const buttonClasses = [
    's-btn',
    `s-btn--size-${size}`,
    variant !== 'elevated' && `s-btn--variant-${variant}`,
    disabled && 's-btn--disabled',
    className,
  ].filter(Boolean).join(' ');

  const buttonStyle: React.CSSProperties = {
    height: height ? `${height}px` : undefined,
    ...style,
  };

  const buttonProps: any = {
    className: buttonClasses,
    style: buttonStyle,
    'data-s-color': color,
    onClick,
    disabled,
  };

  // 라우터 링크가 필요한 경우 (to prop이 있을 때)
  if (to) {
    // React Router를 사용한다면 Link 컴포넌트로 감싸야 함
    // 여기서는 일반 button으로 처리
  }

  return (
    <button {...buttonProps}>
      {hasIcon && !hasChildren && !hasTitle && (
        <span className="v-btn__prepend">
          <i className={`mdi ${icon}`} />
        </span>
      )}
      {(hasTitle || hasChildren) && (
        <span className="v-btn__content">
          {title}
          {children}
        </span>
      )}
    </button>
  );
};

export default SBtn;
