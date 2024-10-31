import {Avatar} from '@';

export default {
    title: 'Images/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const Template = (args, { argTypes }) => ({
    components: { Avatar },
    props: Object.keys(argTypes),
    setup() {
        console.log(args);
        return { args };
    },
    template: `
      <div :style="{ background: '#525252', padding: '16px' }">
        <Avatar v-bind="args" />
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

