import { createApp } from 'vue'
import App from '@/App.vue'
import { store } from '@/store'
import { setupI18n } from '@/i18n'
import enUS from '@/locales/en-US.yml'
import zhCN from '@/locales/zh-CN.yml'

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

app.use(i18n)
app.use(store)

window['CloudRain'] = app.mount('#app')
