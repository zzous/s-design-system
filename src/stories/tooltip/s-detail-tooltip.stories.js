import { SDetailTooltip } from '@';
import { ref } from 'vue';

export default {
    title: 'tooltip/SDetailTooltip',
    component: SDetailTooltip,
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: '툴팁 버튼에 표시될 텍스트',
            defaultValue: 'Label'
        },
        itemId: {
            control: 'text',
            description: '리스트 아이템의 ID 필드명',
            defaultValue: ''
        },
        itemName: {
            control: 'text',
            description: '리스트 아이템의 이름 필드명',
            defaultValue: ''
        },
        list: {
            control: 'object',
            description: '툴팁에 표시될 아이템 리스트',
            defaultValue: () => []
        },
        icon: {
            control: 'text',
            description: '아이템 옆에 표시될 아이콘 (Material Design Icons)',
            defaultValue: ''
        },
        itemClick: {
            control: 'function',
            description: '아이템 클릭 시 실행될 함수',
            defaultValue: () => {}
        },
        copyText: {
            control: 'function',
            description: '복사 버튼 클릭 시 실행될 함수',
            defaultValue: (item) => { new Function(item) }
        }
    }
};

const defaultCode = `
<template>
  <SDetailTooltip
    label="상세 보기"
    :list="items"
    item-id="id"
    item-name="name"
    icon="mdi-content-copy"
    :copy-text="handleCopy"
  />
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  { id: 'item-1', name: '첫 번째 항목' },
  { id: 'item-2', name: '두 번째 항목' },
  { id: 'item-3', name: '세 번째 항목' }
])

const handleCopy = (item) => {
  console.log('복사된 텍스트:', item)
}
</script>
`

const Template = (args) => ({
    components: { SDetailTooltip },
    setup() {
        const items = ref([
            { id: 'item-1', name: '첫 번째 항목' },
            { id: 'item-2', name: '두 번째 항목' },
            { id: 'item-3', name: '세 번째 항목' }
        ])

        const handleCopy = (item) => {
            console.log('복사된 텍스트:', item)
        }

        return {
            args,
            items,
            handleCopy
        }
    },
    template: `
    <SDetailTooltip
      v-bind="args"
      :list="items"
      :copy-text="handleCopy"
    />
    `
})

export const Default = Template.bind({})
Default.args = {
    label: '상세 보기',
    itemId: 'id',
    itemName: 'name',
    icon: 'mdi-content-copy'
}

Default.parameters = {
    docs: {
        source: {
            code: defaultCode,
            language: 'vue',
            type: 'auto'
        },
        description: {
            story: `
기본적인 상세 툴팁 사용 예시입니다.

**주요 기능**
- 클릭 시 상세 정보 표시
- 아이템 복사 기능
- 아이템 클릭 이벤트 처리
- 긴 텍스트 자동 말줄임 처리

**컴포넌트 구성**
- 툴팁 버튼
- 상세 정보 카드
- 아이템 리스트
- 복사/클릭 아이콘

**데이터 바인딩**
- \`label\`: 툴팁 버튼 텍스트
- \`list\`: 표시할 아이템 리스트
- \`itemId\`: 아이템 ID 필드명
- \`itemName\`: 아이템 이름 필드명
- \`icon\`: 아이템 옆에 표시될 아이콘
            `
        }
    }
}

const customIconCode = `
<template>
  <SDetailTooltip
    label="상세 보기"
    :list="items"
    item-id="id"
    item-name="name"
    icon="mdi-eye"
    :item-click="handleItemClick"
  />
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  { id: 'item-1', name: '첫 번째 항목' },
  { id: 'item-2', name: '두 번째 항목' },
  { id: 'item-3', name: '세 번째 항목' }
])

const handleItemClick = (item) => {
  console.log('선택된 항목:', item)
}
</script>
`

export const CustomIcon = Template.bind({})
CustomIcon.args = {
    label: '상세 보기',
    itemId: 'id',
    itemName: 'name',
    icon: 'mdi-eye'
}

CustomIcon.parameters = {
    docs: {
        source: {
            code: customIconCode,
            language: 'vue',
            type: 'auto'
        },
        description: {
            story: `
커스텀 아이콘을 사용하는 툴팁 예시입니다.

**주요 기능**
- 커스텀 아이콘 설정
- 아이템 클릭 이벤트 처리
- 상세 정보 표시

**컴포넌트 구성**
- 툴팁 버튼
- 상세 정보 카드
- 아이템 리스트
- 커스텀 아이콘

**데이터 바인딩**
- \`icon\`: Material Design Icons에서 선택한 아이콘
- \`itemClick\`: 아이템 클릭 시 실행될 함수
            `
        }
    }
}

const emptyListCode = `
<template>
  <SDetailTooltip
    label="상세 보기"
    :list="[]"
    item-id="id"
    item-name="name"
  />
</template>

<script setup>
// 빈 리스트 예시
</script>
`

export const EmptyList = Template.bind({})
EmptyList.args = {
    label: '상세 보기',
    itemId: 'id',
    itemName: 'name',
    list: []
}

EmptyList.parameters = {
    docs: {
        source: {
            code: emptyListCode,
            language: 'vue',
            type: 'auto'
        },
        description: {
            story: `
빈 리스트를 표시하는 툴팁 예시입니다.

**주요 기능**
- 빈 리스트 처리
- 툴팁 버튼 표시
- 상세 정보 카드 숨김

**컴포넌트 구성**
- 툴팁 버튼
- 빈 리스트 처리

**데이터 바인딩**
- \`list\`: 빈 배열
            `
        }
    }
}
