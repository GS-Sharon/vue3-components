import {App} from 'vue'
import mChooseIcon from "./mChooseIcon/index";
import mAreaChoose from './areaChoose/index'
import mNotification from './notification/index'
import mlist from './list/index'
import mMenu from './menu'

const components = [
  mChooseIcon,
  mAreaChoose,
  mNotification,
  mlist,
  mMenu
]

export default {
  install(app:App) {
    components.forEach(comp => {
      app.use(comp)
    })
  }
}