//定义懒加载插件

import {useIntersectionObserver} from "@vueuse/core";

export const lazyPlugin={
    install(app) {
        //懒加载指令逻辑
        //定义全局指令
         app.directive('img-lazy',{
            mounted(el,binding){
                //el代表绑定的那个元素 相当于img
                //binding ：binding.value 指令等于号后面绑定的表达式的值 图片url
                console.log(el,binding.value)
            const {stop} =  useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        console.log(isIntersecting)

                        if (isIntersecting){
                            //进入了视口区域
                            el.src=binding.value
                            stop()
                        }
                    },
                )
            }
        })
    }
}