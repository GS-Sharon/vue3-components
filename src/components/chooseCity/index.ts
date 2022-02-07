import {App} from 'vue'
import mchooseCity from './src/index.vue'

export default {
  install(app: App) {
    app.component('m-choose-city', mchooseCity)
  }
}