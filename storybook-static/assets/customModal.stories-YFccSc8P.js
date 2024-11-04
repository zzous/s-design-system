import"./_plugin-vue_export-helper-8BDPYiDt.js";import{C as a}from"./GlobalProgress-OdYs9LzK.js";import"./vue.esm-bundler-BJMChJLR.js";const p={title:"Modal/CustomModal",component:a,tags:["autodocs"],argTypes:{}},r=n=>({components:{CustomModal:a},setup(){return{args:n}},template:`
      <CustomModal v-bind="args">
        Modal Contents
      </CustomModal>
    `}),o=r.bind({});o.args={modelValue:!1,modalWidth:"760px",title:"Modal Title",teleportId:"storybook-root"};var t,e,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    CustomModal
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <CustomModal v-bind="args">
        Modal Contents
      </CustomModal>
    \`
})`,...(s=(e=o.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const u=["Default"];export{o as Default,u as __namedExportsOrder,p as default};
