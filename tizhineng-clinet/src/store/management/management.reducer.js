import {GETALLLIST,IMPORTLIST,DELETEDA} from "../actionTypes"
//给table字段添加key
const addkey=(data)=>{
    return data.map(item=>{
        if(item.key){
            return {...item}
        }else{
            return {...item,key:item.id}
        };
    })
}
const management=(state={alllist:[],allcount:0},action)=>{
    let newState=JSON.parse(JSON.stringify(state))
    switch(action.type){
        //初始获取数据
        case GETALLLIST:{
            let {data,size}=action;
            newState.alllist= addkey(data);
            newState.allcount=size;
            return newState;
        }
        //导入文件添加数据
        case IMPORTLIST:{
            let {data}=action;
            newState.alllist=newState.alllist.concat(addkey(data));
            return newState;
        }
        //删除档案
        case DELETEDA:{
            let {id}=action;
            id.forEach(item=>{
              let ind=newState.alllist.findIndex(items=>items.id===item)
              if(ind!==-1){
                 newState.alllist.splice(ind,1);
                 newState.allcount--;
              }
            })
           
            return newState
        }
        default:
            return state
    }
}

export default management;