import React, { useState, useEffect, useRef, useMemo } from 'react';
import { SBtn } from '../button/SBtn';
import './SAlert.scss';

interface SAlertProps {
  titleName?: string;
  modelValue?: boolean;
  multiLine?: boolean;
  color?: string;
  height?: string | number;
  width?: string | number;
  timeout?: number;
  isClose?: boolean;
  alertStyle?: React.CSSProperties;
  onUpdateModelValue?: (value: boolean) => void;
  children?: React.ReactNode;
}

export const SAlert: React.FC<SAlertProps> = ({
  titleName = '',
  modelValue = false,
  multiLine = true,
  color = '#036EB8',
  height = '48px',
  width = '450px',
  timeout = 5000,
  isClose = true,
  alertStyle = {},
  onUpdateModelValue,
  children,
}) => {
  const [isActive, setIsActive] = useState(modelValue);
  const [calculatedHeight, setCalculatedHeight] = useState(48);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isHeightCalculated, setIsHeightCalculated] = useState(false);
  const titleRef = useRef<HTMLPreElement>(null);

  const dynamicHeight = useMemo(() => {
    if (multiLine) {
      const minHeight = 48;
      const finalHeight = Math.max(calculatedHeight, minHeight);
      return `${finalHeight}px`;
    }
    return typeof height === 'number' ? `${height}px` : height;
  }, [multiLine, calculatedHeight, height]);

  const shouldShowAlert = useMemo(() => {
    if (!isActive) return false;
    if (!multiLine) return true;
    return isHeightCalculated;
  }, [isActive, multiLine, isHeightCalculated]);

  const calculateTextHeight = async () => {
    if (!titleRef.current || !isActive || isCalculating) {
      return;
    }

    setIsCalculating(true);
    setIsHeightCalculated(false);

    try {
      await new Promise(resolve => setTimeout(resolve, 100));

      const textHeight = titleRef.current.scrollHeight;
      const minHeight = 48;
      const padding = 26;
      const newHeight = Math.max(minHeight, textHeight + padding);

      if (Math.abs(newHeight - calculatedHeight) > 2) {
        setCalculatedHeight(newHeight);
      }

      setIsHeightCalculated(true);
    } finally {
      setIsCalculating(false);
    }
  };

  const updateModelValue = (value: boolean) => {
    setIsActive(value);
    onUpdateModelValue?.(value);

    if (value) {
      if (!multiLine) {
        setIsHeightCalculated(true);
      } else {
        setIsHeightCalculated(false);
        setTimeout(() => {
          calculateTextHeight();
        }, 300);
      }
    } else {
      setIsHeightCalculated(false);
    }
  };

  const onClickCloseAlert = () => {
    setIsActive(false);
    onUpdateModelValue?.(false);
  };

  useEffect(() => {
    setIsActive(modelValue);

    if (modelValue) {
      if (multiLine) {
        setIsHeightCalculated(false);
        setTimeout(() => {
          calculateTextHeight();
        }, 300);
      } else {
        setIsHeightCalculated(true);
      }
    } else {
      setIsHeightCalculated(false);
    }
  }, [modelValue, multiLine]);

  useEffect(() => {
    if (isActive && multiLine) {
      setIsHeightCalculated(false);
      setTimeout(() => {
        calculateTextHeight();
      }, 300);
    }
  }, [titleName, isActive, multiLine]);

  // 자동 닫기
  useEffect(() => {
    if (isActive && timeout > 0) {
      const timer = setTimeout(() => {
        updateModelValue(false);
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [isActive, timeout]);

  const alertContainerStyle: React.CSSProperties = {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    minWidth: '600px',
    backgroundColor: color,
    color: 'white',
    padding: '12px 16px',
    borderRadius: '4px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    height: dynamicHeight,
    width: typeof width === 'number' ? `${width}px` : width,
    ...alertStyle,
  };

  return (
    <div className="s-alert">
      {shouldShowAlert && (
        <div style={alertContainerStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              {children}
              <pre
                ref={titleRef}
                className="s-alert__title"
                style={{ width: typeof width === 'number' ? `${width}px` : width }}
              >
                {titleName}
              </pre>
            </div>
            {isClose && (
              <SBtn
                color="#fff"
                variant="text"
                onClick={onClickCloseAlert}
                style={{ marginLeft: '16px' }}
              >
                Close
              </SBtn>
            )}
          </div>
        </div>
      )}

      {isActive && !shouldShowAlert && (
        <div className="s-alert__hidden-measure">
          <pre
            ref={titleRef}
            className="s-alert__title"
            style={{ width: typeof width === 'number' ? `${width}px` : width }}
          >
            {titleName}
          </pre>
        </div>
      )}
    </div>
  );
};

export default SAlert;
