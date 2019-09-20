import { login } from "@/api/user"
import { message } from "antd"
import { SETINFO } from "../actionTypes"
export const setInfo = (body, history) => {
  let { userName, userPwd, checked } = body
  window.localStorage.setItem("tzn_user_name", userName);
  return async (dispatch) => {
    try {
      let res = await login(body)
      if (res.code) {
        if (checked) {
          window.localStorage.setItem("tzn_user_pwd", userPwd);
        } else {
          window.localStorage.setItem("tzn_user_pwd", "");
        }
        document.cookie = `authorization=${res.data.token}`
        setTimeout(() => {
          history.push("/")
        }, 0);
      }
      dispatch({
        type: SETINFO,
        data: {
          ...res.data,
          limitView: res.data.limitView.filter(i => i.routeIsVisible)
        }
      })
    } catch (error) {
      let res = await error.json()
      message.error(res.msg)
    }

  }
}