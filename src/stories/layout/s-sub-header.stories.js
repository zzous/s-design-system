import {SSubHeader} from '@/components';

export default {
    title: 'Layout/SSubHeader',
    component: SSubHeader,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args) => ({
    components: { SSubHeader },
    setup() { return { args }; },
    template: `
      <div>
        <SSubHeader v-bind="args" />
      </div>`,
});

export const Default = Template.bind({});
Default.args = {
  title: '자원 목록',
  listCnt: 50
};

const innerSubTitleTemplate = `
  <div class="view-warpper">
    <SSubHeader v-bind="args" class-name="sub-title" />
  </div>
`;

export const InnerSubTitle = (args) => ({
  components: { SSubHeader },
  setup() { return { args }; },
  template: innerSubTitleTemplate,
});

InnerSubTitle.args = {
  title: '기본 정보',
  showCnt: false
}

InnerSubTitle.parameters = {
  docs: {
    source: {
      code: `<template>${innerSubTitleTemplate}</template>`,
    },
  },
};
