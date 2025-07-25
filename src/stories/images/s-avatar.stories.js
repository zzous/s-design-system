import {SAvatar} from '@/components';

export default {
    title: 'Images/SAvatar',
    component: SAvatar,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const Template = (args, { argTypes }) => ({
    components: { SAvatar },
    props: Object.keys(argTypes),
    setup() {
        return { args };
    },
    template: `
      <div :style="{ background: '#525252', padding: '16px' }">
        <SAvatar v-bind="args" />
      </div>
    `,
});
export const Default = Template.bind({});
Default.args = {
    user: { name: "사용자 A" },
    menuItems: [
        { title: "Menu1", value: 'Menu1' },
        { title: "Menu2", value: 'Menu2' },
        { title: "Menu3", value: 'Menu3' },
    ]
};
