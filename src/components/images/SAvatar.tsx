import React, { useState } from 'react';
import './SAvatar.scss';

interface MenuItem {
  title: string;
  value: string;
  visable?: boolean;
}

interface User {
  name: string;
  [key: string]: any;
}

interface SAvatarProps {
  user?: User;
  menuItems?: MenuItem[];
  className?: {
    fontWhite?: boolean;
  };
  onClickMenuItem?: (value: string) => void;
  children?: React.ReactNode;
}

export const SAvatar: React.FC<SAvatarProps> = ({
  user = { name: '-' },
  menuItems = [],
  className = {},
  onClickMenuItem,
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMenuPosition({
      top: rect.bottom + 5,
      left: rect.left,
    });
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (value: string) => {
    onClickMenuItem?.(value);
    setIsMenuOpen(false);
  };

  return (
    <div className="s-avatar">
      <div className="s-user-name" onClick={handleClick}>
        <div className={`s-user-name__text ${className?.fontWhite ? 'fontWhite' : ''}`}>
          {user.name}
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="s-avatar-menu__list"
          style={{
            position: 'fixed',
            top: `${menuPosition.top}px`,
            left: `${menuPosition.left}px`,
            zIndex: 1000,
            backgroundColor: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            minWidth: '150px',
          }}
        >
          {menuItems
            .filter(item => !item.visable)
            .map((item, index) => (
              <div
                key={index}
                className="s-avatar-menu__item"
                onClick={() => handleMenuItemClick(item.value)}
                style={{
                  padding: '12px 16px',
                  cursor: 'pointer',
                  borderBottom: index < menuItems.length - 1 ? '1px solid #f0f0f0' : 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5f5f5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                }}
              >
                {item.title}
              </div>
            ))}
        </div>
      )}
      {children}
    </div>
  );
};

export default SAvatar;
