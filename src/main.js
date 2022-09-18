import { createApp } from 'vue'
import App from '@/App.vue'
import { createStore } from '@/store'
import VueAnimXYZ from '@animxyz/vue3'
import { setupI18n } from '@/i18n'
import enUS from '@/locales/en-US.yml'
import zhCN from '@/locales/zh-CN.yml'
import VueNativeSock from 'vue-native-websocket-vue3';

const i18n = setupI18n({
  globalInjection: true,
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN
  }
})

const app = createApp(App)
const store = createStore(app)

app.use(i18n)
app.use(store)
app.use(VueAnimXYZ)

let websocketUrl = process.env.VUE_APP_WEBSOCKET_URL
// eslint-disable-next-line no-undef
if (typeof config !== 'undefined' && config.VUE_APP_WEBSOCKET_URL) {
  // eslint-disable-next-line no-undef
  websocketUrl = config.VUE_APP_WEBSOCKET_URL
}
app.use(VueNativeSock, websocketUrl, {
  store: store,
  connectManually: true,
  "reconnection": true,
  "reconnectionAttempts": 10,
  "reconnectionDelay": 3000,
  format: 'json',
})
app.mount('#app')

export default {
  app
}
