
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//引入初始化样式文件
import '@/styles/common.scss'
//引入懒加载并且注册
import {lazyPlugin} from "@/directives";
//引入全局组件插件
import { componentPlugin } from "@/components";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App)
const pinia=createPinia()

app.use(pinia)
//注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')


