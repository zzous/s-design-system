import {SFormItem} from '@';

export default {
    title: 'Form/SFormItem',
    component: SFormItem,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args, { argTypes }) => ({
    components: { SFormItem },
    props: Object.keys(argTypes),
    setup() {
        return { args };
    },
    template: `
      <SFormItem v-bind="args">
        <template #default="{ handleChange, errors }">
          <input type="text" @input="handleChange" placeholder="Enter text" />
        </template>
        <template #outer-append="{ errors }">
          <span class="error-message" v-if="errors">{{ errors[0] }}</span>
        </template>
      </SFormItem>
    `,
});

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = Template.bind({});
Default.args = {
    label: "Label",
    showLabel: true,
    required: true,
};
