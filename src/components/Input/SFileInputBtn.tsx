import React, { useRef, useState, useEffect } from 'react';
import { SBtn } from '../button/SBtn';
import { SIcon } from '../images/SIcon';
import './SFileInputBtn.scss';

interface SFileInputBtnProps {
  placeholder?: string;
  modelValue?: File | string | null;
  errorMessages?: string[];
  btnDisabled?: boolean;
  hideDetails?: string | boolean;
  buttonText?: string;
  accept?: string;
  onUpdateModelValue?: (value: File | null) => void;
}

export const SFileInputBtn: React.FC<SFileInputBtnProps> = ({
  placeholder = '파일을 선택하세요',
  modelValue = null,
  errorMessages = [],
  btnDisabled = false,
  hideDetails = 'auto',
  buttonText = '파일 찾기',
  accept = '*',
  onUpdateModelValue,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  useEffect(() => {
    if (modelValue instanceof File) {
      setFile(modelValue);
      setFileName(modelValue.name);
    } else if (typeof modelValue === 'string') {
      setFileName(modelValue);
    }
  }, [modelValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    setFileName(selectedFile?.name || null);
    onUpdateModelValue?.(selectedFile);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="s-file-input">
      <input
        ref={fileInputRef}
        type="file"
        className="d-none"
        onChange={handleChange}
        accept={accept}
        style={{ display: 'none' }}
      />
      <input
        type="text"
        value={fileName || ''}
        readOnly
        placeholder={placeholder}
        style={{
          padding: '8px 12px',
          border: errorMessages.length > 0 ? '1px solid red' : '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '14px',
          flex: 1,
          backgroundColor: '#f5f5f5',
        }}
      />
      {errorMessages.length > 0 && hideDetails !== true && (
        <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
          {errorMessages[0]}
        </div>
      )}
      <SBtn height={30} variant="outlined" disabled={btnDisabled} onClick={handleButtonClick}>
        <SIcon name="file" size={16} className="mr-1" />
        {buttonText}
      </SBtn>
    </div>
  );
};

export default SFileInputBtn;
