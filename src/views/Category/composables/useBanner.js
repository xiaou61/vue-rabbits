// 封装轮播图
import {onMounted, ref} from "vue";
import {getBannerAPI} from "@/apis/home";

export function useBanner(){
    //获取banner
    const bannerList = ref([])

    const getBanner = async () => {
        const res = await getBannerAPI({
            distributionSite: '2'
        })
        bannerList.value = res.result
    }
    onMounted(() => {
        getBanner()
    })

    return{
        bannerList
    }
}