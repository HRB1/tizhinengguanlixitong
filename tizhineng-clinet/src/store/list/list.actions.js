import request from "@/utils/request"
import {} from "../actionTypes"
export const getList=(order)=>{
    //可以返回函数
    // return (dispatch)=>{
    //     dispatch({
    //         type: SETLIST,
    //         all:res.data
    //     })
    // }

    // 直接返回actions对象
    // return {
    //     type: SETLIST,
    //     all:[]
    // }

    //可以返回promise
    // return request.get("").then(res=>res.data)
}