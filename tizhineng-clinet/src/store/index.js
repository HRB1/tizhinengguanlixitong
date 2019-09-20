import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
// import logger from "redux-logger"
import promise from "redux-promise"
import user from "./user/user.reducer"
import management from "./management/management.reducer";

let reducer=combineReducers({
  user,
  management
})

export default createStore(reducer,applyMiddleware(thunk,promise))