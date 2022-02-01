import { Component, createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import ElementPlus, { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import {toLine} from './utils'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
for(let i in Icons) {
  // app.component(`el-icon${toLine(i)}`, (Icons as any)[i])
  app.component(i, (Icons as any)[i])
}
app.config.globalProperties.$message = ElMessage
app.mount('#app')
