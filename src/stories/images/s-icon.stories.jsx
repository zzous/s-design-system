import React from 'react';
import { SIcon } from '@/components/images/SIcon';
import { icons } from '@/components/images/icons';

// 사용 가능한 아이콘 목록
const iconNames = Object.keys(icons);

export default {
  title: 'Images/SIcon',
  component: SIcon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: iconNames,
      description: '아이콘 이름',
    },
    size: {
      control: { type: 'number' },
      description: '아이콘 크기 (px)',
    },
    color: {
      control: { type: 'color' },
      description: '아이콘 색상',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    name: 'save',
    size: 24,
    color: '#1976d2',
  },
};

// 모든 아이콘 보기
export const AllIcons = {
  render: (args) => {
    const [selectedIcon, setSelectedIcon] = React.useState(args.name || iconNames[0]);

    return (
      <div>
        <div style={{
          marginBottom: '20px',
          padding: '16px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
        }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 'bold' }}>
            선택된 아이콘: {selectedIcon}
          </h3>
          <SIcon
            name={selectedIcon}
            size={args.size || 48}
            color={args.color || '#1976d2'}
          />
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '20px',
          padding: '20px',
        }}>
          {iconNames.map((iconName) => (
            <div
              key={iconName}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px',
                border: selectedIcon === iconName ? '2px solid #1976d2' : '1px solid #e0e0e0',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: selectedIcon === iconName ? '#e3f2fd' : 'transparent',
              }}
              onClick={() => {
                setSelectedIcon(iconName);
              }}
              onMouseEnter={(e) => {
                if (selectedIcon !== iconName) {
                  e.currentTarget.style.backgroundColor = '#f5f5f5';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedIcon !== iconName) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <SIcon name={iconName} size={args.size || 32} color={args.color || '#1976d2'} />
              <span style={{ marginTop: '8px', fontSize: '12px', textAlign: 'center' }}>
                {iconName}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
  args: {
    size: 32,
    color: '#1976d2',
  },
};
