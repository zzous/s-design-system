import {SHeader} from '@/components';

export default {
    title: 'Layout/SHeader',
    component: SHeader,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args) => ({
    components: { SHeader },
    setup() { return { args }; },
    template: `
        <div :style="{padding: '24px 48px'}">
          <SHeader :userInfo="args.userInfo" :user-menus="args.userMenus" :isLoggedIn="args.isLoggedIn" :service-menus="args.serviceMenus" :active-menu-code="args.activeMenuCode">
          <template #side-menu-footer>
                <v-list-item class="side-menu">
                <v-list-item-title>
                    P-Cloud
                    <v-icon size="small">mdi-exit</v-icon>
                </v-list-item-title>
                </v-list-item>
            </template>
          </SHeader>
        </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
    isLoggedIn: true,
    serviceMenus: [
      { menuName: '데브옵스', menuNameKr: '데브옵스', menuCode: 'DEVOPS', accessible: true, viewable: true },
      { menuName: '인프라 관리', menuNameKr: '인프라 관리', menuCode: 'INFRA_MENAGEMENT', accessible: true, viewable: true },
    ],
    activeMenuCode: 'DEVOPS',
    userInfo: {
        name: 'UserA',
    },
    userMenus: [
        { title: "Menu1", value: 'Menu1' },
        { title: "Menu2", value: 'Menu2' },
        { title: "Menu3", value: 'Menu3' },
    ],
};
