import {SImg} from '@/components';

export default {
    title: 'Images/SImg',
    component: SImg,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        'src-url': 'https://cdn.pixabay.com/photo/2020/06/20/11/09/cat-5320572_1280.jpg',
        width: 300,
    },
};
