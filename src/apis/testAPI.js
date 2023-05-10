import Http from "@/utils/http";

export function getCategory(){
   return  Http({
        url:'home/category/head'
    })
}
