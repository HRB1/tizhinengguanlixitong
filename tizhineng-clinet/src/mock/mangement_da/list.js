import Mock from "mockjs";
//档案列表
let bmlist=["技术部","人事部","销售部","后勤部"]
let ceo=["产品经理","产品总监","项目主管","项目总监","普通员工"]
let xllist=["大学本科","大学专科","中专"]
let dalist=Mock.mock({
    "alllist|60":[
        {
            "key|+1": 1,
            "ids|+1":1,
            "staffName": "@cname",
            "staffId|+1":1,
            "department|1":bmlist,
            "position|1":ceo,
            "salary|1000-10000":1000,
            "tel":"1202333323333" ,
            "isQuit":["是","否"],
            "quitReason":"@ctitle",
            "IDNum":"1306302343423424",
            "entryTime":'@date("yyyy-MM-dd")',
            "education|1":xllist,
            "nativePlace":"@city(true)",
            "nation":"汉",
            "isMarray|1":["未婚","已婚"],
            "nativeType|1":["农村","城镇"],
            "address":"@city(true)",
            "classId|10":"1",
            "gartenId":"@cname",
            "classNum|10-200":10
          }
    ]
})

Mock.mock("/api/dalist","post",(config)=>{
    let {pages,limit=20}=JSON.parse(config.body);
    return {
            datas:dalist.alllist.slice((pages-1)*limit,(pages*limit)),
            allcount:dalist.alllist.length
        };
})
//删除信息
Mock.mock("/api/delete","post",(config)=>{
    let {id}=JSON.parse(config.body);
    let ind=dalist.alllist.findIndex(item=>item.ids===id);
    if(ind!==-1){
        dalist.alllist.splice(ind,1);
        return {
            allcount:dalist.alllist.length,
            code:1,
            msg:"删除成功"
        }
    }else{
        return {
            code:0,
            msg:"删除失败"
        }
    }
})