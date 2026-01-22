import React, { useState, useMemo } from 'react';

interface SSimpleTooltipProps {
  title?: string | null;
  text?: string | null;
  titleWidth?: number | string | null;
  maxWidth?: number | string;
}

export const SSimpleTooltip: React.FC<SSimpleTooltipProps> = ({
  title = null,
  text = null,
  titleWidth = null,
  maxWidth = 500,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const textStr = useMemo(() => text || title, [text, title]);
  const titleWidthStr = useMemo(
    () => (titleWidth ? `${titleWidth}px` : ''),
    [titleWidth]
  );

  const tooltipStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: '8px',
    padding: '8px 12px',
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    color: 'white',
    borderRadius: '4px',
    fontSize: '12px',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
    zIndex: 1000,
    pointerEvents: 'none',
  };

  return (
    <span
      className="d-inline-block text-truncate"
      style={{
        position: 'relative',
        maxWidth: titleWidthStr,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title}
      {isHovered && textStr && (
        <span style={tooltipStyle}>
          {textStr}
        </span>
      )}
    </span>
  );
};

export default SSimpleTooltip;
