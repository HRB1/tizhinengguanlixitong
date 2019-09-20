import React, { Component } from 'react'
import { Input, Button, Table, Modal } from "antd";
import Opertion from "../component/operation"
const { confirm } = Modal;
export default class index extends Component {
   state={columns: [
    {
      title: "姓名",
      dataIndex: "name",
      className: "listOne"
    },
    {
      title: "序号",
      dataIndex: "xh"
    },
    {
      title: "部门",
      dataIndex: "bm"
    },
    {
      title: "职位",
      dataIndex: "zw",
    },
    {
      title: "上级",
      dataIndex: "sj"
    },
    {
      title: "入职时间",
      dataIndex: "rzsj"
    },{
      title:"手机号",
      dataIndex:"sjh"
    },{
      title:"备注",
      dataIndex:"bz"
    }
  ],
  datas: [
    {
      key: "1",
      name: "John Brown",
      xh: 32,
      bm: "技术部门",
      zw:"项目经理",
      sj:"李建华",
      rzsj:"2016.10.9",
      sjh:"152312131222",
      bz:"这是我的备注",
    }
  ]};
  render() {
    let {columns,datas}=this.state;
    return (
      <div className="yggl_wrap">
        <h2>分配管理</h2> 
        <div className="yggl_serch">
            <Input className="" size="small" placeholder="small "/><Button>查询</Button>
        </div>
        <div className="operation">
        <Opertion 
          showConfirm={this.showConfirm.bind(this)}
          addfn={this.addfn.bind(this)}
          closes={this.closes.bind(this)}>
          添加的内容 
          </Opertion>
        </div>
        <div className="yggl_list">
            <Table columns={columns} dataSource={datas} bordered  size="middle" />
        </div>
      </div>
    )
  }
    //确认框
    showConfirm = () => {
      confirm({
        title: "删除信息",
        content: "确定删除本条信息吗?",
        okText:"确定",
        cancelText:"取消",
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    };
    addfn(){
      console.log("点击添加")
    }
    closes(){
      console.log("点击关闭")
    }
}
