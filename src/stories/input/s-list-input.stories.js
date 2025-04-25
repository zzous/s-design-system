import { SListInput } from '@';
import { ref } from 'vue';

export default {
    title: 'input/SListInput',
    component: SListInput,
    tags: ['autodocs'],
    argTypes: {
        headers: {
            control: 'object',
            description: '테이블 헤더 정보',
            defaultValue: []
        },
        readonly: {
            control: 'boolean',
            description: '읽기 전용 모드 여부',
            defaultValue: false
        },
        errorMessages: {
            control: 'object',
            description: '에러 메시지 목록',
            defaultValue: []
        },
        modelValue: {
            control: 'object',
            description: 'v-model로 바인딩되는 데이터',
            defaultValue: []
        }
    }
};

const defaultCode = `
<template>
  <SListInput
    v-model="items"
    :headers="headers"
    :readonly="false"
  />
</template>

<script setup>
import { ref } from 'vue'

const headers = [
  {
    title: '이름',
    key: 'name',
    placeholder: '이름을 입력하세요',
    rules: [
      v => !!v || '이름은 필수입니다',
      v => v.length <= 10 || '이름은 10자 이하여야 합니다'
    ]
  },
  {
    title: '나이',
    key: 'age',
    placeholder: '나이를 입력하세요',
    rules: [
      v => !!v || '나이는 필수입니다',
      v => !isNaN(v) || '숫자만 입력 가능합니다'
    ]
  },
  {
    title: '성별',
    key: 'gender',
    type: 'select',
    items: [
      { title: '남성', value: 'male' },
      { title: '여성', value: 'female' }
    ],
    itemTitle: 'title',
    itemValue: 'value',
    placeholder: '성별을 선택하세요',
    rules: [v => !!v || '성별은 필수입니다']
  }
]

const items = ref([
  { name: '홍길동', age: 30, gender: 'male' },
  { name: '김철수', age: 25, gender: 'male' }
])
</script>
`

const Template = (args) => ({
    components: { SListInput },
    setup() {
        const items = ref([
            { name: '홍길동', age: 30, gender: 'male' },
            { name: '김철수', age: 25, gender: 'male' }
        ])

        return {
            args,
            items
        }
    },
    template: `
    <SListInput
      v-model="items"
      v-bind="args"
    />
    `
})

export const Default = Template.bind({})
Default.args = {
    headers: [
        {
            title: '이름',
            key: 'name',
            placeholder: '이름을 입력하세요',
            rules: [
                v => !!v || '이름은 필수입니다',
                v => v.length <= 10 || '이름은 10자 이하여야 합니다'
            ]
        },
        {
            title: '나이',
            key: 'age',
            placeholder: '나이를 입력하세요',
            rules: [
                v => !!v || '나이는 필수입니다',
                v => !isNaN(v) || '숫자만 입력 가능합니다'
            ]
        },
        {
            title: '성별',
            key: 'gender',
            type: 'select',
            items: [
                { title: '남성', value: 'male' },
                { title: '여성', value: 'female' }
            ],
            itemTitle: 'title',
            itemValue: 'value',
            placeholder: '성별을 선택하세요',
            rules: [v => !!v || '성별은 필수입니다']
        }
    ],
    readonly: false
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
기본적인 리스트 입력 컴포넌트 사용 예시입니다.

**주요 기능**
- 동적 행 추가/삭제
- 입력값 유효성 검사
- 선택형 입력 지원
- 읽기 전용 모드

**컴포넌트 구성**
- 헤더 영역
- 입력 행 영역
- 추가/삭제 버튼

**데이터 바인딩**
- \`v-model\`: 입력 데이터
- \`headers\`: 컬럼 설정
- \`readonly\`: 읽기 전용 모드
            `
        }
    }
}

const readonlyCode = `
<template>
  <SListInput
    v-model="items"
    :headers="headers"
    :readonly="true"
  />
</template>

<script setup>
import { ref } from 'vue'

const headers = [
  { title: '이름', key: 'name' },
  { title: '나이', key: 'age' },
  { title: '성별', key: 'gender' }
]

const items = ref([
  { name: '홍길동', age: 30, gender: 'male' },
  { name: '김철수', age: 25, gender: 'male' }
])
</script>
`

export const Readonly = Template.bind({})
Readonly.args = {
    headers: [
        { title: '이름', key: 'name' },
        { title: '나이', key: 'age' },
        { title: '성별', key: 'gender' }
    ],
    readonly: true
}

Readonly.parameters = {
    docs: {
        source: {
            code: readonlyCode,
            language: 'vue',
            type: 'auto'
        },
        description: {
            story: `
읽기 전용 모드의 리스트 입력 컴포넌트 예시입니다.

**주요 기능**
- 데이터 표시만 가능
- 입력 불가
- 행 추가/삭제 불가

**컴포넌트 구성**
- 헤더 영역
- 데이터 표시 영역

**데이터 바인딩**
- \`v-model\`: 표시할 데이터
- \`headers\`: 컬럼 설정
- \`readonly\`: true
            `
        }
    }
}

const dynamicSelectCode = `
<template>
  <SListInput
    v-model="items"
    :headers="headers"
  />
</template>

<script setup>
import { ref } from 'vue'

const headers = [
  {
    title: '카테고리',
    key: 'category',
    type: 'select',
    items: (rowIndex) => {
      // 행 인덱스에 따라 다른 옵션 제공
      return rowIndex === 0
        ? [
            { title: '전자제품', value: 'electronics' },
            { title: '의류', value: 'clothing' }
          ]
        : [
            { title: '식품', value: 'food' },
            { title: '생활용품', value: 'daily' }
          ]
    },
    itemTitle: 'title',
    itemValue: 'value',
    placeholder: '카테고리를 선택하세요'
  },
  {
    title: '상품명',
    key: 'name',
    placeholder: '상품명을 입력하세요'
  }
]

const items = ref([
  { category: 'electronics', name: '스마트폰' },
  { category: 'food', name: '과일' }
])
</script>
`

export const DynamicSelect = Template.bind({})
DynamicSelect.args = {
    headers: [
        {
            title: '카테고리',
            key: 'category',
            type: 'select',
            items: (rowIndex) => {
                return rowIndex === 0
                    ? [
                        { title: '전자제품', value: 'electronics' },
                        { title: '의류', value: 'clothing' }
                    ]
                    : [
                        { title: '식품', value: 'food' },
                        { title: '생활용품', value: 'daily' }
                    ]
            },
            itemTitle: 'title',
            itemValue: 'value',
            placeholder: '카테고리를 선택하세요'
        },
        {
            title: '상품명',
            key: 'name',
            placeholder: '상품명을 입력하세요'
        }
    ]
}

DynamicSelect.parameters = {
    docs: {
        source: {
            code: dynamicSelectCode,
            language: 'vue',
            type: 'auto'
        },
        description: {
            story: `
동적 선택 옵션을 사용하는 리스트 입력 컴포넌트 예시입니다.

**주요 기능**
- 행별로 다른 선택 옵션 제공
- 동적 데이터 바인딩
- 입력값 유효성 검사

**컴포넌트 구성**
- 헤더 영역
- 동적 선택 입력 영역
- 텍스트 입력 영역

**데이터 바인딩**
- \`v-model\`: 입력 데이터
- \`headers\`: 동적 선택 옵션 설정
            `
        }
    }
}

const dynamicItemsCode = `
<template>
  <SListInput
    v-model="items"
    :headers="headers"
  />
</template>

<script setup>
import { ref } from 'vue'

const headers = [
  {
    title: '카테고리',
    key: 'category',
    type: 'select',
    items: (rowIndex) => {
      // 행 인덱스에 따라 다른 옵션 제공
      return rowIndex === 0
        ? [
            { title: '전자제품', value: 'electronics' },
            { title: '의류', value: 'clothing' }
          ]
        : [
            { title: '식품', value: 'food' },
            { title: '생활용품', value: 'daily' }
          ]
    },
    itemTitle: 'title',
    itemValue: 'value',
    placeholder: '카테고리를 선택하세요'
  },
  {
    title: '상품명',
    key: 'name',
    placeholder: '상품명을 입력하세요'
  }
]

const items = ref([
  { category: 'electronics', name: '스마트폰' },
  { category: 'food', name: '과일' }
])
</script>
`

export const DynamicItems = Template.bind({})
DynamicItems.args = {
    headers: [
        {
            title: '카테고리',
            key: 'category',
            type: 'select',
            items: (rowIndex) => {
                return rowIndex === 0
                    ? [
                        { title: '전자제품', value: 'electronics' },
                        { title: '의류', value: 'clothing' }
                    ]
                    : [
                        { title: '식품', value: 'food' },
                        { title: '생활용품', value: 'daily' }
                    ]
            },
            itemTitle: 'title',
            itemValue: 'value',
            placeholder: '카테고리를 선택하세요'
        },
        {
            title: '상품명',
            key: 'name',
            placeholder: '상품명을 입력하세요'
        }
    ]
}

DynamicItems.parameters = {
    docs: {
        source: {
            code: dynamicItemsCode,
            language: 'vue',
            type: 'auto'
        },
        description: {
            story: `
행 인덱스에 따라 다른 선택 옵션을 제공하는 예시입니다.

**주요 기능**
- 첫 번째 행: 전자제품, 의류 카테고리 선택 가능
- 두 번째 행: 식품, 생활용품 카테고리 선택 가능
- 동적 데이터 바인딩
- 입력값 유효성 검사

**컴포넌트 구성**
- 헤더 영역
- 동적 선택 입력 영역
- 텍스트 입력 영역

**데이터 바인딩**
- \`v-model\`: 입력 데이터
- \`headers\`: 동적 선택 옵션 설정
  - \`items\`를 함수로 설정하여 행 인덱스에 따라 다른 옵션 제공
            `
        }
    }
}
