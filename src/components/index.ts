import type { App, Component } from 'vue'
import SvgIcon from './SvgIcon/SvgIcon.vue'

const allGlobalComponents: Record<string, Component> = {
  SvgIcon
}
export default {
  install(app: App) {
    Object.keys(allGlobalComponents).forEach((name) => {
      app.component(name, allGlobalComponents[name])
    })
  }
}
