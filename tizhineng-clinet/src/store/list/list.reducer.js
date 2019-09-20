import { } from "../actionTypes"
//reducer函数
export default (state={
    //默认值
},action)=>{
    let newState=JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "":
            
            break;
    
        default:
            return state
            break;
    }
}