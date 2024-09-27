import AvatarComponent from './avatar/AvatarComponent.vue'
import DefaultButtonComponent from './button/DefaultButtonComponent.vue'
import TextCheckBoxInputComponent from './input/TextCheckBoxInputComponent.vue'
import ShellScriptInputComponent from './input/ShellScriptInputComponent.vue'


export default function setComponents(app) {
  app.component('SAvatar', AvatarComponent)
  app.component('SButton', DefaultButtonComponent)
  app.component('STextCheckBoxInput', TextCheckBoxInputComponent)
  app.component('SShellScriptInput', ShellScriptInputComponent)

  return app
}
