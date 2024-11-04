import"./_plugin-vue_export-helper-8BDPYiDt.js";import{e as s}from"./GlobalProgress-OdYs9LzK.js";import"./vue.esm-bundler-BJMChJLR.js";const i={title:"Images/Avatar",component:s,tags:["autodocs"],argTypes:{}},p=(a,{argTypes:o})=>({components:{Avatar:s},props:Object.keys(o),setup(){return console.log(a),{args:a}},template:`
      <div :style="{ background: '#525252', padding: '16px' }">
        <Avatar v-bind="args" />
      </div>
    `}),e=p.bind({});e.args={user:{name:"사용자 A"},menuItems:[{title:"Menu1",value:"Menu1"},{title:"Menu2",value:"Menu2"},{title:"Menu3",value:"Menu3"}]};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  components: {
    Avatar
  },
  props: Object.keys(argTypes),
  setup() {
    console.log(args);
    return {
      args
    };
  },
  template: \`
      <div :style="{ background: '#525252', padding: '16px' }">
        <Avatar v-bind="args" />
      </div>
    \`
})`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,i as default};
