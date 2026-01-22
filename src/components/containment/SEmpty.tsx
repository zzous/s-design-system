import React from 'react';
import './SEmpty.scss';

interface SEmptyProps {
  title?: string;
  description?: string;
  elevation?: number | string;
  outlined?: boolean;
  shadowed?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const SEmpty: React.FC<SEmptyProps> = ({
  title = '',
  description = '',
  elevation,
  outlined = true,
  shadowed = true,
  onClick,
  children,
}) => {
  const cardStyle: React.CSSProperties = {
    padding: '24px',
    borderRadius: '4px',
    border: outlined ? '1px solid #e0e0e0' : 'none',
    boxShadow: shadowed ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
  };

  return (
    <div className="s-empty">
      <div className="s-empty__card" style={cardStyle}>
        {title && <div className="s-empty__card-title">{title}</div>}
        <div className="s-empty__card-content">
          {onClick ? (
            <button
              onClick={onClick}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#007bff',
                fontSize: '18px',
                padding: 0,
              }}
            >
              {description}
            </button>
          ) : (
            <span>{description}</span>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default SEmpty;
