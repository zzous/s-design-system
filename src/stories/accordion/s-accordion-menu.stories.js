import { SAccordionMenu } from '@/components/accordion/SAccordionMenu';

export default {
    title: 'Accordion/SAccordionMenu',
    component: SAccordionMenu,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
        title: { control: { type: 'text' }, description: '아코디언 제목' },
        titleBold: { control: { type: 'boolean' }, description: '제목 굵게 표시' },
    },
};

export const Default = {
    args: {
        title: "Accordion Title",
        titleBold: true
    },
};
