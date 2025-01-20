import {SNavi} from '@';
import { ref } from 'vue';

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
    setup() {
        const selectedProject = ref(args.selectedProject);

        const onChangeProject = (project) => {
            selectedProject.value = project;
        };

        return {
            args,
            selectedProject,
            onChangeProject
        };
    },
    template: `
      <div :style="{padding: '24px 48px', height: '500px', border: '1px solid #eee'}">
        <SNavi
            v-bind="args"
            :selected-project="selectedProject"
            @change:project="onChangeProject"
        />
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

export const WithProjectDependency = Template.bind({});
WithProjectDependency.args = {
  serviceName: 'Service A',
  useProject: true,
  selectedProject: { projectId: 0, projectName: '전체' },
  projectList: [
    { projectId: 1, projectName: 'Project A' },
    { projectId: 2, projectName: 'Project B' }
  ],
  menuPath: {
    idx: 1,
    menuName: 'Menu A',
    path: '/menu-a',
    accessible: true,
    subMenus: [
      {
        idx: 2,
        menuName: 'Project Menu',
        path: '/menu-a/project-menu',
        accessible: true,
        subMenus: [
          {
            idx: 3,
            menuName: 'Project Required Menu',
            path: '/menu-a/project-menu/required',
            accessible: true,
            dependency: 'PROJECT'  // 프로젝트 선택이 필요한 메뉴
          },
          {
            idx: 4,
            menuName: 'Normal Menu',
            path: '/menu-a/project-menu/normal',
            accessible: true,
            dependency: null  // 프로젝트 선택이 필요없는 메뉴
          }
        ]
      }
    ]
  },
  dependencyTooltipMessage: '프로젝트를 선택해주세요'
};
