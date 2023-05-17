//管理用户数据相关
import {defineStore} from "pinia"
import {ref} from "vue";
import {loginApi} from "@/apis/user";

export const useUserStore = defineStore('user', () => {
        //定义管理用户数据的state
        const userInfo = ref({})
        //定义获取接口数据的action函数
        const getUserInfo = async ({account, password}) => {
            const res = await loginApi({account, password})
            userInfo.value = res.result
        }

        //退出时清除用户信息
    const clearUserInfo = () => {
      userInfo.value={}
    }

        //以对象的格式把state和action给return
        return {
            userInfo,
            getUserInfo,
            clearUserInfo
        }
    },
    {
        persist: true
    })