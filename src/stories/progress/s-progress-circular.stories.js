import {SProgressCircular} from '@';

export default {
    title: 'Progress/SProgressCircular',
    component: SProgressCircular,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args) => ({
    components: { SProgressCircular },
    setup() { return { args }; },
    template: `<SProgressCircular v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
};
