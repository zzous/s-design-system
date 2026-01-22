import { SBtn } from '@/components/button/SBtn';

export default {
    title: 'Button/SBtn',
    component: SBtn,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
        title: { control: { type: 'text' }, description: '버튼 내부 텍스트' },
        variant: { control: { type: 'select' }, options: ["elevated", "outlined"], description: '버튼 타입' },
        size: { control: { type: 'select' }, options: [undefined, 'x-small', 'small', 'large', 'x-large'], description: '버튼 사이즈' },
        height: { control: { type: 'text' }, description: '버튼 높이' },
        color: {
            control: { type: 'select' },
            options: ["blue", "red", "black", "violet"],
            description: '버튼 색상\n- blue: 주요 액션\n- red: 삭제/취소 액션\n- black: 기본 액션\n- violet: 목록 내부의 버튼에 사용'
        },
        icon: { control: { type: 'text' }, description: '아이콘 버튼' },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        title: "Button",
    }
};

export const OutlinedButton = {
    args: {
        title: '기본',
        color: 'black',
        variant: 'outlined'
    },
};

export const ButtonSize = {
    args: {
        title: '기본',
    },
};

export const ButtonIcon = {
    args: {
        icon: 'mdi-plus',
    },
};

export const IconButton = {
    args: {
        color: 'blue',
        title: '저장',
        icon: 'mdi-content-save',
    },
};
