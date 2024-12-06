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
    accessible: true,
    subMenus: [
      {
        idx: 2,
        menuName: 'Sub Menu A',
        path: '/menu-a/sub-menu-a',
        accessible: true,
        subMenus: [
          {
            idx: 3,
            menuName: 'Sub Sub Menu A',
            path: '/menu-a/sub-menu-a/sub-sub-menu-a',
            accessible: true,
          },
          {
            idx: 4,
            menuName: 'Sub Sub Menu B',
            path: '/menu-a/sub-menu-a/sub-sub-menu-b',
            accessible: false,
          },
        ]
      },
      {
        idx: 5,
        menuName: 'Sub Menu B',
        path: '/menu-a/sub-menu-b',
        accessible: true,
        subMenus: []
      },
      {
        idx: 6,
        menuName: 'Sub Menu C',
        path: '/menu-a/sub-menu-c',
        accessible: false,
        subMenus: [
          {
            idx: 7,
            menuName: 'Sub Sub Menu C',
            accessible: true,
            path: '/menu-a/sub-menu-c/sub-sub-menu-c',
          },
          {
            idx: 8,
            menuName: 'Sub Sub Menu D',
            accessible: true,
            path: '/menu-a/sub-menu-c/sub-sub-menu-d',
          },
        ]
      },
    ],
  }
};
