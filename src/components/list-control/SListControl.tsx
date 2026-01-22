import React, { useState, useEffect } from 'react';
import { SRefreshBtn } from '../button/SRefreshBtn';
import './SListControl.scss';

interface PerPageOption {
  text: string;
  value: number;
}

interface SListControlProps {
  list?: any[];
  perPages?: number | string;
  perPageList?: PerPageOption[] | null;
  refreshDateTitle?: string;
  density?: string;
  onRefresh?: () => void;
  onSetPerPages?: (value: number) => void;
}

const PER_PAGES: PerPageOption[] = [
  { text: '10', value: 10 },
  { text: '15', value: 15 },
  { text: '20', value: 20 },
];

export const SListControl: React.FC<SListControlProps> = ({
  list = [],
  perPages = 10,
  perPageList = null,
  refreshDateTitle = 'Date',
  density = 'comfortable',
  onRefresh,
  onSetPerPages,
}) => {
  const [refreshDate, setRefreshDate] = useState(new Date());

  useEffect(() => {
    if (list.length > 0) {
      setRefreshDate(new Date());
    }
  }, [list]);

  const handleRefresh = () => {
    onRefresh?.();
  };

  const handleChangePerPages = (value: number) => {
    onSetPerPages?.(value);
  };

  const options = perPageList || PER_PAGES;

  return (
    <div className="list-controls">
      <SRefreshBtn
        onClickRefresh={handleRefresh}
        refreshDate={refreshDate}
        refreshDateTitle={refreshDateTitle}
      />
      <select
        value={perPages}
        onChange={(e) => handleChangePerPages(Number(e.target.value))}
        className="s-select"
        style={{
          padding: '8px 12px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '14px',
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SListControl;
