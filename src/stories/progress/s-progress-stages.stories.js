import { SProgressStages } from '@'

export default {
  title: 'Progress/SProgressStages',
  component: SProgressStages,
  tags: ['autodocs'],
  argTypes: {
    stages: {
      control: 'object',
      description: `진행 단계 정보를 포함하는 배열

**상태 종류**
- completed: 완료된 상태 (초록색)
- in-progress: 진행 중인 상태 (파란색)
- pending: 대기 중인 상태 (회색)
- delayed: 지연된 상태 (빨간색)
`,
      defaultValue: []
    }
  }
}

const Template = (args) => ({
  components: { SProgressStages },
  setup() {
    return { args }
  },
  template: '<SProgressStages v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  stages: [
    {
      id: 1,
      title: '계획 단계',
      status: 'completed',
      subStages: [
        {
          id: '1-1',
          title: '요구사항 분석',
          status: 'completed'
        },
        {
          id: '1-2',
          title: '설계 검토',
          status: 'completed'
        }
      ]
    },
    {
      id: 2,
      title: '개발 단계',
      status: 'in-progress',
      subStages: [
        {
          id: '2-1',
          title: '기능 개발',
          status: 'in-progress',
          children: [
            {
              id: '2-1-1',
              title: '코어 모듈 개발',
              status: 'completed'
            },
            {
              id: '2-1-2',
              title: 'UI 컴포넌트 개발',
              status: 'in-progress'
            }
          ]
        },
        {
          id: '2-2',
          title: '단위 테스트',
          status: 'pending'
        }
      ]
    },
    {
      id: 3,
      title: '테스트 단계',
      status: 'pending',
      subStages: [
        {
          id: '3-1',
          title: '통합 테스트',
          status: 'pending'
        },
        {
          id: '3-2',
          title: '성능 테스트',
          status: 'pending'
        }
      ]
    }
  ]
}
Default.parameters = {
  docs: {
    description: {
      story: `
기본적인 진행 단계를 보여주는 예시입니다.

**주요 기능**
- 메인 스테이지와 서브 스테이지 구조 지원
- 각 단계별 상태 표시 (completed, in-progress, pending, delayed)
- 중첩된 하위 항목 표시 기능
- 확장/축소 가능한 서브 스테이지

**상태 색상**
- 완료(completed): 초록색
- 진행중(in-progress): 파란색
- 대기중(pending): 회색
- 지연(delayed): 빨간색
      `
    }
  }
}

export const WithDelayedStages = Template.bind({})
WithDelayedStages.args = {
  stages: [
    {
      id: 1,
      title: '계획 단계',
      status: 'completed',
      subStages: [
        {
          id: '1-1',
          title: '요구사항 분석',
          status: 'completed'
        },
        {
          id: '1-2',
          title: '설계 검토',
          status: 'completed'
        }
      ]
    },
    {
      id: 2,
      title: '개발 단계',
      status: 'delayed',
      subStages: [
        {
          id: '2-1',
          title: '기능 개발',
          status: 'delayed',
          children: [
            {
              id: '2-1-1',
              title: '코어 모듈 개발',
              status: 'delayed'
            },
            {
              id: '2-1-2',
              title: 'UI 컴포넌트 개발',
              status: 'pending'
            }
          ]
        }
      ]
    }
  ]
}
WithDelayedStages.parameters = {
  docs: {
    description: {
      story: `
지연된 단계가 포함된 예시입니다.

**주요 특징**
- 지연된 단계는 빨간색으로 표시
- 상위 단계가 지연되면 하위 단계도 영향을 받음
- 지연 상태와 다른 상태의 시각적 구분
      `
    }
  }
}
