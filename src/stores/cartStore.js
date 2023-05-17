//封装购物车模块
import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useCartStore = defineStore('cart', () => {
        //定义state
        const cartList = ref([])
        //定义action
        const addCart = (goods) => {
            //通过匹配传递过来的商品对象中的skuid能不能再cartlist中找到
            //添加过 count+1
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                //找到了
                item.count++
            } else {
                //没有添加过--直接push
                cartList.value.push(goods)
            }

        }
        //删除购物车
        const delCart = (skuId) => {
            //思路 找到要删除项的下标值--splice
            //使用数组的过滤方法--filter
            const index = cartList.value.findIndex((item) => skuId === item.skuId);
            cartList.value.splice(index, 1)
        }

        //单选功能
        const singleCheck = (skuId, selected) => {
            //通过skuId找到要修改的哪一项，然后把他的selected字段修改
            const item = cartList.value.find((item) => item.skuId === skuId);
            item.selected = selected
        }

        //全选功能
        const allCheck = (selected) => {
            cartList.value.forEach(item => item.selected = selected)
        }


        //计算属性
        //a为每一次累加完以后都会交给a  c为每一项
        //1.总的数量 所有的count和
        const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
        //2.总价   所有的count*price之和
        const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))


        //3.已选择数量
        const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
        //4.已选择商品价钱合计
        const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))

        //是否全选
        const isAll = computed(() => cartList.value.every((item) => item.selected))
        return {
            cartList,
            addCart,
            delCart,
            allCount,
            allPrice,
            singleCheck,
            isAll,
            allCheck,
            selectedCount,
            selectedPrice
        }
    },
    {
        persist: true
    })