import AvatarComponent from './images/AvatarComponent.vue'
import DefaultButtonComponent from './button/DefaultButtonComponent.vue'
import TextCheckBoxInputComponent from './input/TextCheckBoxInputComponent.vue'
import ShellScriptInputComponent from './input/ShellScriptInputComponent.vue'
import CustomImagesComponent from './images/CustomImagesComponent.vue'
import CustomDataTableComponent from './table/CustomDataTableComponent.vue'
import ViewHeaderComponent from './ViewHeaderComponent.vue'
import FormItemComponent from './form/FormItemComponent.vue'
import CustomModalComponent from './modal/CustomModalComponent.vue'
import CustomConfirmComponent from './modal/CustomConfirmComponent.vue'


export default function setComponents(app) {
  app.component('SUser', AvatarComponent)
  app.component('SBtn', DefaultButtonComponent)
  app.component('STextCheckBoxInput', TextCheckBoxInputComponent)
  app.component('SShellScriptInput', ShellScriptInputComponent)
  app.component('SImg', CustomImagesComponent)
  app.component('SDataTable', CustomDataTableComponent)
  app.component('SSubHeader', ViewHeaderComponent)
  app.component('SFormItem', FormItemComponent)
  app.component('SConfirm', CustomConfirmComponent)
  app.component('SModal', CustomModalComponent)

  return app
}
