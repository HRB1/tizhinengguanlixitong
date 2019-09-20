import { SETINFO } from "../actionTypes"
export default (state = JSON.parse(window.sessionStorage.getItem("userInfo")) || {
    identityName: "",
    limitView: [],
    userName: ""
}, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    let returnValue = null
    switch (action.type) {
        case SETINFO:
            Object.keys(newState).forEach(i => {
                newState[i] = action.data[i]
            })
            window.sessionStorage.setItem("userInfo", JSON.stringify(newState))
            returnValue = newState
            break;
        default:
            returnValue = state
            break;
    }
    return returnValue
}