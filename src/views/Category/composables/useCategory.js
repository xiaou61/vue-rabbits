// 封装分类数据
import {onMounted, ref} from "vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {getCategoryApi} from "@/apis/category";

export function useCategory(){
    //获取数据
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id=route.params.id) => {
        const res = await getCategoryApi(id)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())

//路由参数变化的时候，可以把分类数据接口重新发送
    onBeforeRouteUpdate((to)=>{
        getCategory(to.params.id)
    })
    return{
        categoryData
    }
}