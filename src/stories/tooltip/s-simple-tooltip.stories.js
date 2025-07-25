import { SSimpleTooltip } from '@/components';

export default {
    title: 'tooltip/SSimpleTooltip',
    component: SSimpleTooltip,
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: '툴팁 버튼에 표시될 텍스트',
            defaultValue: null
        },
        text: {
            control: 'text',
            description: '툴팁에 표시될 텍스트 (text가 없으면 title 값이 표시됨)',
            defaultValue: null
        },
        titleWidth: {
            control: 'number',
            description: '툴팁 버튼의 너비 (px)',
            defaultValue: null
        },
        maxWidth: {
            control: 'number',
            description: '툴팁의 최대 너비 (px)',
            defaultValue: 500
        }
    }
};

const defaultCode = `
<template>
  <SSimpleTooltip
    title="긴 텍스트 예시입니다. 이 텍스트는 말줄임 처리됩니다."
    text="이것은 툴팁에 표시될 전체 텍스트입니다. 긴 텍스트는 자동으로 줄바꿈됩니다. 물론 500px을 넘겨야 되지만요."
    :title-width="200"
  />
</template>

<script setup>
// 기본 사용 예시
</script>
`

const Template = (args) => ({
    components: { SSimpleTooltip },
    setup() {
        return { args }
    },
    template: `
    <SSimpleTooltip v-bind="args" />
    `
})

export const Default = Template.bind({})
Default.args = {
    title: '긴 텍스트 예시입니다. 이 텍스트는 말줄임 처리됩니다.',
    text: '이것은 툴팁에 표시될 전체 텍스트입니다. 긴 텍스트는 자동으로 줄바꿈됩니다. 물론 500px을 넘겨야 되지만요.',
    titleWidth: 200
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
기본적인 툴팁 사용 예시입니다.

**주요 기능**
- 텍스트 말줄임 처리
- 툴팁 텍스트 자동 줄바꿈
- 커스텀 너비 설정
- 최대 너비 제한

**컴포넌트 구성**
- 말줄임 처리된 텍스트
- 툴팁 팝업
- 자동 줄바꿈 텍스트

**데이터 바인딩**
- \`title\`: 말줄임 처리될 텍스트
- \`text\`: 툴팁에 표시될 텍스트
- \`titleWidth\`: 텍스트 너비
- \`maxWidth\`: 툴팁 최대 너비
            `
        }
    }
}

const noTextCode = `
<template>
  <SSimpleTooltip
    title="이 텍스트는 말줄임 처리되며, 툴팁에도 동일한 텍스트가 표시됩니다."
    :title-width="200"
  />
</template>

<script setup>
// text prop이 없는 경우 예시
</script>
`

export const NoText = Template.bind({})
NoText.args = {
    title: '이 텍스트는 말줄임 처리되며, 툴팁에도 동일한 텍스트가 표시됩니다.',
    titleWidth: 200
}

NoText.parameters = {
    docs: {
        source: {
            code: noTextCode,
            language: 'vue',
            type: 'auto'
        },
        description: {
            story: `
text prop이 없는 경우의 툴팁 예시입니다.

**주요 기능**
- text prop이 없을 때 title 값을 툴팁에 표시
- 텍스트 말줄임 처리
- 커스텀 너비 설정

**컴포넌트 구성**
- 말줄임 처리된 텍스트
- 툴팁 팝업 (title 값 표시)

**데이터 바인딩**
- \`title\`: 말줄임 처리될 텍스트
- \`titleWidth\`: 텍스트 너비
            `
        }
    }
}

const customWidthCode = `
<template>
  <SSimpleTooltip
    title="이 텍스트는 매우 긴 텍스트입니다. 말줄임 처리되어 표시됩니다."
    text="이것은 툴팁에 표시될 매우 긴 텍스트입니다. 최대 너비가 300px로 제한되어 자동으로 줄바꿈됩니다."
    :title-width="150"
    :max-width="300"
  />
</template>

<script setup>
// 커스텀 너비 설정 예시
</script>
`

export const CustomWidth = Template.bind({})
CustomWidth.args = {
    title: '이 텍스트는 매우 긴 텍스트입니다. 말줄임 처리되어 표시됩니다.',
    text: '이것은 툴팁에 표시될 매우 긴 텍스트입니다. 최대 너비가 300px로 제한되어 자동으로 줄바꿈됩니다.',
    titleWidth: 150,
    maxWidth: 300
}

CustomWidth.parameters = {
    docs: {
        source: {
            code: customWidthCode,
            language: 'vue',
            type: 'auto'
        },
        description: {
            story: `
커스텀 너비를 설정한 툴팁 예시입니다.

**주요 기능**
- 텍스트 말줄임 처리
- 툴팁 최대 너비 제한
- 커스텀 텍스트 너비 설정
- 자동 줄바꿈

**컴포넌트 구성**
- 말줄임 처리된 텍스트 (150px)
- 툴팁 팝업 (최대 300px)

**데이터 바인딩**
- \`titleWidth\`: 150px
- \`maxWidth\`: 300px
            `
        }
    }
}
