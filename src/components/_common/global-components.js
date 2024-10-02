import AvatarComponent from './images/AvatarComponent.vue'
import DefaultButtonComponent from './button/DefaultButtonComponent.vue'
import TextCheckBoxInputComponent from './input/TextCheckBoxInputComponent.vue'
import ShellScriptInputComponent from './input/ShellScriptInputComponent.vue'
import CustomImagesComponent from './images/CustomImagesComponent.vue'
import CustomDataTableComponent from './table/CustomDataTableComponent.vue'


export default function setComponents(app) {
  app.component('SUser', AvatarComponent)
  app.component('SBtn', DefaultButtonComponent)
  app.component('STextCheckBoxInput', TextCheckBoxInputComponent)
  app.component('SShellScriptInput', ShellScriptInputComponent)
  app.component('SImg', CustomImagesComponent)
  app.component('SDataTable', CustomDataTableComponent)

  return app
}
