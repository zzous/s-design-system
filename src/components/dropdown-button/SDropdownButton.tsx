import React, { useState, useRef, useEffect } from 'react';
import { SBtn } from '../button/SBtn';
import { SIcon } from '../images/SIcon';
import './SDropdownButton.scss';

interface DropdownItem {
  label: string;
  actionCode?: string;
  disabled?: boolean;
  type?: 'multiple' | 'single' | 'none' | null;
  onClick?: () => void | Promise<void>;
}

interface SDropdownButtonProps {
  label?: string;
  disabled?: boolean;
  list?: DropdownItem[];
  whiteList?: string[];
  selectedList?: any[];
  iconName?: string;
}

export const SDropdownButton: React.FC<SDropdownButtonProps> = ({
  label = '',
  disabled = false,
  list = [],
  whiteList = [],
  selectedList = [],
  iconName = 'manage',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const isItemDisabled = (item: DropdownItem): boolean => {
    const isPermitted = whiteList.includes(item.actionCode || '');
    if (!isPermitted) return true;

    if (item.disabled === true) return true;

    const count = selectedList.length;

    switch (item.type) {
      case 'multiple':
        return count === 0;
      case 'single':
        return count !== 1;
      case 'none':
      case null:
      case undefined:
        return false;
      default:
        return false;
    }
  };

  const handleClick = async (item: DropdownItem) => {
    if (isItemDisabled(item)) return;
    await item.onClick?.();
    setIsOpen(false);
  };

  if (list.length === 0) {
    return null;
  }

  return (
    <div className="s-dropdown-button">
      <div ref={buttonRef}>
        <SBtn
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
          className="d-flex align-center"
        >
          <SIcon name={iconName} size={16} className="mr-1" />
          {label}
        </SBtn>
      </div>
      {isOpen && (
        <div ref={menuRef} className="s-dropdown-button__menu">
          {list.map((item, idx) => (
            <div
              key={item?.actionCode || idx}
              className={`s-dropdown-button__item ${isItemDisabled(item) ? 'disabled' : ''}`}
              onClick={() => handleClick(item)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SDropdownButton;
