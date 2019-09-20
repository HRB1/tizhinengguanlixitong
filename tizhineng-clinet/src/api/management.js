import {axios} from "@/utils/axios";
//获取初始数据
export const getDalist=(data)=> axios.get("/management/alldata",{params:{...data}})

//导入文件
export const importXlsx=(data)=>axios.post("/management/importXlsx",data)
//下载文件""
export const downLoadXlsx=(url,data)=>axios({
    url,
    method:"POST",
    data,
    responseType:"blob"
})
//删除档案
export const deleteDalist=(data)=>axios.post("/management/removedata",data)

//添加档案
export const addDalist=(data)=>axios.post("/management/adddata",data)