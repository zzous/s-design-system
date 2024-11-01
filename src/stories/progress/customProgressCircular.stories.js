import {CustomProgressCircular} from '@';

export default {
    title: 'Progress/CustomProgressCircular',
    component: CustomProgressCircular,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args) => ({
    components: { CustomProgressCircular },
    setup() { return { args }; },
    template: `<CustomProgressCircular v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
};
