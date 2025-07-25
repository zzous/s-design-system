import { SKeyValueSelect } from '@/components';
import { ref } from 'vue';

export default {
    title: 'input/SKeyValueSelect',
    component: SKeyValueSelect,
    tags: ['autodocs'],
    argTypes: {
        items: {
            control: 'object',
            description: '선택된 키-값 쌍 목록',
            defaultValue: []
        },
        keyList: {
            control: 'object',
            description: '선택 가능한 키 목록',
            defaultValue: []
        },
        valueList: {
            control: 'object',
            description: '선택 가능한 값 목록',
            defaultValue: []
        },
        modelValue: {
            control: 'object',
            description: 'v-model로 바인딩되는 선택된 키-값 쌍 목록',
            defaultValue: []
        },
        displayText: {
            control: 'text',
            description: '버튼에 표시될 텍스트',
            defaultValue: ''
        },
        type: {
            control: 'select',
            options: ['label', 'tag'],
            description: '선택기 타입 (label 또는 tag)',
            defaultValue: 'label'
        },
        applyButtonText: {
            control: 'text',
            description: '적용 버튼 텍스트',
            defaultValue: '적용'
        },
        resetButtonText: {
            control: 'text',
            description: '초기화 버튼 텍스트',
            defaultValue: '초기화'
        },
        cancelButtonText: {
            control: 'text',
            description: '취소 버튼 텍스트',
            defaultValue: '취소'
        },
        typeText: {
            control: 'object',
            description: '타입에 따른 텍스트 설정',
            defaultValue: () => ({
                title: null,
                key: null,
                value: null,
                add: null,
                select: null,
                selectValue: null,
                empty: null
            })
        }
    }
};

const defaultCode = `
<template>
  <SKeyValueSelect
    v-model="selectedItems"
    :key-list="keyList"
    :value-list="valueList"
    :type="type"
    :type-text="typeText"
    @update:model-value="handleUpdate"
  />
</template>

<script setup>
import { ref } from 'vue'

const type = 'label'
const selectedItems = ref([])

const keyList = [
  'Environment',
  'Service',
  'Team',
  'Project'
]

const valueList = [
  'Development',
  'Production',
  'Staging',
  'QA'
]

const typeText = {
  title: '라벨',
  key: '키',
  value: '값',
  add: '라벨 추가',
  select: '키 선택',
  selectValue: '값 선택',
  empty: '라벨이 없습니다'
}

const handleUpdate = (newValue) => {
  console.log('Selected items:', newValue)
}
</script>
`

const Template = (args) => ({
    components: { SKeyValueSelect },
    setup() {
        const selectedItems = ref([])
        const keyList = args.keyList
        const type = args.type
        const typeText = args.typeText

        const getAvailableValues = (key) => {
            return ['1', '2', '3']
        }

        const handleUpdate = (newValue) => {
            console.log('Selected items:', newValue)
        }

        return {
            args,
            selectedItems,
            keyList,
            type,
            typeText,
            handleUpdate,
            getAvailableValues
        }
    },
    template: `
    <SKeyValueSelect
      v-model="selectedItems"
      :key-list="keyList"
      :value-list="valueList"
      :type="type"
      :type-text="typeText"
      :get-available-values="getAvailableValues"
      @update:model-value="handleUpdate"
    />
    `
})

export const Default = Template.bind({})
Default.args = {
    keyList: [
        'Environment',
        'Service',
        'Team',
        'Project'
    ],
    valueList: [
        'Development',
        'Production',
        'Staging',
        'QA'
    ],
    type: 'label',
    typeText: {
        title: '라벨',
        key: '키',
        value: '값',
        add: '라벨 추가',
        select: '키 선택',
        selectValue: '값 선택',
        empty: '라벨이 없습니다'
    }
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
기본적인 키-값 선택기 사용 예시입니다.

**주요 기능**
- 키와 값의 다중 선택
- 키 선택 시 해당하는 값 목록 동적 로딩
- 선택된 항목 관리
- 적용/취소 기능

**컴포넌트 구성**
- 선택 버튼
- 키-값 선택 메뉴
- 적용/취소 버튼

**데이터 바인딩**
- \`v-model\`: 선택된 키-값 쌍 목록
- \`keyList\`: 선택 가능한 키 목록
- \`valueList\`: 선택 가능한 값 목록
- \`typeText\`: UI 텍스트 설정
            `
        }
    }
}

const tagCode = `
<template>
  <SKeyValueSelect
    v-model="selectedItems"
    :key-list="keyList"
    :value-list="valueList"
    type="tag"
    :type-text="typeText"
    @update:model-value="handleUpdate"
  />
</template>

<script setup>
import { ref } from 'vue'

const selectedItems = ref([])

const keyList = [
  'Owner',
  'Department',
  'CostCenter',
  'Environment'
]

const valueList = [
  'John Doe',
  'Engineering',
  'CC-1234',
  'Production'
]

const typeText = {
  title: '태그',
  key: '키',
  value: '값',
  add: '태그 추가',
  select: '키 선택',
  selectValue: '값 선택',
  empty: '태그가 없습니다'
}

const handleUpdate = (newValue) => {
  console.log('Selected tags:', newValue)
}
</script>
`

export const TagSelector = Template.bind({})
TagSelector.args = {
    keyList: [
        'Owner',
        'Department',
        'CostCenter',
        'Environment'
    ],
    valueList: [
        'John Doe',
        'Engineering',
        'CC-1234',
        'Production'
    ],
    type: 'tag',
    typeText: {
        title: '태그',
        key: '키',
        value: '값',
        add: '태그 추가',
        select: '키 선택',
        selectValue: '값 선택',
        empty: '태그가 없습니다'
    }
}

TagSelector.parameters = {
    docs: {
        source: {
            code: tagCode,
            language: 'vue',
            type: 'auto'
        },
        description: {
            story: `
태그 선택기 사용 예시입니다.

**주요 기능**
- 태그 키-값 쌍 선택
- 태그 추가/제거
- 태그 관리

**컴포넌트 구성**
- 태그 선택 버튼
- 태그 선택 메뉴
- 적용/취소 버튼

**데이터 바인딩**
- \`v-model\`: 선택된 태그 목록
- \`keyList\`: 태그 키 목록
- \`valueList\`: 태그 값 목록
- \`typeText\`: 태그 관련 UI 텍스트 설정
            `
        }
    }
}
