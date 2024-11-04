import"./_plugin-vue_export-helper-8BDPYiDt.js";import{d as n}from"./GlobalProgress-OdYs9LzK.js";import"./vue.esm-bundler-BJMChJLR.js";const u={title:"Form/FormItem",component:n,tags:["autodocs"],argTypes:{}},p=(s,{argTypes:o})=>({components:{FormItem:n},props:Object.keys(o),setup(){return{args:s}},template:`
      <FormItem v-bind="args">
        <template #default="{ handleChange, errors }">
          <input type="text" @input="handleChange" placeholder="Enter text" />
        </template>
        <template #outer-append="{ errors }">
          <span class="error-message" v-if="errors">{{ errors[0] }}</span>
        </template>
      </FormItem>
    `}),e=p.bind({});e.args={label:"Label",showLabel:!0,required:!0};var r,t,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  components: {
    FormItem
  },
  props: Object.keys(argTypes),
  setup() {
    return {
      args
    };
  },
  template: \`
      <FormItem v-bind="args">
        <template #default="{ handleChange, errors }">
          <input type="text" @input="handleChange" placeholder="Enter text" />
        </template>
        <template #outer-append="{ errors }">
          <span class="error-message" v-if="errors">{{ errors[0] }}</span>
        </template>
      </FormItem>
    \`
})`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,u as default};
