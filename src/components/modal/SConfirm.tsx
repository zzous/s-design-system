import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { SBtn } from '../button/SBtn';
import { SIcon } from '../images/SIcon';
import './SConfirm.scss';

interface SConfirmProps {
  contents?: string;
  modelValue?: boolean;
  teleportId?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  noCancel?: boolean;
  onUpdateModelValue?: (value: boolean) => void;
  onClickConfirm?: () => void;
  onClickCancel?: () => void;
}

export const SConfirm: React.FC<SConfirmProps> = ({
  contents = '',
  modelValue = false,
  teleportId = 'destination',
  confirmButtonText = '확인',
  cancelButtonText = '취소',
  noCancel = false,
  onUpdateModelValue,
  onClickConfirm,
  onClickCancel,
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

  const updateModelValue = (value: boolean) => {
    onUpdateModelValue?.(value);
  };

  const onConfirm = () => {
    onClickConfirm?.();
    updateModelValue(false);
  };

  const onCancel = () => {
    onClickCancel?.();
    updateModelValue(false);
  };

  if (!modelValue) {
    return null;
  }

  const content = (
    <div
      className="s-confirm-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          updateModelValue(false);
        }
      }}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <div className="s-confirm-modal__text">
          {contents}
        </div>
        <div className="button-wrapper">
          <SBtn variant="elevated" color="blue" onClick={onConfirm}>
            <SIcon name="check" size={16} className="mr-1" />
            {confirmButtonText}
          </SBtn>
          {!noCancel && (
            <SBtn variant="outlined" color="blue" onClick={onCancel}>
              <SIcon name="close" size={16} className="mr-1" />
              {cancelButtonText}
            </SBtn>
          )}
        </div>
      </div>
    </div>
  );

  // teleportId가 지정된 경우 해당 요소에 포털 생성
  const teleportElement = teleportId ? document.getElementById(teleportId) : null;
  if (teleportElement) {
    return createPortal(content, teleportElement);
  }

  // teleportId가 없거나 요소를 찾을 수 없는 경우 body에 직접 포털 생성
  return createPortal(content, document.body);
};

export default SConfirm;
