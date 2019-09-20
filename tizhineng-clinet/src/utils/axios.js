import axios from "axios";
import { message } from "antd";
import Cookie from "js-cookie"
const httpAxios = axios.create({
  timeout: 2000
});
//监听请求
httpAxios.interceptors.request.use(
  config => {
    return {
      ...config,
      //讲用户标识传递
      headers: {
        ...config.headers,
        authorization: Cookie.get("authorization"),
        'api-request':"yes"
      }
    };
  },
  error => {
    return Promise.reject(error);
  }
);
//监听响应
httpAxios.interceptors.response.use(
  res => {
    const { code } = res.data;
    //获取响应结果
    if (code) {
      return res.data;
    }
    if(res.data instanceof Blob){
        return res.data;
    }
    message.error("请求错误");
    return Promise.reject(res.data);
  },
  error => {
    return Promise.reject(error);
  }
);

export { httpAxios as axios };
