import {App} from 'vue'
import mChooseIcon from "./mChooseIcon/index";
import mAreaChoose from './areaChoose/index'
import mNotification from './notification/index'
import mlist from './list/index'
import mMenu from './menu/index'
import mchooseCity from './chooseCity/index'
import mTable from './table/index'

const components = [
  mChooseIcon,
  mAreaChoose,
  mNotification,
  mlist,
  mMenu,
  mchooseCity,
  mTable
]

export default {
  install(app:App) {
    components.forEach(comp => {
      app.use(comp)
    })
  }
}