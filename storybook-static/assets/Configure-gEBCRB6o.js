import{ae as e,af as r}from"./index-Bsx09CiC.js";import{u as s}from"./index-CPwxFlgY.js";import"./iframe-C4GLkdfX.js";import"../sb-preview/runtime.js";import"./index-DZVNkkTA.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Documents"}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsxs(n.h1,{id:"-storybook",children:["#","name"," StoryBook"]}),e.jsx("br",{}),e.jsx(n.h2,{id:"-install-library",children:"🎁 Install Library"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:"npm install #{`name`}\nyarn add #{`name`}\n"})}),e.jsx(n.h2,{id:"-initialize-vuetifymainjs",children:"🎁 Initialize Vuetify(main.js)"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { customTheme } from '#{\`name\`}';

// styles
import '@mdi/font/css/materialdesignicons.css';
import '#{\`name\`}/lib/index.css'; // Vuetify 스타일 포함

const Vuetify = createVuetify({components, directives, theme: { ...customTheme }});
createApp(App).use(Vuetify).mount('#app')
`})})]})}),`
`,e.jsx("style",{children:`
  .sb-container {
    margin-bottom: 48px;
  }
  `})]})}function u(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{u as default};
