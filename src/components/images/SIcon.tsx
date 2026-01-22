import React, { useMemo } from 'react';
import { icons } from './icons';
import './SIcon.scss';

interface SIconProps {
  name: string;
  size?: string | number;
  color?: string;
  className?: string;
  [key: string]: any;
}

export const SIcon: React.FC<SIconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  className = '',
  ...attrs
}) => {
  const IconComponent = useMemo(() => {
    const iconFn = icons[name] || icons['expand-more'];
    if (!iconFn) return null;
    return iconFn;
  }, [name]);

  const iconStyle: React.CSSProperties = {
    width: typeof size === 'number' ? `${size}px` : size,
    height: typeof size === 'number' ? `${size}px` : size,
    color: color,
  };

  const rootClass = useMemo(() => {
    const classes = ['s-icon'];
    if (className) classes.push(className);
    return classes.join(' ');
  }, [className]);

  if (!IconComponent) return null;

  return <IconComponent className={rootClass} style={iconStyle} {...attrs} />;
};

export default SIcon;
