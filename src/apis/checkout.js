import httpInstance from "@/utils/http";

export const getCheckInfoApi = () => {
    return httpInstance({
        url : "/member/order/pre"
    })
}