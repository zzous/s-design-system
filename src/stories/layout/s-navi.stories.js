import {SNavi} from '@';

export default {
    title: 'Layout/SNavi',
    component: SNavi,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args) => ({
    components: { SNavi },
    setup() { return { args }; },
    template: `
      <div :style="{padding: '24px 48px'}">
        <SNavi v-bind="args" />
      </div>`,
});

export const Default = Template.bind({});
Default.args = {
  serviceName: 'Service A',
  menuPath: {
    idx: 1,
    menuName: 'Menu A',
    path: '/menu-a',
    subMenus: [
      {
        idx: 2,
        menuName: 'Sub Menu A',
        path: '/menu-a/sub-menu-a',
        subMenus: [
          {
            idx: 3,
            menuName: 'Sub Sub Menu A',
            path: '/menu-a/sub-menu-a/sub-sub-menu-a',
          },
          {
            idx: 4,
            menuName: 'Sub Sub Menu B',
            path: '/menu-a/sub-menu-a/sub-sub-menu-b',
          },
        ]
      },
      {
        idx: 5,
        menuName: 'Sub Menu B',
        path: '/menu-a/sub-menu-b',
        subMenus: []
      },
    ],
  }
};
