import { SScriptEditor } from '@/components';

export default {
    title: 'Editor/SScriptEditor',
    component: SScriptEditor,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
    },
};


export const YamlEditor = (args) => ({
    components: { SScriptEditor },
    setup() {
        return { args };
    },
    template: '<s-script-editor v-bind="args" lang="yaml"></s-script-editor>',
});
