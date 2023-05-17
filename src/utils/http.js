import {ElMessage} from "element-plus";
import 'element-plus/theme-chalk/el-message.css'
import {useUserStore} from "@/stores/user";
import Router from "@/router";
//axios基础的封装
import axios from "axios";

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
});
// axios请求拦截器


httpInstance.interceptors.request.use(config => {
    //pinia里获取token数据
    const userStore = useUserStore()
    //按照后端要求拼接数据
    const token = userStore.userInfo.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    const userStore = useUserStore()
    //统一错误提示
    ElMessage({
        type: 'warning',
        message: e.response.data.message
    })
    //401token失效处理
    //清除本地用户数据
    //跳转到登录页
    if (e.response.status===401){
        userStore.clearUserInfo()
        Router.push('/login')
    }
    return Promise.reject(e)
})

export default httpInstance;