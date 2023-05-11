
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


//引入初始化样式文件
import '@/styles/common.scss'
//引入懒加载并且注册
import {lazyPlugin} from "@/directives";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)

app.mount('#app')

