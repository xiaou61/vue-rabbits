import {ref} from 'vue'
import { defineStore } from 'pinia'
import {getCategoryAPI} from "@/apis/layout";


export const useCategoryStore = defineStore('category', () => {
    //state导航列表数据
    const categoryList=ref([])
//获得导航数据的方法
    const getCategory = async () => {
        const res= await getCategoryAPI()
        categoryList.value=res.result
    }

    return{
        categoryList,
        getCategory
    }
})
