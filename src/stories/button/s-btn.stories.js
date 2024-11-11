import { SBtn } from '@';

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
        color: {control: {type: 'select'}, options: ["blue", "red", "black"], description: '버튼 색상'},
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
        }
    },
};
