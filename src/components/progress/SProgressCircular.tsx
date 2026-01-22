import React, { useMemo } from 'react';
import './SProgressCircular.scss';

interface SProgressCircularProps {
  size?: number;
  width?: number;
}

export const SProgressCircular: React.FC<SProgressCircularProps> = ({
  size = 50,
  width = 6,
}) => {
  const MAGIC_RADIUS_CONSTANT = 20;
  const CIRCUMFERENCE = 2 * Math.PI * MAGIC_RADIUS_CONSTANT;

  const diameter = useMemo(() => {
    return (MAGIC_RADIUS_CONSTANT / (1 - width / size)) * 2;
  }, [size, width]);

  const strokeWidth = useMemo(() => {
    return (width / size) * diameter;
  }, [size, width, diameter]);

  const containerStyle: React.CSSProperties = {
    height: `${size}px`,
    width: `${size}px`,
    '--stroke-width': `${width}px`,
  } as React.CSSProperties;

  return (
    <div className="s-progress-circular" style={containerStyle}>
      <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true" focusable="false">
        <linearGradient id="gradientColor">
          <stop offset="0%" stopColor="#1B75BB" />
          <stop offset="100%" stopColor="#7C0F80" />
        </linearGradient>
      </svg>
      <svg
        className="s-progress-circular__wrapper"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${diameter} ${diameter}`}
      >
        <circle
          className="s-progress-circular__underlay"
          cx="50%"
          cy="50%"
          fill="transparent"
          r={MAGIC_RADIUS_CONSTANT}
          style={{
            strokeWidth: strokeWidth,
            strokeDasharray: CIRCUMFERENCE,
            strokeDashoffset: 0,
          }}
        />
        <circle
          className="s-progress-circular__overlay"
          fill="transparent"
          cx="50%"
          cy="50%"
          r={MAGIC_RADIUS_CONSTANT}
          style={{
            strokeWidth: strokeWidth,
            strokeDasharray: CIRCUMFERENCE,
            strokeDashoffset: 0,
          }}
        />
      </svg>
    </div>
  );
};

export default SProgressCircular;
