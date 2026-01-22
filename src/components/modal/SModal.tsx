import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { SBtn } from '../button/SBtn';
import { SIcon } from '../images/SIcon';
import './SModal.scss';

interface SModalProps {
  title?: string;
  className?: string | { [key: string]: boolean };
  modalWidth?: string;
  modalHeight?: string;
  modelValue?: boolean;
  isWhite?: boolean;
  popupCardClass?: string;
  hideHeader?: boolean;
  teleportId?: string;
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  languageCode?: 'ko' | 'en';
  mode?: 'new' | 'detail' | 'update' | null;
  changeMode?: (mode: 'new' | 'detail' | 'update') => void;
  onClose?: () => void;
  onCancel?: () => void;
  onSave?: () => void;
  onEdit?: () => void;
  onUpdate?: () => void;
  hideSaveButton?: boolean;
  hideEditButton?: boolean;
  hideCloseButton?: boolean;
  hideCancelButton?: boolean;
  onUpdateModelValue?: (value: boolean) => void;
  onFetch?: () => void;
  children?: React.ReactNode;
  buttons?: React.ReactNode;
  headerBtnAppend?: React.ReactNode;
  footer?: React.ReactNode;
}

export const SModal: React.FC<SModalProps> = ({
  title = '',
  className = '',
  modalWidth = '',
  modalHeight = '',
  modelValue = false,
  isWhite = false,
  popupCardClass = '',
  hideHeader = false,
  teleportId = 'destination',
  size = 'medium',
  languageCode = 'ko',
  mode = null,
  changeMode,
  onClose,
  onCancel,
  onSave,
  onEdit,
  onUpdate,
  hideSaveButton = false,
  hideEditButton = false,
  hideCloseButton = false,
  hideCancelButton = false,
  onUpdateModelValue,
  onFetch,
  children,
  buttons,
  headerBtnAppend,
  footer,
}) => {
  const buttonText = {
    ko: { save: '저장', update: '수정', close: '닫기', cancel: '취소' },
    en: { save: 'Save', update: 'Update', close: 'Close', cancel: 'Cancel' },
  };

  const isNewMode = mode === 'new';
  const isDetailMode = mode === 'detail';
  const isUpdateMode = mode === 'update';
  const buttonLabels = buttonText[languageCode];

  const modalClass = useMemo(() => {
    const classes = ['s-modal'];
    if (typeof className === 'string') {
      classes.push(className);
    } else if (typeof className === 'object') {
      classes.push(...Object.keys(className).filter(key => className[key]));
    }
    return classes.join(' ');
  }, [className]);

  const modalDataAttributes = {
    'data-size': size,
  };

  const controlBodyScroll = (shouldLock: boolean) => {
    if (shouldLock) {
      document.body.style.overflow = 'hidden';
      // 스크롤바 너비 계산
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  };

  useEffect(() => {
    if (modelValue) {
      onFetch?.();
      controlBodyScroll(true);
    } else {
      controlBodyScroll(false);
    }

    return () => {
      controlBodyScroll(false);
    };
  }, [modelValue, onFetch]);

  const closeModal = () => {
    onUpdateModelValue?.(false);
  };

  const onClickCloseModal = () => {
    closeModal();
  };

  const onClickCancel = () => {
    if (!changeMode) {
      throw Error('Not found changeMode');
    }

    onCancel?.();
    if (mode === 'update') {
      changeMode('detail');
    } else {
      closeModal();
    }
  };

  const onClickClose = () => {
    onClose?.();
    closeModal();
  };

  const onClickUpdate = () => {
    onUpdate?.();
  };

  const onClickEdit = () => {
    if (mode === 'detail') {
      changeMode?.('update');
    }
    onEdit?.();
  };

  const modalStyle: React.CSSProperties = {
    display: modelValue ? 'flex' : 'none',
  };

  const cardStyle: React.CSSProperties = {
    width: modalWidth || undefined,
    height: modalHeight || undefined,
    minHeight: modalHeight || undefined,
  };

  if (!modelValue) {
    return null;
  }

  const content = (
    <div
      className={modalClass}
      style={modalStyle}
      {...modalDataAttributes}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className={`s-modal__card ${popupCardClass}`} style={cardStyle} onClick={(e) => e.stopPropagation()}>
        {!hideHeader && (
          <div className={`s-modal__title ${isWhite ? 's-modal__title--light' : 's-modal__title--dark'}`}>
            <span>{title}</span>
            <div className="button-wrapper">
              {headerBtnAppend}
              <i
                className={`mdi mdi-close`}
                style={{ color: isWhite ? '#1A3350' : '#fff', cursor: 'pointer' }}
                onClick={onClickCloseModal}
              />
            </div>
          </div>
        )}

        <div className="s-modal__content-wrapper">
          <div className="s-modal__content">
            {children}
          </div>
        </div>

        <div className="s-modal__footer">
          {footer || buttons || (
            <>
              {(isNewMode || (!hideEditButton && isDetailMode) || isUpdateMode) && (
                <div className="s-modal__footer__positive">
                  {!hideSaveButton && isNewMode && (
                    <SBtn onClick={onSave}>
                      <SIcon name="save" size={16} className="mr-1" />
                      {buttonLabels.save}
                    </SBtn>
                  )}
                  {!hideEditButton && isDetailMode && (
                    <SBtn onClick={onClickEdit}>
                      <SIcon name="edit" size={16} className="mr-1" />
                      {buttonLabels.update}
                    </SBtn>
                  )}
                  {!hideSaveButton && isUpdateMode && (
                    <SBtn onClick={onClickUpdate}>
                      <SIcon name="edit" size={16} className="mr-1" />
                      {buttonLabels.save}
                    </SBtn>
                  )}
                </div>
              )}

              {((!hideCloseButton && isDetailMode) || (!hideCancelButton && (isNewMode || isUpdateMode))) && (
                <>
                  {!hideCloseButton && isDetailMode && (
                    <SBtn variant="outlined" onClick={onClickClose}>
                      <SIcon name="close" size={16} className="mr-1" />
                      {buttonLabels.close}
                    </SBtn>
                  )}
                  {!hideCancelButton && (isNewMode || isUpdateMode) && (
                    <SBtn variant="outlined" onClick={onClickCancel}>
                      <SIcon name="close" size={16} className="mr-1" />
                      {buttonLabels.cancel}
                    </SBtn>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );

  const teleportElement = document.getElementById(teleportId);
  if (teleportElement) {
    return createPortal(content, teleportElement);
  }

  return content;
};

export default SModal;
