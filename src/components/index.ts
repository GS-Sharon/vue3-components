import {App} from 'vue'
import mChooseIcon from "./mChooseIcon/index";
import mAreaChoose from './areaChoose/index'

const components = [
  mChooseIcon,
  mAreaChoose
]

export default {
  install(app:App) {
    components.forEach(comp => {
      app.use(comp)
    })
  }
}