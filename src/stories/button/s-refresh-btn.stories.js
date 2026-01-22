import { SRefreshBtn } from '@/components/button/SRefreshBtn';

export default {
    title: 'Button/SRefreshBtn',
    component: SRefreshBtn,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
        refreshDate: { description: '갱신일', default: new Date()},
        onClickRefresh: {description: '새로고침 클릭시 함수'},
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        refreshDate: new Date(),
        onClickRefresh: () => {
            alert('onClickRefresh')
        }
    }
};
