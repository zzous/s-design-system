import React from 'react';
// import './ExampleButton.scss';

interface ExampleButtonProps {
  title?: string;
  color?: 'blue' | 'green' | 'red';
  size?: 'small' | 'default' | 'large';
  onClick?: () => void;
  disabled?: boolean;
}

/**
 * React 컴포넌트 변환 예시
 * Vue의 SBtn 컴포넌트를 React로 변환한 예시입니다.
 */
export const ExampleButton: React.FC<ExampleButtonProps> = ({
  title = '',
  color = 'blue',
  size = 'default',
  onClick,
  disabled = false,
}) => {
  const buttonClasses = [
    's-btn',
    `s-btn--${color}`,
    `s-btn--${size}`,
    disabled && 's-btn--disabled',
  ].filter(Boolean).join(' ');

  const styles: React.CSSProperties = {
    padding: size === 'small' ? '4px 8px' : size === 'large' ? '12px 24px' : '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: size === 'small' ? '12px' : size === 'large' ? '16px' : '14px',
    backgroundColor: color === 'blue' ? '#1976d2' : color === 'green' ? '#4caf50' : '#f44336',
    color: 'white',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.3s ease',
  };

  return (
    <button
      className={buttonClasses}
      style={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default ExampleButton;
