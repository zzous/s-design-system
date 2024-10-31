import { Button } from '@';

export default {
    title: 'Button/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
        title: {control: {type: 'text'}, description: '버튼 내부 텍스트'},
        size: {control: {type: 'select'}, options: [undefined, 'x-small', 'small', 'large', 'x-large'], description: '버튼 사이즈'},
        height: { control: { type: 'text' }, description: '버튼 높이'},
        color: {control: {type: 'select'}, options: ["blue", "red", "black"], description: '버튼 색상'},
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        title: "Button",
    },
};
