import { SAlert } from '@';

export default {
    title: 'Alert/SAlert',
    component: SAlert,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
        color: {control: {type: 'text'}, description: '배경 색상'},
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        titleName: "Test Strato Alarm!",
        dialog: true,
    },
};
