import {App} from 'vue'
import mAreaChoose from "./src/index.vue"

export default {
  // 单独引入UI组件，app.use要求组件要导出一个install方法或者带有install方法的对象
  install(app: App) {
    app.component('m-area-choose', mAreaChoose)
  }
}