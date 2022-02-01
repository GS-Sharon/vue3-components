import { Component, createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import ElementPlus, { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import {toLine} from './utils'
import mUI from './components'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
for(let i in Icons) {
  // app.component(`el-icon${toLine(i)}`, (Icons as any)[i])
  app.component(i, (Icons as any)[i])
}
app.use(mUI)
app.config.globalProperties.$message = ElMessage
app.mount('#app')
