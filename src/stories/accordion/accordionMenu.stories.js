import {AccordionMenu} from '@';

export default {
    title: 'Accordion/AccordionMenu',
    component: AccordionMenu,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args) => ({
    components: { AccordionMenu },
    setup() { return { args }; },
    template: `
      <AccordionMenu v-bind="args">
        <div>
          Accordion Content
        </div>
        </AccordionMenu>
    `,
});

export const Default = Template.bind({});
Default.args = {
  title: "Accordion Title",
  titleBold: true
};
