import { ShellScriptInput } from '@';

export default {
    title: 'Input/ShellScriptInput',
    component: ShellScriptInput,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
        labelTitle: {control: {type: 'text'}, description: '레이블 타이틀'},
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        labelTitle: "Label Title"
    },
};
