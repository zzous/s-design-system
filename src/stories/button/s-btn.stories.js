import { SBtn } from '@';
import { SIcon } from '@';

export default {
    title: 'Button/SBtn',
    component: SBtn,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
        title: {control: {type: 'text'}, description: '버튼 내부 텍스트'},
        variant: {control: {type: 'select'}, options: ["elevated", "outlined"], description: '버튼 타입'},
        size: {control: {type: 'select'}, options: [undefined, 'x-small', 'small', 'large', 'x-large'], description: '버튼 사이즈'},
        height: { control: { type: 'text' }, description: '버튼 높이'},
        color: {
            control: {type: 'select'},
            options: ["blue", "red", "black", "violet"],
            description: '버튼 색상\n- blue: 주요 액션\n- red: 삭제/취소 액션\n- black: 기본 액션\n- violet: 목록 내부의 버튼에 사용'
        },
        icon: {control: {type: 'text'}, description: '아이콘 버튼'},
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        title: "Button",
    }
};

const outlinedTemplate = `
    <div class="d-flex align-center">
        <SBtn class="mr-5" title="기본" variant="outlined" color="black" v-bind="args" />
        <SBtn class="mr-5" title="등록" variant="outlined" color="blue" />
        <SBtn class="mr-5" title="삭제" variant="outlined" color="red" />
    </div>
`;

export const OutlinedButton = (args) => ({
    components: { SBtn },
    setup() {
        return { args };
    },
    template: outlinedTemplate,
});


OutlinedButton.args = {
    title: '기본',
    color: 'black',
    variant: 'outlined'
};

OutlinedButton.parameters = {
    docs: {
        source: {
            code: `<template>${outlinedTemplate}</template>`,
            language: 'html',
            type: 'auto',
        },
    },
};


const sizeTemplate = `
    <div class="d-flex align-center">
        <SBtn class="mr-5" title="기본" v-bind="args" />
        <SBtn class="mr-5" title="x-small" color="black" size="x-small" />
        <SBtn class="mr-5" title="small" color="black" size="small" />
        <SBtn class="mr-5" title="large" color="black" size="large" />
        <SBtn class="mr-5" title="x-large" color="black" size="x-large" />
    </div>
`;
export const ButtonSize = (args) => ({
    components: { SBtn },
    setup() {
        return { args };
    },
    template: sizeTemplate,
});

ButtonSize.args = {
    title: '기본',
};

ButtonSize.parameters = {
    docs: {
        source: {
            code: `<template>${sizeTemplate}</template>`,
            language: 'html',
            type: 'auto',
        }
    },
};

const iconTemplate = `
    <div class="d-flex align-center">
        <SBtn class="mr-5" icon="mdi-plus" v-bind="args" />
        <SBtn class="mr-5" size="x-small" variant="outlined" color="black" icon="mdi-plus" />
        <SBtn class="mr-5" size="small" color="black" icon="mdi-plus" />
        <SBtn class="mr-5" size="x-small" variant="outlined" color="blue" icon="mdi-plus" />
        <SBtn class="mr-5" size="small" color="blue" icon="mdi-plus" />
        <SBtn class="mr-5" size="x-small" variant="outlined" color="red" icon="mdi-plus" />
        <SBtn class="mr-5" size="small" color="red" icon="mdi-plus" />
        <SBtn class="mr-5" size="x-small" variant="outlined" color="violet" icon="mdi-plus" />
        <SBtn class="mr-5" size="small" color="violet" icon="mdi-plus" />
    </div>
`;

export const ButtonIcon = (args) => ({
    components: { SBtn },
    setup() {
        return { args };
    },
    template: iconTemplate,
});


ButtonIcon.args = {
    icon: 'mdi-plus',
};

ButtonIcon.parameters = {
    docs: {
        source: {
            code: `<template>${iconTemplate}</template>`,
            language: 'html',
            type: 'auto',
        },
        description: {
            story: `
아이콘 버튼 사용 예시입니다.

**색상별 사용 용도**
- blue: 주요 액션 버튼
- red: 삭제/취소 액션 버튼
- black: 기본 액션 버튼
- violet: 목록 내부의 버튼에 사용

**사이즈별 사용 예시**
- x-small: 작은 공간에서 사용
- small: 일반적인 사용
- large: 강조가 필요한 경우
- x-large: 매우 강조가 필요한 경우
            `
        }
    },
};

const IconButtonTemplate = `
    <div class="d-flex align-center flex-wrap">
        <SBtn class="mr-5 mb-3" color="blue" v-bind="args">
            <SIcon name="save" :size="16" class="mr-1" />
            저장
        </SBtn>
        <SBtn class="mr-5 mb-3" color="blue" variant="outlined">
            <SIcon name="save" :size="16" class="mr-1" />
            저장
        </SBtn>
        <SBtn class="mr-5 mb-3" color="black" size="small">
            <SIcon name="save" :size="14" class="mr-1" />
            저장
        </SBtn>
        <SBtn class="mr-5 mb-3" color="black" variant="outlined" size="small">
            <SIcon name="save" :size="14" class="mr-1" />
            저장
        </SBtn>
        <SBtn class="mr-5 mb-3" color="blue" size="large">
            <SIcon name="save" :size="18" class="mr-1" />
            저장
        </SBtn>
    </div>
`;

export const IconButton = (args) => ({
    components: { SBtn, SIcon },
    setup() {
        return { args };
    },
    template: IconButtonTemplate,
});

IconButton.args = {
    color: 'blue',
};

IconButton.parameters = {
    docs: {
        source: {
            code: `<template>${IconButtonTemplate}</template>`,
            language: 'html',
            type: 'auto',
        },
        description: {
            story: `
아이콘이 포함된 버튼 예시입니다.

**사용 방법**
- SIcon 컴포넌트를 사용하여 아이콘 표시
- 아이콘과 텍스트를 함께 표시하기 위해 슬롯 활용
- 버튼 크기에 따라 아이콘 크기도 조정

**크기별 아이콘 사이즈 가이드**
- small: 14px
- default: 16px
- large: 18px
            `
        }
    },
};
