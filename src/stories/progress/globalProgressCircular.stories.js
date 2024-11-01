import {GlobalProgress} from '@';

export default {
    title: 'Progress/GlobalProgressCircular',
    component: GlobalProgress,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args) => ({
    components: { GlobalProgress },
    setup() { return { args }; },
    template: `<GlobalProgress v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
    loadingMessage: "Loading Message",
    modelValue: true,
    teleportId: 'storybook-root',
};
