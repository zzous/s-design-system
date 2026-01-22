import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { SProgressCircular } from './SProgressCircular';
import './SGlobalProgress.scss';

interface SGlobalProgressProps {
  loadingMessage?: string;
  modelValue?: boolean;
  teleportId?: string;
}

export const SGlobalProgress: React.FC<SGlobalProgressProps> = ({
  loadingMessage = 'Check-loading',
  modelValue = false,
  teleportId = 'destination',
}) => {
  useEffect(() => {
    if (modelValue) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [modelValue]);

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    display: modelValue ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    marginTop: '68px',
    height: 'calc(100% - 68px)',
  };

  const content = (
    <div className="custom-overlay" style={overlayStyle}>
      <div className="s-loading">
        <div className="s-loading__message">{loadingMessage}</div>
        <div className="s-loading__spinner">
          <SProgressCircular />
        </div>
        <div className="s-loading__text">Please wait...</div>
      </div>
    </div>
  );

  const teleportElement = document.getElementById(teleportId);
  if (teleportElement) {
    return createPortal(content, teleportElement);
  }

  return content;
};

export default SGlobalProgress;
