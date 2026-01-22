import React, { useMemo } from 'react';
import './SRefreshBtn.scss';

interface SRefreshBtnProps {
  onClickRefresh: () => void;
  refreshDate?: Date;
  refreshDateTitle?: string;
}

export const SRefreshBtn: React.FC<SRefreshBtnProps> = ({
  onClickRefresh,
  refreshDate = new Date(),
  refreshDateTitle = '기준일자',
}) => {
  const computedRefreshDate = useMemo(() => {
    const year = refreshDate.getFullYear();
    const month = (refreshDate.getMonth() + 1).toString().padStart(2, '0');
    const day = refreshDate.getDate().toString().padStart(2, '0');
    const hour = refreshDate.getHours().toString().padStart(2, '0');
    const minute = refreshDate.getMinutes().toString().padStart(2, '0');
    const second = refreshDate.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }, [refreshDate]);

  return (
    <span className="position-relative refresh-time-wrapper">
      <span className="refresh-time">
        {refreshDateTitle} : {computedRefreshDate}
      </span>
      <img
        className="cursor-pointer ml-1 refresh-icon"
        height="16"
        width="16"
        src="/assets/images/icon_refresh.svg"
        alt="refresh"
        onClick={onClickRefresh}
        style={{ cursor: 'pointer' }}
      />
    </span>
  );
};

export default SRefreshBtn;
