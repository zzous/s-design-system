import {FormItem} from '@';

export default {
    title: 'Form/FormItem',
    component: FormItem,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args, { argTypes }) => ({
    components: { FormItem },
    props: Object.keys(argTypes),
    setup() {
        return { args };
    },
    template: `
      <FormItem v-bind="args">
        <template #default="{ handleChange, errors }">
          <input type="text" @input="handleChange" placeholder="Enter text" />
        </template>
        <template #outer-append="{ errors }">
          <span class="error-message" v-if="errors">{{ errors[0] }}</span>
        </template>
      </FormItem>
    `,
});

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = Template.bind({});
Default.args = {
    label: "Label",
    showLabel: true,
    required: true,
};
