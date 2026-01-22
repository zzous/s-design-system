import React from 'react';
import { ExampleButton } from './components/example/ExampleButton';

const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>React 컴포넌트 개발 환경</h1>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <ExampleButton title="기본 버튼" color="blue" />
        <ExampleButton title="초록 버튼" color="green" />
        <ExampleButton title="빨간 버튼" color="red" />
      </div>
      <p style={{ marginTop: '2rem', color: '#666' }}>
        Storybook에서 더 많은 컴포넌트를 확인할 수 있습니다: <code>pnpm run sb</code>
      </p>
    </div>
  );
};

export default App;
