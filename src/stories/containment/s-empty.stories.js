import { SEmpty } from '@/components';

export default {
    title: 'Containment/SEmpty',
    component: SEmpty,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        title: "Title",
        description: "Description",
        shadowed: true,
    },
};
