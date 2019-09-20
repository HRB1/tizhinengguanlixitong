import { getDalist } from "@/api/management.js";
import { GETALLLIST, IMPORTLIST, DELETEDA } from "../actionTypes";

//初始获取数据列表
// let defaultList = []; //默认数据
// let size = 0; //总条数
export const getDatalist = (pageid, limit) => {
  return dispatch => {
    // if (defaultList[pageid]) {
    //     dispatch({
    //       type: GETALLLIST,
    //       data: defaultList[pageid],
    //       size
    //     });
    //     return;
    // }
    getDalist({ pageid, limit }).then(res => {
      // console.log(res);
      // defaultList[pageid] = res.data.data;
      // size = res.data.size;
      dispatch({
        type: GETALLLIST,
        data: res.data.data,
        size: res.data.size
      });
    });
   
  };
};

//删除档案信息，与后台同步
export const del = id => {
  return dispatch => {
    dispatch({
      type: DELETEDA,
      id
    });
  };
};

//导入文件,添加列表,出现在首位
export const importList = data => {
  return dispatch => {
    dispatch({
      type: IMPORTLIST,
      data
    });
  };
};
