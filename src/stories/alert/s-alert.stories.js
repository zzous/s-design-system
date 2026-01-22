import { SAlert } from '@/components/alert/SAlert';

export default {
    title: 'Alert/SAlert',
    component: SAlert,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
        color: {
            control: {type: 'text'},
            description: '배경 색상 <br />'
                + '`\'#FF8000\'` | `\'#DE0655\'` | `\'#29AA54\'` | `\'#036EB8\'`<br />'
        },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        titleName: "Test Strato Alarm! This is a very long text that should trigger the height calculation and make the alert expand naturally to accommodate the content.",
        modelValue: true,
        timeout: -1,
        multiLine: true
    },
};
