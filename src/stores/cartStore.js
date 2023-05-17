//封装购物车模块
import {defineStore} from "pinia";
import {ref} from "vue";
export const useCartStore=defineStore('cart',()=>{
    //定义state
    const cartList=ref([])
    //定义action
    const addCart = (goods) => {
        //通过匹配传递过来的商品对象中的skuid能不能再cartlist中找到
        //添加过 count+1
        const item=cartList.value.find((item)=>goods.skuId===item.skuId)
        if (item){
            //找到了
            item.count++
        }else {
            //没有添加过--直接push
            cartList.value.push(goods)
        }

    }
    //删除购物车
    const delCart = (skuId) => {
      //思路 找到要删除项的下标值--splice
        //使用数组的过滤方法--filter
        const index = cartList.value.findIndex((item)=>skuId===item.skuId);
        cartList.value.splice(index,1)
    }
    return{
        cartList,
        addCart,
        delCart
    }
},
    {
        persist: true
    })