import {SAccordionMenu} from '@/components';

export default {
    title: 'Accordion/SAccordionMenu',
    component: SAccordionMenu,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args) => ({
    components: { SAccordionMenu },
    setup() { return { args }; },
    template: `
      <SAccordionMenu v-bind="args">
        <div>
          Accordion Content
        </div>
        </SAccordionMenu>
    `,
});

export const Default = Template.bind({});
Default.args = {
  title: "Accordion Title",
  titleBold: true
};
